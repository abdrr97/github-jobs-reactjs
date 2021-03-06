import React, { useState } from 'react'
import useFetchJobs from './hooks/useFetchJobs'
import Job from './components/Job.jsx'
const App = () => {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(0)
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <main className='container'>
      <h3>JOBS</h3>
      {loading && <h2>loading ...</h2>}
      {error && <h2>error</h2>}
      {jobs.length}
      <div className='list-group'>
        {jobs.map((job) => {
          const { id, title } = job
          return <Job key={id} className='list-group-item' title={title} />
        })}
      </div>
    </main>
  )
}

export default App
