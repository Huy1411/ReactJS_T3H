// class App extends React.Component {
//     constructor(){
//         super();
//         this.className = "REACTJS"
//
//
//     }
//     click = () => {
//         alert("Hello")
//     }
//     render() {
//         return (
//             <div>
//                 <h3> HelloWord </h3>
//                 <p>This is {this.className} class</p>
//                 <button onClick={this.click}>Click me</button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App/>, document.getElementById("app"))

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header
                style={
                {
                    backgroundColor: this.props.numberOfGuessed > 7 ? "Red" : "White"
                }
                    }
                    className="jumbotron text-center">
                <h3>Guessing random number</h3>
                <p>Tôi đã random một số trong khoảng từ 1 đến 100, đố bạn đoán được</p>
            </header>
        )
    }
}

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            randomNumber: this.random(),
            currentNumber: 0,
            message: "Are You Ready"
        }
    }

    random = () => {
        return Math.round(Math.random() * 100) + 1
    }

    guessing = () => {
        this.props.updateNumberOfGuessed()
        let {randomNumber, currentNumber} = this.state
        let message = " "
        if (currentNumber > randomNumber) {
            message = "You 're guessing bigger number"
        } else if (currentNumber < randomNumber) {
            message = "You 're guessing smaller number"
        } else if (currentNumber === randomNumber) {
            message = "You 're victory"
        }

        this.setState({
            message: message
        })
    }

    onValueChange = (event) => {
        this.setState({
            currentNumber: Number(event.target.value)
        });
    }
    newGame = () => {
        this.setState({
            randomNumber: this.random(),
            currentNumber: 0,
            message: "Are You Ready"
        })
    }

    render() {
        let {randomNumber, currentNumber, message} = this.state
        let { numberOfGuessed } = this.props
        return (
            <div>
                <article>
                    <button onClick={this.newGame}>New Game {randomNumber}</button>
                    <hr/>
                    <p>Số lần bạn đã đoán là: {numberOfGuessed}</p>
                    <p>Số lần bạn đoán là: </p>
                    <input type="text" min="1" max="100" onChange={(event) => this.onValueChange(event)}
                           value={currentNumber}/>
                    <p>{currentNumber}</p>
                    <button onClick={this.guessing} className="btn btn-success">Đoán</button>
                    <p>{message}</p>
                </article>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            numberOfGuessed :0
        }
    }

    updateNumberOfGuessed =()=>{
        this.setState({
            numberOfGuessed: this.state.numberOfGuessed + 1
        })
    }

    render() {
        return (
            <div>
                <Header numberOfGuessed = {this.state.numberOfGuessed}/>
                <Main  numberOfGuessed = {this.state.numberOfGuessed} updateNumberOfGuessed = {this.updateNumberOfGuessed}  />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"))

