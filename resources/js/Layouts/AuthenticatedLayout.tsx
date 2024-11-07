import AuthNavBar from "@/Components/AuthNavBar";
import { PropsWithChildren, ReactNode } from "react";

export default function Authenticated({
    header,
    isTablePage = false,
    children,
}: PropsWithChildren<{ header?: ReactNode; isTablePage?: boolean }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <AuthNavBar />

            {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            {header}
                        </h1>
                    </div>
                </header>
            )}

            <main>
                <div className="py-12">
                    <div className={`mx-auto ${isTablePage === false ? 'max-w-7xl sm:px-6 lg:px-8 space-y-6' : ''}`}>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
