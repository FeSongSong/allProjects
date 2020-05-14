// pages/Repair list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      date:''
    },
    roomNumber: String,
    date:'',
    rules: [{
      name: 'date',
      rules: {required: true, message: '房间号必填'},
    }],
    multiArray:[['男','女'],['男1','男2']],
    multiIndex: [],
    allMultiArray:[]
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {

  },
    formRoomChange: function(e){
     let targetData = e.currentTarget.dataset.modal; 
     let currentValue = e.detail.value; 
     this[targetData] = currentValue; 
    },

  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
        console.log('valid', valid, errors)
        if (!valid) {
            const firstError = Object.keys(errors)
            if (firstError.length) {
                this.setData({
                    error: errors[firstError[0]].message
                })

            }
        } else {
            wx.showToast({
                title: '校验通过'
            })
        }
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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