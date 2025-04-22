import React, { Component } from 'react'
import NewsIteam from './NewsIteam'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading:false
}

  }

  async componentDidMount() {
  let url = "https://newsapi.org/v2/everything?q=tesla&from=2025-03-22&sortBy=publishedAt&apiKey=c6858b56451a434584657d39a5ad23a7&page=1&pageSize=20";
  
  let data = await fetch(url);
  let parsData = await data.json()
  this.setState({ articles: parsData.articles })
}

handdlePrevBtn = async () =>{
  console.log("pre");
  let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-03-22&sortBy=publishedAt&apiKey=c6858b56451a434584657d39a5ad23a7&page=${this.state.page - 1}&pageSize=20`;
  let data = await fetch(url);
  let parsData = await data.json()
  this.setState({
    page: this.state.page - 1,
    articles: parsData.articles 
  })
}
handdleNextBtn = async () =>{
  console.log("next");
  let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-03-22&sortBy=publishedAt&apiKey=c6858b56451a434584657d39a5ad23a7&page=${this.state.page + 1}pageSize=20`;
  let data = await fetch(url);
  let parsData = await data.json()
  this.setState({
    page: this.state.page + 1,
    articles: parsData.articles 
  })
}

render() {
  return (
    <div className='container my-3'>
      <h2>NewsApp - Today Top HeadLines</h2>
      <div className='row'>
        {this.state.articles.map((data) => {
          return <div className='col-sm-12 col-md-6 col-lg-4' key={data.url}>
            <NewsIteam title={data.title ? data.title.slice(0, 40) : ""} descripation={data.description ? data.description.slice(0, 88) : ""} imageUrl={data.urlToImage} newsUrl={data.url} />
          </div>
        })}
      </div>
      <div class="d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} onClick={this.handdlePrevBtn} className="btn btn-dark">Prev</button>
      <button type="button" onClick={this.handdleNextBtn} className="btn btn-dark">Next</button>
      </div>
    </div>
  )
}
}

export default News
