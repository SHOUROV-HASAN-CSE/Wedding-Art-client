import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/reviews?email=${user?.email}`)
          .then(res => res.json())
          .then(data => setReviews(data))
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = reviews.filter(rev => rev._id !== id);
                setReviews(remaining);
            }
        })
    }
}



  return (
    <div>
      <h2 className='text-5xl font-semibold text-center text-orange-600 mb-8'>My Review</h2>

            <div className=" w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Image & Review
                                 </th>
                            <th>Service Name</th>
                            <th>Reviewer Name</th>
                            <th>Update & Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
          reviews.map(review => <MyReviewCard
          key={review._id}
          review={review}
          handleDelete={handleDelete}
          ></MyReviewCard>)
      }
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default MyReview;