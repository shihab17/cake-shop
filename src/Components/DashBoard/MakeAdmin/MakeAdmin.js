import React, { useState } from 'react';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [adminData, setAdminData] = useState({});
    const handleBlur = e => {
        const newAdmin = { ...adminData }
        newAdmin[e.target.name] = e.target.value;
        setAdminData(newAdmin);
    }
    const handleSubmit = e => {
        document.getElementById('email').value = '';
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                console.log(res)
            })
        e.preventDefault();
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0 }}>
                <DashBoardHeader brandName='Make Admin' ></DashBoardHeader>
                <form className='form-group' action="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" className='form-control' name="email" id="email" onBlur={handleBlur} placeholder='Enter Email Address' />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;