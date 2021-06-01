
ghz --insecure \
  --call com.example.ChatRoomEntity.AddMessage \
  -c 10 -n 10 --rps 200 \
  -d '{"roomId": "1", "user": "{{randomString 8 }}", "text": "{{randomString 1000000 }}"}' \
  localhost:9000



ghz --insecure \
  --call com.example.ChatRoomEntity.AddMessage \
  -c 10 -n 10 --rps 200 \
  -d '{"roomId": "1", "user": "{{randomString 8 }}", "text": "{{randomString 1000 }}"}' \
  long-boat-6553.us-east1.apps.akkaserverless.io:80

