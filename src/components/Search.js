import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3001/search';

class Searches extends Component {
  constructor() {
      super();
      this.state = {
        searches: []
      };


    const fetchSearches = (origin, destination) => { // call this with the names Brisbane or Sydney as origin or destination.
      axios.get(SERVER_URL+'/'+origin+'/'+destination).then((results) => {
        this.setState({searches: results.data});
=======
    const fetchSearches = (origin, destination) => { // call this with the names Brisbane or Sydney as origin or destination.
      axios.get(SERVER_URL+'/'+origin+'/'+destination).then((results) => {
        this.setState({searches: results.data}); // TODO: to be fixed, call the correct data
>>>>>>> 0520a4aedc7443728c4885d47c0d628354f75ed9
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
    this.start=[];
    this.end=[];

    this._handleChangeStart = this._handleChangeStart.bind(this);
    this._handleChangeEnd = this._handleChangeEnd.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChangeStart(event) {
    let options = event.target.options
    let value;
    for (let i=0; i<options.length; i++) {
      if (options[i].selected) {
        value = options[i].value;
        console.log(value)
      }
    }
    this.setState({value: value});
  }

  _handleChangeEnd(event) {
    let options = event.target.options
    let value;
    for (let i=0; i<options.length; i++) {
      if (options[i].selected) {
        value = options[i].value;
        console.log(value)
      }
    }
    this.setState({value: value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''});
  }

  render() {
    return (
      <form>
        <label>
          From:
          <select onChange={ this._handleChangeStart }>
            <option value="1">Sydney</option>
            <option value="2">Melbourne</option>
            <option value="3">Brisbane</option>
            <option value="4">Perth</option>
            <option value="5">GA</option>
          </select>
        </label>
        <label>
          To:
          <select onChange={ this._handleChangeEnd }>
            <option value="1">Sydney</option>
            <option value="2">Melbourne</option>
            <option value="3">Brisbane</option>
            <option value="4">Perth</option>
            <option value="5">GA</option>
          </select>
        </label>
        <input type="submit" value="Search Flight" onSubmit={ this._handleSubmit } />
        <input type="submit" value="Cancel" />
        <input type="submit" value="Save" />
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
