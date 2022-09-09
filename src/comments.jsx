import React, { useState, useEffect } from 'react'
import SingleComments from './singleComments'
import { useDispatch, useSelector } from 'react-redux';
import uniqid from "uniqid"
import { commentCreate, commentsLoad } from './redux/actions/action';

function Comments() {
  const [textComment, setTextComment] = useState("")

  const comments = useSelector(state => {
    const { commentsReducer } = state

    return commentsReducer.comments
  })

  const dipatch = useDispatch()

  const handleInput = (e) => {
    setTextComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = uniqid()

    dipatch(commentCreate(textComment, id))
    
  }

  useEffect(() => {
    dipatch(commentsLoad())
  }, [])

  return (
    <div className='card-comments'>
        <form onSubmit={handleSubmit} className="comments-item-create">
          <input type="text" value={textComment} onChange={handleInput}/>
          <input type="submit" hidden/>
        </form>
        {
          comments.map(item => <SingleComments key={item.id} item={item} />)
        }
    </div>
  )
}

export default Comments