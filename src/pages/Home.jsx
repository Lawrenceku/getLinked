import React from "react";

function Home(){
return(
    <section className=' '>
        <header className="px-8 pt-8 pb-4 flex items-center justify-between border-slate-100 ">
            <p className="text-linked text-2xl font-bold"><span className="text-white ">get</span>Linked</p>
            <nav className=" w-1/2 text-white flex justify-between items-center">
                <a href="">Timeline</a>
                <a href="">Overview</a>
                <a href="">FAQs</a>
                <a href="">Contact</a>
                <button className="text-white rounded py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500">Register</button>
            </nav>
        </header>
        <section className=" border-y">
            <div className="flex">
           {/*  <p className="text-white text-xl">Igniting a Revolution in HR Innovation<svg width="255" height="17" viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
                </svg>
            </p> */}
            <img src="/public/Purple-Lens-Flare-PNG.png" className="z-0 absolute top-0" alt="" />
            <div className=" flex-col sm:w-1/2 p-8 items-center">
            <h1 className="text-white font-bold text-8xl pb-4">getlinked Tech <br />Hackathon <span className="text-linked">1.0</span></h1>
            <p className="text-white pb-8">Participate in getlinked tech Hackathon 2023 stand 
                a chance to win a Big prize
            </p>
            <button className="my-10 text-white rounded py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500">Register</button>
            <p className="text-4xl text-white">00<span className="text-lg">H</span>     00<span className="text-lg">M</span>     00<span className="text-lg">S</span></p>
            </div>
            <div>
                <img className="absolute" src="public\Image 1.png" alt="" />
                <img src="/public/man-wearing-smart-glasses-touching-virtual-screen 1.png" alt="" />
            </div>
            </div>
        </section>
        <section className="flex-col sm:flex items-center justify-center py-8 px-28">
            <div className="h-full w-full">
                <img className="h-full" src="/public/the big idea 1.png" alt="" />
            </div>
            <div>
                <h2 className="text-white sm:text-left text-center font-bold text-xl">Introduction to getlinked <br /><span className="text-linked">tech Hackathon 1.0</span></h2>
                <p className="text-white text-center">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </div>
        </section>
    </section>
)
}

export default Home