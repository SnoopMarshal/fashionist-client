import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const ItemCard = (props) => {
  return (
    <div className="h-full bg-white flex flex-col justify-between shadow-lg rounded-b-md mb-1">
      <div
        className="item-card-media"
        style={{ backgroundImage: "url(" + props?.item?.image + ")" }}
      />
      <div className="flex flex-col items-start pl-2 pr-1 pt-2">
        <span className="font-semibold lt-text-primary text-left">
          {props?.item?.title}
        </span>
        <div className="flex w-full items-center justify-between">
          <span className="lt-bg-accent text-white font-semibold px-2 rounded-md">
            ${props?.item?.price}
          </span>
          <div className="flex items-center">
            <IconButton aria-label="add to favorites">
              <Icon className="lt-text-accent lt-icon-sm">favorite</Icon>
            </IconButton>
            <IconButton aria-label="share">
              <Icon className="lt-text-accent lt-icon-sm">share</Icon>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
