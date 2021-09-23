import React, {Component} from "react";

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'isHidden': False
        };
    }

    render() {
        let element_style = {
            padding: 10,
            margin: 10,
            backgroundColor: "#FFDE00",
            width: 50,
            height: 50,
        };

        return(
             <div classname = {element_style}>
                 F
            </div>
        );
        
    }
}

export default Element;