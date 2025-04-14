import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListOfItems = ({ list, removeItem }) => {
  console.log(list);

  return (
    <div>
      {list?.map((item) => {
        const { id, title } = item;
        return (
          <article key={id}>
            <p>{title}</p>
            <div className="">
              <button>
                <FaEdit />
              </button>
              <button>
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListOfItems