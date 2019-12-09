import {Fragment} from "react"
import Link from "next/link"
import css from '../assets/css/main.scss';

export default() => {
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <div id="checkout" className={css.container}>
      <form onSubmit={handleSubmit} className={css.checkOutForm}>
        <div>
          <input placeholder="First Name" type="text"/>
        </div>
        <div>
          <input placeholder="Last Name" type="text"/>
        </div>
        <div>
          <input placeholder="Email" type="email"/>
        </div>
        <div>
          <input placeholder="Phone" type="tel"/>
        </div>
        <div>
          <select>
            <option value="">- State</option>
            <option value="KY">Kentucky</option>
          </select>
        </div>
        <div className={css.checkBox}>
          <input type="checkbox"/>
          <p>I agree to the terms and conditions</p>
        </div>
        <div>
          <button type="submit" className={css.commonButton}>Check Out</button>
        </div>

        <p className={css.continueLink}>
          <Link href="/">
            <a>Continue shopping</a>
          </Link>
        </p>
      </form>

    </div>
  )
}
