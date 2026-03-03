import { getCurrentUser } from "@/server-actions/getCurrentUser";
import { getReservations } from "@/server-actions/getReservations";
import EmptyListings from "../ui/EmptyListings";
import ListingCard from "../listings/ListingCard";

export default async function ReservationsPage() {
  const reservations = await getReservations();
  const currentUser = await getCurrentUser();

  if (reservations.length === 0) {
    return (
      <EmptyListings
        title="No reservations found"
        subtitle="Looks like your listings haven’t been booked yet."
      />
    );
  }
  return (
    <div className="max-w-7xl  p-4">
      <h2 className="text-2xl font-semibold mb-6">Your Reservations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reservations.map((reservation) => {
          return (
            <ListingCard
              listing={reservation.listing}
              key={reservation.id}
              currentUser={currentUser}
              reservation={{
                id: reservation.id,
                startDate: reservation.startDate,
                endDate: reservation.endDate,
                totalPrice: reservation.totalPrice,
              }}

              trip

              actionLabel="Cancel Reservation"
            />
          );
        })}
      </div>
    </div>
  );
}
