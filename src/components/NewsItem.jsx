import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import image from '../assets/BreakingNews.jpg';
import "./NewsItem.css"; // Import CSS file

const NewsItem = ({ title, description, src, url, isLoading }) => {
  return (
    <div 
      className="card news-card bg-dark text-light mb-4"
      style={{ width: "100%", maxWidth: "350px", height: "450px", display: "flex", flexDirection: "column" }}
    >
      
      {/* Fixed Image Height */}
      {isLoading ? (
        <Skeleton height={180} />
      ) : (
        <img 
          src={src ? src : image || "https://via.placeholder.com/350x180"} 
          className="card-img-top" 
          alt={title || "News Image"} 
          style={{ height: "180px", objectFit: "cover" }} 
        />
      )}

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ height: "50px", overflow: "hidden" }}>
          {isLoading ? <Skeleton width={200} /> : (title || "No Title Available")}
        </h5>

        <p className="card-text flex-grow-1" style={{ overflow: "hidden" }}>
          {isLoading ? <Skeleton count={3} /> : (description || "No description available.")}
        </p>

        {/* Button always at the bottom */}
        <div className="mt-auto">
          {isLoading ? <Skeleton height={40} width="100%" /> : (
            <a href={url || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-primary read-more-btn w-100">
              Read More...
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
