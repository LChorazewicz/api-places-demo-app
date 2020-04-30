import React from 'react';

export class Countries extends React.Component {
    state = {
        countries: []
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.communeId === prevProps.communeId) {
            return;
        }

        if (!this.props.communeId) {
            this.setState({countries: []})
            return;
        }

        let http = this.props.httpService;

        http.get(`/communes_in_countries/` + this.props.communeId)
            .then(res => {
                let response = [...[{id: 0, name: ' -- '}], ...res.data.data];

                this.setState({countries: response});
            });
    }

    handleEvent(e) {
        let value = parseInt(e.target.value);

        this.props.handler(value, e.currentTarget.selectedOptions[0].dataset.name)
    }

    render() {
        return (
            <div className='countries'>
                <select name='countries' id='countries' className={'browser-default custom-select2'}
                        onChange={e => this.handleEvent(e)}
                        disabled={this.state.countries.length === 0}>
                    {this.state.countries.map(country => (
                        <option value={country.id}
                                key={country.id}
                                data-name={country.name}>{country.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}