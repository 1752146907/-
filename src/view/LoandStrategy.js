import React, {Component} from 'react';
import { NavBar, Icon, List,WhiteSpace, } from 'antd-mobile';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {createForm} from 'rc-form';

class Load extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['', '', ''],
        };
    }


    render() {
        const Item = List.Item;
        const Brief = Item.Brief;

        return (
            <div>
                <NavBar leftContent="返回"
                        mode="light"
                        onLeftClick={() => window.history.go(-1)}
                >贷款攻略</NavBar>

                <WhiteSpace size="lg" />
                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {}}
                    >
                        <span style={{color:'red',marginRight:'4px'}}>[新手指南]</span>四步教你如何快速申请贷款
                        <Brief style={{marginTop: '0px',float:'right'}}> <span style={{color: '#0066ff',marginRight:'4px'}}>99999</span>人阅读</Brief>
                    </Item>
                </List>
                <WhiteSpace size="lg" />

            </div>
        );
    }
}

Load = createForm()(Load);

export default connect(({customer}) => ({customer}))(Load);