import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Clipboard from "../../../utils/clipboard";

export default function ShowTokenDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCopy = () => {
        Clipboard(props.token, function (){
            props.notificator.notifySuccess('Skopiowano do schowka');
        }, function () {
            props.notificator.notifySuccess('Błąd kopiowania');
        });
    }

    return (
        <div style={{display: 'inline'}}>
            <button type="button" className="btn btn-sm" onClick={handleClickOpen}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                    <path fillRule="evenodd"
                          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                <br/>
                <small>
                    Zobacz token
                </small>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                scroll={'paper'}
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{wordWrap: 'break-word'}}>
                        {props.token}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCopy} color="primary" autoFocus>
                        Kopiuj do schowka
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
