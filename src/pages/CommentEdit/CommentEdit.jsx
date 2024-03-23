import React, { useEffect, useRef, useState } from 'react'
import '../CommentEdit/CommentEdit.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../constants'
function CommentEdit() {
    const ismRef = useRef()
    const comentRef = useRef()
    const navigate = useNavigate()
    const [comment, setComment] = useState({})
    const { id } = useParams()
    const editHandler = async (e) => {
        e.preventDefault();
        const editComment = {
            name: ismRef.current.value,
            comment: comentRef.current.value
        }

        await axios.put(`${baseUrl}/comments/${id}`, editComment)
            .then(() => {
                navigate("/comments")
            })
    }
    useEffect(() => {
        function getData() {

            axios.get(`${baseUrl}/comments/${id}`)
                .then((res) => {
                    setComment(res.data)
                })
                .catch(() => {
                    alert("qandaydur hatolik bor")
                })
        }
        getData()
    }, [])
    return (
        <div>
            <div className={`CommetnModal modalShow `}>
                <h2>Edit comment</h2>
                <form onSubmit={editHandler} className='CommentFormModal'>
                    <input ref={ismRef} defaultValue={comment.name} type="text" required placeholder='Ism krirting' />
                    <textarea
                        required
                        defaultValue={comment.comment}
                        ref={comentRef}
                        minLength={1}
                        placeholder='Comment qoldiring'
                        maxLength={100}
                        cols="40" rows="10"
                    ></textarea>
                    <button className='AddComment'>Edit Comment</button>
                </form>

            </div>
        </div>
    )
}

export default CommentEdit
