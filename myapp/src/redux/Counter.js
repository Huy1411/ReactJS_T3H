import React, {Component} from 'react';
import {createStore} from "redux";
import {connect, Provider} from 'react-redux'

var initialState = {
    counter: 0,
    step: 1,
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case "INCREASE_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload.step
            }
        case "INCREASE_ASYNC_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload.step
            }
        // case "INCREASE_COUNTER_FOOTER":
        //     return {
        //         ...state,
        //         counter: state.counter + action.payload.step
        //     }
        default:
            break
    }
    return state
}


function increaseAction(step) {
    store.dispatch({
        type: "INCREASE_COUNTER",
        payload: {
            step
        }
    })

}

function increaseAsyncAction(step) {
    setTimeout(() => {
        store.dispatch({
            type: "INCREASE_ASYNC_COUNTER",
            payload: {
                step
            }
        })
    }, 1000)

}

var store = createStore(reducer)


export default class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header/>
                <hr/>
                <Counter/>
                <hr/>
                <FooterConnect/>
            </Provider>
        );
    }
}

class Header extends Component {
    state = {
        counter: 0
    }

    componentDidMount() {
        store.subscribe(() => {
            const {counter} = store.getState();
            this.setState({counter})
        })
    }

    render() {
        const {counter} = this.state
        return (
            <header> Counter : {counter}</header>
        );
    }
}


class Counter extends Component {
    state = {
        counter: 0,
        step: 1
    }

    componentDidMount() {
        store.subscribe(() => {
            const {counter} = store.getState();
            this.setState({counter})
        })
    }

    increase = () => {
        increaseAction(this.state.step)
    }
    increaseAsync = () => {
        increaseAsyncAction(this.state.step)
    }

    render() {
        const {counter} = this.state
        return (
            <div> Counter : {counter}
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.increaseAsync}>IncreaseAsync</button>
            </div>
        );
    }
}

class Footer extends Component {

    render() {
        return (
            <div>
                Counter : {this.props.counter}
                {/*<button onClick={this.props.iscreaseFooter}>Increase</button>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         iscreaseFooter: () => {
//             dispatch({type: "INCREASE_COUNTER_FOOTER"})
//         }
//     }
// }
const FooterConnect = connect(mapStateToProps)(Footer)




