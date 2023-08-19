export const getRooms = async (hotelId:string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/roomRates/OBMNG/${hotelId}`);
    return await response.json();
  }