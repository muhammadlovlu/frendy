import React from 'react';
import './User.css';
const User = (props) => {
    console.log("Users access :", props.user)
    const { name, email,picture} = props.user;

    return (



        <div className=" row-cols-1 row-cols-md-6 mx-4 g-1 mt-1 bg-danger ">
            <div className="floating  p-1 ">
                <div className="card h-100 shadowBox p-2 mb-2 bg-white rounded  ">
                    <img src={picture.large} className="card-img-top profile rounded shadow mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name.first} {name.last}</h5>
                        <p className="card-text">{email}</p>
                    </div>
                    <div className="footer d-flex">
                        
                        <button className="col-4 col-lg-4 col-md-4 col-sm-4 btn c-btn-color mx-auto"> Add</button>
                        <button className="col-4 col-lg-4 col-md-4 col-sm-4 btn c-btn-color mx-auto">Profile</button>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default User;