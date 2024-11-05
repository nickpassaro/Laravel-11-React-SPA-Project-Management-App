import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, usePage } from "@inertiajs/react";

const children = () => {
    return (
        <>
            <Head title="Home" />
            <h1 className="dark:text-gray-200">Hello World!</h1>
        </>
    );
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
