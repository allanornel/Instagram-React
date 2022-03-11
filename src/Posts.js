export default function Posts() {
  return (
    <div class="posts">
      <Post
        imageUser="assets/img/meowed.svg"
        user="meowed"
        imagePost="assets/img/gato-telefone.svg"
        imageUserLike="assets/img/respondeai.svg"
        userLike="respondeai"
        likes="101.523"
      />
      <Post
        imageUser="assets/img/barked.svg"
        user="barked"
        imagePost="assets/img/dog.svg"
        imageUserLike="assets/img/adorable_animals.svg"
        userLike="adorable_animals"
        likes="99.159"
      />
    </div>
  );
}
// <Post imageUser="" user="" imagePost="" imageUserLike="" userLike="" likes=""/>
function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imageUser} alt="" />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagePost} alt="" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imageUserLike} alt="" />
          <div class="texto">
            Curtido por <strong>{props.userLike}</strong> e{" "}
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
