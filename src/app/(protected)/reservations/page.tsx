import ReservationsPage from "@/components/reservations/ReservationsPage";
import ListingCardSkeleton from "@/components/skeletons/ListingCardSkeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<ListingCardSkeleton />}>
      <ReservationsPage />
    </Suspense>
  );
}
