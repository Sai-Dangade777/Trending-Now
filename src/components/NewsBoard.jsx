import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container-fluid">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading ? (
        <h4 className="text-center">Loading...</h4>
      ) : (
        <div className="row">
          {articles.map((news, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <NewsItem 
                title={news.title} 
                description={news.description} 
                src={news.urlToImage} 
                url={news.url} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
