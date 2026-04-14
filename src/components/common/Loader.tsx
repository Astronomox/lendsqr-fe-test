import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="loader">
      <img
        src="https://joy-okwudire-lendsqr-fe-test.vercel.app/images/loader.gif"
        alt="loading"
      />
    </div>
  );
};

export default Loader;