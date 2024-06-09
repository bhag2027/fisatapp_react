import React, { useState } from 'react'
import NavBar from './NavBar'

const AddFisat = () => {
    const[data,changeData]=useState(
        {
            "Firstname":"",
            "Lastname":"",
            "College":"",
            "DOB":"",
            "Address":"",
            "Course":"",
            "Mobile":"",
            "Email":"",
            "Guardian":""
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
        <h1 align="center"><u>ADMISSION FORM</u></h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Firstname</label>
                                <input type="text" className="form-control" name='Firstname' value={data.Firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Lastname</label>
                                <input type="text" className="form-control" name='Lastname' value={data.Lastname}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='College' value={data.College} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date"  className="form-control" name='DOB' value={data.DOB} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea  className="form-control" name='Address' value={data.Address}onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                
                               <select  className="form-control" name='Course' value={data.Course} onChange={inputHandler}>
                                <option value="Btech">Btech</option>
                                <option value="Mca">Mca</option>
                                <option value="Mba">Mba</option>
                                <option value="Mtech">Mtech</option>
                               </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" >
                                <label htmlFor="" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name='Mobile' value={data.Mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email"  className="form-control" name='Email' value={data.Email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" >
                                <label htmlFor="" className="form-label">Guardian</label>
                                <input type="text" className="form-control" name='Guardian' value={data.Guardian} onChange={inputHandler}/>
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