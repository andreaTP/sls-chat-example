import akkaserverless from "@lightbend/akkaserverless-javascript-sdk";
const EventSourcedEntity = akkaserverless.EventSourcedEntity;

/**
 * Type definitions.
 * These types have been generated based on your proto source.
 * A TypeScript aware editor such as VS Code will be able to leverage them to provide hinting and validation.
 * 
 * State; the serialisable and persistable state of the entity
 * @typedef { import("../lib/generated/chatroomentity").State } State
 * 
 * Event; the union of all possible event types
 * @typedef { import("../lib/generated/chatroomentity").Event } Event
 * 
 * ChatRoomEntity; a strongly typed extension of EventSourcedEntity derived from your proto source
 * @typedef { import("../lib/generated/chatroomentity").ChatRoomEntity } ChatRoomEntity
 */

/**
 * @type ChatRoomEntity
 */
const entity = new EventSourcedEntity(
  [
    "myentity_api.proto",
    "myentity_domain.proto"
  ],
  "com.example.ChatRoomEntity",
  "ChatRoom",
  {
    includeDirs: ["./proto"],
    serializeFallbackToJson: true
  }
);

const AllMessages = entity.lookupType("com.example.AllMessages");
const ApiMessage = entity.lookupType("com.example.Message");
const Message = entity.lookupType("com.example.domain.Message");
const MessageAdded = entity.lookupType("com.example.domain.MessageAdded");

entity.setInitial(entityId => ({messages: []}));

entity.setBehavior(state => ({
  commandHandlers: {
    AddMessage: addMessage,
    GetMessages: getMessages
  },
  eventHandlers: {
    MessageAdded: messageAdded,
  }
}));

function ext(state) {
  return AllMessages.create({
    messages: state.messages.map( msg => ApiMessage.create({ user: msg.user, text: msg.text }))
  })
}

function addMessage(command, state, ctx) {
  ctx.emit(MessageAdded.create({ user: command.user, text: command.text }));
  return {};
}

function messageAdded(message, state) {
  state.messages.push(message);
  return state;
}

function getMessages(command, state, ctx) {
  return ext(state);
}

export default entity;