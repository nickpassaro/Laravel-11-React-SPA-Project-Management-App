import Pagination from "./Pagination";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";

export default function SearchPlusPagination({
    nextPage,
    previousPage,
    className,
    placeholder,
    resourceType,
}: {
    nextPage?: string;
    previousPage?: string;
    className?: string;
    placeholder?: string;
    resourceType: "projects" | "tasks" | "users";
}) {
    return (
        <div
            className={`grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 ${className}`}
        >
            <div className="mx-4 sm:mx-0 pb-4 md:pb-0 border-b-2 border-gray-500 md:border-b-0 flex gap-x-4 flex-grow">
                <TextInput
                    className="py-2 h-9 w-full flex-grow"
                    placeholder={placeholder}
                />
                <PrimaryButton link={true} className="h-9">
                    Search
                </PrimaryButton>
            </div>
            <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                className="mt-0 px-0 md:flex-grow-0"
            />
        </div>
    );
}
