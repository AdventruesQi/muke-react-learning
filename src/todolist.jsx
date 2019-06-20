import React, { Component ,Fragment} from 'react';
import Todoitem from "./todoitem";
import "./style.css";
class Todolist extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:"",
            list:[]
        }
        this.handleDelete=this.handleDelete.bind(this);
    }
  handleInputChange=(e)=>{
      const value=e.target.value;
    this.setState(()=>({inputValue:value}))
    console.log(this.state.inputValue)
    }
    onSubmit=()=>{
        const list=[...this.state.list,this.state.inputValue]; 
        this.setState(()=>({
            list,
            inputValue:""
        }))
    }
    handleDelete(index){
        console.log(this);
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState(()=>({
            list
        }))
    }
    getTodolist(){
        return this.state.list.map((item,index)=>{
            return (<Todoitem 
                        item={item} 
                        index={index} 
                        deleteItem={this.handleDelete}/>)
        })
    }
    render() { 
        return (
            <Fragment>
                <div>
                    <label htmlFor="gg">输入内容</label>
                    <input 
                        id="gg" 
                        className="input" 
                        onChange={this.handleInputChange} 
                        value={this.state.inputValue}/>
                    <button onClick={this.onSubmit}>提交</button>
                </div> 
                <ul>
                    {this.getTodolist()}
                </ul>
            </Fragment>
            );
        }
    }
export default Todolist;