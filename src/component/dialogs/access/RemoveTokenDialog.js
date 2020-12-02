import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function RemoveTokenDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = () => {
        props.onRemove();
        handleClose();
    }

    return (
        <div style={{display: 'inline'}}>
            <button type="button" className="btn btn-sm" onClick={handleClickOpen}>
                <svg width="1em" height="1em" viewBox="0 0 16 16"
                     className="bi bi-x"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                <br/>
                <small>
                    Usuń
                </small>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                scroll={'paper'}
                color={'#e3ab40'}
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{whiteSpace: 'pre-wrap'}}>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color={'#e3ab40'} autoFocus onClick={handleChange}>
                        Potwierdzam
                    </Button>
                    <Button onClick={handleClose} color={'#e3ab40'}>
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
