import React ,{ Component} from 'react'
import './cashier.css'
import zhifubao_c from './images/zhifubao_c.svg'
import weixin_c from './images/weixin_c.svg'
class Cashier extends Component{
  render(){
    return (
      <section>

    		<div className="mainc_top clearfix">
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
    			    <img src={require("./images/main.jpg")}/>
    			</div>
    		</div>
    		<div className="mainc_up ">
    			<div>
    				<div>
    					<span>订单提交成功，请您尽快付款！</span>
    					<span>请您在提交订单后<span>24小时</span>内完成支付，否则订单会自动取消。</span>
    				</div>
    				<div>
    					<span>应付金额：</span>
    					<span>￥168.00</span>
    				</div>
    			</div>
    			<div>
    				<div className="clearfix">
    					<b>订单号：1234567890</b>
    					<div>
    						<span>
                
                迪力木拉提

                186****0734
                </span>
    						<span>

                新疆维吾尔自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56园72幢1单元1103号
                </span>
    					</div>
    				</div>
    				<div>
    					<span>选择支付方式</span>
    					<div>
    						<a href="#">
                <img src={weixin_c} alt="weixin_c" />
                支付宝
                </a>
    						<div className=""></div>
    					</div>
    					<div>
    						<a href="#">
                <img src={zhifubao_c} alt="zhifubao_c" />
                微信
                </a>
    						<div className="one"></div>
    					</div>
    				</div>
    			</div>
    			<div>
    				<div className=""><a href="#">付款</a>
    				</div>
    				<div className="mainc_weixin clearfix one">
    					<h3>微信支付</h3>
    					<div>
    						<span>距离二维码过期还剩 <span className="miao">60</span>秒<br/>过期后请刷新页面重新获取二维码</span>
    						<img src={require("./images/shouoyintai_erweima_03.jpg")}/>
    						<em>请使用微信扫一扫<br/>扫描二维码支付</em>
    					</div>
    					<div>
    						<img src="images/weixin_iphone_03.jpg" alt="" />
    					</div>
    				</div>
    			</div>
    		</div>
    		<div className="mainc_down clearfix one">
    			<div className="mainc_down_l">
    				<img src="images/xczg_03.jpg" alt=""/>
    			</div>
    			<div className="mainc_down_r">
    				<h3>支付成功！</h3>
    				<div  className="clearfix">
    					<p>订单号 : 123092301830<br />成功支付 : ￥168.00</p>
    					<div>
    						<a href="Advance booking.html">继续逛逛</a>
    						<a href="order.html">查看订单</a>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    )
  }
}

export default Cashier
