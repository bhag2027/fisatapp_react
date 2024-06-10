import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

export const ViewFisat = () => {
    const[data,changeData]=useState([])
    
        const fetchData=()=>{
            axios.get("https://courseapplogix.onrender.com/getdata").then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                    alert(error.message)

                }
            ).finally()
        }
    
    useEffect(()=>{fetchData()},[])
    return (
        <div>

            <NavBar/>
            <h1 align="center"><u>VIEW STUDENT DETAILS</u></h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-bordered border-primary">
                                
                                    <thead>
                                        <tr>
                                        <th scope="col">SNO</th>
                                            <th scope="col">FIRSTNAME</th>
                                            <th scope="col">LASTNAME</th>
                                            <th scope="col">COLLEGE</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">COURSE</th>
                                            <th scope="col">MOBILE</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">ADDRESS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value,index)=>{
                                            return<tr>
                                            
                                            <td>{index+1}</td>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                        </tr>
                                        }
                                       )}

                                    </tbody>
                                </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
