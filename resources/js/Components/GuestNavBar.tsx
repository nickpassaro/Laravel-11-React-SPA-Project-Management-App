import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import NavLink from "./NavLink";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function GuestNavBar() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    {/* Logo and non-auth nav stuff */}
                    <div className="flex">
                        <div className="flex shrink-0 items-center space-x-4">
                            <Link href={route("home")}>
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                            </Link>
                            <NavLink
                                href={route("home")}
                                active={route().current("home")}
                                className="hidden sm:inline-flex"
                            >
                                Home
                            </NavLink>
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center">
                        <NavLink href="/login" active={false}>
                            Log in
                        </NavLink>
                    </div>

                    {/* Mobile hamburger button */}
                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="space-y-1">
                    <ResponsiveNavLink href={route("home")}>
                        Home
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("login")}>
                        Log in
                    </ResponsiveNavLink>
                </div>
            </div>
        </nav>
    );
}
