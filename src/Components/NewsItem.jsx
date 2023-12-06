/* eslint-disable react/prop-types */
import image from '../assets/default-news-image.jpg'

const NewsItem = ({title,description,src,url, isFavorite, toggleFavorite}) => {
  return (
    
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth:"375px"}}>
              <img src={src?src:image} className="card-img-top" alt="..." style={{height:"200px",width:"360px"}}/>
              <div className="card-body">
              <h5 className="card-title">{title.slice(0,50)}</h5>
              <p className="card-text">{description?description.slice(0,90):"custom description of the article"}</p>
              <a href={url} className="btn btn-primary">Read More</a>
              <button className="btn btn-outline-danger" onClick={toggleFavorite}>
                {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
            </div>
          </div>
      
  )
}

export default NewsItem
