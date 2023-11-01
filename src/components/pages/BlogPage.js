import { Link } from 'react-router-dom';
import { Container} from "react-bootstrap";
import BlogCard from '../layouts/blogCard';

export default function BlogPage() {
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
      <section className="mt-5 mb-5">
        <Container>
          <BlogCard urlImg="./assets/images/webdev.jpg" title="Mengenal Web Development: Pengertian, Jenis, Proses Kerja, dan Cara Mempelajarinya" url="https://www.gamelab.id/news/1816-pengertian-web-development-jenis-proses-kerja-dan-cara-mempelajarinya"/>
          
        </Container>
      </section>
    </>
  );
}
