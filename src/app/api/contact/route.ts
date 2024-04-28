import { NextResponse, NextRequest } from "next/server";
import { URLSearchParams } from "url"

export async function POST(req : NextRequest, res: NextResponse) {
	let contacto = await req.formData()
	contacto.append("access_key", process.env.WEB3FORM_PUBLIC_APIKEY);
	const hcaptcha_request_body = new URLSearchParams();
	hcaptcha_request_body.set('response',contacto.get('token').toString())
	hcaptcha_request_body.set('secret', process.env.HCAPTCHA_SECRET)
	contacto.delete('token')
	contacto.delete('g-recaptcha-response')
	const hcaptcha_response = await fetch(process.env.HCAPTCHA_SITEVERIFY, {
		method: "POST",
		headers: {
		  "Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams(hcaptcha_request_body)
	});

	if (hcaptcha_response.ok) {
		const data = await hcaptcha_response.json()
		if (!data?.success) {
			return NextResponse.json(data)
		}

	}

	const requestMail = Object.fromEntries(contacto.entries())

	const response = await fetch(process.env.WEB3FORM_URL_SUBMIT, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		  Accept: "application/json"
		},
		body: JSON.stringify(requestMail)
	});

	if (response.ok) {
		if (response.status == 200) {
			console.log(await response.json())
			return NextResponse.json(await response.json())
		}
	}
	console.log(await response.json())
	return NextResponse.json(await response.json())

}