!(function (n) {
	'use strict'
	var t, e, o, r, i
	!(function (n) {
		;(n.TRACKING_LOADED = 'trackingConsentLoaded'),
			(n.TRACKING_ACCEPTED = 'trackingConsentAccepted'),
			(n.TRACKING_DECLINED = 'trackingConsentDeclined'),
			(n.TRACKING_RESET = 'trackingConsentReset')
	})(t || (t = {})),
		(function (n) {
			;(n.ACCEPTED = 'yes'),
				(n.DECLINED = 'no'),
				(n.NO_INTERACTION = 'no_interaction'),
				(n.NO_VALUE = '')
		})(e || (e = {})),
		(function (n) {
			;(n.NO_INTERACTION = 'no_interaction'),
				(n.NO_VALUE = ''),
				(n.ACCEPTED = '1'),
				(n.DECLINED = '0')
		})(o || (o = {})),
		(function (n) {
			;(n.GDPR = 'GDPR'), (n.CCPA = 'CCPA'), (n.NO_VALUE = '')
		})(r || (r = {})),
		(function (n) {
			;(n.CCPA_BLOCK_ALL = 'CCPA_BLOCK_ALL'), (n.GDPR = 'GDPR')
		})(i || (i = {}))
	const c = ['prefs', 'version', 'consent', 'regulation'],
		u = ['lim', 'v', 'con', 'reg']
	function s(n, t) {
		const e = t.slice().sort()
		return (
			n.length === t.length &&
			n
				.slice()
				.sort()
				.every((n, t) => n === e[t])
		)
	}
	function C() {
		try {
			const n = document.cookie ? document.cookie.split('; ') : []
			let t = void 0
			if (
				(n.forEach((n) => {
					const [e, o] = n.split('=')
					if ('_tracking_consent' === decodeURIComponent(e)) {
						var r = JSON.parse(decodeURIComponent(o))
						t = r
					}
				}),
				void 0 === t ||
					(function (n) {
						const t = Object.keys(n)
						return !(s(t, u) || s(t, c))
					})(t))
			)
				return
			return (
				(function (n) {
					if (n.hasOwnProperty('version')) return !0
					if (n.hasOwnProperty('v')) return !1
				})(t) &&
					(t = (function (n) {
						const t = n.prefs.limit,
							e = n.regulation,
							o = n.version
						let r = {}
						;(function (n) {
							return n.prefs.limit.includes(i.GDPR)
						})(n) && (r = { GDPR: l(n.consent) })
						return { con: r, reg: e, v: o, lim: t }
					})(t)),
				t
			)
		} catch (n) {
			return
		}
	}
	function a() {
		const n = C()
		return f(n) ? { limit: [] } : { limit: n.lim }
	}
	function E() {
		const n = C()
		return f(n) ? o.NO_VALUE : n.con.GDPR
	}
	function f(n = null) {
		return null === n && (n = C()), void 0 === n
	}
	function l(n) {
		switch (n) {
			case e.ACCEPTED:
				return o.ACCEPTED
			case e.DECLINED:
				return o.DECLINED
			default:
				return o.NO_VALUE
		}
	}
	const A = { GDPR: [i.GDPR], CCPA: [i.CCPA_BLOCK_ALL] }
	function D(n, t, e) {
		const o = new XMLHttpRequest(),
			r = 'https://' + document.location.host + '/set_tracking_consent.json',
			i = JSON.stringify(n)
		o.open('POST', r, !0),
			o.setRequestHeader('Content-Type', 'application/json'),
			(o.onreadystatechange = function () {
				if (4 !== o.readyState) return
				const n = 0 === o.status || (200 >= o.status && o.status < 400)
				let r
				try {
					r = JSON.parse(o.responseText)
				} catch (n) {
					r = { error: 'Unknown error' }
				}
				n
					? (e && document.dispatchEvent(new CustomEvent(e, { detail: {} })),
					  t(null, r))
					: t(r)
			}),
			o.send(i)
	}
	function N(n, e) {
		if (null == n || 'boolean' != typeof n)
			throw TypeError(
				'setTrackingConsent must be called with a boolean consent value'
			)
		if (null == e || 'function' != typeof e)
			throw TypeError(
				'setTrackingConsent must be called with a callback function'
			)
		return !0 === n
			? D({ consent: !0 }, e, t.TRACKING_ACCEPTED)
			: D({ consent: !1 }, e, t.TRACKING_DECLINED)
	}
	function d(n) {
		return f()
			? e.NO_VALUE
			: n === o.NO_VALUE
			? e.NO_INTERACTION
			: (function (n) {
					switch (n) {
						case o.ACCEPTED:
							return e.ACCEPTED
						case o.DECLINED:
							return e.DECLINED
						default:
							return e.NO_VALUE
					}
			  })(n)
	}
	function P() {
		return d(E())
	}
	function T() {
		const n = (function () {
			const n = C()
			return f(n) ? r.NO_VALUE : n.reg
		})()
		return n in r ? n : r.NO_VALUE
	}
	function _() {
		return a()
	}
	function L() {
		const n = T()
		if (n === r.NO_VALUE) return !1
		const t = _()
		return (
			0 !== t.limit.length &&
			t.limit.some((t) =>
				(function (n, t) {
					return A[n].includes(t)
				})(n, t)
			)
		)
	}
	function p() {
		if (f()) return !0
		if (!a().limit.includes(i.GDPR)) return !0
		switch (E()) {
			case o.ACCEPTED:
				return !0
			case o.DECLINED:
				return !1
			case o.NO_VALUE:
				return T() !== r.GDPR
		}
	}
	function O() {
		return T() !== r.CCPA || !L()
	}
	function R() {
		return T() === r.GDPR && L() && P() === e.NO_INTERACTION
	}
	function h() {
		return {
			getTrackingConsent: P,
			setTrackingConsent: N,
			userCanBeTracked: p,
			getRegulation: T,
			isRegulationEnforced: L,
			getShopPrefs: _,
			shouldShowGDPRBanner: R,
			userDataCanBeSold: O,
		}
	}
	;(window.Shopify = window.Shopify ? window.Shopify : {}),
		(window.Shopify.customerPrivacy = window.Shopify.trackingConsent = h()),
		(n.shopifyConsentAPI = h)
})({})
