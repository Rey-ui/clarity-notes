import { TailSpin, Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="30"
      width="30"
      color="#2dd4bf"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
