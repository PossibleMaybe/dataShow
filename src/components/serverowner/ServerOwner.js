/**
 * Created by Administrator on 2017/10/16.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Top from './../../generalTemplate/Header';
import Loading from './../../generalTemplate/Loading';
import './ServerOwner.css';
import storeOwner from './../../images/store-owner.png';
class ServerOwner extends Component {
    constructor(props){
        super(props);
        console.log(this);
        this.state = {
            totalMoney:0,
            soDetail:[],
            pageNo:1,
            noMore:false,

        }
        this.winScroll = this.winScroll.bind(this);
    }
    //获取详细信息
    getDetail() {
        const data = {pageNo:this.state.pageNo};
        fetch("http://10.2.98.23:8080/hosService/clientar/getClientarInfo",{
            method:"POST",
            mode:"no-cor",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),

        })
            .then(response => response.json())
            .then(data => {
                if(data.status == "1"){
                    console.log(data.info);
                    if(data.info.length<10){
                        this.setState({
                            noMore:true,
                        })
                    }
                    this.setState({
                        soDetail:this.state.soDetail.concat(data.info),
                    })
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    winScroll(serverOwner){
        let _this = this;
        console.log(this);
        console.log('serverOwner',window.scrollY);

        let scrH = document.body.clientHeight;


        let winH = window.screen.height;
        if(window.scrollY >= (scrH - winH)){
            _this.setState({
                pageNo:_this.state.pageNo+1,
            });

            _this.getDetail();
        }
    }
    scroll(scrH) {

    }
    componentDidMount(){
        let _this = this;
        //获取总和
        fetch("http://10.2.98.23:8080/hosService/clientar/getDebtValue",{
            method:"POST",
            mode:"no-cor",
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                if(data.status == "1"){
                    this.setState({
                        totalMoney:data.info[0].debsum,
                    })
                }
            })
            .catch((err)=>{
            console.log(err);
            })
        //获取详细


        this.getDetail();

        //滚动的效果

        document.addEventListener('scroll',_this.winScroll);
    }

    componentWillUnmount(){
        console.log('unmount',this);
        document.removeEventListener('scroll',this.winScroll);
    }

    render(){
        return (
            <div className="server-owner" ref={(serverOwner)=>{this.serverOwner = serverOwner}}>
                <Top left={true} name="用户应收"/>

                <div className="so-title clear">
                    <div className="sot-left fl">
                        <img src={storeOwner} alt=""/>
                    </div>
                    <div className="sot-right fl c4">
                        <h3 className="fs12">应收条款</h3>
                        <h4 className="fs16">￥{this.state.totalMoney}</h4>
                    </div>


                </div>

                <div className="so-detail">
                    <ul>
                        {
                            this.state.soDetail.map((item,index)=>
                            <Link to={`/ownerdetail/${item.id}`}>
                                <li key={index} className="sod-li bc1">
                                    <div className="sod-left">
                                        <h3 className="fs14">{item.dname}</h3>
                                        <h4 className="c3 fs12">{item.cstcode}</h4>
                                        <div className="c3 fs12">
                                            <span>应收欠款:</span>
                                            <strong>￥{item.debtValue}</strong>
                                        </div>
                                    </div>
                                    <div className="sod-right">

                                    </div>
                                </li>
                            </Link>
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

export default ServerOwner;