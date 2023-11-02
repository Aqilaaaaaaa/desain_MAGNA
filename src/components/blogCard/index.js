import './index.css'

export default function BlogCard({title, url, src}) {
  return (
    <>
      <div id="blogCard">
        <div className="card">
          <img src={src} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <h2 className="card__title">{title}</h2>  
            </div>
            <a href={url} target='_blank' rel="noreferrer"><button className="sub-btn text-white">Read more</button></a>
          </div>
        </div>
      </div>  
    </>
  )
};
