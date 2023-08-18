import React, { useRef } from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

const UserDisplay = () => {
    const user = useSelector((state: AppState) => state.user);

    if (user) {
        return (<React.Fragment>
            <div>
                <label>Nazwa uytkownika:</label>
                &nbsp;{user.username}
            </div>
            <div>
                <label>Email:</label>
                &nbsp;{user.email}
            </div>
            <div>
                <label>Miasto:</label>
                &nbsp;{user.city}
            </div>
        </React.Fragment>)
    } else {
        return null;
    }
}

export default UserDisplay;