import React from 'react';

const ServiceReviewCard = ({review}) => {

  const {reviewerPhoto, reviewerName, message } = review;

  return (
    <tr>
    <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
                <div className=" w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                    <img src={reviewerPhoto} alt="img not found" />
                </div>
            </div>
        </div>
    </td>
    <td>
    <div className="text">{message}</div>
    </td>
    <td> 
     <div className="font-semibold">{reviewerName}</div>
    </td>
</tr>
  );
};

export default ServiceReviewCard;