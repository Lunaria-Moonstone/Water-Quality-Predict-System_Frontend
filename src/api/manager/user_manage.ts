import manage from "./manage"

export default {
  async fetchUser(likely?: string) {
    const columns: string[] = [
      'id', 'name', 'password', 'active', 'created', 'updated', 'root'
    ]
    let columnMap = {
      'password': (password: string) => '',
      'created': (date: string) => new Date(date).toLocaleDateString(),
      'updated': (date: string) => new Date(date).toLocaleDateString()
    }
    return await manage.dataFetchAndFormat('/api/user', columns, columnMap)
  }
}