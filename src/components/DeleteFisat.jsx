import React, { useState } from 'react'
import NavBar from './NavBar'

const DeleteFisat = () => {
    const[data,changeData]=useState(
        {
            "firstname":"",
           
            
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <h1 align="center"><u>DELETE STUDENT DETAILS</u></h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">firstname</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger" onClick={readValue}>DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteFisat