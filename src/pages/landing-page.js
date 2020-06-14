import {Link} from "react-router-dom";
import React from "react";

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.httpService = this.props.httpService;
    }

    componentDidMount() {
        // eslint-disable-next-line no-undef
        (PlacesWidget.default.new({
            id: 'widget-places-app',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NTEsImV4cCI6MTYxMDE5OTc1MSwiYWNjb3VudF91dWlkIjoibC5jaG9yYXpld2ljejEyIn0.kSSOPPW6O3dBMD_DX-xHIXrGbmhuR97lhGMu_MRt1F1S9-42sZWp_xYvwszWpM6j7VAVDmPS3JdhHIufw_HBVYzYH8oOqRBhFFo0Q8yE9ltpDA6Kf8LLVkSIWUH74Yy9jAbuoILIAQpdTE1forCtcP653hh_W3o9xtPXkWvAzNy_ttcod-YUs55qufDEcmQWU5FkQvhZ99A7DyTaMgseVJy9rqEWJFZnWLHnNMu0bz3ur4v2mJqM1ssVVlXEPBdWCbiCpHeLuULiylP5a9GXq4y93FXIrK8qp5n5CR-ubn1nxW7JGOcaOXAaWuWxwi_EakFX0yeupJZThTMTh3V07A'
        })).render();
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
                        <Link to={'/places/register'}
                              className={'floatLeft btn registerButton col-sm-12 col-md-12 col-lg-12 col-xl-6'}
                              style={{fontFamily: 'StandardLatoFont', fontWeight: 700}} color={'orange'}
                              href={'/places/register'}>Załóż
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
                        {/*{this.state.provinceName ?? ' -- '};*/}
                        {/*{this.state.communeName ?? ' -- '};*/}
                        {/*{this.state.countryName ?? ' -- '};*/}
                        {/*{this.state.cityName ?? ' -- '};*/}
                        {/*{this.state.streetName ?? ' -- '};*/}
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
                        {/*{provinceId && provinceId !== 0 ? provinceId : ' -- '};*/}
                        {/*{communeId && communeId !== 0 ? communeId : ' -- '};*/}
                        {/*{countryId && countryId !== 0 ? countryId : ' -- '};*/}
                        {/*{cityId && cityId !== 0 ? cityId : ' -- '};*/}
                        {/*{streetId && streetId !== 0 ? streetId : ' -- '};*/}
                    </div>
                </div>
            </div>
        );
    }
}
