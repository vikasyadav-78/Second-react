import React, { Component } from 'react'

export default class NewsIteam extends Component {
  render() {
    let { title, descripation,imageUrl,newsUrl } = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "100%" ,minHeight: "75vh"}}>
          <img src={!imageUrl?"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg":imageUrl} width={"100%"} height={"200vh"}  className="card-img-top object-fit-cover" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{!title?"Canada’s Gen Z Voters Turn to Conservati.":title}...</h5>
            <p className="card-text">{!descripation?"Elon Musk, who is leading DOGE, has reportedly privately approached multiple women throu": descripation}...</p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
