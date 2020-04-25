import React from 'react';
import {Provinces} from "./component/Provinces";
import {Communes} from "./component/Communes";
import {Countries} from "./component/Countries";
import {Cities} from "./component/Cities";
import {Streets} from "./component/Streets";

export default class App extends React.Component {
    state = {
        provinceId: null, communeId: null, countryId: null, cityId: null, streetId: null,
        provinceName: null, communeName: null, countryName: null, cityName: null, streetName: null,
    }

    constructor(props) {
        super(props);
        this.httpService = this.props.apiRestService.getInstance();
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
            <div className="App">
                <div className={'container'}>
                    Api Places demo app<br/>
                    <Provinces httpService={this.httpService} handler={this.handleSelectProvinceEvent.bind(this)}/>
                    <Communes httpService={this.httpService} handler={this.handleSelectCommuneEvent.bind(this)}
                              provinceId={this.state.provinceId}/>
                    <Countries httpService={this.httpService} handler={this.handleSelectCountryEvent.bind(this)}
                               communeId={this.state.communeId}/>
                    <Cities httpService={this.httpService} handler={this.handleSelectCityEvent.bind(this)}
                            countryId={this.state.countryId}/>
                    <Streets httpService={this.httpService} handler={this.handleSelectStreetEvent.bind(this)}
                             cityId={this.state.cityId}/>
                </div>
                <div className={'container'} style={{height: '150px', lineHeight: 1.4, padding: '15px'}}><br/>
                    Wybrano:
                    {this.state.provinceName ?? ' -- '};
                    {this.state.communeName ?? ' -- '};
                    {this.state.countryName ?? ' -- '};
                    {this.state.cityName ?? ' -- '};
                    {this.state.streetName ?? ' -- '};

                    <br/> <br/>
                    Wybrano:
                    {provinceId && provinceId !== 0 ? provinceId : ' -- '};
                    {communeId && communeId !== 0 ? communeId : ' -- '};
                    {countryId && countryId !== 0 ? countryId : ' -- '};
                    {cityId && cityId !== 0 ? cityId : ' -- '};
                    {streetId && streetId !== 0 ? streetId : ' -- '};
                </div>
            </div>
        );
    }
}