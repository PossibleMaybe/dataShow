/**
 * Created by Administrator on 2017/10/18.
 */
import React,{Component} from 'react';
import './OwnerDetail.css';
import Top from './../../generalTemplate/Header';
import Loading from './../../generalTemplate/Loading';
class OwnerDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:2,
            serverDetail:'',
            loadingReady:false,
        }
    }
    serverDetail(id){
        const serid = {"id":id};
        fetch("http://10.2.98.23:8080/hosService/clientar/getClientarInfo",{
            method:"POST",
            mode:"no-cor",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(serid),

        })
            .then(response => response.json())
            .then(data => {
                if(data.status == "1"){
                    console.log(data.info);
                    this.setState({
                        serverDetail:data.info[0],
                        loadingReady:true,
                    })
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    componentDidMount(){
        const serverId = this.props.match.params.id;
        this.serverDetail(serverId);
    }
    render(){
        return (
            <div className="owner-detail">
                <Top left={true} name="客户对账单"/>

                <div className="client-name bc1 clear fs15">
                    <div className="cn-left fl">
                        <span className="c3">客户名称</span>
                        <strong>{this.state.serverDetail.dname}</strong>
                    </div>
                    <div className="cn-right fr">

                    </div>
                </div>

                <div className="receive-debit fs12">
                    <span className="c3">应收欠款:</span>
                    <strong>￥{this.state.serverDetail.debtValue}</strong>
                </div>

                <div className="receipts bc1">
                    <div className="receipts-types fs15">
                        <span className="dpi bx-b tx-c">销售单据</span>
                        <strong className= {`dpi tx-c ${this.state.active == 2?'active':''}`}>收款单据</strong>
                    </div>



                    <div className="receipts-detail">
                        <div className="rd-left bx-b dpi fs12">
                            <p>
                                <span className="c3">销售金额:</span>
                                <strong>￥0.00</strong>
                            </p>
                            <p>
                                <span className="c3">订货金额:</span>
                                <strong>￥0.00</strong>
                            </p>
                            <p>
                                <span className="c3">已收金额:</span>
                                <strong>￥0.00</strong>
                            </p>

                        </div>
                        <div className="rd-right bx-b dpi fs12">
                            <p>
                                <span className="c3">退货金额:</span>
                                <strong>￥0.00</strong>
                            </p>
                            <p>
                                <span className="c3">还款金额:</span>
                                <strong>￥0.00</strong>
                            </p>
                            <p>
                                <span className="c3">代收欠款:</span>
                                <strong>￥0.00</strong>
                            </p>

                        </div>
                    </div>
                </div>
                {
                    this.state.loadingReady?'':<Loading data="数据加载中..." />
                }

            </div>
        )
    }
}

export default OwnerDetail;