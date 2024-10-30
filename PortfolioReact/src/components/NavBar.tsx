interface NavBarInterface {
  machin: string;
}
function NavBar({ machin }: NavBarInterface) {
  return (
    <section>
      <h1>
        Hello, I'm <span> Charles</span>.
      </h1>
      <h1>I'm a full stack web developer.</h1>
      <a href="!#">
        <img src="./public/logoSunglasses.png" alt="logo Portfolio" id="logo" />
      </a>
      <div id="navBar">
        <div className="dropdown">
          <div className="dropbtn">About me</div>
          <div className="dropdown-content">
            <a href="!#">Hobbies</a>
            <a href="!#">Passions</a>
            <a href="!#">Future</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Projects</div>
          <div className="dropdown-content">
            <a href="!#">FirstType</a>
            <a href="!#">SecondType</a>
            <a href="!#">ThirdType</a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">Social</div>
          <div className="dropdown-content">
            <a href="!#">Facebook</a>
            <a href="!#">Instagram</a>
            <a href="!#">X</a>
            <a href="!#">Forbes</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
