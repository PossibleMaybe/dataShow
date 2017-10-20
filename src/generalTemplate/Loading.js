/**
 * Created by Administrator on 2017/10/20.
 */
import React,{Component} from 'react';
import './Loading.css';

class Loading extends Component {

    render(){
        return (
            <div className="loading tx-c">
                {this.props.data}
            </div>
        )
    }
}

export default Loading;
