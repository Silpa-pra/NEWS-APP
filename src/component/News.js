import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      let url =
        'https://newsapi.org/v2/everything?q=apple&from=2025-03-31&to=2025-03-31&sortBy=popularity&apiKey=02c3903213ee4909bb3e05c077fca25b';
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({ articles: parsedData.articles });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ''
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default News;
