import React ,{Component} from 'react';
import Link from 'umi/link';
import './home.scss';
import {connect} from 'react-redux';
import { Button, Table } from 'antd';
import { getList } from '../actions';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    onButtonClick=()=>{
        const {onToggerDesc,isShowDesc} = this.props;
        onToggerDesc(!isShowDesc);
    }
    componentDidMount(){
        this.props.onGetList();
    }
    render(){
        const {isShowDesc,listData} = this.props;
        const columns =[{
            title:'姓名',
            dataIndex:'name'
        },{
            title:'城市',
            dataIndex:'city'
        },{
            title:'性别',
            dataIndex:'sex',
            render:(text,record) => (text === 0?'女':'男')
        },{
            title:'邮箱',
            dataIndex:'email'
        }]
        return(
            <div className="home-container">
                <p className="red">Home 在这里~</p>
                <Link to="/center">个人中心</Link>
                <Button onClick={this.onButtonClick}>显示/隐藏</Button>
                {
                    isShowDesc?<p>这是详情信息</p>:''
                }
                <Table dataSource={listData} columns={columns} rowKey="name"></Table>
            </div>
        )
    }
}


//mapStateToProps 方法传的 state 是全局的 store , 我们只需要homeStore ，返回 homeStore
const mapStateToProps = state =>{
    console.log('state:',state);
    return state.homeStore;
}
const mapDispatchTOProps = dispatch =>({
    onToggerDesc:(value) =>{
        dispatch({type:'home-show-desc',value})
    },
    onGetList:()=>{
        getList({dispatch});
    }
})
export default connect(mapStateToProps,mapDispatchTOProps)(Home);