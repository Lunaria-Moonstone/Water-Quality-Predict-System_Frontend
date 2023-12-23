import md5 from 'md5'

export default {
  async register(name: string, password: string) {
    let req = await fetch('/api/user/', {
      method: 'POST',
      body: new TextEncoder().encode(JSON.stringify({ name, password })),
      // mode: 'no-cors'
    })
    // console.log(req)
    let res = await req.json()
    return res
  },
  async signIn(name: string, password: string) {
    let req = await fetch('/api/user/login/', {
      method: 'POST',
      body: new TextEncoder().encode(JSON.stringify({ name, password }))
    })
    let res = await req.json()
    return res
  } 
}