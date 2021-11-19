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
    const [uniqueError, setUniqueError] = useState(false);
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
            .post(`${baseURL}/phonenumbers/`, data)
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
                setSubmitted(true);
                setUniqueError(true);
            });
    };
    const newPhoneNumber = () => {
        setPhoneNumber(initialPhoneNumberState);
        setSubmitted(false);
        setUniqueError(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                uniqueError ? (
                    <div>
                        <div className="alert alert-danger mt-3">Phone Number already exist!</div>
                        <button className="btn btn-success" onClick={newPhoneNumber}>
                            Try Again!
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="alert alert-success mt-3">Phone Number Added!</div>
                        <button className="btn btn-success" onClick={newPhoneNumber}>
                            Add More
                        </button>
                    </div>
                )
            ) : (
                <div>
                    <div className="form-group my-3">
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
                    <div className="form-group mb-3">
                        <label htmlFor="number">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="number"
                            required
                            value={phonenumber.number}
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