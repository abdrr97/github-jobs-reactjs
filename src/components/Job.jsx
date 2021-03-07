import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Job = ({ job }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <div className='card-title'>
            {job.title} -
            <small className='mb-2 text-muted'>{job.company}</small>
            <h6 className='card-subtitle m-2 text-muted'>
              {new Date(job.created_at).toLocaleDateString()}
            </h6>
            <span className='badge badge-secondary mr-2'>{job.type}</span>
            <span className='badge badge-secondary'>{job.location}</span>
            <div className='' style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>

          <img
            src={job.company_logo}
            alt={job.company}
            className=' d-md-block'
            height='50'
          />
        </div>
        {open && (
          <button
            onClick={() => setOpen(!open)}
            className='btn btn-sm btn-primary'
          >
            {open ? 'Hide Details' : 'View Details'}
          </button>
        )}

        <div className={!open && 'd-none'} style={{ wordBreak: 'break-all' }}>
          <ReactMarkdown source={job.description} />
        </div>
        <button
          onClick={() => setOpen(!open)}
          className='btn btn-sm btn-primary'
        >
          {open ? 'Hide Details' : 'View Details'}
        </button>
      </div>
    </div>
  )
}

export default Job
