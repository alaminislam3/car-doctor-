import CheckoutForm from '@/app/Components/forms/CheckoutFrom';
import React from 'react'

export default async function page({params}) {
  const {id} =  params;
  const res = await fetch(`http://localhost:3000/api/service/${id}`);
  const data = await res.json();
    return (
    <div>
      <CheckoutForm/>
    </div>
  )
}
