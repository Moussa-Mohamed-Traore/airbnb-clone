import prisma from "@/lib/prisma";
import { getCurrentUser } from "./getCurrentUser";

export default async function getProperties() {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  const properties = await prisma.listing.findMany({
    where: {
      userId: currentUser.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return properties;
}
