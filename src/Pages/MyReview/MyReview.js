import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { TabTitle } from '../../Utilitis/FunctiionTitle';
import MyReviewCard from './MyReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
   TabTitle('My Review');

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
      fetch(`https://creative-photography-server-two.vercel.app/reviews?email=${user?.email}`,  {
        headers: {
            authorization: `Bearer ${localStorage.getItem('Creative-photography-token')}`
        }
  })
          .then(res => res.json())
          .then(data => setReviews(data))
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm(' Would you want to Delete this Review?');
    if(proceed){
        fetch(`https://creative-photography-server-two.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0){
                toast('deleted successfully.....',{position:"top-center"});
                const remaining = reviews.filter(rev => rev._id !== id);
                setReviews(remaining);
            }
        })
    }
}



  return (
    <div>
      <h2 className='text-5xl font-semibold text-center text-orange-600 mb-8'>My Review</h2>

            <div className=" w-full mx-auto rounded-2xl mb-10 shadow-2xl">
                <table className="table table-zebra w-full">
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
            <ToastContainer/>
        </div>
  );
};

export default MyReview;