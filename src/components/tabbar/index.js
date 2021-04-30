import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom'

const tabbarArr = [
    {
        img: 'icon-home',
        text: '首页',
        link: '/home'
    }, {
        img: 'icon-fenlei',
        text: '分类',
        link: '/catgory'
    }, {
        img: 'icon-gouwuche',
        text: '购物车',
        link: '/car'
    }, {
        img: 'icon-yonghu',
        text: '用户',
        link: '/user'
    }
];
/*普通组件转高阶组件 转为高阶组件后分页组件页面无需再引用该组件只需要在导出时加上该方法
* 详情参考pages页面
* */
const Tabbar = (WrappedComponent) =>

    class Tabbar extends Component {
        constructor(props) {
            super(props);
            this.state = {
                index: 0
            }
        }

        /* 给tabbar绑定点击事件   */
        itemChange = (i) => {
            this.setState(
                {
                    index: i
                })
        };

        render() {
            const url = window.location.href
            return (
                <div className='tabbar-container'>

                    <div className='tabbar-children'>
                        <WrappedComponent/>
                    </div>
                    <div className='tabbar'>
                        <div className='tabbar-content'>
                            {
                                /*循环获去每一个tabbar的路径v.link代表每个的路径 text显示每一个tabbar名
                                indexOf如果要检索的字符串值没有出现，则该方法返回 -1。
                                判断是否大于-1  为真添加active
                                iconfont加上动态数据须在里面后面加上空格
                          */
                                tabbarArr.map((v, i) => (
                                    <Link to={v.link} key={i}
                                          className={'tabbar-item ' + (url.indexOf(v.link) > -1 ? 'active' : '')}
                                    >
                                        <div className={'iconfont ' + v.img}></div>
                                        <div>{v.text}</div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }


export default Tabbar;


/*
{
    tarbarArr.map((v, i) => (
        <div key={i} className={'tarbar-item ' + (this.state.index === i ? 'active' : '')}
              onClick={() => this.itemChange(i)}>
            <div className={'iconfont ' + v.img}></div>
            <div>{v.text}</div>
        </div>
    ))
}
*/

/*普通组件*/
/*class Tarbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    /!* 给tabbar绑定点击事件   *!/
    itemChange = (i) => {
        this.setState(
            {
                index: i
            }
        )
    };

    render() {
        const url = window.location.href
        return (
            <div className='tarbar'>
                <div className='tarbar-content'>
                    {
                        tarbarArr.map((v, i) => (
                            <Link to={v.link} key={i} className={'tarbar-item ' + (url.indexOf(v.link)>-1? 'active' : '')}
                            >
                                <div className={'iconfont ' + v.img}></div>
                                <div>{v.text}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}*/
