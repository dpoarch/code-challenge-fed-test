import React, { Fragment } from "react"
import App from "next/app"
import "normalize.css"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Component {...pageProps} />
        <style global jsx>{`
          html {
            box-sizing: border-box;
          }
          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }
          body {
            background: #fafafa;
            font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
          }
        `}</style>
      </Fragment>
    )
  }
}
