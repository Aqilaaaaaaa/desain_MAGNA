import { Link } from 'react-router-dom';
import '../assets/css/blog.css'
import BlogCard from '../components/blogCard';

export default function BlogPage() {

  const blogList = [
    {
      title: "6 Reasons Why You Should Hire a Software House",
      url:"https://www.amplifyre.com/articles/6-reasons-why-you-should-hire-software-house",
      src:"https://www.amplifyre.com/_next/image?url=https%3A%2F%2Feastcode-storage.s3.eu-central-1.amazonaws.com%2F68997df4dd03f189171c426d66fcab9a-1000x536-smultron-blog.png&w=1920&q=75"
    },
    {
      title: "How to Brand Your Business in 7 Simple Steps (with Examples!)",
      url:"https://www.wordstream.com/blog/ws/2021/09/23/how-brand-your-business",
      src:"https://staging.wordstreamcdn.com/wp-content/uploads/2021/12/how-to-brand-your-business.png"
    },
    {
      title: "How a Custom Front-end Improves User Experience in iGaming Applications",
      url:"https://crustlab.com/blog/custom-front-improves-user-experience-in-igaming-applications/",
      src:"https://crustlab.com/wp-content/uploads/2023/09/Custom-Frontend-Development-grafika-otwierajaca-v2-1024x736.png"
    },
    {
      title: "Desain Grafis untuk Memaksimalkan Konten di Media Sosial",
      url:"https://www.djkn.kemenkeu.go.id/kpknl-pamekasan/baca-artikel/14449/Desain-Grafis-untuk-Memaksimalkan-Konten-di-Media-Sosial.html",
      src:"https://www.djkn.kemenkeu.go.id/files/images/2021/11/artikel_november.png"
    },
    {
      title: "Mengenal Web Development: Pengertian, Jenis, Proses Kerja, dan Cara Mempelajarinya",
      url:"https://www.gamelab.id/news/1816-pengertian-web-development-jenis-proses-kerja-dan-cara-mempelajarinya",
      src:"webdev1.jpg"
    },
    {
      title: "Manfaat Order Management System (OMS) untuk Perusahaan Otomotif",
      url:"https://www.softwareseni.co.id/blog/order-management-system-oms-app-platform-software",
      src:"https://assets-global.website-files.com/5d8a2888296e91abbdcb65f0/6368c88cda30aae9cd4eccc5_On%20Time%20-%2001-p-800.png"
    }
  ]

  return (
    <>
      <div className="container-fluid" style={{ padding: "8em 0 0px 0" }}>
        <section className="page-title">
            <div className="thm-container">
                <h3>Blog</h3>
            </div>
        </section>
        <div className="breadcumb-wrapper">
          <div className="thm-container">
            <ul className="breadcumb">
              <li>
                  <Link to={'/'}>Homepage</Link>
              </li>
              <li>
                  <span className="sep">-</span>
              </li>
              <li>
                  <span>Blog</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section id="blog" className="mt-5 mb-5">
        <div className="container">
          {blogList?.map((v, i) => {
            return (
              <div key={i}><BlogCard title={v.title} src={v.src} url={v.url}/></div>
            )
          })}
        </div>
      </section>
    </>
  );
}
