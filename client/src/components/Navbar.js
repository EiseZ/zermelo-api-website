function Navbar() {
    return (
        <div className="text-2xl font-bold bg-slate-800 text-gray-50 flex flex-wrap flex-row justify-end py-2">
            <h1 className="leading-[4rem] justify-self-start grow m-6 my-auto">
                Zermelo dinges
            </h1>
            <a href="/" className="flex-none mx-2 my-auto">
                Home
            </a>
            <a href="/" className="flex-none mx-2 my-auto">
                Info
            </a>
            <a href="/" className="flex-none mx-2 my-auto">
                Login
            </a>
            <a
                href="/"
                className="flex-none mx-2 my-auto leading-none bg-indigo-600 py-1 px-2 rounded-full"
            >
                Sign Up
            </a>
        </div>
    );
}

export default Navbar;
