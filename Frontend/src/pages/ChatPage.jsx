import { ToastContainer, Zoom } from "react-toastify";
import Profile from "../components/Profile.jsx";
import Contacts from "../components/Contacts.jsx";
import { } from '../../redux/slice.js';
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
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  const Activity = useSelector((state) => state.Activity.activity);

  return (
    <div className="animate-border relative w-full max-w-7xl mx-auto p-2 min-h-[90vh] md:min-h-0 md:h-full">
      <div className="flex flex-col md:flex-row h-full md:min-h-[85vh] ">

        {/* Left Section - Contacts/Chats List */}
        <div className="w-full md:w-80 lg:w-96 flex flex-col gap-3 md:h-full border-b md:border-b-0 md:border-r border-gray-600/50 pr-4 pb-4 md:pb-0">
          <Profile />

          <div className="flex gap-3 sticky top-0 bg-gray-900/90 z-10 pt-1 pb-1"> {/* Sticky for better mobile UX */}
            <button
              onClick={() => setAct("contacts")}
              className={`w-full border text-sm font-medium px-3 py-2 rounded-2xl text-center transition-all
                ${active === "contacts" ? "bg-violet-500 text-white" : "border-violet-500 text-violet-400"}
                hover:bg-violet-600 hover:text-white`}
            >
              Contacts
            </button>
            <button
              onClick={() => setAct("chats")}
              className={`w-full border text-sm font-medium px-3 py-2 rounded-2xl text-center transition-all
                ${active === "chats" ? "bg-violet-500 text-white" : "border-violet-500 text-violet-400"}
                hover:bg-violet-600 hover:text-white`}
            >
              Chats
            </button>
          </div>

          {/* Scrollable content - Now takes up remaining vertical space */}
          <div className="mt-1 overflow-y-auto flex-1">
            {active === "contacts" && <Contacts />}
            {active === "chats" && <Chats />}
          </div>
        </div>

        {/* Middle Section - Toast Container (Removed for cleaner responsiveness, ToastContainer should generally be outside the main flex content) */}
        {/* We keep the ToastContainer, but move it out of the main flow if it's not meant to take up space. 
            For now, I'll place the ToastContainer outside the flex-row structure in the main return for better positioning.
            I will keep the existing border styling for visual separation, but make the middle section zero-width.
            If you want a visible separator without it being a separate div, you can keep the border on the left div.
        */}
        {/* The original Middle Section was just for the border and ToastContainer. I've moved the border to the Left Section for separation. */}
        
        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Zoom}
        />

        {/* Right Section - Chat/Input Area */}
        {/* This now takes up all remaining available space (flex-1) */}
        <div className="p-4 h-full flex-1 flex flex-col justify-between">
          <div className="flex-1 overflow-y-auto">
            {active === "chats" && Activity === "ai" ? (
              <AiChats />
            ) : active === "chats" && Activity === "user" ? (
              <Input />
            ) : active === "contacts" && Activity === "Contact" ? (
              <Input />
            ) : active === "contacts" || active==="chats" ? (
              <Animations/>
            ) : null}
          </div>
          {/* Note: If Input is the chat box, it usually sits at the bottom. 
             If it is the whole chat window, the previous logic is fine. 
             I've made the container `justify-between` and the content div `flex-1 overflow-y-auto` 
             to prepare for a fixed input box at the bottom if `Input` is just a text area. 
             If `Input` is the entire chat UI, the existing logic is mostly fine with `flex-1`. 
          */}
        </div>


      </div>
    </div>

  );
}
