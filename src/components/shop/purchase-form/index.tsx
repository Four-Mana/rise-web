'use client'
import { useState, ChangeEvent } from 'react';
import { Checkbox, Input, Select } from '@headlessui/react';
import { BiCheckCircle } from 'react-icons/bi';
import { CgCheck, CgChevronDown } from 'react-icons/cg';
import classNames from 'classnames';
import { articlesList } from '../articlesList';
import { Highlight } from '@/components/highlight';

export const PurchaseForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Record<string, string | boolean>>({});

  const handleCheckboxChange = (name: string, value: string | boolean) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [name]: value,
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

      <div className="flex flex-col pb-12 w-full max-w-lg mx-auto pt-6 px-6 gap-4">
        <label className="font-semibold tracking-tighter text-white/80" htmlFor="name">
          Nombre:
        </label>
        <Input type="text" name="name" placeholder="Carlos Garcia" className={inputClassNames} />

        <label className="font-semibold tracking-tighter text-white/80" htmlFor="email">
          Correo eléctronico:
        </label>
        <Input type="email" name="email" placeholder="carlosgarcia@gmail.com" className={inputClassNames} />

        <label className="font-semibold tracking-tighter text-white/80 mb-2 block">Elige tu merch</label>
        <div className="grid md:grid-cols-2 gap-2">
          {articlesList.map((article) => (
            <CheckboxItem
              key={article.name}
              name={article.name}
              {...(article.variants && { options: article.variants.split(" ") })}
              singleOption={!article.variants}
              price={article.price}
              onChange={(value) => handleCheckboxChange(article.name, value)}
            />
          ))}
        </div>

        <button
          className="bg-primary-400 rounded-md w-fit px-10 font-black text-white py-2 self-end"
          type="submit"
          disabled={!Object.values(selectedItems).some((item) => item)}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

const inputClassNames = classNames(
  'block w-full rounded-lg bg-zinc-600 py-1.5 px-3 text-sm text-white',
  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
);

export const CheckboxItem = ({ name, options = ["on"], price, onChange, singleOption }: { name: string, options?: string[], price: string, singleOption?: boolean, onChange: (value: string | boolean) => void }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  const selectClassNames = classNames(
    'block w-full appearance-none rounded-lg bg-white/5 py-1.5 px-3 text-sm text-white',
    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
  );
  return (
    <div className="w-full p-3 bg-white/20 ring-1 hover:ring-white/30 ring-transparent group rounded-md flex flex-col gap-4">
      <div className="flex gap-4">
        <Checkbox onClick={() => onChange(selectedOption || 'on')} name={name} className="block size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white/60 group group-hover:ring-white/30">
          <CgCheck className="hidden size-4 text-black font-black group-data-[checked]:block" />
        </Checkbox>
        <label>{name}</label>
      </div>
      <div className="w-full flex justify-between items-center">
        <div>{price}</div>
        <div className={classNames("relative w-2/5 self-end", { "hidden": singleOption })}>
          <Select value={selectedOption} onChange={handleOptionChange} className={selectClassNames} disabled={!selectedOption}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <CgChevronDown className="absolute top-2.5 right-2.5 size-4 fill-white/60 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};


export const SuccessPurchase = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <BiCheckCircle size={64} className='text-green-400' />
      <h3 className='tracking-tight font-light text-4xl text-white text-center pb-6 w-2/3'>
        Tomamos nota.<br /> Te contactaremos <Highlight>pronto</Highlight> para tramitar la compra.
      </h3>
    </div>
  )
}