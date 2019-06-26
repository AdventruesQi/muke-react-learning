import React, { Component } from 'react';
import "./style.css";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List} from 'antd';
import store from "./store";
class Todolist extends Component {
    constructor (props){
        super(props);
        this.state=store.getState();
    }
    render() { 
       
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
          ];
        return ( 
            <div style={{marginTop:"10px"}}>
                <Input placeholder={this.state.inputValue} style={{width:"300px"}}/>
                <Button type="primary" style={{marginLeft:"10px"}}>提 交</Button>  
                <List
                style={{marginTop:"10px",width:"300px"}}
                bordered
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item>
                       {item}
                    </List.Item>
                )}
                />
            </div>
      
         );
    }
}
 
export default Todolist;