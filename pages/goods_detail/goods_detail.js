import {
	request
} from "../../request/index"

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// 商品详情数据
		goodsDetail: {},
	},

	// 获取商品详情
	getGoodsDetail(goods_id) {
		request({
			url: "/goods/detail",
			data: {
				goods_id
			}
		}).then(res => {
			console.log("商品详情", res);

			let goodsDetail = {
				pics: res.message.pics,
				goods_name: res.message.goods_name,
				goods_price: res.message.goods_price,
				// 部分手机不识别webp图片格式
				goods_introduce: res.message.goods_introduce,
				goods_id: res.message.goods_id
			};

			this.setData({
				goodsDetail
			})
		})
	},

	// 预览图片
	previewImg(event) {
		let pics = this.data.goodsDetail.pics;
		pics = pics.map(item => item.pics_mid);

		// 当前轮播图中正在展示的图片
		let current = event.target.dataset.url;
		console.log(current);
		wx.previewImage({
			urls: pics,
			current
		})
	},

	/**
	 * 点击加入购物车
	 * 1.先绑定点击事件
	 * 2.获取缓存中的购物车数据，数组格式
	 * 3.先判断当前的商品是否已经存在于购物车
	 * 4.已经存在，修改商品数据，执行购物车数量++，重新把购物车数组填充回缓存中
	 * 5.不存在于购物车的数组中，直接给购物车数组添加一个新元素，
	 * 	新元素带上购买数量属性num，重新把购物车数组填充回缓存中
	 * 6.弹出提示
	 */
	addCart() {
		let cart = wx.getStorageSync('cart') || [];
		let goodsDetail = this.data.goodsDetail;
		let index = cart.findIndex(item => item.goods_id === goodsDetail.goods_id);
		if (index === -1) {
			// 商品不存在于购物车
			goodsDetail.num = 1;
			cart.push(goodsDetail);
		} else {
			// 商品存在于购物车，数量+1
			cart[index].num++;
		}
		wx.setStorageSync('cart', cart);
		wx.showToast({
			title: '添加成功',
			mask: true
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getGoodsDetail(options.goods_id);
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})