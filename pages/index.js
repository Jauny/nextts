import React from 'react'
import {connect} from 'react-redux'
import Layout from '../src/components/layout'
import GetTheApp from '../src/components/get-the-app'

class Index extends React.Component {
  render () {
    return (
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
  }
}

export default connect()(Index)
