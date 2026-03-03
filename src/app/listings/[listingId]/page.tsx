import ListingPage from "@/components/listings/ListingPage";
import ListingViewSkeleton from "@/components/skeletons/ListingViewSkeleton";
import { Suspense } from "react";

export default async function Page({params}: { params: { listingId: string } }) {
  const { listingId } = await params;
  return (
    <Suspense fallback={<ListingViewSkeleton />}>
      <ListingPage listingId={listingId} />
    </Suspense>
  );
}
