import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { baseURL, headers } from "./../services/backend.service";
import { useHistory } from "react-router-dom";
export const PhoneNumberList = () => {
    const [phonenumbers, setPhoneNumbers] = useState([]);
    const history = useHistory();
    const countRef = useRef(0);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        retrieveAllPhoneNumbers();
    }, [countRef]);
    const retrieveAllPhoneNumbers = () => {
        axios
            .get(`${baseURL}/phonenumbers/`,)
            .then((response) => {
                setPhoneNumbers(response.data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const deletePhoneNumber = (id) => {
        axios
            .delete(`${baseURL}/phonenumbers/${id}/`, {
                headers: {
                    headers,
                },
            })
            .then((response) => {
                setDeleted(true);
                retrieveAllPhoneNumbers();
            })
            .catch((e) => {
                console.error(e);
            });
    };
    return (
        <div className="row justify-content-center">
            <div className="col">
                {deleted && (
                    <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                    >
                        Phone Number deleted!
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
                {phonenumbers &&
                    phonenumbers.map((phonenumber, index) => (
                        <div className="card my-3 w-25 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">{phonenumber.name}</h2>
                                <h4 className="card-subtitle mb-2">{phonenumber.number}</h4>
                            </div>
                            <div classNameName="card-footer">
                                <div
                                    className="btn-group justify-content-around w-75 mb-1 "
                                    data-toggle="buttons"
                                >
                                    <span>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deletePhoneNumber(phonenumber.id)}
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};