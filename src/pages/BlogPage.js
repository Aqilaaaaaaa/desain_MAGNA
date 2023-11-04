import { Link } from 'react-router-dom';
import '../assets/css/blog.css'
import BlogCard from '../components/blogCard';
import { useRouter } from 'react-router-dom'

export default function BlogPage() {

  const blogList = [
    {
      id: 1,
      title: "6 Reasons Why You Should Hire a Software House",
      url:"https://www.amplifyre.com/articles/6-reasons-why-you-should-hire-software-house",
      src:"https://www.amplifyre.com/_next/image?url=https%3A%2F%2Feastcode-storage.s3.eu-central-1.amazonaws.com%2F68997df4dd03f189171c426d66fcab9a-1000x536-smultron-blog.png&w=1920&q=75",
      desc: "Untuk menyimpulkan, membuat pilihan yang tepat untuk metode pelaksanaan proyek tergantung pada beberapa faktor seperti anggaran, jadwal, kompleksitas, persyaratan teknologi, dan prospek pengembangan.Keuntungan berkolaborasi dengan perusahaan perangkat lunak, seperti halnya dengan sebagian besar bentuk outsourcing, menghasilkan kenyamanan dan fleksibilitas dalam kesepakatan tersebut. Hal ini mengarah pada perencanaan yang lancar bersama dengan definisi yang jelas tentang kerangka kerjanya dan biaya keseluruhannya. Dengan demikian, perusahaan perangkat lunak menjamin produk akhir berkualitas tertinggi."
    },
    {
      id: 2,
      title: "How to Brand Your Business in 7 Simple Steps (with Examples!)",
      url:"https://www.wordstream.com/blog/ws/2021/09/23/how-brand-your-business",
      src:"https://staging.wordstreamcdn.com/wp-content/uploads/2021/12/how-to-brand-your-business.png",
      desc: "Apakah Anda secara aktif mengelola identitas merek Anda atau tidak, itu ada. Dan peluang untuk menjadi pilihan ideal bagi klien potensial Anda bergantung pada seberapa kuat dan andal merek Anda. Membuat logo dan slogan yang menarik saja tidak cukup, tetapi hanya langkah awal. Untuk tampil beda, Anda perlu melampaui ini dan menyertakan elemen-elemen penting yang akan mendefinisikan bisnis Anda beberapa tahun ke depan."
    },
    {
      id: 3,
      title: "How a Custom Front-end Improves User Experience in iGaming Applications",
      url:"https://crustlab.com/blog/custom-front-improves-user-experience-in-igaming-applications/",
      src:"https://crustlab.com/wp-content/uploads/2023/09/Custom-Frontend-Development-grafika-otwierajaca-v2-1024x736.png",
      desc: "Mendalaminya pengembangan frontend kustom mengungkapkan sejumlah keuntungan yang dapat mengubah produk iGaming secara mendalam. Dari meningkatkan fleksibilitas bisnis dan mengamankan investasi jangka panjang hingga dengan mudah memasuki pasar baru dan mengintegrasikan teknologi terbaru, panduan komprehensif ini mengungkapkan alasan mengapa merek-merek terkemuka saat ini memasang taruhan mereka pada frontend kustom. Bergabunglah bersama kami saat kami menjelajahi manfaat beragam dan dampak kuat yang dapat dibawa ke usaha iGaming Anda."

    },
    {
      id: 4,
      title: "Desain Grafis untuk Memaksimalkan Konten di Media Sosial",
      url:"https://www.djkn.kemenkeu.go.id/kpknl-pamekasan/baca-artikel/14449/Desain-Grafis-untuk-Memaksimalkan-Konten-di-Media-Sosial.html",
      src:"https://www.djkn.kemenkeu.go.id/files/images/2021/11/artikel_november.png",
      desc: "Saat ini perkembangan teknologi sudah semakin maju dari tahun ke tahun. Hal ini menjadikan informasi juga semakin mudah diakses. Dengan adanya teknologi pada ponsel yang semakin berkembang, aplikasi dalam ponselpun ikut berkembang. Salah satunya adalah pada aplikasi sosial media.     Berdasarkan survei yang diambil dari databoks.katadata.co.id, dari populasi masyarakat Indonesia pada Januari 2019 sebanyak 268,2 juta jiwa, pengguna aktif media sosial telah mencapai 150 juta pengguna. Hal ini menandakan bahwa ada lebih dari 50% penduduk Indonesia adalah pengguna media sosial.     Melihat besarnya potensi pengguna media sosial di Indonesia saat ini, beberapa pihak ternyata mulai memanfaatkannya. Salah satunya untuk kepentingan beriklan dan memasarkan produk melalui berbagai macam platform media sosial. Selain untuk kepentingan beriklan, kini media sosial juga mulai banyak digunakan oleh perusahaan/instansi untuk mengenalkan atau meningkatkan citra diri perusahaan/instansi mereka ke masyarakat umum.     Salah satu bentuk konten pada media sosial adalah konten gambar. Konten ini lebih menarik dilihat daripada konten berupa tulisan atau video yang memerlukan waktu untuk mencerna informasi di dalamnya. Walaupun demikian, banyaknya konten berupa gambar di sosial media ternyata juga cepat membuat para pengguna media sosial menjadi jenuh. Akibatnya minat untuk mengetahui informasi melalui sebuah gambar di sosial media akan menurun apabila gambar atau ilustrasi yang ditampilkan tidak begitu menarik."
    },
    {
      id: 5,
      title: "Mengenal Web Development: Pengertian, Jenis, Proses Kerja, dan Cara Mempelajarinya",
      url:"https://www.gamelab.id/news/1816-pengertian-web-development-jenis-proses-kerja-dan-cara-mempelajarinya",
      src:"https://www.amplifyre.com/_next/image?url=https%3A%2F%2Feastcode-storage.s3.eu-central-1.amazonaws.com%2F60371e8e688206bd914ec0740d7e2819JXXX20220616BusinessIntelligenceBlogB1536x10241.jpg&w=1920&q=75",
      desc: "Jumlah pengguna internet meningkat dengan sangat pesat. Bisa dikatakan bahwa internet telah menjadi portal dan media utama untuk melakukan penelitian, edukasi, ataupun sekadar mencari hiburan. Dilansir dari We Are Social, pengguna internet global per April 2022 mencapai lebih dari 5 miliar orang atau sekitar 63 persen dari populasi di dunia.Saat ini website menjadi tempat bagi seseorang untuk menemukan berbagai informasi. Selain itu, website juga sangat berguna bagi sebuah bisnis sebagai sarana branding dan promosi.Untuk itulah web development menjadi industri yang menjanjikan dan sangat berkembang. Menurut Bureau of Labor Statistics, pekerjaan di bidang web development pada kurun waktu 2020-2030 akan tumbuh sebesar 13% lebih cepat dibandingkan kebanyakan karir di bidang teknologi lainnya."
    },
    {
      id: 6,
      title: "Manfaat Order Management System (OMS) untuk Perusahaan Otomotif",
      url:"https://www.softwareseni.co.id/blog/order-management-system-oms-app-platform-software",
      src:"https://assets-global.website-files.com/5d8a2888296e91abbdcb65f0/6368c88cda30aae9cd4eccc5_On%20Time%20-%2001-p-800.png",
      desc: "Pengimplementasian Sistem Manajemen Pesanan (OMS) yang efisien membawa manfaat besar bagi perusahaan otomotif, termasuk peningkatan efisiensi operasional, pengelolaan inventaris yang lebih baik, dan meningkatkan pengalaman pelanggan secara keseluruhan. Dengan mengintegrasikan teknologi terkini dan mempertimbangkan aspek etis, perusahaan dapat menghadapi masa depan yang lebih cerah dalam industri yang terus berkembang pesat ini."
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
              <div key={i}><BlogCard title={v.title} id={v.id} src={v.src} /></div>
            )
          })}
        </div>
      </section>
    </>
  );
}
