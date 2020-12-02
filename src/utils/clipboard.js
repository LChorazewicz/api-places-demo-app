export default function Clipboard(content, onSuccess = null, onFailure = null) {
    navigator.clipboard.writeText(content).then(function () {
            if (typeof onSuccess === 'function') {
                onSuccess();
            }
        }, function (err) {
            if (typeof onFailure === 'function') {
                onFailure(err);
            }
        }
    );
};