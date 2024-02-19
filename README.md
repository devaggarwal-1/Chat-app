### MERN Real Time Chat App | JWT, Socket.io
This project is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can register, log in, and send messages to each other in real-time.

### [Live Demo](https://chat-app-utnq.onrender.com)

### Some Features:

-  Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
-  Authentication && Authorization with JWT
-  Real-time messaging with Socket.io
-  Online user status (Socket.io and React Context)
-  Global state management with Zustand
-  Error handling both on the server and on the client

### Prerequisites:
- Node.js and npm installed on your machine.
- MongoDB Atlas account or a local MongoDB server set up.

### Getting Started:

Clone the repository:
```shell
git clone https://github.com/yourusername/chat-app.git
```

Setup .env file:
```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

Build the app:

```shell
npm run build
```

Start the app:

```shell
npm start
```
