import { Link } from 'react-router-dom';
import React from 'react';
const Settings = () => {
  return (
    <div>
      <Link to="/Download">
      <button>Перейти к загрузке</button>
      </Link>
    </div>
  );
};

export default Settings; 