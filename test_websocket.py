import asyncio
import websockets
import json

async def test_websocket():
    uri = "wss://expert-acorn-7v745r9qvgvcprjj-8001.app.github.dev/ws/echo/"
    try:
        print(f"Connecting to {uri}...")
        async with websockets.connect(uri) as websocket:
            # Send a test message
            message = {"message": "Hello, WebSocket!"}
            print("Sending message:", message)
            await websocket.send(json.dumps(message))

            # Wait for a response
            response = await websocket.recv()
            print("Received from server:", response)
    except Exception as e:
        print("WebSocket test failed:", e)

# Run the test
asyncio.run(test_websocket())
