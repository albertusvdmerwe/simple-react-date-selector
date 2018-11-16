import React,{Component} from 'react';
import ReactDOM from "react-dom";
import Datepicker from "../../datepicker"; 

/*Yours should be:
import Datepicker from 'simple-react-date-selector';
"*/

interface State{
  value: string;  
  visible:boolean;
}

class ExampleComponent extends Component<{},State>{  
    constructor(props)
    {
      super(props);
      this.state={
        value:"",
        visible:true
      }

      /*reset this keyword to be this class - callbacks change the this keyword, change it back*/

      this.handleChange=this.handleChange.bind(this); 
    }
 
    handleChange(value:string) :void
    {
      /*value is the date as a string*/
      
      this.setState({value});
    }

    componentDidMount(){

        /*
      
        toggle between visible and not every 5 seconds (just an example of this props in action)
        */

        window.setInterval(()=>{
          this.setState({visible:!this.state.visible});   
        },5000);
    }

    

    render(){

      const {value,visible}=this.state; 

      return (
        <Datepicker yearRange={{from:2000,to:2015}} onChange={this.handleChange} value={value} placeholder="Select a date" visible={visible}/>
      )
    }
}

ReactDOM.render(<ExampleComponent/>,document.getElementById('root'));       