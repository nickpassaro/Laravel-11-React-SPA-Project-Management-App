import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";

const children = () => {
    return (
        <h1>Hello World!</h1>
    )
};

export default function Home() {
    return (
        <>
            {usePage().props.auth.user ? (
                <AuthenticatedLayout>{children()}</AuthenticatedLayout>
            ) : (
                <GuestLayout>{children()}</GuestLayout>
            )}
        </>
    );
}
