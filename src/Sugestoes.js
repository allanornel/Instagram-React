export default function Sugestoes() {
  const sugestoes = [
    { user: "bad.vibes.memes", reason: "Segue você" },
    { user: "chibirdart", reason: "Segue você" },
    { user: "razoesparaacreditar", reason: "Novo no Instagram" },
    { user: "adorable_animals", reason: "Segue você" },
    { user: "smallcutecats", reason: "Segue você" },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((sugestao) => {
        return <Sugestao user={sugestao.user} reason={sugestao.reason} />;
      })}
    </div>
  );
}

function Sugestao({ user, reason }) {
  const src = `assets/img/${user}.svg`;
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={src} alt="" />
        <div class="texto">
          <div class="nome">{user}</div>
          <div class="razao">{reason}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
