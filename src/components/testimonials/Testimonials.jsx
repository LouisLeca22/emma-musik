import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "David Lagache",
      title: "Rockeur et blueseman",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Cela faisait des années que j'avais envie de m'offrir une guitare qui colle à ma personalité. J'ai donc fait confiance à Emma qui a su créer l'instrument dont je rêvais",
    },
    {
      id: 2,
      name: "Maëlle Cora",
      title: "Violoncelliste et chanteuse",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "L' atelier d'Emma est un petit coin de paradis pour tous les musicieus. Emma est une vraie passionée qui met toujours du coeur pour réaliser de merveilleux instruments",
      featured: true,
    },
    {
      id: 3,
      name: "Jason Serrat",
      title: "Tocaor de flamenco",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Un service de grande qualité ! Quand ma gratte a besoin d'être rafistolée, c'est toujours chez Emma Musik que je la dépose car je sais qu'elle en prendra le plus grand soin.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Témoignages</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
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
