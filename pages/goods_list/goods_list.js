// pages/goods_list/goods_list.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// tab标签栏数据
		tabs: [{
				id: 0,
				value: "综合"
			},
			{
				id: 1,
				value: "销量"
			},
			{
				id: 2,
				value: "价格"
			}
		],
		// 当前选中的tab
		currentIndex: 0
	},

	// 监听tab组件触发的事件
	tabChange(event) {
		let currentIndex = event.detail.currentIndex;
		this.setData({
			currentIndex
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options);
	},
})