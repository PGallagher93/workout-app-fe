
import { Link } from "react-router-dom";


const ContainerTile = ({title, link}) => {
  console.log(link, "< link")
  return (
    <article className="min-w-[100%] md:min-w-[40%] ">
      <Link to={link}>
      <section className=" text-3xl bg-[url('./images/statsBackgroundImage.jpg')] h-60 w-[60%] snap-center rounded-xl  bg-cover bg-center  flex ">
        <section className=" p-5  bg-black/50 flex-1 flex items-center text-center"><p>{title}</p></section>
        
      </section>
      </Link>
    </article>
  );
};

export default ContainerTile;
