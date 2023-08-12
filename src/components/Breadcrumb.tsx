import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import '../styles/breadcrumb.css';

interface BreadcrumbProps {
  name: string;
}

const Breadcrumb = ({ name }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <Link to="/">
        <AiFillHome size={19} className="icon" />
      </Link>
      <span>/</span>
      <p>{name}</p>
    </div>
  );
};

export default Breadcrumb;
