'use client';
import React, {useEffect} from 'react';
import {redirect} from "next/navigation";
import {RootState} from "@/src/store";
import {useSelector} from "react-redux";

const AuthWrapper = ({children}: { children: any }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    useEffect(() => {
        if (!isAuthenticated) {
            redirect("/")
        }
    })

    return children

};

export default AuthWrapper;
