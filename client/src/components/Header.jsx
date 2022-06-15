import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-white mt-5 mb-5 p-10">
      <div className="container">
        <img src={logo} alt="logo" width="200" height="100" />
        {/* <img src={bg} alt="bg" width="300" height="200" /> */}
        <a href="https://www.media.mit.edu/">
          <div className="d-flex">
            <div>City Science Lab Home Page</div>
          </div>
          <div>
            <div>MRT Demo</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
