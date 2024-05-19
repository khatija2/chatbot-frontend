import React, {useState, FormEvent} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import { IoMdSend } from "react-icons/io";
import toast from "react-hot-toast"
import { LoadingSpinner } from "./loading";

type chatProps = {
  closeChatModal:  () => void;
}

const ChatModal: React.FC<chatProps> = ({closeChatModal}) => {

  const [botMessage, setBotMessage] = useState("")
  const [clientMessage, setClientMessage] = useState("")
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'I am a pharmacist chatbot. How may I assist?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);


const onSubmit = (e: FormEvent) => {
  e.preventDefault()
  if (clientMessage !== "" && isLoading === false) {
   const newMessages = [...messages, { sender: 'client', text: clientMessage }];
   setMessages(newMessages);
   const clientSendMessage = clientMessage
   setIsLoading(true);
   setClientMessage("")
   fetch("http://localhost:8080/ask_chatbot", {
      method: 'POST',
      body: JSON.stringify({
        message: clientSendMessage
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      setBotMessage(data.message);
      setMessages([...newMessages, { sender: 'bot', text: data.message }]);
      setIsLoading(false);
      setClientMessage("")
    })
    .catch(error => {
    console.log('Error:', error);
    toast.error("There was a problem sending your enquiry! Please try again.", {duration: 6000})
    setIsLoading(false);
    setClientMessage("")
    })
  }
  else {toast.error("Please submit a valid enquiry!", {duration: 6000})}
 }

  return (
  <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-300 opacity-75"></div>
          </div>
          <div className="text-left overflow-hidden transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white dark:bg-black flex flex-col w-full shadow-xl rounded-lg">
            <div className="p-4 border-b bg-lime-400 text-green-950 dark:text-white dark:bg-green-800 rounded-t-lg flex justify-between items-center w-full">
                <p className="text-lg lg:text-xl font-sans font-bold">Pharmacist Chatbot</p>
                <button id="close-chat" className="text-green-950  dark:text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 text-2xl font-extrabold" onClick={closeChatModal}>
                    <RiCloseFill fontSize={35}/>
                </button>
            </div>
            <div className="py-5 px-4 h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-3 ${message.sender === 'client' ? 'text-right' : 'text-left'}`}>
                <p className={`${message.sender === 'client' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-green-700 text-black dark:text-white'} text-md font-medium rounded-lg py-2 px-4 inline-block`}>
                  {message.text}
                </p>
              </div>
            ))}
               {isLoading && (
              <div className="mb-3 text-left flex items-center gap-1">
                <LoadingSpinner /> Loading ...
              </div>
            )}
            </div>
            <form onSubmit={onSubmit}>
            <div className="p-4 border-t flex flex-row gap-0.5">
                <input type="text" placeholder="Type a message ..." className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-black" value={clientMessage}  onChange={(e) => setClientMessage(e.target.value)}/>
                <button type="submit" className="bg-white border hover:border-blue-600 text-blue-500 text-2xl font-extrabold px-4 py-2 rounded-r-md hover:text-blue-800 transition duration-300 dark:bg-black"><IoMdSend size={30}/></button>
            </div>
            </form>
            </div>
            <div className="mx-auto mt-8 flex max-w-[550px] items-center justify-end space-x-5">
              <button className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-lime-400 text-green-950  dark:text-white dark:bg-green-800 text-2xl font-extrabold hover:text-gray-400" onClick={closeChatModal}>
              <RiCloseFill fontSize={40}/>
              </button>
            </div>
          </div>
        </div>
  )
}

export default ChatModal