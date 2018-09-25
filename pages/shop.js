import React from 'react'
import {connect} from 'react-redux'
import Layout from '../src/components/layout'

class Shop extends React.Component {
  render () {
    return (
      <Layout>
        shop
      </Layout>
    )
  }
}

export default connect()(Shop)
