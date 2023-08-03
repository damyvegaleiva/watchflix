import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { DETAILS_URL } from "../../config/config";

import DetailItem from "../../components/Detail/DetailItem/DetailItem";

import { DataFormatAdapter } from "../../adapters/DataFormatAdapter";
import HelmetContainer from "../HelmetContainer/HelmetContainer";
import SpinnerLoader from "../../components/Loader/SpinnerLoader/SpinnerLoader";

const DetailContainer = () => {
  const params = useParams();
  const selection = window.location.pathname.split("/")[1];
  const { data, isLoading } = useFetch(
    DETAILS_URL(selection, params.id),
    DataFormatAdapter
  );

  if (isLoading)
    return (
      <>
        <HelmetContainer title={`Welcome To Netflix | ${data.title}`} />
        <SpinnerLoader />;
      </>
    );

  return (
    <>
      <DetailItem {...data} isLoading={isLoading} />;
    </>
  );
};

export default DetailContainer;
