import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "page not found";
  }
  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>P{errorStatusText}</p>
      <Link to={"/"} replace>
        Go To Home
      </Link>
    </Container>
  );
};

export default Error;
