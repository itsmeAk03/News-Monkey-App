import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
      super();
      console.log("This is a constructor");
      this.state={
          articles:[],
          loading: false,
          page:1

      }
    }

    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f&pageSize=20";
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults})
    }

    handleNextClick = async()=>{
      if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f&page=${this.state.page+1}&pageSize=20`;
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      
      this.setState({
        page: this.state.page+1,
        articles:parsedData.articles
      })
    }
    }
    handlePrevClick = async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f&page=${this.state.page-1}&pageSize=20`;
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      
      this.setState({
        page: this.state.page-1,
        articles:parsedData.articles
      })
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
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
        <button  type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
