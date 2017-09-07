import React ,{ Component} from 'react'
import './shopping_count.css'
class Shopping_count extends Component{
  render(){
    return (
      <section>

		   <div className="denglu one">
				<form action="" id="log_on">
				   <a href="#"><img src={require("./images/x_03.jpg")} alt="" className="guanbi_t" /></a>
					<div className="logo_one">
						<img src={require("./images/logo1_03_03.png")} alt="" />
					</div>
					<div className="account">
						<a href="#"><img src={require("./images/dl.jpg")} alt="" /></a>
						<input type="text" className="username" />
						<div>
							<span className="one cw">错误</span>
							<span className="one zq">正确</span>
						</div>
					</div>
					<div className="account">
						<a href="#"><img src={require("./images/dl2_16.jpg")} alt="" /></a>
						<input type="password" className="password" />
						<div>
							<span className="one cw">错误</span>
							<span className="one zq">正确</span>
						</div>
					</div>
						<a href="#" className="dl">登录</a>
					<div className="zhuce clrarfix">
						<a href="#">忘记密码?</a>
						<a href="#">注册</a>
					</div>
					<div className="link_a">
						<a href="#"><img src={require("./images/QQ.png")} alt="" /></a>
						<a href="#"><img src={require("./images/WX.png")} alt="" /></a>
						<a href="#"><img src={require("./images/WB.png")} alt="" /></a>
					</div>
				</form>
			</div>
		<div className="mains">
			<div className="mains_top clearfix">
				<div className="clearfix">
					<h2>购物车</h2>
					<p>[<span className="zongshu"></span>件]</p>
				</div>
				<div className="clearfix">
					<em>购物车</em>
					<p>填写订单</p>
					<p>付款，购买成功</p>
				</div>
				<div>
				    <img src={require("./images/main.jpg")} alt=""/>
				</div>
			</div>

			<div className="mains_mid">
			<div className="mains_go one">
				<img src={require("./images/banner_06.jpg")} alt="" />
			</div>
			   <div className="min_mid">
				<div className="clearfix">
					<p><input type="checkbox" className="all" /><span>全选</span></p>
	                <p>商品</p>
	                <p>单价</p>
	                <p>数量</p>
	                <p>小计</p>
	                <p>操作</p>
				</div>
				<ul className="list">
					<li className="clearfix">
						<div className="left clearfix">
							<input type="checkbox" className="part" />
							<img src={require("./images/shopping_03.jpg")} alt="" />
							<a href="#">龙之谷六周年限定礼包Boss冰龙款男<br/>士T恤</a><br/>
							<span>款式：iPhone 5</span><br/>
							<span>尺码：XL</span>
						</div>
						<div className="right clearfix">
							<div><em>￥<span className="price">79</span>.00</em></div>
							<div>
								<a href="#" className="add">+</a>
								<input type="text" value="1" className="num" />
								<a href="#" className="minus">-</a>
							</div>
							<div><span>￥ <span className="Subtotal">79</span>.00</span></div>
							<a href="#" className="cha_d"><img src={require("./images/x_03.jpg")} alt="" /></a>
						</div>
						<div className="qipao one clearfix">
								<a href="#" className="no">删除</a>
								<a href="#" className="off">不删除</a>
							</div>
					</li>
					<li className="clearfix">
						<div className="left clearfix">
							<input type="checkbox" className="part" />
							<img src={require("./images/shopping_03.jpg")} alt="" />
							<a href="#">龙之谷六周年限定礼包Boss冰龙款男<br/>士T恤</a>
						</div>
						<div className="right clearfix">
							<div><em>￥<span className="price">79</span>.00</em></div>
							<div>
							    <a href="#" className="add">+</a>
								<input type="text" value="1" className="num"/>
								<a href="#" className="minus">-</a>
							</div>
							<div><span>￥ <span className="Subtotal">79</span>.00</span></div>
							<a href="#" className="cha_d"><img src={require("./images/x_03.jpg")} alt="" /></a>
						</div>
						<div className="qipao one clearfix">
								<a href="#" className="no">删除</a>
								<a href="#" className="off">不删除</a>
							</div>
					</li>
				</ul>
				 <div className="mains_bottom clearfix">
					 <div className="bottom_left">
					    <input type="checkbox" className="all"/><span>全选</span>
					    <a href="#">删除</a>
					    <em>共<span className="gong">2</span>件商品，以选择<span className="yijing">2</span>件</em>
					    <div className="qipao_a one">
					    	<a href="#" className="no_a">删除</a>
							<a href="#" className="off_a">不删除</a>
					    </div>
					 </div>
				    <div className="bottom_right">
				        <div>
					    	<p>合计：</p>
					    	<p>[不含运费]：</p>
				    	</div>
				    	<strong>￥<span className="total">158</span>.00</strong>
				    	<a href="order.html" className="jiesuan">去结算</a>
				    </div>
				</div>
			   </div>
			</div>
		</div>
	</section>
    )
  }
}

export default Shopping_count
