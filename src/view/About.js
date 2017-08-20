import React, {Component} from 'react';
import { NavBar, Icon, WhiteSpace, Result,} from 'antd-mobile';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {createForm} from 'rc-form';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['', '', ''],
        };
    }


    render() {

        return (
            <div>
                <NavBar leftContent="返回"
                        mode="light"
                        onLeftClick={() => window.history.go(-1)}
                >关于我们</NavBar>

                <WhiteSpace />
                <Result
                    img={<Icon type="check-circle" className="icon" style={{ fill: '#1F90E6' }} />}
                    message="这是一个关于我们页面"
                />
                <div className="about_bottom">
                    <div style={{ width: '90%', margin:'0 auto'}}>
                    <ul>
                        <li>官方网站: <span style={{ marginLeft: '1rem'}}>baidu.com</span></li>
                        <li>客服电话: <span style={{ marginLeft: '1rem'}}>1008611</span></li>
                        <li>微信公众号: <span style={{ marginLeft: '0.7rem'}}>LiXiaoXiaoShen</span></li>
                    </ul>
                    <p className="copyright" >copyright @ 2016 Jielema All rights reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

About = createForm()(About);

export default connect(({customer}) => ({customer}))(About);