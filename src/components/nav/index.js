import Link from "next/link"
import css from '../../assets/css/main.scss';

export default ({ isOpen }) => {
  let navAction = `${css.fadeInDown}`;
  let navOpen = `${css.navMenuOpen}`;
  if (!isOpen) {
    return null;
  }
  return (
    <nav className={`${css.navMenu} ${navOpen} ${css.animated} ${navAction}`}>
      <Link href="/checkout">
        <a>Check Out</a>
      </Link>
    </nav>
  )
}
