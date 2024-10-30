interface AboutInterface {
  truc: string;
}

function About({ truc }: AboutInterface) {
  return (
    <section className="about">
      <h2 className="about__heading section-heading">About</h2>
      <div className="aboutContent">
        <div className="Profil">
          <div>
            <img
              id="iconAvatar"
              src="./public/avatarIcon.png"
              alt="iconAvatar"
            />
          </div>
          <p id="profilP">
            Fully committed to the philosophy of life-long learning, I’m a full
            stack developer with a deep passion for JavaScript, React and all
            things web development. The unique combination of creativity, logic,
            technology and never running out of new things to discover, drives
            my excitement and passion for web development. When I’m not at my
            computer I like to spend my time reading, keeping fit and playing
            guitar.
          </p>
        </div>
        <div className="skills">
          <img src="./public/avatarPics/allSkills.png" alt="All my skills" />
        </div>
      </div>
    </section>
  );
}

export default About;
