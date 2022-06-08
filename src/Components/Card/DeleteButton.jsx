import { Component } from "react"

export default class IconButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <button className="card_button" onClick={this.props.onClick}>
                    {this.props.icon}
                </button>
            </>
        )
    }
}