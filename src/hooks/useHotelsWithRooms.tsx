import { useQuery, useQueries } from '@tanstack/react-query';
import { getHotels } from '../api/hotels';
import { getRooms } from '../api/rooms';
import { Hotel } from '../types/Hotel';

const useHotelsWithRooms = () => {
  const { data: hotels, isLoading: isLoadingHotels, error: hotelsError } = useQuery({
    queryKey: [ 'hotelsData' ],
    queryFn: getHotels,
  });

  const roomsQueries = useQueries(
    {
      queries: hotels?.map((hotel: Hotel) => ({
        queryKey: [ 'roomsData', hotel.id ],
        queryFn: () => getRooms(hotel.id),
        enabled: !!hotel.id,
      })) || [],
    }
  );

  const isLoadingRooms = roomsQueries.some(query => query.isLoading);
  const roomsErrors = roomsQueries.map(query => query.error).filter(Boolean);

  const roomsByHotel = Object.fromEntries(
    roomsQueries.map((query, index) => [ hotels[ index ].id, query.data ])
  );

  return {
    isLoading: isLoadingHotels || isLoadingRooms,
    error: hotelsError || roomsErrors[ 0 ],
    hotels,
    roomsByHotel
  };
};

export { useHotelsWithRooms };
