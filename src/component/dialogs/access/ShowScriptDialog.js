import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Clipboard from "../../../utils/clipboard";

export default function ShowScriptDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCopy = () => {
        Clipboard(generateWidgetScript(props.token), function () {
            props.notificator.notifySuccess('Skopiowano do schowka');
        }, function (message) {
            props.notificator.notifySuccess('Błąd kopiowania');
        });
    }

    const generateWidgetScript = (token, url) => {

        return '' +
            '<script>\n' +
            '   let xmlHttp = new XMLHttpRequest(),\n' +
            '       xmlHttp.open("GET", "' + url + '", true);\n' +
            '       xmlHttp.send(null);\n' +
            '       xmlHttp.onreadystatechange = function () {\n' +
            '           if (xmlHttp.readyState !== 4) {\n' +
            '               return;\n' +
            '           }\n' +
            '           let js = xmlHttp.response,\n' +
            '               oScript = document.createElement("script"),\n' +
            '               oScriptText = document.createTextNode(js);\n\n' +
            '           oScript.appendChild(oScriptText);\n' +
            '           document.body.appendChild(oScript);\n' +
            '       }\n' +
            '</script>\n\n' +
            '<script>\n' +
            '   let id = \'widget-places-app\',\n' +
            '       token = "' + token + '";\n' +
            '        (function (id, token, callback) {\n' +
            '            let widget = setInterval(function () {\n' +
            '                // eslint-disable-next-line no-undef\n' +
            '                let instance = typeof PlacesWidget !== \'undefined\' ? PlacesWidget.default : null;\n' +
            '                if(!instance){\n' +
            '                    return;\n' +
            '                }\n' +
            '                (instance.new({id: id, token: token, callback: callback})).render();\n' +
            '                clearInterval(widget);\n' +
            '            }, 0);\n' +
            '        })(id, token, function (callbackParams) {\n' +
            '            console.log(callbackParams);\n' +
            '        });' +
            '</script>';
    }

    return (
        <div style={{display: 'inline'}}>
            <button type="button" className="btn btn-sm" onClick={handleClickOpen}>
                <svg width="1em" height="1em" viewBox="0 0 16 16"
                     className="bi bi-arrows-angle-expand" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                </svg>
                <br/>
                <small>
                    Zobacz skrypt
                </small>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                scroll={'paper'}
            >
                <DialogTitle id="alert-dialog-title">Skrypt - wklej go na swoją stronę www</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{whiteSpace: 'pre-wrap'}}>
                        {generateWidgetScript(props.token, props.api_url)}
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
