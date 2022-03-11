import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario user="catanacomics" name="Catana" />
      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

function Usuario(props) {
  const src = `assets/img/${props.user}.svg`;
  return (
    <div class="usuario">
      <img src={src} alt="" />
      <div class="texto">
        <strong>{props.user}</strong>
        {props.name}
      </div>
    </div>
  );
}
