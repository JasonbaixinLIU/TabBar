import React, {Component} from 'react';
import Tabbar from "../components/tabbar";

class User extends Component {
    render() {
        return (
            <div>
                user
                {/*<Tabbar />*/}
            </div>
        );
    }
}
/*将tabbar直接包裹导出内容即可*/
export default Tabbar(User);
/*
export default User;*/
