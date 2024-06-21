import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
      super();
      console.log("This is a constructor");
      this.state={
          articles:[],
          loading: false
      }
    }

    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f";
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles:parsedData.articles})
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>PigeonPost - Top Headlines</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,68):""} imageUrl={element.urlToImage} newsUrl={element.url} />
    </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
