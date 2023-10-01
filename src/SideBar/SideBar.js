import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
// import Color from "./Colors/Color";
import Logo from '../assets/amazon.png'
import "./SideBar.css";
import Star from "./star/Star";
import { useNavigate } from "react-router-dom";
export default function SideBar({ handleChange }) {
  console.log(handleChange);
  const navigate = useNavigate();
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
       {/* <h1>Amazon<span style={{fontSize:23,color:'orange'}}>.in</span></h1> */}
       <h1 onClick={()=>{navigate("/")}} width={50} style={{paddingTop:18,fontWeight:1000,fontSize:30,cursor:'pointer'}}>Find Local</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        {/* <Color handleChange={handleChange} /> */}
        <Star />
      </section>
    </>
  );
}
