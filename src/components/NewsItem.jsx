import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let { title, description, imageUrl, url, source } = this.props;
    return (
      <div>
        <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-1 rounded  dark:bg-blue-900 dark:text-blue-300">{source}</span>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <img class="rounded-t-lg" src={!imageUrl?"https://images.indianexpress.com/2023/01/WhatsApp-Image-2023-01-28-at-8.57.34-PM.jpeg" : imageUrl} alt="" />
    
    <div class="p-5">
        
            
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}   </h5>
        
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href={url} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
</div>

    )
  }
}

export default NewsItem