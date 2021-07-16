import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  return (
    <div className="h-full flex flex-col justify-between rounded-b-md mb-1">
      <Link to={`${props.item.category}/${props.item.id}`}>
      <div className="flex justify-end items-center for-her-product-card">
        <img
          className=""
          src={props.item.image}
          alt="jacket"
          sizes=""
          srcSet=""
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="lt-text-grey text-center">
          {props.item.name}
        </span>
        <span className="font-semibold">${props.item.price}</span>
      </div>
      <div className="flex items-center justify-between">
        <IconButton aria-label="add to favorites">
          <Icon className="lt-text-accent lt-icon-sm">favorite</Icon>
        </IconButton>
        <IconButton aria-label="share">
          <Icon className="lt-text-accent lt-icon-sm">share</Icon>
        </IconButton>
      </div>
      </Link>
    </div>
  );
};

export default ItemCard;