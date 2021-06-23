// pages/user/user.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userInfo: {}, // 用户信息,
		collectGoods: [], // 收藏的商品
	},

	// 获取用户信息
	getUserProfile() {
		wx.getUserProfile({
			desc: "用于小程序的用户展示",
			success: res => {
				console.log(res);
				this.setData({
					userInfo: res.userInfo
				});
				wx.setStorageSync('userInfo', res.userInfo);
			}
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// 获取用户信息
		let userInfo = wx.getStorageSync('userInfo') || {};
		// 获取收藏商品的列表
		let collectGoods = wx.getStorageSync('collectGoods') || [];
		this.setData({
			userInfo,
			collectGoods
		})
	},


})