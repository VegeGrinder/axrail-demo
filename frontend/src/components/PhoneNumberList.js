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
            .get(`${baseURL}/phonenumbers/`)
            .then((response) => {
                setPhoneNumbers(response.data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const deletePhoneNumber = (id) => {
        axios
            .delete(`${baseURL}/phonenumbers/${id}/`)
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
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Phone Number</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {phonenumbers.length ? (
                        phonenumbers.map((phonenumber, index) => (
                            <tr key={phonenumber.id}>
                                <td>{phonenumber.id}</td>
                                <td>{phonenumber.number}</td>
                                <td>{phonenumber.name}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deletePhoneNumber(phonenumber.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="text-center" colspan="4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};