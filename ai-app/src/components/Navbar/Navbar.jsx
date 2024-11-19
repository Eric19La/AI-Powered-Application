export default function Navbar() {
  return (
    <>
      <div className="container flex justify-end align-center py-30 px-10p">
        <div className="logo mr-auto">
          Logo
        </div>
        <div className="links-container">
          <div className="links">
            <div className="inline-block px-5">
              Home
            </div>
            <div className="inline-block px-5">
              About
            </div>
            <div className="inline-block px-5">
              Contact
            </div>
          </div>
        </div>
        <div className="contact ml-5">
          Sign Up
        </div>
      </div>
    </>
  );
}