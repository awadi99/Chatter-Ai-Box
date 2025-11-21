import {io} from 'socket.io-client';

export const socket = io ("https://chatter-ai-box-backend.onrender.com",{
    withCredentials:true,
    autoConnect:false,
    transports:["websocket"],
});
