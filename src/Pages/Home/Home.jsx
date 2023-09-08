/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData()
    console.log(tshirts)
    return (
        <div>
            <h2 className="text-center font-bold">Total T-shirt available { tshirts.length}</h2>
        </div>
    );
};

export default Home;