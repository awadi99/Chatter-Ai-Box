📦 Chatter AI Box

A real-time chat application built using the MERN stack, integrated with Chatter AI, live message translation, JWT authentication, and email invitations using Resend.

🚀 Features
🔥 Real-Time Messaging

Built using Socket.io

Messages update instantly without refresh

Typing indicators, online/offline status

🤖 Chatter AI Integration

Ask any question inside chat

Smart AI-generated responses

Helpful for productivity, coding, learning, etc.

🌍 Live Message Translation

Every user can choose their preferred language

Messages automatically translate in real time

Great for friends/team chatting across different languages

🔐 Secure Authentication

JWT Token-based login & registration

Password hashing using bcrypt

Refresh token mechanism

Protected backend routes

✉️ Email Invitation System

Invite users via email

Integrated with Resend API

Beautiful invite templates

Accept/Reject invitation system

📁 Chat & Contact Management

Create chats and groups

Search users

Add/remove members

Unread message counts

💻 Tech Stack

Frontend:

React.js

Redux Toolkit

Axios

Tailwind CSS

Socket.io Client

Backend:

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Socket.io

Other Integrations:

Resend (Email invites)

Chatter AI API

Cloudinary (optional for media uploads)

📂 Project Structure
Chatter-Ai-Box/
 ├── client/        # React frontend
 ├── server/        # Node/Express backend
 ├── .env           # Environment variables
 ├── README.md
 └── package.json

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/awadi99/Chatter-Ai-Box.git
cd Chatter-Ai-Box

2️⃣ Install Backend Dependencies
cd server
npm install

3️⃣ Install Frontend Dependencies
cd ../client
npm install

🔧 Environment Variables

Create a .env file inside server/:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
RESEND_API_KEY=your_resend_key
CHATTER_AI_KEY=your_chatter_ai_key
CLIENT_URL=http://localhost:5173

▶️ Run the App
Start Backend:
cd server
npm start

Start Frontend:
cd client
npm run dev

🧪 Future Improvements

Voice messages

Video/Audio calling

Dark/Light theme switch

Chat backup & export

AI summarization for chats

🤝 Contributing

Pull requests are welcome! Open an issue for suggestions or bugs.

📜 License

MIT License – free to use, modify, and distribute.
