!(function (e) {
  function t(t) {
    for (
      var o, s, c = t[0], i = t[1], d = t[2], l = 0, h = [];
      l < c.length;
      l++
    )
      (s = c[l]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && h.push(r[s][0]),
        (r[s] = 0);
    for (o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    for (u && u(t); h.length; ) h.shift()();
    return a.push.apply(a, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== r[i] && (o = !1);
      }
      o && (a.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 1: 0 },
    a = [];
  function s(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = o),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          s.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    i = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var d = 0; d < c.length; d++) t(c[d]);
  var u = i;
  a.push([124, 2]), n();
})({
  124: function (e, t, n) {
    n(179), (e.exports = n(178));
  },
  126: function (e, t) {
    !(function () {
      const e = document.querySelector("#same-address"),
        t = document.querySelector(".billing-address"),
        n = document.querySelectorAll('[name="checkoutPaymentMethod"]') || [],
        o = document.querySelector(".card-details"),
        r = document.querySelector(".paypal-details");
      e &&
        t &&
        e.addEventListener("change", (e) => {
          e && e.target && !e.target.checked
            ? t.classList.remove("d-none")
            : t.classList.add("d-none");
        }),
        n.length > 0 &&
          n.forEach((e) => {
            e.addEventListener("change", (e) => {
              e &&
                e.target &&
                e.target.id &&
                (({ type: e }) => {
                  "checoutPaymentStripe" === e
                    ? (r.classList.add("d-none"), o.classList.remove("d-none"))
                    : (r.classList.remove("d-none"), o.classList.add("d-none"));
                })({ type: e.target.id });
            });
          });
    })();
  },
  127: function (e, t) {
    !(function () {
      const e =
        document.querySelectorAll(
          ".product-option select, .product-option input"
        ) || [];
        selected = document.querySelectorAll(".selected-option");
        price = document.querySelector(".product-base-price");
      e.forEach((e) => {
        e.addEventListener("change", (t) => {
            added_price = parseInt(price.dataset.baseprice);
            (({ event: e, option: t }) => {
                const n = !!e.target && e.target.closest(".product-option"),
                o = !!n && n.querySelector(".selected-option"),
                r = !(!e.target || !e.target.value) && e.target.value;
                n && o && r && (o.innerText = r);
                o.setAttribute('data-addprice',e.target.dataset.price)
            })({ event: t, option: e });
            selected.forEach(function(sel){
                option_price = parseInt(sel.dataset.addprice);
                added_price += option_price;
            });
            price.innerText = "RM"+(added_price).toFixed(2);
        });
      });
    })();
  },
  128: function (e, t) {
    (document.querySelectorAll("[data-pixr-scrollto]") || []).forEach((e) =>
      e.addEventListener("click", function (e) {
        const t =
          !!(e && e.target && e.target.dataset && e.target.dataset.target) &&
          e.target.dataset.target;
        if (t) {
          const e = document.querySelector(t);
          e && e.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      })
    );
  },
  129: function (e, t) {
    !(function () {
      const e = document.querySelectorAll(".filter-search") || [],
        t = document.querySelector(".search-trigger"),
        n = document.querySelector(".search-overlay"),
        o = document.querySelector(".navbar-search"),
        r = document.querySelector(".navbar-search input"),
        a = document.querySelector(".close-search");
      function s() {
        document.body.classList.contains("search-active")
          ? document.body.classList.remove("search-active")
          : (o.classList.remove("d-none"),
            setTimeout(() => {
              document.body.classList.add("search-active"), r && r.focus();
            }, 150));
      }
      t &&
        t.addEventListener("click", function () {
          s();
        }),
        a &&
          a.addEventListener("click", function () {
            s();
          }),
        n &&
          n.addEventListener("click", function () {
            s();
          });
      e.length > 0 &&
        e.forEach((e) => {
          e.addEventListener("keyup", (t) => {
            ((e, t) => {
              const n = e.target.closest(".widget-filter"),
                o = n ? n.querySelectorAll(".filter-options .form-group") : [];
              t.value && o && n
                ? o.forEach((e) => {
                    e.innerText
                      .trim()
                      .toLowerCase()
                      .includes(t.value.toLowerCase().trim())
                      ? e.classList.remove("d-none")
                      : e.classList.add("d-none");
                  })
                : o.forEach((e) => {
                    e.classList.remove("d-none");
                  });
            })(t, e);
          });
        });
    })();
  },
  177: function (e, t) {
    window.addEventListener("load", function () {
      document.body.classList.add("page-loaded");
    });
  },
  178: function (e, t, n) {},
  179: function (e, t, n) {
    "use strict";
    n.r(t);
    n(125);
    var o = n(117),
      r = n.n(o);
    document.addEventListener("DOMContentLoaded", () => {
      r.a.init({
        duration: 700,
        easing: "ease-out-quad",
        once: !0,
        startEvent: "load",
        disable: "mobile",
      });
    });
    var a = n(63);
    !(function () {
      const e = document.querySelector(".dropdown-cart"),
        t = document.querySelector(".cart-dropdown"),
        n = document.querySelectorAll(".btn-close-cart") || [];
      if (e) {
        const c = Object(a.a)(e, t, { placement: "bottom-end" });
        function o() {
          t.setAttribute("data-show", ""),
            c.setOptions({
              modifiers: [{ name: "eventListeners", enabled: !0 }],
            }),
            c.update();
          $.ajax({
            type: "GET",
            url: "/cart/ajax", // appears as $_GET['id'] @ your backend side
            success: function (data) {
              // data is ur summary
              /* console.log(data);
              data.forEach(function(key,val){
                console.log(key['item_price']);
              }); */
                $(".ajax_cart").html(data);
                var grand_total = 0;
                var count_item = 0;
                price = document.querySelectorAll(".item_price");
                price.forEach(function(sel){
                    var item_price = parseInt(sel.dataset.price);
                    grand_total += item_price;
                    count_item ++
                });;
                document.querySelector(".grand-total").innerText = "$"+(grand_total).toFixed(2);
                document.querySelector(".number-of-item").innerText = "Cart ( "+count_item+" )";
                document.querySelector(".number-item").innerText = "Cart Summary ( "+count_item+" item )";
            },
          });
        }
        function r() {
          t.removeAttribute("data-show"),
            c.setOptions({
              modifiers: [{ name: "eventListeners", enabled: !1 }],
            });
        }
        function s(t) {
          let n = t.target;
          do {
            if (n === e) return;
            n = n.parentNode;
          } while (n);
          r();
        }
        const i = ["mouseleave", "blur"];
        ["mouseenter", "focus"].forEach((t) => {
          e.addEventListener(t, o);
        }),
          i.forEach((t) => {
            e.addEventListener(t, r);
          }),
          document.addEventListener("click", function (e) {
            s(e);
          }),
          document.addEventListener("touchstart", function (e) {
            s(e);
          }),
          n.forEach(function (e) {
            e.addEventListener("click", r), e.addEventListener("touchstart", r);
          });
      }
    })();
    n(126);
    var s = n(79);
    !(function () {
      const e = document.querySelectorAll("[data-zoomable]") || [];
      (document.querySelectorAll("[data-zoomable-btn]") || []).forEach((e) => {
        e.addEventListener("click", () => {
          !(function (e) {
            let t =
              !(!e.dataset || !e.dataset.src) &&
              document.querySelector(e.dataset.src);
            new s.a(t, { margin: 30 }).open();
          })(e);
        });
      }),
        e.forEach((e) => {
          new s.a(e, { margin: 30 });
        });
    })();
    class c {
      constructor(e) {
        (this.menuToggle = e),
          (this.menuParent =
            !!this.menuToggle && this.menuToggle.closest(".dropdown")),
          (this.dropdownMenu =
            !!this.menuParent &&
            this.menuParent.querySelector(".dropdown-menu")),
          (this.showEvents = ["mouseenter"]),
          (this.hideEvents = ["mouseleave"]),
          (this.clickEvent = ["click"]),
          (this.cssVarBreakPoint =
            getComputedStyle(document.documentElement).getPropertyValue(
              "--theme-breakpoint-lg"
            ) || "992px"),
          (this.breakpointLG = parseInt(this.cssVarBreakPoint, 10)),
          this.initMenu();
      }
      initMenu() {
        const e = this;
        this.menuParent &&
          (this.showEvents.forEach((t) => {
            this.menuParent.addEventListener(t, function () {
              e.showMenu();
            });
          }),
          this.hideEvents.forEach((t) => {
            this.menuParent.addEventListener(t, function () {
              e.hideMenu();
            });
        }),
          this.clickEvent.forEach((t) => {
            this.menuParent.addEventListener(t, function () {
                e.click();
            });
        }))
      }
      showMenu() {
        window.innerWidth < this.breakpointLG ||
          (this.dropdownMenu && this.dropdownMenu.classList.add("show"),
          this.menuToggle &&
            (this.menuToggle.classList.add("show"),
            this.menuToggle.setAttribute("aria-expanded", "true")));
      }
      hideMenu() {
        window.innerWidth < this.breakpointLG ||
          (this.dropdownMenu && this.dropdownMenu.classList.remove("show"),
          this.menuToggle &&
            (this.menuToggle.classList.remove("show"),
            this.menuToggle.setAttribute("aria-expanded", "false")));
      }
      click(){
        this.hideMenu();
        var $link = this.menuParent.querySelector(".nav-link").href;
        window.location.href = $link;
      }
    }
    document.addEventListener("DOMContentLoaded", () => {
      const e =
          document.querySelectorAll(
            ".navbar-nav .dropdown, .navbar-nav .dropend"
          ) || [],
        t = document.querySelectorAll(".navbar-toggler") || [];
      e.length > 0 &&
        e.forEach((e) => {
          new c(e);
        }),
        t.length > 0 &&
          t.forEach((e) => {
            e.addEventListener("click", (e) => {
              (e.target &&
                e.target.classList.contains("btn-collapse-expand")) ||
                (document.body.classList.contains("navbar-active")
                  ? document.body.classList.remove("navbar-active")
                  : document.body.classList.add("navbar-active"));
            });
          });
    });
    var i = n(118),
      d = n.n(i);
    !(function () {
      var e = document.querySelectorAll(".filter-price") || [];
      const t = (e) => {
        const t = e.closest(".widget-filter-price");
        var n = !!t && t.querySelector(".filter-min"),
          o = !!t && t.querySelector(".filter-max"),
          start_min = parseInt(n.dataset.start_min),
          start_max = parseInt(o.dataset.start_max),
          min_price = parseInt(n.min),
          max_price = parseInt(o.max),
          divide = (max_price-min_price)/4;
        d.a.create(e, {
          start: [start_min, start_max],
          connect: !0,
          tooltips: [!0, !0],
          range: { min: min_price, max: max_price },
          pips: {
            mode: "values",
            values: [min_price, min_price+divide, min_price+(2*divide), min_price+(3*divide), max_price],
            density: 100,
          },
        });
        const r = [n, o];
        e.noUiSlider.on("update", function (e, t) {
          r[t].value = e[t];
        }),
          n.addEventListener("change", function () {
            e.noUiSlider.set([this.value, null]);
          }),
          o.addEventListener("change", function () {
            e.noUiSlider.set([null, this.value]);
          });
      };
      e.forEach((e) => {
        t(e);
      });
    })();
    n(127), n(128), n(129);
    var u = n(119);
    (document.querySelectorAll("[data-pixr-simplebar]") || []).forEach((e) => {
      new u.a(e, { autoHide: !1 });
    });
    var l = n(194),
      h = n(183),
      m = n(184),
      f = n(185),
      p = n(186),
      v = n(187),
      g = n(188),
      y = n(189),
      b = n(190),
      L = n(191),
      E = n(192),
      w = n(193);
    l.a.use([h.a, m.a, f.a, p.a, v.a, g.a, y.a, b.a, L.a, E.a, w.a]),
      document.addEventListener("DOMContentLoaded", () => {
        (document.querySelectorAll("[data-swiper]") || []).forEach((e) => {
          let t =
            e.dataset && e.dataset.options ? JSON.parse(e.dataset.options) : {};
          new l.a(e, t);
        });
      });
    n(177);
  },
});

function getSearch(i){
  if(i===""){
    $(".search_result.row.g-4").html("");
  }
  else{
    $.ajax({
      type: "GET",
      url: "/ajax/search", // appears as $_GET['id'] @ your backend side
      data: {search:i},
      success: function (data) {
        // data is ur summary
        $(".search_result.row.g-4").html(data);
      },
    });
  }
}

function destroy_cart(i,t){
    var data = {
        '_token': t,
        "cart_item_id": i,
    };

    // $(this).closest(".cartpage").remove();

    $.ajax({
        url: '/cart',
        type: 'DELETE',
        data: data,
        success: function (response) {
            window.location.reload();
        }
    });
}


