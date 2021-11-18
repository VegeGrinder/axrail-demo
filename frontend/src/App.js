import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import { AddPhoneNumber } from "./components/AddPhoneNumber";
import { PhoneNumberList } from "./components/PhoneNumberList";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-info">
                <a href="/" className="navbar-brand">
                    Phone Book
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/add/"} className="nav-link">
                            Add
                        </Link>
                    </li>
                </div>
            </nav>
            <div className="container m-10">
                <Switch>
                    <Route exact path={["/", "/phonebook"]} component={PhoneNumberList} />
                    <Route exact path="/add/" component={AddPhoneNumber} />
                </Switch>
            </div>
        </div>
    );
}
export default App;