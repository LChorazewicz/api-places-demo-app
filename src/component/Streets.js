import React from 'react';

export class Streets extends React.Component {
    state = {
        streets: [],
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.cityId === prevProps.cityId) {
            return;
        }

        if (!this.props.cityId) {
            this.setState({streets: []})
            return;
        }

        let http = this.props.httpService;

        http.get(`/streets/` + this.props.cityId)
            .then(res => {
                let response = [...[{id: 0, name: ' -- '}], ...res.data.data];

                this.setState({streets: response});
            });
    }

    handleEvent(e) {
        let value = parseInt(e.target.value);

        this.props.handler(value, e.currentTarget.selectedOptions[0].dataset.name)
    }

    render() {
        return (
            <div className='streets'>
                <select name='streets' id='streets' className={'browser-default custom-select2'}
                        onChange={e => this.handleEvent(e)}
                        disabled={this.state.streets.length === 0}>
                    {this.state.streets.map(street => (
                        <option value={street.id} key={street.id} data-name={street.name}>{street.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}