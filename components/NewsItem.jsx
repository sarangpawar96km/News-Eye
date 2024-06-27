import img from "../src/assets/images/news-img.webp"

export const NewsItem = ({newskey,title,description,src,url,date}) => {
  const handleImageError = (e) => {
    console.error(`Image failed to load: ${e.target.src}`);
    e.target.onerror = null; // Prevents infinite loop in case the fallback image also fails
    e.target.src = img;
  };
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " key={newskey} style={{maxWidth:"345px",width:"100%",maxHeight:"500px",height:"100%"}}>
      <img src={src ? src : img} className="card-img-top" alt="image" style={{height:"219px",objectFit:"contain"}} onError={handleImageError} />
      <div className="card-body"style={{ height: "300px", overflow: "hidden" }}>
        <h5 className="card-title"style={{ height: "60px", overflow: "hidden", textOverflow: "ellipsis" }}>{title.slice(0,50)+"..."}</h5>
        <p className="card-text"style={{ height: "80px", overflow: "hidden", textOverflow: "ellipsis" }}>{description ? (description.slice(0,95)+ "...") : "No Description"}</p>
        <p className="card-text">{date}</p>
        <a href={url} className="btn btn-primary">Read More</a>
        
      </div>
    </div>
  );
};
export default NewsItem;
