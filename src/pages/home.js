import React from 'react';
import { useDispatch } from 'react-redux';
import { resetVariable } from '../actions/fileAction';
import { Link } from 'react-router-dom';
const Home = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetVariable());
  };
  return (
    <div className='homeText'>
      <h1 >In ultricies fermentum aliquet. Pellentesque
        dui magna, condimentum non ullamcorper at,
        cursus in sem. Nunc condimentum, purus ac
        sagittis ultricies, metus leo pharetra mi, non
        vehicula felis elit et nisi.In ultricies fermentum aliquet. Pellentesque
        dui magna, condimentum non ullamcorper at,
        cursus in sem. Nunc condimentum, purus ac
        sagittis ultricies, metus leo pharetra mi, non
        vehicula felis elit et nisi.</h1>
      <Link to="/Settings" ><button onClick={handleReset} > lol</button></Link>
    </div>
  );
};

export default Home; 