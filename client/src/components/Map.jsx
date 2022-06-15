import map from "./assets/map.png";

export default function Map() {
  return (
    <nav className="navbar bg-white mt-5 mb-5 p-10">
      <div className="container">
        {/* <img src={logo} alt="logo" width="200" height="100" /> */}
        <img src={map} alt="bg" />
      </div>
    </nav>
  );
}
