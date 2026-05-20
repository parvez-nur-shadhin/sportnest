export const fetchingFacilities = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
  const data = await res.json();
  return data;
};
export const fetchingBookings = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`);
  const data = await res.json();
  return data;
};
