/**
 * Created by Administrator on 2017/10/16.
 */
import React,{Component} from 'react';

import './StoreCheck.css';

import Top from './../../generalTemplate/Header';

//antd-mobile

//import { Button } from 'antd-mobile';
import wine from './../../images/wine-example.png';
import arrowRight from './../../images/arrow-right.png';
class StoreList extends Component {
    constructor(props){
        super(props);
        this.state = {
            storeList:[1,2,3,4,5,6,7,8,9,10,11,12]
        }
    }

    render(){
        return (
            <div className="store-list ">
                <div className="sl-title">
                    商品清单
                </div>

                <div className="sl-detail">
                    <ul>
                        {
                            this.state.storeList.map(()=>
                                <li className="clear">
                                    <div className="sld-left bx-b fl">
                                        <img src={wine} alt=""/>
                                    </div>
                                    <div className="sld-right fr">
                                        <div className="sldr-left">
                                            <h3 className="fs16">洋河蓝色经典洋河蓝色经典洋河蓝色经典洋河蓝色经典</h3>
                                            <h4 className="fs14 c2">500ML</h4>
                                            <h6 className="fs12 c3">实销: 4000瓶</h6>
                                            <h6 className="fs12 c3">可销: 4000瓶</h6>
                                        </div>

                                        <div className="sldr-right">
                                            <img src={arrowRight} alt=""/>
                                        </div>
                                    </div>
                                </li>
                            )
                        }

                    </ul>

                </div>
            </div>

        )
    }
}


class StoreCheck extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="store-check">
                <Top left={true} name="库存查询"/>
                <div className="bg-color"></div>

                <StoreList />
            </div>
        )
    }
}

export default StoreCheck;