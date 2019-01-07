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
        // 注意此处还要处理错误码
        //
        params.success && params.success(res)
      })
      .catch(err => {
        console.log('访问服务器出错:', err)
      })
  }
}

export {
  Http
}
