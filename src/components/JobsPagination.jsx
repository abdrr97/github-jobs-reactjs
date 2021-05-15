import React, { useState } from 'react'

const JobsPagination = ({ page, setPage, hasNextPage }) => {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {page !== 1 && (
          <li className='page-item'>
            <button className='page-link' onClick={() => setPage(page - 1)}>
              Previous
            </button>
          </li>
        )}
        {page !== 1 && (
          <li className='page-item'>
            <button className='page-link' onClick={() => setPage(1)}>
              {page - 1}
            </button>
          </li>
        )}
        {page > 2 && (
          <li className='page-item'>
            <button className='page-link'>...</button>
          </li>
        )}
        <li className='page-item'>
          <button className='page-link' onClick={() => setPage(page)}>
            {page}
          </button>
        </li>
        {hasNextPage && (
          <li className='page-item'>
            <button className='page-link' onClick={() => setPage(page + 1)}>
              {page + 1}
            </button>
          </li>
        )}
        {hasNextPage && (
          <li className='page-item'>
            <button className='page-link' onClick={() => setPage(page + 1)}>
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default JobsPagination
