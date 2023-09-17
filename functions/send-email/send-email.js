const sgMail = require("@sendgrid/mail")

const handler = async event => {
	if (event.httpMethod !== "POST") {
		return { statusCode: 500, body: "Request must be a POST request" }
	}

	const { name, email, message } = JSON.parse(event.body)

	const msg = {
		from: "enactusadgitm@gmail.com",
		to: "enactusadgitm@gmail.com",
		subject: `New message from ${name}(${email})`,
		text: message,
	}

	try {
		const SENDGRID_API_KEY = "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"
		sgMail.setApiKey(SENDGRID_API_KEY)
		await sgMail.send(msg)
		return { statusCode: 200, body: "mail sent!" }
	} catch (error) {
		console.log(error.response.body.errors)
		return { statusCode: 500, body: error.message }
	}
}

module.exports = { handler }
