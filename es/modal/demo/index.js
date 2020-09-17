import React from 'react';
import { Button, Modal } from '../../index';
import "../style/index.css";

var Demo = function Demo() {
  var handleVisiblePopup0 = function handleVisiblePopup0() {
    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      maskClosable: false,
      actions: [{
        text: '知道了',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了确认');
        }
      }]
    });
  };

  var handleVisiblePopup1 = function handleVisiblePopup1() {
    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      actions: [{
        text: '取消',
        onPress: function onPress() {
          console.log('点击了取消');
        }
      }, {
        text: '确认',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了确认');
        }
      }]
    });
  };

  var handleVisiblePopup2 = function handleVisiblePopup2() {
    Modal.alert({
      message: '这里是内容区域...',
      actions: [{
        text: '取消',
        onPress: function onPress() {
          console.log('点击了取消');
        }
      }, {
        text: '确认',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了确认');
        }
      }]
    });
  };

  var handleVisiblePopup3 = function handleVisiblePopup3() {
    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      direction: 'vertical',
      actions: [{
        text: '按钮1',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了按钮1');
        }
      }, {
        text: '按钮2',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了按钮2');
        }
      }, {
        text: '按钮3-异步',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了按钮3');
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        }
      }]
    });
  };

  var handleVisiblePopup4 = function handleVisiblePopup4() {
    Modal.alert({
      title: '标题',
      message: '这里是内容区域...',
      actions: [{
        text: '取消',
        onPress: function onPress() {
          console.log('点击了取消');
        }
      }, {
        text: '确认',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了确认');
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        }
      }]
    });
  };

  var handleVisiblePopup5 = function handleVisiblePopup5() {
    Modal.operation({
      actions: [{
        text: '按钮1',
        color: 'red',
        onPress: function onPress() {
          console.log('点击了按钮1');
        }
      }, {
        text: /*#__PURE__*/React.createElement("span", null, "\u6309\u94AE2", /*#__PURE__*/React.createElement("small", null, "\uFF08\u7981\u7528\uFF09")),
        color: 'red',
        disabled: true,
        onPress: function onPress() {
          console.log('点击了按钮2');
        }
      }, {
        text: /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'violet'
          }
        }, "\u6309\u94AE3"),
        color: 'red',
        onPress: function onPress() {
          console.log('点击了按钮3');
        }
      }]
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "d-phone-simulator__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-demo-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-demo-nav__title"
  }, "Modal")), /*#__PURE__*/React.createElement("section", {
    className: "d-demo-content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "d-demo-block__title"
  }, "\u57FA\u7840"), /*#__PURE__*/React.createElement("div", {
    className: "d-demo-block"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: handleVisiblePopup0
  }, "\u63D0\u793A\u5F39\u6846"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: handleVisiblePopup1
  }, "\u786E\u8BA4\u5F39\u6846"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: handleVisiblePopup2
  }, "\u63D0\u793A\u5F39\u6846", /*#__PURE__*/React.createElement("small", null, "\uFF08\u65E0\u6807\u9898\uFF09")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: handleVisiblePopup3
  }, "\u63D0\u793A\u5F39\u6846", /*#__PURE__*/React.createElement("small", null, "\uFF08\u8D85\u8FC72\u4E2A\u6309\u94AE\uFF09")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: handleVisiblePopup4
  }, "\u5F02\u6B65\u5173\u95ED")), /*#__PURE__*/React.createElement("h2", {
    className: "d-demo-block__title"
  }, "\u64CD\u4F5C"), /*#__PURE__*/React.createElement("div", {
    className: "d-demo-block"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    className: "d-demo-margin-block",
    onClick: handleVisiblePopup5
  }, "\u64CD\u4F5C\u5F39\u6846"))));
};

export default Demo;