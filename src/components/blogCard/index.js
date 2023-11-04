import './index.css'
import { Link } from 'react-router-dom';

export default function BlogCard({title, id, src}) {
  return (
    <>
      <div id="blogCard">
        <div className="card">
          <img src={src} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <h2 className="card__title">{title}</h2>  
            </div>
            <Link to={`/blogDetails/${id}`} ><button className="sub-btn text-white">Read more</button></Link>
          </div>
        </div>
      </div>  
    </>
  )
};
