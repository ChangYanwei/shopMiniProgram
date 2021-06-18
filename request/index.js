export function request(params) {
	return new Promise((resolve, reject) => {
		wx.request({
			...params,
			success: res => {
				resolve(res.data)
			},
			fail: err => {
				reject(err)
			}
		})
	})
}