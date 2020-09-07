import React from 'react'
import Card from './Card'
import data from './data'

const Service = () =>{

	return ( 
			<>
				<h1 className="text-center">Start your own business from now</h1>
				<div className="row">
				{
					data.map((c,index)=> <Card title={c.title} key={index} desc={c.desc} btnName={c.btnName} imgSrc={c.imgSrc} /> )
				}
				</div>
				
			</>
		)
}

export default Service