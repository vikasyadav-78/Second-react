import React, { Component } from 'react'
import NewsIteam from './NewsIteam'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "news24",
        "name": "News24"
      },
      "author": "Khanyiso Tshwaku",
      "title": "Teen sensation Lhuan-dre Pretorius at it again, continues rise with title-winning Titans ton",
      "description": "As South African cricket has discovered over the 2024/25 season, there are many strings to Lhuan-dre Pretorius' bow, but saving a 4-Day game clearly wasn't the one that was budgeted for.",
      "url": "https://www.news24.com/sport/cricket/teen-sensation-lhuan-dre-pretorius-at-it-again-continues-rise-with-title-winning-titans-ton-20250415",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/12869/abc06335510744efa3ed274066783b92.jpg",
      "publishedAt": "2025-04-15T11:05:05",
      "content": "As South African cricket has discovered over the 2024/25 season, there are many strings to Lhuan-dre Pretorius' bow, but saving a 4-Day game clearly wasn't the one that was budgeted for."
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles: [],
      loading:false
}

  }

  async componentDidMount() {
  let url = "https://newsapi.org/v2/everything?q=tesla&from=2025-03-18&sortBy=publishedAt&apiKey=c6858b56451a434584657d39a5ad23a7";
  let data = await fetch(url);
  let parsData = await data.json()
  this.setState({ articles: parsData.articles })
  console.log(this.setState)
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
    </div>
  )
}
}

export default News
