import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "../../components/common/Header/Header";

const MainLayout = () => {
  return (
    <Container className={styles.container}>
      <Header />
      <div className={styles.wrapper}>d</div>
    </Container>
  );
};

export default MainLayout;
