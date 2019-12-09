import Link from "next/link"
import CartIcon from "components/cart-icon"
import { FaBars } from "react-icons/fa"

import css from '../../assets/css/main.scss';

export default ({ cartCount, onToggleNav }) => {
  return (
    <header className={`${css.navbar} `}>
      <Link href="/">
        <a>Dave's</a>
      </Link>
      <div id="right" className={css.headerRight}>
        <button onClick={onToggleNav}>
          <FaBars />
        </button>
        <CartIcon cartCount={cartCount} />
      </div>
    </header>
  )
}
