import "./styles.css";

import React, { Component } from 'react'
import NavBar from "./components/NavBar"
import News from "./components/News"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  
  pageSize = 6;

  constructor(props) {
    super(props);
    this.state = {
      mode:'light'
    }
  }
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({mode:'dark'});
      document.body.style.backgroundColor = "#042743";
     } else {
       this.setState({mode:'light'});
       document.body.style.backgroundColor = "azure";
     }
     console.log(this.state.mode)
    }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News mode={this.state.mode} setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News mode={this.state.mode} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News mode={this.state.mode} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News mode={this.state.mode} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News mode={this.state.mode} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News mode={this.state.mode} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News mode={this.state.mode} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News mode={this.state.mode} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

