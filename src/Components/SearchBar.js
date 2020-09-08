import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = event => {
        this.setState({ term: event.target.value })
    };

    onSubmitChange = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onSubmitChange} className='ui form'>
                    <div className='field'>
                        <label>Video search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;