import React from 'react'
import { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

  articles = [
  {
      
    "source": {
      "id": null,
      "name": "The Indian Express"
    },
    "author": "Nandagopal Rajan",
    "title": "Google Street View comes to India, with data from local partners - The Indian Express",
    "description": "Google has launched its 360-degree interactive panorama feature for 10 Indian cities with data from local partners Tech Mahindra and Mumbai-based Genesis International.",
    "url": "https://indianexpress.com/article/technology/tech-news-technology/google-street-view-comes-to-india-with-data-from-local-partners-8054128/",
    "urlToImage": "https://images.indianexpress.com/2022/07/Google-Street-View-India.jpg",
    "publishedAt": "2022-07-27T06:32:43Z",
    "content": "A decade after it was prevented from capturing data for its Street View services, Google has launched its 360-degree interactive panorama feature for 10 Indian cities with data from local partners Te… [+3312 chars]"
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
  },
  {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Diane Harris",
    "title": "Recession-Proof Your Life: What to Do to Protect Your Money Now",
    "description": "Inflation is up, stocks are down and the R-word is everywhere. Here are 15 moves to safeguard your financial security in today's turbulent economy",
    "url": "https://www.newsweek.com/2022/08/05/recession-proof-your-life-what-do-protect-your-money-now-1727879.html",
    "urlToImage": "https://d.newsweek.com/en/full/2084554/fe-cover-recession-proof-banner.jpg",
    "publishedAt": "2022-07-27T09:00:01Z",
    "content": "The signs of financial gloom are seemingly everywhere. Inflation is now at its highest point in more than 40 years. Stocks officially fell into a bear market in June, dropping more than 20 percent fr… [+25098 chars]"
},
{
    "source": {
      "id": null,
      "name": "Team-BHP"
    },
    "author": "Tushar Kelshikar",
    "title": "Mahindra Scorpio Classic spotted ahead of launch - Team-BHP",
    "description": "The Mahindra Scorpio Classic has been spotted once again ahead of its official launch. As you may be aware, the old-gen Scorpio has been renamed as Scorpio Classic and will be sold alongside the",
    "url": "https://www.team-bhp.com/news/mahindra-scorpio-classic-spotted-ahead-launch",
    "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/2022-mahindra-scorpio-classic-interiors-exteriors-spied-11-696x522.jpg",
    "publishedAt": "2022-07-27T07:12:53Z",
    "content": "The Mahindra Scorpio Classic has been spotted once again ahead of its official launch.\r\nAs you may be aware, the old-gen Scorpio has been renamed as Scorpio Classic and will be sold alongside the new… [+657 chars]"
  }
  ]
  constructor() {
    super()
    console.log("Hello I am a constructor from news component")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  componentDidMount() {
    console.log("cdm")
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2>TL News - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0, 45)}
              description={element.description.slice(0, 85)} 
              imageUrl={element.urlToImage}
              newsUrl={element.url}/>
          </div>
        })}
            
            
      
            
        </div>
        
        
      </div>
    )
  }
}

export default News;
