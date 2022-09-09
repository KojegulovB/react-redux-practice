import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from './redux/actions/action';

function SingleComments({ item }) {
  const [commentsText, setCommentsText] = useState("")

  const { text, id } = item
  
  const dispatch = useDispatch()

  const handleUpdate = (e) => {
    e.preventDefault()

    dispatch(commentUpdate(commentsText, id))

  }

  const handleDelete = (e) => {
    dispatch(commentDelete(id))
  }

  useEffect(() => {
    if(text){
      setCommentsText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentsText(e.target.value)
  }

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
      <input type="text" value={commentsText} onChange={handleInput}/>
      <input type="submit" hidden/>
    </form>
  )
}

export default SingleComments