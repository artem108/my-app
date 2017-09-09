import React from 'react';

const Answers = props => (
  <ul className='dialog-answers'>
    {
      props.items.map((item, index) =>
      <li  className='user-text'>
          {
          (() => {
            if (item === 'hi') {
              return 'HI'
            }else if (item === 'hello'){
              return 'HI'
            }else if (item === 'what your name'){
              return 'Artem'
            }else if (item === 'about you'){
              return'frontend...'

            }else if (item === 'bye'){
              return 'Bye-bye'
            }else if (item === 'by'){
              return 'dcfvghbj'
            }else if (item === 'by'){
              return 'dcfvghbj'
            }else if (item === 'by'){
              return 'dcfvghbj'
            }else if (item === 'by'){
              return 'dcfvghbj'
            }else if (item === 'by'){
              return 'dcfvghbj'
            }else if (item === 'by'){
              return 'dcfvghbj'
            }
            else if (item === 'by'){
              return 'dcfvghbj'
            } else {
              return 'neponimau'
            }
          })()
        }


      </li>
    )

    }

  </ul>
);

export default Answers;
