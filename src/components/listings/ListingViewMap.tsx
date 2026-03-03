"use client";

import dynamic from "next/dynamic";
import useCountries from "@/custom-hooks/useCountries";

interface ListingViewMapProps {
  price: number;
  locationValue: string;
}

const MapComponent = dynamic(() => import("../general/map/MapComponent"), {
  ssr: false,
  loading: () => <p className="text-center py-6 ">Loading map ...</p>,
});
export default function ListingViewMap({
  price,
  locationValue,
}: ListingViewMapProps) {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  if(!location) return null;
  return (
    <div className="h-120 overflow-hidden border border-gray-500">
      <MapComponent center={location?.latlng} price={price} />
    </div>
  );
}
