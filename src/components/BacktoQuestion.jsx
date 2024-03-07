import React from 'react'
import './BacktoQuestion.css'
import BackArrow from '../assets/backarrow.png'

const BacktoQuestion = () => {
  return (
    <div className='back-to-question-section '>
        <div className="back-text d-flex align-items-center">
            <img src={BackArrow} alt="" className='img-fluid me-3'/>
            <button className='backbtn'>Back to Questions</button>
        </div>
    </div>
  )
}

export default BacktoQuestion