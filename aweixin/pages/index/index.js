//index.js
const app = getApp()
var http = require('../../utils/http.js');

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
    http.getReq(`repair?content=123&username=13111669067`, function (res) {
      if (res.status == '0') {
        $Toast({
          content: '登录成功'
        });
        var isAdmin = false//是否是管理员
        if (res.sysPos){
         
          for (var i = 0; i < res.sysPos.length; i++) {
            if (res.sysPos[i].posCode == 'sys-1001') {
              isAdmin = true
            }
          }
        }
        // wx.switchTab({
        //   url: '/pages/index/index'
        // })    
       
      } 
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
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
