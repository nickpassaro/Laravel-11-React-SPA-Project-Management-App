import GuestNavBar from "@/Components/GuestNavBar"

export default function Home() {
    return (
        <>
            {/* I need to create a new Guest Layout, because <GuestLayout> was originally being used to plop in auth form stuff. GuestLayout is now AuthFormLayout, and a new GuestLayout will be created for things like a homepage or an about page or a contact page that should be identical regardless of user login state. After this, I should be done fixing the things I don’t like about Laravel Breeze. For now, <NavBar /> is just here so I can navigate easily. */}
            <GuestNavBar />
            <h1>Hello World</h1>
        </>
    );
}
