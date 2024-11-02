'use client'
import { Input } from '@headlessui/react';
import classNames from 'classnames';
import React, { ChangeEvent, useState } from 'react'
import { BiCheckCircle } from 'react-icons/bi';

export const PurchaseForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedItems, setSelectedItems] = useState({
    'frank-tshirt': false,
    'album': false,
    'album-tshirt': false,
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };


  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    try {
      await fetch('/__purchase-form.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      }).then(() => {
        setIsSubmitted(true)
      })
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (isSubmitted) {
    <SuccessPurchase />
  }

  return (
    <form name="purchase-form" method="POST" data-netlify="true" onSubmit={handleFormSubmit} >
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="purchase-form" value="purchase" />
      <div className="flex flex-col pb-12w-full max-w-lg mx-auto pt-6 px-6 gap-4">
        <input type="hidden" name="form-name" value="purchase-form" />
        <label className='font-semibold tracking-tighter text-white/80' htmlFor="name">Nombre: </label>

        <Input
          type="text" name="name"
          className={classNames(
            'block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          placeholder='Carlos Garcia'
        />

        <label className='font-semibold tracking-tighter text-white/80' htmlFor="email">Correo eléctronico: </label>
        <Input type="email" name="email"
          className={classNames(
            'block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          placeholder='carlosgarcia@gmail.com'
        />

        <label className="font-semibold tracking-tighter text-white/80 mb-2 block">Elige tu merch</label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="frank-tshirt"
              checked={selectedItems['frank-tshirt']}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Frank T-shirt
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="album"
              checked={selectedItems['album']}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Album
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="album-tshirt"
              checked={selectedItems['album-tshirt']}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Album T-shirt
          </label>
        </div>
        <button
          className="bg-primary-400 rounded-md w-fit px-10 font-black text-white py-2 self-end disabled:bg-primary-100"
          type="submit"
          disabled={!selectedItems.album && !selectedItems['album-tshirt'] && !selectedItems['frank-tshirt']}
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export const SuccessPurchase = () => {
  return (
    <div className='flex flex-col items-center'>
      <BiCheckCircle size={64} className='text-green-400' />
      <h3 className='tracking-tight font-light text-4xl text-white text-center pb-6'>
        Tomamos nota. Te contactaremos pronto para tramitar la compra.
      </h3>
    </div>
  )
}

// export const ProductCheckbox = ({ name, checked, onChange }) => {
//   return (
//     <Checkbox
//       name=''
//       onChange={ }
//     >
//       <BiCheck />
//     </Checkbox>
//   )
// }