export const getHotels = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/hotels?collection-id=OBMNG`);
  return await response.json();
}