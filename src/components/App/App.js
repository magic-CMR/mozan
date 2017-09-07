import React ,{ Component} from 'react'
import './app.css'
import Footer from '../Footer/Footer.js'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js'
class App extends Component{
  render(){
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App

//improt
//导入  //{}命名导入

//export
//导出


//import React, { Component } from 'react'
// import './app.css'
// import Header from '../Header/Header'
// import Main from '../Main/Main'
// import Footer from '../Footer/Footer'
//
// class App extends Component {
//   render () {
//     return (
//       <div className='app'>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }
//
// export default App
