// pages/continueScan/continueScan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scanFunctionIsUseable: true,
    },
    takeCode(e) {
        console.log('iiiiiiiii');
        console.log(this.data.scanFunctionIsUseable);
        console.log('jjjjjjjjj');
        if(this.data.scanFunctionIsUseable) {
            this.data.scanFunctionIsUseable = false;
            console.log(e.detail.result);
            setTimeout(() => {
                this.data.scanFunctionIsUseable = true;
            }, 2000)
        }
    },

    
    test3(){
        console.log('iiiiiiiii');
        console.log(this.data.scanFunctionIsUseable);
        console.log('jjjjjjjjj');
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