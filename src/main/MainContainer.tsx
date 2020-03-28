import './MainContainer.scss';
import React, { Component } from "react";
import Header from "../header/Header";
import { Switch, Route} from "react-router-dom";

export default class MainContainer extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/">
                        <div>Home</div>
                    </Route>
                    <Route path="/about">
                        <div>About</div>
                    </Route>
                    <Route path="/skills">
                        <div>Skills</div>
                    </Route>
                    <Route path="/projects">
                        <div>Projects</div>
                    </Route>
                    <Route path="/contact">
                        <div>Contact</div>
                    </Route>
                </Switch>
            </main>
        );
    }
}