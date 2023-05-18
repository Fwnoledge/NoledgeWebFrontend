import React from 'react';
import NegativeAlert from "./NegativeAlert";
import PositiveAlert from "./PositiveAlert";

const DisplayAlert = ({message, handleClose}: AlertProps) => {
    return (
        message.show ? (
            message.positive ? (
                <PositiveAlert
                    message={message.message}
                    handleClose={() => handleClose({positive: false, message: "", show: false})}
                />
            ) : (
                <NegativeAlert
                    message={message.message}
                    handleClose={() => handleClose({positive: false, message: "", show: false})}
                />
            )
        ) : null
    );
};

export default DisplayAlert;
