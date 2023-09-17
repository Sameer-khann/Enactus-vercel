import React, { useState } from "react"
// import axios from "axios"

function ContactForm() {
	const [isSending, updateIsSending] = useState(false)
	const [formData, setFormData] = useState({});
	const [message, setMessage] = useState("");

	const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

	async function handleSubmit(event) {
		updateIsSending(true)

		// stop form from submitting
		event.preventDefault()

		
		const {name, email, message} = formData;

		try {
            const response = await fetch(
                "https://v1.nocodeapi.com/janit/google_sheets/QXUxngSYElpaAEUR?tabId=Sheet1",
                {
                    method: "post",
                    body: JSON.stringify([[name, email, message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
			const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success");
			const form = document.querySelector("form#contact-form")
			form.reset()
			updateIsSending(null)

        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

		// get all the form values
		// const name = document.querySelector("form input#name").value
		// const email = document.querySelector("form input#email").value
		// const message = document.querySelector("form textarea#message").value

		// call netlify function to send mail
		// try {
		// 	await axios.post(process.env.PUBLIC_URL + "/.netlify/functions/send-email/", {
		// 		name,
		// 		email,
		// 		message,
		// 	})
		// } catch (error) {
		// 	console.error(error)
		// 	return
		// }

		// reset form values
		// const form = document.querySelector("form#contact-form")
		// form.reset()

		// end send
		// updateIsSending(null)
		// setTimeout(() => updateIsSending(false), 3000)
	

	return (
		<form onSubmit={handleSubmit} id='contact-form'>
			<p className='h3 font-weight-bolder text-center text-lg-left'>Leave Us A Message!</p>
			<div class='mb-3'>
				<label for='name' class='form-label'>
					Name
				</label>
				<input
					type='text'
					class='form-control'
					placeholder='Jane Doe'
					id='name'
					name='name'
					aria-describedby='name'
					onChange={handleInput}
					required
				/>
			</div>
			<div class='mb-3'>
				<label for='email' class='form-label'>
					Email
				</label>
				<input
					type='email'
					class='form-control'
					placeholder='you@example.com'
					id='email'
					name='email'
					aria-describedby='email'
					onChange={handleInput}
					required
				/>
			</div>
			<div class='mb-3'>
				<label for='message' class='form-label'>
					Message
				</label>
				<textarea
					type='text area'
					class='form-control'
					id='message'
					name='message'
					placeholder='what you want to say to us'
					onChange={handleInput}
					style={{ height: "8rem" }}
					required
				/>
			</div>
			<button type='submit' class='btn btn-primary' disabled={isSending === true || isSending === null}>
				{isSending === false && "Send"}
				{isSending === null && `✓ ${message}`}
				{isSending === true && "Sending"}
			</button>
		</form>
	)
}

export default ContactForm
