import React from 'react';

import { fakeHeavyFunc } from '../../utils/index';
function Input(props) {
  const { type, name, value, onChange } = props;

  if (value) {
    fakeHeavyFunc(name);
  }

  return (
    <div>
      <input onChange={onChange} type={type} name={name} value={value} />
    </div>
  );
}

export default Input;
