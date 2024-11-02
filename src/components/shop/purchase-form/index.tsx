'use client'
import { useState } from 'react';
import { Input } from '@headlessui/react';
import classNames from 'classnames';
import { articlesList } from '../articlesList';
import { SuccessPurchase } from './success-purchase';
import { ArticleCheckbox } from './checkbox-article';

export const PurchaseForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        setIsSubmitted(true);
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (isSubmitted) {
    return <SuccessPurchase />;
  }

  return (
    <form name="purchase-form" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="purchase-form" />

      <div className="grid md:grid-cols-2 pb-12 w-full max-w-4xl mx-auto pt-6 px-6 gap-4">
        <div className='grid gap-4'>
          <label className="font-semibold tracking-tighter text-white/80" htmlFor="name">
            Nombre:
          </label>
          <Input type="text" name="name" required placeholder="Carlos Garcia" className={inputClassNames} />
        </div>

        <div className='grid gap-4'>
          <label className="font-semibold tracking-tighter text-white/80" htmlFor="email">
            Correo eléctronico:
          </label>
          <Input type="email" name="email" required placeholder="carlosgarcia@gmail.com" className={inputClassNames} />
        </div>

        <label className="font-semibold tracking-tighter text-white/80 mb-2 block">Elige tu merch</label>
        <div className="grid md:grid-cols-2 gap-2 col-span-2">
          {articlesList.map((article) => (
            <ArticleCheckbox
              key={article.name}
              name={article.name}
              options={article.variants?.split(" ") || ["on"]}
              singleOption={!article.variants}
              price={article.price}
            />
          ))}
        </div>

        <button
          className="bg-primary-400 rounded-md w-fit px-10 font-black text-white py-2 col-start-2 ml-auto "
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

const inputClassNames = classNames(
  'block w-full rounded-lg bg-zinc-600 py-2 px-3 text-sm text-white',
  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
);
