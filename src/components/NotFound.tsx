import NotFoundImg from '../assets/img/not-found.png';

import '../styles/not_found.css';

const NotFound = () => {
  return (
    <div className="not_found">
      <img src={NotFoundImg} alt="Not Found" />
      <p>Country not found</p>
    </div>
  );
};

export default NotFound;
