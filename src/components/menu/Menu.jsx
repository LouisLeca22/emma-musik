import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Accueil</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Créations</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Services</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Témoignages</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
