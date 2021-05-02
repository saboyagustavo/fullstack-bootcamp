import { Component } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from './styles/global'


export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Dashboard /* onClickButton={this.handleClick} data={this.state.clickArray} */ />
                <GlobalStyle />
            </>
        );
    }
}