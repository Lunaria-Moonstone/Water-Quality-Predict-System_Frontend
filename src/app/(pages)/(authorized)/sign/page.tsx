"use client"

import "@/assets/pagestyle/athorized.css"

import Link from "next/link"
import { useState } from "react"

import Modal from "@/app/components/Alert"

function Sign() {

	let [username, chUsername] = useState('')
	let [password, chPassword] = useState('')
	let [warningAlert, chWarningAlert] = useState(false)
	let [warningAlertMsg, chWarningAlertMsg] = useState('')

	const toVerify = async () => {
		if (username.length < 4 || username.length > 20) {
			chWarningAlertMsg('the length of username should bigger than 3 and smaller than 21')
			chWarningAlert(true)
			return
		}
		if (password.length === 0) {
			chWarningAlertMsg('password should not be empty')
			chWarningAlert(true)
			return
		}
		// const data = await fetch('')
	}

	return (
		<div>
			
			<div className="back"></div>
			{/* <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">sign in</button> */}
			<div className="sign-box">
				<div>
					<div className="sign-box-title">Authorized</div>
				</div>
				<div className="sign-box-lines">
					<div className="sign-box-line relative h-11 w-full min-w-[200px]">
						<input
							className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=" " value={username} onChange={(event) => chUsername(event.target.value)} />
						<label
							className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Username
						</label>
					</div>
					<div className="sign-box-line relative h-11 w-full min-w-[200px]">
						<input
							className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=" " type="password" value={password} onChange={(event) => chPassword(event.target.value)} />
						<label
							className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Password
						</label>
					</div>
				</div>
				<div className="signin-button">
					<button
						className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button" onClick={toVerify}
					>
						Sign in
					</button>
				</div>
				<div className="to-signup">
					<div>haven't account? press <Link href=""><span className="">here</span></Link></div>
				</div>
			</div>
		</div>
	)
}

export default Sign