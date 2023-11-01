import './index.css'

export default function BlogCard({title, url, urlImg}) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={urlImg} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <div className="card__header-text">
                <h2 className="card__title">{title}</h2>  
              </div>
            </div>
            <a href={url} target='__blank'><button className="sub-btn text-white">Read more</button></a>
          </div>
        </div>  
        <div className="card">
          <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <div className="card__header-text">
                <h2 className="card__title">INVENTORY SYSTEM MANAGEMEN IT</h2>  
              </div>
            </div>
            <button className="sub-btn text-white">Read more</button>
          </div>
        </div>  
        <div className="card">
          <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <div className="card__header-text">
                <h2 className="card__title">INVENTORY SYSTEM MANAGEMEN IT</h2>  
              </div>
            </div>
            <button className="sub-btn text-white">Read more</button>
          </div>
        </div>  
      </div>
    </>
  )
};
