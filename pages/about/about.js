// pages/about/about.js
var app = getApp()
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    markers: [{
      iconPath: "/images/address.png",
      id: 0,
      longitude: 114.044489,
      latitude: 22.563233,
      title: '景田怡华苑',
      width: 30,
      height: 30,
    }],

    content:'拥有2年项目经验的前端er，基本技能扎实，精通HTML/CSS/Javascript等语言，熟悉W3C标准；熟悉业界主流JS开发技术，如jQuery,Bootstrap,Vue.js等；熟悉前端性能优化，能独立完成前端编码并有良好的前端编码规范；熟悉 HTML5 移动端开发及微信应用开发，对前端新技术有敏锐的洞察力，学习能力强。'
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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