# simple-react-date-selector

A simple react date picker component.

**Preview:**

![Year](screenshots/year.png)
![Month](screenshots/month.png)
![Day](screenshots/day.png)
![Selected](screenshots/selected.png)

**Props:**

|Prop|Required|Type|Description|
|---------|---------|---------|---------|
|onChange|true|function|The callback function that should be executed when the complete date is chosen. The argument is the date value that is returned.|
|placeholder|true|string|The field label|
|value|true|string|The current value that should be displayed in the date field.|
|headerStyles|false|style object|Additional styles that should be added to the header - The day, month and year headings|
|bodyStyles|false|style object|Additional styles that should be added to the body -  The day, month and year options|
|containerStyles|false|style object|Additional styles that should be added to the container - The modal in which the day, month and year pickers are rendered|
|footerStyles|false|style object|Additional styles that should be added to the footer - The footer that displays the currently selected year, month and day|

**Steps for including the component in your project:**

- run "npm init" in the root of your application to create a package.json file if your application doesn't have one yet.
- run "npm install simple-react-date-selector --save" OR "yarn add simple-react-date-selector" in the root of your ReactJS application.
- Include the SCSS file - When using "create-react-app" this file can easily be included by @importing it into your application's root SCSS file.
- Require the component at the top of your application's component where you want to use the date picker.

**Example usage:**

*Add the SCSS file to your application's root SCSS file - for example:*

```css
/*Remember to reference your node_modules directory correctly*/

@import "../node_modules/simple-react-date-selector/styles/simple-react-date-selector";
```

*Add it to your application's component - for example:*

```javascript
import React,{Component} from "react";

/*This is a default export so feel free to name it whatever you like. It doesn't have to be Datepicker */

import Datepicker from 'simple-react-date-selector';

export default class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={Date:""};
    }

    render(){
        return (
                <Datepicker  
                    onChange={date=>{this.setState({Date:date})}}
                    placeholder={'Date'}
                    value={this.state.Date}
                />
        )

    }
}
```