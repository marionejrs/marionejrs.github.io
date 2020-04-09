import './MainContainer.scss';
import React, { Component } from "react";
import Header from "../header/Header";
import { Switch, Route } from "react-router-dom";
import MainRoutes from "./MainRoutes";

export default class MainContainer extends Component {
    render() {
        return (
            <main>
                <Switch>
                    {MainRoutes.map((route, index) => <Route key={index} {...route}></Route>)}
                </Switch>
            </main>
        );
    }
}