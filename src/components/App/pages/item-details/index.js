import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { aws_s3_uri, base_url } from "../../../../config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

export default function ItemDetails(props) {
    const [itemPhotos, setItemDetails] = useState([]);
    const { id, category } = useParams();
    const getItemDetails = async () => {
        try {
            const result = await axios.get(base_url + 'api/item/' + id)
            setItemDetails(result.data.data.photos);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getItemDetails();
    }, []);
    return (
        <div className="container mx-auto w-full lt-mt-body p-4">
            <div className="w-full md:1/2 lg:w-1/3">
                <Carousel className="">
                    {itemPhotos.map(o => (
                        <div key={o}>
                            <img className="" src={aws_s3_uri + '/' + o} alt="productimage" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
