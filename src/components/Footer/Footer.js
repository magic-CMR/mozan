import React ,{ Component} from 'react'
import './footer.css'
import Directory from './images/Directory.svg'
import payment from './images/Payment.svg'
import distribution from './images/Distribution.svg'
import problem from './images/problem.svg'
import tel from './images/tel.svg'
import directory from './images/Directory.svg'
import about from './images/about.svg'
import clause from './images/clause.svg'
import friendshiplink from './images/friendshiplink.svg'
import taobao from './images/taobao.svg'
import weixin from './images/weixin.svg'


class Footer extends Component{
  render(){
    return (
      <div>
      <footer>
    		<div className="footerup">
    			<div className="footerup_on ">
    				<div className="">
    					<h2>帮助信息</h2>
              <div>
      					<ul>
      					 	<li>
                  <a href="#">
                      <img src={directory} alt="Directory"/>
                  <span>&nbsp;&nbsp;购物指南</span></a></li>
      					 	<li>
                  <a href="#">
                      <img src={payment} alt="Payment"/>
                  <span>&nbsp;&nbsp;支付方式</span></a>
                  </li>
      					 	<li>
                  <a href="#">
                      <img src={distribution} alt="Distribution"/>
                  <span>&nbsp;&nbsp;配送方式</span></a>
                  </li>
      					 	<li>
                  <a href="#">
                      <img src={problem} alt="problem"/>
                  <span>&nbsp;&nbsp;售后服务</span></a>
                  </li>
      					 </ul>
      					 <ul>
      					 	<li><a href="#">
                      <img src={tel} alt="tel"/>
                  <span>&nbsp;&nbsp;服务中心</span></a>
                  </li>
      					 	<li><a href="#">
                      <img src={about} alt="about"/>
                  <span>&nbsp;&nbsp;关于我们</span></a>
                  </li>
      					 	<li><a href="#">
                    <img src={clause} alt="clause"/>
                  <span>&nbsp;&nbsp;免责条款</span></a>
                  </li>
      					 	<li><a href="#">
                      <img src={friendshiplink} alt="friendshiplink"/>
                  <span>&nbsp;&nbsp;友情链接</span></a>
                  </li>
      					 </ul>
               </div>
    				</div>
    				<div>
    					<h2>关注我们</h2>
    					<div>
    						<div>
    							<img src={require("./images/erweima_09.png" )}/>
    							<a href="#">
                      <img src={taobao} alt="taobao"/>
                  </a>
    						</div>
    						<div>
    							<img src={require("./images/erweima_11.png" )}/>
    							<a href="#">
                      <img src={weixin} alt="weixin"/>
                  </a>
    						</div>
    					</div>
    				</div>
    				<div>
    					<h2>客服热线</h2>
    					<div>
                <div>
                    <img src={tel} alt="tel"/>
    						</div>
    						<div>
    							<span>400 113 5353</span>
    							<span>[ 周一至周五 9:00-18:00 ]</span>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div className="footerdown">
    			<div className="footerdown_on ">
    				<a className="footer_logo"></a>
    				<p className="copyright">北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved
            <br/>
    				地址：北京市朝阳区建国路93号院4号楼4层505
    				</p>
    			</div>
    		</div>
    	</footer>
      </div>
    )
  }
}
export default Footer
