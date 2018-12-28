class Http {
  request (params) {
    // params包含url，method，content，success
    params.method || (params.method = 'GET')
    fetch(
      params.url,
      {
        method: params.method,
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params.content)
      }
    )
      .then(res => res.json())
      .then(res => {
        // console.log('服務器返回的結果:', res)
        params.success && params.success(res)
      })
      .catch(err => {
        console.log('訪問服務器出錯:', err)
      })
  }
}

export {
  Http
}
