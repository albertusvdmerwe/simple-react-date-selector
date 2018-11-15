import React,{Component} from 'react';
import ReactDOM from "react-dom";
import Datepicker from "../datepicker"; 

/*Yours should be:
import Datepicker from 'simple-react-date-selector';
"*/

interface State{
  value: string; 
}

class ExampleComponent extends Component<{},State>{
    constructor(props)
    {
      super(props);
      this.state={
        value:""
      }

      /*reset this keyword to be this class - callbacks change the this keyword, change it back*/

      this.handleChange=this.handleChange.bind(this);
    }
 
    handleChange(value:string) :void
    {
      /*value is the date as a string*/
      
      this.setState({value});
    }
    

    render(){

      const {value}=this.state; 

      return (
        <Datepicker onChange={this.handleChange} value={value} placeholder="Select a date" />
      )
    }
}

ReactDOM.render(<ExampleComponent/>,document.getElementById('root'));     