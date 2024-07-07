import React from "react";
import { Carousel } from "@mantine/carousel";

const img = [
  "https://assets.ajio.com/medias/sys_master/root/20231012/nogY/6527adbaafa4cf41f53dbb5b/-473Wx593H-466455371-blue-MODEL7.jpg",
  "https://5.imimg.com/data5/FY/TO/MY-29611757/football-boot.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KR2Wr4aTiwLQIrz9pPNPkqnodwn16lyK_Q&s",
  "https://static8.depositphotos.com/1049549/878/i/450/depositphotos_8783239-stock-photo-football-boots-soccer-boots.jpg",
  "https://www.shutterstock.com/image-photo/sports-shoes-blue-soccer-260nw-2374126103.jpg",
  "https://cdn.lovellsports.com/features/splash-pages/soccer/boots/mizuno-boots-11.06.jpg?width=540",
];
const Content = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-around">
        <p className="text-3xl font-semibold font-sans mx-12">
          Discover Premium Boots for Every Adventure Crafted for Comfort,
          Durability, and Style
        </p>
        <img
          src="https://cdn.lovellsports.com/features/splash-pages/soccer/homepage/Football-Boots-11.06.jpg"
          height={300}
          width={400}
          className="rounded-lg w-1/2 object-contain"
          alt=""
        />
      </div>
      <section className="w-full  flex items-center justify-center  mr-8">
        <Carousel
          withIndicators
          height={300}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          {img.map((item, index) => (
            <Carousel.Slide key={index}>
              <div className="relative group">
                <img
                  className="w-full aspect-video object-cover rounded-lg "
                  src={item}
                  alt=""
                />
                <div className="absolute hidden group-hover:block items-center justify-center z-10 top-0 w-full h-full rounded-lg pt-12 text-center bg-black text-white bg-opacity-75">
                  <p className="text-3xl font-semibold">Addidas</p>
                  <p className=" font-thin">Price: Rs 2300</p>
                  <p className="text-sm mt-2 px-4">
                    Enhance your game with our premium football boots, crafted
                    for performance and comfort. Our collection combines
                    cutting-edge technology with sleek design, ensuring you
                    dominate the field. Dive into the latest styles at
                    unbeatable prices.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Content;
