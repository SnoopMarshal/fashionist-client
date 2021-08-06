import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { aws_s3_uri, base_url } from "../../../../config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { setCart } from "./../../../../redux/actions/cartAction";
import { setWishList } from "./../../../../redux/actions/wishlistAction";
import './item-details.css';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Lottie from 'react-lottie';
import * as woohoo from './../../../../assets/lottie/woohoo.json';


const ItemDetails = ({ auth: { isAuthenticated, isLoading, isRegistered }, setWishList, setCart, shop: { wishlist, cart } }) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: woohoo.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };
    const [item, setItem] = useState({});
    const [showLottie, setLottie] = useState(false)
    const [isWishListedItem, setToWishListItem] = useState(false);
    const [isCartItem, setToCartItem] = useState(false);
    const checkIsWishListedItem = () => {
        const wishlistMap = new Set(wishlist.map(o => o._id));
        setToWishListItem(wishlistMap.has(item._id))
    }
    const checkIsCartItem = () => {
        const cartMap = new Set(cart.map(o => o._id));
        setToCartItem(cartMap.has(item._id))
    }
    const addToFavorite = item => {
        setWishList(item)
    }
    const addToCart = item => {
        setLottie(true);
        setTimeout(() => {
            setCart(item);
        }, 2000);
    }
    const { id, category } = useParams();
    const getItemDetails = async (source) => {
        try {
            const result = await axios.get(base_url + 'api/item/' + id, { cancelToken: source.token })
            setItem(result.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        checkIsWishListedItem();
    }, [wishlist]);
    useEffect(() => {
        checkIsCartItem();
    }, [cart]);
    useEffect(() => {
        const source = axios.CancelToken.source()
        getItemDetails(source)
        return () => {
            source.cancel();
        }
    }, []);
    return (
        <div className="lg:container lg:mx-auto w-full lt-mt-body p-4">
            {isWishListedItem ? 'true' : 'false'}  {isCartItem ? 'true' : 'false'}
            <div className="w-full md:w-1/2 lg:w-1/3">
                <Carousel className="">
                    {item?.photos?.map(o => (
                        <div key={o}>
                            <img className="" src={aws_s3_uri + '/' + o} alt="productimage" />
                        </div>
                    ))}
                </Carousel>
                {isCartItem ?
                    <div className="flex justify-end items-center">
                        <button className="rounded-md buy-now-button border flex items-center justify-center px-4 py-2 uppercase mr-2">go to cart</button>
                    </div> :
                    <div className="flex items-center justify-end">
                        <button className="rounded-md buy-now-button border flex items-center justify-center px-4 py-2 uppercase mr-2">buy now</button>
                        <div className="relative">
                            <div className="w-full flex items-center absolute bottom-10 left-1/3">
                                {showLottie &&
                                    <div className="h-16 w-16 lottie-rotate"><Lottie options={defaultOptions} eventListeners={[
                                        {
                                            eventName: 'complete',
                                            callback: () => setLottie(false),
                                        }
                                    ]} /></div>}
                            </div>
                            <button className="rounded-md buy-now-button border flex items-center justify-center px-4 py-2 uppercase" onClick={() => addToCart(item)}>add to cart</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
ItemDetails.propTypes = {
    setWishList: PropTypes.func.isRequired,
    setCart: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    shop: state.shop
})

export default connect(mapStateToProps, { setWishList, setCart })(ItemDetails)
