import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

interface ScerenProps {
    message: string;
}

const ScreenC: FC<ScerenProps> = (props) => {
    const { userid } = useParams();
    const navigate = useNavigate();
    const onClickGoBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <div>{"Twój identyfikator to: " + userid}</div>
            <div>{props.message}</div>
            <div>
                <button onClick={onClickGoBack}>Wróć na poprzednią stronę</button>
            </div>
        </div>
    );
};

export default ScreenC;