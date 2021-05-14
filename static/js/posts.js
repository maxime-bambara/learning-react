(self["webpackChunkcours_react_in_php"] = self["webpackChunkcours_react_in_php"] || []).push([["posts"],{

/***/ "./assets/js/posts.js":
/*!****************************!*\
  !*** ./assets/js/posts.js ***!
  \****************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LikeButton = /*#__PURE__*/function (_React$Component) {
  "use strict";

  _inherits(LikeButton, _React$Component);

  var _super = _createSuper(LikeButton);

  function LikeButton() {
    var _this;

    _classCallCheck(this, LikeButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      likes: _this.props.likes || 0,
      isLiked: _this.props.isLiked || false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var isLiked = _this.state.isLiked;
      var likes = _this.state.likes + (isLiked ? -1 : 1);

      _this.setState({
        likes: likes,
        isLiked: !isLiked
      });
    });

    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("button", {
        className: "btn btn-link",
        onClick: this.handleClick
      }, this.state.likes, "\xA0", /*#__PURE__*/React.createElement("i", {
        className: this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"
      }), "\xA0", this.state.isLiked ? "Je n'aime plus !" : "J'aime");
    }
  }]);

  return LikeButton;
}(React.Component);

document.querySelectorAll('span.react-like').forEach(function (span) {
  var likes = +span.dataset.likes;
  var isLiked = +span.dataset.isLiked === 1;
  ReactDOM.render( /*#__PURE__*/React.createElement(LikeButton, {
    likes: likes,
    isLiked: isLiked
  }), span);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/posts.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vycy1yZWFjdC1pbi1waHAvLi9hc3NldHMvanMvcG9zdHMuanMiXSwibmFtZXMiOlsiTGlrZUJ1dHRvbiIsImxpa2VzIiwicHJvcHMiLCJpc0xpa2VkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3BhbiIsImRhdGFzZXQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUNNO0FBQ0pDLFdBQUssRUFBRSxNQUFLQyxLQUFMLENBQVdELEtBQVgsSUFBb0IsQ0FEdkI7QUFFSkUsYUFBTyxFQUFFLE1BQUtELEtBQUwsQ0FBV0MsT0FBWCxJQUFzQjtBQUYzQixLOztrRUFLTSxZQUFLO0FBQ2YsVUFBTUEsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0QsT0FBM0I7QUFDQSxVQUFNRixLQUFLLEdBQUcsTUFBS0csS0FBTCxDQUFXSCxLQUFYLElBQW9CRSxPQUFPLEdBQUcsQ0FBQyxDQUFKLEdBQVEsQ0FBbkMsQ0FBZDs7QUFFQSxZQUFLRSxRQUFMLENBQWM7QUFBQ0osYUFBSyxFQUFHQSxLQUFUO0FBQWdCRSxlQUFPLEVBQUUsQ0FBQ0E7QUFBMUIsT0FBZDtBQUNILEs7Ozs7Ozs7V0FFRCxrQkFBUTtBQUNKLDBCQUFPO0FBQVEsaUJBQVMsRUFBQyxjQUFsQjtBQUFpQyxlQUFPLEVBQUUsS0FBS0c7QUFBL0MsU0FDRixLQUFLRixLQUFMLENBQVdILEtBRFQsdUJBRUg7QUFBRyxpQkFBUyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0QsT0FBWCxHQUFxQixrQkFBckIsR0FBMEM7QUFBeEQsUUFGRyxVQUdGLEtBQUtDLEtBQUwsQ0FBV0QsT0FBWCxHQUFxQixrQkFBckIsR0FBMEMsUUFIeEMsQ0FBUDtBQUtIOzs7O0VBbkJvQkksS0FBSyxDQUFDQyxTOztBQXNCL0JDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDQyxPQUE3QyxDQUFxRCxVQUFTQyxJQUFULEVBQWM7QUFDL0QsTUFBTVgsS0FBSyxHQUFHLENBQUNXLElBQUksQ0FBQ0MsT0FBTCxDQUFhWixLQUE1QjtBQUNBLE1BQU1FLE9BQU8sR0FBRyxDQUFDUyxJQUFJLENBQUNDLE9BQUwsQ0FBYVYsT0FBZCxLQUEwQixDQUExQztBQUNBVyxVQUFRLENBQUNDLE1BQVQsZUFBZ0Isb0JBQUMsVUFBRDtBQUFZLFNBQUssRUFBRWQsS0FBbkI7QUFBMEIsV0FBTyxFQUFFRTtBQUFuQyxJQUFoQixFQUErRFMsSUFBL0Q7QUFDSCxDQUpELEUiLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMaWtlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsaWtlczogdGhpcy5wcm9wcy5saWtlcyB8fCAwLFxuICAgICAgICBpc0xpa2VkOiB0aGlzLnByb3BzLmlzTGlrZWQgfHwgZmFsc2VcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PntcbiAgICAgICAgY29uc3QgaXNMaWtlZCA9IHRoaXMuc3RhdGUuaXNMaWtlZDtcbiAgICAgICAgY29uc3QgbGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgKGlzTGlrZWQgPyAtMSA6IDEpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpa2VzIDogbGlrZXMsIGlzTGlrZWQ6ICFpc0xpa2VkfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubGlrZXN9Jm5ic3A7XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNMaWtlZCA/IFwiZmFzIGZhLXRodW1icy11cFwiIDogXCJmYXIgZmEtdGh1bWJzLXVwXCJ9PjwvaT4mbmJzcDtcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTGlrZWQgPyBcIkplIG4nYWltZSBwbHVzICFcIiA6IFwiSidhaW1lXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3Bhbi5yZWFjdC1saWtlJykuZm9yRWFjaChmdW5jdGlvbihzcGFuKXtcbiAgICBjb25zdCBsaWtlcyA9ICtzcGFuLmRhdGFzZXQubGlrZXM7XG4gICAgY29uc3QgaXNMaWtlZCA9ICtzcGFuLmRhdGFzZXQuaXNMaWtlZCA9PT0gMTtcbiAgICBSZWFjdERPTS5yZW5kZXIoPExpa2VCdXR0b24gbGlrZXM9e2xpa2VzfSBpc0xpa2VkPXtpc0xpa2VkfS8+LCBzcGFuKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=