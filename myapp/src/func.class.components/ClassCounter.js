import React, {Component, PureComponent} from 'react';

class ClassCounter extends PureComponent {
    render() {
        console.log("Render class component")
        return (
            <div>
                Counter: {this.props.counter} | {this.props.data.counter}
            </div>
        );
    }
}

export default ClassCounter;