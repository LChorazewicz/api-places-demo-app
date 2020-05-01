import * as React from "react";

export default class Registered extends React.Component {

    render() {
        return (
            <div>
                <div className={'row'}>
                    <div className="col-md-12">
                        <h1 style={{marginTop: '50px'}}> Potwierdzenie rejestracji </h1>
                    </div>
                    <div className="col-md-4">
                        <div className="step">
                            Rejestracja
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="actual-step-container">
                            <div className="actual-step">
                                Potwierdzenie rejestracji
                            </div>
                            <div className="actual-step-arrow" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="step">
                            Dostęp do platformy
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <h4>Sprawdź swojego maila i potwierdz rejestrację poprzez kliknięcie w link aktywacyjny.</h4>
                    </div>
                </div>
            </div>
        );
    }
}