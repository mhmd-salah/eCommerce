import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { Footer, Header } from "@components/common";
import { Outlet } from "react-router-dom";

const { container, wrapper } = styles;
const MainLayout = () => {
  return (
    <div className={container}>
      <Header />
      <Container>
        <div className={wrapper}>
          <Outlet />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
