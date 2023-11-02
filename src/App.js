
function App() {
    return (
    <>
        <div className="bg-slate-800 min-w-full min-h-screen relative">
            <header className="w-full text-2xl fixed">
                <div className="flex flex-row bg-sky-950 m-auto max-w-7xl p-5 shadow-lg">
                    <div className="m-auto text-center text-7xl font-bold text-neutral-950">
                        Halloween Meme Factory
                    </div>
                </div>
            </header>
            <div className="max-w-7xl m-auto grid grid-cols-4 gap-5 pb-24 pt-36">
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>

                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
            </div>
        </div>

    </>
    );
}

export default App;
