/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/solid';

export function SidePanel({ children, onClose, panelTitle }) {
  return (
    <aside className='flex flex-col fixed right-6 w-[360px] h-[calc(100vh-86px)] top-[80px] bg-white border border-black rounded-lg'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>{panelTitle}</h2>
        <button onClick={onClose}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </button>
      </div>
      {children}
    </aside>
    );
}