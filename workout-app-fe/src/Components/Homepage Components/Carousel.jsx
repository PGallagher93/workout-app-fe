const Carousel = ({children}) =>{
    return(
        <section className=" bg-black mt-4 pl-[20%] flex w-full gap-4 pb-5 pt-[50%] md:pt-[25%] snap-x overflow-x-auto">
               {children}
        </section>
    )
}

export default Carousel