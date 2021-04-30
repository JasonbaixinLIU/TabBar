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
/*普通组件转高阶组件*/
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
                                tabbarArr.map((v, i) => (
                                    <Link to={v.link} key={i}
                                          className={'tarbar-item ' + (url.indexOf(v.link) > -1 ? 'active' : '')}
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
