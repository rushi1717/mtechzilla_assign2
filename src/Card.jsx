import "./card.css";

const Card = ({ user }) => {
  return (
    <>
      {user.id > 0 ? (
        <div class="card">
          <img class="avatar" src={user.avatar_url} alt="Avatar" />
          <div class="username">
            Username: {user.login ? user.login : "N/A"}
          </div>
          <div class="name">Name: {user.name ? user.name : "N/A"}</div>
          <div class="repos">
            Public Repos: {user.public_repos ? user.public_repos : 0}
          </div>
          <div class="gists">
            Public Gists: {user.public_gists ? user.public_gists : 0}
          </div>
          <div class="created-at">
            Profile created at: {user.created_at ? user.created_at : "N/A"}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
