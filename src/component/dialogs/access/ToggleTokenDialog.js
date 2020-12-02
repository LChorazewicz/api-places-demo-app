import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ToggleTokenDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = () => {
        props.onToggle();
        handleClose();
    }

    return (
        <div style={{display: 'inline'}}>
            <button type="button" className="btn btn-sm" onClick={handleClickOpen}>
                { props.status ? (
                    <svg width="1em" height="1em" viewBox="0 0 16 16"
                         className="bi bi-pause-fill" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                    </svg>
                ) : (
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-play" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                )}

                <br/>
                <small>
                    {props.status ? 'Wyłącz' : 'Włącz'}
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
                    <DialogContentText id="alert-dialog-description" style={{whiteSpace: 'pre-wrap'}}>
                        {props.status ? 'Czy napewno chcesz wyłączyć ten token?' : 'Czy napewno chcesz włączyć ten token?'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" autoFocus onClick={handleChange}>
                        Potwierdzam
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
