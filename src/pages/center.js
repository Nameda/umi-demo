import React, { Component } from 'react'
import { Button } from 'antd';
import router from 'umi/router';

class Center extends Component {
    onGoBackHome=()=>{
        router.goBack();
    }
    render () {
        return (
            <div className="center-container">
                <p>这是个人中心哦~</p>
                <Button onClick={this.onGoBackHome}>返回主页</Button>
            </div>
        )
    }
}

export default Center