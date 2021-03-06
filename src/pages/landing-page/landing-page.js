import {Link} from "react-router-dom";
import React from "react";

export default class LandingPage extends React.Component {

    state = {
        provinceId: null, communeId: null, countryId: null, cityId: null, streetId: null,
        provinceName: null, communeName: null, countryName: null, cityName: null, streetName: null,
    }

    constructor(props) {
        super(props);
        this.httpService = this.props.httpService;
    }

    componentDidMount() {
        let id = 'widget-places-app',
            token = this.props.appConfigProvider.getAppWidgetToken();

        let $this = this;
        (function (id, token, callback) {
            let widget = setInterval(function () {
                // eslint-disable-next-line no-undef
                let instance = typeof PlacesWidget !== 'undefined' ? PlacesWidget.default : null;
                if(!instance){
                    return;
                }
                (instance.new({id: id, token: token, callback: callback})).render();
                clearInterval(widget);
            }, 0);
        })(id, token, function (array) {
            $this.setState(array);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md">
                        <h1 className={'textAlignLeft'} style={{fontFamily: 'StandardLatoFont', paddingTop: '12px'}}>API
                            z aktualną
                            listą <br/>wszystkich miejscowości i ulic w Polsce.</h1>
                        <h3 className={'textAlignLeft'}
                            style={{fontFamily: 'LightLatoFont', fontSize: '20px'}}>Zintegruj się z
                            PlacesAPI lub podepnij PlacesWidget<br/>na swojej stronie internetowej.</h3>
                        <br/>
                        <Link to={'/places/platform/register'}
                              className={'floatLeft btn registerButton col-sm-12 col-md-12 col-lg-12 col-xl-6'}
                              style={{fontFamily: 'StandardLatoFont', fontWeight: 700}} color={'orange'}
                              href={'/places/platform/register'}>Załóż
                            darmowe konto</Link>
                    </div>
                    <div className="col-md">
                        <div id="widget-places-app" />
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md">
                        <h4 className={'textAlignCenter'} style={{fontFamily: 'LightLatoFont'}}>Dane z PlacesAPI
                            i PlacesWidget możesz zapisać w taki sposób</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        {this.state.provinceName ?? ' -- '};
                        {this.state.communeName ?? ' -- '};
                        {this.state.countryName ?? ' -- '};
                        {this.state.cityName ?? ' -- '};
                        {this.state.streetName ?? ' -- '};
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md">
                        <h4 className={'textAlignCenter'} style={{fontFamily: 'LightLatoFont', fontWeight: 400}}>lub w
                            taki
                            sposób</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        {this.state.provinceId && this.state.provinceId !== 0 ? this.state.provinceId : ' -- '};
                        {this.state.communeId && this.state.communeId !== 0 ? this.state.communeId : ' -- '};
                        {this.state.countryId && this.state.countryId !== 0 ? this.state.countryId : ' -- '};
                        {this.state.cityId && this.state.cityId !== 0 ? this.state.cityId : ' -- '};
                        {this.state.streetId && this.state.streetId !== 0 ? this.state.streetId : ' -- '};
                    </div>
                </div>
            </div>
        );
    }
}
