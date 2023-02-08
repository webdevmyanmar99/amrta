import RestaurentDetails from "../RestaurentDetails";

export default function RestaurentDetailsPage({ params }) {
  return (
    <div className="mx-auto p-5">
      <RestaurentDetails params={params} />
    </div>
  );
}
