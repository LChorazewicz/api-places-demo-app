import React from 'react';

export class Provinces extends React.Component {
    state = {
        provinces: [],
    }

    componentDidMount() {
        let http = this.props.httpService;
        http.get(`/provinces`)
            .then(res => {
                let response = [...[{id: 0, name: ' -- '}], ...res.data.data];

                this.setState({provinces: response});
            });
    }

    handleEvent(e) {
        let value = parseInt(e.target.value);

        this.props.handler(value, e.currentTarget.selectedOptions[0].dataset.name)
    }

    render() {
        return (
            <div className='provinces'>
                <select name='provinces' id='provinces' className={'browser-default custom-select'}
                        onChange={e => this.handleEvent(e)}
                        disabled={this.state.provinces.length === 0}>
                    {this.state.provinces.map(province => (
                        <option value={province.id} key={province.id}
                                data-name={province.name}>{province.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}