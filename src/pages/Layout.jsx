import { Outlet, Link } from "react-router-dom";
{
  /*Navigation bar*/
}
export default function Layout() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Outlet />
      <footer>
        <h5>React homework: Use of Router</h5>
      </footer>
    </>
  );
}
