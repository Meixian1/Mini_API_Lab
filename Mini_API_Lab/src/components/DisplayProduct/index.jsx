import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import './index.css'



const DisplayProduct = () => {

    const [displayObjects, setDisplayObjects] = useState([]);
    console.log(displayObjects);

    useEffect(()=>{
 
    axios.get('https://dummyjson.com/products').then((response) => {
        console.log(response);
        let array = response.data.products;
        setDisplayObjects(array);
    });

    }, [])

    let dummyJSON = displayObjects.map((product) => {
        return (
            <div key={product.id}>
               {/* <span>{product.id}</span>*/}
                <span>{product.title}</span>
                <span>{product.price}</span>
               {/* <img src={product.images[0]} alt={product.title} /> */}
            </div>
        );
    });
    

  return (
    <div id="product-container">
        {dummyJSON}
    </div>
  )
}


export default DisplayProduct;