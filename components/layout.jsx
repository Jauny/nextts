import Head from './head'

import Nav from './nav'
import Footer from './footer'

export default({children}) => (
  <div>
    <Head />
    <Nav />
    {children}
    <Footer />
    <style global jsx>{`
      body {
        margin: 0;
        font-family: 'Varela';
      }
    `}</style>
  </div>
)
