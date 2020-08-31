(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EventDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      event: null
    };
  },
  computed: {},
  watch: {},
  methods: {
    getEvent: function getEvent() {
      var _this = this;

      axios.get("/api/event/".concat(this.$route.params.slug)).then(function (response) {
        _this.$set(_this.$data, 'event', response.data.data);
      });
    }
  },
  mounted: function mounted() {
    this.$set(this.$data, 'event', this.$route.params.event);

    if (!this.$route.params.event) {
      this.getEvent();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Events.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_calendar_lib_components_calendar_umd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-calendar/lib/components/calendar.umd */ "./node_modules/v-calendar/lib/components/calendar.umd.js");
/* harmony import */ var v_calendar_lib_components_calendar_umd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_calendar_lib_components_calendar_umd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-calendar/lib/components/date-picker.umd */ "./node_modules/v-calendar/lib/components/date-picker.umd.js");
/* harmony import */ var v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Calendar: v_calendar_lib_components_calendar_umd__WEBPACK_IMPORTED_MODULE_0___default.a,
    DatePicker: v_calendar_lib_components_date_picker_umd__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      date: null,
      events: null,
      links: {},
      meta: {}
    };
  },
  watch: {
    date: function date(newDate, oldDate) {
      if (newDate) {
        this.getEvents(newDate.toDateString());
      }

      if (oldDate && !newDate) {
        this.getEvents();
      }
    }
  },
  computed: {
    computedEvents: function computedEvents() {
      return this.events;
    },
    computedAttributes: function computedAttributes() {
      return [{
        key: 'today',
        dot: true,
        dates: _.map(this.computedEvents, function (event) {
          return new Date(event.date);
        })
      }];
    }
  },
  methods: {
    createNewDate: function createNewDate(event) {
      return new Date(event.date);
    },
    goToPage: function goToPage(page) {
      var _this = this;

      axios.get(page).then(function (response) {
        _this.events = response.data.data;
        _this.links = response.data.links;
        _this.meta = response.data.meta;
      });
    },
    getEvents: function getEvents() {
      var _this2 = this;

      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var url = date ? "/api/events?date=".concat(date) : '/api/events';
      axios.get(url).then(function (response) {
        _this2.events = response.data.data;
        _this2.links = response.data.links;
        _this2.meta = response.data.meta;
      });
    }
  },
  mounted: function mounted() {
    this.getEvents();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: null,
      currentCategory: null,
      news: null,
      links: {},
      meta: {}
    };
  },
  computed: {
    computedCategories: function computedCategories() {
      return this.categories;
    },
    computedNews: function computedNews() {
      return this.news;
    }
  },
  watch: {
    currentCategory: function currentCategory(val) {
      if (val) {
        this.$router.push("/naujienos?category=".concat(val));
      } else {
        this.$router.push("/naujienos");
      }

      this.getNews(val);
    }
  },
  methods: {
    goToPage: function goToPage(page) {
      var _this = this;

      axios.get(page).then(function (response) {
        _this.news = response.data.data;
        _this.links = response.data.links;
        _this.meta = response.data.meta;
      });
    },
    getCategories: function getCategories() {
      var _this2 = this;

      axios.get('/api/categories').then(function (response) {
        _this2.categories = response.data;
      });
    },
    getNews: function getNews() {
      var _this3 = this;

      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var url = category ? '/api/news?category=' + category : '/api/news';
      axios.get(url).then(function (response) {
        _this3.news = response.data.data;
        _this3.links = response.data.links;
        _this3.meta = response.data.meta;
      });
    }
  },
  mounted: function mounted() {
    this.getCategories();

    if (this.$route.query.category) {
      this.currentCategory = this.$route.query.category;
    }

    this.getNews();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      article: null
    };
  },
  computed: {},
  watch: {},
  methods: {
    getDetails: function getDetails() {
      var _this = this;

      axios.get("/api/article/".concat(this.$route.params.slug)).then(function (response) {
        _this.$set(_this.$data, 'article', response.data.data);
      });
    }
  },
  mounted: function mounted() {
    this.$set(this.$data, 'article', this.$route.params.article);

    if (!this.$route.params.article) {
      this.getDetails();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-trans{\n    background: rgba(73, 80, 87, 0.2);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-trans{\n    background: rgba(73, 80, 87, 0.2)\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EventDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=template&id=57ea339a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EventDetails.vue?vue&type=template&id=57ea339a& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.event
    ? _c(
        "div",
        {
          staticClass: "col-md-8 mx-auto mt-md-5 custom-trans",
          attrs: { id: "portfolio" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                ref: "header",
                staticClass: "col-12 my-auto rounded-top",
                style: {
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/" +
                    _vm.event.imagePath +
                    ")",
                  "background-position": "center",
                  "background-repeat": "no-repeat",
                  "background-size": "cover"
                }
              },
              [
                _c("div", { staticClass: "mt-3" }, [
                  _c("h1", { staticClass: "text-center font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.event.title))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(_vm.event.date))
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "mt-4",
            domProps: { innerHTML: _vm._s(_vm.event.content) }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "mt-4 text-center border-top" })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events.vue?vue&type=template&id=93914a78&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Events.vue?vue&type=template&id=93914a78& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "portfolio pt-5 ", attrs: { id: "portfolio" } },
    [
      _c("div", { staticClass: "container" }, [
        _vm.events
          ? _c(
              "div",
              { staticClass: "col-12" },
              [
                _c("date-picker", {
                  attrs: {
                    locale: "lt",
                    attributes: _vm.computedAttributes,
                    "input-props": {
                      placeholder:
                        "Pasirinkite datą. Taškai parodo, kuriomis dienomis vyksta renginiai."
                    }
                  },
                  model: {
                    value: _vm.date,
                    callback: function($$v) {
                      _vm.date = $$v
                    },
                    expression: "date"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 card-columns pt-2" },
          _vm._l(_vm.computedEvents, function(entry) {
            return _c("div", { staticClass: "card portfolio-wrap" }, [
              _c("img", {
                staticClass: "card-img-top",
                attrs: { src: "/" + entry.imagePath }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "portfolio-info" }, [
                _c("h4", [_vm._v(_vm._s(entry.title))]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(entry.date))]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "portfolio-links" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "Event Details",
                            params: {
                              event: entry,
                              slug: entry.slug
                            }
                          },
                          title: "Daugiau detalių"
                        }
                      },
                      [_c("i", { staticClass: "bx bx-plus" })]
                    )
                  ],
                  1
                )
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm.computedEvents
        ? _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "col d-flex justify-content-center" }, [
              _vm.meta.current_page !== 1
                ? _c(
                    "a",
                    {
                      staticClass: "m-2 btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.goToPage(_vm.links.prev)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.meta.current_page - 1))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("a", { staticClass: "m-2 btn btn-success active" }, [
                _c("u", [_vm._v(_vm._s(_vm.meta.current_page))])
              ]),
              _vm._v(" "),
              _vm.meta.current_page !== _vm.meta.last_page
                ? _c(
                    "a",
                    {
                      staticClass: "m-2 btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.goToPage(_vm.links.next)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.meta.current_page + 1))]
                  )
                : _vm._e()
            ])
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News.vue?vue&type=template&id=12793f84&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/News.vue?vue&type=template&id=12793f84& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "portfolio pt-5", attrs: { id: "portfolio" } },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12 d-flex justify-content-center" },
            [
              _c(
                "ul",
                { attrs: { id: "portfolio-flters" } },
                [
                  _c(
                    "li",
                    {
                      staticClass: "pb-1",
                      class: { "filter-active": !_vm.currentCategory },
                      on: {
                        click: function($event) {
                          _vm.currentCategory = null
                        }
                      }
                    },
                    [_vm._v("Visos")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.computedCategories, function(category) {
                    return _c(
                      "li",
                      {
                        staticClass: "pb-1",
                        class: {
                          "filter-active": _vm.currentCategory === category
                        },
                        on: {
                          click: function($event) {
                            _vm.currentCategory = category
                          }
                        }
                      },
                      [_vm._v(_vm._s(category))]
                    )
                  })
                ],
                2
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 card-columns" },
          _vm._l(_vm.computedNews, function(news) {
            return _c("div", { staticClass: "card portfolio-wrap" }, [
              _c("img", {
                staticClass: "card-img-top",
                attrs: { src: "/" + news.imagePath }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "portfolio-info" }, [
                _c("h4", [_vm._v(_vm._s(news.title))]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(news.createdAt))]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "portfolio-links" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "News Details",
                            params: {
                              article: news,
                              category: _vm.currentCategory || "Visos",
                              slug: news.slug
                            }
                          },
                          title: "Daugiau detalių"
                        }
                      },
                      [_c("i", { staticClass: "bx bx-plus" })]
                    )
                  ],
                  1
                )
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm.computedNews
        ? _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "col d-flex justify-content-center" }, [
              _vm.meta.current_page !== 1
                ? _c(
                    "a",
                    {
                      staticClass: "m-2 btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.goToPage(_vm.links.prev)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.meta.current_page - 1))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("a", { staticClass: "m-2 btn btn-success active" }, [
                _c("u", [_vm._v(_vm._s(_vm.meta.current_page))])
              ]),
              _vm._v(" "),
              _vm.meta.current_page !== _vm.meta.last_page
                ? _c(
                    "a",
                    {
                      staticClass: "m-2 btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.goToPage(_vm.links.next)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.meta.current_page + 1))]
                  )
                : _vm._e()
            ])
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=template&id=3d47b158&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsDetails.vue?vue&type=template&id=3d47b158& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.article
    ? _c("div", { staticClass: "col-md-8 mx-auto mt-md-5 custom-trans" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              ref: "header",
              staticClass: "col-12 my-auto rounded-top",
              style: {
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/" +
                  _vm.article.imagePath +
                  ")",
                "background-position": "center",
                "background-repeat": "no-repeat",
                "background-size": "cover"
              }
            },
            [
              _c("div", { staticClass: "mt-3" }, [
                _c("h1", { staticClass: "text-center font-weight-bold" }, [
                  _vm._v(_vm._s(_vm.article.title))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(_vm.article.createdAt))
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "mt-4",
          domProps: { innerHTML: _vm._s(_vm.article.content) }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4 text-center border-top" })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/EventDetails.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/EventDetails.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventDetails_vue_vue_type_template_id_57ea339a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDetails.vue?vue&type=template&id=57ea339a& */ "./resources/js/components/EventDetails.vue?vue&type=template&id=57ea339a&");
/* harmony import */ var _EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/EventDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EventDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDetails.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventDetails_vue_vue_type_template_id_57ea339a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventDetails_vue_vue_type_template_id_57ea339a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EventDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EventDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/EventDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EventDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EventDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/EventDetails.vue?vue&type=template&id=57ea339a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/EventDetails.vue?vue&type=template&id=57ea339a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_template_id_57ea339a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EventDetails.vue?vue&type=template&id=57ea339a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EventDetails.vue?vue&type=template&id=57ea339a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_template_id_57ea339a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventDetails_vue_vue_type_template_id_57ea339a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Events.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Events.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events_vue_vue_type_template_id_93914a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events.vue?vue&type=template&id=93914a78& */ "./resources/js/components/Events.vue?vue&type=template&id=93914a78&");
/* harmony import */ var _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events.vue?vue&type=script&lang=js& */ "./resources/js/components/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Events_vue_vue_type_template_id_93914a78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Events_vue_vue_type_template_id_93914a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Events.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Events.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Events.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Events.vue?vue&type=template&id=93914a78&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Events.vue?vue&type=template&id=93914a78& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_93914a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Events.vue?vue&type=template&id=93914a78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Events.vue?vue&type=template&id=93914a78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_93914a78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Events_vue_vue_type_template_id_93914a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/News.vue":
/*!******************************************!*\
  !*** ./resources/js/components/News.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _News_vue_vue_type_template_id_12793f84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.vue?vue&type=template&id=12793f84& */ "./resources/js/components/News.vue?vue&type=template&id=12793f84&");
/* harmony import */ var _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News.vue?vue&type=script&lang=js& */ "./resources/js/components/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _News_vue_vue_type_template_id_12793f84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _News_vue_vue_type_template_id_12793f84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/News.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/News.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/News.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/News.vue?vue&type=template&id=12793f84&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/News.vue?vue&type=template&id=12793f84& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_12793f84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./News.vue?vue&type=template&id=12793f84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/News.vue?vue&type=template&id=12793f84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_12793f84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_12793f84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NewsDetails.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/NewsDetails.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsDetails_vue_vue_type_template_id_3d47b158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsDetails.vue?vue&type=template&id=3d47b158& */ "./resources/js/components/NewsDetails.vue?vue&type=template&id=3d47b158&");
/* harmony import */ var _NewsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/NewsDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewsDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsDetails.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsDetails_vue_vue_type_template_id_3d47b158___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsDetails_vue_vue_type_template_id_3d47b158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewsDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewsDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/NewsDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/NewsDetails.vue?vue&type=template&id=3d47b158&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/NewsDetails.vue?vue&type=template&id=3d47b158& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_template_id_3d47b158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsDetails.vue?vue&type=template&id=3d47b158& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsDetails.vue?vue&type=template&id=3d47b158&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_template_id_3d47b158___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsDetails_vue_vue_type_template_id_3d47b158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);