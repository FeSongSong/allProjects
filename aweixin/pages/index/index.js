//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    nickName: '',
    logged: false,
    modify: false,
    items:[{
      value:'1',
      name:'学生'
    },{
      value:'2',
      name:'维修员'
    }]
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                nickName:res.userInfo.nickName
              })
            }
          })
        }
      }
    })
  },

  modifySwitch: function() {
    this.setData({
      modify: true
    })
    wx.hideTabBar({})
  },

  modifyCancel: function() {
    this.setData({
      modify: false
    })
    wx.showTabBar({})
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        nickName:res.userInfo.nickName
      })
    }
  },
 

})
