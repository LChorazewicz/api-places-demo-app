import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from "@material-ui/core/Link";

export default function RemoveTokenDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault();

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        props.onSubmit();
        handleClose();
    }

    return (
        <div style={{display: 'inline'}}>
            <Link onClick={(e) => handleClickOpen(e)} className={'d-flex justify-content-center'}>Aktywuj
                plan</Link>
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
                    <Button color={'#e3ab40'} autoFocus onClick={handleSubmit}>
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
