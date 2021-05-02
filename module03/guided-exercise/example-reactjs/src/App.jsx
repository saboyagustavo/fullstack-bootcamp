import { Component } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
// import getNewTimeStamp from "./utils/util"
import { GlobalStyle } from './styles/global'
export default class App extends Component {
    constructor() {
        super();

        this.state = {
            clickArray: []
        }
    }


    render() {
        return (
            <>
                <Header />
                <Dashboard />
                <GlobalStyle />
            </>
        );
    }
}