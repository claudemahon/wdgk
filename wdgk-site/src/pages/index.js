import React from "react"
import 'bulma/css/bulma.css'
import Navbar from '../components/navbar.js'
// import { Link } from "gatsby"


const IndexPage = () => {
  return(
    <>
    <Navbar/>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="contaier">
            <h1 className="subtitle">What Does Google Know?</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
