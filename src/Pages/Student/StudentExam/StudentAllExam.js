import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getExamByIdApi } from '../../../Api/Student/ExamApi'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        decodedToken: state.decodedToken
    }
}


export const StudentAllExam = (props) => {

    const [message, setMessage] = useState(false)
    const [exam, setExam] = useState([])

    useEffect(() => {

        getExamByIdApi(props.decodedToken._id).then(data => {

            if (data.error) { throw data.message }
            else {
                setMessage(data.message)
                setExam([...data.data])
            }
        }).catch(err => setMessage(err))

    }, [props])

    let examShow
    if(exam.length === 0){ examShow = <div></div> }
    else{
        examShow = exam.map(item => {

            return (
                <Link aria-disabled to={'/student-dashboard/exam'} state={{exam: item}} className='card card-body glass my-5'>{item.exam}</Link>
            )
        })
    }


    return (
        <div>
            <div className='p-2 text-center my-10 capitalize font-bold text-2xl'>{message}</div>

            {examShow}

        </div>
    )
}



export default connect(mapStateToProps)(StudentAllExam)