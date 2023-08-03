import { Helmet } from "react-helmet-async";

const HelmetContainer = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetContainer;
