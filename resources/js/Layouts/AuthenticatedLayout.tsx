import AuthNavBar from "@/Components/AuthNavBar";
import { PropsWithChildren, ReactNode } from "react";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <AuthNavBar />

            {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            {header}
                        </h2>
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
