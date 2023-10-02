import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Grid, Link } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import "../App.css";
export default function Card({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  address,
}) {
  return (
    <>
      <section className="card">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginTop: "15%" }}>
            <img src={img} className="card-image" alt="Shoe" />
            <div className="card-details">
              <h3 className="card-title">{title}</h3>
              <section className="card-reviews">
                {star} {star} {star} {star}
                <span className="total-reviews">{reviews}</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>${prevPrice}</del> ${newPrice}
                </div>
                <div className="bag">
                  <BsFillBagHeartFill className="bag-icon" />
                </div>
              </section>
            </div>
          </div>
          <div style={{ paddingLeft: 50 }} className="box">
            <div
              class="card"
              style={{
                width: "70%",
                height: "80%",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflowWrap: "break-word",
              }}
            >
              <div
                class="card-title"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textDecoration: "underline",
                }}
              >
                {title}
              </div>
              <div
                class="card-description"
                style={{ fontSize: "15px", marginBottom: "15px" }}
              >
                <h5>
                  {" "}
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is
                </h5>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <LocationOnSharpIcon style={{ width: "18px" }} />
                  <h5>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Target/@40.3063518,-74.6801264,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3e17abfed554d:0xf60e5b43c8dea067!8m2!3d40.3063477!4d-74.6775515!16s%2Fg%2F1v6qjkmv?entry=ttu"
                    >
                      {" "}
                      Address - {address}
                    </a>
                  </h5>
                </div>
              </div>
              <button
                class="btn"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              >
                Buy Now
              </button>
              <div
                className="price"
                style={{ paddingTop: 5, marginBottom: 15 }}
              >
                Best Deal<del> ${prevPrice}</del> ${newPrice}
              </div>
              {star}
              {star}
              {star}
              <div style={{ marginRight: 10 }}>
                <ShoppingCartIcon />
                <BookmarkAddIcon />
                <DeliveryDiningIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
