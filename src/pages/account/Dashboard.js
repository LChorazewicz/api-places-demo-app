import Footer from "../../component/Footer";
import * as React from "react";
import LoggedHeader from "../../component/LoggedHeader";

export default class Dashboard extends React.Component {
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            window.location.href = '/places';
        }
    }


    handleInit() {
        return {
            widget: {
                limit: 200,
                usage: 20
            },
            api: {
                limit: 200,
                usage: 30
            }
        }
    }

    render() {
        const api = this.handleInit().api,
            widget = this.handleInit().widget,
            apiPercent = api.usage / api.limit * 100,
            widgetPercent = widget.usage / widget.limit * 100;

        return (
            <div>
                <LoggedHeader/>
                <div className={'container h-100'} style={{minHeight: '100vh'}}>
                    <h3>
                        Statystyki użycia platformy w obecnym okresie rozliczeniowym - Październik 2020
                    </h3><br/>
                    <div className="row">
                        <table className="table table-striped table-bordered col-md-12">
                            <thead className={'thead-dark'}>
                            <tr>
                                <th scope="col">Użycia API</th>
                                <th scope="col">Użycia Widget-u</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr >
                                <td>{apiPercent}% ({api.usage} / {api.limit})</td>
                                <td>{widgetPercent}% ({widget.usage} / {widget.limit})</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}