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
    <div className="lt-bg-primary lt-banner relative">
      <div className="flex w-1/2"></div>
      <div className="flex w-1/2"></div>
    </div>
  );
}
