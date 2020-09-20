import React from 'react'
import './card.css'

let Card = (props) => {
    return (
        <div className="card">
            <h6 className="title">{props.data.name}</h6>
            <hr />
            <div className="rate">
                <div className="advRate">
                    <div className="text-muted">Advertised Rate</div>
                    <div>
                        <h4><b>{props.data.advertisedRate}%</b></h4>
                    </div>
                </div>
                <div className="compRate">
                    <div className="text-muted">Comparison Rate</div>
                    <div>
                        <h4><b>{props.data.comparisonRate}%</b></h4>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <ul>
                    {props.data.pros.map((val,i)=>{
                    return <li className="ilist" key={i}>{val}</li>
                    })}
                </ul>
            </div>
            <hr />
            <div className="CompMoreInfo">
                <div className="compare">Compare</div>
                <div className="moreInfo">
                    <h6><u>More Information</u></h6>
                </div>
            </div>
            <hr />
            <div className="footer">
                <div className="compLogo">
                    <img src={props.data.company.logo}></img>
                </div>
                <div className="btn-success d-flex align-items-center siteButton">Go to Site</div>
            </div>
        </div>
    )
}

export default Card