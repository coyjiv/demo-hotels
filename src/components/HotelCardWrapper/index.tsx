import { FC } from 'react'
import { HotelCard } from '../HotelCard'
import { Hotel, HotelFilterProps } from '../../types/Hotel'
// import { useHotelsWithRooms } from '../../hooks/useHotelsWithRooms'
import { useFilteredData } from '../../hooks/useFilteredData'



const HotelCardWrapper: FC<HotelFilterProps> = ({filters, setFilters}) => {
    const { isLoading, error, hotels, roomsByHotel } = useFilteredData(filters, setFilters);
    
    return (
        <div>
            {isLoading ? (
                <span className="loading loading-spinner loading-lg absolute inset-1/2"></span>
            ) : error ? (
                'An error has occurred: ' + error
            ) : (
                <>
                    <div className='flex flex-col gap-5'>
                        {hotels.map((hotel: Hotel) => (
                            <HotelCard hotel={hotel} rooms={roomsByHotel[hotel.id]} key={hotel.id} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export { HotelCardWrapper }