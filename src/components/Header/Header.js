import React ,{ Component} from 'react'
import './header.css'
import bag from './images/bag.svg'
import menu from './images/menu.svg'
import search from './images/search.svg'

class Header extends Component{
  render(){
    return (
      <div>
      <header>
		<div className="top">
			<div className="topon">
				<div className="menu">
					<a href="#">
            <img src={menu} alt="menu"/>
          </a>
				</div>
				<div className="logo"></div>
				<div className="topright">
					<div className="search">
						<a href="#">
              <img src={search} alt="search"/>

            </a>
					</div>
					<div className="shoppingbag">
						<a href="#">
            <img src={bag} alt="bag"/>
            </a>
					</div>
					<div className="login">
						<a href="#">登录</a>/<a href="#">注册</a>
					</div>
				</div>
			</div>
		</div>
	</header>
  </div>
    )
  }
}

export default Header
