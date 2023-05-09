import { MainHeader } from '../../components/MainHeader';
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Career() {
    const [companies, setCompanies] = useState(null)
    useEffect(() => {
        companydata()
    }, [])
    const companydata = async () => {
        const newdata = await axios.get("https://perspectiv-api.onrender.com");
        setCompanies(newdata.data.data);
    }
    if (companies === null) {
        return (<><div class='loading'>
            <span class='dot dot-1'></span>
            <span class='dot dot-2'></span>
            <span class='dot dot-3'></span>
            <span class='dot dot-4'></span>
      </div></>);
      }
   
    return (
        <>
    <MainHeader bgcolor='#d9453d'/>
    <section id="dashboard-cnt-area">
        
    <div className="container">
        <div className="row dashboard-cnt-row">               
            <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="row">
                    {/* <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="fx-profile-card">
                        <img className="img-fluid fx-profile-img" src={User_profile} alt="user_profile_picture"/>
                            <div className="fx-card-cnt">
                                <div className="fx-profile-text">
                                <Link to="/career-details"><h6>FX Paymaster</h6></Link>
                                    <p>Fraud Agent<br/>Richmond, London</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                   {companies.map((items,index)=>{
                    const {_id,roleId, jobTitleId,locationId}=items
                    let links=`/career-details/${_id}`
                    return (
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" key={index}>
                        <div className="fx-profile-card">
                            <div className="fx-card-cnt">
                                <div className="fx-profile-text">
                                {/* <Link to="/career-details"><h6>{jobTitleId}</h6></Link> */}
                                <Link to={links}><h6>{jobTitleId.map((jobTitle)=>{
                                        return (
                                            <>{jobTitle.option}</>                                            )
                                    })}</h6></Link>
                                    <p> {roleId.map((role)=>{
                                        return (
                                            <>{role.option}</>                                            )
                                    })}
                                    <br/>
                                        {locationId.map((location)=>{
                                            return (
                                                <>{location.city},{location.state}{location.country}</>                                            )
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                   })}                    
                </div>
            </div>
                  
        </div>
     </div>
      {/* {companies.map((items,index) =>{
              
                
       } )}  */}
</section>
<Footer/>
</>)
}