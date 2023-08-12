import { Link } from 'react-router-dom';
import PageNotFound from '../assets/img/404.png';

import '../styles/404-page.css';

const NotFoundPage = () => {
  return (
    <div className="page_not_found">
      <img src={PageNotFound} alt="page not found" />
      <div className="redirect_link">
        <Link to="/">
          <p>Back to home</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
