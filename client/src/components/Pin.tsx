import { Marker, Popup } from "react-leaflet"
import { Link } from "react-router-dom"
import { DummyData } from "../types"

interface PinProps {
  item: DummyData;
}

const Pin = ({ item }: PinProps) => {
  // Verifica si las coordenadas son válidas
  if (typeof item.latitude !== 'number' || typeof item.longitude !== 'number') {
    console.error('Coordenadas inválidas para el item:', item);
    return null; // No renderiza nada si las coordenadas no son válidas
  }

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5">
          <img className="w-16 h-12 object-cover rounded-md" src={item.img} alt={item.title || ''} />
          <div className="flex flex-col justify-between">
            <Link to={`/iglesias/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom}</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin