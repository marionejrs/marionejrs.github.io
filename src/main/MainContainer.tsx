import './MainContainer.scss';
import React, { Component } from "react";
import Header from "../header/Header";

export default class MainContainer extends Component {
    render() {
        return (
            <main>
                <Header></Header>
            </main>
        );
    }
}