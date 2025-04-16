import React, { Component } from 'react'

export default class NewsIteam extends Component {
  render() {
    let {title , descripation} = this.props;
    return (
      <div>
        <div className="card" style="width: 18rem;">
          <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{descripation}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}
