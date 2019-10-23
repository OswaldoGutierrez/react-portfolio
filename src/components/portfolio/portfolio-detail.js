import React from 'react'

const portfolioDetail = (props) => {
  return (
    <div className=''>
      <h2>Portfolio Detail for {props.match.params.slug}</h2>
    </div>
  )
}

export default portfolioDetail;