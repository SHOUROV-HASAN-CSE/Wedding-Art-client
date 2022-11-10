import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TabTitle } from '../../Utilitis/FunctiionTitle';

const AddService = () => {
  TabTitle('ADD Service')




  const handleAddService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const price = form.price.value;
    const ratings = form.rating.value;
    const message = form.message.value;


    const service = {
        title: name,
        img: photo,
        price: price,
        ratings: ratings,
        description: message,
    }
    
    fetch('https://creative-photography-server-two.vercel.app/services', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(service)
  })
      .then(res => res.json())
      .then(data => {
          if(data.acknowledged){
            toast('The Service Added Successfully.....',{position:"top-center"});
              form.reset();   
          }
      })
      .catch(err => console.error(err))

  }


  return (
    <div className='w-3/4 mx-auto mb-8 bg-slate-100 rounded-2xl shadow-2xl p-8'>
    <form onSubmit={handleAddService}>
                <h2 className="text-4xl font-semibold text-center my-8 text-orange-600">You can added Service</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="name" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered input-success" required/>
                    <input name="photoUrl" type="text" placeholder="Image Link" className="input input-ghost w-full  input-bordered input-primary" required/>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="price" type="number" placeholder="Price" className="input input-ghost w-full  input-bordered input-warning" required/>
                    <input name="rating" type="text" placeholder="Rating under 5.0" className="input input-ghost w-full  input-bordered input-error" />
                </div>
                <textarea name="message" className="textarea textarea-bordered textarea-secondary h-24 w-full" placeholder="description" required></textarea>

                <div className='text-center mt-3'>
                <input className='btn btn-outline btn-secondary' type="submit" value="Add Service" />
                </div>
            </form>
            <ToastContainer/>
    </div>

  );
};

export default AddService;