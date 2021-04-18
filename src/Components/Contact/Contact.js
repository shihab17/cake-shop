import React from 'react';

const Contact = () => {
    return (
        <section className="d-flex justify-content-center p-5">
            
           <div className="row">
           <form className="form-group bg-light p-5" action="">
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" id="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email" placeholder="Enter Your Email Address" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" className="form-control" ></textarea>
                    </div>
                </div>
                <br/>
                <div className="row p-1">
                    <button className="btn btn-info text-white">Send</button>
                </div>
            </form>
           </div>
        </section>
    );
};

export default Contact;