import { Hotel } from "../../types/Hotel"
import { Room } from "../../types/Room"
import { PhotoCarousel } from "../PhotoCarousel"
import { Rating } from "../Rating"
import HotelRooms from "./HotelRooms"

type IHotelCard = {
    hotel: Hotel
    rooms: {
        rooms: Room[];
    }
}

const HotelCard = ({ hotel, rooms }: IHotelCard) => {
    return (
        <article className="flex flex-col p-3 border border-gray-500 rounded-lg">
            <header className="flex gap-3">
                <div className="w-40 h-full">
                    <PhotoCarousel {...{ ariaLabel: "hotel photos", showThumbs: false, showIndicators: false, showStatus: false }}>
                        {hotel.images.map((photo, index) => (
                            <div className="w-40 overflow-clip rounded-lg h-full" key={index}>
                                <img loading="lazy" className="object-cover w-auto h-full" src={photo.url} alt={hotel.name + index} />
                            </div>
                        ))}
                    </PhotoCarousel>
                </div>
                <div className="relative w-full">
                    <h3>{hotel.name}</h3>
                    <address>{hotel.address1}</address>
                    {hotel.address2.length > 0 && <address>{hotel.address2}</address>}
                    <div className="absolute top-2 right-2"><Rating rating={hotel.starRating} /></div>
                </div>
            </header>
            <HotelRooms data={rooms} />
        </article>
    )
}

export { HotelCard }