import React ,{ Component} from 'react'
import './app.css'
import Main from '../Main/Main.js'
import Layout from '../Layout/Layout'
import Cashier from '../Cashier/Cashier.js'
import Order from '../Order/Order.js'
import Shopping_count from '../Shopping_count/Shopping_count.js'
import Shopping_set from '../Shopping_set/Shopping_set.js'

class App extends Component{
  render(){
    return (
      <div className="app">
        <Layout>
          <Cashier />
        </Layout>
      </div>
    )
  }
}

export default App
