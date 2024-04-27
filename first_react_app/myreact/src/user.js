import React from "react";
import './user.css'; 

const Users = () => {
    
    return (

        <div className="main-wrapper">
            <div className="ucontainer">
                <div className="one">
                    <figure className="back">
                        <h3>VLEK</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="/images/images.png" alt=""></img>
                </div>
                <div className="two">
                    <figure className="back">
                        <h3>DBAH</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="/images/Netflix-avatar.png" alt=""></img>
                </div>
                <div className="three">
                    <figure className="back">
                        <h3>EFER</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="/images/img2.png" alt=""></img>
                </div>
                <div className="four">
                    <figure className="back">
                        <h3>ZBAJ</h3>
                        <i className="fas fa-sign-in-alt"></i>
                    </figure>
                    <img src="/images/img4.png" alt=""></img>
                </div>



            </div>
        </div>

    );
};
export default Users;