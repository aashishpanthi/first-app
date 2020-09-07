import React from 'react'

const Card = (props) =>{
	return (
			<div className="col-12 col-md-6 col-lg-4">
				<div className="card" style={{marginTop:'30px'}}>
				  <img src={props.imgSrc} className="card-img-top" alt={props.title} height="250" />
				  <div className="card-body">
				    <h5 className="card-title">{props.title}</h5>
				    <p className="card-text">{props.desc}</p>
				    <a href={`https://www.google.com/search?channel=fs&client=ubuntu&q=${props.title}`} className="btn btn-primary">{props.btnName}</a>
				  </div>
				</div>
			</div>
		)
}

export default Card