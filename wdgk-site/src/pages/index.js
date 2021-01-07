import React from "react"
import 'bulma/css/bulma.css'
import Navbar from '../components/navbar.js'
import './style.css'
import {Helmet} from "react-helmet";


const IndexPage = () => {
  return(
    <>
    <Helmet>
    <script data-ad-client="ca-pub-6133065310451508" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>
    <Navbar/>
      <section className="hero is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title">When you scroll down, you will be greeted by ads strategically placed by Google and other ad vendors. Use this site to determine the value of using a vpn and consider the information that is benign shared without your permission.</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
