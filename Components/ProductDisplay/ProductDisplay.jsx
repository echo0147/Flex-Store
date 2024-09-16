import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
export const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(123)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          reiciendis quas deserunt placeat corrupti impedit quam, odio dolores
          dicta numquam voluptas modi dolorem qui quo!
        </div>
        <div className="productdisplay-right-option">
          <h1>Select Flavour</h1>
          <div className="productdisplay-right-options">
            <div>Watermelon</div>
            <div>Apple</div>
            <div>Mojito</div>
            <div>Bubblegum</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>SUPPLEMENT, BCAA, GLUTAMINE,
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>SUPPLEMENT, BCAA, GLUTAMINE,
        </p>
      </div>
    </div>
  );
};
