import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import '../Styles/News.css';


export class News extends Component {

    // static defaultProps ={
    //   country: 'in',
    //   pageSize: 8,
    //   category:'general'
    // }
    // static propTypes ={
    //   country: PropTypes.string,
    //   pageSize: PropTypes.number,
    //   category:PropTypes.string,
    // }

    constructor(props){
      super(props);
      console.log("This is a constructor");
      this.state={
          articles:[],
          loading: false,
          page:1

      }
      document.title=`${this.props.category} - PigeonPost`;
    }

    async updateNews(){
      this.props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      this.props.setProgress(30);
      let parsedData=await data.json();
      this.props.setProgress(70);
      this.setState({loading:false});
      console.log(parsedData);
      this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults});
      this.props.setProgress(100);
    }

    async componentDidMount(){
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data=await fetch(url);
      // let parsedData=await data.json();
      // this.setState({loading:false});
      // console.log(parsedData);
      // this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults})
      this.updateNews();
    }

    handleNextClick = async()=>{
    //   if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    //   }
    //   else{
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data=await fetch(url);
    //   let parsedData=await data.json();
    //   console.log(parsedData);
      
    //   this.setState({
    //     page: this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    // }
    this.setState({page:this.state.page+1});
    this.updateNews();
  }
    handlePrevClick = async()=>{
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}business&apiKey=2e42d364a7fa40fc9ba4ab4d261eb09f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data=await fetch(url);
      // let parsedData=await data.json();
      // console.log(parsedData);
      
      // this.setState({
      //   page: this.state.page-1,
      //   articles:parsedData.articles,
      //   loading:false
      // })
      this.setState({page:this.state.page-1});
      this.updateNews();
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">PigeonPost - Top Headlines from {this.props.category}</h1>
        {this.state.loading && <Spinner/>}
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,68):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
    </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
