function Head(){
    return(
        <>
        <header className="px-8 pt-8 pb-4 flex items-center justify-between ">
            <p className="text-linked text-2xl font-clash font-bold"><span className="text-white ">get</span>Linked</p>
            <nav className="hidden md:flex w-1/2 text-white  flex justify-between items-center">
                <a href="" className="text-white">Timeline</a>
                <a href="" className="text-white">Overview</a>
                <a href="" className="text-white">FAQs</a>
                <a href="" className="text-white">Contact</a>
                <button className="text-white rounded py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500">Register</button>
            </nav>
        </header>
        </>
    )
}
export default Head