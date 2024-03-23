import React, { useEffect, useState } from 'react'
import "../Comments/Comments.css"
import CommentsModal from './CommentsModal'
import axios from 'axios';
import { baseUrl } from '../../constants';
import CommentCardUi from './CommentCardUi';
function Comments() {
    const [showModal,setShowModal]=useState(false)
    const [comments,setComments]=useState([])

    useEffect(() => {
     function getData(){
        axios.get(`${baseUrl}/comments`)
        .then((res)=>setComments(res.data))
        .catch(()=>alert('qandaydur hatolik bor'))
     }
     getData()
    }, []);
  return (
    <div className='ContenerComment'>
      <div className='CommentTop'>
        <h1>All Comments: {comments.length}</h1>
  <button onClick={e=>setShowModal(true)} className='AddComment'>Add Comment</button>
      </div>
      <div className='CommentContenerUi'>

      {comments.map((item)=><CommentCardUi setComments={setComments} comments={comments} key={item.id} item={item} />)}
      </div>
      <CommentsModal setShowModal={setShowModal} setComments={setComments} comments={comments} showModal={showModal}/>
    </div>
  )
}

export default Comments
