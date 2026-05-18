export const fetchingFacilities = async() => {
    const res = await fetch('http://localhost:8000/facilities');
    const data = await res.json();
    return data;
}
export const fetchingBookings = async() => {
    const res = await fetch('http://localhost:8000/bookings');
    const data = await res.json();
    return data;
}