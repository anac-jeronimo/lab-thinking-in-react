import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchQuery: ''
    }

    handleOnChange = (event) => { 

        this.setState({
            searchQuery: event.target.value
        }, () => {
            this.props.onFilter(this.state.searchQuery);
        })
    }

    handleChange = (event) => {
        let {name, value, type} = event.target;

        if(type === 'checkbox') {
            value = event.target.checked;
        }

        this.setState ({
            [name]: value
        })
    }

    render () {
        return (
            <form>
                <input type="text" 
                name="searchQuery" 
                value={this.state.searchQuery} 
                onChange={this.handleOnChange}
                />
                <label> Only show products in stock </label>
                <input type="checkbox" name="productsInStock" onChange={(e) => this.handleChange(e)}  checked={this.state.hasProducts} />
                
            </form>
        )
    }
}

export default SearchBar; 