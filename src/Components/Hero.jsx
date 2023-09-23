function Hero(){

    return(
        <>
        <section className=" border-y">
            <p className="flex-col text-center sm:text-right italic font- bold md:text-[2rem] text-white text-2xl">Igniting a Revolution in HR Innovation<svg className="ml-72" width="255" height="17" viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="text-center" d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
                </svg>
            </p> 
            <div className="flex">
            <img src="/public/Purple-Lens-Flare-PNG.png" className="z-0 absolute top-0" alt="" />
            <div className=" flex-col sm:w-1/2 p-8 justify-center">
                <h1 className="text-white font-bold text-8xl pb-4 text-center sm:text-left">getlinked Tech <br />Hackathon <span className="text-linked">1.0</span></h1>
                <p className="text-[.8125rem] w-[90%] md:w-full md:text-lg leading-loose-light md:leading-loose-light max-w-[470px] mx-auto lg:mx-0 mb-8 md:mb-10 lg:mb-14 text-white pb-8 text-center sm:text-left">Participate in getlinked tech Hackathon 2023 stand 
                    a chance to win a Big prize
                </p>
                <p className=" flex justify-center sm:justify-start">
                <button className=" my-10 text-white rounded py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500">Register</button>
                </p>
                <p className="text-4xl text-white text-center sm:text-left">00<span className="text-lg">H</span>     00<span className="text-lg">M</span>     00<span className="text-lg">S</span></p>
            </div>
            <div>
                <img className="absolute" src="public\Image 1.png" alt="" />
                <img src="public/assets/hero-img.png" alt="" />
            </div>
            </div>
        </section>
        </>
    )
}
export default Hero