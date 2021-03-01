import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ItemCard from "./ItemCard";
import Skeleton from "@material-ui/lab/Skeleton";
const axios = require("axios");
export default function Home() {
  const bannerHeight = window.innerHeight * 0.4;
  const [bannerItems, setBannerItems] = React.useState([]);
  const [itemsForHer, setForHerItems] = React.useState([]);
  const [itemsForHim, setForHimItems] = React.useState([]);
  const [itemsJewelery, setJeweleryItems] = React.useState([]);
  const [itemsElectronics, setElectronicsItems] = React.useState([]);
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
  const getItemsForHim = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/men%20clothing?limit=6"
      );
      setForHimItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getItemsForHer = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/women%20clothing?limit=6"
      );
      setForHerItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getItemsJewelery = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery?limit=8"
      );
      setJeweleryItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getItemsElectronics = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics?limit=8"
      );
      setElectronicsItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getBannerItems();
    getItemsForHer();
    getItemsForHim();
    getItemsJewelery();
    getItemsElectronics();
  }, []);
  return (
    <div className="">
      {bannerItems.length > 0 ? (
        <Carousel autoPlay={true} showArrows={false} infiniteLoop={true}>
          {bannerItems.map((o) => (
            <div
              key={o.id}
              className="flex carousel-container bg-white w-full items-center justify-center lt-border-primary"
            >
              <div className="flex flex-col h-full w-1/2 md:w-1/3 justify-end md:justify-center items-start lt-bg-primary px-1 md:px-4 lg:px-6 xl:px-10 pb-4 md:pb-2">
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
              <div className="flex h-full w-1/2 md:w-2/3 justify-center items-end pb-8 relative">
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
      ) : (
        <div className="px-1 pb-2">
          <Skeleton variant="rect" height={bannerHeight} />
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex justify-start items-center p-4 lt-bg-accent rounded-md mb-1">
          <span className="font-semibold text-white text-lg">For Her</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {itemsForHer.map((o) => (
            <ItemCard item={o} />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start items-center p-4 lt-bg-primary rounded-md mb-1">
          <span className="font-semibold text-white text-lg">For Him</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {itemsForHim.map((o) => (
            <ItemCard item={o} />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start items-center p-4 lt-bg-accent rounded-md mb-1">
          <span className="font-semibold text-white text-lg">Jewelery</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {itemsJewelery.map((o) => (
            <ItemCard item={o} />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start items-center p-4 lt-bg-primary rounded-md mb-1">
          <span className="font-semibold text-white text-lg">Electronics</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {itemsElectronics.map((o) => (
            <ItemCard item={o} />
          ))}
        </div>
      </div>
    </div>
  );
}
