function Textscreen(props) {
    return (
        <div className="flex flex-col items-center bg-slate-300">
            <h1 className="text-6xl m-20 font-black italic">{props.title}</h1>
            <p className="text-xl m-6 max-width-60%">{props.text}</p>
        </div>
    );
}

export default Textscreen;
