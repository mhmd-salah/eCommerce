import type { TLoading } from "@customTypes";

interface LoadingProps {
  children: React.ReactNode;
  status: TLoading;
  error: null | string;
}

const Loading = ({ children, status: status, error }: LoadingProps) => {
  if (status === "pending") return <p>loading please wait</p>;
  if (status == "failed") return <p>{error}</p>;
  return <div>{children}</div>;
};

export default Loading;
