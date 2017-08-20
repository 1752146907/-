import React, {Component} from 'react';
import { NavBar, Icon, Carousel, WhiteSpace, WingBlank, SegmentedControl, RefreshControl, List, Popover, } from 'antd-mobile';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {createForm} from 'rc-form';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['', '', ''],
            initialHeight: 200,
            visible: false,
            selected: '',
        };
    }

    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    componentWillUnmount() {

    }

    loan() {
        this.props.dispatch(routerRedux.push({
            pathname: '/loan',
            query: {},
        }));
    }

    about() {
        this.props.dispatch(routerRedux.push({
            pathname: '/about',
            query: {},
        }));
    }

    CreditCardHandling() {
        this.props.dispatch(routerRedux.push({
            pathname: '/credit',
            query: {},
        }));
    }

    render() {
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        const Item = List.Item;
        const Brief = Item.Brief;
        let offsetX = -10; // just for pc demo
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            offsetX = -26;
        }

        return (
            <div>
                <div>
                    <NavBar
                            mode="light"
                            onLeftClick={() => window.history.go(-1)}
                            rightContent={[
                                <Popover mask
                                    overlayClassName="fortest"
                                    overlayStyle={{ color: 'currentColor' }}
                                    visible={this.state.visible}
                                    overlay={[
                                        (<Item key="1" value="special" onClick={this.CreditCardHandling.bind(this)} style={{ whiteSpace: 'nowrap' }}>信用卡办理</Item>),
                                        (<Item key="2" value="special" onClick={this.loan.bind(this)} style={{ whiteSpace: 'nowrap' }}>极速贷款</Item>),
                                        (<Item key="3" onClick={this.about.bind(this)} value="button ct">
                                        <span style={{ marginRight: 5 }}>关于我们</span>
                                        </Item>),
                                    ]}
                                    align={{
                                        overflow: { adjustY: 0, adjustX: 0 },
                                        offset: [offsetX, 15],
                                    }}
                                        onVisibleChange={this.handleVisibleChange}
                                        onSelect={this.onSelect}
                                    >
                                    <div style={{
                                        height: '100%',
                                        padding: '0 0.3rem',
                                        marginRight: '-0.3rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Icon key="0" style={{color: '#0066ff'}} type="ellipsis" />
                                    </div>
                                </Popover>
                            ]}
                    >极速贷款</NavBar>
                </div>

                <Carousel
                    className="my-carousel"
                    autoplay={true}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                >
                    {this.state.data.map(ii => (
                        <a href="#" key={ii} style={hProp}>
                            <img
                                width="100%"
                                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                                alt="icon"
                                onLoad={() => {

                                window.dispatchEvent(new Event('resize'));
                                this.setState({
                                    initialHeight: null,
                                    });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                <WhiteSpace size="sm" />
                <WingBlank size="lg" className="sc-example">
                    <SegmentedControl
                        selectedIndex={0}
                        font-size="18px"
                        tintColor="#2DB7F5"
                        Color="#ffffff"
                        values={['切换一', '切换二', '切换三']}
                    />
                </WingBlank>
                <WhiteSpace size="xs" />

                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {}}
                    >
                        Title
                        <Brief style={{marginTop: '0px'}}>subtitle</Brief>
                        <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                    </Item>
                </List>
                <WhiteSpace size="lg" />
                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {}}
                    >
                        Title
                        <Brief style={{marginTop: '0px'}}>subtitle</Brief>
                        <Brief style={{marginTop: '0px'}}>申请人数 <span style={{color: 'red'}}>11111人</span></Brief>
                    </Item>
                </List>

            </div>
        );
    }
}

Index = createForm()(Index);

export default connect(({customer}) => ({customer}))(Index);