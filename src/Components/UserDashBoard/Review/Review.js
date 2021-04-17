import React, { useContext, useState } from 'react';
import { LoggedInContext } from '../../../App';
import UserDashBoardHeader from '../UserDashBoardHader/UserDashBoardHeader';
import UserSidebar from '../UserSidebar/UserSidebar';
import ReactStars from "react-rating-stars-component";
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const [rating, setRating] = useState(0);
    const [reviewData, setReviewData] = useState({})
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    const handleBlur = e => {
        const newReviewData = { ...reviewData }
        newReviewData[e.target.name] = e.target.value;
        setReviewData(newReviewData);
    }
    const handleSubmit = e => {
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
        const dataReview = {
            reviewData: reviewData,
            rating: rating
        }
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataReview)
        })
            .then(res => {
                console.log(res)
            })
        e.preventDefault();
    }
    return (
        <section className="container-fluid row">
            <UserSidebar></UserSidebar>
            <div className="col-md-10 p-4 ps-5 bg-light" style={{ position: "absolute", right: 0 }}>
                <UserDashBoardHeader brandName='Review'></UserDashBoardHeader>
                <div>
                    <form className="form-group" action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" id="name" onBlur={handleBlur} placeholder={loggedInUser.name} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="comment" className="form-label">Comment</label>
                                <textarea className="form-control" name="comment" id="comment" cols="30" rows="5" onBlur={handleBlur}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="">Rating</label>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;