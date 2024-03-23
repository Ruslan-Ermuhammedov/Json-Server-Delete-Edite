import axios from 'axios';
import React, { useRef } from 'react'
import { baseUrl } from '../../constants';

function CommentsModal({ showModal,setShowModal ,setComments,comments}) {
    const ismRef = useRef()
    const comentRef = useRef()
    const addComentHandler = async (e) => {
        e.preventDefault();
        const newComment = {
            name: ismRef.current.value,
            comment: comentRef.current.value
        }

        await axios.post(`${baseUrl}/comments`, newComment)
        .then((res)=>{
            setShowModal(false)
               setComments([...comments,res.data])
        })
        .catch(()=>{
            alert("hatolik bor")
        })
    }
    return (
        <div className={`CommetnModal ${showModal && "modalShow"} `}>
            <h2>Add comment</h2>
            <form onSubmit={addComentHandler} className='CommentFormModal'>
                <input ref={ismRef} type="text" required placeholder='Ism krirting' />
                <textarea
                    required
                    ref={comentRef}
                    minLength={1}
                    placeholder='Comment qoldiring'
                    maxLength={100}
                    cols="40" rows="10"
                ></textarea>
                <button className='AddComment'>Add Comment</button>
            </form>

        </div>
    )
}

export default CommentsModal
