interface ColumnMap {
  [key: string]: Function
}

export default {
  async dataFetch(url: string) {
    return (await fetch(url, {
      method: 'GET',
    })).json()
  },
  async dataFetchAndFormat(url: string, columns: string[], columnMap: ColumnMap) {
    let result = await this.dataFetch(url)
    if (!result.ok) {
      return { ok: false } 
    }
    let data = (<Array<any>>result.result).map(x => {
      let y: { [key: string]: any } = {}
      for (let [idx, col] of columns.entries()) {
        if (columnMap[col] != undefined) y[col] = columnMap[col](x[idx])
        else y[col] = x[idx]
      }
      return y
    })
    return {
      data,
      ok: true,
    }
  }
}