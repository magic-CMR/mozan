import React ,{ Component} from 'react'
import './shopping_set.css'
class Shopping_set extends Component{
  render(){
    return (
      <section>
  <div className="mainss">
    <div className="mainss_top clearfix">
      <div className="clearfix">
        <h2>购物车</h2>
        <p>[<span>99</span>件]</p>
      </div>
      <div className="clearfix">
        <em>购物车</em>
        <p>填写订单</p>
        <p>付款，购买成功</p>
      </div>
      <div>
          <img src={require("./images/main.jpg")} alt="" />
      </div>
    </div>
    <div className="mainss_mid clearfix">
       <div className="mainss_left clearfix">
        <div className="clearfix">
          <img src={require("./images/shopping_03.jpg")} alt="" />
          <p>龙之谷六周年限定礼包Boss冰龙款男<br/>士T恤</p>
        </div>
        <div>
          <span>款式：iphone 5</span>
          <br/>
          <span>尺码：XL</span>
          <br/>
          <span>数量：x1</span>
        </div>
          <div className="mainss_right clearfix">
            <a href="Advance booking.html">返回</a>
            <a href="shopping1.html">去购物车结算</a>
          </div>
      </div>

    </div>
    <div className="mainss_down">
      <div className="down_a clearfix">
        <p>您还可能需要</p>
        <div></div>
      </div>
      <div className="down_b clearfix">
        <div>
          <img src={require("./images/shopping1_14.jpg")} alt="" />
          <p>龙之谷六周年限定礼包<br/>大Boss冰龙款...</p>
          <div>
            <span>￥88.00</span>
            <a href="#"><img src={require("./images/SC_10.jpg")} alt="" /></a>
          </div>
        </div>
        <div>
          <img src={require("./images/shopping1_14.jpg")} alt="" />
          <p>龙之谷六周年限定礼包<br/>大Boss冰龙款...</p>
          <div>
            <span>￥88.00</span>
            <a href="#"><img src={require("./images/SC_10.jpg")} alt="" /></a>
          </div>
        </div>
        <div>
          <img src={require("./images/shopping1_14.jpg")} alt="" />
          <p>龙之谷六周年限定礼包<br/>大Boss冰龙款...</p>
          <div>
            <span>￥88.00</span>
            <a href="#"><img src={require("./images/SC_10.jpg")} alt="" /></a>
          </div>
        </div>
        <div>
          <img src={require("./images/shopping1_14.jpg")} alt="" />
          <p>龙之谷六周年限定礼包<br/>大Boss冰龙款...</p>
          <div>
            <span>￥88.00</span>
            <a href="#"><img src={require("./images/SC_10.jpg")} alt="" /></a>
          </div>
        </div>
        <div>
          <img src={require("./images/shopping1_14.jpg")} alt="" />
          <p>龙之谷六周年限定礼包<br/>大Boss冰龙款...</p>
          <div>
            <span>￥88.00</span>
            <a href="#"><img src={require("./images/SC_10.jpg")} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
  }
}

export default Shopping_set
