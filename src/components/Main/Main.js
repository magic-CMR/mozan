import React ,{ Component} from 'react'
import './main.css'
class Main extends Component{
  render(){
    return (
      <section>
    		<div className="banner">
    			<div className="swiper-container">
    			     <div className="swiper-wrapper">
    			        <div className="swiper-slide"><img src={require("./images/lunbo_03.jpg")}/></div>
    			        <div className="swiper-slide"><img src={require("./images/lunbo_05.jpg")}/></div>
    			        <div className="swiper-slide"><img src={require("./images/lunbo_07.jpg")}/></div>
    			    </div>
    			    <div className="swiper-button-prev"></div>
    			    <div className="swiper-button-next"></div>
    		    </div>
    		</div>
    		<div className="main">
    			<div className="main_up">
    				<div className="main_up_l ">
    					<div >
                <img src={require("./images/presell_08.png" )}/>
                <h3>龙之谷六周年限定礼包大Boss冰龙男士T恤</h3>
              </div>
              <div>
    					<div>
    						<h4>距预售结束</h4>
    						<div>
    							<div>
    								<b>00</b>:
    								<b>00</b>:
    								<b>00</b>:
    								<b>00</b>
    							</div>
    							<div>
    								<span>天</span>
    								<span>时</span>
    								<span>分</span>
    								<span>秒</span>
    							</div>
    						</div>
    						<p>分享<a href="#"><img src={require("./images/weibo_03.jpg" )}/></a><a href="#">
                <img src={require("./images/weixin_05.jpg")}/></a></p>
    					</div>
    					<div>
    						<h4>相关专区</h4>
    						<a href="#">
    							<img src={require("./images/overwatch_12.png" )}/>
    						</a>
    					</div>
              </div>
    				</div>
    				<div className="main_up_r">
    					<ul>
    						<li>
    							<span>定金</span>
    							<div>
    								<b><span>￥</span>500.00</b><span>全款金额:1500.00</span>
    							</div>
    						</li>
    						<li>
    							<span>款式</span>
    							<div>
    								<a href="#">iphone5</a>
    								<a href="#">iphone6</a>
    								<a href="#">iphone7</a>
    							</div>
    						</li>
    						<li>
    							<span>尺码</span>
    							<div>
    								<a href="#">XXS</a>
    								<a href="#">XS</a>
    								<a href="#">S</a>
    								<a href="#">M</a>
    								<a href="#">L</a>
    								<a href="#">XL</a>
    								<a href="#">XXL</a>
    							</div>
    						</li>
    						<li>
    							<span>数量</span>
    							<div>
    								<a href="#" className="reduce">-</a>
    								<span className="num">1</span>
    								<a href="#" className="add">+</a>
    							</div>
    						</li>
    					</ul>
    					<p><span>注 : </span>商品将于<span>2016/10/5</span>统一发货</p>
    				</div>
    			</div>
    			<div className="main_up_d">
    				<a href="shopping2.html">立即预定</a>
    			</div>
    			<div className="main_down">
    				<img src={require("./images/Advance-booking_main_10.jpg" )}/>
    			</div>
    		</div>
    	</section>
    )
  }
}
export default Main
