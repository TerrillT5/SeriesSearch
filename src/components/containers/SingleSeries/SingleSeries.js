import React, { Component } from 'react';

class SingleSeries extends Component {
  constructor() {
    super()
    this.state = {
      show: null
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((response) => response.json())
      .then(json => this.setState({show: json}));
  }

  render() {
    const { show } = this.state;
    console.log(show);
    return (
      <div>
        { show === null
           && <p>No shows available</p>
         }
          {
            show !== null
              &&
              <div>
              <p>{show.name}</p>
              <p>{show.rating.average} Rating</p>
              <p>{show._embedded.episodes.length} Episodes</p>
              <p>
                <img alt="Show" src={show.image.medium} />
              </p>
              </div>
          }
      </div>
    )
   }
}

export default SingleSeries;
