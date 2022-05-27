(this.webpackJsonpimggalary = this.webpackJsonpimggalary || []).push([
  [0],
  {
    33: function (e, t, n) {},
    34: function (e, t, n) {},
    44: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n(0),
        a = n.n(i),
        o = n(27),
        c = n.n(o),
        s = (n(33), n(12)),
        r = n(14),
        _ = n(7),
        l = (n(34), n(13)),
        m = n(1);
      var d = function () {
        var e = Object(i.useState)(''),
          t = Object(s.a)(e, 2),
          n = t[0],
          a = t[1],
          o = Object(i.useContext)(w);
        return (
          Object(i.useEffect)(
            function () {
              a(!(o > 1e3));
            },
            [o]
          ),
          Object(i.useEffect)(
            function () {
              '' !== n &&
                l.a
                  .timeline()
                  .set('.home__about', { visibility: 'visible' })
                  .from(
                    '.home__about__line1',
                    n
                      ? {}
                      : { scaleX: 0, transformOrigin: 'left', duration: 0.8 }
                  )
                  .from('.home__about__container0 p', {
                    x: -50,
                    duration: 0.8,
                    opacity: 0,
                  })
                  .from(
                    '.home__about__container0 .home__about__container__img-container',
                    { x: 50, opacity: 0, duration: 0.8 },
                    0.8
                  )
                  .from(
                    '.home__about__container1 .home__about__container__img-container',
                    { x: -50, opacity: 0, duration: 0.8 },
                    0.8
                  )
                  .from(
                    '.home__about__container1 p',
                    { x: 50, duration: 0.8, opacity: 0 },
                    0.8
                  )
                  .from(
                    '.home__about__line2',
                    n
                      ? {}
                      : { scaleX: 0, transformOrigin: 'right', duration: 0.8 }
                  );
            },
            [n]
          ),
          Object(m.jsxs)('div', {
            className: 'home__about',
            children: [
              Object(m.jsx)('div', {
                className: 'home__about__line home__about__line1',
              }),
              Object(m.jsxs)('div', {
                className: 'home__about__container home__about__container0',
                children: [
                  Object(m.jsxs)('p', {
                    children: [
                      Object(m.jsx)('span', {
                        children:
                          'I’m Yuvaraj, but most people just call me Xander.',
                      }),
                      ' I am a professional commercial and editorial photographer based in Tokyo, Japan. I left North Carolina in 2009 for what I thought would be a year abroad. But here I am, more than a decade later, still happily living and working in Asia. I gradually adjusted to city living and feel privileged to have spent a large chunk of my adult life in some of the most vibrant metropolises barefoot in creeks than surrounded by concrete. Though based in Tokyo, I am available for editorial, commercial, portrait, documentary, and travel photography assignments worldwide.',
                    ],
                  }),
                  Object(m.jsx)('div', {
                    className: 'home__about__container__img-container',
                    children: Object(m.jsx)('img', {
                      src: '/images/about1.webp',
                    }),
                  }),
                ],
              }),
              Object(m.jsxs)('div', {
                className: 'home__about__container home__about__container1',
                children: [
                  Object(m.jsx)('div', {
                    className: 'home__about__container__img-container',
                    children: Object(m.jsx)('img', {
                      src: '/images/about2.webp',
                    }),
                  }),
                  Object(m.jsx)('p', {
                    children:
                      'My editorial photography is frequently featured in a variety of international and domestic publications. I also work as a commercial photographer with some of the world’s leading brands. A shortlist of my clients includes: The New York Times, Hugo Boss, Lenovo, Capital One, Wired Magazine, The Four Seasons, The Wall Street Journal, AMC Networks, Government of Japan, San Francisco Chronicle, Condé Nast Traveler, DBS Bank, Yanmar, InterContinental Hotels Group, Tatler Homes, Massachusetts Institute of Technology, GEO Special, House and Garden, Boston Symphony Orchestra, Afar, Swiss Energy Foundation, CAA Magazine, Ink Global, Financial Times, Grand Seiko, Adweek, Travel + Leisure, and more.',
                  }),
                ],
              }),
              Object(m.jsx)('div', {
                className: 'home__about__line home__about__line2',
              }),
            ],
          })
        );
      };
      var h = function () {
          return Object(m.jsx)('div', {
            className: 'home__footer',
            children: Object(m.jsxs)('p', {
              children: [
                '@ ',
                new Date().getFullYear(),
                '. All rights reserved.',
              ],
            }),
          });
        },
        b = n(49),
        u = n(46),
        j = n(47),
        g = n(50),
        p = n(48),
        O = (n(36), n(17)),
        y = n(19);
      b.a.use([u.a, j.a]);
      var f = function () {
        var e = Object(i.useState)(0),
          t = Object(s.a)(e, 2),
          n = t[0],
          a = t[1],
          o = Object(i.useState)(!1),
          c = Object(s.a)(o, 2),
          r = c[0],
          _ = c[1],
          d = Object(i.useContext)(w);
        return (
          Object(i.useEffect)(
            function () {
              _(!(d > 1400));
            },
            [d]
          ),
          Object(i.useEffect)(
            function () {
              1 !== n
                ? l.a
                    .timeline()
                    .set('.swiper-slide-active', { visibility: 'visible' })
                    .set(
                      '.swiper-slide-active .home__gallery__container__desc',
                      { translateX: r ? 0 : '-50%' }
                    )
                    .from(
                      '.swiper-slide-active .home__gallery__container__img-container',
                      { scale: 0.8, duration: 0.8, opacity: 0 }
                    )
                    .from(
                      '.swiper-slide-active .home__gallery__container__desc',
                      r
                        ? {}
                        : {
                            scaleY: 0,
                            transformOrigin: 'top',
                            opacity: 0,
                            duration: 0.8,
                          }
                    )
                    .from(
                      '.swiper-slide-active .home__gallery__container__desc h3',
                      {
                        x: -15,
                        opacity: 0,
                        duration: 0.8,
                        transformOrigin: 'left',
                      }
                    )
                    .from(
                      '.swiper-slide-active .home__gallery__container__desc p',
                      { y: -20, opacity: 0, duration: 0.8 }
                    )
                    .from(
                      '.home__gallery__pagination',
                      0 === n ? { opacity: 0, duration: 0.8 } : {}
                    )
                : l.a
                    .timeline()
                    .set(
                      '.swiper-slide-active .home__gallery__container__desc',
                      { translateX: r ? 0 : '-50%' }
                    );
            },
            [r, n]
          ),
          Object(m.jsxs)(g.a, {
            slidesPerView: 1,
            navigation: {
              nextEl: '.home__gallery__pagination-next',
              prevEl: '.home__gallery__pagination-prev',
            },
            loop: !0,
            onSlideChange: function (e) {
              a(e.activeIndex);
            },
            className: 'home__gallery',
            children: [
              Object(m.jsxs)('div', {
                className:
                  'home__gallery__pagination-prev home__gallery__pagination',
                children: [
                  Object(m.jsx)(O.a, { className: 'icon', icon: y.a }),
                  Object(m.jsx)(O.a, { className: 'icon', icon: y.a }),
                  Object(m.jsx)('span', { children: 'Prev' }),
                ],
              }),
              Object(m.jsxs)('div', {
                className:
                  'home__gallery__pagination-next home__gallery__pagination',
                children: [
                  Object(m.jsx)('span', { children: 'Next' }),
                  Object(m.jsx)(O.a, { className: 'icon', icon: y.b }),
                  Object(m.jsx)(O.a, { className: 'icon', icon: y.b }),
                ],
              }),
              [0, 1, 2, 3].map(function (e) {
                return Object(m.jsxs)(
                  p.a,
                  {
                    className: 'home__gallery__container',
                    children: [
                      Object(m.jsx)('div', {
                        className: 'home__gallery__container__img-container',
                        children: Object(m.jsx)('img', {
                          src: '/images/gallery'.concat(e, '.webp'),
                        }),
                      }),
                      Object(m.jsxs)('div', {
                        className: 'home__gallery__container__desc',
                        children: [
                          Object(m.jsx)('h3', { children: 'Landscape' }),
                          Object(m.jsx)('p', {
                            children:
                              'I took in this amazing photo when i was travelling in this place and you can see how peaceful it is without no human croud. The breeze is just amazing',
                          }),
                        ],
                      }),
                    ],
                  },
                  e
                );
              }),
            ],
          })
        );
      };
      var v = function () {
        var e = Object(i.useContext)(w),
          t = Object(i.useState)(!1),
          n = Object(s.a)(t, 2),
          a = n[0],
          o = n[1],
          c = Object(i.useState)('/'),
          l = Object(s.a)(c, 2),
          d = l[0],
          h = l[1],
          b = Object(_.f)();
        return (
          Object(i.useEffect)(
            function () {
              e > 1e3 && o(!1);
            },
            [e]
          ),
          Object(i.useEffect)(
            function () {
              h(b.pathname);
            },
            [b.pathname]
          ),
          Object(m.jsxs)('div', {
            className: 'home__header',
            children: [
              Object(m.jsx)(r.b, {
                to: '/',
                children: Object(m.jsx)('h1', { children: 'Xander' }),
              }),
              Object(m.jsxs)('ul', {
                className: a
                  ? 'home__header__nav-links home__header__nav-links--visible'
                  : 'home__header__nav-links',
                children: [
                  Object(m.jsx)('li', {
                    onClick: function () {
                      o(!1);
                    },
                    children: Object(m.jsxs)(r.b, {
                      to: '/gallery' === d ? '/' : '/gallery',
                      children: [
                        '/gallery' === d ? 'Home' : 'Photo Gallery',
                        Object(m.jsx)('span', {}),
                      ],
                    }),
                  }),
                  Object(m.jsx)('li', {
                    onClick: function () {
                      o(!1);
                    },
                    children: Object(m.jsxs)(r.b, {
                      to: '/about' === d ? '/' : '/about',
                      children: [
                        '/about' === d ? 'Home' : 'About',
                        Object(m.jsx)('span', {}),
                      ],
                    }),
                  }),
                ],
              }),
              Object(m.jsxs)('div', {
                className: 'home__header__hamburger',
                onClick: function () {
                  o(function (e) {
                    return !e;
                  });
                },
                children: [
                  Object(m.jsx)('div', {
                    className:
                      'home__header__hamburger__line home__header__hamburger__line-1',
                  }),
                  Object(m.jsx)('div', {
                    className:
                      'home__header__hamburger__line home__header__hamburger__line-2',
                  }),
                  Object(m.jsx)('div', {
                    className:
                      'home__header__hamburger__line home__header__hamburger__line-3',
                  }),
                ],
              }),
            ],
          })
        );
      };
      var x = function () {
          var e = Object(i.useContext)(w);
          return (
            Object(i.useEffect)(function () {
              if (e > 1400)
                l.a
                  .timeline()
                  .set('.home__landing__content, .home__landing__img', {
                    visibility: 'visible',
                  })
                  .from('.home__landing__content', {
                    scaleY: 0,
                    duration: 0.8,
                    transformOrigin: 'bottom',
                  })
                  .from(
                    '.home__landing__content h1, .home__landing__content p, .home__landing__content button',
                    { opacity: 0, x: -50, duration: 0.8 }
                  )
                  .from(
                    '.home__landing__img',
                    { duration: 0.8, x: 100, opacity: 0 },
                    0.8
                  );
              else if (e > 800 && e <= 1400) {
                l.a
                  .timeline()
                  .set('.home__landing__content', { visibility: 'visible' })
                  .from('.home__landing__content', {
                    scaleY: 0,
                    duration: 0.8,
                    transformOrigin: 'bottom',
                  })
                  .from(
                    '.home__landing__content h1, .home__landing__content p, .home__landing__content button',
                    { opacity: 0, x: -50, duration: 0.8 }
                  );
              } else if (e <= 800) {
                l.a
                  .timeline()
                  .set('.home__landing__content', { visibility: 'visible' })
                  .from(
                    '.home__landing__content h1',
                    { opacity: 0, y: 50, duration: 0.8 },
                    1
                  )
                  .from(
                    '.home__landing__content p',
                    { opacity: 0, y: 50, duration: 0.8 },
                    1.2
                  )
                  .from(
                    '.home__landing__content button',
                    { opacity: 0, y: 50, duration: 0.8 },
                    1.4
                  );
              }
            }, []),
            Object(i.useEffect)(
              function () {
                e > 1400 &&
                  l.a.set('.home__landing__img', { visibility: 'visible' });
              },
              [e]
            ),
            Object(m.jsxs)('div', {
              className: 'home__landing',
              children: [
                Object(m.jsxs)('div', {
                  className: 'home__landing__content',
                  children: [
                    Object(m.jsx)('h1', {
                      children: `A good snapshot keeps a moment that's gone from running away`,
                    }),
                    Object(m.jsx)('p', {
                      children: `Hi, I'm Xander. To me, travel photography transcends 
                      just “landscape” or “portrait” photography. It’s about capturing 
                      and documenting that distant place in a single frame, 
                      pulling the viewer into the shot and making them wish 
                      that they were there.`,
                    }),
                    Object(m.jsx)(r.b, {
                      to: '/gallery',
                      children: Object(m.jsxs)('button', {
                        children: [
                          'Look All Pictures',
                          Object(m.jsx)('span', {}),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(m.jsx)('div', {
                  className: 'home__landing__img',
                  children: Object(m.jsx)('img', {
                    src: '/images/landing.webp',
                  }),
                }),
              ],
            })
          );
        },
        w = Object(i.createContext)();
      var k = function () {
          var e = Object(i.useState)(window.innerWidth),
            t = Object(s.a)(e, 2),
            n = t[0],
            a = t[1],
            o = Object(i.useCallback)(function () {
              a(window.innerWidth);
            }, []);
          return (
            Object(i.useEffect)(
              function () {
                return (
                  window.addEventListener('resize', o),
                  function () {
                    return window.removeEventListener('resize', o);
                  }
                );
              },
              [o]
            ),
            Object(m.jsx)(r.a, {
              className: 'App',
              children: Object(m.jsxs)(w.Provider, {
                value: n,
                children: [
                  Object(m.jsx)(v, {}),
                  Object(m.jsxs)(_.c, {
                    children: [
                      Object(m.jsx)(_.a, { component: f, path: '/gallery' }),
                      Object(m.jsxs)(_.a, {
                        path: '/about',
                        children: [Object(m.jsx)(d, {}), Object(m.jsx)(h, {})],
                      }),
                      Object(m.jsx)(_.a, { component: x, path: '/' }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        N = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 51))
              .then(function (t) {
                var n = t.getCLS,
                  i = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  c = t.getTTFB;
                n(e), i(e), a(e), o(e), c(e);
              });
        };
      c.a.render(
        Object(m.jsx)(a.a.StrictMode, { children: Object(m.jsx)(k, {}) }),
        document.getElementById('root')
      ),
        N();
    },
  },
  [[44, 1, 2]],
]);
//# sourceMappingURL=main.f640f665.chunk.js.map
