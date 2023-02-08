import PlaceDetails from "../PlaceDetails";

export default function PlaceDetailsPage({ params }) {
  return (
    <div className="mx-auto p-5">
      <PlaceDetails params={params} />
    </div>
  );
}
