import Hero from "/src/Components/Hero.jsx"
import Head from "/src/Components/Header.jsx"
function Home(){
return(
    <section className='relative border-t border-t-section-divide '>
        <Head></Head>
        <Hero></Hero>
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
        <section>
            
        </section>
        <footer>
            
        </footer>
    </section>
)
}

export default Home