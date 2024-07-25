import { ClockIcon, SwatchIcon } from "@heroicons/react/24/outline";
import Features from "./ChurchDetails/Features";
import TitleDetails from "./ChurchDetails/TitleDetails";
import SchedulesDetails from "./ChurchDetails/SchedulesDetails";
import Map from "./Map";
import { dummyDataList} from "../data/DummyData";

const ChurchDetails = () => {
  return (
    <div className="py-0 px-5 flex flex-col gap-5 w-full">
      <TitleDetails title="General" />
      <section className="flex flex-col gap-5 py-5 px-2 bg-white rounded-xl">
        <Features
          icon={<SwatchIcon />}
          title="Utilidades"
          text="REnter is responsable"
        />
        <Features
          icon={<SwatchIcon />}
          title="Utilidades"
          text="REnter is responsable"
        />
        <Features
          icon={<SwatchIcon />}
          title="Utilidades"
          text="REnter is responsable"
        />
      </section>
      <TitleDetails title="Horarios" />
      <section className="flex justify-between flex-wrap">
        <SchedulesDetails icon={<ClockIcon />} text="20:00" />
        <SchedulesDetails icon={<ClockIcon />} text="20:00" />
        <SchedulesDetails icon={<ClockIcon />} text="20:00" />
      </section>
      <TitleDetails title="Nearby Places" />
      <section className="flex justify-between py-5 px-2 bg-white rounded-xl flex-wrap gap-3">
        <Features
          icon={<SwatchIcon />}
          title="Utilidades"
          text="REnter is responsable"
        />
        <Features
          icon={<SwatchIcon />}
          title="Utilidades"
          text="REnter is responsable"
        />
        <Features
          icon={<SwatchIcon />}
          title="Utilidades"
          text="REnter is responsable"
        />
      </section>
      <TitleDetails title="Direccion" />
      <div className="w-full h-52">
        <Map data={dummyDataList} />
      </div>
      <div className="buttons">
        <button>
          <img src="/chat.png" alt="" />
          Send a Message
        </button>
        <button>
          <img src="/save.png" alt="" />
          Save the Place
        </button>
      </div>
    </div>
  );
};

export default ChurchDetails;
