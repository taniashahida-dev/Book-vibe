import React, { use } from 'react';
import BooksCard from './BooksCard';


const bookPromise = fetch('/booksData.json').then(res=> res.json())

const AllBooks = () => {
   const books = use(bookPromise)
   console.log(books)

    return (
        <div>
            <div className='text-8xl font-semibold text-center my-20 '>Books</div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-20'>

                {
                    books.map(book=> <BooksCard book={book} key={book.bookId}/>)
                }
            </div>
        </div>
    );
};

export default AllBooks;