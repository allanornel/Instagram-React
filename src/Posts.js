export default function Posts() {
  const posts = [
    {
      user: "meowed",
      imagePost: "assets/img/gato-telefone.svg",
      userLike: "respondeai",
      likes: "101.523",
    },
    {
      user: "barked",
      imagePost: "assets/img/dog.svg",
      userLike: "adorable_animals",
      likes: "99.159",
    },
  ];
  return (
    <div class="posts">
      {posts.map((post) => {
        return (
          <Post
            user={post.user}
            imagePost={post.imagePost}
            userLike={post.userLike}
            likes={post.likes}
          />
        );
      })}
    </div>
  );
}
// <Post user="" imagePost="" userLike="" likes=""/>
function Post({ user, userLike, imagePost, likes }) {
  const srcUser = `assets/img/${user}.svg`;
  const srcUserLike = `assets/img/${userLike}.svg`;

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={srcUser} alt="" />
          {user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={imagePost} alt="" />
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
          <img src={srcUserLike} alt="" />
          <div class="texto">
            Curtido por <strong>{userLike}</strong> e{" "}
            <strong>outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
