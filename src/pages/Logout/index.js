import React from 'react';
import { useHistory } from "react-router-dom";

const clearToken = () => {
    localStorage.clear();
}

const Logout = () => {
    clearToken();
    const history = useHistory();
    history.push("/")
    return <div></div>
}

export default Logout;