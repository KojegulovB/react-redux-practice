import React from 'react'
import { connect } from "react-redux"
import { incLikes, decLikes } from './redux/actions/action';

function Likes(props) {
  return (
    <div className='button-controls'>
        <button onClick={props.onIncLikes}>❤ {props.likes}</button>
        <button onClick={props.onDecLikes}>Dislike</button>
    </div>
  )
}


function mapStateToProps(state){
  const { likesReducer } = state
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncLikes: () => dispatch(incLikes()),
    onDecLikes: () => dispatch(decLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)