import React from 'react'
/*初始化路由所需要的三个插件*/
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/home'
import Catgory from './pages/catgory'
import Car from './pages/car'
import User from './pages/user'

/*路由标准写法BrowserRouter中包含Switch中包含Route  path后面接路径  并输出分页路由例如Home*/
export default ()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/catgory' component={Catgory}></Route>
            <Route path='/car' component={Car}></Route>
            <Route path='/user' component={User}></Route>
        </Switch>
    </BrowserRouter>
)