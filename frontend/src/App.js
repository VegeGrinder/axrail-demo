import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import { AddPhoneNumber } from "./components/AddPhoneNumber";
import { PhoneNumberList } from "./components/PhoneNumberList";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-primary px-5">
                <a href="/" className="navbar-brand">
                    Phone Book
                </a>
                <div className="navbar-nav mr-auto">
                    <Link to={"/add/"} className="btn btn-success nav-link text-white">
                        Add
                    </Link>
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