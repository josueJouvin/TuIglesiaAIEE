import { Marker, Popup } from "react-leaflet"
import { Link } from "react-router-dom"
import { DummyData } from "../types"

interface PinProps {
  item: DummyData;
}

const Pin = ({ item }: PinProps) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <section className="flex gap-5 w-full">
          <img className="w-16 h-12 object-cover rounded-md" src={item.img} alt={item.title || ''} />
          <div className="flex flex-col justify-between w-screen">
            <Link to={`/iglesias/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom}</span>
            <b>$ {item.price}</b>
          </div>
        </section>
      </Popup>
    </Marker>
  )
}

export default Pin