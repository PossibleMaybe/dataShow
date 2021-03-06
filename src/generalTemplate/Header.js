/**
 * Created by Administrator on 2017/10/16.
 */
import React, {Component} from 'react';
import left from './../images/arrow-left.png'

import './Header.css';

class Left extends Component {
    goBack(){
        console.log(window.history.go(-1));
    }
    render(){
        return (
            <div className="left" onClick={this.goBack}>
                <img src={left} alt=""/>
            </div>
        )
    }
}

class Top extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let left;
        if(this.props.left){
            left=<Left/>;
        }
        return (
            <header>
                {left}
                <div className="tx-c">
                    {this.props.name}
                </div>
            </header>
        )
    }
}

export default Top;