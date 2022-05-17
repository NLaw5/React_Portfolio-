import "./languages.scss";

export default function Languages() {
  const data = [
    {
      id: 1,
      name: "Ho Jung",
      title: "Web Production and Training Specialist TDSB",
      img:
        "assets/placeholderm.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Li Tian",
      title: "Sr. Technical Lead, Web Services TDSB",
      img:
        "assets/placeholder.png",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Michael Kojoukh",
      title: "Communications Coordinator, Web Services TDSB",
      img:
        "assets/placeholderm.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Newman carried out a variety of responsibilities with a high degree of efficiency and accuracy.",
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
              {d.desc}
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