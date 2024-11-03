import { Checkbox, Select } from '@headlessui/react';
import classNames from 'classnames';
import React, { ChangeEvent, useState } from 'react'
import { CgCheck, CgChevronDown } from 'react-icons/cg';

export type ArticleCheckboxProps = { formName: string, name: string, options: string[], price: string, singleOption?: boolean };
export const ArticleCheckbox = ({ formName, name, options, price, singleOption }: ArticleCheckboxProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [checked, setChecked] = useState(false);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <div className="w-full p-3 bg-white/20 ring-1 hover:ring-white/30 ring-transparent group rounded-md flex flex-col gap-4">
      <input name={formName} value={checked ? selectedOption : "not required"} className='hidden' readOnly />
      <div className="flex gap-4">
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="block size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white/60 group group-hover:ring-white/30"
        >
          <CgCheck className="hidden size-4 text-black font-black group-data-[checked]:block" />
        </Checkbox>
        <label>{name}</label>
      </div>
      <div className="w-full flex justify-between items-center">
        <div>{price}</div>
        <div className={classNames("relative w-2/5 self-end", { "hidden": singleOption })}>
          <Select value={selectedOption} onChange={handleOptionChange} className={selectClassNames} disabled={!checked}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <CgChevronDown className="absolute top-2.5 right-2.5 size-4 fill-white/60 pointer-events-none " />
        </div>
      </div>
    </div>
  );
};


const selectClassNames = classNames(
  'block w-full appearance-none rounded-lg bg-white/20 py-1.5 px-3 text-sm text-white',
  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
  'disabled:bg-white/10 enabled:cursor-pointer'
);