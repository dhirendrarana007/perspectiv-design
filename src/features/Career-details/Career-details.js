import Group_92 from "../../assets/landscape-logo.png";
import { useParams } from 'react-router-dom';
import { MainHeader } from '../../components/MainHeader';
import { Footer } from "../../components/Footer";
import { useState, useEffect } from 'react';
import axios from 'axios';
var seoData;



export function CareerDetails () {


   // console.log('seodata 1:',seoData)
    const id = useParams();
    const url = `https://perspectiv-api.onrender.com/${id.id}`
    const [companies, setCompanies] = useState([])
    const companydata = async () => {
        const newdata = await axios.get(url);
        setCompanies(newdata.data.data)
        const items= newdata.data.data[0];
            const {startDate,jobTitleId,locationId} = items
            let endDate = Date.parse(startDate);
              endDate +=(24*60*60*1000);
        
        seoData = JSON.stringify({
           "@context" : "https://schema.org/",
           "@type" : "JobPosting",
           "title" : jobTitleId[0].option,
           "description" : items.jobDesc??"N/A",
           "identifier": {
             "@type": "PropertyValue",
             "name": "Google",
             "value": "1234567"
           },
           "datePosted" : Date(startDate),
           "validThrough" : Date(endDate),
           "employmentType" : items.employmentType,
           "hiringOrganization" : {
             "@type" : "Organization",
             "name" : "Perspectv",
             "sameAs" : "https://perspectv.app",
             "logo" : Group_92
           },
           "jobLocation": {
           "@type": "Place",
             "address": {
             "@type": "PostalAddress",
             "city": locationId[0].city,
             "status": locationId[0].status,
             "addressRegion": "CA",
             "postalCode": "94043",
             "addressCountry": locationId[0].country
             }
           },
           "baseSalary": {
             "@type": "MonetaryAmount",
             "currency": "EUR",
             "value": {
               "@type": "QuantitativeValue",
               "value": items.employmentMode.slice(9),
               "unitText": items.employmentMode.slice(0,7)
             }
           }
         })
     
    }
    useEffect(() => {
        companydata()
    }, [])
    

    if (companies.length === 0) {
        return (<><div class='loading'>
            <span class='dot dot-1'></span>
            <span class='dot dot-2'></span>
            <span class='dot dot-3'></span>
            <span class='dot dot-4'></span>
      </div></>);
      }

    return (
       
        <>
    <script type="application/ld+json">
        {seoData}
      </script>
    <MainHeader bgcolor='#d9453d'/>
    <section id="dashboard-cnt-area">
        
            <div className="container">
            <div className="soft-img">
                <img className="img-fluid fx-profile-img" src={Group_92} alt="user_profile_picture"/>
            </div>
                <div className="row dashboard-cnt-row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 mircroshoft-cnt">
                        <div className="row">
                            
                            <div className="fx-card-cnt">
                            </div>
                            {companies.map((items,index)=>{
                                const {softSkill,hardSkill,jobTitleId,locationId} = items
                            
                            return(
                                <>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mircroshoft-heading">
                                    <h6>Perspectv</h6>
                                    
                                     {jobTitleId.map((jobTitle)=>{
                                        return (
                                            <><h4>{jobTitle.option}</h4></>                                            )
                                    })}
                                    {locationId.map((location)=>{
                                            return (
                                                <><p>{location.city},{location.state},{location.country}</p></>                                            )
                                        })}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mircroshoft-logo"></div>
                            </div>
                            
                            <br/>
                            <br/>
                            <div className="col-lg-12 mt-4">
                                <h5>Company pitch</h5>
                                <p>{items.companyDesc}</p>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                            </div>
                            <div className="col-lg-12 mt-4">
                                <h5>Job description</h5>
                                <p>{items.jobDesc}</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 mt-4">
                                <h5>Company size</h5>
                                <p>{items.campanySize}</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 mt-4">
                                <h5>Salary amount</h5>
                                
                                <p>{items.employmentMode}</p>
                                
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6 mt-4">
                                <h5>Start date</h5>
                                <p>{items.startDate.slice(0, 10)}</p>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <h5>Soft skills</h5>
                                <p>
                                {softSkill.map((soft)=>{
                                return (<>
                                    {soft.skill.exp}
                                    <br/>
                                    {soft.skill.explevel}
                                    <br/>
                                    {soft.skill.option}
                                    </>)
                                })}
                                </p>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <h5>Hard Skills</h5>
                                <p>
                                {hardSkill.map((soft)=>{
                                return (<>
                                    {soft.skill.exp}
                                    <br/>
                                    {soft.skill.explevel}
                                    <br/>
                                    {soft.skill.option}
                                    </>)
                                })}
                                </p>
                            </div>
                            
                            </>)

                        })}
                        </div>
                    </div>   
                </div>
             </div>
             
           
           
           

        </section>
<Footer/>
</>)
      }