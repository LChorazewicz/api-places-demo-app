import * as React from "react";
import {Link} from "react-router-dom";

export default class AboutProject extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="textAlignLeft col-md-12">
                        <h1 className={'textAlignCenter'}>PlacesApi & PlacesWidget</h1><br/>
                        <section style={{fontSize: '20px', textAlign: 'justify'}}>
                            <h4 className={'textAlignCenter about-header'}>Pomysł</h4>
                            Aplikacja PlacesApi powstała z potrzeby posiadania i weryfikacji danych adresowych naszych
                            klientów.
                            Już nie raz zdarzyło nam się wysłać paczkę pod adres, który nie istniał. <br/><br/><br/>
                            <h4 className={'textAlignCenter about-header'}>Powiedzieliśmy sobie dość.</h4>
                            PlacesApi korzystamy z rządowego api, które zapewnia aktualne dane miast i ulic.
                            Nasze Api jest aktualizowane raz w tygodniu, aby zapewnić zawsze najświeższe
                            dane. <br/><br/><br/>
                            <h4 className={'textAlignCenter about-header'}>Potrzeba biznesowa</h4>
                            Idąc za ciosem, udostępniliśmy PlacesApi dla całego świata. Rejestrując się
                            <Link to={'/places/register'} className={'bold-orange-link'} href={'/places/register'}> tutaj </Link>
                            możesz uzyskać dostęp do PlacesApi i zintegrować się z nim. Istnieje również możliwość
                            skorzystania z PlacesWidget
                            gdzie w 3 prostych krokach wstawisz gotowy formularz na swoją stronę, w którym można
                            określić adres zamieszkania/dostawy. Kliknij
                            <Link to={'/places'} className={'bold-orange-link'}> tutaj </Link>
                            Aby zobaczyć jak wygląda PlacesWidget.
                        </section>
                    </div>
                </div>

            </div>
        );
    }
}