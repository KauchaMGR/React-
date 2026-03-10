import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class news extends Component {
  articles = [
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Tucker Reals",
      title:
        'Live Updates: Hegseth says U.S. "just getting started" in Iran war as conflict intensifies and spreads - CBS News',
      description:
        'The U.S. is "accelerating, not decelerating" war on Iran, Hegseth says, as strikes intensify in the region and reach 1,000 miles away.',
      url: "https://www.cbsnews.com/live-updates/us-iran-war-israel-strikes-tehran-lebanon-day-5-al-udeid-targeted/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2026/03/04/aeafb2b3-6d1d-4db6-8db1-5a62cfeb2b3d/thumbnail/1200x630/c1d73beedc13b24772a36c000ea91f54/iran-war-tehran-2264172660.jpg",
      publishedAt: "2026-03-04T16:32:00Z",
      content:
        "Democratic Illinois Gov. JB Pritzker sent a letter Wednesday to Secretary of State Marco Rubio calling for more action from the State Department to help Americans evacuate the Middle East.",
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: "Mike Florio",
      title: "Raiders will trade for Bills CB Taron Johnson - NBC Sports",
      description:
        "The Bills were planning to release cornerback Taron Johnson.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/raiders-will-trade-for-bills-cb-taron-johnson",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/568e34a/2147483647/strip/true/crop/5181x2914+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F1b%2F9f%2Fc835eccb4945bc74c3e5c10bd95f%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2256429061",
      publishedAt: "2026-03-09T01:54:51Z",
      content:
        "The Bills were planning to release cornerback Taron Johnson. The Raiders decided to intervene before he could become a free agent.",
    },
    {
      source: { id: null, name: "Sports Illustrated" },
      author: "Albert Breer",
      title:
        "Albert Breer's Pre-Free Agency Takeaways: Why Linemen Could Receive 'Wow' Contracts - Sports Illustrated",
      description:
        "Indianapolis's Alec Pierce could get paid big, too. Plus, more on the Maxx Crosby trade, and the wide receiver and running back markets.",
      url: "https://www.si.com/nfl/albert-breer-free-agency-takeaways-why-linemen-could-receive-wow-contracts",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_142,w_3212,h_1806/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01kk81zh8bg0hmap6xr6.jpg",
      publishedAt: "2026-03-09T01:42:17Z",
      content:
        "Jump to a topic: Maxx Crosby trade, Buffalo Bills, Tyler Linderbaum, Offensive linemen demand, Alec Pierce, Daniel Jones, Running backs.",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "Jordan Dajani",
      title:
        "NFL free agency 2026 live updates: Rumors, trades, signings, latest news ahead of legal tampering period - CBS Sports",
      description:
        "The official start of NFL free agency is March 11, but teams can begin negotiating and agreeing to terms with players on March 9",
      url: "https://www.cbssports.com/nfl/news/nfl-free-agency-news-live-updates-march-8-2026/live/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2026/01/01/6bb0ccdd-2a0f-48a4-b774-ef7d8b548fe7/thumbnail/1200x675/bd51d1f11bc1c4957cd2f31bad53d3df/getty-george-pickens-cowboys.jpg",
      publishedAt: "2026-03-08T20:33:31Z",
      content:
        "We are just one day away from the start of free agency, but it feels like the NFL offseason is already in full swing.",
    },
  ];

  constructor() {
    super();
    console.log("hewy its me dipeen kaucha magar");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    console.log("i was invoked after the constructor  ");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=beec25a0b33a4ceea4db93d7be57cae5";
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({ articles: parsed_data.articles });
    console.log(parsed_data);
  }
  render() {
    return (
      <div className="Container my-10">
        <h1>News Monkey Headlines</h1>
        <div className="row my-4">
          {this.state.articles.map((elements) => {
            return (
              <div className="col-md-3" key={elements.url}>
                <Newsitem
                  title={elements.title}
                  description={elements.description}
                  Url={elements.urlToImage}
                  newsUrl={elements.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between bg-">
          <button type="button" class="btn btn-info "> &larr; previous</button>
          <button type="button" class="btn btn-info ">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default news;
