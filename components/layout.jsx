import Head from './head'

import Nav from './nav'
import Footer from './footer'

export default ({children, title}) => (
  <div>
    <Head />
    <header>
      <Nav />
    </header>

    { children }
    <Footer />
  </div>
)
