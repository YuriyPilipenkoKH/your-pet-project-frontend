import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RedirectComponent = () => {
  const history = useHistory();

  const handleKeyPress = (event) => {
    if (event.key === '\\' && event.shiftKey) {
      history.push('/test');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [history]);

  return <div>Press Shift + \ to redirect to /test</div>;
};

export default RedirectComponent;