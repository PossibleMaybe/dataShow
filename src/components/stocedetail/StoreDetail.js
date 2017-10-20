/**
 * Created by Administrator on 2017/10/18.
 */
import React,{Component} from 'react';
import "./StoreDetail.css";
import Top from './../../generalTemplate/Header';
import wine from './../../images/wine-example.png';
import arrowRight from './../../images/arrow-right.png';
class StoreDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            storeDetail:[],
        }
    }
    storeDetail(goods){
        const good = {goods:goods};
        fetch("http://10.2.98.23:8080/hosService/lotstock/getLotStockByGoods",{
            method:"POST",
            mode:"no-cor",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(good),

        })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                if(data.status == "1"){
                    this.setState({
                        storeDetail:data.info,
                    })
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    componentDidMount(){
        let goods = this.props.match.params.goods;
        this.storeDetail(goods);

    }
    render(){
        return (
            <div className="store-detail">
                <Top left={true} name="库存查询"/>

                <div className="sl-detail bc1">
                    <ul>
                        <li className="clear">
                            <div className="sld-left bx-b fl">
                                <img src={wine} alt=""/>
                            </div>
                            <div className="sld-right fr">
                                <div className="sldr-left">
                                    <h3 style={{lineHeight:'4.6rem'}} className="fs16">{this.state.storeDetail.length>0?`${this.state.storeDetail[0].ownername}`:''}</h3>

                                </div>

                                <div className="sldr-right">
                                    <img src={arrowRight} alt=""/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="sd-show">
                    <ul>
                        {
                            this.state.storeDetail.map((item,index)=>
                                <li key={index} className="sd-li bc1">
                                    <h3 className="">{item.name}</h3>
                                    <div className="sd-store clear fs14 c3">
                                        <div className="sd-left fl">
                                            <span>实存: </span>
                                            <strong>{`${item.alloQty}${item.msunitno}`}</strong>
                                        </div>
                                        <div className="sd-right fr">
                                            <span>可销: </span>
                                            <strong>{`${item.packnum}${item.msunitno}`}</strong>
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

export default StoreDetail;