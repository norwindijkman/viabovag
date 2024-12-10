import { useRouter } from 'next/navigation';

export default function CurrentSearch({ searchValue }: { searchValue: string }) {
  const router = useRouter();

  const handleClose = () => {
    router.push('/');
  }
  return (
    <div className="tw-flex tw-items-center">
      <span className="tw-text-4xl tw-font-bold">
        ‘
      </span>
      <span className="tw-text-5xl">
        {searchValue}
      </span>
      <span className="tw-text-4xl tw-font-bold">
        ’
      </span>
      <button 
        onClick={handleClose} 
        aria-label="Zoekopdracht verwijderen"
        className="tw-ml-4 tw-h-10 tw-w-10 hover:tw-bg-black/20 tw-flex tw-items-center tw-justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </button>
    </div>
  );
}
