import {Fragment, useState} from "react"
import Header from "components/header"
import Nav from "components/nav"

import css from '../assets/css/main.scss';

export default() => {
  const [cartCount,
    setCartCount] = useState(0)
  const [navOpen,
    setNavOpen] = useState(false)
  const [cartMessage,
    setCartMessage] = useState(css.cartItemHide);

  const addToCart = () => {
    setCartCount((c) => c + 1)
    setCartMessage(css.cartItem);
  }

  const handleNav = () => {
    setNavOpen((o) => !o)
  }

  const itemAdded = () => {
    return (
      <div className={cartMessage}>
        <span>{cartCount} item(s) added successfully!</span>
      </div>
    );
  }

  return (
    <div id="wrapper" className={css.container}>
      <Header cartCount={cartCount} onToggleNav={handleNav}/>
      <Nav isOpen={navOpen}/>
      <div id="card" className={css.container}>
        {itemAdded()}
        <div className={css.productCard}>
          <h1 className={css.example}>Product Name</h1>
          <p>This is the product description</p>
          <button onClick={addToCart} className={css.commonButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}