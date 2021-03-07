import React, { useState } from 'react'
import { useFetchJobs } from './hooks/useFetchJobs'
import Job from './components/Job.jsx'
import Loading from './components/Loading'
const App = () => {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <main className='container'>
      <h1>GITHUB JOBS</h1>

      {loading && <Loading />}

      {jobs.map((job) => {
        const { id } = job
        return <Job key={id} className='list-group-item' job={job} />
      })}
    </main>
  )
}

export default App
