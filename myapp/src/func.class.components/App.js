import React, {Component} from 'react';
import ClassCounter from "./ClassCounter";
import FuncCounter from "./FuncCounter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            data: {
                counter: 0
            }
        }
    }

    increaseCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        // let data = this.state.data
        // data.counter +=1
        // this.setState({
        //     data
        // })

        this.setState({
            data: {
                counter: this.state.data.counter + 1
            }
        })
    }

    render() {
        const {counter, data} = this.state
        return (
            <div>
                Data.Counter: {data.counter}
                <ClassCounter counter={counter} data={data}/>
                <FuncCounter counter={counter} data={data}/>
                <button onClick={this.increaseCounter}>Increase</button>
            </div>
        );
    }
}

export default App;