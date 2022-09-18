import React, { useState, useEffect } from "react";
import Outputs from "./Outputs";

export default function Inputs() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [taxes, setTaxes] = useState('');
  const [ads, setAds] = useState('');
  const [discount, setDiscount] = useState('');
  const [total, setTotal] = useState();
  const [count, setCount] = useState('');
  const [category, setCategory] = useState('');
  

  //* get Total

  useEffect(() => {
    if (price > 0) {
      let total = +price + +taxes + +ads - +discount;
      setTotal(total);
      document.getElementById("total").style.background = "#040";
    } else {
      setTotal(0);
      document.getElementById("total").style.background = "#a00d02";
    }
  }, [price, taxes, ads, discount]);

  // ! Clean Data
  const cleanData = () => {
    setTitle("");
    setPrice("");
    setTaxes("");
    setAds("");
    setDiscount("");
    setCount("");
    setCategory("");
    setTotal(0);
    document.getElementById("formInput").reset();
  };

  const handleProduct = (pro) => {
    setTitle(pro.title);
    setPrice(pro.price);
    setTaxes(pro.taxes);
    setAds(pro.ads);
    setDiscount(pro.discount);
    setCount(pro.count);
    setCategory(pro.category);
    setTotal(pro.total);
    
  };

  return (
    <div className="inputs">
      <form id="formInput">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
        />
        <div className="price">
          <input
            type="number"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
          />
          <input
            type="number"
            placeholder="taxes"
            onChange={(e) => setTaxes(e.target.value)}
            value={taxes}
            name="taxes"
          />
          <input
            type="number"
            placeholder="ads"
            onChange={(e) => setAds(e.target.value)}
            value={ads}
            name="ads"
          />
          <input
            type="number"
            placeholder="discount"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            name="discount"
          />
          <small id="total">{total}</small>
        </div>
        <input
          type="number"
          placeholder="count"
          onChange={(e) => setCount(e.target.value)}
          value={count}
          name="count"
        />
        <input
          type="text"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          name="category"
        />
        <Outputs
          title={title}
          price={price}
          taxes={taxes}
          ads={ads}
          discount={discount}
          total={total}
          count={count}
          category={category}
          cleanData={cleanData}
          handleProduct={handleProduct}
        />
      </form>
    </div>
  );
}
