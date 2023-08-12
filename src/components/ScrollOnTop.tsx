import { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

import '../styles/scroll-on-top.css';

const ScrollOnTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="btn_scroll">
      <button
        style={{ display: isVisible ? 'visible' : 'notVisible' }}
        onClick={scrollToTop}
      >
        <BiArrowToTop size="24" className="icon_top" />
      </button>
    </div>
  );
};

export default ScrollOnTop;
