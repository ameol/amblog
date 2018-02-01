import React from 'react';
import './index.less'

export default ({ children }) => (
  <div className="">
    <header>
      <a>Hi!Meng</a>
    </header>
    {children()}
  </div>
);