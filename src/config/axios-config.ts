import axios from "axios";

export const localInstance = axios.create({
    baseURL: "/api/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

const url = process.env.NEXT_PUBLIC_API_URL;

export const djangoInstance = axios.create({
    baseURL: url,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})
