import React from "react"
import { Link } from "gatsby"
import  Bio from '../components/bio'
import '../styles/main.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          to={`/`}
        >
          Blog for <span>change.</span>
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link
          to={`/`}
        >
          Blog for <span>change.</span>
        </Link>
      </h3>
    )
  }
  return (
    <div className="wrapper">
      <header className="c-header">
        {header}
        <Bio/>
        </header>
      <main className="c-main">{children}</main>
    </div>
  )
}

export default Layout
