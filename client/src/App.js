import Home from "./pages/Home";

function App() {
    console.log(window.location.pathname);
    switch (window.location.pathname) {
        case "/":
            return <Home />;
        case "/app":
            return <div />;
        default:
            return <div>ERROR: 404 Page not found</div>;
    }
}

export default App;
