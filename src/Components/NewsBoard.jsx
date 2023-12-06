/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";
import FavPage from "./FavPage";


const NewsBoard = ({category}) => {

  
    const[articles,setArticles] = useState([]);
    const [favoriteArticles, setFavoriteArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
    },[category])

    const handleToggleFavorite = (article) => {
    const updatedFavoriteArticles = [...favoriteArticles];
    if (favoriteArticles.includes(article)) {
      updatedFavoriteArticles.splice(updatedFavoriteArticles.indexOf(article), 1);
    } else {
      updatedFavoriteArticles.push(article);
    }
    setFavoriteArticles(updatedFavoriteArticles);
    localStorage.setItem("favoriteArticles", JSON.stringify(updatedFavoriteArticles));
  };

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index)=>{
        return <NewsItem 
        key={index} 
        title={news.title} 
        description={news.description} 
        src={news.urlToImage} 
        url={news.url}
        isFavorite={favoriteArticles.includes(news)}
        toggleFavorite={() => handleToggleFavorite(news)}/>
      })}
      <FavPage favoriteArticles={favoriteArticles} />
    </div>
  )
}

export default NewsBoard
