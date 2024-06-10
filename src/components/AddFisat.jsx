import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFisat = () => {
    const[data,changeData]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "address":"",
            "course":"",
            "mobile":"",
            "email":"",
            
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status =="success") {
                    alert("Successfully added")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <h1 align="center"><u>ADMISSION FORM</u></h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">firstname</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">lastname</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">college</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">dob</label>
                                <input type="date"  className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">address</label>
                                <textarea  className="form-control" name='address' value={data.address}onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">course</label>
                                
                               <select  className="form-control" name='course' value={data.course} onChange={inputHandler}>
                                <option value="Btech">Btech</option>
                                <option value="Mca">Mca</option>
                                <option value="Mba">Mba</option>
                                <option value="Mtech">Mtech</option>
                               </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" >
                                <label htmlFor="" className="form-label">mobile</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">email</label>
                                <input type="email"  className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFisat