import { Link } from "react-router-dom";
export default function CatagoryPage() {
  return (
    <main>
      <section className="categories-container main-wrapper">
        <ul className="categories-container__list">
          {/* <!-- Single category --> */}

          <li>
            {/* <!-- Use the Link component from React Router to create 
              the anchor tags
        --> */}
            <Link
              to="/categories/1"
              style={{ ["--random-colour"]: "var(--blue)" }}
            >
              electronics
            </Link>
          </li>
          {/* <!--  --> */}
          <li>
            <Link
              to="/categories/2"
              style={{ ["--random-colour"]: "var(--green)" }}
            >
              jewelery
            </Link>
          </li>
          {/* <!--  --> */}
          <li>
            <Link
              to="/categories/3"
              style={{ ["--random-colour"]: "var(--red)" }}
            >
              men's clothing
            </Link>
          </li>
          {/* <!--  --> */}
          <li>
            <Link
              to="/categories/4"
              style={{ ["--random-colour"]: "var(--yellow)" }}
            >
              women's clothing
            </Link>
          </li>
          {/* <!--  --> */}
        </ul>
      </section>
    </main>
  );
}
