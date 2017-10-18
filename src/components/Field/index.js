import React from 'react';
import './index.css';

const Field = (props) => (

  <div className="field">

    <label>{props.label}</label>
    {props.fieldType === 'textarea' && (
      <textarea onChange={props.onChange}>
        {props.value}
      </textarea>
    )}

    {props.fieldType !== 'textarea' && (
      <input
        type={props.fieldType}
        onChange={props.onChange}
        value={props.value}
      />
    )}

  </div>
);

export default Field;
