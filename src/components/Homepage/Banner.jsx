import React from 'react';
import heroImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg  my-20 py-40 w-10/12 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
    <img
      src={heroImage}
      className=""
    />
    <div>
      <h1 className="text-6xl my-6 font-bold">Books to freshen up <br /> your bookshelf</h1>
     
      <button className="btn btn-success btn-lg text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;