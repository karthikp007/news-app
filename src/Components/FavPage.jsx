
const FavPage = ({favoriteArticles}) => {
  return (
    <div>
      <h1>Favorite Articles</h1>
      {favoriteArticles.map((article,index) => {
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url}>Read More</a>
          <hr />
        </div>
        })}
    </div>
  )
}

export default FavPage
