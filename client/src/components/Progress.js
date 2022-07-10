import React from 'react'

const Progress = ({progressPercentage}) => {
  return (
    <div className="progress">
  <div
    className="progress-bar progress-bar-striped bg-info  progress-bar-animated text-end"
    role="progressbar"
    aria-valuenow={progressPercentage}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: progressPercentage +"%" }}
  >
       <span className='text-white fs-6 fw-bold '> {progressPercentage}%</span>
    </div>
</div>

  )
}

export default Progress