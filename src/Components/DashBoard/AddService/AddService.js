import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = event => {
        console.log(event.target.files[0])
        setLoading(true)
        const imageData = new FormData();
        imageData.set('key', '9c8dcdb84d4e32f5d28caede55bbc3e2')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setLoading(false)
                setImage(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleSubmit = e => {
        console.log('clicked')
        const formData = new FormData();
        document.getElementById('title').value= '';
        document.getElementById('price').value= '';
        document.getElementById('description').value= '';
        document.getElementById('image').value= '';

        const serviceData = {
            data: info,
            imageUrl : image
        }
        fetch('https://nameless-atoll-05922.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
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
               <DashBoardHeader brandName='Add Service' ></DashBoardHeader>
                {
                    loading ? <div className="text-center ml-auto mr-auto text-info" >
                        <p>Image Uploading....</p>
                    </div> : ''
                }
                <form className='form-group' onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="title" className='form-label'>Service Title</label>
                            <input type="text" className="form-control" name="title" id="title" onBlur={handleBlur} placeholder='Enter Service Title' />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="price" className='form-label'>Price</label>
                            <input type="text" className="form-control" name="price" id="price" onBlur={handleBlur} placeholder='Enter Service Price' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="description" className='form-label'>Description</label>
                            <textarea className='form-control' name="description" id="description" cols="15" rows="5" onBlur={handleBlur} ></textarea>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="image" className='form-label'>Image</label>
                            <input type="file" className='form-control' name="image" id="image" onChange={handleFileChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;