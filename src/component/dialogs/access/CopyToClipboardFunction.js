import React from 'react';
import Clipboard from "../../../utils/clipboard";

export default function CopyToClipboardFunction(props)
{
    const handleCopy = () => {
        Clipboard(props.content, function (){
            props.notificator.notifySuccess('Skopiowano do schowka');
        }, function () {
            props.notificator.notifySuccess('Błąd kopiowania');
        });
    }

    return (
        <div style={{display: 'inline'}}>
            <button type="button" className="btn btn-sm" onClick={handleCopy}>
                <svg width="1em" height="1em" viewBox="0 0 16 16"
                     className="bi bi-front" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"/>
                </svg>
                <br/>
                <small>
                    Skopiuj
                </small>
            </button>
        </div>
    );
}
