import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) =>
      <li key={index}>
        {item}
        <div>
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

        </div>
      </li>
    )

    }

  </ul>
);

export default List;
