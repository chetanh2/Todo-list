import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListOfItems = ({items}) => {
  return (
    <div>
        {items.map((item)=>{
            const {id,title}= item
            return(
                <article key={id}>
                    <p>{title}</p>
                    <div className="">
                        <button>
                            <FaEdit/>
                        </button>
                        <button>
                            <FaTrash/>
                        </button>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default ListOfItems