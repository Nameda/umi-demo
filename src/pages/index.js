/**
 * Description: what
 * Author: WangTing
 * Date: 2019-07-15 17:07:13
 * LastEditors: WangTing
 * LastEditTime: 2019-07-15 18:37:51
 */

import React,{Component} from 'react';
import {layout} from 'antd';
import '../assets/css/style.scss';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appStore from '../reducers';
const store = createStore(appStore);

const {Header,Content,Footer } = layout;

class App extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <Provider store = {store}>
                <div className="app-container">
                    <Header>header</Header>
                    <Content>{this.props.children}</Content>
                    <Footer>footer</Footer>
                </div>
            </Provider>
        )
    }
}
export default App;