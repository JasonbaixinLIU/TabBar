import React,{Component} from 'react';
import './App.css';
/*添加路由*/
import RouterMap from './router'
import './static/iconfont.css';


/*添加路由react-router-dom*/
class App extends Component{
    render(){
        return(
            <div className="App">
                <RouterMap />
            </div>
        );
    }
}


export default App;
