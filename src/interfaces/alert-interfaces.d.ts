interface AlertMessage {
    message: string,
    show: boolean,
    positive: boolean
}

interface AlertProps {
    message: AlertMessage
    handleClose: ({_}: AlertMessage) => void
}

interface AlertState {
    message: string
    handleClose: () => void
}
