'use client'
import React, {useState} from 'react'
import ChatModal from "./chatModal";


const Landing = () => {

  const [showChatModal, setShowChatModal] = useState(false);

  const closeChatModal = () => {
    setShowChatModal(false)
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
        {showChatModal && <ChatModal closeChatModal = {closeChatModal}  />}
        <div  className="fixed inset-0 px-2 overflow-hidden flex items-center justify-center">
          <div  className="bg-gradient-to-b from-lime-400 to-lime-200  dark:bg-green-900 rounded-md overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3">
            <div className="p-6 flex flex-row justify-center items-center">
              <div className="flex flex-col grow text-center text-green-950">
                <h1 className="text-md md:text-lg xl:text-2xl font-bold">Need medical or health advice?</h1>
                <p className="md:text-md xl:text-xl font-semibold py-2">Try our Pharmacist Chatbot!</p>
              </div>
              <div className="flex justify-center items-center">
                <button className="z-20 text-white flex flex-col shrink-0 grow-0 justify-center items-center
                 rounded-lg lg:ml-2 hover:text-black" onClick={() => setShowChatModal(true)}>
                <div className="p-3 rounded-full border-4 border-white bg-green-600 hover:opacity-50 shadow-2xl">
                <svg
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
                ></path>
                </svg>
                </div>
                </button>
              </div>
            </div>  
          </div>
        </div>
      </div>
  )
}

export default Landing