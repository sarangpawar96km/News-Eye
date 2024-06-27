import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [article, setarticle] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setarticle(data.articles);
      });
  }, [category]);
  return (
    <>
      <h2 className="text-center" style={{marginBlock:"20px"}}>
        Latest <span className="badge bg-primary"> News</span>
      </h2>
      {article.map((news, index) =>(
        <NewsItem
          key={index}
          newskey={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
          date={news.publishedAt}
        />
      ))}
    </>
  );
};
export default NewsBoard;
