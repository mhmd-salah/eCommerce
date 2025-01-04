import { TLoading } from "@customTypes/index";

interface LoadingProps {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
}

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "failed") return <h1>{error}</h1>;
  return <div>{children}</div>;
};

export default Loading;
