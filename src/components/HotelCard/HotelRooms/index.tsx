import { Room } from "../../../types/Room"
import HotelRoom from "./HotelRoom"

type Props = {
    data: {
        rooms: Room[]
    }
}

const HotelRooms = ({data}: Props) => {
  return (
    <section className="flex flex-col gap-2 my-4">
        {data.rooms.map((room: Room, index: number) => (<HotelRoom room={room} key={index} />))}
    </section>
  )
}

export default HotelRooms