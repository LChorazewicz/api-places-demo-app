import {Link} from "react-router-dom";
import {Provinces} from "../component/Provinces";
import {Communes} from "../component/Communes";
import {Countries} from "../component/Countries";
import {Cities} from "../component/Cities";
import {Streets} from "../component/Streets";
import React from "react";

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.httpService = this.props.httpService;
    }
    state = {
        provinceId: null, communeId: null, countryId: null, cityId: null, streetId: null,
        provinceName: null, communeName: null, countryName: null, cityName: null, streetName: null,
    }

    handleSelectProvinceEvent(provinceId, provinceName) {
        this.setState({
            provinceId: provinceId, provinceName: provinceName, communeId: null, countryId: null, cityId: null,
            streetId: null, communeName: null, countryName: null, cityName: null, streetName: null,
        });
    }

    handleSelectCommuneEvent(communeId, communeName) {
        this.setState({
            communeId: communeId, communeName: communeName, countryId: null, cityId: null,
            streetId: null, countryName: null, cityName: null, streetName: null,
        });
    }

    handleSelectCountryEvent(countryId, countryName) {
        this.setState({
            countryId: countryId, countryName: countryName, cityId: null,
            streetId: null, cityName: null, streetName: null,
        });
    }

    handleSelectCityEvent(cityId, cityName) {
        this.setState({
            cityId: cityId, cityName: cityName, streetId: null, streetName: null,
        });
    }

    handleSelectStreetEvent(streetId, streetName) {
        this.setState({streetId: streetId, streetName: streetName});
    }

    render() {
        const provinceId = this.state.provinceId,
            communeId = this.state.communeId,
            countryId = this.state.countryId,
            cityId = this.state.cityId,
            streetId = this.state.streetId;

        return (
            <div>
                <div className="row">
                    <div className="col-md">
                        <h1 className={'textAlignLeft'} style={{fontFamily: 'StandardLatoFont', paddingTop: '12px'}}>API z aktualną
                            listą <br/>wszystkich miejscowości i ulic w Polsce.</h1>
                        <h3 className={'textAlignLeft'}
                            style={{fontFamily: 'LightLatoFont', fontSize: '20px'}}>Zintegruj się z
                            PlacesAPI lub podepnij PlacesWidget<br/>na swojej stronie internetowej.</h3>
                        <br/>
                        <Link to={'/register'} className={'floatLeft btn registerButton col-sm-12 col-md-12 col-lg-12 col-xl-6'}
                           style={{fontFamily: 'StandardLatoFont', fontWeight: 700}} color={'orange'} href={'/register'}>Załóż
                            darmowe konto</Link>

                    </div>
                    <div className="col-md">
                        <Provinces httpService={this.httpService}
                                   handler={this.handleSelectProvinceEvent.bind(this)}/>
                        <Communes httpService={this.httpService} handler={this.handleSelectCommuneEvent.bind(this)}
                                  provinceId={this.state.provinceId}/>
                        <Countries httpService={this.httpService} handler={this.handleSelectCountryEvent.bind(this)}
                                   communeId={this.state.communeId}/>
                        <Cities httpService={this.httpService} handler={this.handleSelectCityEvent.bind(this)}
                                countryId={this.state.countryId}/>
                        <Streets httpService={this.httpService} handler={this.handleSelectStreetEvent.bind(this)}
                                 cityId={this.state.cityId}/>
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
                        <h4 className={'textAlignCenter'} style={{fontFamily: 'LightLatoFont', fontWeight: 400}}>lub w taki
                            sposób</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        {provinceId && provinceId !== 0 ? provinceId : ' -- '};
                        {communeId && communeId !== 0 ? communeId : ' -- '};
                        {countryId && countryId !== 0 ? countryId : ' -- '};
                        {cityId && cityId !== 0 ? cityId : ' -- '};
                        {streetId && streetId !== 0 ? streetId : ' -- '};
                    </div>
                </div>
            </div>
        );
    }
}
