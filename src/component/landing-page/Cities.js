import React from 'react';

export class Cities extends React.Component {
    state = {
        cities: []
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.countryId === prevProps.countryId) {
            return;
        }

        if (!this.props.countryId) {
            this.setState({cities: []})
            return;
        }

        let http = this.props.httpService;

        http.get(`/cities/` + this.props.countryId)
            .then(res => {
                let response = [...[{id: 0, name: ' -- '}], ...res.data.data];

                this.setState({cities: response});
            });
    }

    handleEvent(e) {
        let value = parseInt(e.target.value);

        this.props.handler(value, e.currentTarget.selectedOptions[0].dataset.name)
    }

    render() {
        return (
            <div className='cities'>
                <label htmlFor="countries" className={'leftLabel'}>Wybierz miejscowość</label>
                <select name='cities' id='cities' className={'browser-default custom-select2'}
                        onChange={e => this.handleEvent(e)}
                        disabled={this.state.cities.length === 0}>
                    {this.state.cities.map(city => (
                        <option value={city.id} key={city.id}
                                data-name={city.name}>{city.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}