interface CardInterface {
  name: string;
  projectExample: string;
  avatar: string;
  description: string;
}

function Card({ name, projectExample, avatar, description }: CardInterface) {
  return (
    <section className="card">
      <img id="avatarID" src={avatar} alt="avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="links">
        <a href={projectExample}>projectExample</a>
      </div>
    </section>
  );
}

export default Card;
