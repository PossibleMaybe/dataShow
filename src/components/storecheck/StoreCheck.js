/**
 * Created by Administrator on 2017/10/16.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './StoreCheck.css';

import Top from './../../generalTemplate/Header';
import Loading from './../../generalTemplate/Loading';
//antd-mobile

//import { Button } from 'antd-mobile';
import wine from './../../images/wine-example.png';
import arrowRight from './../../images/arrow-right.png';
class StoreList extends Component {
    constructor(props){
        super(props);
        this.state = {
            storeList:[],
            pageNo:1,
            noMore:false,
        }
        this.winScroll = this.winScroll.bind(this);
    }
    storeCheck(){
        const data = {pageNo:this.state.pageNo};
        fetch("http://10.2.98.23:8080/hosService/lotstock/getLotStockInfo",{
            method:"POST",
            mode:"no-cor",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),

        })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                if(data.status == "1"){
                    if(data.info.length<10){
                        this.setState({
                            noMore:true,
                        })
                    }
                    this.setState({
                        storeList:this.state.storeList.concat(data.info),
                    })
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    winScroll(){
        let _this = this;
        console.log(this);
        console.log('storeCheck',window.scrollY);

        let scrH = document.body.clientHeight;


        let winH = window.screen.height;
        if(window.scrollY >= (scrH - winH)){
            _this.setState({
                pageNo:_this.state.pageNo+1,
            });

            _this.storeCheck();
        }
    }
    componentDidMount(){
        let _this = this;
        this.storeCheck();
        document.addEventListener('scroll',_this.winScroll);

    }
    componentWillUnmount(){
        document.removeEventListener('scroll',this.winScroll);
    }
    render(){
        return (
            <div className="store-list ">
                <div className="sl-title fs15">
                    商品清单
                </div>

                <div className="sl-detail">
                    <ul>
                        {
                            this.state.storeList.map((item,index)=>
                                <li key={index} className="clear bc1">
                                    <Link to={`/storedetail/${item.goods}`}>
                                        <div className="sld-left bx-b fl">
                                            <img src={wine} alt=""/>
                                        </div>
                                        <div className="sld-right fr">
                                            <div className="sldr-left" ref={(sldrL)=>{this.sldLeft = sldrL}}>
                                                <h3 className="fs13">{item.name}</h3>
                                                <h4 className="fs12 c2">{item.spec}</h4>
                                                <h6 className="fs11 c3">实销: {item.packnum}</h6>
                                                <h6 className="fs11 c3">可销: {item.alloQty}</h6>
                                            </div>

                                            <div className="sldr-right" ref={(sldrR)=>{this.sldRight = sldrR}}>
                                                <img src={arrowRight} alt=""/>
                                            </div>
                                        </div>
                                    </Link>

                                </li>
                            )
                        }

                    </ul>

                </div>
                {
                    this.state.noMore?<Loading data="已无更多数据" />:<Loading data="加载数据中..." />
                }
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


                <Loading />
            </div>
        )
    }
}

export default StoreCheck;