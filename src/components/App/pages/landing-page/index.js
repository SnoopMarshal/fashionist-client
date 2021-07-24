import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Skeleton from "@material-ui/lab/Skeleton";
import women from "./../../../../assets/images/women.png";
import forher from "./../../../../assets/images/for-her.png";
import wjacket from "./../../../../assets/images/for-her-jacket.png";
import forhim from "./../../../../assets/images/for-him.png";
import mjacket from "./../../../../assets/images/for-him-jacket.png";
import heels from "./../../../../assets/images/heels.png";
import specs from "./../../../../assets/images/specs.png";
import axios from "axios";
import ItemCard from "./components/item-card";
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
    } catch (error) {
      console.log(error);
    }
  };
  const getItemsForHim = async () => {
    try {
      const himItems = [{
        id:1,
        category: 'man',
        name: 'Olive Man Jacket',
        price: 59,
        image: mjacket
      },
      {
        id:2,
        category: 'man',
        name: 'Olive Man Jacket',
        price: 59,
        image: mjacket
      },
      {
        id:3,
        category: 'man',
        name: 'Olive Man Jacket',
        price: 59,
        image: mjacket
      },
      {
        id:4,
        category: 'man',
        name: 'Olive Man Jacket',
        price: 59,
        image: mjacket
      },
      {
        id:5,
        category: 'man',
        name: 'Olive Man Jacket',
        price: 39,
        image: mjacket
      },
      {
        id:6,
        category: 'man',
        name: 'Olive Man Jacket',
        price: 59,
        image: mjacket
      }]
      setForHimItems(himItems);
    } catch (error) {
      console.log(error);
    }
  };
  const getItemsForHer = async () => {
    try {
      const herItems = [{
        id:22,
        category: 'woman',
        name: 'Baby Pink Jacket',
        price: 59,
        image: wjacket
      },
      {
        id:24,
        category: 'woman',
        name: 'Baby Pink Jacket',
        price: 59,
        image: wjacket
      },
      {
        id:21,
        category: 'woman',
        name: 'Baby Pink Jacket',
        price: 59,
        image: wjacket
      },
      {
        id:27,
        category: 'woman',
        name: 'Baby Pink Jacket',
        price: 59,
        image: wjacket
      },
      {
        id:29,
        category: 'woman',
        name: 'Baby Pink Jacket',
        price: 39,
        image: wjacket
      },
      {
        id:20,
        category: 'woman',
        name: 'Baby Pink Jacket',
        price: 59,
        image: wjacket
      }]
      setForHerItems(herItems);
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
    <>
      {/* banner section */}
      <div className="flex w-full lt-bg-primary lt-banner lt-mt-body relative">
        <div className="flex flex-col w-1/2 items-center justify-center relative">
          <span className="text-xs lg:text-lg my-4 text-center">
            #wintercollection
          </span>
          <div className="w-full flex flex-col justify-center mb-6">
            <span className="font-bold text-lg md:text-2xl lg:text-3xl text-center lt-text-accent">
              Womens Winter
            </span>
            <span className="font-bold text-lg md:text-2xl lg:text-3xl text-center lt-text-accent">
              Collection
            </span>
          </div>
          <div className="flex w-full justify-center mb-6">
            <span className="lt-bg-accent px-3 py-1 text-white text-center">
              Explore Now
            </span>
          </div>
          <div className="absolute bottom-0 flex items-center justify-evenly">
            <span className="pr-2">Men</span>
            <span className="border-r border-l border-gray-500 px-2 underline">
              Women
            </span>
            <span className="pl-2">Kids</span>
          </div>
        </div>
        <div className="flex w-1/2 h-full justify-center relative items-center">
          <div className="h-40 w-40 sm:w-60 sm:h-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full lt-banner-blob"></div>
          <div className="absolute bottom-0">
            <img
              className="h-40 w-40 sm:w-60 sm:h-60 md:h-72 md:w-72 lg:h-80 lg:w-80"
              src={women}
              alt="bannerimage"
              sizes=""
              srcSet=""
            />
          </div>
        </div>
      </div>
      {/* forher */}
      <div className="flex flex-col md:flex-row w-full bg-white p-2 md:p-4">
        <div className="w-full md:hidden">
          <span className="font-bold text-lg md:text-2xl lg:text-3xl text-center underline">
            #forher
          </span>
        </div>
        <div className="flex justify-between items-center w-full md:hidden for-her-header px-4 py-4 mb-2">
          <span className="font-semibold">Flat 20% discount on winter wears</span>
          <div className="flex w-1/2 justify-end">
            <button className="shop-button font-bold px-4 py-1">shop now</button>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col justify-end w-1/3">
          <div className="flex w-full justify-center items-center mb-4">
            <span className="font-bold text-lg md:text-2xl lg:text-3xl text-center underline">
              #forher
            </span>
          </div>
          <div className="for-her-card flex relative">
            <div className="absolute bottom-0 right-0">
              <img
                className=""
                src={forher}
                alt="forherimage"
                sizes=""
                srcSet=""
              />
            </div>
            <div className="absolute bottom-0 flex w-full mb-4 justify-center">
              <span className="shop-button px-10 py-2 md:px-12 lg:px-20 lg:py-3 font-bold">
                SHOP NOW
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-0 md:p-4">
          <div className="w-full flex justify-between mb-4">
            <span className="text-xs md:text-base uppercase">All</span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Blazers
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Jackets
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Dresses
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Trousers
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Accessories
            </span>
          </div>
          <div className="h-full grid grid-cols-3 gap-4">
          {
              itemsForHer.map(her => (
                <ItemCard key={her.id} item={her} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="w-full flex relative">
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="border border-white px-2 py-1 sm:px-4 sm:py-2">
            <div className="lt-bg-transparent px-12 py-2 sm:px-20 sm:py-4 md:px-28 md:py-6 lg:px-40 lg:py-8 xl:px-52 xl:py-10" >
              <span className="font-bold uppercase text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                SALE
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-end px-2 md:px-6 lg:px-12 py-4">
          <div className="w-full flex justify-center">
            <img
              className=""
              src={heels}
              alt="forherimage"
              sizes=""
              srcSet=""
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-end px-2 md:px-6 lg:px-12 py-4">
          <div className="w-full flex justify-center">
            <img
              className=""
              src={specs}
              alt="forherimage"
              sizes=""
              srcSet=""
            />
          </div>
        </div>
      </div>
      {/* forhim */}
      <div className="flex flex-col md:flex-row w-full bg-white p-2 md:p-4">
        <div className="w-full md:hidden">
          <span className="font-bold text-lg md:text-2xl lg:text-3xl text-center underline">
            #forhim
          </span>
        </div>
        <div className="flex justify-between items-center w-full md:hidden for-her-header px-4 py-4 mb-2">
          <span className="font-semibold">Flat 20% discount on winter wears</span>
          <div className="flex w-1/2 justify-end">
            <button className="shop-button font-bold px-4 py-1">shop now</button>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-0 md:p-4">
          <div className="w-full flex justify-between mb-4">
            <span className="text-xs md:text-base uppercase">All</span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Blazers
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Jackets
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Shirts
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Trousers
            </span>
            <span className="text-xs md:text-base uppercase lt-text-grey">
              Accessories
            </span>
          </div>
          <div className="h-full grid grid-cols-3 gap-4">
            {
              itemsForHim.map(him => (
                <ItemCard key={him.id} item={him} />
              ))
            }
          </div>
        </div>
        <div className="hidden md:flex md:flex-col justify-end w-1/3">
          <div className="flex w-full justify-center items-center mb-4">
            <span className="font-bold text-lg md:text-2xl lg:text-3xl text-center underline">
              #forhim
            </span>
          </div>
          <div className="for-him-card flex relative">
            <div className="absolute bottom-0 right-0">
              <img
                className=""
                src={forhim}
                alt="forherimage"
                sizes=""
                srcSet=""
              />
            </div>
            <div className="absolute bottom-0 flex w-full mb-4 justify-center">
              <span className="shop-button px-10 py-2 md:px-12 lg:px-20 lg:py-3 font-bold">
                SHOP NOW
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
