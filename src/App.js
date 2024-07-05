import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize =15;
  
  country='in';
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
       
      />
        <Routes>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="buiseness" pageSize={this.pageSize} country={this.country} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainement" pageSize={this.pageSize} country={this.country} category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={this.country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} />
        </Routes>
        </Router>
      </div>
    )
  }
}

