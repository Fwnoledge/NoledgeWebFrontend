import React from 'react';
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import {XMarkIcon} from "@heroicons/react/24/outline";

const NegativeAlert = ({message = "Operazione non riuscita", handleClose}: AlertState) => {
    return (
        <div className="rounded-md bg-red-50 p-4 w-full mb-2">
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{message !== "" ? message : "Operazione Fallita"}</p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            onClick={handleClose}
                            type="button"
                            className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100"
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NegativeAlert;
