import React from 'react'

const Subheader = () => {
  return (
    <div className='subheader full cc'>
        <div className="half subheader-fluid">
      { JSON.parse(localStorage.getItem("userInfo")) &&  <h2>{JSON.parse(localStorage.getItem("userInfo")).firstName.toUpperCase()}, welcome to kinkycoilygirls</h2> || <h2>KinkycoilyGirls sells at best rate</h2>}
      {/* KinkyCoilyGirls Sells at best rate** */}
        </div>
        <div className="image-containers">
        </div>
    </div>
  )
}

export default Subheader
