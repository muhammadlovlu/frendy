import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const User = (props) => {
    const { name, email, picture, registered, location } = props.user;
    const addFriend = props.addFriend;
    return (
        <div className=" row-cols-1 row-cols-md-6 mx-4 g-1 mt-1 ">
            <div className="floating  p-1 height">
                <div className="card h-100 shadowBox p-2 mb-2 bg-white rounded  ">
                    <img src={picture.large} className="card-img-top profile rounded shadow mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name.first}</h5>
                        <p className="card-text fw-bold">Age :{registered.age}</p>
                        <p className="card-text email fw-bold">Country : {location.country}</p>
                        <p className="card-text email fw-bold">Salary : $ {location.street.number}</p>
                        <p className="card-text email fw-bold">Email : {email}</p>
                    </div>
                    <div className="footer d-flex">
                        <button className="col-4 col-lg-4 col-md-4 col-sm-4 btn c-btn-color mx-auto" onClick={() => addFriend(props.user)}> Add <FontAwesomeIcon icon={faUserPlus} /></button>
                        <button className="col-4 col-lg-4 col-md-4 col-sm-4 btn c-btn-color mx-auto">Profile</button>
                    </div>
                </div>
            </div>
        </div>
     
    );
};

export default User;