/* eslint-disable react/prop-types */
export function OrderCard({date, totalProducts, totalPrice}) {
  return (
      <div className='flex justify-between items-center border border-black'>
        <p className='flex flex-col'>
          <span>Date: {date.toLocaleString('es-CO')}</span>
          <span>{totalProducts} products</span>
          <span>${totalPrice}</span>
        </p>
      </div>
  );
}