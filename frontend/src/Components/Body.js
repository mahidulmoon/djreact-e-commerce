import React, { Component } from 'react';


class Body extends Component {

    render() {
        return (
            <center>
                <div className="mainbody">
                    {this.props.children}
                </div>
            </center>
        )
    }
}
export default Body;