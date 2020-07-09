import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3001/search';

class Searches extends Component {
  constructor() {
      super();
      this.state = {
        searches: []
      };

<<<<<<< HEAD
    const fetchSearches = (origin, destination) => { // call this with the names Brisbane or Sydney as origin or destination. 
      axios.get(SERVER_URL+'/'+origin+'/'+destination).then((results) => {
        this.setState({searches: results.data}); // TODO: to be fixed, call the correct data
=======
    const fetchSearches = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({searches: results.data});
>>>>>>> 1cd0b70ea3de44b7524766eff08bbcd88d9c4bd2
        setTimeout(fetchSearches, 6000);
      });
    }

    fetchSearches();

    this.saveSearch = this.saveSearch.bind(this);
  }

  saveSearch(content) {
    axios.post(SERVER_URL, {content: content}).then((result) => {
      this.setState({searches: [...this.state.searches, result.data]});
    });
  }

  render() {
    return (
      <div>
        <h1>Boring Airlines</h1>
        <SearchForm onSubmit={ this.saveSearch } />
        <Gallery searches={ this.state.searches }/>
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state={content:''};

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <label>
          From:
          <select>
            <option value="Sydney">Sydney</option>
            <option value="Melbroune">Melbroune</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Perth">Perth</option>
            <option value="GA">GA</option>
          </select>
        </label>
        <label>
          To:
          <select>
            <option value="Sydney">Sydney</option>
            <option value="Melbroune">Melbroune</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Perth">Perth</option>
            <option value="GA">GA</option>
          </select>
        </label>
        <input {/*onSubmit=fetchSearch()*/} type="submit" value="Search Flight" />
        <input {/*onSubmit*/} type="submit" value="Cancel" />
        <input {/*onSubmit*/} type="submit" value="Save" />
      </form>
    )
  }
}

const Gallery = (props) => {
  return (
    <div>
      <h3>Available Flights</h3>
      { props.searches.map( (searches) => <p key={ searches.id }>{ searches.content }</p>)}
    </div>
  );
};


export default Searches;
