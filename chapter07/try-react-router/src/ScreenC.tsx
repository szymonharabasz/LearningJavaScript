import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

interface ScerenProps {
    message: string;
}

const ScreenC: FC<ScerenProps> = (props) => {
    const { userid } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    });
    return (
        <div>
            <div>{"Twój identyfikator to: " + userid}</div>
            <div>{props.message}</div>;
        </div>
    );
};

export default ScreenC;