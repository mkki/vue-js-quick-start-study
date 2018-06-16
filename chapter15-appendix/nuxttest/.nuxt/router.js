import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b65f3bc2 = () => import('..\\pages\\About.vue' /* webpackChunkName: "pages_About" */).then(m => m.default || m)
const _466f0ede = () => import('..\\pages\\contacts.vue' /* webpackChunkName: "pages_contacts" */).then(m => m.default || m)
const _47ecdc83 = () => import('..\\pages\\contacts\\_no\\index.vue' /* webpackChunkName: "pages_contacts__no_index" */).then(m => m.default || m)
const _4d161d04 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/About",
			component: _b65f3bc2,
			name: "About"
		},
		{
			path: "/contacts",
			component: _466f0ede,
			name: "contacts",
			children: [
				{
					path: ":no",
					component: _47ecdc83,
					name: "contacts-no"
				}
			]
		},
		{
			path: "/",
			component: _4d161d04,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
