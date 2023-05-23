/* eslint-disable react/prop-types */
export function PageTitle({ children, title, vertical }) {
  return (
    <div className={`flex justify-center items-center relative w-80 mb-4${vertical ? ' flex-col' : ''}`}>
      <h1 className='text-xl'>{title}</h1>
      {children}
    </div>
  );
}