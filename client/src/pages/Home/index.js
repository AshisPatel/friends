import React from 'react';
import './style.css';
import FriendListItem from '../../Components/FriendListItem';

const Home = () => {
    return (
        <div className='friends-list-container'>
            <ul>
                <FriendListItem />
                <FriendListItem />
            </ul>
        </div>
    )
};

export default Home; 