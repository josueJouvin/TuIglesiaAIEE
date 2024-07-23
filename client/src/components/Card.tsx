import { BookmarkIcon, CalendarDaysIcon, ChatBubbleBottomCenterTextIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";
import { DummyData } from "../types";
import { Link } from "react-router-dom";

type itemData = {
  item: DummyData;
};

const Card = ({ item }: itemData) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Link className="flex-2 h-[200px]" to={`/iglesias/${item.id}`}>
        <img
          className="w-full h-52 md:h-full object-cover rounded-lg"
          src={item.img}
          alt={item.title}
        />
      </Link>
      <div className="flex flex-3 flex-col justify-between gap-4 md:gap-3">
        <h2 className="text-xl font-semibold transition-all hover:scale-105 text-black">
          <Link to={`/iglesias/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <p className="text-sm flex items-center gap-1 text-[#888]">
          <MapPinIcon className="size-4 " />
          <span className="">{item.address}</span>
        </p>
        <p className="text-xl font-light p-1 rounded bg-blue-100 w-max">
          Domingo 10:00 AM
        </p>
        <div className="flex justify-between gap-2">
          <div className="flex gap-5 text-sm">
            <div className="flex items-center gap-1 bg-gray-200/90 p-1 rounded">
              <UserIcon className="size-4"/>
              <span className="text-wrap text-center">Pastor: Jav Diaz</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-200/90 p-1 rounded">
              <CalendarDaysIcon className="size-4"/>
              <span className="text-wrap text-center">Fundacion: {item.bedroom}</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="border border-solid border-[#999] py-[2px] px-[5px] rounded cursor-pointer flex items-center justify-center hover:bg-gray-300">
              <BookmarkIcon className="size-4"/>
            </div>
            <div className="border border-solid border-[#999] py-[2px] px-[5px] rounded cursor-pointer flex items-center justify-center hover:bg-gray-300">
              <ChatBubbleBottomCenterTextIcon className="size-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
