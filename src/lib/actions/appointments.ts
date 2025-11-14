"use server";

import { prisma } from "../prisma";
 // function to fetch the doctors using prisma, server action
export async function getAppointments() {
    try {
        const appointments = await prisma.appointment.findMany({
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
                doctor: { select: { name: true, imageUrl: true } },
            },
            orderBy: { createdAt: "desc" },
        });

        return appointments;
    } catch (error) {
        console.log("Error fetching appointments", error);
        throw new Error("Failed to fetch appointments");
    }
}
