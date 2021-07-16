import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { aws_s3_uri, base_url } from "./../../../../../../config";

const ItemCard = (props) => {

  const addToFavorite = e => {
    console.log(e);
    e.stopPropagation();
  }
  return (
    <div className="h-full flex flex-col justify-between rounded-b-md mb-1">
      <Link to={`${props.item.categoryId}/${props.item._id}`}>
        <div className="flex justify-end items-center for-her-product-card">
          <img
            className="w-full object-cover"
            src={aws_s3_uri + '/' + props.item.thumbnail}
            alt="jacket"
            sizes=""
            srcSet=""
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="lt-text-grey text-center">
            {props.item.name}
          </span>
          <span className="font-semibold">&#8377;{props.item.price}</span>
        </div>
      </Link>
      <div className="flex items-center justify-end">
        <IconButton aria-label="add to favorites" onClick={addToFavorite}>
          <Icon className="lt-text-accent lt-icon-sm text-gray-400">favorite</Icon>
        </IconButton>
        <IconButton aria-label="share">
          <Icon className="lt-text-accent lt-icon-sm" onClick={addToFavorite}>share</Icon>
        </IconButton>
      </div>
    </div>
  );
};

export default ItemCard;