import React from 'react';
import menuList from './menuList.json';

const Companies = () => {
  return (
    <div className="companies">
      {menuList.map(co => <div>{menuList.name}</div>)}
    </div>
  );
}

export default Companies;