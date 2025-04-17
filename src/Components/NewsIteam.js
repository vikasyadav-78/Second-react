import React, { Component } from 'react'

export default class NewsIteam extends Component {
  render() {
    let { title, descripation,imageUrl,newsUrl } = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "100%"}}>
          <img src={imageUrl} width={"100%"} height={"200vh"}  className="card-img-top object-fit-cover" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{descripation}...</p>
            <a href={newsUrl}  className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
