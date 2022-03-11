export default function Stories() {
  return (
    <div class="stories">
      <Story image="assets/img/9gag.svg" user="9gag" />
      <Story image="assets/img/meowed.svg" user="meowed" />
      <Story image="assets/img/barked.svg" user="barked" />
      <Story
        image="assets/img/nathanwpylestrangeplanet.svg"
        user="nathanwpylestrangeplanet"
      />
      <Story image="assets/img/wawawicomics.svg" user="wawawicomics" />
      <Story image="assets/img/respondeai.svg" user="respondeai" />
      <Story image="assets/img/filomoderna.svg" user="filomoderna" />
      <Story image="assets/img/memeriagourmet.svg" user="memeriagourmet" />

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.image} alt="" />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
  );
}
