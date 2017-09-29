import React from 'react';

const Questions = props => (
  <ul className='dialog-question'>
    {
      props.items.map((item, index) =>
      <li className='user-text'>
        {item}
      </li>
    )

    }

  </ul>
);

export default Questions;
