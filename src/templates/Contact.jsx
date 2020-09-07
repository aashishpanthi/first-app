import React, {useState} from 'react'
import './sass/style.scss'


const Contact = ()=>{
	const [val, setValue] =useState({
		name: '',
		email : '',
		subject: '',
		message : ''
	});

	const changed = (event) =>{
		const {name,value} = event.target;
		setValue((prevValue) =>{
			return {
				...prevValue,
				[name] : value
			}
		})
	}

	const formSubmit = () =>{
		alert("Hello")
	}
	return(
<section class="mb-4">

    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={formSubmit}>

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" onChange={changed} value={val.name} class="form-control" />
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" onChange={changed} value={val.email} class="form-control" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" onChange={changed} value={val.subject} class="form-control" />
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" onChange={changed} value={val.message} class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <button class="btn btn-primary" type='submit' name="submit">Send Message</button>
            </div>
            <div class="status"></div>
        </div>

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Butwal, Nepal</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+9779867526921</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>aashishpanthi55@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
		)
}

export default Contact