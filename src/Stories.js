export default function Stories() {
  const stories = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];
  return (
    <div class="stories">
      {stories.map((story) => {
        return <Story user={story} />;
      })}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  const src = `assets/img/${props.user}.svg`;
  return (
    <div class="story">
      <div class="imagem">
        <img src={src} alt="" />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
}
