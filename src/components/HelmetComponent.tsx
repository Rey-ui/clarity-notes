import { Helmet } from "react-helmet-async";

interface HelmetComponentProps {
  children: string;
}

const HelmetComponent = ({ children }: HelmetComponentProps) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default HelmetComponent;
