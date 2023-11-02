import Header from "./Header";

function Layout({children}) {
    return (
    <>
        <div className="bg-slate-800 min-w-full min-h-screen relative">
            <Header />
            { children }
        </div>

    </>
    );
}

export default Layout;
