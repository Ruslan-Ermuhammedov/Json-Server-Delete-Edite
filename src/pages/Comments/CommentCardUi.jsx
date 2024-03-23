import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { AiOutlineEdit } from 'react-icons/ai'
import axios from 'axios'
import { baseUrl } from '../../constants'
import { useNavigate, useParams } from 'react-router-dom'
function CommentCardUi({ item, setComments, comments }) {
    const {  id,name, comment } = item
    const navigate=useNavigate()
    const deleteHandlear = () => {
        axios.delete(`${baseUrl}/comments/${id}`)
            .then(() => {
                let filtred = comments.filter(element => element.id !== id)
                setComments(filtred)
            })
    }
    const editHandlear= ()=>{
    navigate(`/commentsEdit/${id}`)
    }
    return (
        <div className='CommedntCrardUi'>
            {/* <b>{index+1}</b> */}
            <h3>{name}</h3>
            <p>{comment}</p>
            <div className='DeleteEditeCard'>
                <button className='icons'onClick={editHandlear}><AiOutlineEdit /></button>
                <button className='icons' onClick={deleteHandlear}><RiDeleteBin3Line /></button>
            </div>
        </div>
    )
}

export default CommentCardUi
