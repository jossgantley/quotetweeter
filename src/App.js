import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      text: [],
      author: [],
      quotes: [],
      isLoading: true
    }
  }

  componentDidMount(){ 
   const randomNumber = Math.floor(Math.random()*this.state.quotes.length)

   fetch("https://type.fit/api/quotes")
    .then(response=>response.json())
    .then(data=>{
      
      const newData=data.filter(function (x){
      return x.author != null
      })
  
      this.setState({
        quotes: newData,
        text: data[randomNumber].text,
        author: data[randomNumber].author,
        isLoading: false
        })
    })
  }

  handleClick = () => {
  const newRandomNumber = Math.floor(Math.random()*this.state.quotes.length)
  this.setState({
    text: this.state.quotes[newRandomNumber].text,
    author: this.state.quotes[newRandomNumber].author
    })
  }
   
  
  render() {
    return this.state.isLoading? (
      <div className="main">
        <div className="heading">
          <h1 className="big-text">The Quote Tweeter</h1>
        </div>
        <div className="spinner-container">
          <i className="loading spinner fas fa-spinner fa-spin"></i>
        </div>
      </div>
      ): (
      <div className="main">
        <div className=" heading">
          <h1 className="big-text">The Quote Tweeter</h1>
        </div>
        <div className=" lightblue" id="quote-box">
          <h2 className="quote-text " id="text"><i 
            className="darkblue fas fa-quote-left"></i> {this.state.text}
            </h2>
          <h4 className="darkblue author" id="author">-{this.state.author}</h4>
          <button className="button ">
            <a className="twitter-share-button"id="tweet-quote"  
              href={`https://twitter.com/intent/tweet?text=${this.state.text}--${this.state.author}`} 
              target="_blank" rel="noopener noreferrer">
                <i className="bird fab fa-twitter"></i> Tweet  
              </a>
            </button>
            <button className="button"
              id="new-quote"onClick={this.handleClick}>New Quote
                </button>
          </div>
          <footer className="footer-text">by Joss Gantley</footer>
        </div>
    )
  }
}

export default App 
