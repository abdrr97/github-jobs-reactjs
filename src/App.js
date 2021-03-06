import React from 'react'
import useFetchJobs from './hooks/useFetchJobs'

const App = () => {
  const { jobs, loading, error } = useFetchJobs()
  console.log(jobs)
  return (
    <div className='container'>
      <h3>JOBS</h3>
      {loading && <h2>loading ...</h2>}
      {error && <h2>error</h2>}
      {jobs.length}
      <ul className='list-group'>
        {jobs.map((job) => {
          const { id, title } = job
          return (
            <li key={id} className='list-group-item'>
              {title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
