import React from 'react'
import { useParams } from 'react-router-dom';
import { aws_s3_uri } from "../../../../config";

export default function ItemDetails(props) {

    const {id, category} = useParams();
    return (
        <div className="flex w-full lt-mt-body">
            {id}
            {category}
            {aws_s3_uri}
        </div>
    )
}
