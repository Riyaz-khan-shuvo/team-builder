import React, { useState } from 'react';
import './Social.css'
const Social = (props) => {
    
    const {gender , name , picture , email , phone} = props.information;
    const fullName = name.title + ' ' + name.first + ' ' + name.last;
    const addMamber = props.addMember;
    const [mobile , setMobile] = useState('');
    const phoneNumber = ()=>setMobile(phone);
    return (
        <div className='social'>
            <div className="image">
                <img src={picture.large} alt=""/>
            </div>
            <div className="info">
                <h5> {fullName} </h5>
                <p>Email: {email} </p>
                <p>Learn about me</p>
                <p>Phone: {mobile} </p>
                <button onClick={phoneNumber}> Add Phone Number</button>
                <button onClick={()=>addMamber(fullName)}>Add me</button>
            </div>
        </div>
    );
};
export default Social;