'use client'
import { Input } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react'

export const PurchaseForm = () => {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form name="purchase-form" method="post" data-netlify="true" onSubmit={handleFormSubmit} >
      <input type="hidden" name="purchase-form" value="purchase" />
      <div className="flex flex-col pb-12 gap-4 w-full max-w-lg mx-auto pt-6">
        <label className='font-semibold tracking-tighter text-white/80' htmlFor="name">Your Name: </label>
        <Input
          type="text" name="name"
          className={classNames(
            'mt-3 block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
        <label htmlFor="email">Your Email: </label>
        <Input type="email" name="email"
          className={classNames(
            'mt-3 block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )} />
        <label htmlFor="message">Message: </label>
        <textarea name="message"
          className={classNames(
            'mt-3 block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}></textarea>
        <button className="bg-primary-400 rounded-sm w-fit px-10 font-black text-white py-2 self-end" type="submit">Send</button>
      </div>
    </form>
  )
}
