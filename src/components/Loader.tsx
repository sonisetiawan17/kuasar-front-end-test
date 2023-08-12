import { PuffLoader } from 'react-spinners';

import '../styles/loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <PuffLoader size={100} />
    </div>
  );
};

export default Loader;
