import React from "react"

import Layout from '../components/layout'
import GetTheApp from '../components/get-the-app'

export default () => (
  <Layout title='About us'>
    <GetTheApp title="Buy and sell authentic streetwear and sneakers on your phone." />
    <img src="static/supreme-box-logo-stack.png"
       srcSet="static/supreme-box-logo-stack@2x.png 2x,
               static/supreme-box-logo-stack@3x.png 3x"
       className="supreme-box-logo-stack" />
    <style jsx>{`
      .supreme-box-logo-stack {
        position: absolute;
        bottom: 169px;
      }
    `}</style>
  </Layout>
)
