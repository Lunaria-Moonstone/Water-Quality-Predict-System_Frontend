"use client"

import "@/assets/pagestyle/athorized.css"

import { notification } from "antd"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import md5 from "md5"

import authorized from '@/api/sign/authorized'


function In() {

  const router = useRouter()
  let [username, chUsername] = useState('')
  let [password, chPassword] = useState('')
  let [api, contextHolder] = notification.useNotification()

  const salt = process.env.CRYPT_SALT

  const toVerify = async () => {
    if (username.length < 4 || username.length > 20) {
      api.error({
        message: 'username length error',
        description: 'The length of a username should not be lower than 4 or higher than 20'
      })
      return
    }
    if (password.length === 0) {
      api.error({
        message: 'password empty error',
        description: 'The password should not be empty'
      })
      return
    }
    // if (username === 'luna' && password === 'moonstone') {
    //   router.push('/')
    //   return
    // }
    // let signRes = await authorized.register(username, password)

    console.log(salt)
    let result = await authorized.signIn(username, md5(password + salt))
    if (result.ok) {
      api.success({
        message: 'sign in success',
        description: 'now into dashboard'
      })
      setTimeout(() => router.push('/dashboard'), 3000)
      return
    }
    api.error({
      message: 'signin error',
      description: 'username is not found or password is not match'
    })
  }

  return (
    <>
      { contextHolder }
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
          <div>Don't have an account? Press <Link href="/sign/up"><span className="">here</span></Link>.</div>
        </div>
      </div>
    </>
  )
}

export default In