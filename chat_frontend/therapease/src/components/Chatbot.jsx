import { useState } from 'react'
// import Dot from '../components/Dot'
import ChatCard from '../components/ChatCard'
import Chats from '../components/Chats';


function Chatbot() {

  const [show, setShow] = useState(false);
  const handleShowChat = () => {
    setShow(!show)
  }
  return (
    <div>
       
        <ChatCard handleShowChat={handleShowChat}>
          <Chats/>
        </ChatCard>
        
    </div>
  );
}

export default Chatbot
// import { useState } from 'react';
// import ChatCard from '../components/ChatCard';
// import Chats from '../components/Chats';

// function Chatbot() {
//   const [showChat, setShowChat] = useState(false);

//   const toggleChat = () => {
//     setShowChat(!showChat);
//   };

//   return (
//     <div>
//       <button handleShowChat={handleShowChat}
//         className="bg-primary p-3 rounded text-white w-20 h-15 text-sm font-medium cursor-pointer"
//         onClick={toggleChat}
//       >
//         Chatbot
//       </button>
//       {showChat && (
//         <ChatCard handleShowChat={toggleChat}>
//           <Chats />
//         </ChatCard>
//       )}
//     </div>
//   );
// }

// export default Chatbot;