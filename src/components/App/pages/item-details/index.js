import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { aws_s3_uri, base_url } from "../../../../config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './item-details.css';
import axios from 'axios';

export default function ItemDetails(props) {
    const [itemPhotos, setItemDetails] = useState([]);
    const { id, category } = useParams();
    const getItemDetails = async (source) => {
        try {
            const result = await axios.get(base_url + 'api/item/' + id, {cancelToken: source.token})
            setItemDetails(result.data.photos);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        const source = axios.CancelToken.source()
        getItemDetails(source);

        return () => {
            source.cancel();
        }
    }, []);
    return (
        <div className="lg:container lg:mx-auto w-full lt-mt-body p-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <Carousel className="">
                    {itemPhotos.map(o => (
                        <div key={o}>
                            <img className="" src={aws_s3_uri + '/' + o} alt="productimage" />
                        </div>
                    ))}
                </Carousel>
                <div className="flex items-center justify-end">
                <button className="rounded-md buy-now-button border flex items-center justify-center text-white px-4 py-2 uppercase mr-2">buy now</button>
                <button className="rounded-md buy-now-button border flex items-center justify-center text-white px-4 py-2 uppercase">add to cart</button>

                </div>
            </div>
        </div>
    )
}
