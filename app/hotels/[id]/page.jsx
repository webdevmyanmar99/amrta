import HotelDetails from "../HotelDetails";

export default function HotelDetailsPage({ params }) {
  return (
    <div className="mx-auto p-5">
      <HotelDetails params={params} />
    </div>
  );
}
