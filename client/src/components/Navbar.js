function Navbar() {
    return (
        <div className="text-2xl font-bold bg-slate-800 text-gray-50 h-16 w-screen flex flex-wrap flex-row justify-between">
            <h1 className="m-6 my-auto">Zermelo dinges</h1>
            <div className="h-16 mr-4 flex flex-wrap flex-row justify-end">
                <a href="/" className="flex-none m-2 my-auto">
                    Home
                </a>
                <a href="/" className="flex-none m-2 my-auto">
                    Info
                </a>
                <a href="/" className="flex-none m-2 my-auto">
                    Login
                </a>
                <a
                    href="/"
                    className="flex-none m-2 my-auto bg-indigo-600 py-1 px-2 rounded-full"
                >
                    Sign Up
                </a>
            </div>
        </div>
    );
}

export default Navbar;
