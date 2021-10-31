import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <canvas width="600" height="500">
          {/* 部分叫做fallback content，浏览器仅在不支持canvas元素的时候，才会显示该内容 */}
          not support
        </canvas>
      </div>
    )
  }
}

export default App
