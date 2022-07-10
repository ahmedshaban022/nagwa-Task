import React from 'react'

const Progress = ({progressPercentage}) => {
  return (
    <div className="progress">
  <div
    className="progress-bar progress-bar-striped bg-info  progress-bar-animated"
    role="progressbar"
    aria-valuenow={progressPercentage}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{ width: progressPercentage +"%" }}
  />
</div>

  )
}

export default Progress