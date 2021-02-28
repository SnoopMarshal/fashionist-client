import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const axios = require("axios");

export default function Home() {
  const [bannerItems, setBannerItems] = React.useState([]);
  const getBannerItems = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=5"
      );
      setBannerItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getBannerItems();
  }, []);
  return (
    <div className="">
      <Carousel autoPlay={false} showArrows={false} infiniteLoop={true}>
        {bannerItems.map((o) => (
          <div
            key={o.id}
            className="flex carousel-container bg-white w-full items-center justify-center lt-border-primary"
          >
            <div className="flex flex-col h-full w-1/3 justify-end md:justify-center items-start lt-bg-primary px-1 md:px-4 lg:px-6 xl:px-10 pb-1 md:pb-2">
              <span className="text-white font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-left">
                {o.title}
              </span>
              <div className="mb-2">
                <span className="text-white italic text-sm">in </span>
                <span className="text-white text-base md:text-lg lg:text-xl font-semibold italic">
                  {o.category}
                </span>
              </div>
            </div>
            <div className="flex h-full w-2/3 justify-center items-end pb-8 relative">
              <div
                className="flex h-2/3 w-1/3 bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: "url(" + o.image + ")" }}
              ></div>
              <span className="absolute bottom-0 right-0 p-1 md:px-6 md:py-2 capitalize lt-bg-accent text-white font-semibold cursor-pointer mb-4 mr-1">
                shop now
              </span>
            </div>
          </div>
        ))}
      </Carousel>
      <div class="grid grid-cols-3 gap-4">
      {bannerItems.map((o) => (
          <img src={o.image} height="50" width="50" alt="" srcset=""/>
      ))}
      </div>
    </div>
  );
}
