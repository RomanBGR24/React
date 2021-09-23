import React, {Component} from "react";

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        };
    }

    render() {
        let elementStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: "#FFDE00",
            width: 50,
            height: 50,
        };

        return(
             <div style = {elementStyle}>
                 F
            </div>
        );
        
    }
}

export default Element;
