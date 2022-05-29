import React, {useState} from "react";

function Item({ name, category }) {

  const [cartStatus, setCart] = useState(false)

  function handleClick () {
    setCart((cartStatus) => !cartStatus)
  }

  return (
    <li className={(cartStatus) ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={(cartStatus) ? "remove" : "add"} 
       onClick={handleClick}>{(cartStatus) ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
