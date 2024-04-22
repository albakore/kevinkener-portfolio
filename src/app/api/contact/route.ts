import { NextResponse, NextRequest } from "next/server";

export async function POST(req : NextRequest, res: NextResponse) {
	let contacto = await req.formData()
	contacto.append("access_key", process.env.WEB3FORM_PUBLIC_APIKEY);
	const requestMail = Object.fromEntries(contacto.entries())
	console.log(requestMail)
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