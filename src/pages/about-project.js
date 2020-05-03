import * as React from "react";
import {Link} from "react-router-dom";

export default class AboutProject extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="textAlignLeft col-md-12">
                        <h1 className={'textAlignCenter'}>PlacesApi & PlacesWidget</h1><br/>
                        {/*<h3>Od pomysłu po aplikację</h3><br/>*/}
                        <section style={{fontSize: '24px'}}>
                            <h4 className={'textAlignCenter'} style={{fontFamily: 'Lato', fontWeight: 600}}>Pomysł</h4>
                            Aplikacja PlacesApi powstała z potrzeby posiadania i weryfikacji danych adresowych naszych
                            klientów.
                            Już nie raz zdarzyło nam się wysłać paczkę pod adres, który nie istniał. <br/><br/><br/>
                            <h4 className={'textAlignCenter'}
                                style={{fontFamily: 'Lato', fontWeight: 600}}>Powiedzieliśmy sobie dość.</h4>
                            PlacesApi korzystamy z rządowego api, które zapewnia aktualne dane miast i ulic.
                            Nasze Api jest aktualizowane raz w tygodniu, aby zapewnić zawsze najświeższe
                            dane. <br/><br/><br/>
                            <h4 className={'textAlignCenter'} style={{fontFamily: 'Lato', fontWeight: 600}}>Potrzeba
                                biznesowa</h4>
                            Idąc za ciosem, udostępniliśmy PlacesApi dla całego świata. Rejestrując się
                            <Link to={'/register'} className={'orange-text-color'}
                                  style={{fontFamily: 'Lato', fontWeight: 700}} href={'/register'}> tutaj </Link>
                            możesz uzyskać dostęp do PlacesApi i zintegrować się z nim. Istnieje również możliwość
                            skorzystania z PlacesWidget
                            gdzie w 3 prostych krokach wstawisz gotowy formularz na swoją stronę, w którym można
                            określić adres zamieszkania/dostawy. Kliknij
                            <Link to={'/register'} className={'orange-text-color'}
                                  style={{fontFamily: 'Lato', fontWeight: 700}}> tutaj </Link>
                            Aby zobaczyć jak wygląda PlacesWidget.
                        </section>

                        <br/><br/><br/><br/><br/>
                        <h5 className={'textAlignRight'}>Aplikacja stworzona przez firmę <a href={'https://softwareservice.pl/'}
                                                                                     className={'orange-text-color'}
                                                                                     style={{
                                                                                         fontFamily: 'Lato',
                                                                                     }}>SoftwareService</a>.
                        </h5>
                    </div>
                </div>

            </div>
        );
    }
}