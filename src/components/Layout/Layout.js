import React, { Component } from 'react'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
