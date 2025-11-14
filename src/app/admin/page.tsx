import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";

async function AdminPage() {
    const user = await currentUser();

    // if the user is not logged in, redirect to landing page
    if (!user) redirect("/");

    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0]?.emailAddress;

    // if user is not the admin, redirect to dashboard page
    if (!adminEmail || userEmail !== adminEmail) redirect("/dashboard");

    return <AdminDashboardClient />;
}

export default AdminPage;
