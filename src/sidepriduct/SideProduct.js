import { useState ,useEffect } from "react";
import Nav from "../Navigation/Nav";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import SideBar from "../SideBar/SideBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";
// import RotateLoader from "react-spinners/RotateLoader"
// DataBase

import data from "../db/data";
import Card from "../components/Card";


function SideProducts() {

  const [slelectedCategory, setSlelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  //----------Input Filter-----------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  const handleZipChityChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItem = data.filter((datas) =>
    datas.title.toLowerCase().indexOf(query.toLowerCase())!== -1
  );
  //----------Radio Filters-----------
  const handleChange = (event) => {
    setSlelectedCategory(event.target.value);
  };

  //----------Buttons Filter-----------

  const handleClick = (event) => {
    setSlelectedCategory(event.target.value);
  };

  function filtredData(datas, selected, query) {
    let filteredProducts = datas;

    // filtering input
    if (query) {
      filteredProducts = filteredItem;
    }

    // selecter Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice,address,Qty,Hours,Distance})=>(
      <Card
       key={Math.random()}
       img={img}
       title={title}
       star={star}
       reviews={reviews}
       newPrice={newPrice}
       prevPrice={prevPrice}
       address={address}
       Qty={Qty}
       Hours={Hours}
       Distance={Distance}
       />
    ))
  }



  const result = filtredData(data, slelectedCategory, query);

  const [loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])


  return (

    <div className="main">
     
      <SideBar className="sidebar" handleChange={handleChange}/>
      <Nav 
       query={query}
       handleInputChange={handleInputChange} />
      <Products result={result} />
    
    </div>
  );
}

export default SideProducts;



