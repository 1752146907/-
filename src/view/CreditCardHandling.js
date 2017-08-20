import React, {Component} from 'react';
import { NavBar, Icon, WhiteSpace, Result, List, ListView } from 'antd-mobile';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {createForm} from 'rc-form';

function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        des: '兴业淘宝普卡',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        des: '交通银行沃尔玛信用卡',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        des: '福IC金卡',
    },
];
let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

class CreditCardHandling extends Component {
    constructor(props) {
        super(props);
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];
        this.genData = (pIndex = 0) => {
            for (let i = 0; i < NUM_SECTIONS; i++) {
                const ii = (pIndex * NUM_SECTIONS) + i;
                const sectionName = `Section ${ii}`;
                this.sectionIDs.push(sectionName);
                this.dataBlob[sectionName] = sectionName;
                this.rowIDs[ii] = [];

                for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
                    const rowName = `S${ii}, R${jj}`;
                    this.rowIDs[ii].push(rowName);
                    this.dataBlob[rowName] = rowName;
                }
            }
            // new object ref
            this.sectionIDs = [].concat(this.sectionIDs);
            this.rowIDs = [].concat(this.rowIDs);
        };
        this.state = {
            dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            isLoading: true,
        };
    }

    componentDidMount() {

        setTimeout(() => {
            this.genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
                isLoading: false,
            });
        }, 600);
    }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
                isLoading: false,
            });
        }, 1000);
    }




    render() {
        const Item = List.Item;
        const Brief = Item.Brief;
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`}
                 style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} className="row">
                    <div className="row-title">{obj.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '0.3rem 0' }}>
                        <img style={{ height: '1.28rem', marginRight: '0.3rem', }} src={obj.img} alt="icon" />
                        <div className="row-text">
                            <div style={{ fontWeight: 'bold', marginBottom:'0.1rem' }}>{obj.des}</div>
                            <div style={{ color: 'rgb(0, 102, 255)' }}><span style={{
                                fontSize: '0.2rem',
                                margin: '0.6rem 0.4rem 0.4rem 0rem',
                                padding:'2px',
                                border: '1px solid rgb(0, 102, 255)',
                                borderRadius: '8px',
                            }}>网购积分</span></div>
                            <div style={{color: '#666', marginTop:'0.2rem' }}><span style={{ fontSize: '0.3rem', marginRight:'0.1rem', color: 'red' }}>99999+人</span>成功申请</div>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <NavBar leftContent="返回"
                        mode="light"
                        onLeftClick={() => window.history.go(-1)}
                >关于我们</NavBar>

                <div className="gongge">
                    <List style={{border: 'none'}}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title
                            <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                        </Item>
                    </List>
                    <List style={{border: 'none'}}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title
                            <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                        </Item>
                    </List>
                    <List style={{border: 'none'}}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title
                            <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                        </Item>
                    </List>
                    <List style={{border: 'none'}}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title
                            <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                        </Item>
                    </List>
                </div>
                <div style={{ clear: 'both'}}></div>
                <WhiteSpace />
                
                <div>
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1556287667,1111562779&fm=26&gp=0.jpg" width="100%" alt=""/>
                </div>
                <WhiteSpace />

                <div style={{ background: '#fff', padding:'8px', color:'#696767'}}>主题信用卡</div>
                <div className="gongge">
                    <List style={{border: 'none'}}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title
                            <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                        </Item>
                    </List>
                    <List style={{border: 'none'}}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title
                            <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                        </Item>
                    </List>
                    <List style={{border: 'none'}}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title
                            <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                        </Item>
                    </List>
                </div>
                <div style={{ clear: 'both'}}></div>
                <WhiteSpace />

                <ListView ref="lv"
                          dataSource={this.state.dataSource}
                          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                              {this.state.isLoading ? 'Loading...' : 'Loaded'}
                            </div>)}
                                              renderSectionHeader={sectionData => (
                              <div>信用卡推荐</div>
                            )}
                                              renderBodyComponent={() => <MyBody />}
                                              renderRow={row}
                                              renderSeparator={separator}
                                              className="fortest"
                                              style={{
                              height: document.documentElement.clientHeight * 3 / 4,
                              overflow: 'auto',
                              border: '1px solid #ddd',
                              margin: '0.1rem 0',
                            }}
                          pageSize={4}
                          onScroll={() => { console.log('scroll'); }}
                          scrollRenderAheadDistance={500}
                          scrollEventThrottle={200}
                          onEndReached={this.onEndReached}
                          onEndReachedThreshold={10}
                />

            </div>
        );
    }
}

CreditCardHandling = createForm()(CreditCardHandling);

export default connect(({customer}) => ({customer}))(CreditCardHandling);