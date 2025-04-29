const ContainerTile = (title) => {
  return (
    <section className="min-w-[100%] md:min-w-[40%]">
      <article className="bg-[url('./images/statsBackgroundImage.jpg')] h-60 w-[60%] snap-center rounded-xl  bg-cover bg-center   text-center ">
        <p>{title.title}</p>
      </article>
    </section>
  );
};

export default ContainerTile;
