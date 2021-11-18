import axios from "axios";
import React, { useState } from "react";
import { baseURL, headers } from "./../services/backend.service";
export const AddPhoneNumber = () => {
    const initialPhoneNumberState = {
        id: null,
        name: "",
        number: ""
    };
    const [phonenumber, setPhoneNumber] = useState(initialPhoneNumberState);
    const [submitted, setSubmitted] = useState(false);
    const handlePhoneNumberChange = (e) => {
        const { name, value } = e.target;
        setPhoneNumber({ ...phonenumber, [name]: value });
    };
    const submitPhoneNumber = () => {
        let data = {
            name: phonenumber.name,
            number: phonenumber.number
        };
        axios
            .post(`${baseURL}/phonenumber/`, data, {
                headers: {
                    headers,
                },
            })
            .then((response) => {
                setPhoneNumber({
                    id: response.data.id,
                    name: response.data.name,
                    number: response.data.number
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const newPhoneNumber = () => {
        setPhoneNumber(initialPhoneNumberState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <div
                        className="alert alert-success alert-dismissible fade show"
                        role="alert"
                    >
                        Phone Number Added!
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <button className="btn btn-success" onClick={newPhoneNumber}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={phonenumber.name}
                            onChange={handlePhoneNumberChange}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="number"
                            required
                            value={phonenumber.description}
                            onChange={handlePhoneNumberChange}
                            name="number"
                        />
                    </div>
                    <button onClick={submitPhoneNumber} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};