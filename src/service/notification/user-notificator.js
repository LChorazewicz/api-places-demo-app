import Snackbar from "node-snackbar";
import 'node-snackbar/dist/snackbar.css';

export default class UserNotificator
{
    notifySuccess(message) {
        Snackbar.show({
            text: message,
            actionText: 'Zamknij',
            actionTextColor: '#e3ab40',
            duration: 7000
        });
    }
}