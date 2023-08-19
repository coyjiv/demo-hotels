import { Room } from "../../../../types/Room"

type Props = {
    room: Room
}

const HotelRoom = ({room}: Props) => {
  return (
    <div className="flex border border-slate-600 p-3 rounded-lg">
       <div className="min-w-[150px] w-[150px]">
        <h4 className="font-bold pr-5 ">{room.name}</h4>
        <p>Adults : {room.occupancy.maxAdults}</p>
        <p>Children : {room.occupancy.maxChildren}</p>
        </div> 
        <p className="line-clamp-4">{room.longDescription}</p>
    </div>
  )
}

export default HotelRoom