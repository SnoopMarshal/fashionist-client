import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link,useRouteMatch } from "react-router-dom";
import { aws_s3_uri } from "./../../../../../../config";
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import {setWishList} from "./../../../../../../actions/wishlistAction";
import { connect } from "react-redux";

const ItemCard = ({auth: {isAuthenticated, isLoading, isRegistered}, item, setWishList}) => {
  let { url } = useRouteMatch();

  const addToFavorite = item => {
    setWishList(item)
  }
  const shareItem = e => {
    e.stopPropagation();
  }
  return (
    <motion.div whileHover={{translateY: -10, boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"}} className="h-full flex flex-col justify-between rounded-b-md mb-1">
      <Link to={`${url}/${item.categoryId}/${item._id}`}>
        <div className="flex justify-end items-center for-her-product-card">
          <img
            className="w-full object-cover"
            src={aws_s3_uri + '/' + item.thumbnail}
            alt="jacket"
            sizes=""
            srcSet=""
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="lt-text-grey text-center">
            {item.name}
          </span>
          <span className="font-semibold">&#8377;{item.price}</span>
        </div>
      </Link>
      <div className="flex items-center justify-end">
        {/* <IconButton aria-label="add to favorites" onClick={addToFavorite}> */}
          {isAuthenticated && <Icon className="lt-text-accent lt-icon-sm text-gray-400 cursor-pointer" onClick={() => addToFavorite(item)}>favorite</Icon>}
          {/* </IconButton> */}
        <IconButton aria-label="share">
          <Icon className="lt-text-accent lt-icon-sm" >share</Icon>
        </IconButton>
      </div>
    </motion.div>
  );
};
ItemCard.propTypes = {
  setWishList: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {setWishList})(ItemCard)
