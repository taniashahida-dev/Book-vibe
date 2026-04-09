import React from 'react';
import { CiStar } from 'react-icons/ci';

const BooksCard = ({book}) => {
    console.log(book)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm my-10">
  <figure className='py-8 bg-gray-100'>
    <img
    className='h-65 rounded-lg rotate-3'
      src={book.image}
      alt={book.bookName} />
  </figure>
  <div className="card-body">
     <div className='flex gap-3'>
       {
        book.tags.map((tag,i)=> ( <div className="badge text-green-500 bg-green-100 font-semibold px-4 py-3  " key={i}>{tag}</div>
        ))
       }

     </div>

    <h2 className="card-title text-2xl">
      {book.bookName}
    </h2>
    <p className='text-lg'>By: {book.author
}</p>
   
    <div className="card-actions justify-between border-t border-dashed py-6 border-gray-400 text-lg text-gray-500">
      <div className="">{book.category}</div>
      <div className="flex items-center gap-1">{book.rating}<CiStar /></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BooksCard;