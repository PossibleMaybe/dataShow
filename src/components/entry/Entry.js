import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './Entry.css';

import Top from './../../generalTemplate/Header';

import storeCheck from './../../images/store-check.png';
import serverOwner from './../../images/server-owner.png';

class IconList extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="icon-list"> 
                <ul>
                    <li className="il-li">
                        <Link to="/storecheck">
                            <img className="il-img" src={storeCheck} alt=""/>
                        </Link>

                    </li>
                    <li className="il-li">
                        <Link to="/serverowner">
                            <img className="il-img" src={serverOwner} alt=""/>
                        </Link>

                    </li>
                </ul>
            </div>
        )
    }
}

class Entry extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="entry">
                <Top left={false} name="工作台"/>
                <IconList/>
            </div>
        )
    }
}

export default Entry;