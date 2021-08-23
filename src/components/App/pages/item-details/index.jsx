import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { aws_s3_uri, base_url } from "../../../../config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { setCart } from "../../../../redux/actions/cartAction";
import { setWishList } from "../../../../redux/actions/wishlistAction";
import './item-details.css';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Lottie from 'react-lottie';
import * as woohoo from '../../../../assets/lottie/woohoo.json';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemDetails = ({ auth: { isAuthenticated }, setWishList, setCart, shop: { wishlist, cart } }) => {
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
    const [itemCount, setCount] = useState(1);
    const checkIsWishListedItem = () => {
        const wishlistMap = new Set(wishlist.map(o => o._id));
        setToWishListItem(wishlistMap.has(item._id))
    }
    const checkIsCartItem = () => {
        const cartMap = new Set(cart.map(o => o.item._id));
        setToCartItem(cartMap.has(item?._id))
    }
    const addToFavorite = item => {
        setWishList(item)
    }
    const addToCart = item => {
        setLottie(true);
        setTimeout(() => {
            setCart({ item, qty: itemCount });
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
    const addItem = () => {
        if (itemCount < 3) {
            setCount(itemCount + 1)
        }
    }
    const removeItem = () => {
        if (itemCount > 1) {
            setCount(itemCount - 1)
        }
    }
    useEffect(() => {
        checkIsWishListedItem();
    }, [wishlist]);
    useEffect(() => {
        checkIsCartItem();
    }, [cart, item]);
    useEffect(() => {
        const source = axios.CancelToken.source()
        getItemDetails(source)
        return () => {
            source.cancel();
        }
    }, []);
    return (
        <div className="lg:container lg:mx-auto flex flex-col md:flex-row w-full lt-mt-body p-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <Carousel className="w-full">
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
                    <>
                        <div className="flex items-center justify-between">
                            <ButtonGroup className="flex items-center" aria-label="outlined primary button group">
                                <IconButton className="decrease-button" aria-label="delete" onClick={() => removeItem()}>
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                                <span className="text-center font-semibold">{itemCount}</span>
                                <IconButton className="increase-button" aria-label="delete" onClick={() => addItem()}>
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            </ButtonGroup>
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
                                {
                                    isAuthenticated && <button className="rounded-md buy-now-button border flex items-center justify-center px-4 py-2 uppercase" onClick={() => addToCart(item)}>add to cart</button>
                                }
                            </div>
                        </div>
                        <div className="flex w-full">
                            {
                                isAuthenticated &&
                                <button className="w-full rounded-md buy-now-button border flex items-center justify-center px-4 py-2 uppercase mt-2">buy now</button>
                            }
                        </div>
                    </>
                }
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 md:px-4 mt-4 md:mt-0">
                <div>
                    <span className="text-xl md:text-2xl lg:text-4xl font-bold">{item.name}</span>
                </div>
                <div className="chip-category mt-4">
                    <span className="rounded-full border border-pink-600 text-pink-400 px-2 py-1">{item?.categoryId?.name}</span>
                </div>
                <div className="w-full price mt-4">
                    <span className="text-xl font-semibold md:text-2xl">&#8377;</span> <span className="text-xl font-semibold md:text-2xl">{item.price}</span>
                </div>
                <div className="description mt-4">
                    <p className="text-gray-500">{item.description}</p>
                </div>
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
