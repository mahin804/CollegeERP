import React from 'react'

const CommonButton = ({label,onClinckStatus}) => {
  return (
    <button onClick={()=>{onClinckStatus(label)}} style={{width:"100%"}}>
        {label}
    </button>
  )
}

export default CommonButton