import ChatBox from "./ChatBox";

const Chat = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-1 flex-col gap-5 overflow-y-scroll">
        <p className="font-light text-3xl mt-3">Mensajes</p>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="bg-white p-5 rounded-xl flex items-center gap-5 cursor-pointer">
          <img
            className="size-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="font-bold">Falcao</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <ChatBox />
    </div>
  );
};

export default Chat;
