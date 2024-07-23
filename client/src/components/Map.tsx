import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DummyData } from "../types";
import Pin from "./Pin";

interface MapProps {
  data: DummyData[];
}

const Map = ({ data }: MapProps) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={7}
      scrollWheelZoom={true}
      className="w-full h-full rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map(item => (
        <Pin item={item} key={item.id}/>
      ))}
    </MapContainer>
  );
};

export default Map;