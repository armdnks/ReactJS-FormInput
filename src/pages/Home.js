import { Link } from "react-router-dom";
import links from "../utils/links";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <ul className="home-link-list">
        {links.map((link) => {
          const { id, title, url } = link;
          return (
            <li key={id} className="home-link-item">
              <Link to={url} className="home-link-button">
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;

  .home-link-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .home-link-button {
    background: #ccc;
    width: 100%;
    height: 240px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Home;
