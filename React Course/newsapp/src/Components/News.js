import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {
  articles=
    [
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Tucker  Reals",
      "title": "Live Updates: Hegseth says U.S. \"just getting started\" in Iran war as conflict intensifies and spreads - CBS News",
      "description": "The U.S. is \"accelerating, not decelerating\" war on Iran, Hegseth says, as strikes intensify in the region and reach 1,000 miles away.",
      "url": "https://www.cbsnews.com/live-updates/us-iran-war-israel-strikes-tehran-lebanon-day-5-al-udeid-targeted/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2026/03/04/aeafb2b3-6d1d-4db6-8db1-5a62cfeb2b3d/thumbnail/1200x630/c1d73beedc13b24772a36c000ea91f54/iran-war-tehran-2264172660.jpg",
      "publishedAt": "2026-03-04T16:32:00Z",
      "content": "Democratic Illinois Gov. JB Pritzker sent a letter Wednesday to Secretary of State Marco Rubio calling for more action from the State Department to help Americans evacuate the Middle East. \r\nIn the l… [+2622 chars]"
    }
  ]
  
  constructor(){
    super();
    console.log("hewy its me dipeen kaucha magar" );
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className='Container my-10'>
    <h1>News Monkey Headlines</h1>
    <div className='row my-4'>
      {this.state.articles.map ((elements)=>{
        return <div className="col-md-3" key={elements.url}>
            <Newsitem title={elements.title} description={elements.description}Url={elements.urlToImage} newsUrl={elements.url} />
        </div>
      })}
        
       
    </div>
      </div>
    )
  }
}

export default news
