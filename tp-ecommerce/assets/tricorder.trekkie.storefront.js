// https://cdn.shopify.com/s/javascripts/tricorder/trekkie.storefront.min.js?v=2020.07.13.1
!(function (e) {
	var t = {}
	function n(r) {
		if (t[r]) return t[r].exports
		var o = (t[r] = { i: r, l: !1, exports: {} })
		return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
	}
	;(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
		}),
		(n.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 })
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e
			var r = Object.create(null)
			if (
				(n.r(r),
				Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var o in e)
					n.d(
						r,
						o,
						function (t) {
							return e[t]
						}.bind(null, o)
					)
			return r
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default
					  }
					: function () {
							return e
					  }
			return n.d(t, 'a', t), t
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(n.p = ''),
		n((n.s = 15))
})([
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.resetCookieDomain = t.determineCookieDomain = t.cleanupOverScopedCookies = t.clear = t.write = t.isPersistentCookie = t.read = t.allowed = t.enabled = t.isCCPAEnforced = t.userDataCannotBeSold = t.userDataCanBeSold = t.hasCustomerPrivacyAPI = t.userCanBeTracked = t.cleanupMyShopifyDotComCookie = t.cookieImpl = void 0)
		var r = n(1),
			o = n(4),
			i = n(18),
			a = n(11),
			c = void 0
		function s() {
			return !u() || Boolean(window.Shopify.customerPrivacy.userCanBeTracked())
		}
		function u() {
			return Boolean(window.Shopify && window.Shopify.customerPrivacy)
		}
		function p() {
			return !u() || Boolean(window.Shopify.customerPrivacy.userDataCanBeSold())
		}
		function d() {
			return !p()
		}
		function f() {
			if (void 0 === c)
				if (m()) c = o.hostname()
				else {
					for (
						var e = '', t = 0, n = o.hostname().split('.').reverse();
						t < n.length;
						t++
					) {
						var r = n[t]
						e = '' === e ? '.' + r : '.' + r + e
						var a = i.generateShopifyDValue()
						if ((l('_shopify_d', a, 0, e), v('_shopify_d', a)))
							return l('_shopify_d', a, -1, e), void (c = e)
					}
					c = ''
				}
		}
		function v(e, n) {
			var r = t.cookieImpl.read(e)
			return !!r && r === n
		}
		function l(e, n, r, o) {
			var i = { domain: o, path: '/', maxage: r }
			t.cookieImpl.write(e, n, i)
		}
		function m() {
			return -1 !== o.hostname().indexOf('myshopify.com')
		}
		;(t.cookieImpl = {
			parse: function (e) {
				for (var t = {}, n = 0, r = e.split(/ *; */); n < r.length; n++) {
					var o = r[n].split('=')
					try {
						t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || '')
					} catch (e) {}
				}
				return t
			},
			read: function (e) {
				if (t.cookieImpl.enabled())
					return t.cookieImpl.parse(r.virtualDocument().cookie())[e]
			},
			write: function (e, n, o) {
				if (
					(void 0 === o && (o = {}),
					t.cookieImpl.enabled() && t.cookieImpl.allowed())
				) {
					var i = encodeURIComponent(e) + '=' + encodeURIComponent(n)
					o.maxage && (o.expires = new Date(new Date().getTime() + o.maxage)),
						o.path && (i += '; path=' + o.path),
						o.domain && (i += '; domain=' + o.domain),
						o.expires &&
							t.cookieImpl.hasConsent() &&
							(i += '; expires=' + o.expires.toUTCString()),
						o.secure && (i += '; secure'),
						r.virtualDocument().setCookie(i)
				}
			},
			enabled: function () {
				try {
					if (void 0 === r.virtualDocument().cookie()) return !1
					r.virtualDocument().setCookie('cookietest=1')
					var e = -1 !== r.virtualDocument().cookie().indexOf('cookietest=')
					return (
						r
							.virtualDocument()
							.setCookie('cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT'),
						e
					)
				} catch (e) {
					return !1
				}
			},
			allowed: function () {
				var e = t.cookieImpl.read('_cookie_consent')
				if (e)
					try {
						var n = JSON.parse(e)
						if (n && 'non_essential' === n.block) return !1
					} catch (e) {
						return !0
					}
				return !0
			},
			hasConsent: function () {
				return s()
			},
			isPersistentCookie: function () {
				var e = t.cookieImpl.read('_shopify_m')
				return void 0 === e || 'persistent' === e
			},
		}),
			(t.cleanupMyShopifyDotComCookie = function (e) {
				if (m()) {
					var t =
						e + '=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:01 GMT'
					r.virtualDocument().setCookie(t)
				}
			}),
			(t.userCanBeTracked = s),
			(t.hasCustomerPrivacyAPI = u),
			(t.userDataCanBeSold = p),
			(t.userDataCannotBeSold = d),
			(t.isCCPAEnforced = function () {
				return Boolean(
					(u()
						? window.Shopify.customerPrivacy.getRegulation()
						: a.TrackingRegulations.NO_VALUE) === a.TrackingRegulations.CCPA &&
						d()
				)
			}),
			(t.enabled = function () {
				return t.cookieImpl.enabled()
			}),
			(t.allowed = function () {
				return t.cookieImpl.allowed()
			}),
			(t.read = function (e) {
				return t.cookieImpl.read(e)
			}),
			(t.isPersistentCookie = function () {
				return t.cookieImpl.isPersistentCookie()
			}),
			(t.write = function (e, t, n) {
				f(), l(e, t, n ? 31104e6 : 18e5, c)
			}),
			(t.clear = function (e) {
				f(), l(e, '', -1, c)
			}),
			(t.cleanupOverScopedCookies = function () {
				if (m())
					for (
						var e = 0,
							t = [
								'_s',
								'_shopify_fs',
								'_shopify_s',
								'_shopify_sa_p',
								'_shopify_sa_t',
								'_shopify_y',
								'_y',
							];
						e < t.length;
						e++
					) {
						var n =
							t[e] +
							'=; domain=.myshopify.com; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
						r.virtualDocument().setCookie(n)
					}
			}),
			(t.determineCookieDomain = f),
			(t.resetCookieDomain = function () {
				c = void 0
			})
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.virtualDocument = void 0)
		var r = new ((function () {
			function e() {}
			return (
				(e.prototype.cookie = function () {
					return document.cookie
				}),
				(e.prototype.setCookie = function (e) {
					document.cookie = e
				}),
				(e.prototype.body = function () {
					return document.body
				}),
				(e.prototype.referrer = function () {
					return document.referrer
				}),
				(e.prototype.title = function () {
					return document.title
				}),
				(e.prototype.createElement = function (e) {
					return document.createElement(e)
				}),
				(e.prototype.dispatchEvent = function (e) {
					return document.dispatchEvent(e)
				}),
				(e.prototype.querySelector = function (e) {
					return document.querySelector(e)
				}),
				(e.prototype.querySelectorAll = function (e) {
					return document.querySelectorAll(e)
				}),
				(e.prototype.documentElement = function () {
					return document.documentElement
				}),
				(e.prototype.getElementsByTagName = function (e) {
					return document.getElementsByTagName(e)
				}),
				(e.prototype.createCustomEvent = function (e, t) {
					try {
						return new CustomEvent(e, t)
					} catch (r) {
						var n = document.createEvent('CustomEvent')
						return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
					}
				}),
				e
			)
		})())()
		t.virtualDocument = function () {
			return r
		}
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				})
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.EcommerceIntegration = t.ANALYTICS_ADDED_PAYMENT = t.ANALYTICS_PERFORMED_SEARCH = t.ANALYTICS_STARTED_ORDER = t.ANALYTICS_COMPLETED_ORDER = t.ANALYTICS_ADDED_PRODUCT = t.ANALYTICS_VIEWED_PRODUCT_CATEGORY = t.ANALYTICS_VIEWED_PRODUCT = t.ANALYTICS_PAGE_VIEW = t.ANALYTICS_GENERIC_EVENT = void 0)
		var i = n(6),
			a = n(5),
			c = n(3),
			s = n(11),
			u = n(0),
			p = {
				viewedProduct: /^[ _]?viewed[ _]?product[ _]?$/i,
				viewedProductCategory: /^[ _]?viewed[ _]?product[ _]?category[ _]?$/i,
				viewedProductVariant: /^[ _]?viewed[ _]?product[ _]?variant[ _]?$/i,
				addedProduct: /^[ _]?added[ _]?product[ _]?$/i,
				completedOrder: /^[ _]?completed[ _]?order[ _]?$/i,
				startedOrder: /^[ _]?started[ _]?order[ _]?$/i,
				performedSearch: /^[ _]?performed[ _]?search[ _]?$/i,
				addedPayment: /^[ _]?added[ _]?payment[ _]?$/i,
			}
		;(t.ANALYTICS_GENERIC_EVENT = 'genericEvent'),
			(t.ANALYTICS_PAGE_VIEW = 'pageView'),
			(t.ANALYTICS_VIEWED_PRODUCT = 'viewedProduct'),
			(t.ANALYTICS_VIEWED_PRODUCT_CATEGORY = 'viewedProductCategory'),
			(t.ANALYTICS_ADDED_PRODUCT = 'addedProduct'),
			(t.ANALYTICS_COMPLETED_ORDER = 'completedOrder'),
			(t.ANALYTICS_STARTED_ORDER = 'startedOrder'),
			(t.ANALYTICS_PERFORMED_SEARCH = 'performedSearch'),
			(t.ANALYTICS_ADDED_PAYMENT = 'addedPayment')
		var d = (function (e) {
			function t(t, n, r) {
				var o = e.call(this, t, n) || this
				return (
					(o.shopId = void 0),
					(o.checkoutToken = void 0),
					(o.visitToken = void 0),
					(o.uniqueToken = void 0),
					(o.appName = void 0),
					o.wrapTrack(),
					r &&
						((o.shopId = r.shopId),
						(o.appName = r.appName),
						(o.checkoutToken = r.checkoutToken),
						(o.visitToken = r.visitToken),
						(o.uniqueToken = r.uniqToken)),
					o
				)
			}
			return (
				o(t, e),
				(t.prototype.ensureTrackingConsent = function (e, t) {
					u.userCanBeTracked()
						? e()
						: (document.addEventListener(
								s.TrackingConsentEvents.TRACKING_ACCEPTED,
								e
						  ),
						  t())
				}),
				(t.prototype.wrapTrack = function () {
					var e = this.track
					this.track = function (t) {
						var n = t.event,
							r = !1
						for (var o in p) {
							var i = p[o]
							if (this[o] && i.test(n)) {
								this[o].apply(this, [t]), (r = !0)
								break
							}
						}
						r || e.apply(this, Array.prototype.slice.call(arguments))
					}
				}),
				(t.prototype.executeMonorailEvent = function (e, t) {
					var n = e.eventName,
						r = e.eventProperties,
						o = void 0 === r ? void 0 : r,
						i = e.eventId,
						a = void 0 === i ? void 0 : i,
						s = e.schemaId,
						u = void 0 === s ? void 0 : s
					if (
						this.appName &&
						this.appName in c.appNameToEcommerceEventSchemaId
					) {
						var p = {
								shop_id: this.shopId,
								partner_name: this.getEcommerceMetricsTag(),
								event_name: n,
								unique_token: this.uniqueToken,
								visit_token: this.visitToken,
							},
							d = this.getEcommercePixelIds()
						if (
							(d && d.length > 0 && (p.pixel_id = d[0]),
							o && (p.event_properties = o),
							this.checkoutToken && (p.checkout_token = this.checkoutToken),
							a && (p.event_id = a),
							t({
								schemaId: u || c.appNameToEcommerceEventSchemaId[this.appName],
								payload: p,
							}),
							n in c.ecommerceEventNameSchemaId)
						) {
							var f = {
								shop_id: this.shopId,
								partner_name: this.getEcommerceMetricsTag(),
							}
							t({ schemaId: c.ecommerceEventNameSchemaId[n], payload: f })
						}
					}
				}),
				(t.prototype.addMonorailBatchEvent = function (e) {
					this.executeMonorailEvent(e, a.addBatchEvent)
				}),
				(t.prototype.produceMonorailEvent = function (e) {
					this.executeMonorailEvent(e, function (e) {
						return a.produce([e])
					})
				}),
				t
			)
		})(i.Integration)
		t.EcommerceIntegration = d
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.extractSchemaIdFromEventName = t.pinterestEcommerceEventSchemaId = t.trekkieAssetContextSchemaId = t.customerEventSchemaId = t.ecommerceEventNameSchemaId = t.eventParityTestingSchemaId = t.appNameToEcommerceEventSchemaId = t.appNameToPageViewSchemaId = void 0),
			(t.appNameToPageViewSchemaId = {
				admin: 'trekkie_admin_page_view/1.0',
				appstore: 'trekkie_appstore_page_view/1.2',
				blog: 'trekkie_blog_page_view/1.2',
				brochure: 'trekkie_brochure_page_view/1.2',
				checkout: 'trekkie_checkout_page_view/1.2',
				'compass-web': 'trekkie_compass_web_page_view/1.2',
				docs: 'trekkie_docs_page_view/1.2',
				development: 'edge_test/1.0',
				exchange: 'trekkie_exchange_page_view/1.2',
				handshake: 'trekkie_handshake_page_view/1.0',
				identity: 'trekkie_identity_page_view/1.2',
				'marketing-misc': 'trekkie_marketing_misc_page_view/1.2',
				oberlo: 'trekkie_oberlo_app_page_view/1.0',
				'oberlo-home': 'trekkie_oberlo_home_page_view/1.3',
				'oberlo-courses': 'trekkie_oberlo_courses_page_view/1.0',
				opinions: 'trekkie_opinions_page_view/1.2',
				partners: 'trekkie_partners_page_view/1.2',
				'shopify-ping-web': 'trekkie_shopify_ping_web_page_view/1.0',
				smiley: 'trekkie_smiley_page_view/1.2',
				storefront: 'trekkie_storefront_page_view/1.2',
				testing: 'edge_test/1.0',
				themestore: 'trekkie_themestore_page_view/1.2',
			}),
			(t.appNameToEcommerceEventSchemaId = {
				storefront: 'trekkie_storefront_ecommerce_event_emit/3.0',
				checkout: 'trekkie_checkout_ecommerce_event_emit/3.0',
				test: 'edge_test_ecommerce_event_emit/1.0',
			}),
			(t.eventParityTestingSchemaId =
				'trekkie_integration_parity_event_emit/1.0'),
			(t.ecommerceEventNameSchemaId = {
				addedPayment: 'trekkie_ecommerce_event_emit_added_payment/1.0',
				addedProduct: 'trekkie_ecommerce_event_emit_added_product/1.0',
				completedOrder: 'trekkie_ecommerce_event_emit_completed_order/1.0',
				genericEvent: 'trekkie_ecommerce_event_emit_generic_event/1.0',
				pageView: 'trekkie_ecommerce_event_emit_page_view/1.0',
				performedSearch: 'trekkie_ecommerce_event_emit_performed_search/1.0',
				viewedProductCategory:
					'trekkie_ecommerce_event_emit_product_category_view/1.0',
				viewedProduct: 'trekkie_ecommerce_event_emit_product_view/1.0',
				startedOrder: 'trekkie_ecommerce_event_emit_started_order/1.0',
			}),
			(t.customerEventSchemaId = 'trekkie_customer_events/2.0'),
			(t.trekkieAssetContextSchemaId = 'trekkie_asset_context/1.0'),
			(t.pinterestEcommerceEventSchemaId =
				'trekkie_pinterest_ecommerce_event_emit/1.0'),
			(t.extractSchemaIdFromEventName = function (e) {
				var t = e.toLowerCase()
				if (
					0 === t.lastIndexOf('monorail://') &&
					t.length > 'monorail://'.length
				)
					return t.substr('monorail://'.length)
			})
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.isShopifyDotCom = t.search = t.protocol = t.port = t.pathname = t.origin = t.setHref = t.href = t.hostname = t.host = t.hash = void 0)
		var r = n(9)
		function o() {
			return r.virtualWindow().location().hostname
		}
		;(t.hash = function () {
			return r.virtualWindow().location().hash
		}),
			(t.host = function () {
				return r.virtualWindow().location().host
			}),
			(t.hostname = o),
			(t.href = function () {
				return r.virtualWindow().location().href
			}),
			(t.setHref = function (e) {
				r.virtualWindow().location().href = e
			}),
			(t.origin = function () {
				var e = r.virtualWindow().location()
				return e.origin
					? e.origin
					: e.protocol + '//' + e.hostname + (e.port ? ':' + e.port : '')
			}),
			(t.pathname = function () {
				return r.virtualWindow().location().pathname
			}),
			(t.port = function () {
				return r.virtualWindow().location().port
			}),
			(t.protocol = function () {
				return r.virtualWindow().location().protocol
			}),
			(t.search = function () {
				return r.virtualWindow().location().search
			}),
			(t.isShopifyDotCom = function (e) {
				return null !== (e = e || o()).match(/(^|\.)shopify\.com$/)
			})
	},
	function (e, t, n) {
		'use strict'
		var r =
			(this && this.__spreadArrays) ||
			function () {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++)
					e += arguments[t].length
				var r = Array(e),
					o = 0
				for (t = 0; t < n; t++)
					for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++)
						r[o] = i[a]
				return r
			}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.produce = t.flushBatchEvents = t.addBatchEvent = t.setMonorailRegion = t.batchEndpoints = void 0),
			(t.batchEndpoints = {
				global: {
					url: 'https://monorail-edge.shopifysvc.com/unstable/produce_batch',
				},
				staging: {
					url:
						'https://monorail-edge-staging.shopifycloud.com/unstable/produce_batch',
				},
				canada: {
					url:
						'https://monorail-edge-ca.shopifycloud.com/unstable/produce_batch',
				},
			})
		var o = t.batchEndpoints.global,
			i = new Array()
		function a(e, t) {
			if (
				window &&
				window.navigator &&
				'function' == typeof window.navigator.sendBeacon &&
				'function' == typeof window.Blob &&
				-1 ===
					window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') &&
				-1 === window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_')
			) {
				var n = new window.Blob([t], { type: 'text/plain' })
				if (window.navigator.sendBeacon(e, n)) return !0
			}
			var r = new XMLHttpRequest()
			try {
				r.open('POST', e),
					r.setRequestHeader('Content-Type', 'text/plain'),
					r.send(t)
			} catch (e) {
				console.log(e)
			}
			return !1
		}
		;(t.setMonorailRegion = function (e) {
			t.batchEndpoints.hasOwnProperty(e) && (o = t.batchEndpoints[e])
		}),
			(t.addBatchEvent = function (e) {
				var t = new Date().getTime(),
					n = {
						schema_id: e.schemaId,
						payload: e.payload,
						metadata: { event_created_at_ms: t },
					}
				i.push(n)
			}),
			(t.flushBatchEvents = function () {
				var e = r(i)
				;(i.length = 0),
					(function (e) {
						if (0 === e.length) return
						var t = { event_sent_at_ms: new Date().getTime() },
							n = {}
						;(n.metadata = t), (n.events = e), a(o.url, JSON.stringify(n))
					})(e)
			}),
			(t.produce = function (e) {
				if (0 !== e.length) {
					var t = new Date().getTime(),
						n = { event_sent_at_ms: t },
						r = {}
					;(r.metadata = n), (r.events = [])
					for (var i = 0, c = e; i < c.length; i++) {
						var s = c[i]
						r.events.push({
							schema_id: s.schemaId,
							payload: s.payload,
							metadata: { event_created_at_ms: t },
						})
					}
					return a(o.url, JSON.stringify(r))
				}
			})
	},
	function (e, t, n) {
		'use strict'
		var r =
			(this && this.__assign) ||
			function () {
				return (r =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var o in (t = arguments[n]))
								Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
						return e
					}).apply(this, arguments)
			}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.Integration = void 0)
		var o = (function () {
			function e(e, t) {
				;(this.options = {}), (this.options = r(r({}, e), t))
			}
			return (
				(e.flatten = function (e) {
					var t = r({}, e)
					return (t.properties = {}), r(r({}, t), e.properties)
				}),
				(e.isEqual = function (e, t) {
					for (var n in e) if (e[n] !== t[n]) return !1
					for (var n in t) if (t[n] !== e[n]) return !1
					return !0
				}),
				e
			)
		})()
		t.Integration = o
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.internalError = t.setGlobalSerializedAppConfig = t.requestImpl = void 0)
		var r = n(4),
			o = n(10)
		t.requestImpl = {
			img: function (e) {
				var t = new Image(1, 1)
				return (t.src = e), (t.style.display = 'none'), t
			},
			queryString: function (e) {
				var t = []
				for (var n in e)
					('number' == typeof e[n] || e[n]) &&
						(('object' == typeof e[n] && 0 === Object.keys(e[n]).length) ||
							t.push(encodeURIComponent(n) + '=' + encodeURIComponent(e[n])))
				if (
					((function (e) {
						for (var t = e.length; t > 0; --t) {
							var n = Math.floor(Math.random() * t),
								r = e[n]
							;(e[n] = e[t - 1]), (e[t - 1] = r)
						}
					})(t),
					t.length > 1 && 0 === t[0].indexOf('event='))
				) {
					var r = t[0]
					;(t[0] = t[1]), (t[1] = r)
				}
				return t.join('&')
			},
		}
		var i = void 0
		;(t.setGlobalSerializedAppConfig = function (e) {
			i = e
		}),
			(t.internalError = function (e, n) {
				var a = {
					name: e.name,
					line: e.lineNumber || e.line,
					script: e.fileName || e.sourceURL || e.script,
					stack: e.stackTrace || e.stack || e.description,
					message: e.message,
					url: r.href(),
					context: void 0 !== n ? n : null,
					appConfig: i || null,
				}
				o.emitError('internalError', t.requestImpl.queryString(a))
			})
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.hexTime = t.buildToken = t.FirstSeenManager = t.UniqueIdManager = t.firstSeenKey = t.longTermKey = t.deprecatedLongTermKey = t.shortTermKey = t.deprecatedShortTermKey = void 0)
		var r = n(0),
			o = n(10),
			i = n(9)
		;(t.deprecatedShortTermKey = '_s'),
			(t.shortTermKey = '_shopify_s'),
			(t.deprecatedLongTermKey = '_y'),
			(t.longTermKey = '_shopify_y'),
			(t.firstSeenKey = '_shopify_fs')
		var a = (function () {
			function e(e) {
				this.isServerSideCookieWritingEnabled = e
			}
			return (
				(e.prototype.fetchOrSet = function (e, t, n, i) {
					if (!r.enabled()) return '00000000-0000-0000-4000-000000000000'
					var a = r.read(n) || r.read(t),
						c = !i
					a ||
						((a = s()),
						(c = !0),
						i && o.emitMetric('serverSideCookieNotSet_' + n, 1)),
						c && (r.write(t, a, e), r.write(n, a, e))
					var u = r.read(n) || r.read(t)
					return void 0 === u ? '00000000-0000-0000-5000-000000000000' : u
				}),
				(e.prototype.shortTerm = function () {
					return this.fetchOrSet(
						!1,
						t.deprecatedShortTermKey,
						t.shortTermKey,
						!1
					)
				}),
				(e.prototype.longTerm = function () {
					return this.fetchOrSet(
						!0,
						t.deprecatedLongTermKey,
						t.longTermKey,
						this.isServerSideCookieWritingEnabled
					)
				}),
				e
			)
		})()
		t.UniqueIdManager = a
		var c = (function () {
			function e() {}
			return (
				(e.prototype.fetchOrSet = function (e) {
					var t = r.read(e) || new Date().toJSON()
					return r.write(e, t, !0), t
				}),
				(e.prototype.firstSeen = function () {
					return this.fetchOrSet(t.firstSeenKey)
				}),
				e
			)
		})()
		function s() {
			var e = ''
			try {
				var t = i.virtualWindow().crypto(),
					n = new Uint16Array(31)
				t.getRandomValues(n)
				var r = 0
				e = 'xxxx-4xxx-xxxx-xxxxxxxxxxxx'
					.replace(/[x]/g, function (e) {
						for (var t = [], o = 1; o < arguments.length; o++)
							t[o - 1] = arguments[o]
						var i = n[r] % 16,
							a = 'x' === e ? i : (3 & i) | 8
						return r++, a.toString(16)
					})
					.toUpperCase()
			} catch (t) {
				e = 'xxxx-4xxx-xxxx-xxxxxxxxxxxx'
					.replace(/[x]/g, function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n]
						var r = (16 * Math.random()) | 0,
							o = 'x' === e ? r : (3 & r) | 8
						return o.toString(16)
					})
					.toUpperCase()
			}
			return u() + '-' + e
		}
		function u() {
			var e = 0,
				t = 0
			try {
				e = new Date().getTime() >>> 0
			} catch (t) {
				e = new Date().getTime() >>> 0
			}
			try {
				t = performance.now() >>> 0
			} catch (e) {
				t = 0
			}
			var n = Math.abs(e + t)
				.toString(16)
				.toLowerCase()
			return '00000000'.substr(0, 8 - n.length) + n
		}
		;(t.FirstSeenManager = c), (t.buildToken = s), (t.hexTime = u)
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.virtualWindow = void 0)
		var r = new ((function () {
			function e(e) {
				this.nativeWindow = e
			}
			return (
				(e.prototype.location = function () {
					return this.nativeWindow.location
				}),
				(e.prototype.userAgent = function () {
					return this.nativeWindow.navigator.userAgent
				}),
				(e.prototype.crypto = function () {
					return this.nativeWindow.crypto || this.nativeWindow.msCrypto
				}),
				(e.prototype.top = function () {
					return this.nativeWindow.top ? new e(this.nativeWindow.top) : void 0
				}),
				(e.prototype.parent = function () {
					return this.nativeWindow.parent
						? new e(this.nativeWindow.parent)
						: void 0
				}),
				(e.prototype.postMessage = function (e, t, n) {
					this.nativeWindow.postMessage(e, t, n)
				}),
				(e.prototype.addEventListener = function (e, t, n) {
					this.nativeWindow.addEventListener(e, t, n)
				}),
				(e.prototype.performance = function () {
					return this.nativeWindow.performance
				}),
				(e.prototype.onload = function () {
					throw new Error(
						'Do not use window.onload due to compatibility reasons. Use addEventListener instead of window.onload'
					)
				}),
				(e.prototype.supportsNavigationTiming = function () {
					return 'PerformanceNavigationTiming' in this.nativeWindow
				}),
				(e.prototype.supportsPaintTiming = function () {
					return 'PerformancePaintTiming' in this.nativeWindow
				}),
				e
			)
		})())(window)
		t.virtualWindow = function () {
			return r
		}
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.emitError = t.emitMetric = t.setMetricsOptions = t.errorsSchemaId = t.metricsSchemaId = void 0)
		var r = n(5),
			o = n(7)
		;(t.metricsSchemaId = 'trekkie_metrics/1.0'),
			(t.errorsSchemaId = 'trekkie_errors/1.0')
		var i = void 0
		;(t.setMetricsOptions = function (e) {
			i = e
		}),
			(t.emitMetric = function (e, n) {
				try {
					var a = { metric_name: e, metric_value: n }
					i && (a.shop_id = i),
						r.produce([{ schemaId: t.metricsSchemaId, payload: a }])
				} catch (e) {
					o.internalError(e)
				}
			}),
			(t.emitError = function (e, n) {
				try {
					var a = { error_name: e }
					i && (a.shop_id = i),
						n && (a.metadata = n),
						r.produce([{ schemaId: t.errorsSchemaId, payload: a }])
				} catch (e) {
					o.internalError(e)
				}
			})
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 })
		var r = n(12)
		Object.defineProperty(t, 'TrackingConsentEvents', {
			enumerable: !0,
			get: function () {
				return r.TrackingConsentEvents
			},
		})
		var o = n(19)
		Object.defineProperty(t, 'TrackingRegulations', {
			enumerable: !0,
			get: function () {
				return o.TrackingRegulations
			},
		})
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.TrackingConsentEvents = void 0),
			(function (e) {
				e.TRACKING_ACCEPTED = 'trackingConsentAccepted'
			})(t.TrackingConsentEvents || (t.TrackingConsentEvents = {}))
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.enabledIntegrations = t.exportVar = void 0),
			(t.exportVar = 'trekkie'),
			(t.enabledIntegrations = [])
		var r = n(20)
		t.enabledIntegrations.push(['Performance', r.Performance])
		var o = n(22)
		t.enabledIntegrations.push(['Facebook Pixel', o.FacebookPixel])
		var i = n(23)
		t.enabledIntegrations.push(['Google Analytics', i.GoogleAnalytics])
		var a = n(24)
		t.enabledIntegrations.push(['Pinterest Pixel', a.Pinterest])
		var c = n(25)
		t.enabledIntegrations.push(['Snap Pixel', c.Snap])
		var s = n(26)
		t.enabledIntegrations.push(['TikTok Pixel', s.TikTok])
		var u = n(14)
		t.enabledIntegrations.push(['Session Attribution', u.SessionAttribution])
		var p = n(27)
		t.enabledIntegrations.push(['Google Gtag Pixel', p.GoogleGtag])
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				})
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.CampaignManager = t.TimestampManager = t.SessionAttribution = t.orderCompletionEventKey = t.sessionAttributionTimestampKey = t.sessionAttributionParamsKey = t.sessionAttributionMonorailSchema = t.sessionAttributionEventKey = void 0)
		var i = n(0),
			a = n(8),
			c = n(6),
			s = n(4),
			u = n(1)
		;(t.sessionAttributionEventKey = 'session-attribution'),
			(t.sessionAttributionMonorailSchema = 'trekkie_session_attribution/1.2'),
			(t.sessionAttributionParamsKey = '_shopify_sa_p'),
			(t.sessionAttributionTimestampKey = '_shopify_sa_t'),
			(t.orderCompletionEventKey = 'Completed Order')
		var p = (function (e) {
			function n(t, n, r) {
				var o = e.call(this, {}, t) || this
				return (
					(o.trekkie = n),
					(o.timestampManager = new d()),
					(o.campaignManager = new f()),
					setTimeout(function () {
						o.attributeSession()
					}, 0),
					r(),
					o
				)
			}
			return (
				o(n, e),
				(n.prototype.isEssential = function () {
					return !0
				}),
				(n.prototype.identify = function (e) {}),
				(n.prototype.page = function (e) {}),
				(n.prototype.track = function (e) {
					var n = this
					e.event === t.sessionAttributionEventKey
						? setTimeout(function () {
								n.trekkie.emit(
									t.sessionAttributionEventKey,
									e,
									t.sessionAttributionMonorailSchema
								)
						  }, 0)
						: e.event === t.orderCompletionEventKey &&
						  (i.clear(t.sessionAttributionTimestampKey),
						  i.clear(t.sessionAttributionParamsKey))
				}),
				(n.prototype.attributeSession = function () {
					var e = new Date(),
						n = s.search(),
						r = this.campaignManager.constructCanonicalUtmString(n)
					if (
						this.timestampManager.isValid(e) &&
						this.campaignManager.isValid(r)
					);
					else {
						var o = ''
						try {
							o = e.toJSON()
						} catch (e) {}
						this.track({
							event: t.sessionAttributionEventKey,
							properties: {
								sa_url: s.href(),
								sa_referrer: u.virtualDocument().referrer(),
								sa_utm_string: r,
								sa_token: a.buildToken(),
								over_30_minutes: !this.timestampManager.isWithin30MinuteCutOff(
									e
								),
								cross_utc_midnight:
									this.timestampManager.isWithin30MinuteCutOff(e) &&
									!this.timestampManager.isSameDayAs(e),
								new_campaign: !this.campaignManager.isValid(r),
								prev_campaign_params: this.campaignManager.fetch(),
								last_extended: this.timestampManager.fetch(),
								local_now: o,
							},
							eventId: a.buildToken(),
						})
					}
					this.timestampManager.extend(e.toJSON()),
						this.campaignManager.extend(r)
				}),
				n
			)
		})(c.Integration)
		t.SessionAttribution = p
		var d = (function () {
			function e() {}
			return (
				(e.prototype.fetch = function () {
					return i.read(t.sessionAttributionTimestampKey)
				}),
				(e.prototype.extend = function (e) {
					i.cleanupMyShopifyDotComCookie(t.sessionAttributionTimestampKey),
						i.write(t.sessionAttributionTimestampKey, e, !1)
				}),
				(e.prototype.isValid = function (e) {
					return this.isWithin30MinuteCutOff(e) && this.isSameDayAs(e)
				}),
				(e.prototype.isWithin30MinuteCutOff = function (e) {
					return this.testStoredTimestamp(function (e, t) {
						return t.getTime() - e.getTime() <= 18e5
					}, e)
				}),
				(e.prototype.isSameDayAs = function (e) {
					return this.testStoredTimestamp(function (e, t) {
						return e.getUTCDate() === t.getUTCDate()
					}, e)
				}),
				(e.prototype.testStoredTimestamp = function (e, t) {
					var n = this.fetch()
					if (!n) return !1
					try {
						return e(new Date(n), t)
					} catch (e) {
						return !1
					}
				}),
				e
			)
		})()
		t.TimestampManager = d
		var f = (function () {
			function e() {}
			return (
				(e.prototype.fetch = function () {
					return i.read(t.sessionAttributionParamsKey)
				}),
				(e.prototype.extend = function (e) {
					'' === e && (e = this.fetch() || ''),
						i.cleanupMyShopifyDotComCookie(t.sessionAttributionParamsKey),
						i.write(t.sessionAttributionParamsKey, e, !1)
				}),
				(e.prototype.isValid = function (e) {
					return '' === e || this.fetch() === e
				}),
				(e.prototype.constructCanonicalUtmString = function (t) {
					if ('' === t || null == t || '?' === t) return ''
					t = '?' === t[0] ? t.slice(1) : t
					for (var n = {}, r = 0, o = t.split('&'); r < o.length; r++) {
						var i = o[r].split('=')
						if (!(i.length < 2)) {
							var a = this.decodeReplacingPlus(i[0]),
								c = this.decodeReplacingPlus(i[1])
							c && a && (n[a] = c)
						}
					}
					return e.acceptedQueryStringParams
						.filter(function (e) {
							return n[e]
						})
						.map(function (e) {
							return encodeURIComponent(e) + '=' + encodeURIComponent(n[e])
						})
						.join('&')
				}),
				(e.prototype.decodeReplacingPlus = function (e) {
					return decodeURIComponent(e.replace(/\+/g, ' '))
				}),
				(e.acceptedQueryStringParams = [
					'utm_source',
					'utm_medium',
					'utm_campaign',
					'utm_term',
					'utm_content',
					'ref',
					'gclid',
					'fbclid',
					'shpxid',
				]),
				e
			)
		})()
		t.CampaignManager = f
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.replayAnalyticsQueue = void 0)
		var r = n(16),
			o = n(13),
			i = n(7)
		function a(e, t) {
			for (var n = 0, r = t; n < r.length; n++) {
				e[(c = (a = r[n])[0])] === e.ready && e[c].apply(e, a.slice(1))
			}
			for (var o = 0, i = t; o < i.length; o++) {
				var a, c
				e[(c = (a = i[o])[0])] && e[c] !== e.ready && e[c].apply(e, a.slice(1))
			}
		}
		t.replayAnalyticsQueue = a
		try {
			var c = window[o.exportVar].config
			if (c) {
				i.setGlobalSerializedAppConfig(JSON.stringify(c))
				var s = window[o.exportVar],
					u = (window.trekkie = new r.Tricorder(c, function () {
						;(window[o.exportVar] = u),
							(window._visit = {
								tag: function () {},
								multitrackToken: function () {
									return u.trekkie.defaultAttributes.uniqToken
								},
							}),
							(u.user = function () {
								return {
									traits: function () {
										return { uniqToken: u.trekkie.defaultAttributes.uniqToken }
									},
								}
							}),
							a(u, s)
					}))
			}
		} catch (e) {
			i.internalError(e)
		}
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.Tricorder = void 0)
		var r = n(17),
			o = n(13),
			i = n(7),
			a = n(1),
			c = n(4),
			s = n(5),
			u = n(12),
			p = n(0),
			d = n(8),
			f = n(29),
			v = n(3),
			l = /^https?:\/\//,
			m = (function () {
				function e(e, t) {
					var n = this
					this.integrations = []
					var r = e.Trekkie.isPixelGateEnabled
					this.logAssetContext(e),
						r &&
						this.hasLoadFeatureScript() &&
						window.Shopify &&
						window.Shopify.loadFeatures
							? window.Shopify.loadFeatures(
									[{ name: 'consent-tracking-api', version: '0.1' }],
									function (r) {
										if (r) throw new Error(r)
										n.initialize(e, t)
									}
							  )
							: this.initialize(e, t)
				}
				return (
					(e.prototype.logAssetContext = function (e) {
						var t, n, r
						s.addBatchEvent({
							schemaId: v.trekkieAssetContextSchemaId,
							payload: {
								build_id: '2dcbc6dadc5a8c18fc9d5b99405052e2ae16516a',
								page_url: window.location.href,
								app_name:
									null === (t = e.Trekkie) || void 0 === t ? void 0 : t.appName,
								shop_id:
									null ===
										(r =
											null === (n = e.Trekkie) || void 0 === n
												? void 0
												: n.defaultAttributes) || void 0 === r
										? void 0
										: r.shopId,
							},
						})
					}),
					(e.prototype.hasLoadFeatureScript = function () {
						var e = document.querySelectorAll(
							'[data-source-attribution="shopify.loadfeatures"]'
						)
						return Boolean(e.length)
					}),
					(e.prototype.initialize = function (e, t) {
						var n = this
						;(this.trekkie = new r.Trekkie(e.Trekkie, function () {
							setTimeout(function () {
								n.loadIntegrations(o.enabledIntegrations, e, n.trekkie, t)
							}, 0)
						})),
							this.integrations[0] !== this.trekkie &&
								this.integrations.unshift(this.trekkie)
					}),
					(e.prototype.loadIntegrations = function (e, t, n, r) {
						for (
							var o = this.waitFor(e.length, function () {
									try {
										r(), s.flushBatchEvents()
									} catch (e) {
										i.internalError(e)
									}
								}),
								a = 0,
								c = e;
							a < c.length;
							a++
						) {
							var u = c[a]
							try {
								var p = t[u[0]]
								if (p && 'object' == typeof p) {
									var d = new (0, u[1])(p, n, o)
									this.integrations.push(d),
										d instanceof f.CustomerEventsObserver &&
											window.Shopify &&
											window.Shopify.events &&
											window.Shopify.events.subscribe(d)
								} else o()
							} catch (e) {
								o(), i.internalError(e)
							}
						}
					}),
					(e.prototype.identify = function (e, t, n) {
						void 0 === e && (e = ''),
							void 0 === t && (t = {}),
							(n = n || d.buildToken())
						try {
							e instanceof Object && ((t = e), (e = ''))
							for (var r = 0, o = this.integrations; r < o.length; r++) {
								o[r].identify({ id: e, properties: t, eventId: n })
							}
						} catch (e) {
							i.internalError(e)
						}
					}),
					(e.prototype.gatedPage = function (e, t, n) {
						void 0 === e && (e = ''), void 0 === t && (t = {})
						try {
							for (var r = 0, o = this.integrations; r < o.length; r++) {
								var a = o[r]
								a.isEssential() || a.page(this.generatePageObject(e, t, n))
							}
						} catch (e) {
							i.internalError(e)
						}
					}),
					(e.prototype.page = function (e, t, n) {
						var r = this
						void 0 === e && (e = ''),
							void 0 === t && (t = {}),
							(n = n || d.buildToken())
						try {
							e instanceof Object && ((t = e), (e = ''))
							for (var o = 0, a = this.integrations; o < a.length; o++) {
								var c = a[o]
								;(!c.isEssential() && p.hasCustomerPrivacyAPI()) ||
									c.page(this.generatePageObject(e, t, n))
							}
						} catch (e) {
							i.internalError(e)
						}
						p.hasCustomerPrivacyAPI() &&
							(p.userCanBeTracked()
								? this.gatedPage(e, t, n)
								: document.addEventListener(
										u.TrackingConsentEvents.TRACKING_ACCEPTED,
										function () {
											r.gatedPage(e, t, n)
										}
								  ))
					}),
					(e.prototype.gatedTrack = function (e, t, n) {
						void 0 === e && (e = ''), void 0 === t && (t = {})
						try {
							for (var r = 0, o = this.integrations; r < o.length; r++) {
								var a = o[r]
								a.isEssential() ||
									a.track({ event: e, properties: t, eventId: n })
							}
						} catch (e) {
							i.internalError(e)
						}
					}),
					(e.prototype.track = function (e, t, n) {
						var r = this
						void 0 === e && (e = ''),
							void 0 === t && (t = {}),
							(n = n || d.buildToken())
						try {
							e instanceof Object && ((t = e), (e = ''))
							for (var o = 0, a = this.integrations; o < a.length; o++) {
								var c = a[o]
								;(!c.isEssential() && p.hasCustomerPrivacyAPI()) ||
									c.track({ event: e, properties: t, eventId: n })
							}
						} catch (e) {
							i.internalError(e)
						}
						p.hasCustomerPrivacyAPI() &&
							(p.userCanBeTracked()
								? this.gatedTrack(e, t, n)
								: document.addEventListener(
										u.TrackingConsentEvents.TRACKING_ACCEPTED,
										function () {
											r.gatedTrack(e, t, n)
										}
								  ))
					}),
					(e.prototype.ready = function (e) {
						try {
							e()
						} catch (e) {
							i.internalError(e)
						}
					}),
					(e.prototype.waitFor = function (e, t) {
						return 0 === e
							? (setTimeout(t, 0), function () {})
							: function () {
									0 === --e && setTimeout(t, 0)
							  }
					}),
					(e.prototype.generatePageObject = function (e, t, n) {
						var r = c.href(),
							o = r.indexOf('?')
						return (
							(o = (r = -1 === o ? '' : r.slice(o)).indexOf('#')),
							(r = '?' === (r = -1 === o ? r : r.slice(0, o)) ? '' : r),
							{
								name: e,
								referrer: a.virtualDocument().referrer(),
								path: c.pathname(),
								search: r,
								title: a.virtualDocument().title(),
								url: this.url(),
								properties: t,
								eventId: n,
							}
						)
					}),
					(e.prototype.canonical = function () {
						for (
							var e = a.virtualDocument().getElementsByTagName('link'), t = 0;
							t < e.length;
							t++
						) {
							var n = e[t]
							if ('canonical' === n.getAttribute('rel')) {
								var r = n.getAttribute('href')
								if (!l.test(r)) continue
								if (r.replace(l, '').length <= 5) continue
								return r
							}
						}
						return ''
					}),
					(e.prototype.url = function () {
						var e = this.canonical()
						if (e) return e.indexOf('?') > 0 ? e : e + c.search()
						var t = c.href(),
							n = t.indexOf('#')
						return -1 === n ? t : t.slice(0, n)
					}),
					e
				)
			})()
		t.Tricorder = m
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				}),
			i =
				(this && this.__assign) ||
				function () {
					return (i =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var o in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
							return e
						}).apply(this, arguments)
				}
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.Trekkie = void 0)
		var a = n(6),
			c = n(3),
			s = n(8),
			u = n(5),
			p = n(10),
			d = n(0),
			f = (function (e) {
				function t(t, n) {
					var r = e.call(this, {}, t) || this
					return r.init(t, n), r
				}
				return (
					o(t, e),
					(t.prototype.isEssential = function () {
						return !0
					}),
					(t.prototype.init = function (e, t) {
						var n = 'global'
						e.monorailRegion && (n = e.monorailRegion),
							e.development && (n = 'staging'),
							u.setMonorailRegion(n),
							window.addEventListener('beforeunload', function (e) {
								u.flushBatchEvents()
							}),
							e.defaultAttributes &&
								p.setMetricsOptions(e.defaultAttributes.shopId)
						var r = !1
						e.isServerSideCookieWritingEnabled &&
							(r = e.isServerSideCookieWritingEnabled)
						var o = new s.UniqueIdManager(r),
							a = new s.FirstSeenManager()
						;(this.defaultAttributes = {
							appName: e.appName,
							uniqToken: o.longTerm(),
							visitToken: o.shortTerm(),
							microSessionId: s.buildToken(),
							microSessionCount: 0,
							firstSeen: a.firstSeen(),
							isPersistentCookie: d.isPersistentCookie(),
						}),
							e.defaultAttributes &&
								(this.defaultAttributes = i(
									i({}, e.defaultAttributes),
									this.defaultAttributes
								)),
							d.cleanupOverScopedCookies(),
							t()
					}),
					(t.prototype.identify = function (e) {}),
					(t.prototype.page = function (e) {
						var t = c.appNameToPageViewSchemaId[this.defaultAttributes.appName]
						this.emit('page', e, t)
					}),
					(t.prototype.track = function (e) {
						var t = c.extractSchemaIdFromEventName(e.event)
						this.emit('track', e, t)
					}),
					(t.prototype.emit = function (e, t, n) {
						++this.defaultAttributes.microSessionCount,
							(t = a.Integration.flatten(t))
						var r = i(i({}, t), this.defaultAttributes)
						;(r.eventType = e), n && u.produce([{ schemaId: n, payload: r }])
					}),
					t
				)
			})(a.Integration)
		t.Trekkie = f
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.generateShopifyDValue = void 0),
			(t.generateShopifyDValue = function () {
				return new Date().toJSON()
			})
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.TrackingRegulations = void 0),
			(function (e) {
				;(e.GDPR = 'GDPR'), (e.CCPA = 'CCPA'), (e.NO_VALUE = '')
			})(t.TrackingRegulations || (t.TrackingRegulations = {}))
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				}),
			i =
				(this && this.__assign) ||
				function () {
					return (i =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var o in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
							return e
						}).apply(this, arguments)
				}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.Performance = void 0)
		var a = n(6),
			c = n(21),
			s = (function (e) {
				function t(n, r, o) {
					var i = e.call(this, t.defaultOptions, n) || this
					return (i.trekkie = r), o(), i
				}
				return (
					o(t, e),
					(t.prototype.identify = function (e) {}),
					(t.prototype.isEssential = function () {
						return !0
					}),
					(t.prototype.page = function (e) {
						var t = {
								event: 'navigation_performance_metrics',
								properties: a.Integration.flatten(e),
								eventId: e.eventId,
							},
							n = this.options
						n.navigationTimingApiMeasurementsEnabled &&
							n.navigationTimingApiMeasurementsSampleRate >= Math.random() &&
							((t.properties = i(i({}, this.pagePerformance()), t.properties)),
							this.trekkie.track(t))
					}),
					(t.prototype.track = function (e) {}),
					(t.prototype.pagePerformance = function () {
						return new c.PagePerformance().collect()
					}),
					(t.defaultOptions = {
						navigationTimingApiMeasurementsEnabled: !0,
						trekkieTrackSampleRate: 0,
						navigationTimingApiMeasurementsSampleRate: 0.001,
					}),
					t
				)
			})(a.Integration)
		t.Performance = s
	},
	function (e, t, n) {
		'use strict'
		var r =
			(this && this.__spreadArrays) ||
			function () {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++)
					e += arguments[t].length
				var r = Array(e),
					o = 0
				for (t = 0; t < n; t++)
					for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++)
						r[o] = i[a]
				return r
			}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.PagePerformance = t.upperCaseRegex = void 0)
		var o = n(9)
		t.upperCaseRegex = /([A-Z])/g
		var i = (function () {
			function e() {}
			return (
				(e.prototype.timing = function () {
					return (
						!(
							!o.virtualWindow().performance() ||
							!o.virtualWindow().performance().timing
						) && o.virtualWindow().performance().timing
					)
				}),
				(e.prototype.getEntry = function (e, t) {
					var n = o.virtualWindow().performance().getEntriesByType(e)
					return t
						? n.find(function (e) {
								return e.name === t
						  }) || !1
						: n[0]
				}),
				(e.prototype.collect = function () {
					var t = {}
					if (o.virtualWindow().supportsNavigationTiming() && !a())
						try {
							if (o.virtualWindow().supportsPaintTiming()) {
								for (var n = 0, r = e.paintAttrs; n < r.length; n++) {
									var i = r[n],
										c = this.getEntry('paint', this.toEntryName(i))
									c && (t[e.paintMetricPrefix + i] = c.startTime)
								}
								;(t[e.paintMetricPrefix + 'source'] = 'PerformancePaintTiming'),
									(t[e.paintMetricPrefix + 'valid'] = !0)
							}
							for (
								var s = this.getEntry('navigation'),
									u = 0,
									p = e.navigationAttrs;
								u < p.length;
								u++
							) {
								;(i = p[u]) in s && (t[e.navigationMetricPrefix + i] = s[i])
							}
							;(t[
								e.navigationMetricPrefix + 'timeOrigin'
							] = o.virtualWindow().performance().timeOrigin),
								(t[e.navigationMetricPrefix + 'source'] =
									'PerformanceNavigationTiming'),
								(t[e.navigationMetricPrefix + 'valid'] = !0)
						} catch (e) {
							return this.invalidPerfObj()
						}
					else {
						if (!this.timing() || a()) return this.invalidPerfObj()
						try {
							for (
								var d = this.timing(), f = 0, v = e.timingAttrs;
								f < v.length;
								f++
							) {
								i = v[f]
								t[e.navigationMetricPrefix + i] = d[i]
							}
							;(t[e.navigationMetricPrefix + 'source'] = 'PerformanceTiming'),
								(t[e.navigationMetricPrefix + 'valid'] = !0)
						} catch (e) {
							return this.invalidPerfObj()
						}
					}
					return t
				}),
				(e.prototype.invalidPerfObj = function () {
					for (var t = {}, n = 0, r = e.perfAttrs; n < r.length; n++) {
						var o = r[n]
						t[e.navigationMetricPrefix + o] = 0
					}
					return (
						(t[e.navigationMetricPrefix + 'source'] = 'None'),
						(t[e.navigationMetricPrefix + 'valid'] = !1),
						t
					)
				}),
				(e.prototype.toEntryName = function (e) {
					return e.replace(t.upperCaseRegex, function (e) {
						return '-' + e[0].toLowerCase()
					})
				}),
				(e.perfAttrs = [
					'connectEnd',
					'connectStart',
					'domComplete',
					'domContentLoadedEventEnd',
					'domContentLoadedEventStart',
					'domInteractive',
					'domainLookupEnd',
					'domainLookupStart',
					'fetchStart',
					'loadEventEnd',
					'loadEventStart',
					'redirectEnd',
					'redirectStart',
					'requestStart',
					'responseEnd',
					'responseStart',
					'secureConnectionStart',
					'unloadEventEnd',
					'unloadEventStart',
				]),
				(e.timingAttrs = r(e.perfAttrs, ['domLoading', 'navigationStart'])),
				(e.navigationAttrs = r(e.perfAttrs, [
					'decodedBodySize',
					'encodedBodySize',
					'redirectCount',
				])),
				(e.paintAttrs = ['firstPaint', 'firstContentfulPaint']),
				(e.navigationMetricPrefix = 'nt:'),
				(e.paintMetricPrefix = 'pt:'),
				(e.performancePrefixes = [
					e.navigationMetricPrefix,
					e.paintMetricPrefix,
				]),
				(e.prefixRegex = new RegExp(e.performancePrefixes.join('|'))),
				e
			)
		})()
		t.PagePerformance = i
		var a = function () {
			return new RegExp('MSIE 9.0|Firefox/7.0|Firefox/8.0').test(
				o.virtualWindow().userAgent()
			)
		}
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				}),
			i =
				(this && this.__assign) ||
				function () {
					return (i =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var o in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
							return e
						}).apply(this, arguments)
				}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.FacebookPixel = void 0)
		var a = n(14),
			c = n(2),
			s = n(3),
			u = n(1),
			p = n(0),
			d = n(4),
			f = n(5),
			v = (function (e) {
				function t(n, r, o) {
					var c =
						e.call(
							this,
							t.defaultOptions,
							i(i({}, n), { agent: 'shopify' }),
							r.defaultAttributes
						) || this
					return (
						(c.campaignManager = new a.CampaignManager()),
						e.prototype.ensureTrackingConsent.call(
							c,
							function () {
								c.initialize(o)
							},
							o
						),
						c
					)
				}
				return (
					o(t, e),
					(t.prototype.isEssential = function () {
						return !1
					}),
					(t.prototype.identify = function (e) {
						throw new Error('identify is not supported')
					}),
					(t.prototype.page = function (e) {
						window.fbq('track', 'PageView'),
							this.addMonorailBatchEvent({ eventName: c.ANALYTICS_PAGE_VIEW })
					}),
					(t.prototype.track = function (e) {
						var t = {}
						for (var n in e.properties)
							'revenue' === n
								? (t.value = this.formatRevenue(e.properties.revenue))
								: (t[n] = e.properties[n])
					}),
					(t.prototype.viewedProductCategory = function (e) {}),
					(t.prototype.viewedProductVariant = function (e) {}),
					(t.prototype.viewedProduct = function (e) {
						var t = e.properties,
							n = {
								content_ids: this.getProductContentIds(t),
								content_type: this.getProductContentType(t),
								content_name: t.name || '',
								content_category: t.category || '',
								currency: this.getCurrency(t.currency),
								value: this.formatRevenue(t.price),
							}
						window.fbq('track', 'ViewContent', n),
							this.addMonorailBatchEvent({
								eventName: c.ANALYTICS_VIEWED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedProduct = function (e) {
						var t = e.properties,
							n = {
								content_ids: this.getProductContentIds(t),
								content_type: this.getProductContentType(t),
								content_name: t.name || '',
								content_category: t.category || '',
								currency: this.getCurrency(t.currency),
								value: this.formatRevenue(t.price),
								num_items: this.getProductNumItems(t),
							}
						window.fbq('track', 'AddToCart', n),
							this.addMonorailBatchEvent({
								eventName: c.ANALYTICS_ADDED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedPayment = function (e) {
						var t = e.properties,
							n = {
								currency: this.getCurrency(t.currency),
								value: this.formatRevenue(t.total),
							}
						window.fbq('track', 'AddPaymentInfo', n),
							this.addMonorailBatchEvent({
								eventName: c.ANALYTICS_ADDED_PAYMENT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.performedSearch = function (e) {
						var t = { search_string: e.properties.query || '' }
						window.fbq('track', 'Search', t),
							this.addMonorailBatchEvent({
								eventName: c.ANALYTICS_PERFORMED_SEARCH,
								eventProperties: JSON.stringify(t),
							})
					}),
					(t.prototype.startedOrder = function (e) {
						var t = e.properties,
							n = {
								content_ids: this.getOrderContentIds(t),
								content_type: this.getOrderContentType(t),
								currency: this.getCurrency(t.currency),
								value: this.formatRevenue(t.revenue),
								num_items: this.getOrderNumItems(t),
							}
						window.fbq('track', 'InitiateCheckout', n),
							this.addMonorailBatchEvent({
								eventName: c.ANALYTICS_STARTED_ORDER,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.completedOrder = function (e) {
						var t = e.properties,
							n = {
								content_ids: this.getOrderContentIds(t),
								content_type: this.getOrderContentType(t),
								currency: this.getCurrency(t.currency),
								value: this.formatRevenue(t.revenue),
								num_items: this.getOrderNumItems(t),
							}
						if (this.options.conversionsAPIEnabled && t.customerApiData) {
							var r = (this.campaignManager.fetch() || '').match(
									'&?fbclid=([^&]+)'
								),
								o = null
							r && (o = decodeURIComponent(r[1]))
							var a = JSON.stringify(i(i({}, n), { checkoutURL: d.href() })),
								u = {
									schemaId: s.customerEventSchemaId,
									payload: {
										first_name: t.customerApiData.customer.firstName,
										last_name: t.customerApiData.customer.lastName,
										event_id: t.customerApiData.pixelEventID,
										shop_id: this.shopId,
										facebook_pixel_id: t.customerApiData.pixelID,
										event_name: 'Purchase',
										payload: a,
										fbclid: o,
										fbc: p.read('_fbc') || null,
										fbp: p.read('_fbp') || null,
										address: JSON.stringify({
											city: t.customerApiData.address.city,
											province: t.customerApiData.address.province,
											country: t.customerApiData.address.country,
											zip: t.customerApiData.address.zip,
										}),
										phone: t.customerApiData.customer.phoneNumber,
										email: t.customerApiData.customer.emailAddress,
										ccpa_enforced: p.isCCPAEnforced(),
									},
								}
							f.produce([u]),
								window.fbq('track', 'Purchase', n, {
									eventID: t.customerApiData.pixelEventID,
								}),
								this.addMonorailBatchEvent({
									eventName: c.ANALYTICS_COMPLETED_ORDER,
									eventProperties: JSON.stringify(n),
									eventId: t.customerApiData.pixelEventID,
								})
						} else
							window.fbq('track', 'Purchase', n),
								this.addMonorailBatchEvent({
									eventName: c.ANALYTICS_COMPLETED_ORDER,
									eventProperties: JSON.stringify(n),
								})
					}),
					(t.prototype.setLimitedDataUseMode = function () {
						window.fbq('dataProcessingOptions', ['LDU'], 1, 1e3)
					}),
					(t.prototype.initialize = function (e) {
						this.loadFacebookScript()
						for (
							var t = this.options, n = 0, r = this.getFacebookPixelIds(t);
							n < r.length;
							n++
						) {
							var o = r[n]
							p.userDataCannotBeSold() && this.setLimitedDataUseMode(),
								window.fbq('init', o),
								'' !== t.agent && window.fbq('set', 'agent', t.agent, o)
						}
						e()
					}),
					(t.prototype.generateScriptTag = function () {
						var e = u.virtualDocument().createElement('script')
						return (
							(e.async = !0),
							(e.src = 'https://connect.facebook.net/en_US/fbevents.js'),
							e
						)
					}),
					(t.prototype.getFacebookPixelIds = function (e) {
						for (
							var t = [], n = 0, r = e.pixelIds.concat([e.pixelId]);
							n < r.length;
							n++
						) {
							var o = r[n]
							null !== o && '' !== o && t.push(o)
						}
						return t
					}),
					(t.prototype.loadFacebookScript = function () {
						if (!window.fbq || 'function' != typeof window.fbq) {
							;(window.fbq = function () {
								window.fbq.callMethod
									? window.fbq.callMethod.apply(window.fbq, arguments)
									: window.fbq.queue.push(arguments)
							}),
								window._fbq || (window._fbq = window.fbq),
								(window.fbq.push = window.fbq),
								(window.fbq.loaded = !0),
								(window.fbq.version = '2.0'),
								(window.fbq.queue = [])
							var e = u.virtualDocument().getElementsByTagName('script')[0]
							void 0 === e
								? document.head.appendChild(this.generateScriptTag())
								: e.parentNode.insertBefore(this.generateScriptTag(), e)
						}
					}),
					(t.prototype.formatRevenue = function (e) {
						return Number(e || 0).toFixed(2)
					}),
					(t.prototype.getCurrency = function (e) {
						return e || 'USD'
					}),
					(t.prototype.getProductContentIds = function (e) {
						var t = e.productId || e.variantId || e.sku
						return t ? [t] : []
					}),
					(t.prototype.getProductContentType = function (e) {
						return e.productId ? 'product_group' : 'product'
					}),
					(t.prototype.getProductNumItems = function (e) {
						return e.quantity || this.getProductContentIds(e).length
					}),
					(t.prototype.getProductKey = function (e) {
						return e.productId || e.variantId || e.sku
					}),
					(t.prototype.getOrderContentIds = function (e) {
						for (var t = [], n = 0, r = e.products || []; n < r.length; n++) {
							var o = r[n],
								i = this.getProductKey(o)
							if (i) -1 === t.indexOf(i) && t.push(i)
						}
						return t
					}),
					(t.prototype.getOrderContentType = function (e) {
						for (var t = 0, n = e.products || []; t < n.length; t++) {
							if (n[t].productId) return 'product_group'
						}
						return 'product'
					}),
					(t.prototype.getOrderNumItems = function (e) {
						for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
							var o = r[n]
							this.getProductKey(o) && (t += o.quantity || 1)
						}
						return t
					}),
					(t.prototype.getEcommerceMetricsTag = function () {
						return 'facebook'
					}),
					(t.prototype.getEcommercePixelIds = function () {
						var e = this.options
						return this.getFacebookPixelIds(e)
					}),
					(t.defaultOptions = {
						pixelId: '',
						pixelIds: [],
						agent: 'shopify',
						conversionsAPIEnabled: !1,
					}),
					t
				)
			})(c.EcommerceIntegration)
		t.FacebookPixel = v
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				}),
			i =
				(this && this.__assign) ||
				function () {
					return (i =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var o in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
							return e
						}).apply(this, arguments)
				}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.GoogleAnalytics = void 0)
		var a = n(2),
			c = n(4),
			s = n(1),
			u = (function (e) {
				function t(n, r, o) {
					var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this
					return (
						(i.pageCalled = !1),
						(i.ecommerce = !1),
						(i.enhancedEcommerceLoaded = !1),
						i.setWindowGa(),
						e.prototype.ensureTrackingConsent.call(
							i,
							function () {
								i.initialize(o)
							},
							o
						),
						i
					)
				}
				return (
					o(t, e),
					(t.prototype.identify = function (e) {
						throw new Error('identify is not supported')
					}),
					(t.prototype.isEssential = function () {
						return !1
					}),
					(t.prototype.page = function (e) {
						this.overrideDefaultPageProperties(e)
						var t = this.options,
							n = this.path(e),
							r = e.name || e.title,
							o = { page: n, title: r }
						window.ga('set', o)
						var i = { page: n, title: r, location: e.url }
						if (
							(this.pageCalled && delete i.location,
							window.ga('send', 'pageview', i),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_PAGE_VIEW,
								eventProperties: JSON.stringify(i),
							}),
							e.name && t.trackNamedPages)
						) {
							var c = this.convertPageToTrack(e)
							;(c.properties.nonInteraction = !0), this.trackInternal(c)
						}
						this.pageCalled = !0
					}),
					(t.prototype.track = function (e) {}),
					(t.prototype.trackInternal = function (e) {
						var t = this.options,
							n = e.properties,
							r = {
								eventAction: e.event,
								eventCategory: n.category || 'All',
								eventLabel: n.label,
								eventValue: this.formatValue(n.value || n.revenue),
								nonInteraction: !!(n.hasOwnProperty('nonInteraction')
									? n.nonInteraction
									: t.nonInteraction),
							}
						window.ga('send', 'event', r),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_GENERIC_EVENT,
								eventProperties: JSON.stringify(r),
							})
					}),
					(t.prototype.completedOrder = function (e) {
						var t = e.properties,
							n = t.total || t.revenue || 0,
							r = t.orderId,
							o = t.products || []
						if (r) {
							this.ecommerce ||
								(window.ga('require', 'ecommerce'), (this.ecommerce = !0))
							var i = {
								affiliation: t.affiliation,
								shipping: t.shipping,
								revenue: n,
								tax: t.tax,
								id: r,
								currency: this.getCurrency(t.currency),
							}
							window.ga('ecommerce:addTransaction', i)
							for (var c = [], s = 0, u = o; s < u.length; s++) {
								var p = u[s],
									d = this.createProductTrack(t, p),
									f = {
										category: d.category,
										quantity: this.getProductQuantity(d),
										price: d.price,
										name: d.name,
										sku: d.sku || d.variantId,
										id: r,
										currency: this.getCurrency(d.currency),
									}
								window.ga('ecommerce:addItem', f), c.push(f)
							}
							window.ga('ecommerce:send'),
								this.addMonorailBatchEvent({
									eventName: a.ANALYTICS_COMPLETED_ORDER,
									eventProperties: JSON.stringify({ orderInfo: i, items: c }),
								})
						}
					}),
					(t.prototype.viewedProductVariant = function (e) {}),
					(t.prototype.viewedProductEnhanced = function (e) {
						var t = e.properties
						this.loadEnhancedEcommerce(e)
						var n = this.enhancedEcommerceTrackProduct(t)
						window.ga('ec:setAction', 'detail')
						var r = this.pushEnhancedEcommerce(e)
						this.addMonorailBatchEvent({
							eventName: a.ANALYTICS_VIEWED_PRODUCT,
							eventProperties: JSON.stringify({ item: n, event: r }),
						})
					}),
					(t.prototype.addedProductEnhanced = function (e) {
						var t = e.properties
						this.loadEnhancedEcommerce(e)
						var n = this.enhancedEcommerceTrackProduct(t)
						window.ga('ec:setAction', 'add')
						var r = this.pushEnhancedEcommerce(e)
						this.addMonorailBatchEvent({
							eventName: a.ANALYTICS_ADDED_PRODUCT,
							eventProperties: JSON.stringify({ item: n, event: r }),
						})
					}),
					(t.prototype.startedOrderEnhanced = function (e) {
						var t = e.properties,
							n = t.products || []
						this.loadEnhancedEcommerce(e)
						for (var r = [], o = 0, i = n; o < i.length; o++) {
							var c = i[o],
								s = this.createProductTrack(t, c),
								u = this.enhancedEcommerceTrackProduct(s)
							r.push(u)
						}
						var p = t.step || 1
						window.ga('ec:setAction', 'checkout', { step: p })
						var d = this.pushEnhancedEcommerce(e)
						this.addMonorailBatchEvent({
							eventName: a.ANALYTICS_STARTED_ORDER,
							eventProperties: JSON.stringify({
								items: r,
								checkoutStep: p,
								event: d,
							}),
						})
					}),
					(t.prototype.completedOrderEnhanced = function (e) {
						var t = e.properties,
							n = t.total || t.revenue || 0,
							r = t.orderId,
							o = t.products || []
						if (r) {
							this.loadEnhancedEcommerce(e)
							for (var i = [], c = 0, s = o; c < s.length; c++) {
								var u = s[c],
									p = this.createProductTrack(t, u),
									d = this.enhancedEcommerceTrackProduct(p)
								i.push(d)
							}
							var f = {
								id: r,
								affiliation: t.affiliation,
								revenue: n,
								tax: t.tax,
								shipping: t.shipping,
								coupon: t.coupon,
							}
							window.ga('ec:setAction', 'purchase', f)
							var v = this.pushEnhancedEcommerce(e)
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_COMPLETED_ORDER,
								eventProperties: JSON.stringify({
									orderInfo: f,
									items: i,
									event: v,
								}),
							})
						}
					}),
					(t.prototype.initialize = function (e) {
						;(this.pageCalled = !1), this.loadGAScript()
						var n = this.options
						'localhost' === c.hostname() && (n.domain = 'none'),
							n.enhancedEcommerce && this.enhancedEcommerce(),
							window.ga('create', n.trackingId, {
								cookieDomain: n.domain || t.defaultOptions.domain,
								siteSpeedSampleRate: n.siteSpeedSampleRate,
								sampleRate: n.sampleRate,
								allowLinker: !0,
							}),
							n.doubleClick && window.ga('require', 'displayfeatures'),
							n.enhancedLinkAttribution && window.ga('require', 'linkid'),
							n.anonymizeIp && window.ga('set', 'anonymizeIp', !0),
							e()
					}),
					(t.prototype.setWindowGa = function () {
						;(window.ga && 'function' == typeof window.ga) ||
							(window.ga = function () {
								;(window.ga.q = window.ga.q || []).push(arguments)
							})
					}),
					(t.prototype.loadGAScript = function () {
						;(window.GoogleAnalyticsObject = 'ga'),
							this.setWindowGa(),
							(window.ga.l = new Date().getTime())
						var e = s.virtualDocument().createElement('script')
						;(e.async = !0),
							(e.src = 'https://www.google-analytics.com/analytics.js')
						var t = s.virtualDocument().getElementsByTagName('script')[0]
						void 0 === t
							? document.head.appendChild(e)
							: t.parentNode.insertBefore(e, t)
					}),
					(t.prototype.enhancedEcommerce = function () {
						;(this.viewedProduct = this.viewedProductEnhanced),
							(this.addedProduct = this.addedProductEnhanced),
							(this.startedOrder = this.startedOrderEnhanced),
							(this.completedOrder = this.completedOrderEnhanced)
					}),
					(t.prototype.path = function (e) {
						var t = e.path
						return this.options.includeSearch && e.search && (t += e.search), t
					}),
					(t.prototype.formatValue = function (e) {
						return !e || e < 0 ? 0 : Math.round(e)
					}),
					(t.prototype.getProductQuantity = function (e) {
						return e.quantity || 1
					}),
					(t.prototype.getCurrency = function (e) {
						return e || 'USD'
					}),
					(t.prototype.createProductTrack = function (e, t) {
						var n = i({}, t)
						return (n.currency = t.currency || this.getCurrency(e.currency)), n
					}),
					(t.prototype.loadEnhancedEcommerce = function (e) {
						this.enhancedEcommerceLoaded ||
							(window.ga('require', 'ec'), (this.enhancedEcommerceLoaded = !0))
						var t = e.properties
						window.ga('set', '&cu', this.getCurrency(t.currency))
					}),
					(t.prototype.enhancedEcommerceTrackProduct = function (e) {
						var t = {
							id: e.sku || e.variantId,
							name: e.name,
							category: e.category,
							quantity: this.getProductQuantity(e),
							price: e.price,
							brand: e.brand,
							variant: e.variant,
							currency: this.getCurrency(e.currency),
						}
						return (
							e.coupon && (t.coupon = e.coupon),
							window.ga('ec:addProduct', t),
							t
						)
					}),
					(t.prototype.pushEnhancedEcommerce = function (e) {
						var t = e.properties,
							n = {
								eventCategory: t.category || 'EnhancedEcommerce',
								eventAction: e.event || 'Action not defined',
								eventLabel: t.label,
								nonInteraction: !0,
							}
						return window.ga('send', 'event', n), n
					}),
					(t.prototype.convertPageToTrack = function (e) {
						return {
							event: e.name ? 'Viewed ' + e.name + ' Page' : 'Loaded a Page',
							properties: e.properties,
							eventId: e.eventId,
						}
					}),
					(t.prototype.overrideDefaultPageProperties = function (e) {
						for (var t in e.properties)
							'properties' !== t &&
								'name' !== t &&
								t in e &&
								(e[t] = e.properties[t])
					}),
					(t.prototype.getEcommerceMetricsTag = function () {
						return 'google_analytics'
					}),
					(t.prototype.getEcommercePixelIds = function () {
						return [this.options.trackingId]
					}),
					(t.defaultOptions = {
						anonymizeIp: !1,
						domain: 'auto',
						doubleClick: !1,
						enhancedEcommerce: !1,
						enhancedLinkAttribution: !1,
						includeSearch: !1,
						nonInteraction: !1,
						siteSpeedSampleRate: 1,
						sampleRate: 100,
						trackNamedPages: !0,
						trackingId: '',
					}),
					t
				)
			})(a.EcommerceIntegration)
		t.GoogleAnalytics = u
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				})
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.Pinterest = void 0)
		var i = n(2),
			a = n(7),
			c = n(0),
			s = n(5),
			u = n(3),
			p = n(3),
			d = (function (e) {
				function t(n, r, o) {
					var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this
					return (
						e.prototype.ensureTrackingConsent.call(
							i,
							function () {
								i.initialize(o)
							},
							o
						),
						i
					)
				}
				return (
					o(t, e),
					(t.prototype.identify = function (e) {}),
					(t.prototype.track = function (e) {}),
					(t.prototype.page = function (e) {
						var t = this.options,
							n = e.properties
						'3.0' !== t.pixelVersion ||
							(n && 'product' === n.pageType) ||
							(this.forwardToPinterest('PageVisit', e.eventId),
							this.addMonorailBatchEvent({ eventName: i.ANALYTICS_PAGE_VIEW }))
					}),
					(t.prototype.isEssential = function () {
						return !1
					}),
					(t.prototype.viewedProduct = function (e) {
						if ('3.0' === this.options.pixelVersion) {
							var t = e.properties,
								n = {
									currency: t.currency,
									line_items: [
										{
											product_id: t.productId,
											product_variant_id: t.variantId,
											product_name: t.name,
											product_price: t.price,
											product_quantity: t.quantity,
										},
									],
								}
							this.forwardToPinterest('PageVisit', e.eventId, n),
								this.addMonorailBatchEvent({
									eventName: i.ANALYTICS_VIEWED_PRODUCT,
									eventProperties: JSON.stringify(n),
								})
						}
					}),
					(t.prototype.viewedProductCategory = function (e) {
						'3.0' === this.options.pixelVersion &&
							(this.forwardToPinterest('ViewCategory', e.eventId),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_VIEWED_PRODUCT_CATEGORY,
							}))
					}),
					(t.prototype.addedProduct = function (e) {
						if ('3.0' === this.options.pixelVersion) {
							var t = e.properties,
								n = {
									currency: t.currency,
									line_items: [
										{
											product_id: t.productId,
											product_variant_id: t.variantId,
											product_name: t.name,
											product_price: t.price,
											product_quantity: Number(e.properties.quantity),
										},
									],
								}
							this.forwardToPinterest('AddToCart', e.eventId, n),
								this.addMonorailBatchEvent({
									eventName: i.ANALYTICS_ADDED_PRODUCT,
									eventProperties: JSON.stringify(n),
								})
						}
					}),
					(t.prototype.completedOrder = function (e) {
						var t = this.options
						if ('3.0' === t.pixelVersion) {
							var n = e.properties,
								r = {
									value: n.revenue,
									currency: n.currency,
									order_quantity: this.getOrderNumItems(n),
									line_items: n.products.map(function (e, t) {
										return {
											product_id: e.productId,
											product_variant_id: e.variantId,
											product_name: e.name,
											product_price: e.price,
											product_quantity: e.quantity,
										}
									}),
								}
							this.forwardToPinterest('Checkout', e.eventId, r),
								this.addMonorailBatchEvent({
									eventName: i.ANALYTICS_COMPLETED_ORDER,
									eventProperties: JSON.stringify(r),
								})
						} else
							c.userCanBeTracked() &&
								(a.requestImpl.img(
									'https://ct.pinterest.com/v2.5/?tid=' +
										t.pixelId +
										'&event=checkout&value=0.00&quantity=1'
								),
								this.addMonorailBatchEvent({
									eventName: i.ANALYTICS_COMPLETED_ORDER,
								}))
					}),
					(t.prototype.performedSearch = function (e) {
						if ('3.0' === this.options.pixelVersion) {
							var t = { search_query: e.properties.query }
							this.forwardToPinterest('Search', e.eventId, t),
								this.addMonorailBatchEvent({
									eventName: i.ANALYTICS_PERFORMED_SEARCH,
									eventProperties: JSON.stringify(t),
								})
						}
					}),
					(t.prototype.forwardToPinterest = function (e, t, n) {
						!0 !== this.options.disablePinterestCommunication &&
							window.pintrk('track', e, Object.assign({ np: 'shopify' }, n)),
							this.produceMonorailEvent({
								eventName: e,
								eventProperties: JSON.stringify(n),
								eventId: t,
								schemaId: p.eventParityTestingSchemaId,
							})
					}),
					(t.prototype.getOrderNumItems = function (e) {
						for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
							var o = r[n]
							this.getProductKey(o) && (t += o.quantity || 1)
						}
						return t
					}),
					(t.prototype.getProductKey = function (e) {
						return e.productId || e.variantId || e.sku
					}),
					(t.prototype.initialize = function (e) {
						var t = this.options
						'3.0' === t.pixelVersion &&
							(this.loadPinterestScript(),
							window.pintrk('load', t.pixelId, { np: 'shopify' }),
							window.pintrk('page')),
							e()
					}),
					(t.prototype.loadPinterestScript = function () {
						if (!window.pintrk || 'function' != typeof window.pintrk) {
							;(window.pintrk = function () {
								window.pintrk.queue.push(Array.prototype.slice.call(arguments))
							}),
								(window.pintrk.queue = []),
								(window.pintrk.version = '3.0')
							var e = document.createElement('script')
							;(e.async = !0), (e.src = 'https://s.pinimg.com/ct/core.js')
							var t = document.getElementsByTagName('script')[0]
							void 0 === t
								? document.head.appendChild(e)
								: t.parentNode.insertBefore(e, t)
						}
					}),
					(t.prototype.addMonorailBatchEvent = function (t) {
						var n = t.eventName,
							r = t.eventProperties,
							o = void 0 === r ? void 0 : r,
							i = t.eventId,
							a = void 0 === i ? void 0 : i
						e.prototype.addMonorailBatchEvent.call(this, {
							eventName: n,
							eventProperties: o,
							eventId: a,
						})
						var c = { event_name: n }
						o && (c.event_properties = o),
							a && (c.event_id = a),
							s.addBatchEvent({
								schemaId: u.pinterestEcommerceEventSchemaId,
								payload: c,
							})
					}),
					(t.prototype.getEcommerceMetricsTag = function () {
						return 'pinterest'
					}),
					(t.prototype.getEcommercePixelIds = function () {
						return [this.options.pixelId]
					}),
					(t.defaultOptions = {
						pixelId: '',
						pixelVersion: '2.5',
						disablePinterestCommunication: !1,
					}),
					t
				)
			})(i.EcommerceIntegration)
		t.Pinterest = d
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				})
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.Snap = void 0)
		var i = n(2),
			a = n(1),
			c = (function (e) {
				function t(n, r, o) {
					var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this
					return (
						e.prototype.ensureTrackingConsent.call(
							i,
							function () {
								i.initialize(o)
							},
							o
						),
						i
					)
				}
				return (
					o(t, e),
					(t.prototype.isEssential = function () {
						return !1
					}),
					(t.prototype.identify = function (e) {
						throw new Error('identify is not supported')
					}),
					(t.prototype.page = function (e) {
						window.snaptr('track', 'PAGE_VIEW', {
							integration: 'shopify-native',
						}),
							this.addMonorailBatchEvent({ eventName: i.ANALYTICS_PAGE_VIEW })
					}),
					(t.prototype.track = function (e) {
						var t = {}
						for (var n in e.properties)
							'revenue' === n
								? (t.price = this.formatRevenue(e.properties.revenue))
								: (t[n] = e.properties[n])
					}),
					(t.prototype.viewedProductCategory = function (e) {}),
					(t.prototype.viewedProductVariant = function (e) {}),
					(t.prototype.viewedProduct = function (e) {
						var t = e.properties,
							n = {
								item_ids: this.getProductContentIds(t),
								item_type: this.getProductContentType(t),
								item_name: t.name || '',
								item_category: t.category || '',
								currency: this.getCurrency(t.currency),
								price: this.formatRevenue(t.price),
								integration: 'shopify-native',
							}
						window.snaptr('track', 'VIEW_CONTENT', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_VIEWED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedProduct = function (e) {
						var t = e.properties,
							n = {
								item_ids: this.getProductContentIds(t),
								item_type: this.getProductContentType(t),
								item_name: t.name || '',
								item_category: t.category || '',
								currency: this.getCurrency(t.currency),
								price: this.formatRevenue(t.price),
								number_items: this.getProductNumItems(t),
								integration: 'shopify-native',
							}
						window.snaptr('track', 'ADD_CART', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_ADDED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedPayment = function (e) {
						var t = e.properties,
							n = {
								currency: this.getCurrency(t.currency),
								price: this.formatRevenue(t.total),
								integration: 'shopify-native',
							}
						window.snaptr('track', 'ADD_BILLING', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_ADDED_PAYMENT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.performedSearch = function (e) {
						var t = {
							search_string: e.properties.query || '',
							integration: 'shopify-native',
						}
						window.snaptr('track', 'SEARCH', t),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_PERFORMED_SEARCH,
								eventProperties: JSON.stringify(t),
							})
					}),
					(t.prototype.startedOrder = function (e) {
						var t = e.properties,
							n = {
								item_ids: this.getOrderContentIds(t),
								item_type: this.getOrderContentType(t),
								currency: this.getCurrency(t.currency),
								price: this.formatRevenue(t.revenue),
								number_items: this.getOrderNumItems(t),
								integration: 'shopify-native',
							}
						window.snaptr('track', 'START_CHECKOUT', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_STARTED_ORDER,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.completedOrder = function (e) {
						var t = e.properties,
							n = {
								item_ids: this.getOrderContentIds(t),
								item_type: this.getOrderContentType(t),
								currency: this.getCurrency(t.currency),
								price: this.formatRevenue(t.revenue),
								number_items: this.getOrderNumItems(t),
								integration: 'shopify-native',
							}
						window.snaptr('track', 'PURCHASE', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_COMPLETED_ORDER,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.initialize = function (e) {
						this.loadSnapScript()
						var t = this.options
						window.snaptr('init', t.pixelId), e()
					}),
					(t.prototype.loadSnapScript = function () {
						if (!window.snaptr || 'function' != typeof window.snaptr) {
							;(window.snaptr = function () {
								window.snaptr.handleRequest
									? window.snaptr.handleRequest.apply(window.snaptr, arguments)
									: window.snaptr.queue.push(arguments)
							}),
								(window.snaptr.queue = []),
								(window.snaptr.push = window.snaptr),
								(window.snaptr.loaded = !0)
							var e = a.virtualDocument().createElement('script')
							;(e.async = !0), (e.src = 'https://sc-static.net/scevent.min.js')
							var t = a.virtualDocument().getElementsByTagName('script')[0]
							void 0 === t
								? document.head.appendChild(e)
								: t.parentNode.insertBefore(e, t)
						}
					}),
					(t.prototype.formatRevenue = function (e) {
						return Number(e || 0).toFixed(2)
					}),
					(t.prototype.getCurrency = function (e) {
						return e || 'USD'
					}),
					(t.prototype.getProductContentIds = function (e) {
						var t = e.productId || e.variantId || e.sku
						return t ? [t] : []
					}),
					(t.prototype.getProductContentType = function (e) {
						return e.productId ? 'product_group' : 'product'
					}),
					(t.prototype.getProductNumItems = function (e) {
						return e.quantity || this.getProductContentIds(e).length
					}),
					(t.prototype.getProductKey = function (e) {
						return e.productId || e.variantId || e.sku
					}),
					(t.prototype.getOrderContentIds = function (e) {
						for (var t = [], n = 0, r = e.products || []; n < r.length; n++) {
							var o = r[n],
								i = this.getProductKey(o)
							if (i) -1 === t.indexOf(i) && t.push(i)
						}
						return t
					}),
					(t.prototype.getOrderContentType = function (e) {
						for (var t = 0, n = e.products || []; t < n.length; t++) {
							if (n[t].productId) return 'product_group'
						}
						return 'product'
					}),
					(t.prototype.getOrderNumItems = function (e) {
						for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
							var o = r[n]
							this.getProductKey(o) && (t += o.quantity || 1)
						}
						return t
					}),
					(t.prototype.getEcommerceMetricsTag = function () {
						return 'snap'
					}),
					(t.prototype.getEcommercePixelIds = function () {
						return [this.options.pixelId]
					}),
					(t.defaultOptions = { pixelId: '' }),
					t
				)
			})(i.EcommerceIntegration)
		t.Snap = c
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				})
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.TikTok = void 0)
		var i = n(2),
			a = n(1),
			c = (function (e) {
				function t(n, r, o) {
					var i = e.call(this, t.defaultOptions, n, r.defaultAttributes) || this
					return (
						e.prototype.ensureTrackingConsent.call(
							i,
							function () {
								i.initialize(o)
							},
							o
						),
						i
					)
				}
				return (
					o(t, e),
					(t.prototype.isEssential = function () {
						return !1
					}),
					(t.prototype.identify = function (e) {
						throw new Error('identify is not supported')
					}),
					(t.prototype.page = function (e) {
						window.ttq.track('Browse'),
							this.addMonorailBatchEvent({ eventName: i.ANALYTICS_PAGE_VIEW })
					}),
					(t.prototype.track = function (e) {}),
					(t.prototype.viewedProductCategory = function (e) {}),
					(t.prototype.viewedProductVariant = function (e) {}),
					(t.prototype.viewedProduct = function (e) {
						var t = e.properties,
							n = {
								content_id: this.getProductKey(t),
								content_type: this.getProductContentType(t),
								content_name: t.name || '',
								content_category: t.category || '',
								currency: this.getCurrency(t.currency),
								price: this.formatRevenue(t.price),
							}
						window.ttq.track('ViewContent', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_VIEWED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedProduct = function (e) {
						var t = e.properties,
							n = {
								content_id: this.getProductKey(t),
								content_type: this.getProductContentType(t),
								content_name: t.name || '',
								content_category: t.category || '',
								currency: this.getCurrency(t.currency),
								price: this.formatRevenue(t.price),
								quantity: this.getProductNumItems(t),
							}
						window.ttq.track('AddToCart', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_ADDED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedPayment = function (e) {
						var t = e.properties,
							n = {
								currency: this.getCurrency(t.currency),
								value: this.formatRevenue(t.total),
							}
						window.ttq.track('AddBilling', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_ADDED_PAYMENT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.performedSearch = function (e) {
						var t = { query: e.properties.query || '' }
						window.ttq.track('Search', t),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_PERFORMED_SEARCH,
								eventProperties: JSON.stringify(t),
							})
					}),
					(t.prototype.startedOrder = function (e) {
						var t = e.properties,
							n = {
								contents: this.getOrderContents(t),
								value: this.formatRevenue(t.revenue),
								quantity: this.getOrderNumItems(t),
								currency: this.getCurrency(t.currency),
							}
						window.ttq.track('StartCheckout', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_STARTED_ORDER,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.completedOrder = function (e) {
						var t = e.properties,
							n = {
								contents: this.getOrderContents(t),
								value: this.formatRevenue(t.revenue),
								quantity: this.getOrderNumItems(t),
								currency: this.getCurrency(t.currency),
							}
						window.ttq.track('Purchase', n),
							this.addMonorailBatchEvent({
								eventName: i.ANALYTICS_COMPLETED_ORDER,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.initialize = function (e) {
						var t = this.options
						this.loadTikTokScript(t.pixelId), e()
					}),
					(t.prototype.loadTikTokScript = function (e) {
						if (!window.ttq || !window.ttq.loaded) {
							window.TiktokAnalyticsObject = 'ttq'
							var t = (window.ttq = window.ttq || [])
							;(t.methods = [
								'page',
								'track',
								'identify',
								'instances',
								'debug',
								'on',
								'off',
								'once',
								'ready',
								'alias',
								'group',
							]),
								(t.setAndDefer = function (e, t) {
									e[t] = function () {
										e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
									}
								})
							for (var n = 0; n < t.methods.length; n++)
								t.setAndDefer(t, t.methods[n])
							;(t.instance = function (e) {
								for (var n = t._i[e] || [], r = 0; r < t.methods.length; r++)
									t.setAndDefer(n, t.methods[r])
								return n
							}),
								(t.load = function (e) {
									var n = 'https://analytics.tiktok.com/i18n/pixel/events.js'
									;(t._i = t._i || {}), (t._i[e] = []), (t._i[e]._u = n)
									var r = a.virtualDocument().createElement('script')
									;(r.type = 'text/javascript'),
										(r.async = !0),
										(r.src = n + '?sdkid=' + e + '&lib=ttq')
									var o = a.virtualDocument().getElementsByTagName('script')[0]
									void 0 === o
										? document.head.appendChild(r)
										: o.parentNode.insertBefore(r, o),
										(window.ttq.loaded = !0)
								}),
								t.load(e),
								t.page()
						}
					}),
					(t.prototype.formatRevenue = function (e) {
						return Number(e || 0).toFixed(2)
					}),
					(t.prototype.getCurrency = function (e) {
						return e || 'USD'
					}),
					(t.prototype.getProductContentType = function (e) {
						return e.productId ? 'product_group' : 'product'
					}),
					(t.prototype.getProductNumItems = function (e) {
						return e.quantity || 1
					}),
					(t.prototype.getProductKey = function (e) {
						return e.productId || e.variantId || e.sku || ''
					}),
					(t.prototype.getOrderContents = function (e) {
						for (var t = [], n = 0, r = e.products || []; n < r.length; n++) {
							var o = r[n]
							t.push({
								content_id: this.getProductKey(o),
								content_type: this.getProductContentType(o),
								content_name: o.name || '',
								content_category: o.category || '',
								currency: this.getCurrency(o.currency),
								price: this.formatRevenue(o.price),
								quantity: this.getProductNumItems(o),
							})
						}
						return t
					}),
					(t.prototype.getOrderNumItems = function (e) {
						for (var t = 0, n = 0, r = e.products || []; n < r.length; n++) {
							var o = r[n]
							this.getProductKey(o) && (t += o.quantity || 1)
						}
						return t
					}),
					(t.prototype.getEcommerceMetricsTag = function () {
						return 'tiktok'
					}),
					(t.prototype.getEcommercePixelIds = function () {
						return [this.options.pixelId]
					}),
					(t.defaultOptions = { pixelId: '' }),
					t
				)
			})(i.EcommerceIntegration)
		t.TikTok = c
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				}),
			i =
				(this && this.__assign) ||
				function () {
					return (i =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var o in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
							return e
						}).apply(this, arguments)
				}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.GoogleGtag = void 0)
		var a = n(2),
			c = n(28),
			s = n(0),
			u = (function (e) {
				function t(t, n, r) {
					var o = e.call(this, {}, t, n.defaultAttributes) || this
					return (
						e.prototype.ensureTrackingConsent.call(
							o,
							function () {
								o.initialize(r)
							},
							r
						),
						o
					)
				}
				return (
					o(t, e),
					(t.prototype.isEssential = function () {
						return !0
					}),
					(t.prototype.identify = function (e) {
						throw new Error('identify is not supported')
					}),
					(t.prototype.track = function (e) {}),
					(t.prototype.setLimitedDataUseMode = function (e) {
						var t = i({}, e)
						return (t.restricted_data_processing = !0), t
					}),
					(t.prototype.initialize = function (e) {
						var t = this.options,
							n = { send_page_view: !1 }
						this.loadGtagScript(),
							s.userDataCannotBeSold() && (n = this.setLimitedDataUseMode(n)),
							window.gtag('config', t.conversionId, n),
							e()
					}),
					(t.prototype.loadGtagScript = function () {
						var e = this.options
						;(!window.dataLayer ||
							(window.dataLayer && !Array.isArray(window.dataLayer))) &&
							(window.dataLayer = []),
							(!window.gtag ||
								(window.gtag && 'function' != typeof window.gtag)) &&
								(window.gtag = function () {
									window.dataLayer.push(arguments)
								}),
							window.gtag('js', new Date()),
							c.script({
								src:
									'https://www.googletagmanager.com/gtag/js?id=' +
									e.conversionId,
							})
					}),
					(t.prototype.page = function (e) {
						var t = {
							send_to: this.gtagEventLabelFor('page_view'),
							page_path: e.path || '',
							page_title: e.name || e.title,
							page_location: e.url,
						}
						window.gtag('event', 'page_view', t),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_PAGE_VIEW,
								eventProperties: JSON.stringify(t),
							})
					}),
					(t.prototype.viewedProduct = function (e) {
						var t = e.properties,
							n = {
								send_to: this.gtagEventLabelFor('view_item'),
								ecomm_prodid: this.generateProductIds([t]),
								ecomm_totalvalue: t.price * t.quantity,
								ecomm_pagetype: 'product',
								items: [
									{
										id: t.productId || t.variantId,
										name: t.name,
										brand: t.brand,
										category: t.category,
										coupon: t.coupon,
										price: t.price.toString(),
										quantity: t.quantity,
										variant: t.variant,
									},
								],
							}
						window.gtag('event', 'view_item', n),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_VIEWED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedProduct = function (e) {
						var t = e.properties,
							n = {
								send_to: this.gtagEventLabelFor('add_to_cart'),
								ecomm_prodid: this.generateProductIds([t]),
								ecomm_totalvalue: t.price * t.quantity,
								ecomm_pagetype: 'cart',
								value: t.price * t.quantity,
								currency: t.currency || 'USD',
								items: [
									{
										id: t.productId || t.variantId,
										name: t.name,
										brand: t.brand,
										category: t.category,
										coupon: t.coupon,
										price: t.price.toString(),
										quantity: t.quantity,
										variant: t.variant,
									},
								],
							}
						window.gtag('event', 'add_to_cart', n),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_ADDED_PRODUCT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.completedOrder = function (e) {
						var t = e.properties,
							n = {
								send_to: this.gtagEventLabelFor('purchase'),
								transaction_id: t.orderId,
								value: t.revenue,
								currency: t.currency || 'USD',
								tax: t.tax.toString(),
								shipping: t.shipping.toString(),
								items: t.products.map(function (e) {
									return {
										id: e.productId || e.variantId,
										name: e.name,
										brand: e.brand,
										category: e.category,
										coupon: e.coupon,
										price: e.price.toString(),
										quantity: e.quantity,
										variant: e.variant,
									}
								}),
							}
						window.gtag('event', 'purchase', n),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_COMPLETED_ORDER,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.startedOrder = function (e) {
						var t = e.properties,
							n = {
								send_to: this.gtagEventLabelFor('begin_checkout'),
								ecomm_prodid: this.generateProductIds(t.products),
								ecomm_totalvalue: this.cartTotalValue(t.products),
								ecomm_pagetype: 'cart',
								value: t.revenue,
								currency: t.currency || 'USD',
								items: t.products.map(function (e) {
									return {
										id: e.productId || e.variantId,
										name: e.name,
										brand: e.brand,
										category: e.category,
										coupon: e.coupon,
										price: e.price.toString(),
										quantity: e.quantity,
										variant: e.variant,
									}
								}),
								coupon: t.coupon,
							}
						window.gtag('event', 'begin_checkout', n),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_STARTED_ORDER,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.performedSearch = function (e) {
						var t = e.properties,
							n = {
								send_to: this.gtagEventLabelFor('search'),
								search_term: t.query,
							}
						window.gtag('event', 'search', n),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_PERFORMED_SEARCH,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.addedPayment = function (e) {
						var t = e.properties,
							n = {
								send_to: this.gtagEventLabelFor('add_payment_info'),
								currency: t.currency,
								total: t.total,
							}
						window.gtag('event', 'add_payment_info', n),
							this.addMonorailBatchEvent({
								eventName: a.ANALYTICS_ADDED_PAYMENT,
								eventProperties: JSON.stringify(n),
							})
					}),
					(t.prototype.generateProductIds = function (e) {
						for (var t = new Array(), n = 0, r = e; n < r.length; n++) {
							var o = r[n],
								i =
									'shopify_' +
									this.targetCountry() +
									'_' +
									o.productId +
									'_' +
									o.variantId
							t.push(i)
						}
						return t
					}),
					(t.prototype.cartTotalValue = function (e) {
						for (var t = 0, n = 0, r = e; n < r.length; n++) {
							var o = r[n]
							t += o.price * o.quantity
						}
						return t
					}),
					(t.prototype.targetCountry = function () {
						return this.options.targetCountry || 'US'
					}),
					(t.prototype.gtagEventLabelFor = function (e) {
						for (var t = 0, n = this.options.eventLabels; t < n.length; t++) {
							var r = n[t]
							if (r.type === e) return r.action_label
						}
					}),
					(t.prototype.getEcommerceMetricsTag = function () {
						return 'google_gtag'
					}),
					(t.prototype.getEcommercePixelIds = function () {
						return [this.options.conversionId]
					}),
					t
				)
			})(a.EcommerceIntegration)
		t.GoogleGtag = u
	},
	function (e, t, n) {
		'use strict'
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.iframe = t.script = void 0)
		var r = n(1)
		function o(e, t) {
			if ((t.onLoad && e.addEventListener('load', t.onLoad, !1), t.className)) {
				if (/^\d/.test(t.className))
					throw new Error(
						'Invalid className: ' + t.className + ' starts with a digit'
					)
				e.className = t.className
			}
		}
		;(t.script = function (e) {
			var t = r.virtualDocument().createElement('script')
			return (
				(t.src = e.src),
				(t.async = !0),
				o(t, e),
				r.virtualDocument().body().appendChild(t),
				t
			)
		}),
			(t.iframe = function (e) {
				var t = r.virtualDocument().createElement('iframe')
				return (
					(t.src = e.src),
					(t.style.display = 'none'),
					o(t, e),
					r.virtualDocument().body().appendChild(t),
					t
				)
			})
	},
	function (e, t, n) {
		'use strict'
		var r,
			o =
				(this && this.__extends) ||
				((r = function (e, t) {
					return (r =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t
							}) ||
						function (e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(e, t)
				}),
				function (e, t) {
					function n() {
						this.constructor = e
					}
					r(e, t),
						(e.prototype =
							null === t
								? Object.create(t)
								: ((n.prototype = t.prototype), new n()))
				})
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.CustomerEventsObserver = void 0)
		var i = (function (e) {
			function t() {
				return (null !== e && e.apply(this, arguments)) || this
			}
			return (
				o(t, e),
				(t.prototype.onPageView = function (e) {}),
				(t.prototype.onViewedProductCategory = function (e) {}),
				(t.prototype.onViewedProductVariant = function (e) {}),
				(t.prototype.onViewedProduct = function (e) {}),
				(t.prototype.onAddedProduct = function (e) {}),
				(t.prototype.onAddedPayment = function (e) {}),
				(t.prototype.onPerformedSearch = function (e) {}),
				(t.prototype.onStartedOrder = function (e) {}),
				(t.prototype.onCompletedOrder = function (e) {}),
				t
			)
		})(n(2).EcommerceIntegration)
		t.CustomerEventsObserver = i
	},
])
