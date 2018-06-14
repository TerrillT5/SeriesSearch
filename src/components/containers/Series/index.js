import React, { Component } from 'react';
import SeriesList from '../../containers/SeriesList/index';
import First from '../../../components/Intro/First';

class Series extends Component {
  constructor() {
    super()
    this.state = {
      series: [],
      seriesName: '',
      isFetching: false
    }
  }

  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true})
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then(json => this.setState({ series: json, isFetching: false}))
       console.log(e.target.value)
  }

  render() {
    const {series, seriesName, isFetching} = this.state;
    return (
      <div>
        <div>
          <input
           value={seriesName}
           type="text"
           onChange={this.onSeriesInputChange}
          />
        </div>
        {

        !isFetching
         && series.length === 0
            && seriesName.trim() === ''
             && <p>Please enter series name into the input</p>
        }

        {
         !isFetching
           && series.length === 0
            && seriesName.trim() !== ''
             && <p>No vehicles have been found</p>
        }

         {
          isFetching && <p>Loading...</p>
        }

        {
           !isFetching && <SeriesList list={this.state.series} />
          }
      </div>
    )
  }
}

export default Series;
