import { MockEventSourcedEntity } from "./testkit.js";
import { expect } from "chai";
import chatroom from "../src/chatroom.js";

describe("ChatRoomEntity", () => {
  const entityId = "entityId";
  
  describe("AddMessage", () => {
    it("should...", () => {
      const entity = new MockEventSourcedEntity(chatroom, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("AddMessage", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
  
  describe("GetMessages", () => {
    it("should...", () => {
      const entity = new MockEventSourcedEntity(chatroom, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("GetMessages", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });
  });
});