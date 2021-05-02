import { Component } from "react";
import { Container, Content } from "./styles";
import getNewTimestamp from "../../utils/util"

export class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            clickArray: []
        }
    }

    handleClick = () => {
        const updatedArray = Object.assign([], this.state.clickArray);
        updatedArray.push(getNewTimestamp());
        console.log(updatedArray);
        this.setState({ clickArray: updatedArray });
        console.log(this.state);
    }

    componentDidUpdate() {
        document.title = this.state.clickArray.length;
    }

    render() {
        return (
            <Container>
                <button onClick={this.handleClick}>time_stamp</button>
                <hr />
                <Content>
                    {this.state.clickArray.map(item => <li key={Math.random()}>{item}</li>)}
                </Content>
            </Container >
        )
    }
}