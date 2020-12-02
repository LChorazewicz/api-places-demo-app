import React from 'react';

export class Communes extends React.Component {
    state = {
        communes: []
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.provinceId === prevProps.provinceId) {
            return;
        }

        if (!this.props.provinceId) {
            this.setState({communes: []})
            return;
        }

        let http = this.props.httpService;

        http.get(`/communes/` + this.props.provinceId)
            .then(res => {
                let response = [...[{id: 0, name: ' -- '}], ...res.data.data];

                this.setState({communes: response});
            });
    }

    handleEvent(e) {
        let value = parseInt(e.target.value);

        this.props.handler(value, e.currentTarget.selectedOptions[0].dataset.name)
    }

    render() {
        return (
            <div className='communes'>
                <label htmlFor="provinces" className={'leftLabel'}>Wybierz gminę</label>
                <select name='communes' id='communes' className={'browser-default custom-select2'}
                        onChange={e => this.handleEvent(e)}
                        disabled={this.state.communes.length === 0} defaultValue={0}>
                    {this.state.communes.map(commune => (
                        <option value={commune.id} key={commune.id}
                                data-name={commune.name}>{commune.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}