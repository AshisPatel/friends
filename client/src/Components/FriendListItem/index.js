import React from 'react';
import './style.css';

const FriendListItem = ({ friend }) => {
    return (
            <ul className='friend-list-item'>
                <li>Ashis Patel</li>
                <li>281-391-0069</li>
                <li>ashis.n.patel@gmail.com</li>
            </ul>
    )
};

export default FriendListItem; 