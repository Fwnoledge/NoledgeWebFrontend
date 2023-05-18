interface AuthSlicePayload {
    username: string,
    token: string,
}

interface AuthSlice extends AuthSlicePayload {
    isAuthenticated: boolean,
}
