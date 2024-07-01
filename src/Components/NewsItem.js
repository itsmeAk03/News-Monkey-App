import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description,imageUrl,newsUrl,author,date,source }=this.props
    return (
      <div className='my-3'>
            <div className="card" >
            <span class="position-absolute top-0  translate-middle  bg-danger badge rounded-pill " style={{left:'90%',zIndex:'1'}}>
              <span class="source">{source}</span>
            </span>
                  <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ll11DJHBcNQO6AJnQlnAMZCeF_k1ASykIw&s":imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p class="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
                  </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
