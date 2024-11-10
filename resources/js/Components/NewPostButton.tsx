import { Link, usePage } from "@inertiajs/react";

export default function NewPostButton({ currentUrl }: { currentUrl: string }) {
    const url = usePage();
    const newUrl = `${url.url}/new`;

    return (
        <Link
            href={newUrl}
            className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
        >
            New{" "}
            {currentUrl
                .split("/")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1, -1))
                .join(" ")}
        </Link>
    );
}
