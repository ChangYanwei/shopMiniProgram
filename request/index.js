export function request(params) {
	let baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";

	return new Promise((resolve, reject) => {
		wx.request({
			...params,
			url:baseUrl +params.url, // params参数中有url，这里再设置一遍url会将上边解构出来的url的值覆盖掉
			success: res => {
				resolve(res.data)
			},
			fail: err => {
				reject(err)
			}
		})
	})
}