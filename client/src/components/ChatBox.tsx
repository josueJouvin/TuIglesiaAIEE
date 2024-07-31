import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ChatBox = () => {
    const [chat, setChat] = useState(true);
  return (
    <>
    {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between">
        {/* TOP*/}
        <div className="bg-[#f7c14b85] p-5 lg:py-3 2xl:p-5 font-bold flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              className="size-8 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            Josue Garces
          </div>
          <XMarkIcon className="size-5 cursor-pointer" onClick={() => setChat(false)} />
        </div>
        {/*Center*/}
        <div className="h-80 lg:h-40 2xl:h-80 overflow-y-scroll p-5 flex flex-col gap-5">
          <div className="w-1/2">
            <p>Lorem ipsum dolor sit amet.</p>
            <span className="text-xs bg-[#f7c14b39] p-[2px] rounded">
              1 Hour Ago
            </span>
          </div>
          <div className="w-1/2 self-end text-right">
            <p>Lorem ipsum dolor sit amet.</p>
            <span className="text-xs bg-[#f7c14b39] p-[2px] rounded">
              1 Hour Ago
            </span>
          </div>
        </div>
        {/*BOTTOM*/}
        <div className="flex items-center justify-between h-16 lg:h-14 2xl:h-16 border-2 border-solid border-[#f7c14b85]">
          <textarea placeholder="Comentario..." className="flex-3 h-full p-5 lg:py-3 2xl:py-5 w-full resize-none"></textarea>
          <button className="flex-1 bg-[#f7c14b85] h-full">Enviar</button>
        </div>
      </div>
    )}
    </>
  );
};

export default ChatBox;
