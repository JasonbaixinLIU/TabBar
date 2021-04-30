import React from 'react'
/*初始化路由所需要的三个插件*/
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/home'
import Catgory from './pages/catgory'
import Car from './pages/car'
import User from './pages/user'

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