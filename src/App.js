import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Tabbar from './components/tabbar';
import RouterMap from './router'
import './static/iconfont.css';



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
