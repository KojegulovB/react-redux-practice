import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { inputText } from './redux/actions/action'

function Title(props) {

  const text = useSelector((state) => {
    const { inputReducer } = state
    return inputReducer.text
  })

  const dispatch = useDispatch()

  const handlechange = (e) => {
    console.log(e.target.value)
    dispatch(inputText(e.target.value))
  }

  return (
    <div>
        <div className="card-title">
            <input type="text" onChange={handlechange}/>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Title