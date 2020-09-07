import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './sass/style.scss'
import img from '../images/creative.jpg'
import img2 from '../images/creative2.jpg'

const Home = ()=>{
	return(
		<div className="container home">
			<div className="row">
				<div className="col-12 col-md-6 col-lg-6 order-2 order-lg-1" style={{marginTop:'30px'}}>
					<h1> Carve out a creative space </h1>
					<p>
						Show off the creativity. There is <strong>nothing</strong> that you can't do, 
						<br />
						devisie new ways to carry out tasks, solve problems, and meet challenges. 
						<br />
						Bring a fresh, and sometimes unorthodox, perspective to your work.
					</p>
					<button class="square_btn">More tips</button>
				</div>
				<div className="col-12 col-md-6 col-lg-6 order-1 order-lg-2" style={{marginTop:'10px'}}>
					<img src={img} alt="Creative thinking" />
				</div>
			</div>

			<div className="row">
				<div className="col-12 col-md-6 col-lg-6" style={{marginTop:'10px'}}>
					<img src={img2} alt="Creative thinking" />
				</div>
				<div className="col-12 col-md-6 col-lg-6" style={{marginTop:'30px'}}>
					<h1> What is creative thinking?  </h1>
					<p>
						Creative thinking means thinking outside the box. Often, creativity involves lateral thinking, which is the ability to perceive patterns that are not obvious.
						<br />
						Creative thinking might mean devising new ways to carry out tasks, solve problems, and meet challenges. 
						<br />
						 It means bringing a fresh, and sometimes unorthodox, perspective to your work. This way of thinking can help departments and organizations be more productive. 
						<br/>
						<br />
						<strong>Note: </strong><em><ins>Creativity thinking isn't limited to artistic types. Creative thinking is a skill that anyone can nurture and develop. </ins></em>
					</p>

					<button class="square_btn">Learn More</button>
				</div>
			</div>
		</div>
		)
}

export default Home