import React from "react";
import { connect } from "react-redux";
import { aws_s3_uri } from "./../../../../../../config";
import "./shopping-cart-menu.css";
import Icon from '@material-ui/core/Icon';
const ShoppingCartMenu = ({ shop: { cart } }) => {
  return (
    <div>
      {cart.map((o) => (
        <div className="flex w-full p-2 cart-item cursor-pointer" key={o._id}>
          <div>
            <img
              className="w-20 h-20"
              src={aws_s3_uri + "/" + o.thumbnail}
              alt=""
            />
          </div>
          <div className="flex items-start justify-evenly flex-col ml-2">
            <span className="font-semibold underline">{o.name}</span>
            <span className="text-xs">Quantity: 1</span>
            <Icon style={{ fontSize: 16 }}>delete_outline</Icon>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps)(ShoppingCartMenu);
