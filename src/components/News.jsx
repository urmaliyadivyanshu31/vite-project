import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
         
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6ac484906ab4499bbd5ac61a2794be0d&page=1&pageSize=12"
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ac484906ab4499bbd5ac61a2794be0d&page=${this.state.page - 1}&pageSize=12`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
        })
    }

    handleNextClick = async () => {
        if(this.state.page + 1  > Math.ceil(this.state.totalResults/12)){

        } else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6ac484906ab4499bbd5ac61a2794be0d&page=${this.state.page + 1}&pageSize=12`
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
            })
        }
    }



  render() {
    return (
        <div className='container mx-3'>
          <h1 className='text-center text-3xl my-3 font-bold'>News Wallah</h1>
          <div className="grid grid-cols-3 gap-6">
            {this.state.articles.map((element) => {
                return  <NewsItem key={element.url} className="p-6 m-3" title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 85):""} imageUrl={element.urlToImage} newsUrl={element.url} />
           
            })}
          </div>
          <div className="btn my-7 mx-7 d-flex items-center ">
          <button disabled={this.state.page<=1} class=" cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={this.handlePreviousClick}>
      &larr; Previous
  </span>
</button>
<button class=" cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={this.handleNextClick}>
      Next &rarr;
  </span>
</button>
          </div>
      </div>
    )
  }
}

export default News
