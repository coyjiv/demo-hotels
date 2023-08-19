import { Dispatch } from 'react';
import { ActionType, Filters } from '../store';
import { useHotelsWithRooms } from './useHotelsWithRooms';
import { Hotel } from '../types/Hotel';
import { Room } from '../types/Room';

const useFilteredData = (filters:Filters, setFilters:Dispatch<ActionType>) => {
    const { isLoading, error, hotels, roomsByHotel } = useHotelsWithRooms();

    const applyFiltersToHotels = (hotelData:Hotel[]|[]) => {
        return hotelData.filter((hotel:Hotel) => {
            

            if (filters.rating && +hotel.starRating !== filters.rating) {
                return false;
            }

            const hotelRooms = roomsByHotel[hotel.id].rooms || [];
            const suitableRooms = hotelRooms.filter((room:Room) => {
                const occupancy = room.occupancy;
                return (
                    occupancy.maxAdults >= filters.adultCount &&
                    occupancy.maxChildren >= filters.childrenCount &&
                    (occupancy.maxAdults + occupancy.maxChildren) >= (filters.adultCount + filters.childrenCount)
                );
            });

            return suitableRooms.length > 0;
        });
    }


    const filteredHotels = filters.isActive ? applyFiltersToHotels(hotels) : hotels;

    return {
        isLoading,
        error,
        hotels: filteredHotels,
        roomsByHotel,
        setFilters
    };
}

export  {useFilteredData};