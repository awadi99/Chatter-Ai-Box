import { ToastContainer, Zoom } from "react-toastify";
import Profile from "../components/Profile.jsx";
import Contacts from "../components/Contacts.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Chats from "../components/Chats.jsx";
import Input from "../components/Input.jsx";
import { AiChats } from "../components/AiChats.jsx";
import Animations from "../components/Animation.jsx";

export default function ChatPage() {
  const user = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [active, setAct] = useState("contacts");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const Activity = useSelector((state) => state.Activity.activity);

  return (
    <div className="animate-border relative w-full max-w-7xl min-h-screen mx-auto p-3">
      <div className="flex flex-col md:flex-row gap-4 h-full">

        {/* LEFT SECTION */}
        <div className="w-full md:w-[280px] flex flex-col gap-4">
          <Profile />

          {/* Contacts / Chats Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setAct("contacts")}
              className={`w-full border text-sm font-medium px-3 py-2 rounded-2xl 
              transition-all ${
                active === "contacts"
                  ? "bg-violet-500 text-white"
                  : "border-violet-500 text-violet-400"
              }`}
            >
              Contacts
            </button>

            <button
              onClick={() => setAct("chats")}
              className={`w-full border text-sm font-medium px-3 py-2 rounded-2xl 
              transition-all ${
                active === "chats"
                  ? "bg-violet-500 text-white"
                  : "border-violet-500 text-violet-400"
              }`}
            >
              Chats
            </button>
          </div>

          {/* SCROLLABLE CONTACT LIST */}
          <div className="flex-1 overflow-y-auto pr-1">
            {active === "contacts" && <Contacts />}
            {active === "chats" && <Chats />}
          </div>
        </div>

        {/* MIDDLE SECTION — Toast */}
        <div className="hidden md:flex items-start justify-center px-2">
          <ToastContainer
            position="top-center"
            autoClose={1000}
            theme="dark"
            transition={Zoom}
          />
        </div>

        {/* RIGHT SECTION — Main Card */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="w-[95%] md:w-[900px] lg:w-[1050px]
                       h-[550px] md:h-[650px] 
                       rounded-3xl border border-gray-700/40 
                       bg-[#080b1a]/60 backdrop-blur-xl
                       shadow-xl overflow-hidden flex justify-center items-center"
          >
            {active === "chats" && Activity === "ai" ? (
              <AiChats />
            ) : active === "chats" && Activity === "user" ? (
              <Input />
            ) : active === "contacts" && Activity === "Contact" ? (
              <Input />
            ) : (
              <Animations />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
