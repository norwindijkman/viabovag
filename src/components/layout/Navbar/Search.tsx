import type { FormEvent } from 'react'
import Button from '@/components/ui-elements/Button/Button'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
  const router = useRouter();
  const [value, setValue] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (value) {
      router.push(`/?q=${encodeURIComponent(value)}`);
    } else {
      router.push(`/`);
    }
    setValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="/" className="tw-max-w-md">
        <div className="tw-relative tw-flex">
          <div className="tw-absolute tw-top-1.5 tw-start-0 tw-flex tw-items-center tw-ps-3 tw-pointer-events-none tw-z-10">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--foreground-light)"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
          </div>
          <input 
            name="q" 
            type="search" 
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="tw-block tw-w-full tw-px-4 tw-py-2 tw-ps-12 tw-text-sm tw-text-foreground tw-border tw-rounded
            tw-border-primary-dark tw-shadow-[0px_4px_1px_var(--primary-dark)] -tw-translate-y-0.5 tw-my-0.5
            tw-outline-offset-0 focus:tw-ring-blue-500 placeholder:tw-text-foreground-light/50 tw-mr-2" 
            placeholder="Search camera lens" 
          />
          <Button>Search</Button>
        </div>
      </form>
    </div>
  );
}
