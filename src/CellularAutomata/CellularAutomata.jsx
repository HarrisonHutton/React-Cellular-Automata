import React, {Component} from "react";
import Node from "./Node/Node";

import "./CellularAutomata.css";

export default class CellularAutomata extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Foo 
                <Node>

                </Node>
            </div>
        )
    }
}