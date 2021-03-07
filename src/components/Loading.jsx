import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='m-5 spinner-border '
        style={{ width: '3rem', height: '3rem' }}
        role='status'
      ></div>
    </div>
  )
}

export default Loading
