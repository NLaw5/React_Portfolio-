import "./languages.scss";
import hoJungPDF from "../../Pdf_References/HoJung.pdf";
import liTianPDF from "../../Pdf_References/LiTian.pdf";
import michaelPDF from "../../Pdf_References/Michael.pdf";

export default function Languages() {
  const data = [
    {
      id: 1,
      name: "Michael Kojoukh",
      title: "Communications Coordinator, Web Services TDSB",
      img:
        "assets/placeholderm.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Newman carried out a variety of responsibilities with a high degree of efficiency and accuracy.",
      pdfLink:
        michaelPDF
    },
    {
      id: 2,
      name: "Li Tian",
      title: "Sr. Technical Lead, Web Services TDSB",
      img:
        "assets/placeholder.png",
      icon: "assets/linkedin.png",
      desc:
        "I believe that Newman Law would be an excellent candidate...he is hard working, persevering and intelligent, he is capable of understanding ideas quickly",
      featured: true,
      pdfLink: 
        liTianPDF
    },
    {
      id: 3,
      name: "Ho Jung",
      title: "Web Production and Training Specialist TDSB",
      img:
        "assets/placeholderm.jpg",
      icon: "assets/linkedin.png",
      desc:
        "...he was able to complete two development projects, remediate over 2000 pages to be compliant in accordance with WCAG 2.0.",
      pdfLink:
        hoJungPDF
    },
  ];
  return (
    <div className="testimonials" id="languages">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              <a href={d.pdfLink} target="_blank" aria-label="Navigate to Reference PDF">{d.desc}</a>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}