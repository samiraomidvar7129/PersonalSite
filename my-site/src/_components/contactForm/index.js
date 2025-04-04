import React from 'react';
import './contact.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';

const schema = yup.object().shape({
  fullName: yup.string().required('Username is required'),
  phone: yup.string().required('Contact number is required ').matches(/^[0-9]+$/, 'Only number is allowed'),
  email: yup.string().email('The email is not valid').required('Email is required'),
  message: yup.string().required('The message is essential')
});

export default function  ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Use SweetAlert2 to display messages

   Swal.fire({
    title: 'پیام شما با موفقیت ارسال شد!',
    text: 'متشکریم که پیام خود را ارسال کردید.',
    icon: 'success',
    confirmButtonText: 'ممنون',
  });

// form reset

   reset();
};

  return (
   <div className=" container cotactForm-wrapper  w-100">
    <div className="row cotactForm-wrapper__inner">
    <div className="col-12">
    <form className="cotactForm-wrapper__inner--form w-100 d-flex flex-column justify-content-center align-items-start" onSubmit={handleSubmit(onSubmit)}>
      <div className="cotactForm-wrapper__inner--form-item w-75 mt-3 d-flex flex-column justify-content-center align-items-center">
        <input className="cotactForm-wrapper__inner--form-item__input rounded-pill py-2 w-100  "  {...register('fullName') }placeholder=" Complete Name" />
        <p className="cotactForm-wrapper__inner--form-item__error mt-2">{errors.fullName?.message}</p>
      </div>
      <div className="cotactForm-wrapper__inner--form-item w-75 mt-3 d-flex flex-column justify-content-center align-items-center">
        <input className="cotactForm-wrapper__inner--form-item__input rounded-pill py-2 w-100   " {...register('phone')} placeholder=" Phone No" />
        <p className="cotactForm-wrapper__inner--form-item__error mt-2">{errors.phone?.message}</p>
      </div>
      <div className="cotactForm-wrapper__inner--form-item w-75 mt-3 d-flex flex-column justify-content-center align-items-center">
        <input className="cotactForm-wrapper__inner--form-item__input rounded-pill py-2 w-100  " {...register('email')} placeholder="Email Address"/>
        <p className="cotactForm-wrapper__inner--form-item__error mt-2">{errors.email?.message}</p>
      </div>
      <div className="cotactForm-wrapper__inner--form-item w-75 mt-3 d-flex flex-column justify-content-center align-items-center">
        <textarea className="cotactForm-wrapper__inner--form-item__textarea rounded py-1 w-100 " rows="5" {...register('message')} placeholder=" Message"></textarea>
        <p className="cotactForm-wrapper__inner--form-item__error mt-2">{errors.message?.message}</p>
      </div>
      <div className="cotactForm-wrapper__inner--form-item_btn w-50">
      <button type="submit" className="d-block w-100 p-2 rounded-pill  text-white mt-3">Send Message</button>
      </div>
    </form>
    </div>
    </div>
   </div>
  );
};
