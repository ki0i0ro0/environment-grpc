var commonjsGlobal =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  googleProtobuf = {}
function createCommonjsModule(e, t, o) {
  return (
    e(
      (o = {
        path: t,
        exports: {},
        require: function (e, t) {
          return commonjsRequire(e, null == t ? o.path : t)
        },
      }),
      o.exports,
    ),
    o.exports
  )
}
function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
}
;(function (exports) {
  var $jscomp = $jscomp || {}
  ;($jscomp.scope = {}),
    ($jscomp.findInternal = function (e, t, o) {
      e instanceof String && (e = String(e))
      for (var r = e.length, n = 0; n < r; n++) {
        var s = e[n]
        if (t.call(o, s, n, e)) return { i: n, v: s }
      }
      return { i: -1, v: void 0 }
    }),
    ($jscomp.ASSUME_ES5 = !1),
    ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
    ($jscomp.ASSUME_NO_NATIVE_SET = !1),
    ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
    ($jscomp.defineProperty =
      $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (e, t, o) {
            e != Array.prototype && e != Object.prototype && (e[t] = o.value)
          }),
    ($jscomp.getGlobal = function (e) {
      return 'undefined' != typeof window && window === e
        ? e
        : void 0 !== commonjsGlobal && null != commonjsGlobal
        ? commonjsGlobal
        : e
    }),
    ($jscomp.global = $jscomp.getGlobal(commonjsGlobal)),
    ($jscomp.polyfill = function (e, t, o, r) {
      if (t) {
        for (o = $jscomp.global, e = e.split('.'), r = 0; r < e.length - 1; r++) {
          var n = e[r]
          n in o || (o[n] = {}), (o = o[n])
        }
        ;(t = t((r = o[(e = e[e.length - 1])]))) != r &&
          null != t &&
          $jscomp.defineProperty(o, e, { configurable: !0, writable: !0, value: t })
      }
    }),
    $jscomp.polyfill(
      'Array.prototype.findIndex',
      function (e) {
        return (
          e ||
          function (e, t) {
            return $jscomp.findInternal(this, e, t).i
          }
        )
      },
      'es6',
      'es3',
    ),
    ($jscomp.checkStringArgs = function (e, t, o) {
      if (null == e)
        throw new TypeError(
          "The 'this' value for String.prototype." + o + ' must not be null or undefined',
        )
      if (t instanceof RegExp)
        throw new TypeError(
          'First argument to String.prototype.' + o + ' must not be a regular expression',
        )
      return e + ''
    }),
    $jscomp.polyfill(
      'String.prototype.endsWith',
      function (e) {
        return (
          e ||
          function (e, t) {
            var o = $jscomp.checkStringArgs(this, e, 'endsWith')
            ;(e += ''), void 0 === t && (t = o.length), (t = Math.max(0, Math.min(0 | t, o.length)))
            for (var r = e.length; 0 < r && 0 < t; ) if (o[--t] != e[--r]) return !1
            return 0 >= r
          }
        )
      },
      'es6',
      'es3',
    ),
    $jscomp.polyfill(
      'Array.prototype.find',
      function (e) {
        return (
          e ||
          function (e, t) {
            return $jscomp.findInternal(this, e, t).v
          }
        )
      },
      'es6',
      'es3',
    ),
    $jscomp.polyfill(
      'String.prototype.startsWith',
      function (e) {
        return (
          e ||
          function (e, t) {
            var o = $jscomp.checkStringArgs(this, e, 'startsWith')
            e += ''
            var r = o.length,
              n = e.length
            t = Math.max(0, Math.min(0 | t, o.length))
            for (var s = 0; s < n && t < r; ) if (o[t++] != e[s++]) return !1
            return s >= n
          }
        )
      },
      'es6',
      'es3',
    ),
    $jscomp.polyfill(
      'String.prototype.repeat',
      function (e) {
        return (
          e ||
          function (e) {
            var t = $jscomp.checkStringArgs(this, null, 'repeat')
            if (0 > e || 1342177279 < e) throw new RangeError('Invalid count value')
            e |= 0
            for (var o = ''; e; ) 1 & e && (o += t), (e >>>= 1) && (t += t)
            return o
          }
        )
      },
      'es6',
      'es3',
    )
  var COMPILED = !0,
    goog = goog || {}
  ;(goog.global = commonjsGlobal || self),
    (goog.isDef = function (e) {
      return void 0 !== e
    }),
    (goog.isString = function (e) {
      return 'string' == typeof e
    }),
    (goog.isBoolean = function (e) {
      return 'boolean' == typeof e
    }),
    (goog.isNumber = function (e) {
      return 'number' == typeof e
    }),
    (goog.exportPath_ = function (e, t, o) {
      ;(e = e.split('.')),
        (o = o || goog.global),
        e[0] in o || void 0 === o.execScript || o.execScript('var ' + e[0])
      for (var r; e.length && (r = e.shift()); )
        !e.length && goog.isDef(t)
          ? (o[r] = t)
          : (o = o[r] && o[r] !== Object.prototype[r] ? o[r] : (o[r] = {}))
    }),
    (goog.define = function (e, t) {
      return t
    }),
    (goog.FEATURESET_YEAR = 2012),
    (goog.DEBUG = !0),
    (goog.LOCALE = 'en'),
    (goog.TRUSTED_SITE = !0),
    (goog.STRICT_MODE_COMPATIBLE = !1),
    (goog.DISALLOW_TEST_ONLY_CODE = !goog.DEBUG),
    (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
    (goog.provide = function (e) {
      if (goog.isInModuleLoader_()) throw Error('goog.provide cannot be used within a module.')
      goog.constructNamespace_(e)
    }),
    (goog.constructNamespace_ = function (e, t) {
      goog.exportPath_(e, t)
    }),
    (goog.getScriptNonce = function (e) {
      return e && e != goog.global
        ? goog.getScriptNonce_(e.document)
        : (null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
          goog.cspNonce_)
    }),
    (goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/),
    (goog.cspNonce_ = null),
    (goog.getScriptNonce_ = function (e) {
      return (e = e.querySelector && e.querySelector('script[nonce]')) &&
        (e = e.nonce || e.getAttribute('nonce')) &&
        goog.NONCE_PATTERN_.test(e)
        ? e
        : ''
    }),
    (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
    (goog.module = function (e) {
      if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_))
        throw Error('Invalid module identifier')
      if (!goog.isInGoogModuleLoader_())
        throw Error(
          'Module ' +
            e +
            " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.",
        )
      if (goog.moduleLoaderState_.moduleName)
        throw Error('goog.module may only be called once per module.')
      goog.moduleLoaderState_.moduleName = e
    }),
    (goog.module.get = function (e) {
      return goog.module.getInternal_(e)
    }),
    (goog.module.getInternal_ = function (e) {
      return null
    }),
    (goog.ModuleType = { ES6: 'es6', GOOG: 'goog' }),
    (goog.moduleLoaderState_ = null),
    (goog.isInModuleLoader_ = function () {
      return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
    }),
    (goog.isInGoogModuleLoader_ = function () {
      return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
    }),
    (goog.isInEs6ModuleLoader_ = function () {
      if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return !0
      var e = goog.global.$jscomp
      return !!e && 'function' == typeof e.getCurrentModulePath && !!e.getCurrentModulePath()
    }),
    (goog.module.declareLegacyNamespace = function () {
      goog.moduleLoaderState_.declareLegacyNamespace = !0
    }),
    (goog.declareModuleId = function (e) {
      if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = e
      else {
        var t = goog.global.$jscomp
        if (!t || 'function' != typeof t.getCurrentModulePath)
          throw Error('Module with namespace "' + e + '" has been loaded incorrectly.')
        ;(t = t.require(t.getCurrentModulePath())),
          (goog.loadedModules_[e] = { exports: t, type: goog.ModuleType.ES6, moduleId: e })
      }
    }),
    (goog.setTestOnly = function (e) {
      if (goog.DISALLOW_TEST_ONLY_CODE)
        throw (
          ((e = e || ''),
          Error('Importing test-only code into non-debug environment' + (e ? ': ' + e : '.')))
        )
    }),
    (goog.forwardDeclare = function (e) {}),
    (goog.getObjectByName = function (e, t) {
      ;(e = e.split('.')), (t = t || goog.global)
      for (var o = 0; o < e.length; o++) if (((t = t[e[o]]), !goog.isDefAndNotNull(t))) return null
      return t
    }),
    (goog.globalize = function (e, t) {
      for (var o in ((t = t || goog.global), e)) t[o] = e[o]
    }),
    (goog.addDependency = function (e, t, o, r) {}),
    (goog.ENABLE_DEBUG_LOADER = !0),
    (goog.logToConsole_ = function (e) {
      goog.global.console && goog.global.console.error(e)
    }),
    (goog.require = function (e) {}),
    (goog.requireType = function (e) {
      return {}
    }),
    (goog.basePath = ''),
    (goog.nullFunction = function () {}),
    (goog.abstractMethod = function () {
      throw Error('unimplemented abstract method')
    }),
    (goog.addSingletonGetter = function (e) {
      ;(e.instance_ = void 0),
        (e.getInstance = function () {
          return e.instance_
            ? e.instance_
            : (goog.DEBUG &&
                (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e),
              (e.instance_ = new e()))
        })
    }),
    (goog.instantiatedSingletons_ = []),
    (goog.LOAD_MODULE_USING_EVAL = !0),
    (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
    (goog.loadedModules_ = {}),
    (goog.DEPENDENCIES_ENABLED = !COMPILED),
    (goog.TRANSPILE = 'detect'),
    (goog.ASSUME_ES_MODULES_TRANSPILED = !1),
    (goog.TRANSPILE_TO_LANGUAGE = ''),
    (goog.TRANSPILER = 'transpile.js'),
    (goog.hasBadLetScoping = null),
    (goog.useSafari10Workaround = function () {
      if (null == goog.hasBadLetScoping) {
        try {
          var a = !eval(
            '"use strict";let x = 1; function f() { return typeof x; };f() == "number";',
          )
        } catch (e) {
          a = !1
        }
        goog.hasBadLetScoping = a
      }
      return goog.hasBadLetScoping
    }),
    (goog.workaroundSafari10EvalBug = function (e) {
      return '(function(){' + e + '\n;})();\n'
    }),
    (goog.loadModule = function (e) {
      var t = goog.moduleLoaderState_
      try {
        if (
          ((goog.moduleLoaderState_ = {
            moduleName: '',
            declareLegacyNamespace: !1,
            type: goog.ModuleType.GOOG,
          }),
          goog.isFunction(e))
        )
          var o = e.call(void 0, {})
        else {
          if (!goog.isString(e)) throw Error('Invalid module definition')
          goog.useSafari10Workaround() && (e = goog.workaroundSafari10EvalBug(e)),
            (o = goog.loadModuleFromSource_.call(void 0, e))
        }
        var r = goog.moduleLoaderState_.moduleName
        if (!goog.isString(r) || !r) throw Error('Invalid module name "' + r + '"')
        goog.moduleLoaderState_.declareLegacyNamespace
          ? goog.constructNamespace_(r, o)
          : goog.SEAL_MODULE_EXPORTS &&
            Object.seal &&
            'object' == typeof o &&
            null != o &&
            Object.seal(o),
          (goog.loadedModules_[r] = {
            exports: o,
            type: goog.ModuleType.GOOG,
            moduleId: goog.moduleLoaderState_.moduleName,
          })
      } finally {
        goog.moduleLoaderState_ = t
      }
    }),
    (goog.loadModuleFromSource_ = function (a) {
      return eval(a), {}
    }),
    (goog.normalizePath_ = function (e) {
      e = e.split('/')
      for (var t = 0; t < e.length; )
        '.' == e[t]
          ? e.splice(t, 1)
          : t && '..' == e[t] && e[t - 1] && '..' != e[t - 1]
          ? e.splice(--t, 2)
          : t++
      return e.join('/')
    }),
    (goog.loadFileSync_ = function (e) {
      if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(e)
      try {
        var t = new goog.global.XMLHttpRequest()
        return (
          t.open('get', e, !1), t.send(), 0 == t.status || 200 == t.status ? t.responseText : null
        )
      } catch (e) {
        return null
      }
    }),
    (goog.transpile_ = function (e, t, o) {
      var r = goog.global.$jscomp
      r || (goog.global.$jscomp = r = {})
      var n = r.transpile
      if (!n) {
        var s = goog.basePath + goog.TRANSPILER,
          i = goog.loadFileSync_(s)
        if (i) {
          if (
            (function () {
              ;(0, eval)(i + '\n//# sourceURL=' + s)
            }.call(goog.global),
            goog.global.$gwtExport &&
              goog.global.$gwtExport.$jscomp &&
              !goog.global.$gwtExport.$jscomp.transpile)
          )
            throw Error(
              'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
                JSON.stringify(goog.global.$gwtExport),
            )
          ;(goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile),
            (n = (r = goog.global.$jscomp).transpile)
        }
      }
      return (
        n ||
          (n = r.transpile =
            function (e, t) {
              return (
                goog.logToConsole_(t + ' requires transpilation but no transpiler was found.'), e
              )
            }),
        n(e, t, o)
      )
    }),
    (goog.typeOf = function (e) {
      var t = typeof e
      if ('object' == t) {
        if (!e) return 'null'
        if (e instanceof Array) return 'array'
        if (e instanceof Object) return t
        var o = Object.prototype.toString.call(e)
        if ('[object Window]' == o) return 'object'
        if (
          '[object Array]' == o ||
          ('number' == typeof e.length &&
            void 0 !== e.splice &&
            void 0 !== e.propertyIsEnumerable &&
            !e.propertyIsEnumerable('splice'))
        )
          return 'array'
        if (
          '[object Function]' == o ||
          (void 0 !== e.call &&
            void 0 !== e.propertyIsEnumerable &&
            !e.propertyIsEnumerable('call'))
        )
          return 'function'
      } else if ('function' == t && void 0 === e.call) return 'object'
      return t
    }),
    (goog.isNull = function (e) {
      return null === e
    }),
    (goog.isDefAndNotNull = function (e) {
      return null != e
    }),
    (goog.isArray = function (e) {
      return 'array' == goog.typeOf(e)
    }),
    (goog.isArrayLike = function (e) {
      var t = goog.typeOf(e)
      return 'array' == t || ('object' == t && 'number' == typeof e.length)
    }),
    (goog.isDateLike = function (e) {
      return goog.isObject(e) && 'function' == typeof e.getFullYear
    }),
    (goog.isFunction = function (e) {
      return 'function' == goog.typeOf(e)
    }),
    (goog.isObject = function (e) {
      var t = typeof e
      return ('object' == t && null != e) || 'function' == t
    }),
    (goog.getUid = function (e) {
      return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
    }),
    (goog.hasUid = function (e) {
      return !!e[goog.UID_PROPERTY_]
    }),
    (goog.removeUid = function (e) {
      null !== e && 'removeAttribute' in e && e.removeAttribute(goog.UID_PROPERTY_)
      try {
        delete e[goog.UID_PROPERTY_]
      } catch (e) {}
    }),
    (goog.UID_PROPERTY_ = 'closure_uid_' + ((1e9 * Math.random()) >>> 0)),
    (goog.uidCounter_ = 0),
    (goog.getHashCode = goog.getUid),
    (goog.removeHashCode = goog.removeUid),
    (goog.cloneObject = function (e) {
      var t = goog.typeOf(e)
      if ('object' == t || 'array' == t) {
        if ('function' == typeof e.clone) return e.clone()
        for (var o in ((t = 'array' == t ? [] : {}), e)) t[o] = goog.cloneObject(e[o])
        return t
      }
      return e
    }),
    (goog.bindNative_ = function (e, t, o) {
      return e.call.apply(e.bind, arguments)
    }),
    (goog.bindJs_ = function (e, t, o) {
      if (!e) throw Error()
      if (2 < arguments.length) {
        var r = Array.prototype.slice.call(arguments, 2)
        return function () {
          var o = Array.prototype.slice.call(arguments)
          return Array.prototype.unshift.apply(o, r), e.apply(t, o)
        }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }),
    (goog.bind = function (e, t, o) {
      return (
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code')
          ? (goog.bind = goog.bindNative_)
          : (goog.bind = goog.bindJs_),
        goog.bind.apply(null, arguments)
      )
    }),
    (goog.partial = function (e, t) {
      var o = Array.prototype.slice.call(arguments, 1)
      return function () {
        var t = o.slice()
        return t.push.apply(t, arguments), e.apply(this, t)
      }
    }),
    (goog.mixin = function (e, t) {
      for (var o in t) e[o] = t[o]
    }),
    (goog.now =
      (goog.TRUSTED_SITE && Date.now) ||
      function () {
        return +new Date()
      }),
    (goog.globalEval = function (e) {
      if (goog.global.execScript) goog.global.execScript(e, 'JavaScript')
      else {
        if (!goog.global.eval) throw Error('goog.globalEval not available')
        if (null == goog.evalWorksForGlobals_) {
          try {
            goog.global.eval('var _evalTest_ = 1;')
          } catch (e) {}
          if (void 0 !== goog.global._evalTest_) {
            try {
              delete goog.global._evalTest_
            } catch (e) {}
            goog.evalWorksForGlobals_ = !0
          } else goog.evalWorksForGlobals_ = !1
        }
        if (goog.evalWorksForGlobals_) goog.global.eval(e)
        else {
          var t = goog.global.document,
            o = t.createElement('SCRIPT')
          ;(o.type = 'text/javascript'),
            (o.defer = !1),
            o.appendChild(t.createTextNode(e)),
            t.head.appendChild(o),
            t.head.removeChild(o)
        }
      }
    }),
    (goog.evalWorksForGlobals_ = null),
    (goog.getCssName = function (e, t) {
      if ('.' == String(e).charAt(0))
        throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e)
      var o = function (e) {
          return goog.cssNameMapping_[e] || e
        },
        r = function (e) {
          e = e.split('-')
          for (var t = [], r = 0; r < e.length; r++) t.push(o(e[r]))
          return t.join('-')
        }
      return (
        (r = goog.cssNameMapping_
          ? 'BY_WHOLE' == goog.cssNameMappingStyle_
            ? o
            : r
          : function (e) {
              return e
            }),
        (e = t ? e + '-' + r(t) : r(e)),
        goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e) : e
      )
    }),
    (goog.setCssNameMapping = function (e, t) {
      ;(goog.cssNameMapping_ = e), (goog.cssNameMappingStyle_ = t)
    }),
    (goog.getMsg = function (e, t, o) {
      return (
        o && o.html && (e = e.replace(/</g, '&lt;')),
        t &&
          (e = e.replace(/\{\$([^}]+)}/g, function (e, o) {
            return null != t && o in t ? t[o] : e
          })),
        e
      )
    }),
    (goog.getMsgWithFallback = function (e, t) {
      return e
    }),
    (goog.exportSymbol = function (e, t, o) {
      goog.exportPath_(e, t, o)
    }),
    (goog.exportProperty = function (e, t, o) {
      e[t] = o
    }),
    (goog.inherits = function (e, t) {
      function o() {}
      ;(o.prototype = t.prototype),
        (e.superClass_ = t.prototype),
        (e.prototype = new o()),
        (e.prototype.constructor = e),
        (e.base = function (e, o, r) {
          for (var n = Array(arguments.length - 2), s = 2; s < arguments.length; s++)
            n[s - 2] = arguments[s]
          return t.prototype[o].apply(e, n)
        })
    }),
    (goog.base = function (e, t, o) {
      var r = arguments.callee.caller
      if (goog.STRICT_MODE_COMPATIBLE || (goog.DEBUG && !r))
        throw Error(
          'arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C',
        )
      if (void 0 !== r.superClass_) {
        for (var n = Array(arguments.length - 1), s = 1; s < arguments.length; s++)
          n[s - 1] = arguments[s]
        return r.superClass_.constructor.apply(e, n)
      }
      if ('string' != typeof t && 'symbol' != typeof t)
        throw Error('method names provided to goog.base must be a string or a symbol')
      for (n = Array(arguments.length - 2), s = 2; s < arguments.length; s++)
        n[s - 2] = arguments[s]
      s = !1
      for (var i = e.constructor.prototype; i; i = Object.getPrototypeOf(i))
        if (i[t] === r) s = !0
        else if (s) return i[t].apply(e, n)
      if (e[t] === r) return e.constructor.prototype[t].apply(e, n)
      throw Error('goog.base called from a method of one name to a method of a different name')
    }),
    (goog.scope = function (e) {
      if (goog.isInModuleLoader_()) throw Error('goog.scope is not supported within a module.')
      e.call(goog.global)
    }),
    (goog.defineClass = function (e, t) {
      var o = t.constructor,
        r = t.statics
      return (
        (o && o != Object.prototype.constructor) ||
          (o = function () {
            throw Error('cannot instantiate an interface (no constructor defined).')
          }),
        (o = goog.defineClass.createSealingConstructor_(o, e)),
        e && goog.inherits(o, e),
        delete t.constructor,
        delete t.statics,
        goog.defineClass.applyProperties_(o.prototype, t),
        null != r && (r instanceof Function ? r(o) : goog.defineClass.applyProperties_(o, r)),
        o
      )
    }),
    (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
    (goog.defineClass.createSealingConstructor_ = function (e, t) {
      if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e
      var o = !goog.defineClass.isUnsealable_(t),
        r = function () {
          var t = e.apply(this, arguments) || this
          return (
            (t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_]),
            this.constructor === r && o && Object.seal instanceof Function && Object.seal(t),
            t
          )
        }
      return r
    }),
    (goog.defineClass.isUnsealable_ = function (e) {
      return e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
    }),
    (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
        ' ',
      )),
    (goog.defineClass.applyProperties_ = function (e, t) {
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      for (var r = 0; r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++)
        (o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r]),
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }),
    (goog.tagUnsealableClass = function (e) {}),
    (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = 'goog_defineClass_legacy_unsealable'),
    (goog.TRUSTED_TYPES_POLICY_NAME = ''),
    (goog.identity_ = function (e) {
      return e
    }),
    (goog.createTrustedTypesPolicy = function (e) {
      var t = null
      if ('undefined' == typeof TrustedTypes || !TrustedTypes.createPolicy) return t
      try {
        t = TrustedTypes.createPolicy(e, {
          createHTML: goog.identity_,
          createScript: goog.identity_,
          createScriptURL: goog.identity_,
          createURL: goog.identity_,
        })
      } catch (e) {
        goog.logToConsole_(e.message)
      }
      return t
    }),
    (goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
      ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + '#base')
      : null),
    (goog.object = {}),
    (goog.object.is = function (e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }),
    (goog.object.forEach = function (e, t, o) {
      for (var r in e) t.call(o, e[r], r, e)
    }),
    (goog.object.filter = function (e, t, o) {
      var r,
        n = {}
      for (r in e) t.call(o, e[r], r, e) && (n[r] = e[r])
      return n
    }),
    (goog.object.map = function (e, t, o) {
      var r,
        n = {}
      for (r in e) n[r] = t.call(o, e[r], r, e)
      return n
    }),
    (goog.object.some = function (e, t, o) {
      for (var r in e) if (t.call(o, e[r], r, e)) return !0
      return !1
    }),
    (goog.object.every = function (e, t, o) {
      for (var r in e) if (!t.call(o, e[r], r, e)) return !1
      return !0
    }),
    (goog.object.getCount = function (e) {
      var t,
        o = 0
      for (t in e) o++
      return o
    }),
    (goog.object.getAnyKey = function (e) {
      for (var t in e) return t
    }),
    (goog.object.getAnyValue = function (e) {
      for (var t in e) return e[t]
    }),
    (goog.object.contains = function (e, t) {
      return goog.object.containsValue(e, t)
    }),
    (goog.object.getValues = function (e) {
      var t,
        o = [],
        r = 0
      for (t in e) o[r++] = e[t]
      return o
    }),
    (goog.object.getKeys = function (e) {
      var t,
        o = [],
        r = 0
      for (t in e) o[r++] = t
      return o
    }),
    (goog.object.getValueByKeys = function (e, t) {
      var o = goog.isArrayLike(t),
        r = o ? t : arguments
      for (o = o ? 0 : 1; o < r.length; o++) {
        if (null == e) return
        e = e[r[o]]
      }
      return e
    }),
    (goog.object.containsKey = function (e, t) {
      return null !== e && t in e
    }),
    (goog.object.containsValue = function (e, t) {
      for (var o in e) if (e[o] == t) return !0
      return !1
    }),
    (goog.object.findKey = function (e, t, o) {
      for (var r in e) if (t.call(o, e[r], r, e)) return r
    }),
    (goog.object.findValue = function (e, t, o) {
      return (t = goog.object.findKey(e, t, o)) && e[t]
    }),
    (goog.object.isEmpty = function (e) {
      for (var t in e) return !1
      return !0
    }),
    (goog.object.clear = function (e) {
      for (var t in e) delete e[t]
    }),
    (goog.object.remove = function (e, t) {
      var o
      return (o = t in e) && delete e[t], o
    }),
    (goog.object.add = function (e, t, o) {
      if (null !== e && t in e) throw Error('The object already contains the key "' + t + '"')
      goog.object.set(e, t, o)
    }),
    (goog.object.get = function (e, t, o) {
      return null !== e && t in e ? e[t] : o
    }),
    (goog.object.set = function (e, t, o) {
      e[t] = o
    }),
    (goog.object.setIfUndefined = function (e, t, o) {
      return t in e ? e[t] : (e[t] = o)
    }),
    (goog.object.setWithReturnValueIfNotSet = function (e, t, o) {
      return t in e ? e[t] : ((o = o()), (e[t] = o))
    }),
    (goog.object.equals = function (e, t) {
      for (var o in e) if (!(o in t) || e[o] !== t[o]) return !1
      for (var r in t) if (!(r in e)) return !1
      return !0
    }),
    (goog.object.clone = function (e) {
      var t,
        o = {}
      for (t in e) o[t] = e[t]
      return o
    }),
    (goog.object.unsafeClone = function (e) {
      var t = goog.typeOf(e)
      if ('object' == t || 'array' == t) {
        if (goog.isFunction(e.clone)) return e.clone()
        for (var o in ((t = 'array' == t ? [] : {}), e)) t[o] = goog.object.unsafeClone(e[o])
        return t
      }
      return e
    }),
    (goog.object.transpose = function (e) {
      var t,
        o = {}
      for (t in e) o[e[t]] = t
      return o
    }),
    (goog.object.PROTOTYPE_FIELDS_ =
      'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
        ' ',
      )),
    (goog.object.extend = function (e, t) {
      for (var o, r, n = 1; n < arguments.length; n++) {
        for (o in (r = arguments[n])) e[o] = r[o]
        for (var s = 0; s < goog.object.PROTOTYPE_FIELDS_.length; s++)
          (o = goog.object.PROTOTYPE_FIELDS_[s]),
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
      }
    }),
    (goog.object.create = function (e) {
      var t = arguments.length
      if (1 == t && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0])
      if (t % 2) throw Error('Uneven number of arguments')
      for (var o = {}, r = 0; r < t; r += 2) o[arguments[r]] = arguments[r + 1]
      return o
    }),
    (goog.object.createSet = function (e) {
      var t = arguments.length
      if (1 == t && goog.isArray(arguments[0]))
        return goog.object.createSet.apply(null, arguments[0])
      for (var o = {}, r = 0; r < t; r++) o[arguments[r]] = !0
      return o
    }),
    (goog.object.createImmutableView = function (e) {
      var t = e
      return Object.isFrozen && !Object.isFrozen(e) && ((t = Object.create(e)), Object.freeze(t)), t
    }),
    (goog.object.isImmutableView = function (e) {
      return !!Object.isFrozen && Object.isFrozen(e)
    }),
    (goog.object.getAllPropertyNames = function (e, t, o) {
      if (!e) return []
      if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return goog.object.getKeys(e)
      for (var r = {}; e && (e !== Object.prototype || t) && (e !== Function.prototype || o); ) {
        for (var n = Object.getOwnPropertyNames(e), s = 0; s < n.length; s++) r[n[s]] = !0
        e = Object.getPrototypeOf(e)
      }
      return goog.object.getKeys(r)
    }),
    (goog.object.getSuperClass = function (e) {
      return (e = Object.getPrototypeOf(e.prototype)) && e.constructor
    }),
    (goog.debug = {}),
    (goog.debug.Error = function (e) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error)
      else {
        var t = Error().stack
        t && (this.stack = t)
      }
      e && (this.message = String(e)), (this.reportErrorToServer = !0)
    }),
    goog.inherits(goog.debug.Error, Error),
    (goog.debug.Error.prototype.name = 'CustomError'),
    (goog.dom = {}),
    (goog.dom.NodeType = {
      ELEMENT: 1,
      ATTRIBUTE: 2,
      TEXT: 3,
      CDATA_SECTION: 4,
      ENTITY_REFERENCE: 5,
      ENTITY: 6,
      PROCESSING_INSTRUCTION: 7,
      COMMENT: 8,
      DOCUMENT: 9,
      DOCUMENT_TYPE: 10,
      DOCUMENT_FRAGMENT: 11,
      NOTATION: 12,
    }),
    (goog.asserts = {}),
    (goog.asserts.ENABLE_ASSERTS = goog.DEBUG),
    (goog.asserts.AssertionError = function (e, t) {
      goog.debug.Error.call(this, goog.asserts.subs_(e, t)), (this.messagePattern = e)
    }),
    goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
    (goog.asserts.AssertionError.prototype.name = 'AssertionError'),
    (goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
      throw e
    }),
    (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
    (goog.asserts.subs_ = function (e, t) {
      for (var o = '', r = (e = e.split('%s')).length - 1, n = 0; n < r; n++)
        o += e[n] + (n < t.length ? t[n] : '%s')
      return o + e[r]
    }),
    (goog.asserts.doAssertFailure_ = function (e, t, o, r) {
      var n = 'Assertion failed'
      if (o) {
        n += ': ' + o
        var s = r
      } else e && ((n += ': ' + e), (s = t))
      ;(e = new goog.asserts.AssertionError('' + n, s || [])), goog.asserts.errorHandler_(e)
    }),
    (goog.asserts.setErrorHandler = function (e) {
      goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
    }),
    (goog.asserts.assert = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          !e &&
          goog.asserts.doAssertFailure_('', null, t, Array.prototype.slice.call(arguments, 2)),
        e
      )
    }),
    (goog.asserts.assertExists = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          null == e &&
          goog.asserts.doAssertFailure_(
            'Expected to exist: %s.',
            [e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.fail = function (e, t) {
      goog.asserts.ENABLE_ASSERTS &&
        goog.asserts.errorHandler_(
          new goog.asserts.AssertionError(
            'Failure' + (e ? ': ' + e : ''),
            Array.prototype.slice.call(arguments, 1),
          ),
        )
    }),
    (goog.asserts.assertNumber = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          !goog.isNumber(e) &&
          goog.asserts.doAssertFailure_(
            'Expected number but got %s: %s.',
            [goog.typeOf(e), e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertString = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          !goog.isString(e) &&
          goog.asserts.doAssertFailure_(
            'Expected string but got %s: %s.',
            [goog.typeOf(e), e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertFunction = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          !goog.isFunction(e) &&
          goog.asserts.doAssertFailure_(
            'Expected function but got %s: %s.',
            [goog.typeOf(e), e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertObject = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          !goog.isObject(e) &&
          goog.asserts.doAssertFailure_(
            'Expected object but got %s: %s.',
            [goog.typeOf(e), e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertArray = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          !goog.isArray(e) &&
          goog.asserts.doAssertFailure_(
            'Expected array but got %s: %s.',
            [goog.typeOf(e), e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertBoolean = function (e, t, o) {
      return (
        goog.asserts.ENABLE_ASSERTS &&
          !goog.isBoolean(e) &&
          goog.asserts.doAssertFailure_(
            'Expected boolean but got %s: %s.',
            [goog.typeOf(e), e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertElement = function (e, t, o) {
      return (
        !goog.asserts.ENABLE_ASSERTS ||
          (goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT) ||
          goog.asserts.doAssertFailure_(
            'Expected Element but got %s: %s.',
            [goog.typeOf(e), e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertInstanceof = function (e, t, o, r) {
      return (
        !goog.asserts.ENABLE_ASSERTS ||
          e instanceof t ||
          goog.asserts.doAssertFailure_(
            'Expected instanceof %s but got %s.',
            [goog.asserts.getType_(t), goog.asserts.getType_(e)],
            o,
            Array.prototype.slice.call(arguments, 3),
          ),
        e
      )
    }),
    (goog.asserts.assertFinite = function (e, t, o) {
      return (
        !goog.asserts.ENABLE_ASSERTS ||
          ('number' == typeof e && isFinite(e)) ||
          goog.asserts.doAssertFailure_(
            'Expected %s to be a finite number but it is not.',
            [e],
            t,
            Array.prototype.slice.call(arguments, 2),
          ),
        e
      )
    }),
    (goog.asserts.assertObjectPrototypeIsIntact = function () {
      for (var e in Object.prototype)
        goog.asserts.fail(e + ' should not be enumerable in Object.prototype.')
    }),
    (goog.asserts.getType_ = function (e) {
      return e instanceof Function
        ? e.displayName || e.name || 'unknown type name'
        : e instanceof Object
        ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e)
        : null === e
        ? 'null'
        : typeof e
    })
  var jspb = {
    BinaryConstants: {},
    ConstBinaryMessage: function () {},
    BinaryMessage: function () {},
  }
  ;(jspb.BinaryConstants.FieldType = {
    INVALID: -1,
    DOUBLE: 1,
    FLOAT: 2,
    INT64: 3,
    UINT64: 4,
    INT32: 5,
    FIXED64: 6,
    FIXED32: 7,
    BOOL: 8,
    STRING: 9,
    GROUP: 10,
    MESSAGE: 11,
    BYTES: 12,
    UINT32: 13,
    ENUM: 14,
    SFIXED32: 15,
    SFIXED64: 16,
    SINT32: 17,
    SINT64: 18,
    FHASH64: 30,
    VHASH64: 31,
  }),
    (jspb.BinaryConstants.WireType = {
      INVALID: -1,
      VARINT: 0,
      FIXED64: 1,
      DELIMITED: 2,
      START_GROUP: 3,
      END_GROUP: 4,
      FIXED32: 5,
    }),
    (jspb.BinaryConstants.FieldTypeToWireType = function (e) {
      var t = jspb.BinaryConstants.FieldType,
        o = jspb.BinaryConstants.WireType
      switch (e) {
        case t.INT32:
        case t.INT64:
        case t.UINT32:
        case t.UINT64:
        case t.SINT32:
        case t.SINT64:
        case t.BOOL:
        case t.ENUM:
        case t.VHASH64:
          return o.VARINT
        case t.DOUBLE:
        case t.FIXED64:
        case t.SFIXED64:
        case t.FHASH64:
          return o.FIXED64
        case t.STRING:
        case t.MESSAGE:
        case t.BYTES:
          return o.DELIMITED
        case t.FLOAT:
        case t.FIXED32:
        case t.SFIXED32:
          return o.FIXED32
        default:
          return o.INVALID
      }
    }),
    (jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1),
    (jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60),
    (jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54),
    (jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22),
    (jspb.BinaryConstants.FLOAT64_EPS = 5e-324),
    (jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324),
    (jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292),
    (jspb.BinaryConstants.TWO_TO_20 = 1048576),
    (jspb.BinaryConstants.TWO_TO_23 = 8388608),
    (jspb.BinaryConstants.TWO_TO_31 = 2147483648),
    (jspb.BinaryConstants.TWO_TO_32 = 4294967296),
    (jspb.BinaryConstants.TWO_TO_52 = 4503599627370496),
    (jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000),
    (jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000),
    (jspb.BinaryConstants.ZERO_HASH = '\0\0\0\0\0\0\0\0'),
    (goog.array = {}),
    (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
    (goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR),
    (goog.array.peek = function (e) {
      return e[e.length - 1]
    }),
    (goog.array.last = goog.array.peek),
    (goog.array.indexOf =
      goog.NATIVE_ARRAY_PROTOTYPES &&
      (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
        ? function (e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, t, o)
          }
        : function (e, t, o) {
            if (((o = null == o ? 0 : 0 > o ? Math.max(0, e.length + o) : o), goog.isString(e)))
              return goog.isString(t) && 1 == t.length ? e.indexOf(t, o) : -1
            for (; o < e.length; o++) if (o in e && e[o] === t) return o
            return -1
          }),
    (goog.array.lastIndexOf =
      goog.NATIVE_ARRAY_PROTOTYPES &&
      (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
        ? function (e, t, o) {
            return (
              goog.asserts.assert(null != e.length),
              Array.prototype.lastIndexOf.call(e, t, null == o ? e.length - 1 : o)
            )
          }
        : function (e, t, o) {
            if (
              (0 > (o = null == o ? e.length - 1 : o) && (o = Math.max(0, e.length + o)),
              goog.isString(e))
            )
              return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, o) : -1
            for (; 0 <= o; o--) if (o in e && e[o] === t) return o
            return -1
          }),
    (goog.array.forEach =
      goog.NATIVE_ARRAY_PROTOTYPES &&
      (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
        ? function (e, t, o) {
            goog.asserts.assert(null != e.length), Array.prototype.forEach.call(e, t, o)
          }
        : function (e, t, o) {
            for (var r = e.length, n = goog.isString(e) ? e.split('') : e, s = 0; s < r; s++)
              s in n && t.call(o, n[s], s, e)
          }),
    (goog.array.forEachRight = function (e, t, o) {
      var r = e.length,
        n = goog.isString(e) ? e.split('') : e
      for (--r; 0 <= r; --r) r in n && t.call(o, n[r], r, e)
    }),
    (goog.array.filter =
      goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
        ? function (e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.filter.call(e, t, o)
          }
        : function (e, t, o) {
            for (
              var r = e.length, n = [], s = 0, i = goog.isString(e) ? e.split('') : e, g = 0;
              g < r;
              g++
            )
              if (g in i) {
                var a = i[g]
                t.call(o, a, g, e) && (n[s++] = a)
              }
            return n
          }),
    (goog.array.map =
      goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
        ? function (e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.map.call(e, t, o)
          }
        : function (e, t, o) {
            for (
              var r = e.length, n = Array(r), s = goog.isString(e) ? e.split('') : e, i = 0;
              i < r;
              i++
            )
              i in s && (n[i] = t.call(o, s[i], i, e))
            return n
          }),
    (goog.array.reduce =
      goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
        ? function (e, t, o, r) {
            return (
              goog.asserts.assert(null != e.length),
              r && (t = goog.bind(t, r)),
              Array.prototype.reduce.call(e, t, o)
            )
          }
        : function (e, t, o, r) {
            var n = o
            return (
              goog.array.forEach(e, function (o, s) {
                n = t.call(r, n, o, s, e)
              }),
              n
            )
          }),
    (goog.array.reduceRight =
      goog.NATIVE_ARRAY_PROTOTYPES &&
      (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
        ? function (e, t, o, r) {
            return (
              goog.asserts.assert(null != e.length),
              goog.asserts.assert(null != t),
              r && (t = goog.bind(t, r)),
              Array.prototype.reduceRight.call(e, t, o)
            )
          }
        : function (e, t, o, r) {
            var n = o
            return (
              goog.array.forEachRight(e, function (o, s) {
                n = t.call(r, n, o, s, e)
              }),
              n
            )
          }),
    (goog.array.some =
      goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
        ? function (e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.some.call(e, t, o)
          }
        : function (e, t, o) {
            for (var r = e.length, n = goog.isString(e) ? e.split('') : e, s = 0; s < r; s++)
              if (s in n && t.call(o, n[s], s, e)) return !0
            return !1
          }),
    (goog.array.every =
      goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
        ? function (e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.every.call(e, t, o)
          }
        : function (e, t, o) {
            for (var r = e.length, n = goog.isString(e) ? e.split('') : e, s = 0; s < r; s++)
              if (s in n && !t.call(o, n[s], s, e)) return !1
            return !0
          }),
    (goog.array.count = function (e, t, o) {
      var r = 0
      return (
        goog.array.forEach(
          e,
          function (e, n, s) {
            t.call(o, e, n, s) && ++r
          },
          o,
        ),
        r
      )
    }),
    (goog.array.find = function (e, t, o) {
      return 0 > (t = goog.array.findIndex(e, t, o)) ? null : goog.isString(e) ? e.charAt(t) : e[t]
    }),
    (goog.array.findIndex = function (e, t, o) {
      for (var r = e.length, n = goog.isString(e) ? e.split('') : e, s = 0; s < r; s++)
        if (s in n && t.call(o, n[s], s, e)) return s
      return -1
    }),
    (goog.array.findRight = function (e, t, o) {
      return 0 > (t = goog.array.findIndexRight(e, t, o))
        ? null
        : goog.isString(e)
        ? e.charAt(t)
        : e[t]
    }),
    (goog.array.findIndexRight = function (e, t, o) {
      var r = e.length,
        n = goog.isString(e) ? e.split('') : e
      for (--r; 0 <= r; r--) if (r in n && t.call(o, n[r], r, e)) return r
      return -1
    }),
    (goog.array.contains = function (e, t) {
      return 0 <= goog.array.indexOf(e, t)
    }),
    (goog.array.isEmpty = function (e) {
      return 0 == e.length
    }),
    (goog.array.clear = function (e) {
      if (!goog.isArray(e)) for (var t = e.length - 1; 0 <= t; t--) delete e[t]
      e.length = 0
    }),
    (goog.array.insert = function (e, t) {
      goog.array.contains(e, t) || e.push(t)
    }),
    (goog.array.insertAt = function (e, t, o) {
      goog.array.splice(e, o, 0, t)
    }),
    (goog.array.insertArrayAt = function (e, t, o) {
      goog.partial(goog.array.splice, e, o, 0).apply(null, t)
    }),
    (goog.array.insertBefore = function (e, t, o) {
      var r
      2 == arguments.length || 0 > (r = goog.array.indexOf(e, o))
        ? e.push(t)
        : goog.array.insertAt(e, t, r)
    }),
    (goog.array.remove = function (e, t) {
      var o
      return (o = 0 <= (t = goog.array.indexOf(e, t))) && goog.array.removeAt(e, t), o
    }),
    (goog.array.removeLast = function (e, t) {
      return 0 <= (t = goog.array.lastIndexOf(e, t)) && (goog.array.removeAt(e, t), !0)
    }),
    (goog.array.removeAt = function (e, t) {
      return goog.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, t, 1).length
    }),
    (goog.array.removeIf = function (e, t, o) {
      return 0 <= (t = goog.array.findIndex(e, t, o)) && (goog.array.removeAt(e, t), !0)
    }),
    (goog.array.removeAllIf = function (e, t, o) {
      var r = 0
      return (
        goog.array.forEachRight(e, function (n, s) {
          t.call(o, n, s, e) && goog.array.removeAt(e, s) && r++
        }),
        r
      )
    }),
    (goog.array.concat = function (e) {
      return Array.prototype.concat.apply([], arguments)
    }),
    (goog.array.join = function (e) {
      return Array.prototype.concat.apply([], arguments)
    }),
    (goog.array.toArray = function (e) {
      var t = e.length
      if (0 < t) {
        for (var o = Array(t), r = 0; r < t; r++) o[r] = e[r]
        return o
      }
      return []
    }),
    (goog.array.clone = goog.array.toArray),
    (goog.array.extend = function (e, t) {
      for (var o = 1; o < arguments.length; o++) {
        var r = arguments[o]
        if (goog.isArrayLike(r)) {
          var n = e.length || 0,
            s = r.length || 0
          e.length = n + s
          for (var i = 0; i < s; i++) e[n + i] = r[i]
        } else e.push(r)
      }
    }),
    (goog.array.splice = function (e, t, o, r) {
      return (
        goog.asserts.assert(null != e.length),
        Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
      )
    }),
    (goog.array.slice = function (e, t, o) {
      return (
        goog.asserts.assert(null != e.length),
        2 >= arguments.length
          ? Array.prototype.slice.call(e, t)
          : Array.prototype.slice.call(e, t, o)
      )
    }),
    (goog.array.removeDuplicates = function (e, t, o) {
      t = t || e
      var r = function (e) {
        return goog.isObject(e) ? 'o' + goog.getUid(e) : (typeof e).charAt(0) + e
      }
      ;(o = o || r), (r = {})
      for (var n = 0, s = 0; s < e.length; ) {
        var i = e[s++],
          g = o(i)
        Object.prototype.hasOwnProperty.call(r, g) || ((r[g] = !0), (t[n++] = i))
      }
      t.length = n
    }),
    (goog.array.binarySearch = function (e, t, o) {
      return goog.array.binarySearch_(e, o || goog.array.defaultCompare, !1, t)
    }),
    (goog.array.binarySelect = function (e, t, o) {
      return goog.array.binarySearch_(e, t, !0, void 0, o)
    }),
    (goog.array.binarySearch_ = function (e, t, o, r, n) {
      for (var s, i = 0, g = e.length; i < g; ) {
        var a = (i + g) >> 1,
          l = o ? t.call(n, e[a], a, e) : t(r, e[a])
        0 < l ? (i = a + 1) : ((g = a), (s = !l))
      }
      return s ? i : ~i
    }),
    (goog.array.sort = function (e, t) {
      e.sort(t || goog.array.defaultCompare)
    }),
    (goog.array.stableSort = function (e, t) {
      for (var o = Array(e.length), r = 0; r < e.length; r++) o[r] = { index: r, value: e[r] }
      var n = t || goog.array.defaultCompare
      for (
        goog.array.sort(o, function (e, t) {
          return n(e.value, t.value) || e.index - t.index
        }),
          r = 0;
        r < e.length;
        r++
      )
        e[r] = o[r].value
    }),
    (goog.array.sortByKey = function (e, t, o) {
      var r = o || goog.array.defaultCompare
      goog.array.sort(e, function (e, o) {
        return r(t(e), t(o))
      })
    }),
    (goog.array.sortObjectsByKey = function (e, t, o) {
      goog.array.sortByKey(
        e,
        function (e) {
          return e[t]
        },
        o,
      )
    }),
    (goog.array.isSorted = function (e, t, o) {
      t = t || goog.array.defaultCompare
      for (var r = 1; r < e.length; r++) {
        var n = t(e[r - 1], e[r])
        if (0 < n || (0 == n && o)) return !1
      }
      return !0
    }),
    (goog.array.equals = function (e, t, o) {
      if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1
      var r = e.length
      o = o || goog.array.defaultCompareEquality
      for (var n = 0; n < r; n++) if (!o(e[n], t[n])) return !1
      return !0
    }),
    (goog.array.compare3 = function (e, t, o) {
      o = o || goog.array.defaultCompare
      for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
        var s = o(e[n], t[n])
        if (0 != s) return s
      }
      return goog.array.defaultCompare(e.length, t.length)
    }),
    (goog.array.defaultCompare = function (e, t) {
      return e > t ? 1 : e < t ? -1 : 0
    }),
    (goog.array.inverseDefaultCompare = function (e, t) {
      return -goog.array.defaultCompare(e, t)
    }),
    (goog.array.defaultCompareEquality = function (e, t) {
      return e === t
    }),
    (goog.array.binaryInsert = function (e, t, o) {
      return 0 > (o = goog.array.binarySearch(e, t, o)) && (goog.array.insertAt(e, t, -(o + 1)), !0)
    }),
    (goog.array.binaryRemove = function (e, t, o) {
      return 0 <= (t = goog.array.binarySearch(e, t, o)) && goog.array.removeAt(e, t)
    }),
    (goog.array.bucket = function (e, t, o) {
      for (var r = {}, n = 0; n < e.length; n++) {
        var s = e[n],
          i = t.call(o, s, n, e)
        goog.isDef(i) && (r[i] || (r[i] = [])).push(s)
      }
      return r
    }),
    (goog.array.toObject = function (e, t, o) {
      var r = {}
      return (
        goog.array.forEach(e, function (n, s) {
          r[t.call(o, n, s, e)] = n
        }),
        r
      )
    }),
    (goog.array.range = function (e, t, o) {
      var r = [],
        n = 0,
        s = e
      if ((void 0 !== t && ((n = e), (s = t)), 0 > (o = o || 1) * (s - n))) return []
      if (0 < o) for (e = n; e < s; e += o) r.push(e)
      else for (e = n; e > s; e += o) r.push(e)
      return r
    }),
    (goog.array.repeat = function (e, t) {
      for (var o = [], r = 0; r < t; r++) o[r] = e
      return o
    }),
    (goog.array.flatten = function (e) {
      for (var t = [], o = 0; o < arguments.length; o++) {
        var r = arguments[o]
        if (goog.isArray(r))
          for (var n = 0; n < r.length; n += 8192) {
            var s = goog.array.slice(r, n, n + 8192)
            s = goog.array.flatten.apply(null, s)
            for (var i = 0; i < s.length; i++) t.push(s[i])
          }
        else t.push(r)
      }
      return t
    }),
    (goog.array.rotate = function (e, t) {
      return (
        goog.asserts.assert(null != e.length),
        e.length &&
          (0 < (t %= e.length)
            ? Array.prototype.unshift.apply(e, e.splice(-t, t))
            : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))),
        e
      )
    }),
    (goog.array.moveItem = function (e, t, o) {
      goog.asserts.assert(0 <= t && t < e.length),
        goog.asserts.assert(0 <= o && o < e.length),
        (t = Array.prototype.splice.call(e, t, 1)),
        Array.prototype.splice.call(e, o, 0, t[0])
    }),
    (goog.array.zip = function (e) {
      if (!arguments.length) return []
      for (var t = [], o = arguments[0].length, r = 1; r < arguments.length; r++)
        arguments[r].length < o && (o = arguments[r].length)
      for (r = 0; r < o; r++) {
        for (var n = [], s = 0; s < arguments.length; s++) n.push(arguments[s][r])
        t.push(n)
      }
      return t
    }),
    (goog.array.shuffle = function (e, t) {
      t = t || Math.random
      for (var o = e.length - 1; 0 < o; o--) {
        var r = Math.floor(t() * (o + 1)),
          n = e[o]
        ;(e[o] = e[r]), (e[r] = n)
      }
    }),
    (goog.array.copyByIndex = function (e, t) {
      var o = []
      return (
        goog.array.forEach(t, function (t) {
          o.push(e[t])
        }),
        o
      )
    }),
    (goog.array.concatMap = function (e, t, o) {
      return goog.array.concat.apply([], goog.array.map(e, t, o))
    }),
    (goog.crypt = {}),
    (goog.crypt.stringToByteArray = function (e) {
      for (var t = [], o = 0, r = 0; r < e.length; r++) {
        var n = e.charCodeAt(r)
        255 < n && ((t[o++] = 255 & n), (n >>= 8)), (t[o++] = n)
      }
      return t
    }),
    (goog.crypt.byteArrayToString = function (e) {
      if (8192 >= e.length) return String.fromCharCode.apply(null, e)
      for (var t = '', o = 0; o < e.length; o += 8192) {
        var r = goog.array.slice(e, o, o + 8192)
        t += String.fromCharCode.apply(null, r)
      }
      return t
    }),
    (goog.crypt.byteArrayToHex = function (e, t) {
      return goog.array
        .map(e, function (e) {
          return 1 < (e = e.toString(16)).length ? e : '0' + e
        })
        .join(t || '')
    }),
    (goog.crypt.hexToByteArray = function (e) {
      goog.asserts.assert(0 == e.length % 2, 'Key string length must be multiple of 2')
      for (var t = [], o = 0; o < e.length; o += 2) t.push(parseInt(e.substring(o, o + 2), 16))
      return t
    }),
    (goog.crypt.stringToUtf8ByteArray = function (e) {
      for (var t = [], o = 0, r = 0; r < e.length; r++) {
        var n = e.charCodeAt(r)
        128 > n
          ? (t[o++] = n)
          : (2048 > n
              ? (t[o++] = (n >> 6) | 192)
              : (55296 == (64512 & n) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1))
                  ? ((n = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++r))),
                    (t[o++] = (n >> 18) | 240),
                    (t[o++] = ((n >> 12) & 63) | 128))
                  : (t[o++] = (n >> 12) | 224),
                (t[o++] = ((n >> 6) & 63) | 128)),
            (t[o++] = (63 & n) | 128))
      }
      return t
    }),
    (goog.crypt.utf8ByteArrayToString = function (e) {
      for (var t = [], o = 0, r = 0; o < e.length; ) {
        var n = e[o++]
        if (128 > n) t[r++] = String.fromCharCode(n)
        else if (191 < n && 224 > n) {
          var s = e[o++]
          t[r++] = String.fromCharCode(((31 & n) << 6) | (63 & s))
        } else if (239 < n && 365 > n) {
          s = e[o++]
          var i = e[o++]
          ;(n = (((7 & n) << 18) | ((63 & s) << 12) | ((63 & i) << 6) | (63 & e[o++])) - 65536),
            (t[r++] = String.fromCharCode(55296 + (n >> 10))),
            (t[r++] = String.fromCharCode(56320 + (1023 & n)))
        } else
          (s = e[o++]),
            (i = e[o++]),
            (t[r++] = String.fromCharCode(((15 & n) << 12) | ((63 & s) << 6) | (63 & i)))
      }
      return t.join('')
    }),
    (goog.crypt.xorByteArray = function (e, t) {
      goog.asserts.assert(e.length == t.length, 'XOR array lengths must match')
      for (var o = [], r = 0; r < e.length; r++) o.push(e[r] ^ t[r])
      return o
    }),
    (goog.dom.asserts = {}),
    (goog.dom.asserts.assertIsLocation = function (e) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var t = goog.dom.asserts.getWindow_(e)
        t &&
          (!e || (!(e instanceof t.Location) && e instanceof t.Element)) &&
          goog.asserts.fail(
            'Argument is not a Location (or a non-Element mock); got: %s',
            goog.dom.asserts.debugStringForType_(e),
          )
      }
      return e
    }),
    (goog.dom.asserts.assertIsElementType_ = function (e, t) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var o = goog.dom.asserts.getWindow_(e)
        o &&
          void 0 !== o[t] &&
          ((e && (e instanceof o[t] || !(e instanceof o.Location || e instanceof o.Element))) ||
            goog.asserts.fail(
              'Argument is not a %s (or a non-Element, non-Location mock); got: %s',
              t,
              goog.dom.asserts.debugStringForType_(e),
            ))
      }
      return e
    }),
    (goog.dom.asserts.assertIsHTMLAnchorElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLAnchorElement')
    }),
    (goog.dom.asserts.assertIsHTMLButtonElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLButtonElement')
    }),
    (goog.dom.asserts.assertIsHTMLLinkElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLLinkElement')
    }),
    (goog.dom.asserts.assertIsHTMLImageElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLImageElement')
    }),
    (goog.dom.asserts.assertIsHTMLAudioElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLAudioElement')
    }),
    (goog.dom.asserts.assertIsHTMLVideoElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLVideoElement')
    }),
    (goog.dom.asserts.assertIsHTMLInputElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLInputElement')
    }),
    (goog.dom.asserts.assertIsHTMLTextAreaElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLTextAreaElement')
    }),
    (goog.dom.asserts.assertIsHTMLCanvasElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLCanvasElement')
    }),
    (goog.dom.asserts.assertIsHTMLEmbedElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLEmbedElement')
    }),
    (goog.dom.asserts.assertIsHTMLFormElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLFormElement')
    }),
    (goog.dom.asserts.assertIsHTMLFrameElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLFrameElement')
    }),
    (goog.dom.asserts.assertIsHTMLIFrameElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLIFrameElement')
    }),
    (goog.dom.asserts.assertIsHTMLObjectElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLObjectElement')
    }),
    (goog.dom.asserts.assertIsHTMLScriptElement = function (e) {
      return goog.dom.asserts.assertIsElementType_(e, 'HTMLScriptElement')
    }),
    (goog.dom.asserts.debugStringForType_ = function (e) {
      if (!goog.isObject(e)) return void 0 === e ? 'undefined' : null === e ? 'null' : typeof e
      try {
        return e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e)
      } catch (e) {
        return '<object could not be stringified>'
      }
    }),
    (goog.dom.asserts.getWindow_ = function (e) {
      try {
        var t = e && e.ownerDocument,
          o = t && (t.defaultView || t.parentWindow)
        if ((o = o || goog.global).Element && o.Location) return o
      } catch (e) {}
      return null
    }),
    (goog.functions = {}),
    (goog.functions.constant = function (e) {
      return function () {
        return e
      }
    }),
    (goog.functions.FALSE = function () {
      return !1
    }),
    (goog.functions.TRUE = function () {
      return !0
    }),
    (goog.functions.NULL = function () {
      return null
    }),
    (goog.functions.identity = function (e, t) {
      return e
    }),
    (goog.functions.error = function (e) {
      return function () {
        throw Error(e)
      }
    }),
    (goog.functions.fail = function (e) {
      return function () {
        throw e
      }
    }),
    (goog.functions.lock = function (e, t) {
      return (
        (t = t || 0),
        function () {
          return e.apply(this, Array.prototype.slice.call(arguments, 0, t))
        }
      )
    }),
    (goog.functions.nth = function (e) {
      return function () {
        return arguments[e]
      }
    }),
    (goog.functions.partialRight = function (e, t) {
      var o = Array.prototype.slice.call(arguments, 1)
      return function () {
        var t = Array.prototype.slice.call(arguments)
        return t.push.apply(t, o), e.apply(this, t)
      }
    }),
    (goog.functions.withReturnValue = function (e, t) {
      return goog.functions.sequence(e, goog.functions.constant(t))
    }),
    (goog.functions.equalTo = function (e, t) {
      return function (o) {
        return t ? e == o : e === o
      }
    }),
    (goog.functions.compose = function (e, t) {
      var o = arguments,
        r = o.length
      return function () {
        var e
        r && (e = o[r - 1].apply(this, arguments))
        for (var t = r - 2; 0 <= t; t--) e = o[t].call(this, e)
        return e
      }
    }),
    (goog.functions.sequence = function (e) {
      var t = arguments,
        o = t.length
      return function () {
        for (var e, r = 0; r < o; r++) e = t[r].apply(this, arguments)
        return e
      }
    }),
    (goog.functions.and = function (e) {
      var t = arguments,
        o = t.length
      return function () {
        for (var e = 0; e < o; e++) if (!t[e].apply(this, arguments)) return !1
        return !0
      }
    }),
    (goog.functions.or = function (e) {
      var t = arguments,
        o = t.length
      return function () {
        for (var e = 0; e < o; e++) if (t[e].apply(this, arguments)) return !0
        return !1
      }
    }),
    (goog.functions.not = function (e) {
      return function () {
        return !e.apply(this, arguments)
      }
    }),
    (goog.functions.create = function (e, t) {
      var o = function () {}
      return (
        (o.prototype = e.prototype),
        (o = new o()),
        e.apply(o, Array.prototype.slice.call(arguments, 1)),
        o
      )
    }),
    (goog.functions.CACHE_RETURN_VALUE = !0),
    (goog.functions.cacheReturnValue = function (e) {
      var t,
        o = !1
      return function () {
        return goog.functions.CACHE_RETURN_VALUE ? (o || ((t = e()), (o = !0)), t) : e()
      }
    }),
    (goog.functions.once = function (e) {
      var t = e
      return function () {
        if (t) {
          var e = t
          ;(t = null), e()
        }
      }
    }),
    (goog.functions.debounce = function (e, t, o) {
      var r = 0
      return function (n) {
        goog.global.clearTimeout(r)
        var s = arguments
        r = goog.global.setTimeout(function () {
          e.apply(o, s)
        }, t)
      }
    }),
    (goog.functions.throttle = function (e, t, o) {
      var r = 0,
        n = !1,
        s = [],
        i = function () {
          ;(r = 0), n && ((n = !1), g())
        },
        g = function () {
          ;(r = goog.global.setTimeout(i, t)), e.apply(o, s)
        }
      return function (e) {
        ;(s = arguments), r ? (n = !0) : g()
      }
    }),
    (goog.functions.rateLimit = function (e, t, o) {
      var r = 0,
        n = function () {
          r = 0
        }
      return function (s) {
        r || ((r = goog.global.setTimeout(n, t)), e.apply(o, arguments))
      }
    }),
    (goog.dom.HtmlElement = function () {}),
    (goog.dom.TagName = function (e) {
      this.tagName_ = e
    }),
    (goog.dom.TagName.prototype.toString = function () {
      return this.tagName_
    }),
    (goog.dom.TagName.A = new goog.dom.TagName('A')),
    (goog.dom.TagName.ABBR = new goog.dom.TagName('ABBR')),
    (goog.dom.TagName.ACRONYM = new goog.dom.TagName('ACRONYM')),
    (goog.dom.TagName.ADDRESS = new goog.dom.TagName('ADDRESS')),
    (goog.dom.TagName.APPLET = new goog.dom.TagName('APPLET')),
    (goog.dom.TagName.AREA = new goog.dom.TagName('AREA')),
    (goog.dom.TagName.ARTICLE = new goog.dom.TagName('ARTICLE')),
    (goog.dom.TagName.ASIDE = new goog.dom.TagName('ASIDE')),
    (goog.dom.TagName.AUDIO = new goog.dom.TagName('AUDIO')),
    (goog.dom.TagName.B = new goog.dom.TagName('B')),
    (goog.dom.TagName.BASE = new goog.dom.TagName('BASE')),
    (goog.dom.TagName.BASEFONT = new goog.dom.TagName('BASEFONT')),
    (goog.dom.TagName.BDI = new goog.dom.TagName('BDI')),
    (goog.dom.TagName.BDO = new goog.dom.TagName('BDO')),
    (goog.dom.TagName.BIG = new goog.dom.TagName('BIG')),
    (goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName('BLOCKQUOTE')),
    (goog.dom.TagName.BODY = new goog.dom.TagName('BODY')),
    (goog.dom.TagName.BR = new goog.dom.TagName('BR')),
    (goog.dom.TagName.BUTTON = new goog.dom.TagName('BUTTON')),
    (goog.dom.TagName.CANVAS = new goog.dom.TagName('CANVAS')),
    (goog.dom.TagName.CAPTION = new goog.dom.TagName('CAPTION')),
    (goog.dom.TagName.CENTER = new goog.dom.TagName('CENTER')),
    (goog.dom.TagName.CITE = new goog.dom.TagName('CITE')),
    (goog.dom.TagName.CODE = new goog.dom.TagName('CODE')),
    (goog.dom.TagName.COL = new goog.dom.TagName('COL')),
    (goog.dom.TagName.COLGROUP = new goog.dom.TagName('COLGROUP')),
    (goog.dom.TagName.COMMAND = new goog.dom.TagName('COMMAND')),
    (goog.dom.TagName.DATA = new goog.dom.TagName('DATA')),
    (goog.dom.TagName.DATALIST = new goog.dom.TagName('DATALIST')),
    (goog.dom.TagName.DD = new goog.dom.TagName('DD')),
    (goog.dom.TagName.DEL = new goog.dom.TagName('DEL')),
    (goog.dom.TagName.DETAILS = new goog.dom.TagName('DETAILS')),
    (goog.dom.TagName.DFN = new goog.dom.TagName('DFN')),
    (goog.dom.TagName.DIALOG = new goog.dom.TagName('DIALOG')),
    (goog.dom.TagName.DIR = new goog.dom.TagName('DIR')),
    (goog.dom.TagName.DIV = new goog.dom.TagName('DIV')),
    (goog.dom.TagName.DL = new goog.dom.TagName('DL')),
    (goog.dom.TagName.DT = new goog.dom.TagName('DT')),
    (goog.dom.TagName.EM = new goog.dom.TagName('EM')),
    (goog.dom.TagName.EMBED = new goog.dom.TagName('EMBED')),
    (goog.dom.TagName.FIELDSET = new goog.dom.TagName('FIELDSET')),
    (goog.dom.TagName.FIGCAPTION = new goog.dom.TagName('FIGCAPTION')),
    (goog.dom.TagName.FIGURE = new goog.dom.TagName('FIGURE')),
    (goog.dom.TagName.FONT = new goog.dom.TagName('FONT')),
    (goog.dom.TagName.FOOTER = new goog.dom.TagName('FOOTER')),
    (goog.dom.TagName.FORM = new goog.dom.TagName('FORM')),
    (goog.dom.TagName.FRAME = new goog.dom.TagName('FRAME')),
    (goog.dom.TagName.FRAMESET = new goog.dom.TagName('FRAMESET')),
    (goog.dom.TagName.H1 = new goog.dom.TagName('H1')),
    (goog.dom.TagName.H2 = new goog.dom.TagName('H2')),
    (goog.dom.TagName.H3 = new goog.dom.TagName('H3')),
    (goog.dom.TagName.H4 = new goog.dom.TagName('H4')),
    (goog.dom.TagName.H5 = new goog.dom.TagName('H5')),
    (goog.dom.TagName.H6 = new goog.dom.TagName('H6')),
    (goog.dom.TagName.HEAD = new goog.dom.TagName('HEAD')),
    (goog.dom.TagName.HEADER = new goog.dom.TagName('HEADER')),
    (goog.dom.TagName.HGROUP = new goog.dom.TagName('HGROUP')),
    (goog.dom.TagName.HR = new goog.dom.TagName('HR')),
    (goog.dom.TagName.HTML = new goog.dom.TagName('HTML')),
    (goog.dom.TagName.I = new goog.dom.TagName('I')),
    (goog.dom.TagName.IFRAME = new goog.dom.TagName('IFRAME')),
    (goog.dom.TagName.IMG = new goog.dom.TagName('IMG')),
    (goog.dom.TagName.INPUT = new goog.dom.TagName('INPUT')),
    (goog.dom.TagName.INS = new goog.dom.TagName('INS')),
    (goog.dom.TagName.ISINDEX = new goog.dom.TagName('ISINDEX')),
    (goog.dom.TagName.KBD = new goog.dom.TagName('KBD')),
    (goog.dom.TagName.KEYGEN = new goog.dom.TagName('KEYGEN')),
    (goog.dom.TagName.LABEL = new goog.dom.TagName('LABEL')),
    (goog.dom.TagName.LEGEND = new goog.dom.TagName('LEGEND')),
    (goog.dom.TagName.LI = new goog.dom.TagName('LI')),
    (goog.dom.TagName.LINK = new goog.dom.TagName('LINK')),
    (goog.dom.TagName.MAIN = new goog.dom.TagName('MAIN')),
    (goog.dom.TagName.MAP = new goog.dom.TagName('MAP')),
    (goog.dom.TagName.MARK = new goog.dom.TagName('MARK')),
    (goog.dom.TagName.MATH = new goog.dom.TagName('MATH')),
    (goog.dom.TagName.MENU = new goog.dom.TagName('MENU')),
    (goog.dom.TagName.MENUITEM = new goog.dom.TagName('MENUITEM')),
    (goog.dom.TagName.META = new goog.dom.TagName('META')),
    (goog.dom.TagName.METER = new goog.dom.TagName('METER')),
    (goog.dom.TagName.NAV = new goog.dom.TagName('NAV')),
    (goog.dom.TagName.NOFRAMES = new goog.dom.TagName('NOFRAMES')),
    (goog.dom.TagName.NOSCRIPT = new goog.dom.TagName('NOSCRIPT')),
    (goog.dom.TagName.OBJECT = new goog.dom.TagName('OBJECT')),
    (goog.dom.TagName.OL = new goog.dom.TagName('OL')),
    (goog.dom.TagName.OPTGROUP = new goog.dom.TagName('OPTGROUP')),
    (goog.dom.TagName.OPTION = new goog.dom.TagName('OPTION')),
    (goog.dom.TagName.OUTPUT = new goog.dom.TagName('OUTPUT')),
    (goog.dom.TagName.P = new goog.dom.TagName('P')),
    (goog.dom.TagName.PARAM = new goog.dom.TagName('PARAM')),
    (goog.dom.TagName.PICTURE = new goog.dom.TagName('PICTURE')),
    (goog.dom.TagName.PRE = new goog.dom.TagName('PRE')),
    (goog.dom.TagName.PROGRESS = new goog.dom.TagName('PROGRESS')),
    (goog.dom.TagName.Q = new goog.dom.TagName('Q')),
    (goog.dom.TagName.RP = new goog.dom.TagName('RP')),
    (goog.dom.TagName.RT = new goog.dom.TagName('RT')),
    (goog.dom.TagName.RTC = new goog.dom.TagName('RTC')),
    (goog.dom.TagName.RUBY = new goog.dom.TagName('RUBY')),
    (goog.dom.TagName.S = new goog.dom.TagName('S')),
    (goog.dom.TagName.SAMP = new goog.dom.TagName('SAMP')),
    (goog.dom.TagName.SCRIPT = new goog.dom.TagName('SCRIPT')),
    (goog.dom.TagName.SECTION = new goog.dom.TagName('SECTION')),
    (goog.dom.TagName.SELECT = new goog.dom.TagName('SELECT')),
    (goog.dom.TagName.SMALL = new goog.dom.TagName('SMALL')),
    (goog.dom.TagName.SOURCE = new goog.dom.TagName('SOURCE')),
    (goog.dom.TagName.SPAN = new goog.dom.TagName('SPAN')),
    (goog.dom.TagName.STRIKE = new goog.dom.TagName('STRIKE')),
    (goog.dom.TagName.STRONG = new goog.dom.TagName('STRONG')),
    (goog.dom.TagName.STYLE = new goog.dom.TagName('STYLE')),
    (goog.dom.TagName.SUB = new goog.dom.TagName('SUB')),
    (goog.dom.TagName.SUMMARY = new goog.dom.TagName('SUMMARY')),
    (goog.dom.TagName.SUP = new goog.dom.TagName('SUP')),
    (goog.dom.TagName.SVG = new goog.dom.TagName('SVG')),
    (goog.dom.TagName.TABLE = new goog.dom.TagName('TABLE')),
    (goog.dom.TagName.TBODY = new goog.dom.TagName('TBODY')),
    (goog.dom.TagName.TD = new goog.dom.TagName('TD')),
    (goog.dom.TagName.TEMPLATE = new goog.dom.TagName('TEMPLATE')),
    (goog.dom.TagName.TEXTAREA = new goog.dom.TagName('TEXTAREA')),
    (goog.dom.TagName.TFOOT = new goog.dom.TagName('TFOOT')),
    (goog.dom.TagName.TH = new goog.dom.TagName('TH')),
    (goog.dom.TagName.THEAD = new goog.dom.TagName('THEAD')),
    (goog.dom.TagName.TIME = new goog.dom.TagName('TIME')),
    (goog.dom.TagName.TITLE = new goog.dom.TagName('TITLE')),
    (goog.dom.TagName.TR = new goog.dom.TagName('TR')),
    (goog.dom.TagName.TRACK = new goog.dom.TagName('TRACK')),
    (goog.dom.TagName.TT = new goog.dom.TagName('TT')),
    (goog.dom.TagName.U = new goog.dom.TagName('U')),
    (goog.dom.TagName.UL = new goog.dom.TagName('UL')),
    (goog.dom.TagName.VAR = new goog.dom.TagName('VAR')),
    (goog.dom.TagName.VIDEO = new goog.dom.TagName('VIDEO')),
    (goog.dom.TagName.WBR = new goog.dom.TagName('WBR')),
    (goog.dom.tags = {}),
    (goog.dom.tags.VOID_TAGS_ = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }),
    (goog.dom.tags.isVoidTag = function (e) {
      return !0 === goog.dom.tags.VOID_TAGS_[e]
    }),
    (goog.html = {}),
    (goog.html.trustedtypes = {}),
    (goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME
      ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + '#html')
      : null),
    (goog.string = {}),
    (goog.string.TypedString = function () {}),
    (goog.string.Const = function (e, t) {
      ;(this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
        (e === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && t) || ''),
        (this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =
          goog.string.Const.TYPE_MARKER_)
    }),
    (goog.string.Const.prototype.implementsGoogStringTypedString = !0),
    (goog.string.Const.prototype.getTypedStringValue = function () {
      return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
    }),
    (goog.string.Const.prototype.toString = function () {
      return 'Const{' + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + '}'
    }),
    (goog.string.Const.unwrap = function (e) {
      return e instanceof goog.string.Const &&
        e.constructor === goog.string.Const &&
        e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_
        ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_
        : (goog.asserts.fail("expected object of type Const, got '" + e + "'"), 'type_error:Const')
    }),
    (goog.string.Const.from = function (e) {
      return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, e)
    }),
    (goog.string.Const.TYPE_MARKER_ = {}),
    (goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
    (goog.string.Const.EMPTY = goog.string.Const.from('')),
    (goog.html.SafeScript = function () {
      ;(this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ''),
        (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
          goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
    }),
    (goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0),
    (goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
    (goog.html.SafeScript.fromConstant = function (e) {
      return 0 === (e = goog.string.Const.unwrap(e)).length
        ? goog.html.SafeScript.EMPTY
        : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)
    }),
    (goog.html.SafeScript.fromConstantAndArgs = function (e, t) {
      for (var o = [], r = 1; r < arguments.length; r++)
        o.push(goog.html.SafeScript.stringify_(arguments[r]))
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
        '(' + goog.string.Const.unwrap(e) + ')(' + o.join(', ') + ');',
      )
    }),
    (goog.html.SafeScript.fromJson = function (e) {
      return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
        goog.html.SafeScript.stringify_(e),
      )
    }),
    (goog.html.SafeScript.prototype.getTypedStringValue = function () {
      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()
    }),
    goog.DEBUG &&
      (goog.html.SafeScript.prototype.toString = function () {
        return 'SafeScript{' + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + '}'
      }),
    (goog.html.SafeScript.unwrap = function (e) {
      return goog.html.SafeScript.unwrapTrustedScript(e).toString()
    }),
    (goog.html.SafeScript.unwrapTrustedScript = function (e) {
      return e instanceof goog.html.SafeScript &&
        e.constructor === goog.html.SafeScript &&
        e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
          goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_
        : (goog.asserts.fail(
            "expected object of type SafeScript, got '" + e + "' of type " + goog.typeOf(e),
          ),
          'type_error:SafeScript')
    }),
    (goog.html.SafeScript.stringify_ = function (e) {
      return JSON.stringify(e).replace(/</g, '\\x3c')
    }),
    (goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (e) {
      return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(e)
    }),
    (goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
      return (
        (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes
          .PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(e)
          : e),
        this
      )
    }),
    (goog.html.SafeScript.EMPTY =
      goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse('')),
    (goog.fs = {}),
    (goog.fs.url = {}),
    (goog.fs.url.createObjectUrl = function (e) {
      return goog.fs.url.getUrlObject_().createObjectURL(e)
    }),
    (goog.fs.url.revokeObjectUrl = function (e) {
      goog.fs.url.getUrlObject_().revokeObjectURL(e)
    }),
    (goog.fs.url.getUrlObject_ = function () {
      var e = goog.fs.url.findUrlObject_()
      if (null != e) return e
      throw Error("This browser doesn't seem to support blob URLs")
    }),
    (goog.fs.url.findUrlObject_ = function () {
      return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL)
        ? goog.global.URL
        : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL)
        ? goog.global.webkitURL
        : goog.isDef(goog.global.createObjectURL)
        ? goog.global
        : null
    }),
    (goog.fs.url.browserSupportsObjectUrls = function () {
      return null != goog.fs.url.findUrlObject_()
    }),
    (goog.i18n = {}),
    (goog.i18n.bidi = {}),
    (goog.i18n.bidi.FORCE_RTL = !1),
    (goog.i18n.bidi.IS_RTL =
      goog.i18n.bidi.FORCE_RTL ||
      (('ar' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'fa' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'he' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'iw' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'ps' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'sd' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'ug' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'ur' == goog.LOCALE.substring(0, 2).toLowerCase() ||
        'yi' == goog.LOCALE.substring(0, 2).toLowerCase()) &&
        (2 == goog.LOCALE.length ||
          '-' == goog.LOCALE.substring(2, 3) ||
          '_' == goog.LOCALE.substring(2, 3))) ||
      (3 <= goog.LOCALE.length &&
        'ckb' == goog.LOCALE.substring(0, 3).toLowerCase() &&
        (3 == goog.LOCALE.length ||
          '-' == goog.LOCALE.substring(3, 4) ||
          '_' == goog.LOCALE.substring(3, 4))) ||
      (7 <= goog.LOCALE.length &&
        ('-' == goog.LOCALE.substring(2, 3) || '_' == goog.LOCALE.substring(2, 3)) &&
        ('adlm' == goog.LOCALE.substring(3, 7).toLowerCase() ||
          'arab' == goog.LOCALE.substring(3, 7).toLowerCase() ||
          'hebr' == goog.LOCALE.substring(3, 7).toLowerCase() ||
          'nkoo' == goog.LOCALE.substring(3, 7).toLowerCase() ||
          'rohg' == goog.LOCALE.substring(3, 7).toLowerCase() ||
          'thaa' == goog.LOCALE.substring(3, 7).toLowerCase())) ||
      (8 <= goog.LOCALE.length &&
        ('-' == goog.LOCALE.substring(3, 4) || '_' == goog.LOCALE.substring(3, 4)) &&
        ('adlm' == goog.LOCALE.substring(4, 8).toLowerCase() ||
          'arab' == goog.LOCALE.substring(4, 8).toLowerCase() ||
          'hebr' == goog.LOCALE.substring(4, 8).toLowerCase() ||
          'nkoo' == goog.LOCALE.substring(4, 8).toLowerCase() ||
          'rohg' == goog.LOCALE.substring(4, 8).toLowerCase() ||
          'thaa' == goog.LOCALE.substring(4, 8).toLowerCase()))),
    (goog.i18n.bidi.Format = { LRE: '‪', RLE: '‫', PDF: '‬', LRM: '‎', RLM: '‏' }),
    (goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 }),
    (goog.i18n.bidi.RIGHT = 'right'),
    (goog.i18n.bidi.LEFT = 'left'),
    (goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
      ? goog.i18n.bidi.LEFT
      : goog.i18n.bidi.RIGHT),
    (goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT),
    (goog.i18n.bidi.toDir = function (e, t) {
      return 'number' == typeof e
        ? 0 < e
          ? goog.i18n.bidi.Dir.LTR
          : 0 > e
          ? goog.i18n.bidi.Dir.RTL
          : t
          ? null
          : goog.i18n.bidi.Dir.NEUTRAL
        : null == e
        ? null
        : e
        ? goog.i18n.bidi.Dir.RTL
        : goog.i18n.bidi.Dir.LTR
    }),
    (goog.i18n.bidi.ltrChars_ =
      'A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿'),
    (goog.i18n.bidi.rtlChars_ = '֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ'),
    (goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g),
    (goog.i18n.bidi.stripHtmlIfNeeded_ = function (e, t) {
      return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, '') : e
    }),
    (goog.i18n.bidi.rtlCharReg_ = new RegExp('[' + goog.i18n.bidi.rtlChars_ + ']')),
    (goog.i18n.bidi.ltrCharReg_ = new RegExp('[' + goog.i18n.bidi.ltrChars_ + ']')),
    (goog.i18n.bidi.hasAnyRtl = function (e, t) {
      return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }),
    (goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl),
    (goog.i18n.bidi.hasAnyLtr = function (e, t) {
      return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }),
    (goog.i18n.bidi.ltrRe_ = new RegExp('^[' + goog.i18n.bidi.ltrChars_ + ']')),
    (goog.i18n.bidi.rtlRe_ = new RegExp('^[' + goog.i18n.bidi.rtlChars_ + ']')),
    (goog.i18n.bidi.isRtlChar = function (e) {
      return goog.i18n.bidi.rtlRe_.test(e)
    }),
    (goog.i18n.bidi.isLtrChar = function (e) {
      return goog.i18n.bidi.ltrRe_.test(e)
    }),
    (goog.i18n.bidi.isNeutralChar = function (e) {
      return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e)
    }),
    (goog.i18n.bidi.ltrDirCheckRe_ = new RegExp(
      '^[^' + goog.i18n.bidi.rtlChars_ + ']*[' + goog.i18n.bidi.ltrChars_ + ']',
    )),
    (goog.i18n.bidi.rtlDirCheckRe_ = new RegExp(
      '^[^' + goog.i18n.bidi.ltrChars_ + ']*[' + goog.i18n.bidi.rtlChars_ + ']',
    )),
    (goog.i18n.bidi.startsWithRtl = function (e, t) {
      return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }),
    (goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl),
    (goog.i18n.bidi.startsWithLtr = function (e, t) {
      return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }),
    (goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr),
    (goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/),
    (goog.i18n.bidi.isNeutralText = function (e, t) {
      return (
        (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t)),
        goog.i18n.bidi.isRequiredLtrRe_.test(e) ||
          (!goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e))
      )
    }),
    (goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp(
      '[' + goog.i18n.bidi.ltrChars_ + '][^' + goog.i18n.bidi.rtlChars_ + ']*$',
    )),
    (goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp(
      '[' + goog.i18n.bidi.rtlChars_ + '][^' + goog.i18n.bidi.ltrChars_ + ']*$',
    )),
    (goog.i18n.bidi.endsWithLtr = function (e, t) {
      return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }),
    (goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr),
    (goog.i18n.bidi.endsWithRtl = function (e, t) {
      return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
    }),
    (goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl),
    (goog.i18n.bidi.rtlLocalesRe_ =
      /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i),
    (goog.i18n.bidi.isRtlLanguage = function (e) {
      return goog.i18n.bidi.rtlLocalesRe_.test(e)
    }),
    (goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g),
    (goog.i18n.bidi.guardBracketInText = function (e, t) {
      return (
        (t = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t)
          ? goog.i18n.bidi.Format.RLM
          : goog.i18n.bidi.Format.LRM),
        e.replace(goog.i18n.bidi.bracketGuardTextRe_, t + '$&' + t)
      )
    }),
    (goog.i18n.bidi.enforceRtlInHtml = function (e) {
      return '<' == e.charAt(0)
        ? e.replace(/<\w+/, '$& dir=rtl')
        : '\n<span dir=rtl>' + e + '</span>'
    }),
    (goog.i18n.bidi.enforceRtlInText = function (e) {
      return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF
    }),
    (goog.i18n.bidi.enforceLtrInHtml = function (e) {
      return '<' == e.charAt(0)
        ? e.replace(/<\w+/, '$& dir=ltr')
        : '\n<span dir=ltr>' + e + '</span>'
    }),
    (goog.i18n.bidi.enforceLtrInText = function (e) {
      return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF
    }),
    (goog.i18n.bidi.dimensionsRe_ =
      /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g),
    (goog.i18n.bidi.leftRe_ = /left/gi),
    (goog.i18n.bidi.rightRe_ = /right/gi),
    (goog.i18n.bidi.tempRe_ = /%%%%/g),
    (goog.i18n.bidi.mirrorCSS = function (e) {
      return e
        .replace(goog.i18n.bidi.dimensionsRe_, ':$1 $4 $3 $2')
        .replace(goog.i18n.bidi.leftRe_, '%%%%')
        .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
        .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
    }),
    (goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g),
    (goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g),
    (goog.i18n.bidi.normalizeHebrewQuote = function (e) {
      return e
        .replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, '$1״')
        .replace(goog.i18n.bidi.singleQuoteSubstituteRe_, '$1׳')
    }),
    (goog.i18n.bidi.wordSeparatorRe_ = /\s+/),
    (goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/),
    (goog.i18n.bidi.rtlDetectionThreshold_ = 0.4),
    (goog.i18n.bidi.estimateDirection = function (e, t) {
      var o = 0,
        r = 0,
        n = !1
      for (
        e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t).split(goog.i18n.bidi.wordSeparatorRe_), t = 0;
        t < e.length;
        t++
      ) {
        var s = e[t]
        goog.i18n.bidi.startsWithRtl(s)
          ? (o++, r++)
          : goog.i18n.bidi.isRequiredLtrRe_.test(s)
          ? (n = !0)
          : goog.i18n.bidi.hasAnyLtr(s)
          ? r++
          : goog.i18n.bidi.hasNumeralsRe_.test(s) && (n = !0)
      }
      return 0 == r
        ? n
          ? goog.i18n.bidi.Dir.LTR
          : goog.i18n.bidi.Dir.NEUTRAL
        : o / r > goog.i18n.bidi.rtlDetectionThreshold_
        ? goog.i18n.bidi.Dir.RTL
        : goog.i18n.bidi.Dir.LTR
    }),
    (goog.i18n.bidi.detectRtlDirectionality = function (e, t) {
      return goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
    }),
    (goog.i18n.bidi.setElementDirAndAlign = function (e, t) {
      e &&
        (t = goog.i18n.bidi.toDir(t)) &&
        ((e.style.textAlign =
          t == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT),
        (e.dir = t == goog.i18n.bidi.Dir.RTL ? 'rtl' : 'ltr'))
    }),
    (goog.i18n.bidi.setElementDirByTextDirectionality = function (e, t) {
      switch (goog.i18n.bidi.estimateDirection(t)) {
        case goog.i18n.bidi.Dir.LTR:
          e.dir = 'ltr'
          break
        case goog.i18n.bidi.Dir.RTL:
          e.dir = 'rtl'
          break
        default:
          e.removeAttribute('dir')
      }
    }),
    (goog.i18n.bidi.DirectionalString = function () {}),
    (goog.html.TrustedResourceUrl = function () {
      ;(this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = ''),
        (this.trustedURL_ = null),
        (this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
          goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
    }),
    (goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0),
    (goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
      return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()
    }),
    (goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0),
    (goog.html.TrustedResourceUrl.prototype.getDirection = function () {
      return goog.i18n.bidi.Dir.LTR
    }),
    (goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (e, t) {
      var o = goog.html.TrustedResourceUrl.unwrap(this),
        r = (o = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(o))[3] || ''
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
        o[1] +
          goog.html.TrustedResourceUrl.stringifyParams_('?', o[2] || '', e) +
          goog.html.TrustedResourceUrl.stringifyParams_('#', r, t),
      )
    }),
    goog.DEBUG &&
      (goog.html.TrustedResourceUrl.prototype.toString = function () {
        return (
          'TrustedResourceUrl{' + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + '}'
        )
      }),
    (goog.html.TrustedResourceUrl.unwrap = function (e) {
      return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e).toString()
    }),
    (goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (e) {
      return e instanceof goog.html.TrustedResourceUrl &&
        e.constructor === goog.html.TrustedResourceUrl &&
        e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
          goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
        : (goog.asserts.fail(
            "expected object of type TrustedResourceUrl, got '" + e + "' of type " + goog.typeOf(e),
          ),
          'type_error:TrustedResourceUrl')
    }),
    (goog.html.TrustedResourceUrl.unwrapTrustedURL = function (e) {
      return e.trustedURL_ ? e.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(e)
    }),
    (goog.html.TrustedResourceUrl.format = function (e, t) {
      var o = goog.string.Const.unwrap(e)
      if (!goog.html.TrustedResourceUrl.BASE_URL_.test(o))
        throw Error('Invalid TrustedResourceUrl format: ' + o)
      return (
        (e = o.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function (e, r) {
          if (!Object.prototype.hasOwnProperty.call(t, r))
            throw Error(
              'Found marker, "' +
                r +
                '", in format string, "' +
                o +
                '", but no valid label mapping found in args: ' +
                JSON.stringify(t),
            )
          return (e = t[r]) instanceof goog.string.Const
            ? goog.string.Const.unwrap(e)
            : encodeURIComponent(String(e))
        })),
        goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g),
    (goog.html.TrustedResourceUrl.BASE_URL_ =
      /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i),
    (goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/),
    (goog.html.TrustedResourceUrl.formatWithParams = function (e, t, o, r) {
      return goog.html.TrustedResourceUrl.format(e, t).cloneWithParams(o, r)
    }),
    (goog.html.TrustedResourceUrl.fromConstant = function (e) {
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
        goog.string.Const.unwrap(e),
      )
    }),
    (goog.html.TrustedResourceUrl.fromConstants = function (e) {
      for (var t = '', o = 0; o < e.length; o++) t += goog.string.Const.unwrap(e[o])
      return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
        t,
      )
    }),
    (goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
    (goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
      function (e) {
        var t = new goog.html.TrustedResourceUrl()
        return (
          (t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes
            .PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
            ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(e)
            : e),
          goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY &&
            (t.trustedURL_ =
              goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e)),
          t
        )
      }),
    (goog.html.TrustedResourceUrl.stringifyParams_ = function (e, t, o) {
      if (null == o) return t
      if (goog.isString(o)) return o ? e + encodeURIComponent(o) : ''
      for (var r in o) {
        var n = o[r]
        n = goog.isArray(n) ? n : [n]
        for (var s = 0; s < n.length; s++) {
          var i = n[s]
          null != i &&
            (t || (t = e),
            (t +=
              (t.length > e.length ? '&' : '') +
              encodeURIComponent(r) +
              '=' +
              encodeURIComponent(String(i))))
        }
      }
      return t
    }),
    (goog.string.internal = {}),
    (goog.string.internal.startsWith = function (e, t) {
      return 0 == e.lastIndexOf(t, 0)
    }),
    (goog.string.internal.endsWith = function (e, t) {
      var o = e.length - t.length
      return 0 <= o && e.indexOf(t, o) == o
    }),
    (goog.string.internal.caseInsensitiveStartsWith = function (e, t) {
      return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(0, t.length))
    }),
    (goog.string.internal.caseInsensitiveEndsWith = function (e, t) {
      return (
        0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
      )
    }),
    (goog.string.internal.caseInsensitiveEquals = function (e, t) {
      return e.toLowerCase() == t.toLowerCase()
    }),
    (goog.string.internal.isEmptyOrWhitespace = function (e) {
      return /^[\s\xa0]*$/.test(e)
    }),
    (goog.string.internal.trim =
      goog.TRUSTED_SITE && String.prototype.trim
        ? function (e) {
            return e.trim()
          }
        : function (e) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
          }),
    (goog.string.internal.caseInsensitiveCompare = function (e, t) {
      return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase()) ? -1 : e == t ? 0 : 1
    }),
    (goog.string.internal.newLineToBr = function (e, t) {
      return e.replace(/(\r\n|\r|\n)/g, t ? '<br />' : '<br>')
    }),
    (goog.string.internal.htmlEscape = function (e, t) {
      if (t)
        e = e
          .replace(goog.string.internal.AMP_RE_, '&amp;')
          .replace(goog.string.internal.LT_RE_, '&lt;')
          .replace(goog.string.internal.GT_RE_, '&gt;')
          .replace(goog.string.internal.QUOT_RE_, '&quot;')
          .replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;')
          .replace(goog.string.internal.NULL_RE_, '&#0;')
      else {
        if (!goog.string.internal.ALL_RE_.test(e)) return e
        ;-1 != e.indexOf('&') && (e = e.replace(goog.string.internal.AMP_RE_, '&amp;')),
          -1 != e.indexOf('<') && (e = e.replace(goog.string.internal.LT_RE_, '&lt;')),
          -1 != e.indexOf('>') && (e = e.replace(goog.string.internal.GT_RE_, '&gt;')),
          -1 != e.indexOf('"') && (e = e.replace(goog.string.internal.QUOT_RE_, '&quot;')),
          -1 != e.indexOf("'") && (e = e.replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;')),
          -1 != e.indexOf('\0') && (e = e.replace(goog.string.internal.NULL_RE_, '&#0;'))
      }
      return e
    }),
    (goog.string.internal.AMP_RE_ = /&/g),
    (goog.string.internal.LT_RE_ = /</g),
    (goog.string.internal.GT_RE_ = />/g),
    (goog.string.internal.QUOT_RE_ = /"/g),
    (goog.string.internal.SINGLE_QUOTE_RE_ = /'/g),
    (goog.string.internal.NULL_RE_ = /\x00/g),
    (goog.string.internal.ALL_RE_ = /[\x00&<>"']/),
    (goog.string.internal.whitespaceEscape = function (e, t) {
      return goog.string.internal.newLineToBr(e.replace(/  /g, ' &#160;'), t)
    }),
    (goog.string.internal.contains = function (e, t) {
      return -1 != e.indexOf(t)
    }),
    (goog.string.internal.caseInsensitiveContains = function (e, t) {
      return goog.string.internal.contains(e.toLowerCase(), t.toLowerCase())
    }),
    (goog.string.internal.compareVersions = function (e, t) {
      var o = 0
      ;(e = goog.string.internal.trim(String(e)).split('.')),
        (t = goog.string.internal.trim(String(t)).split('.'))
      for (var r = Math.max(e.length, t.length), n = 0; 0 == o && n < r; n++) {
        var s = e[n] || '',
          i = t[n] || ''
        do {
          if (
            ((s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
            (i = /(\d*)(\D*)(.*)/.exec(i) || ['', '', '', '']),
            0 == s[0].length && 0 == i[0].length)
          )
            break
          o = 0 == s[1].length ? 0 : parseInt(s[1], 10)
          var g = 0 == i[1].length ? 0 : parseInt(i[1], 10)
          ;(o =
            goog.string.internal.compareElements_(o, g) ||
            goog.string.internal.compareElements_(0 == s[2].length, 0 == i[2].length) ||
            goog.string.internal.compareElements_(s[2], i[2])),
            (s = s[3]),
            (i = i[3])
        } while (0 == o)
      }
      return o
    }),
    (goog.string.internal.compareElements_ = function (e, t) {
      return e < t ? -1 : e > t ? 1 : 0
    }),
    (goog.html.SafeUrl = function () {
      ;(this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = ''),
        (this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
          goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
    }),
    (goog.html.SafeUrl.INNOCUOUS_STRING = 'about:invalid#zClosurez'),
    (goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0),
    (goog.html.SafeUrl.prototype.getTypedStringValue = function () {
      return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()
    }),
    (goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0),
    (goog.html.SafeUrl.prototype.getDirection = function () {
      return goog.i18n.bidi.Dir.LTR
    }),
    goog.DEBUG &&
      (goog.html.SafeUrl.prototype.toString = function () {
        return 'SafeUrl{' + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + '}'
      }),
    (goog.html.SafeUrl.unwrap = function (e) {
      return goog.html.SafeUrl.unwrapTrustedURL(e).toString()
    }),
    (goog.html.SafeUrl.unwrapTrustedURL = function (e) {
      return e instanceof goog.html.SafeUrl &&
        e.constructor === goog.html.SafeUrl &&
        e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
          goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_
        : (goog.asserts.fail(
            "expected object of type SafeUrl, got '" + e + "' of type " + goog.typeOf(e),
          ),
          'type_error:SafeUrl')
    }),
    (goog.html.SafeUrl.fromConstant = function (e) {
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
        goog.string.Const.unwrap(e),
      )
    }),
    (goog.html.SAFE_MIME_TYPE_PATTERN_ =
      /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i),
    (goog.html.SafeUrl.isSafeMimeType = function (e) {
      return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e)
    }),
    (goog.html.SafeUrl.fromBlob = function (e) {
      return (
        (e = goog.html.SAFE_MIME_TYPE_PATTERN_.test(e.type)
          ? goog.fs.url.createObjectUrl(e)
          : goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i),
    (goog.html.SafeUrl.fromDataUrl = function (e) {
      var t = (e = e.replace(/(%0A|%0D)/g, '')).match(goog.html.DATA_URL_PATTERN_)
      return (
        (t = t && goog.html.SAFE_MIME_TYPE_PATTERN_.test(t[1])),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
          t ? e : goog.html.SafeUrl.INNOCUOUS_STRING,
        )
      )
    }),
    (goog.html.SafeUrl.fromTelUrl = function (e) {
      return (
        goog.string.internal.caseInsensitiveStartsWith(e, 'tel:') ||
          (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.SIP_URL_PATTERN_ =
      /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i),
    (goog.html.SafeUrl.fromSipUrl = function (e) {
      return (
        goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) ||
          (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.SafeUrl.fromFacebookMessengerUrl = function (e) {
      return (
        goog.string.internal.caseInsensitiveStartsWith(e, 'fb-messenger://share') ||
          (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.SafeUrl.fromWhatsAppUrl = function (e) {
      return (
        goog.string.internal.caseInsensitiveStartsWith(e, 'whatsapp://send') ||
          (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.SafeUrl.fromSmsUrl = function (e) {
      return (
        (goog.string.internal.caseInsensitiveStartsWith(e, 'sms:') &&
          goog.html.SafeUrl.isSmsUrlBodyValid_(e)) ||
          (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.SafeUrl.isSmsUrlBodyValid_ = function (e) {
      var t = e.indexOf('#')
      if ((0 < t && (e = e.substring(0, t)), !(t = e.match(/[?&]body=/gi)))) return !0
      if (1 < t.length) return !1
      if (!(e = e.match(/[?&]body=([^&]*)/)[1])) return !0
      try {
        decodeURIComponent(e)
      } catch (e) {
        return !1
      }
      return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e)
    }),
    (goog.html.SafeUrl.fromSshUrl = function (e) {
      return (
        goog.string.internal.caseInsensitiveStartsWith(e, 'ssh://') ||
          (e = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (e, t) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, e, t)
    }),
    (goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (e, t) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, e, t)
    }),
    (goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (e, t) {
      return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, e, t)
    }),
    (goog.html.SafeUrl.sanitizeExtensionUrl_ = function (e, t, o) {
      return (
        (e = e.exec(t))
          ? ((e = e[1]),
            -1 ==
              (o instanceof goog.string.Const
                ? [goog.string.Const.unwrap(o)]
                : o.map(function (e) {
                    return goog.string.Const.unwrap(e)
                  })
              ).indexOf(e) && (t = goog.html.SafeUrl.INNOCUOUS_STRING))
          : (t = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
      )
    }),
    (goog.html.SafeUrl.fromTrustedResourceUrl = function (e) {
      return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
        goog.html.TrustedResourceUrl.unwrap(e),
      )
    }),
    (goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i),
    (goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_),
    (goog.html.SafeUrl.sanitize = function (e) {
      return e instanceof goog.html.SafeUrl
        ? e
        : ((e =
            'object' == typeof e && e.implementsGoogStringTypedString
              ? e.getTypedStringValue()
              : String(e)),
          goog.html.SAFE_URL_PATTERN_.test(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e))
    }),
    (goog.html.SafeUrl.sanitizeAssertUnchanged = function (e, t) {
      return e instanceof goog.html.SafeUrl
        ? e
        : ((e =
            'object' == typeof e && e.implementsGoogStringTypedString
              ? e.getTypedStringValue()
              : String(e)),
          t &&
          /^data:/i.test(e) &&
          (t = goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() == e
            ? t
            : (goog.asserts.assert(
                goog.html.SAFE_URL_PATTERN_.test(e),
                '%s does not match the safe URL pattern',
                e,
              ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)))
    }),
    (goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
    (goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (e) {
      var t = new goog.html.SafeUrl()
      return (
        (t.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes
          .PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e)
          : e),
        t
      )
    }),
    (goog.html.SafeUrl.ABOUT_BLANK =
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse('about:blank')),
    (goog.html.SafeStyle = function () {
      ;(this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ''),
        (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
          goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
    }),
    (goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0),
    (goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
    (goog.html.SafeStyle.fromConstant = function (e) {
      return 0 === (e = goog.string.Const.unwrap(e)).length
        ? goog.html.SafeStyle.EMPTY
        : (goog.asserts.assert(
            goog.string.internal.endsWith(e, ';'),
            "Last character of style string is not ';': " + e,
          ),
          goog.asserts.assert(
            goog.string.internal.contains(e, ':'),
            'Style string must contain at least one \':\', to specify a "name: value" pair: ' + e,
          ),
          goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e))
    }),
    (goog.html.SafeStyle.prototype.getTypedStringValue = function () {
      return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
    }),
    goog.DEBUG &&
      (goog.html.SafeStyle.prototype.toString = function () {
        return 'SafeStyle{' + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + '}'
      }),
    (goog.html.SafeStyle.unwrap = function (e) {
      return e instanceof goog.html.SafeStyle &&
        e.constructor === goog.html.SafeStyle &&
        e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
          goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_
        : (goog.asserts.fail(
            "expected object of type SafeStyle, got '" + e + "' of type " + goog.typeOf(e),
          ),
          'type_error:SafeStyle')
    }),
    (goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (e) {
      return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(e)
    }),
    (goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
      return (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e), this
    }),
    (goog.html.SafeStyle.EMPTY =
      goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse('')),
    (goog.html.SafeStyle.INNOCUOUS_STRING = 'zClosurez'),
    (goog.html.SafeStyle.create = function (e) {
      var t,
        o = ''
      for (t in e) {
        if (!/^[-_a-zA-Z0-9]+$/.test(t)) throw Error('Name allows only [-_a-zA-Z0-9], got: ' + t)
        var r = e[t]
        null != r &&
          (o +=
            t +
            ':' +
            (r = goog.isArray(r)
              ? goog.array.map(r, goog.html.SafeStyle.sanitizePropertyValue_).join(' ')
              : goog.html.SafeStyle.sanitizePropertyValue_(r)) +
            ';')
      }
      return o
        ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o)
        : goog.html.SafeStyle.EMPTY
    }),
    (goog.html.SafeStyle.sanitizePropertyValue_ = function (e) {
      if (e instanceof goog.html.SafeUrl)
        return (
          'url("' +
          goog.html.SafeUrl.unwrap(e).replace(/</g, '%3c').replace(/[\\"]/g, '\\$&') +
          '")'
        )
      if (
        ((e =
          e instanceof goog.string.Const
            ? goog.string.Const.unwrap(e)
            : goog.html.SafeStyle.sanitizePropertyValueString_(String(e))),
        /[{;}]/.test(e))
      )
        throw new goog.asserts.AssertionError('Value does not allow [{;}], got: %s.', [e])
      return e
    }),
    (goog.html.SafeStyle.sanitizePropertyValueString_ = function (e) {
      var t = e
        .replace(goog.html.SafeStyle.FUNCTIONS_RE_, '$1')
        .replace(goog.html.SafeStyle.FUNCTIONS_RE_, '$1')
        .replace(goog.html.SafeStyle.URL_RE_, 'url')
      return goog.html.SafeStyle.VALUE_RE_.test(t)
        ? goog.html.SafeStyle.COMMENT_RE_.test(e)
          ? (goog.asserts.fail('String value disallows comments, got: ' + e),
            goog.html.SafeStyle.INNOCUOUS_STRING)
          : goog.html.SafeStyle.hasBalancedQuotes_(e)
          ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e)
            ? goog.html.SafeStyle.sanitizeUrl_(e)
            : (goog.asserts.fail(
                'String value requires balanced square brackets and one identifier per pair of brackets, got: ' +
                  e,
              ),
              goog.html.SafeStyle.INNOCUOUS_STRING)
          : (goog.asserts.fail('String value requires balanced quotes, got: ' + e),
            goog.html.SafeStyle.INNOCUOUS_STRING)
        : (goog.asserts.fail(
            'String value allows only ' +
              goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
              ' and simple functions, got: ' +
              e,
          ),
          goog.html.SafeStyle.INNOCUOUS_STRING)
    }),
    (goog.html.SafeStyle.hasBalancedQuotes_ = function (e) {
      for (var t = !0, o = !0, r = 0; r < e.length; r++) {
        var n = e.charAt(r)
        "'" == n && o ? (t = !t) : '"' == n && t && (o = !o)
      }
      return t && o
    }),
    (goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (e) {
      for (var t = !0, o = /^[-_a-zA-Z0-9]$/, r = 0; r < e.length; r++) {
        var n = e.charAt(r)
        if (']' == n) {
          if (t) return !1
          t = !0
        } else if ('[' == n) {
          if (!t) return !1
          t = !1
        } else if (!t && !o.test(n)) return !1
      }
      return t
    }),
    (goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = '[-,."\'%_!# a-zA-Z0-9\\[\\]]'),
    (goog.html.SafeStyle.VALUE_RE_ = new RegExp(
      '^' + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + '+$',
    )),
    (goog.html.SafeStyle.URL_RE_ =
      /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g),
    (goog.html.SafeStyle.FUNCTIONS_RE_ =
      /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g),
    (goog.html.SafeStyle.COMMENT_RE_ = /\/\*/),
    (goog.html.SafeStyle.sanitizeUrl_ = function (e) {
      return e.replace(goog.html.SafeStyle.URL_RE_, function (e, t, o, r) {
        var n = ''
        return (
          (o = o.replace(/^(['"])(.*)\1$/, function (e, t, o) {
            return (n = t), o
          })),
          (e = goog.html.SafeUrl.sanitize(o).getTypedStringValue()),
          t + n + e + n + r
        )
      })
    }),
    (goog.html.SafeStyle.concat = function (e) {
      var t = '',
        o = function (e) {
          goog.isArray(e) ? goog.array.forEach(e, o) : (t += goog.html.SafeStyle.unwrap(e))
        }
      return (
        goog.array.forEach(arguments, o),
        t
          ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t)
          : goog.html.SafeStyle.EMPTY
      )
    }),
    (goog.html.SafeStyleSheet = function () {
      ;(this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ''),
        (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
          goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
    }),
    (goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0),
    (goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
    (goog.html.SafeStyleSheet.createRule = function (e, t) {
      if (goog.string.internal.contains(e, '<'))
        throw Error("Selector does not allow '<', got: " + e)
      var o = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, '')
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o))
        throw Error('Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: ' + e)
      if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(o))
        throw Error('() and [] in selector must be balanced, got: ' + e)
      return (
        t instanceof goog.html.SafeStyle || (t = goog.html.SafeStyle.create(t)),
        (e = e + '{' + goog.html.SafeStyle.unwrap(t).replace(/</g, '\\3C ') + '}'),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)
      )
    }),
    (goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (e) {
      for (var t = { '(': ')', '[': ']' }, o = [], r = 0; r < e.length; r++) {
        var n = e[r]
        if (t[n]) o.push(t[n])
        else if (goog.object.contains(t, n) && o.pop() != n) return !1
      }
      return 0 == o.length
    }),
    (goog.html.SafeStyleSheet.concat = function (e) {
      var t = '',
        o = function (e) {
          goog.isArray(e) ? goog.array.forEach(e, o) : (t += goog.html.SafeStyleSheet.unwrap(e))
        }
      return (
        goog.array.forEach(arguments, o),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
      )
    }),
    (goog.html.SafeStyleSheet.fromConstant = function (e) {
      return 0 === (e = goog.string.Const.unwrap(e)).length
        ? goog.html.SafeStyleSheet.EMPTY
        : (goog.asserts.assert(
            !goog.string.internal.contains(e, '<'),
            "Forbidden '<' character in style sheet string: " + e,
          ),
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e))
    }),
    (goog.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
      return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
    }),
    goog.DEBUG &&
      (goog.html.SafeStyleSheet.prototype.toString = function () {
        return 'SafeStyleSheet{' + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + '}'
      }),
    (goog.html.SafeStyleSheet.unwrap = function (e) {
      return e instanceof goog.html.SafeStyleSheet &&
        e.constructor === goog.html.SafeStyleSheet &&
        e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
          goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
        : (goog.asserts.fail(
            "expected object of type SafeStyleSheet, got '" + e + "' of type " + goog.typeOf(e),
          ),
          'type_error:SafeStyleSheet')
    }),
    (goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (e) {
      return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(e)
    }),
    (goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
      return (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e), this
    }),
    (goog.html.SafeStyleSheet.EMPTY =
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse('')),
    (goog.labs = {}),
    (goog.labs.userAgent = {}),
    (goog.labs.userAgent.util = {}),
    (goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
      var e = goog.labs.userAgent.util.getNavigator_()
      return e && (e = e.userAgent) ? e : ''
    }),
    (goog.labs.userAgent.util.getNavigator_ = function () {
      return goog.global.navigator
    }),
    (goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_()),
    (goog.labs.userAgent.util.setUserAgent = function (e) {
      goog.labs.userAgent.util.userAgent_ =
        e || goog.labs.userAgent.util.getNativeUserAgentString_()
    }),
    (goog.labs.userAgent.util.getUserAgent = function () {
      return goog.labs.userAgent.util.userAgent_
    }),
    (goog.labs.userAgent.util.matchUserAgent = function (e) {
      var t = goog.labs.userAgent.util.getUserAgent()
      return goog.string.internal.contains(t, e)
    }),
    (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
      var t = goog.labs.userAgent.util.getUserAgent()
      return goog.string.internal.caseInsensitiveContains(t, e)
    }),
    (goog.labs.userAgent.util.extractVersionTuples = function (e) {
      for (var t, o = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = []; (t = o.exec(e)); )
        r.push([t[1], t[2], t[3] || void 0])
      return r
    }),
    (goog.labs.userAgent.browser = {}),
    (goog.labs.userAgent.browser.matchOpera_ = function () {
      return goog.labs.userAgent.util.matchUserAgent('Opera')
    }),
    (goog.labs.userAgent.browser.matchIE_ = function () {
      return (
        goog.labs.userAgent.util.matchUserAgent('Trident') ||
        goog.labs.userAgent.util.matchUserAgent('MSIE')
      )
    }),
    (goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
      return goog.labs.userAgent.util.matchUserAgent('Edge')
    }),
    (goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
      return goog.labs.userAgent.util.matchUserAgent('Edg/')
    }),
    (goog.labs.userAgent.browser.matchOperaChromium_ = function () {
      return goog.labs.userAgent.util.matchUserAgent('OPR')
    }),
    (goog.labs.userAgent.browser.matchFirefox_ = function () {
      return (
        goog.labs.userAgent.util.matchUserAgent('Firefox') ||
        goog.labs.userAgent.util.matchUserAgent('FxiOS')
      )
    }),
    (goog.labs.userAgent.browser.matchSafari_ = function () {
      return (
        goog.labs.userAgent.util.matchUserAgent('Safari') &&
        !(
          goog.labs.userAgent.browser.matchChrome_() ||
          goog.labs.userAgent.browser.matchCoast_() ||
          goog.labs.userAgent.browser.matchOpera_() ||
          goog.labs.userAgent.browser.matchEdgeHtml_() ||
          goog.labs.userAgent.browser.matchEdgeChromium_() ||
          goog.labs.userAgent.browser.matchOperaChromium_() ||
          goog.labs.userAgent.browser.matchFirefox_() ||
          goog.labs.userAgent.browser.isSilk() ||
          goog.labs.userAgent.util.matchUserAgent('Android')
        )
      )
    }),
    (goog.labs.userAgent.browser.matchCoast_ = function () {
      return goog.labs.userAgent.util.matchUserAgent('Coast')
    }),
    (goog.labs.userAgent.browser.matchIosWebview_ = function () {
      return (
        (goog.labs.userAgent.util.matchUserAgent('iPad') ||
          goog.labs.userAgent.util.matchUserAgent('iPhone')) &&
        !goog.labs.userAgent.browser.matchSafari_() &&
        !goog.labs.userAgent.browser.matchChrome_() &&
        !goog.labs.userAgent.browser.matchCoast_() &&
        !goog.labs.userAgent.browser.matchFirefox_() &&
        goog.labs.userAgent.util.matchUserAgent('AppleWebKit')
      )
    }),
    (goog.labs.userAgent.browser.matchChrome_ = function () {
      return (
        (goog.labs.userAgent.util.matchUserAgent('Chrome') ||
          goog.labs.userAgent.util.matchUserAgent('CriOS')) &&
        !goog.labs.userAgent.browser.matchEdgeHtml_()
      )
    }),
    (goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
      return (
        goog.labs.userAgent.util.matchUserAgent('Android') &&
        !(
          goog.labs.userAgent.browser.isChrome() ||
          goog.labs.userAgent.browser.isFirefox() ||
          goog.labs.userAgent.browser.isOpera() ||
          goog.labs.userAgent.browser.isSilk()
        )
      )
    }),
    (goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_),
    (goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_),
    (goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_),
    (goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_),
    (goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_),
    (goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_),
    (goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_),
    (goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_),
    (goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_),
    (goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_),
    (goog.labs.userAgent.browser.isAndroidBrowser =
      goog.labs.userAgent.browser.matchAndroidBrowser_),
    (goog.labs.userAgent.browser.isSilk = function () {
      return goog.labs.userAgent.util.matchUserAgent('Silk')
    }),
    (goog.labs.userAgent.browser.getVersion = function () {
      function e(e) {
        return (e = goog.array.find(e, r)), o[e] || ''
      }
      var t = goog.labs.userAgent.util.getUserAgent()
      if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(t)
      t = goog.labs.userAgent.util.extractVersionTuples(t)
      var o = {}
      goog.array.forEach(t, function (e) {
        o[e[0]] = e[1]
      })
      var r = goog.partial(goog.object.containsKey, o)
      return goog.labs.userAgent.browser.isOpera()
        ? e(['Version', 'Opera'])
        : goog.labs.userAgent.browser.isEdge()
        ? e(['Edge'])
        : goog.labs.userAgent.browser.isEdgeChromium()
        ? e(['Edg'])
        : goog.labs.userAgent.browser.isChrome()
        ? e(['Chrome', 'CriOS'])
        : ((t = t[2]) && t[1]) || ''
    }),
    (goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
      return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
    }),
    (goog.labs.userAgent.browser.getIEVersion_ = function (e) {
      var t = /rv: *([\d\.]*)/.exec(e)
      if (t && t[1]) return t[1]
      t = ''
      var o = /MSIE +([\d\.]+)/.exec(e)
      if (o && o[1])
        if (((e = /Trident\/(\d.\d)/.exec(e)), '7.0' == o[1]))
          if (e && e[1])
            switch (e[1]) {
              case '4.0':
                t = '8.0'
                break
              case '5.0':
                t = '9.0'
                break
              case '6.0':
                t = '10.0'
                break
              case '7.0':
                t = '11.0'
            }
          else t = '7.0'
        else t = o[1]
      return t
    }),
    (goog.html.SafeHtml = function () {
      ;(this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = ''),
        (this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
          goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_),
        (this.dir_ = null)
    }),
    (goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0),
    (goog.html.SafeHtml.prototype.getDirection = function () {
      return this.dir_
    }),
    (goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0),
    (goog.html.SafeHtml.prototype.getTypedStringValue = function () {
      return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()
    }),
    goog.DEBUG &&
      (goog.html.SafeHtml.prototype.toString = function () {
        return 'SafeHtml{' + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + '}'
      }),
    (goog.html.SafeHtml.unwrap = function (e) {
      return goog.html.SafeHtml.unwrapTrustedHTML(e).toString()
    }),
    (goog.html.SafeHtml.unwrapTrustedHTML = function (e) {
      return e instanceof goog.html.SafeHtml &&
        e.constructor === goog.html.SafeHtml &&
        e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
          goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_
        : (goog.asserts.fail(
            "expected object of type SafeHtml, got '" + e + "' of type " + goog.typeOf(e),
          ),
          'type_error:SafeHtml')
    }),
    (goog.html.SafeHtml.htmlEscape = function (e) {
      if (e instanceof goog.html.SafeHtml) return e
      var t = 'object' == typeof e,
        o = null
      return (
        t && e.implementsGoogI18nBidiDirectionalString && (o = e.getDirection()),
        (e = t && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e)),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          goog.string.internal.htmlEscape(e),
          o,
        )
      )
    }),
    (goog.html.SafeHtml.htmlEscapePreservingNewlines = function (e) {
      return e instanceof goog.html.SafeHtml
        ? e
        : ((e = goog.html.SafeHtml.htmlEscape(e)),
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(e)),
            e.getDirection(),
          ))
    }),
    (goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (e) {
      return e instanceof goog.html.SafeHtml
        ? e
        : ((e = goog.html.SafeHtml.htmlEscape(e)),
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(e)),
            e.getDirection(),
          ))
    }),
    (goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape),
    (goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/),
    (goog.html.SafeHtml.URL_ATTRIBUTES_ = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    }),
    (goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    }),
    (goog.html.SafeHtml.create = function (e, t, o) {
      return (
        goog.html.SafeHtml.verifyTagName(String(e)),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(e), t, o)
      )
    }),
    (goog.html.SafeHtml.verifyTagName = function (e) {
      if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e))
        throw Error('Invalid tag name <' + e + '>.')
      if (e.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
        throw Error('Tag name <' + e + '> is not allowed for SafeHtml.')
    }),
    (goog.html.SafeHtml.createIframe = function (e, t, o, r) {
      e && goog.html.TrustedResourceUrl.unwrap(e)
      var n = {}
      return (
        (n.src = e || null),
        (n.srcdoc = t && goog.html.SafeHtml.unwrap(t)),
        (e = goog.html.SafeHtml.combineAttributes(n, { sandbox: '' }, o)),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('iframe', e, r)
      )
    }),
    (goog.html.SafeHtml.createSandboxIframe = function (e, t, o, r) {
      if (!goog.html.SafeHtml.canUseSandboxIframe())
        throw Error('The browser does not support sandboxed iframes.')
      var n = {}
      return (
        (n.src = e ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)) : null),
        (n.srcdoc = t || null),
        (n.sandbox = ''),
        (e = goog.html.SafeHtml.combineAttributes(n, {}, o)),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('iframe', e, r)
      )
    }),
    (goog.html.SafeHtml.canUseSandboxIframe = function () {
      return goog.global.HTMLIFrameElement && 'sandbox' in goog.global.HTMLIFrameElement.prototype
    }),
    (goog.html.SafeHtml.createScriptSrc = function (e, t) {
      return (
        goog.html.TrustedResourceUrl.unwrap(e),
        (e = goog.html.SafeHtml.combineAttributes({ src: e }, {}, t)),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('script', e)
      )
    }),
    (goog.html.SafeHtml.createScript = function (e, t) {
      for (var o in t) {
        var r = o.toLowerCase()
        if ('language' == r || 'src' == r || 'text' == r || 'type' == r)
          throw Error('Cannot set "' + r + '" attribute')
      }
      for (o = '', e = goog.array.concat(e), r = 0; r < e.length; r++)
        o += goog.html.SafeScript.unwrap(e[r])
      return (
        (e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          o,
          goog.i18n.bidi.Dir.NEUTRAL,
        )),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('script', t, e)
      )
    }),
    (goog.html.SafeHtml.createStyle = function (e, t) {
      t = goog.html.SafeHtml.combineAttributes({ type: 'text/css' }, {}, t)
      var o = ''
      e = goog.array.concat(e)
      for (var r = 0; r < e.length; r++) o += goog.html.SafeStyleSheet.unwrap(e[r])
      return (
        (e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          o,
          goog.i18n.bidi.Dir.NEUTRAL,
        )),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('style', t, e)
      )
    }),
    (goog.html.SafeHtml.createMetaRefresh = function (e, t) {
      return (
        (e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e))),
        (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) &&
          goog.string.internal.contains(e, ';') &&
          (e = "'" + e.replace(/'/g, '%27') + "'"),
        goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('meta', {
          'http-equiv': 'refresh',
          content: (t || 0) + '; url=' + e,
        })
      )
    }),
    (goog.html.SafeHtml.getAttrNameAndValue_ = function (e, t, o) {
      if (o instanceof goog.string.Const) o = goog.string.Const.unwrap(o)
      else if ('style' == t.toLowerCase()) o = goog.html.SafeHtml.getStyleValue_(o)
      else {
        if (/^on/i.test(t))
          throw Error('Attribute "' + t + '" requires goog.string.Const value, "' + o + '" given.')
        if (t.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
          if (o instanceof goog.html.TrustedResourceUrl) o = goog.html.TrustedResourceUrl.unwrap(o)
          else if (o instanceof goog.html.SafeUrl) o = goog.html.SafeUrl.unwrap(o)
          else {
            if (!goog.isString(o))
              throw Error(
                'Attribute "' +
                  t +
                  '" on tag "' +
                  e +
                  '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                  o +
                  '" given.',
              )
            o = goog.html.SafeUrl.sanitize(o).getTypedStringValue()
          }
      }
      return (
        o.implementsGoogStringTypedString && (o = o.getTypedStringValue()),
        goog.asserts.assert(
          goog.isString(o) || goog.isNumber(o),
          'String or number value expected, got ' + typeof o + ' with value: ' + o,
        ),
        t + '="' + goog.string.internal.htmlEscape(String(o)) + '"'
      )
    }),
    (goog.html.SafeHtml.getStyleValue_ = function (e) {
      if (!goog.isObject(e))
        throw Error(
          'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
            typeof e +
            ' given: ' +
            e,
        )
      return (
        e instanceof goog.html.SafeStyle || (e = goog.html.SafeStyle.create(e)),
        goog.html.SafeStyle.unwrap(e)
      )
    }),
    (goog.html.SafeHtml.createWithDir = function (e, t, o, r) {
      return ((t = goog.html.SafeHtml.create(t, o, r)).dir_ = e), t
    }),
    (goog.html.SafeHtml.join = function (e, t) {
      var o = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection(),
        r = [],
        n = function (e) {
          goog.isArray(e)
            ? goog.array.forEach(e, n)
            : ((e = goog.html.SafeHtml.htmlEscape(e)),
              r.push(goog.html.SafeHtml.unwrap(e)),
              (e = e.getDirection()),
              o == goog.i18n.bidi.Dir.NEUTRAL
                ? (o = e)
                : e != goog.i18n.bidi.Dir.NEUTRAL && o != e && (o = null))
        }
      return (
        goog.array.forEach(t, n),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          r.join(goog.html.SafeHtml.unwrap(e)),
          o,
        )
      )
    }),
    (goog.html.SafeHtml.concat = function (e) {
      return goog.html.SafeHtml.join(
        goog.html.SafeHtml.EMPTY,
        Array.prototype.slice.call(arguments),
      )
    }),
    (goog.html.SafeHtml.concatWithDir = function (e, t) {
      var o = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1))
      return (o.dir_ = e), o
    }),
    (goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
    (goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (e, t) {
      return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(e, t)
    }),
    (goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e, t) {
      return (
        (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes
          .PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(e)
          : e),
        (this.dir_ = t),
        this
      )
    }),
    (goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (e, t, o) {
      var r = null,
        n = '<' + e + goog.html.SafeHtml.stringifyAttributes(e, t)
      return (
        goog.isDefAndNotNull(o) ? goog.isArray(o) || (o = [o]) : (o = []),
        goog.dom.tags.isVoidTag(e.toLowerCase())
          ? (goog.asserts.assert(!o.length, 'Void tag <' + e + '> does not allow content.'),
            (n += '>'))
          : ((r = goog.html.SafeHtml.concat(o)),
            (n += '>' + goog.html.SafeHtml.unwrap(r) + '</' + e + '>'),
            (r = r.getDirection())),
        (e = t && t.dir) && (r = /^(ltr|rtl|auto)$/i.test(e) ? goog.i18n.bidi.Dir.NEUTRAL : null),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n, r)
      )
    }),
    (goog.html.SafeHtml.stringifyAttributes = function (e, t) {
      var o = ''
      if (t)
        for (var r in t) {
          if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r))
            throw Error('Invalid attribute name "' + r + '".')
          var n = t[r]
          goog.isDefAndNotNull(n) && (o += ' ' + goog.html.SafeHtml.getAttrNameAndValue_(e, r, n))
        }
      return o
    }),
    (goog.html.SafeHtml.combineAttributes = function (e, t, o) {
      var r,
        n = {}
      for (r in e) goog.asserts.assert(r.toLowerCase() == r, 'Must be lower case'), (n[r] = e[r])
      for (r in t) goog.asserts.assert(r.toLowerCase() == r, 'Must be lower case'), (n[r] = t[r])
      for (r in o) {
        var s = r.toLowerCase()
        if (s in e)
          throw Error(
            'Cannot override "' + s + '" attribute, got "' + r + '" with value "' + o[r] + '"',
          )
        s in t && delete n[s], (n[r] = o[r])
      }
      return n
    }),
    (goog.html.SafeHtml.DOCTYPE_HTML =
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        '<!DOCTYPE html>',
        goog.i18n.bidi.Dir.NEUTRAL,
      )),
    (goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      '',
      goog.i18n.bidi.Dir.NEUTRAL,
    )),
    (goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      '<br>',
      goog.i18n.bidi.Dir.NEUTRAL,
    )),
    (goog.html.uncheckedconversions = {}),
    (goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (
      e,
      t,
      o,
    ) {
      return (
        goog.asserts.assertString(goog.string.Const.unwrap(e), 'must provide justification'),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),
          'must provide non-empty justification',
        ),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, o || null)
      )
    }),
    (goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (
      e,
      t,
    ) {
      return (
        goog.asserts.assertString(goog.string.Const.unwrap(e), 'must provide justification'),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),
          'must provide non-empty justification',
        ),
        goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)
      )
    }),
    (goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (
      e,
      t,
    ) {
      return (
        goog.asserts.assertString(goog.string.Const.unwrap(e), 'must provide justification'),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),
          'must provide non-empty justification',
        ),
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t)
      )
    }),
    (goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (
      e,
      t,
    ) {
      return (
        goog.asserts.assertString(goog.string.Const.unwrap(e), 'must provide justification'),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),
          'must provide non-empty justification',
        ),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
      )
    }),
    (goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (e, t) {
      return (
        goog.asserts.assertString(goog.string.Const.unwrap(e), 'must provide justification'),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),
          'must provide non-empty justification',
        ),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
      )
    }),
    (goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
      function (e, t) {
        return (
          goog.asserts.assertString(goog.string.Const.unwrap(e), 'must provide justification'),
          goog.asserts.assert(
            !goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),
            'must provide non-empty justification',
          ),
          goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
        )
      }),
    (goog.dom.safe = {}),
    (goog.dom.safe.InsertAdjacentHtmlPosition = {
      AFTERBEGIN: 'afterbegin',
      AFTEREND: 'afterend',
      BEFOREBEGIN: 'beforebegin',
      BEFOREEND: 'beforeend',
    }),
    (goog.dom.safe.insertAdjacentHtml = function (e, t, o) {
      e.insertAdjacentHTML(t, goog.html.SafeHtml.unwrapTrustedHTML(o))
    }),
    (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
      MATH: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    }),
    (goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function () {
      if (goog.DEBUG && 'undefined' == typeof document) return !1
      var e = document.createElement('div'),
        t = document.createElement('div')
      return (
        t.appendChild(document.createElement('div')),
        e.appendChild(t),
        !(goog.DEBUG && !e.firstChild) &&
          ((t = e.firstChild.firstChild),
          (e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY)),
          !t.parentElement)
      )
    })),
    (goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (e, t) {
      if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
        for (; e.lastChild; ) e.removeChild(e.lastChild)
      e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
    }),
    (goog.dom.safe.setInnerHtml = function (e, t) {
      if (goog.asserts.ENABLE_ASSERTS) {
        var o = e.tagName.toUpperCase()
        if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o])
          throw Error(
            'goog.dom.safe.setInnerHtml cannot be used to set content of ' + e.tagName + '.',
          )
      }
      goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, t)
    }),
    (goog.dom.safe.setOuterHtml = function (e, t) {
      e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
    }),
    (goog.dom.safe.setFormElementAction = function (e, t) {
      ;(t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
        (goog.dom.asserts.assertIsHTMLFormElement(e).action = goog.html.SafeUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.setButtonFormAction = function (e, t) {
      ;(t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
        (goog.dom.asserts.assertIsHTMLButtonElement(e).formAction =
          goog.html.SafeUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.setInputFormAction = function (e, t) {
      ;(t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
        (goog.dom.asserts.assertIsHTMLInputElement(e).formAction =
          goog.html.SafeUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.setStyle = function (e, t) {
      e.style.cssText = goog.html.SafeStyle.unwrap(t)
    }),
    (goog.dom.safe.documentWrite = function (e, t) {
      e.write(goog.html.SafeHtml.unwrapTrustedHTML(t))
    }),
    (goog.dom.safe.setAnchorHref = function (e, t) {
      goog.dom.asserts.assertIsHTMLAnchorElement(e),
        (t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
        (e.href = goog.html.SafeUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.setImageSrc = function (e, t) {
      if ((goog.dom.asserts.assertIsHTMLImageElement(e), !(t instanceof goog.html.SafeUrl))) {
        var o = /^data:image\//i.test(t)
        t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
      }
      e.src = goog.html.SafeUrl.unwrapTrustedURL(t)
    }),
    (goog.dom.safe.setAudioSrc = function (e, t) {
      if ((goog.dom.asserts.assertIsHTMLAudioElement(e), !(t instanceof goog.html.SafeUrl))) {
        var o = /^data:audio\//i.test(t)
        t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
      }
      e.src = goog.html.SafeUrl.unwrapTrustedURL(t)
    }),
    (goog.dom.safe.setVideoSrc = function (e, t) {
      if ((goog.dom.asserts.assertIsHTMLVideoElement(e), !(t instanceof goog.html.SafeUrl))) {
        var o = /^data:video\//i.test(t)
        t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
      }
      e.src = goog.html.SafeUrl.unwrapTrustedURL(t)
    }),
    (goog.dom.safe.setEmbedSrc = function (e, t) {
      goog.dom.asserts.assertIsHTMLEmbedElement(e),
        (e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t))
    }),
    (goog.dom.safe.setFrameSrc = function (e, t) {
      goog.dom.asserts.assertIsHTMLFrameElement(e),
        (e.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.setIframeSrc = function (e, t) {
      goog.dom.asserts.assertIsHTMLIFrameElement(e),
        (e.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.setIframeSrcdoc = function (e, t) {
      goog.dom.asserts.assertIsHTMLIFrameElement(e),
        (e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(t))
    }),
    (goog.dom.safe.setLinkHrefAndRel = function (e, t, o) {
      goog.dom.asserts.assertIsHTMLLinkElement(e),
        (e.rel = o),
        goog.string.internal.caseInsensitiveContains(o, 'stylesheet')
          ? (goog.asserts.assert(
              t instanceof goog.html.TrustedResourceUrl,
              'URL must be TrustedResourceUrl because "rel" contains "stylesheet"',
            ),
            (e.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(t)))
          : (e.href =
              t instanceof goog.html.TrustedResourceUrl
                ? goog.html.TrustedResourceUrl.unwrapTrustedURL(t)
                : t instanceof goog.html.SafeUrl
                ? goog.html.SafeUrl.unwrapTrustedURL(t)
                : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(t)))
    }),
    (goog.dom.safe.setObjectData = function (e, t) {
      goog.dom.asserts.assertIsHTMLObjectElement(e),
        (e.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t))
    }),
    (goog.dom.safe.setScriptSrc = function (e, t) {
      goog.dom.asserts.assertIsHTMLScriptElement(e),
        (e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)),
        (t = goog.getScriptNonce()) && e.setAttribute('nonce', t)
    }),
    (goog.dom.safe.setScriptContent = function (e, t) {
      goog.dom.asserts.assertIsHTMLScriptElement(e),
        (e.text = goog.html.SafeScript.unwrapTrustedScript(t)),
        (t = goog.getScriptNonce()) && e.setAttribute('nonce', t)
    }),
    (goog.dom.safe.setLocationHref = function (e, t) {
      goog.dom.asserts.assertIsLocation(e),
        (t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
        (e.href = goog.html.SafeUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.assignLocation = function (e, t) {
      goog.dom.asserts.assertIsLocation(e),
        (t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
        e.assign(goog.html.SafeUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.replaceLocation = function (e, t) {
      goog.dom.asserts.assertIsLocation(e),
        (t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
        e.replace(goog.html.SafeUrl.unwrapTrustedURL(t))
    }),
    (goog.dom.safe.openInWindow = function (e, t, o, r, n) {
      return (
        (e = e instanceof goog.html.SafeUrl ? e : goog.html.SafeUrl.sanitizeAssertUnchanged(e)),
        (t || goog.global).open(
          goog.html.SafeUrl.unwrapTrustedURL(e),
          o ? goog.string.Const.unwrap(o) : '',
          r,
          n,
        )
      )
    }),
    (goog.dom.safe.parseFromStringHtml = function (e, t) {
      return goog.dom.safe.parseFromString(e, t, 'text/html')
    }),
    (goog.dom.safe.parseFromString = function (e, t, o) {
      return e.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(t), o)
    }),
    (goog.dom.safe.createImageFromBlob = function (e) {
      if (!/^image\/.*/g.test(e.type))
        throw Error('goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.')
      var t = goog.global.URL.createObjectURL(e)
      return (
        ((e = new goog.global.Image()).onload = function () {
          goog.global.URL.revokeObjectURL(t)
        }),
        goog.dom.safe.setImageSrc(
          e,
          goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
            goog.string.Const.from('Image blob URL.'),
            t,
          ),
        ),
        e
      )
    }),
    (goog.string.DETECT_DOUBLE_ESCAPING = !1),
    (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
    (goog.string.Unicode = { NBSP: ' ' }),
    (goog.string.startsWith = goog.string.internal.startsWith),
    (goog.string.endsWith = goog.string.internal.endsWith),
    (goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith),
    (goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith),
    (goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals),
    (goog.string.subs = function (e, t) {
      for (
        var o = e.split('%s'), r = '', n = Array.prototype.slice.call(arguments, 1);
        n.length && 1 < o.length;

      )
        r += o.shift() + n.shift()
      return r + o.join('%s')
    }),
    (goog.string.collapseWhitespace = function (e) {
      return e.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '')
    }),
    (goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace),
    (goog.string.isEmptyString = function (e) {
      return 0 == e.length
    }),
    (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
    (goog.string.isEmptyOrWhitespaceSafe = function (e) {
      return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
    }),
    (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
    (goog.string.isBreakingWhitespace = function (e) {
      return !/[^\t\n\r ]/.test(e)
    }),
    (goog.string.isAlpha = function (e) {
      return !/[^a-zA-Z]/.test(e)
    }),
    (goog.string.isNumeric = function (e) {
      return !/[^0-9]/.test(e)
    }),
    (goog.string.isAlphaNumeric = function (e) {
      return !/[^a-zA-Z0-9]/.test(e)
    }),
    (goog.string.isSpace = function (e) {
      return ' ' == e
    }),
    (goog.string.isUnicodeChar = function (e) {
      return (1 == e.length && ' ' <= e && '~' >= e) || ('' <= e && '�' >= e)
    }),
    (goog.string.stripNewlines = function (e) {
      return e.replace(/(\r\n|\r|\n)+/g, ' ')
    }),
    (goog.string.canonicalizeNewlines = function (e) {
      return e.replace(/(\r\n|\r|\n)/g, '\n')
    }),
    (goog.string.normalizeWhitespace = function (e) {
      return e.replace(/\xa0|\s/g, ' ')
    }),
    (goog.string.normalizeSpaces = function (e) {
      return e.replace(/\xa0|[ \t]+/g, ' ')
    }),
    (goog.string.collapseBreakingSpaces = function (e) {
      return e.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '')
    }),
    (goog.string.trim = goog.string.internal.trim),
    (goog.string.trimLeft = function (e) {
      return e.replace(/^[\s\xa0]+/, '')
    }),
    (goog.string.trimRight = function (e) {
      return e.replace(/[\s\xa0]+$/, '')
    }),
    (goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare),
    (goog.string.numberAwareCompare_ = function (e, t, o) {
      if (e == t) return 0
      if (!e) return -1
      if (!t) return 1
      for (
        var r = e.toLowerCase().match(o),
          n = t.toLowerCase().match(o),
          s = Math.min(r.length, n.length),
          i = 0;
        i < s;
        i++
      ) {
        o = r[i]
        var g = n[i]
        if (o != g)
          return (
            (e = parseInt(o, 10)),
            !isNaN(e) && ((t = parseInt(g, 10)), !isNaN(t) && e - t) ? e - t : o < g ? -1 : 1
          )
      }
      return r.length != n.length ? r.length - n.length : e < t ? -1 : 1
    }),
    (goog.string.intAwareCompare = function (e, t) {
      return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g)
    }),
    (goog.string.floatAwareCompare = function (e, t) {
      return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
    }),
    (goog.string.numerateCompare = goog.string.floatAwareCompare),
    (goog.string.urlEncode = function (e) {
      return encodeURIComponent(String(e))
    }),
    (goog.string.urlDecode = function (e) {
      return decodeURIComponent(e.replace(/\+/g, ' '))
    }),
    (goog.string.newLineToBr = goog.string.internal.newLineToBr),
    (goog.string.htmlEscape = function (e, t) {
      return (
        (e = goog.string.internal.htmlEscape(e, t)),
        goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, '&#101;')),
        e
      )
    }),
    (goog.string.E_RE_ = /e/g),
    (goog.string.unescapeEntities = function (e) {
      return goog.string.contains(e, '&')
        ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && 'document' in goog.global
          ? goog.string.unescapeEntitiesUsingDom_(e)
          : goog.string.unescapePureXmlEntities_(e)
        : e
    }),
    (goog.string.unescapeEntitiesWithDocument = function (e, t) {
      return goog.string.contains(e, '&') ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
    }),
    (goog.string.unescapeEntitiesUsingDom_ = function (e, t) {
      var o = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' },
        r = t ? t.createElement('div') : goog.global.document.createElement('div')
      return e.replace(goog.string.HTML_ENTITY_PATTERN_, function (e, t) {
        var n = o[e]
        return (
          n ||
          ('#' == t.charAt(0) &&
            ((t = Number('0' + t.substr(1))), isNaN(t) || (n = String.fromCharCode(t))),
          n ||
            (goog.dom.safe.setInnerHtml(
              r,
              goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                goog.string.Const.from('Single HTML entity.'),
                e + ' ',
              ),
            ),
            (n = r.firstChild.nodeValue.slice(0, -1))),
          (o[e] = n))
        )
      })
    }),
    (goog.string.unescapePureXmlEntities_ = function (e) {
      return e.replace(/&([^;]+);/g, function (e, t) {
        switch (t) {
          case 'amp':
            return '&'
          case 'lt':
            return '<'
          case 'gt':
            return '>'
          case 'quot':
            return '"'
          default:
            return '#' != t.charAt(0) || ((t = Number('0' + t.substr(1))), isNaN(t))
              ? e
              : String.fromCharCode(t)
        }
      })
    }),
    (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
    (goog.string.whitespaceEscape = function (e, t) {
      return goog.string.newLineToBr(e.replace(/  /g, ' &#160;'), t)
    }),
    (goog.string.preserveSpaces = function (e) {
      return e.replace(/(^|[\n ]) /g, '$1' + goog.string.Unicode.NBSP)
    }),
    (goog.string.stripQuotes = function (e, t) {
      for (var o = t.length, r = 0; r < o; r++) {
        var n = 1 == o ? t : t.charAt(r)
        if (e.charAt(0) == n && e.charAt(e.length - 1) == n) return e.substring(1, e.length - 1)
      }
      return e
    }),
    (goog.string.truncate = function (e, t, o) {
      return (
        o && (e = goog.string.unescapeEntities(e)),
        e.length > t && (e = e.substring(0, t - 3) + '...'),
        o && (e = goog.string.htmlEscape(e)),
        e
      )
    }),
    (goog.string.truncateMiddle = function (e, t, o, r) {
      if ((o && (e = goog.string.unescapeEntities(e)), r && e.length > t)) {
        r > t && (r = t)
        var n = e.length - r
        e = e.substring(0, t - r) + '...' + e.substring(n)
      } else
        e.length > t &&
          ((r = Math.floor(t / 2)),
          (n = e.length - r),
          (e = e.substring(0, r + (t % 2)) + '...' + e.substring(n)))
      return o && (e = goog.string.htmlEscape(e)), e
    }),
    (goog.string.specialEscapeChars_ = {
      '\0': '\\0',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\v': '\\x0B',
      '"': '\\"',
      '\\': '\\\\',
      '<': '\\u003C',
    }),
    (goog.string.jsEscapeCache_ = { "'": "\\'" }),
    (goog.string.quote = function (e) {
      e = String(e)
      for (var t = ['"'], o = 0; o < e.length; o++) {
        var r = e.charAt(o),
          n = r.charCodeAt(0)
        t[o + 1] =
          goog.string.specialEscapeChars_[r] || (31 < n && 127 > n ? r : goog.string.escapeChar(r))
      }
      return t.push('"'), t.join('')
    }),
    (goog.string.escapeString = function (e) {
      for (var t = [], o = 0; o < e.length; o++) t[o] = goog.string.escapeChar(e.charAt(o))
      return t.join('')
    }),
    (goog.string.escapeChar = function (e) {
      if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e]
      if (e in goog.string.specialEscapeChars_)
        return (goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e])
      var t = e.charCodeAt(0)
      if (31 < t && 127 > t) var o = e
      else
        256 > t
          ? ((o = '\\x'), (16 > t || 256 < t) && (o += '0'))
          : ((o = '\\u'), 4096 > t && (o += '0')),
          (o += t.toString(16).toUpperCase())
      return (goog.string.jsEscapeCache_[e] = o)
    }),
    (goog.string.contains = goog.string.internal.contains),
    (goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains),
    (goog.string.countOf = function (e, t) {
      return e && t ? e.split(t).length - 1 : 0
    }),
    (goog.string.removeAt = function (e, t, o) {
      var r = e
      return (
        0 <= t && t < e.length && 0 < o && (r = e.substr(0, t) + e.substr(t + o, e.length - t - o)),
        r
      )
    }),
    (goog.string.remove = function (e, t) {
      return e.replace(t, '')
    }),
    (goog.string.removeAll = function (e, t) {
      return (t = new RegExp(goog.string.regExpEscape(t), 'g')), e.replace(t, '')
    }),
    (goog.string.replaceAll = function (e, t, o) {
      return (
        (t = new RegExp(goog.string.regExpEscape(t), 'g')), e.replace(t, o.replace(/\$/g, '$$$$'))
      )
    }),
    (goog.string.regExpEscape = function (e) {
      return String(e)
        .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1')
        .replace(/\x08/g, '\\x08')
    }),
    (goog.string.repeat = String.prototype.repeat
      ? function (e, t) {
          return e.repeat(t)
        }
      : function (e, t) {
          return Array(t + 1).join(e)
        }),
    (goog.string.padNumber = function (e, t, o) {
      return (
        -1 == (o = (e = goog.isDef(o) ? e.toFixed(o) : String(e)).indexOf('.')) && (o = e.length),
        goog.string.repeat('0', Math.max(0, t - o)) + e
      )
    }),
    (goog.string.makeSafe = function (e) {
      return null == e ? '' : String(e)
    }),
    (goog.string.buildString = function (e) {
      return Array.prototype.join.call(arguments, '')
    }),
    (goog.string.getRandomString = function () {
      return (
        Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
      )
    }),
    (goog.string.compareVersions = goog.string.internal.compareVersions),
    (goog.string.hashCode = function (e) {
      for (var t = 0, o = 0; o < e.length; ++o) t = (31 * t + e.charCodeAt(o)) >>> 0
      return t
    }),
    (goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0),
    (goog.string.createUniqueString = function () {
      return 'goog_' + goog.string.uniqueStringCounter_++
    }),
    (goog.string.toNumber = function (e) {
      var t = Number(e)
      return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t
    }),
    (goog.string.isLowerCamelCase = function (e) {
      return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
    }),
    (goog.string.isUpperCamelCase = function (e) {
      return /^([A-Z][a-z]*)+$/.test(e)
    }),
    (goog.string.toCamelCase = function (e) {
      return String(e).replace(/\-([a-z])/g, function (e, t) {
        return t.toUpperCase()
      })
    }),
    (goog.string.toSelectorCase = function (e) {
      return String(e)
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
    }),
    (goog.string.toTitleCase = function (e, t) {
      return (
        (t = goog.isString(t) ? goog.string.regExpEscape(t) : '\\s'),
        e.replace(
          new RegExp('(^' + (t ? '|[' + t + ']+' : '') + ')([a-z])', 'g'),
          function (e, t, o) {
            return t + o.toUpperCase()
          },
        )
      )
    }),
    (goog.string.capitalize = function (e) {
      return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
    }),
    (goog.string.parseInt = function (e) {
      return (
        isFinite(e) && (e = String(e)),
        goog.isString(e) ? (/^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10)) : NaN
      )
    }),
    (goog.string.splitLimit = function (e, t, o) {
      e = e.split(t)
      for (var r = []; 0 < o && e.length; ) r.push(e.shift()), o--
      return e.length && r.push(e.join(t)), r
    }),
    (goog.string.lastComponent = function (e, t) {
      if (!t) return e
      'string' == typeof t && (t = [t])
      for (var o = -1, r = 0; r < t.length; r++)
        if ('' != t[r]) {
          var n = e.lastIndexOf(t[r])
          n > o && (o = n)
        }
      return -1 == o ? e : e.slice(o + 1)
    }),
    (goog.string.editDistance = function (e, t) {
      var o = [],
        r = []
      if (e == t) return 0
      if (!e.length || !t.length) return Math.max(e.length, t.length)
      for (var n = 0; n < t.length + 1; n++) o[n] = n
      for (n = 0; n < e.length; n++) {
        r[0] = n + 1
        for (var s = 0; s < t.length; s++)
          r[s + 1] = Math.min(r[s] + 1, o[s + 1] + 1, o[s] + Number(e[n] != t[s]))
        for (s = 0; s < o.length; s++) o[s] = r[s]
      }
      return r[t.length]
    }),
    (goog.labs.userAgent.engine = {}),
    (goog.labs.userAgent.engine.isPresto = function () {
      return goog.labs.userAgent.util.matchUserAgent('Presto')
    }),
    (goog.labs.userAgent.engine.isTrident = function () {
      return (
        goog.labs.userAgent.util.matchUserAgent('Trident') ||
        goog.labs.userAgent.util.matchUserAgent('MSIE')
      )
    }),
    (goog.labs.userAgent.engine.isEdge = function () {
      return goog.labs.userAgent.util.matchUserAgent('Edge')
    }),
    (goog.labs.userAgent.engine.isWebKit = function () {
      return (
        goog.labs.userAgent.util.matchUserAgentIgnoreCase('WebKit') &&
        !goog.labs.userAgent.engine.isEdge()
      )
    }),
    (goog.labs.userAgent.engine.isGecko = function () {
      return (
        goog.labs.userAgent.util.matchUserAgent('Gecko') &&
        !goog.labs.userAgent.engine.isWebKit() &&
        !goog.labs.userAgent.engine.isTrident() &&
        !goog.labs.userAgent.engine.isEdge()
      )
    }),
    (goog.labs.userAgent.engine.getVersion = function () {
      var e = goog.labs.userAgent.util.getUserAgent()
      if (e) {
        e = goog.labs.userAgent.util.extractVersionTuples(e)
        var t,
          o = goog.labs.userAgent.engine.getEngineTuple_(e)
        if (o)
          return 'Gecko' == o[0] ? goog.labs.userAgent.engine.getVersionForKey_(e, 'Firefox') : o[1]
        if ((e = e[0]) && (t = e[2]) && (t = /Trident\/([^\s;]+)/.exec(t))) return t[1]
      }
      return ''
    }),
    (goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
      if (!goog.labs.userAgent.engine.isEdge()) return e[1]
      for (var t = 0; t < e.length; t++) {
        var o = e[t]
        if ('Edge' == o[0]) return o
      }
    }),
    (goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
      return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
    }),
    (goog.labs.userAgent.engine.getVersionForKey_ = function (e, t) {
      return (
        ((e = goog.array.find(e, function (e) {
          return t == e[0]
        })) &&
          e[1]) ||
        ''
      )
    }),
    (goog.labs.userAgent.platform = {}),
    (goog.labs.userAgent.platform.isAndroid = function () {
      return goog.labs.userAgent.util.matchUserAgent('Android')
    }),
    (goog.labs.userAgent.platform.isIpod = function () {
      return goog.labs.userAgent.util.matchUserAgent('iPod')
    }),
    (goog.labs.userAgent.platform.isIphone = function () {
      return (
        goog.labs.userAgent.util.matchUserAgent('iPhone') &&
        !goog.labs.userAgent.util.matchUserAgent('iPod') &&
        !goog.labs.userAgent.util.matchUserAgent('iPad')
      )
    }),
    (goog.labs.userAgent.platform.isIpad = function () {
      return goog.labs.userAgent.util.matchUserAgent('iPad')
    }),
    (goog.labs.userAgent.platform.isIos = function () {
      return (
        goog.labs.userAgent.platform.isIphone() ||
        goog.labs.userAgent.platform.isIpad() ||
        goog.labs.userAgent.platform.isIpod()
      )
    }),
    (goog.labs.userAgent.platform.isMacintosh = function () {
      return goog.labs.userAgent.util.matchUserAgent('Macintosh')
    }),
    (goog.labs.userAgent.platform.isLinux = function () {
      return goog.labs.userAgent.util.matchUserAgent('Linux')
    }),
    (goog.labs.userAgent.platform.isWindows = function () {
      return goog.labs.userAgent.util.matchUserAgent('Windows')
    }),
    (goog.labs.userAgent.platform.isChromeOS = function () {
      return goog.labs.userAgent.util.matchUserAgent('CrOS')
    }),
    (goog.labs.userAgent.platform.isChromecast = function () {
      return goog.labs.userAgent.util.matchUserAgent('CrKey')
    }),
    (goog.labs.userAgent.platform.isKaiOS = function () {
      return goog.labs.userAgent.util.matchUserAgentIgnoreCase('KaiOS')
    }),
    (goog.labs.userAgent.platform.isGo2Phone = function () {
      return goog.labs.userAgent.util.matchUserAgentIgnoreCase('GAFP')
    }),
    (goog.labs.userAgent.platform.getVersion = function () {
      var e = goog.labs.userAgent.util.getUserAgent(),
        t = ''
      return (
        goog.labs.userAgent.platform.isWindows()
          ? (t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : '0.0')
          : goog.labs.userAgent.platform.isIos()
          ? (t =
              (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) &&
              e[1].replace(/_/g, '.'))
          : goog.labs.userAgent.platform.isMacintosh()
          ? (t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, '.') : '10')
          : goog.labs.userAgent.platform.isKaiOS()
          ? (t = (e = (t = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1])
          : goog.labs.userAgent.platform.isAndroid()
          ? (t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1])
          : goog.labs.userAgent.platform.isChromeOS() &&
            (t = (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]),
        t || ''
      )
    }),
    (goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
      return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
    }),
    (goog.reflect = {}),
    (goog.reflect.object = function (e, t) {
      return t
    }),
    (goog.reflect.objectProperty = function (e, t) {
      return e
    }),
    (goog.reflect.sinkValue = function (e) {
      return goog.reflect.sinkValue[' '](e), e
    }),
    (goog.reflect.sinkValue[' '] = goog.nullFunction),
    (goog.reflect.canAccessProperty = function (e, t) {
      try {
        return goog.reflect.sinkValue(e[t]), !0
      } catch (e) {}
      return !1
    }),
    (goog.reflect.cache = function (e, t, o, r) {
      return (r = r ? r(t) : t), Object.prototype.hasOwnProperty.call(e, r) ? e[r] : (e[r] = o(t))
    }),
    (goog.userAgent = {}),
    (goog.userAgent.ASSUME_IE = !1),
    (goog.userAgent.ASSUME_EDGE = !1),
    (goog.userAgent.ASSUME_GECKO = !1),
    (goog.userAgent.ASSUME_WEBKIT = !1),
    (goog.userAgent.ASSUME_MOBILE_WEBKIT = !1),
    (goog.userAgent.ASSUME_OPERA = !1),
    (goog.userAgent.ASSUME_ANY_VERSION = !1),
    (goog.userAgent.BROWSER_KNOWN_ =
      goog.userAgent.ASSUME_IE ||
      goog.userAgent.ASSUME_EDGE ||
      goog.userAgent.ASSUME_GECKO ||
      goog.userAgent.ASSUME_MOBILE_WEBKIT ||
      goog.userAgent.ASSUME_WEBKIT ||
      goog.userAgent.ASSUME_OPERA),
    (goog.userAgent.getUserAgentString = function () {
      return goog.labs.userAgent.util.getUserAgent()
    }),
    (goog.userAgent.getNavigatorTyped = function () {
      return goog.global.navigator || null
    }),
    (goog.userAgent.getNavigator = function () {
      return goog.userAgent.getNavigatorTyped()
    }),
    (goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
      ? goog.userAgent.ASSUME_OPERA
      : goog.labs.userAgent.browser.isOpera()),
    (goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
      ? goog.userAgent.ASSUME_IE
      : goog.labs.userAgent.browser.isIE()),
    (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
      ? goog.userAgent.ASSUME_EDGE
      : goog.labs.userAgent.engine.isEdge()),
    (goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE),
    (goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
      ? goog.userAgent.ASSUME_GECKO
      : goog.labs.userAgent.engine.isGecko()),
    (goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
      ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT
      : goog.labs.userAgent.engine.isWebKit()),
    (goog.userAgent.isMobile_ = function () {
      return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent('Mobile')
    }),
    (goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_()),
    (goog.userAgent.SAFARI = goog.userAgent.WEBKIT),
    (goog.userAgent.determinePlatform_ = function () {
      var e = goog.userAgent.getNavigatorTyped()
      return (e && e.platform) || ''
    }),
    (goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_()),
    (goog.userAgent.ASSUME_MAC = !1),
    (goog.userAgent.ASSUME_WINDOWS = !1),
    (goog.userAgent.ASSUME_LINUX = !1),
    (goog.userAgent.ASSUME_X11 = !1),
    (goog.userAgent.ASSUME_ANDROID = !1),
    (goog.userAgent.ASSUME_IPHONE = !1),
    (goog.userAgent.ASSUME_IPAD = !1),
    (goog.userAgent.ASSUME_IPOD = !1),
    (goog.userAgent.ASSUME_KAIOS = !1),
    (goog.userAgent.ASSUME_GO2PHONE = !1),
    (goog.userAgent.PLATFORM_KNOWN_ =
      goog.userAgent.ASSUME_MAC ||
      goog.userAgent.ASSUME_WINDOWS ||
      goog.userAgent.ASSUME_LINUX ||
      goog.userAgent.ASSUME_X11 ||
      goog.userAgent.ASSUME_ANDROID ||
      goog.userAgent.ASSUME_IPHONE ||
      goog.userAgent.ASSUME_IPAD ||
      goog.userAgent.ASSUME_IPOD),
    (goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_MAC
      : goog.labs.userAgent.platform.isMacintosh()),
    (goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_WINDOWS
      : goog.labs.userAgent.platform.isWindows()),
    (goog.userAgent.isLegacyLinux_ = function () {
      return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
    }),
    (goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_LINUX
      : goog.userAgent.isLegacyLinux_()),
    (goog.userAgent.isX11_ = function () {
      var e = goog.userAgent.getNavigatorTyped()
      return !!e && goog.string.contains(e.appVersion || '', 'X11')
    }),
    (goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_X11
      : goog.userAgent.isX11_()),
    (goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_ANDROID
      : goog.labs.userAgent.platform.isAndroid()),
    (goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_IPHONE
      : goog.labs.userAgent.platform.isIphone()),
    (goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_IPAD
      : goog.labs.userAgent.platform.isIpad()),
    (goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_IPOD
      : goog.labs.userAgent.platform.isIpod()),
    (goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD
      : goog.labs.userAgent.platform.isIos()),
    (goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_KAIOS
      : goog.labs.userAgent.platform.isKaiOS()),
    (goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_
      ? goog.userAgent.ASSUME_GO2PHONE
      : goog.labs.userAgent.platform.isGo2Phone()),
    (goog.userAgent.determineVersion_ = function () {
      var e = '',
        t = goog.userAgent.getVersionRegexResult_()
      return (
        t && (e = t ? t[1] : ''),
        goog.userAgent.IE && null != (t = goog.userAgent.getDocumentMode_()) && t > parseFloat(e)
          ? String(t)
          : e
      )
    }),
    (goog.userAgent.getVersionRegexResult_ = function () {
      var e = goog.userAgent.getUserAgentString()
      return goog.userAgent.GECKO
        ? /rv:([^\);]+)(\)|;)/.exec(e)
        : goog.userAgent.EDGE
        ? /Edge\/([\d\.]+)/.exec(e)
        : goog.userAgent.IE
        ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e)
        : goog.userAgent.WEBKIT
        ? /WebKit\/(\S+)/.exec(e)
        : goog.userAgent.OPERA
        ? /(?:Version)[ \/]?(\S+)/.exec(e)
        : void 0
    }),
    (goog.userAgent.getDocumentMode_ = function () {
      var e = goog.global.document
      return e ? e.documentMode : void 0
    }),
    (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
    (goog.userAgent.compare = function (e, t) {
      return goog.string.compareVersions(e, t)
    }),
    (goog.userAgent.isVersionOrHigherCache_ = {}),
    (goog.userAgent.isVersionOrHigher = function (e) {
      return (
        goog.userAgent.ASSUME_ANY_VERSION ||
        goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, e, function () {
          return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e)
        })
      )
    }),
    (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
    (goog.userAgent.isDocumentModeOrHigher = function (e) {
      return Number(goog.userAgent.DOCUMENT_MODE) >= e
    }),
    (goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher),
    (goog.userAgent.DOCUMENT_MODE = (function () {
      if (goog.global.document && goog.userAgent.IE) return goog.userAgent.getDocumentMode_()
    })()),
    (goog.userAgent.product = {}),
    (goog.userAgent.product.ASSUME_FIREFOX = !1),
    (goog.userAgent.product.ASSUME_IPHONE = !1),
    (goog.userAgent.product.ASSUME_IPAD = !1),
    (goog.userAgent.product.ASSUME_ANDROID = !1),
    (goog.userAgent.product.ASSUME_CHROME = !1),
    (goog.userAgent.product.ASSUME_SAFARI = !1),
    (goog.userAgent.product.PRODUCT_KNOWN_ =
      goog.userAgent.ASSUME_IE ||
      goog.userAgent.ASSUME_EDGE ||
      goog.userAgent.ASSUME_OPERA ||
      goog.userAgent.product.ASSUME_FIREFOX ||
      goog.userAgent.product.ASSUME_IPHONE ||
      goog.userAgent.product.ASSUME_IPAD ||
      goog.userAgent.product.ASSUME_ANDROID ||
      goog.userAgent.product.ASSUME_CHROME ||
      goog.userAgent.product.ASSUME_SAFARI),
    (goog.userAgent.product.OPERA = goog.userAgent.OPERA),
    (goog.userAgent.product.IE = goog.userAgent.IE),
    (goog.userAgent.product.EDGE = goog.userAgent.EDGE),
    (goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_
      ? goog.userAgent.product.ASSUME_FIREFOX
      : goog.labs.userAgent.browser.isFirefox()),
    (goog.userAgent.product.isIphoneOrIpod_ = function () {
      return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
    }),
    (goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_
      ? goog.userAgent.product.ASSUME_IPHONE
      : goog.userAgent.product.isIphoneOrIpod_()),
    (goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
      ? goog.userAgent.product.ASSUME_IPAD
      : goog.labs.userAgent.platform.isIpad()),
    (goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_
      ? goog.userAgent.product.ASSUME_ANDROID
      : goog.labs.userAgent.browser.isAndroidBrowser()),
    (goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_
      ? goog.userAgent.product.ASSUME_CHROME
      : goog.labs.userAgent.browser.isChrome()),
    (goog.userAgent.product.isSafariDesktop_ = function () {
      return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
    }),
    (goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_
      ? goog.userAgent.product.ASSUME_SAFARI
      : goog.userAgent.product.isSafariDesktop_()),
    (goog.crypt.base64 = {}),
    (goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'),
    (goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + '+/='),
    (goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + '-_.'),
    (goog.crypt.base64.Alphabet = {
      DEFAULT: 0,
      NO_PADDING: 1,
      WEBSAFE: 2,
      WEBSAFE_DOT_PADDING: 3,
      WEBSAFE_NO_PADDING: 4,
    }),
    (goog.crypt.base64.paddingChars_ = '=.'),
    (goog.crypt.base64.isPadding_ = function (e) {
      return goog.string.contains(goog.crypt.base64.paddingChars_, e)
    }),
    (goog.crypt.base64.byteToCharMaps_ = {})
  ;(goog.crypt.base64.charToByteMap_ = null),
    (goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
      goog.userAgent.GECKO ||
      (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
      goog.userAgent.OPERA),
    (goog.crypt.base64.HAS_NATIVE_ENCODE_ =
      goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || 'function' == typeof goog.global.btoa),
    (goog.crypt.base64.HAS_NATIVE_DECODE_ =
      goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
      (!goog.userAgent.product.SAFARI &&
        !goog.userAgent.IE &&
        'function' == typeof goog.global.atob)),
    (goog.crypt.base64.encodeByteArray = function (e, t) {
      goog.asserts.assert(goog.isArrayLike(e), 'encodeByteArray takes an array as a parameter'),
        void 0 === t && (t = goog.crypt.base64.Alphabet.DEFAULT),
        goog.crypt.base64.init_(),
        (t = goog.crypt.base64.byteToCharMaps_[t])
      for (var o = [], r = 0; r < e.length; r += 3) {
        var n = e[r],
          s = r + 1 < e.length,
          i = s ? e[r + 1] : 0,
          g = r + 2 < e.length,
          a = g ? e[r + 2] : 0,
          l = n >> 2
        ;(n = ((3 & n) << 4) | (i >> 4)),
          (i = ((15 & i) << 2) | (a >> 6)),
          (a &= 63),
          g || ((a = 64), s || (i = 64)),
          o.push(t[l], t[n], t[i] || '', t[a] || '')
      }
      return o.join('')
    }),
    (goog.crypt.base64.encodeString = function (e, t) {
      return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t
        ? goog.global.btoa(e)
        : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), t)
    }),
    (goog.crypt.base64.decodeString = function (e, t) {
      if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t) return goog.global.atob(e)
      var o = ''
      return (
        goog.crypt.base64.decodeStringInternal_(e, function (e) {
          o += String.fromCharCode(e)
        }),
        o
      )
    }),
    (goog.crypt.base64.decodeStringToByteArray = function (e, t) {
      var o = []
      return (
        goog.crypt.base64.decodeStringInternal_(e, function (e) {
          o.push(e)
        }),
        o
      )
    }),
    (goog.crypt.base64.decodeStringToUint8Array = function (e) {
      goog.asserts.assert(
        !goog.userAgent.IE || goog.userAgent.isVersionOrHigher('10'),
        'Browser does not support typed arrays',
      )
      var t = e.length,
        o = (3 * t) / 4
      o % 3
        ? (o = Math.floor(o))
        : goog.crypt.base64.isPadding_(e[t - 1]) &&
          (o = goog.crypt.base64.isPadding_(e[t - 2]) ? o - 2 : o - 1)
      var r = new Uint8Array(o),
        n = 0
      return (
        goog.crypt.base64.decodeStringInternal_(e, function (e) {
          r[n++] = e
        }),
        r.subarray(0, n)
      )
    }),
    (goog.crypt.base64.decodeStringInternal_ = function (e, t) {
      function o(t) {
        for (; r < e.length; ) {
          var o = e.charAt(r++),
            n = goog.crypt.base64.charToByteMap_[o]
          if (null != n) return n
          if (!goog.string.isEmptyOrWhitespace(o))
            throw Error('Unknown base64 encoding at char: ' + o)
        }
        return t
      }
      goog.crypt.base64.init_()
      for (var r = 0; ; ) {
        var n = o(-1),
          s = o(0),
          i = o(64),
          g = o(64)
        if (64 === g && -1 === n) break
        t((n << 2) | (s >> 4)),
          64 != i && (t(((s << 4) & 240) | (i >> 2)), 64 != g && t(((i << 6) & 192) | g))
      }
    }),
    (goog.crypt.base64.init_ = function () {
      if (!goog.crypt.base64.charToByteMap_) {
        goog.crypt.base64.charToByteMap_ = {}
        for (
          var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(''),
            t = ['+/=', '+/', '-_=', '-_.', '-_'],
            o = 0;
          5 > o;
          o++
        ) {
          var r = e.concat(t[o].split(''))
          goog.crypt.base64.byteToCharMaps_[o] = r
          for (var n = 0; n < r.length; n++) {
            var s = r[n],
              i = goog.crypt.base64.charToByteMap_[s]
            void 0 === i ? (goog.crypt.base64.charToByteMap_[s] = n) : goog.asserts.assert(i === n)
          }
        }
      }
    }),
    (jspb.utils = {}),
    (jspb.utils.split64Low = 0),
    (jspb.utils.split64High = 0),
    (jspb.utils.splitUint64 = function (e) {
      var t = e >>> 0
      ;(e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
        (jspb.utils.split64Low = t),
        (jspb.utils.split64High = e)
    }),
    (jspb.utils.splitInt64 = function (e) {
      var t = 0 > e,
        o = (e = Math.abs(e)) >>> 0
      ;(e = Math.floor((e - o) / jspb.BinaryConstants.TWO_TO_32)),
        (e >>>= 0),
        t &&
          ((e = ~e >>> 0),
          4294967295 < (o = 1 + (~o >>> 0)) && ((o = 0), 4294967295 < ++e && (e = 0))),
        (jspb.utils.split64Low = o),
        (jspb.utils.split64High = e)
    }),
    (jspb.utils.splitZigzag64 = function (e) {
      var t = 0 > e
      ;(e = 2 * Math.abs(e)), jspb.utils.splitUint64(e), (e = jspb.utils.split64Low)
      var o = jspb.utils.split64High
      t && (0 == e ? (0 == o ? (o = e = 4294967295) : (o--, (e = 4294967295))) : e--),
        (jspb.utils.split64Low = e),
        (jspb.utils.split64High = o)
    }),
    (jspb.utils.splitFloat32 = function (e) {
      var t = 0 > e ? 1 : 0
      if (0 === (e = t ? -e : e))
        0 < 1 / e
          ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
          : ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483648))
      else if (isNaN(e)) (jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483647)
      else if (e > jspb.BinaryConstants.FLOAT32_MAX)
        (jspb.utils.split64High = 0), (jspb.utils.split64Low = ((t << 31) | 2139095040) >>> 0)
      else if (e < jspb.BinaryConstants.FLOAT32_MIN)
        (e = Math.round(e / Math.pow(2, -149))),
          (jspb.utils.split64High = 0),
          (jspb.utils.split64Low = ((t << 31) | e) >>> 0)
      else {
        var o = Math.floor(Math.log(e) / Math.LN2)
        ;(e *= Math.pow(2, -o)),
          16777216 <= (e = Math.round(e * jspb.BinaryConstants.TWO_TO_23)) && ++o,
          (jspb.utils.split64High = 0),
          (jspb.utils.split64Low = ((t << 31) | ((o + 127) << 23) | (8388607 & e)) >>> 0)
      }
    }),
    (jspb.utils.splitFloat64 = function (e) {
      var t = 0 > e ? 1 : 0
      if (0 === (e = t ? -e : e))
        (jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648), (jspb.utils.split64Low = 0)
      else if (isNaN(e)) (jspb.utils.split64High = 2147483647), (jspb.utils.split64Low = 4294967295)
      else if (e > jspb.BinaryConstants.FLOAT64_MAX)
        (jspb.utils.split64High = ((t << 31) | 2146435072) >>> 0), (jspb.utils.split64Low = 0)
      else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
        var o = e / Math.pow(2, -1074)
        ;(e = o / jspb.BinaryConstants.TWO_TO_32),
          (jspb.utils.split64High = ((t << 31) | e) >>> 0),
          (jspb.utils.split64Low = o >>> 0)
      } else {
        var r = 0
        if (2 <= (o = e)) for (; 2 <= o && 1023 > r; ) r++, (o /= 2)
        else for (; 1 > o && -1022 < r; ) (o *= 2), r--
        ;(e = ((o = e * Math.pow(2, -r)) * jspb.BinaryConstants.TWO_TO_20) & 1048575),
          (o = (o * jspb.BinaryConstants.TWO_TO_52) >>> 0),
          (jspb.utils.split64High = ((t << 31) | ((r + 1023) << 20) | e) >>> 0),
          (jspb.utils.split64Low = o)
      }
    }),
    (jspb.utils.splitHash64 = function (e) {
      var t = e.charCodeAt(0),
        o = e.charCodeAt(1),
        r = e.charCodeAt(2),
        n = e.charCodeAt(3),
        s = e.charCodeAt(4),
        i = e.charCodeAt(5),
        g = e.charCodeAt(6)
      ;(e = e.charCodeAt(7)),
        (jspb.utils.split64Low = (t + (o << 8) + (r << 16) + (n << 24)) >>> 0),
        (jspb.utils.split64High = (s + (i << 8) + (g << 16) + (e << 24)) >>> 0)
    }),
    (jspb.utils.joinUint64 = function (e, t) {
      return t * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0)
    }),
    (jspb.utils.joinInt64 = function (e, t) {
      var o = 2147483648 & t
      return (
        o && ((t = ~t >>> 0), 0 == (e = (1 + ~e) >>> 0) && (t = (t + 1) >>> 0)),
        (e = jspb.utils.joinUint64(e, t)),
        o ? -e : e
      )
    }),
    (jspb.utils.toZigzag64 = function (e, t, o) {
      var r = t >> 31
      return o((e << 1) ^ r, ((t << 1) | (e >>> 31)) ^ r)
    }),
    (jspb.utils.joinZigzag64 = function (e, t) {
      return jspb.utils.fromZigzag64(e, t, jspb.utils.joinInt64)
    }),
    (jspb.utils.fromZigzag64 = function (e, t, o) {
      var r = -(1 & e)
      return o(((e >>> 1) | (t << 31)) ^ r, (t >>> 1) ^ r)
    }),
    (jspb.utils.joinFloat32 = function (e, t) {
      t = 2 * (e >> 31) + 1
      var o = (e >>> 23) & 255
      return (
        (e &= 8388607),
        255 == o
          ? e
            ? NaN
            : (1 / 0) * t
          : 0 == o
          ? t * Math.pow(2, -149) * e
          : t * Math.pow(2, o - 150) * (e + Math.pow(2, 23))
      )
    }),
    (jspb.utils.joinFloat64 = function (e, t) {
      var o = 2 * (t >> 31) + 1,
        r = (t >>> 20) & 2047
      return (
        (e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e),
        2047 == r
          ? e
            ? NaN
            : (1 / 0) * o
          : 0 == r
          ? o * Math.pow(2, -1074) * e
          : o * Math.pow(2, r - 1075) * (e + jspb.BinaryConstants.TWO_TO_52)
      )
    }),
    (jspb.utils.joinHash64 = function (e, t) {
      return String.fromCharCode(
        (e >>> 0) & 255,
        (e >>> 8) & 255,
        (e >>> 16) & 255,
        (e >>> 24) & 255,
        (t >>> 0) & 255,
        (t >>> 8) & 255,
        (t >>> 16) & 255,
        (t >>> 24) & 255,
      )
    }),
    (jspb.utils.DIGITS = '0123456789abcdef'.split('')),
    (jspb.utils.ZERO_CHAR_CODE_ = 48),
    (jspb.utils.A_CHAR_CODE_ = 97),
    (jspb.utils.joinUnsignedDecimalString = function (e, t) {
      function o(e, t) {
        return (e = e ? String(e) : ''), t ? '0000000'.slice(e.length) + e : e
      }
      if (2097151 >= t) return '' + jspb.utils.joinUint64(e, t)
      var r = (((e >>> 24) | (t << 8)) >>> 0) & 16777215
      return (
        (e = (16777215 & e) + 6777216 * r + 6710656 * (t = (t >> 16) & 65535)),
        (r += 8147497 * t),
        (t *= 2),
        1e7 <= e && ((r += Math.floor(e / 1e7)), (e %= 1e7)),
        1e7 <= r && ((t += Math.floor(r / 1e7)), (r %= 1e7)),
        o(t, 0) + o(r, t) + o(e, 1)
      )
    }),
    (jspb.utils.joinSignedDecimalString = function (e, t) {
      var o = 2147483648 & t
      return (
        o && (t = (~t + (0 == (e = (1 + ~e) >>> 0) ? 1 : 0)) >>> 0),
        (e = jspb.utils.joinUnsignedDecimalString(e, t)),
        o ? '-' + e : e
      )
    }),
    (jspb.utils.hash64ToDecimalString = function (e, t) {
      jspb.utils.splitHash64(e), (e = jspb.utils.split64Low)
      var o = jspb.utils.split64High
      return t
        ? jspb.utils.joinSignedDecimalString(e, o)
        : jspb.utils.joinUnsignedDecimalString(e, o)
    }),
    (jspb.utils.hash64ArrayToDecimalStrings = function (e, t) {
      for (var o = Array(e.length), r = 0; r < e.length; r++)
        o[r] = jspb.utils.hash64ToDecimalString(e[r], t)
      return o
    }),
    (jspb.utils.decimalStringToHash64 = function (e) {
      function t(e, t) {
        for (var o = 0; 8 > o && (1 !== e || 0 < t); o++)
          (t = e * r[o] + t), (r[o] = 255 & t), (t >>>= 8)
      }
      goog.asserts.assert(0 < e.length)
      var o = !1
      '-' === e[0] && ((o = !0), (e = e.slice(1)))
      for (var r = [0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < e.length; n++)
        t(10, e.charCodeAt(n) - jspb.utils.ZERO_CHAR_CODE_)
      return (
        o &&
          ((function () {
            for (var e = 0; 8 > e; e++) r[e] = 255 & ~r[e]
          })(),
          t(1, 1)),
        goog.crypt.byteArrayToString(r)
      )
    }),
    (jspb.utils.splitDecimalString = function (e) {
      jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))
    }),
    (jspb.utils.toHexDigit_ = function (e) {
      return String.fromCharCode(
        10 > e ? jspb.utils.ZERO_CHAR_CODE_ + e : jspb.utils.A_CHAR_CODE_ - 10 + e,
      )
    }),
    (jspb.utils.fromHexCharCode_ = function (e) {
      return e >= jspb.utils.A_CHAR_CODE_
        ? e - jspb.utils.A_CHAR_CODE_ + 10
        : e - jspb.utils.ZERO_CHAR_CODE_
    }),
    (jspb.utils.hash64ToHexString = function (e) {
      var t = Array(18)
      ;(t[0] = '0'), (t[1] = 'x')
      for (var o = 0; 8 > o; o++) {
        var r = e.charCodeAt(7 - o)
        ;(t[2 * o + 2] = jspb.utils.toHexDigit_(r >> 4)),
          (t[2 * o + 3] = jspb.utils.toHexDigit_(15 & r))
      }
      return t.join('')
    }),
    (jspb.utils.hexStringToHash64 = function (e) {
      ;(e = e.toLowerCase()),
        goog.asserts.assert(18 == e.length),
        goog.asserts.assert('0' == e[0]),
        goog.asserts.assert('x' == e[1])
      for (var t = '', o = 0; 8 > o; o++) {
        var r = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 2)),
          n = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 3))
        t = String.fromCharCode(16 * r + n) + t
      }
      return t
    }),
    (jspb.utils.hash64ToNumber = function (e, t) {
      jspb.utils.splitHash64(e), (e = jspb.utils.split64Low)
      var o = jspb.utils.split64High
      return t ? jspb.utils.joinInt64(e, o) : jspb.utils.joinUint64(e, o)
    }),
    (jspb.utils.numberToHash64 = function (e) {
      return (
        jspb.utils.splitInt64(e),
        jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
      )
    }),
    (jspb.utils.countVarints = function (e, t, o) {
      for (var r = 0, n = t; n < o; n++) r += e[n] >> 7
      return o - t - r
    }),
    (jspb.utils.countVarintFields = function (e, t, o, r) {
      var n = 0
      if (128 > (r = 8 * r + jspb.BinaryConstants.WireType.VARINT))
        for (; t < o && e[t++] == r; )
          for (n++; ; ) {
            var s = e[t++]
            if (0 == (128 & s)) break
          }
      else
        for (; t < o; ) {
          for (s = r; 128 < s; ) {
            if (e[t] != ((127 & s) | 128)) return n
            t++, (s >>= 7)
          }
          if (e[t++] != s) break
          for (n++; 0 != (128 & (s = e[t++])); );
        }
      return n
    }),
    (jspb.utils.countFixedFields_ = function (e, t, o, r, n) {
      var s = 0
      if (128 > r) for (; t < o && e[t++] == r; ) s++, (t += n)
      else
        for (; t < o; ) {
          for (var i = r; 128 < i; ) {
            if (e[t++] != ((127 & i) | 128)) return s
            i >>= 7
          }
          if (e[t++] != i) break
          s++, (t += n)
        }
      return s
    }),
    (jspb.utils.countFixed32Fields = function (e, t, o, r) {
      return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED32, 4)
    }),
    (jspb.utils.countFixed64Fields = function (e, t, o, r) {
      return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED64, 8)
    }),
    (jspb.utils.countDelimitedFields = function (e, t, o, r) {
      var n = 0
      for (r = 8 * r + jspb.BinaryConstants.WireType.DELIMITED; t < o; ) {
        for (var s = r; 128 < s; ) {
          if (e[t++] != ((127 & s) | 128)) return n
          s >>= 7
        }
        if (e[t++] != s) break
        n++
        for (var i = 0, g = 1; (i += (127 & (s = e[t++])) * g), (g *= 128), 0 != (128 & s); );
        t += i
      }
      return n
    }),
    (jspb.utils.debugBytesToTextFormat = function (e) {
      var t = '"'
      if (e) {
        e = jspb.utils.byteSourceToUint8Array(e)
        for (var o = 0; o < e.length; o++)
          (t += '\\x'), 16 > e[o] && (t += '0'), (t += e[o].toString(16))
      }
      return t + '"'
    }),
    (jspb.utils.debugScalarToTextFormat = function (e) {
      return 'string' == typeof e ? goog.string.quote(e) : e.toString()
    }),
    (jspb.utils.stringToByteArray = function (e) {
      for (var t = new Uint8Array(e.length), o = 0; o < e.length; o++) {
        var r = e.charCodeAt(o)
        if (255 < r)
          throw Error('Conversion error: string contains codepoint outside of byte range')
        t[o] = r
      }
      return t
    }),
    (jspb.utils.byteSourceToUint8Array = function (e) {
      return e.constructor === Uint8Array
        ? e
        : e.constructor === ArrayBuffer ||
          ('undefined' != typeof Buffer && e.constructor === Buffer) ||
          e.constructor === Array
        ? new Uint8Array(e)
        : e.constructor === String
        ? goog.crypt.base64.decodeStringToUint8Array(e)
        : (goog.asserts.fail('Type not convertible to Uint8Array.'), new Uint8Array(0))
    }),
    (jspb.BinaryDecoder = function (e, t, o) {
      ;(this.bytes_ = null),
        (this.cursor_ = this.end_ = this.start_ = 0),
        (this.error_ = !1),
        e && this.setBlock(e, t, o)
    }),
    (jspb.BinaryDecoder.instanceCache_ = []),
    (jspb.BinaryDecoder.alloc = function (e, t, o) {
      if (jspb.BinaryDecoder.instanceCache_.length) {
        var r = jspb.BinaryDecoder.instanceCache_.pop()
        return e && r.setBlock(e, t, o), r
      }
      return new jspb.BinaryDecoder(e, t, o)
    }),
    (jspb.BinaryDecoder.prototype.free = function () {
      this.clear(),
        100 > jspb.BinaryDecoder.instanceCache_.length &&
          jspb.BinaryDecoder.instanceCache_.push(this)
    }),
    (jspb.BinaryDecoder.prototype.clone = function () {
      return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
    }),
    (jspb.BinaryDecoder.prototype.clear = function () {
      ;(this.bytes_ = null), (this.cursor_ = this.end_ = this.start_ = 0), (this.error_ = !1)
    }),
    (jspb.BinaryDecoder.prototype.getBuffer = function () {
      return this.bytes_
    }),
    (jspb.BinaryDecoder.prototype.setBlock = function (e, t, o) {
      ;(this.bytes_ = jspb.utils.byteSourceToUint8Array(e)),
        (this.start_ = void 0 !== t ? t : 0),
        (this.end_ = void 0 !== o ? this.start_ + o : this.bytes_.length),
        (this.cursor_ = this.start_)
    }),
    (jspb.BinaryDecoder.prototype.getEnd = function () {
      return this.end_
    }),
    (jspb.BinaryDecoder.prototype.setEnd = function (e) {
      this.end_ = e
    }),
    (jspb.BinaryDecoder.prototype.reset = function () {
      this.cursor_ = this.start_
    }),
    (jspb.BinaryDecoder.prototype.getCursor = function () {
      return this.cursor_
    }),
    (jspb.BinaryDecoder.prototype.setCursor = function (e) {
      this.cursor_ = e
    }),
    (jspb.BinaryDecoder.prototype.advance = function (e) {
      ;(this.cursor_ += e), goog.asserts.assert(this.cursor_ <= this.end_)
    }),
    (jspb.BinaryDecoder.prototype.atEnd = function () {
      return this.cursor_ == this.end_
    }),
    (jspb.BinaryDecoder.prototype.pastEnd = function () {
      return this.cursor_ > this.end_
    }),
    (jspb.BinaryDecoder.prototype.getError = function () {
      return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_
    }),
    (jspb.BinaryDecoder.prototype.readSplitVarint64 = function (e) {
      for (var t = 128, o = 0, r = 0, n = 0; 4 > n && 128 <= t; n++)
        o |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * n)
      if (
        (128 <= t &&
          ((o |= (127 & (t = this.bytes_[this.cursor_++])) << 28), (r |= (127 & t) >> 4)),
        128 <= t)
      )
        for (n = 0; 5 > n && 128 <= t; n++)
          r |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * n + 3)
      if (128 > t) return e(o >>> 0, r >>> 0)
      goog.asserts.fail('Failed to read varint, encoding is invalid.'), (this.error_ = !0)
    }),
    (jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (e) {
      return this.readSplitVarint64(function (t, o) {
        return jspb.utils.fromZigzag64(t, o, e)
      })
    }),
    (jspb.BinaryDecoder.prototype.readSplitFixed64 = function (e) {
      var t = this.bytes_,
        o = this.cursor_
      this.cursor_ += 8
      for (var r = 0, n = 0, s = o + 7; s >= o; s--)
        (r = (r << 8) | t[s]), (n = (n << 8) | t[s + 4])
      return e(r, n)
    }),
    (jspb.BinaryDecoder.prototype.skipVarint = function () {
      for (; 128 & this.bytes_[this.cursor_]; ) this.cursor_++
      this.cursor_++
    }),
    (jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
      for (; 128 < e; ) this.cursor_--, (e >>>= 7)
      this.cursor_--
    }),
    (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
      var e = this.bytes_,
        t = e[this.cursor_ + 0],
        o = 127 & t
      return 128 > t
        ? ((this.cursor_ += 1), goog.asserts.assert(this.cursor_ <= this.end_), o)
        : ((o |= (127 & (t = e[this.cursor_ + 1])) << 7),
          128 > t
            ? ((this.cursor_ += 2), goog.asserts.assert(this.cursor_ <= this.end_), o)
            : ((o |= (127 & (t = e[this.cursor_ + 2])) << 14),
              128 > t
                ? ((this.cursor_ += 3), goog.asserts.assert(this.cursor_ <= this.end_), o)
                : ((o |= (127 & (t = e[this.cursor_ + 3])) << 21),
                  128 > t
                    ? ((this.cursor_ += 4), goog.asserts.assert(this.cursor_ <= this.end_), o)
                    : ((o |= (15 & (t = e[this.cursor_ + 4])) << 28),
                      128 > t
                        ? ((this.cursor_ += 5),
                          goog.asserts.assert(this.cursor_ <= this.end_),
                          o >>> 0)
                        : ((this.cursor_ += 5),
                          128 <= e[this.cursor_++] &&
                            128 <= e[this.cursor_++] &&
                            128 <= e[this.cursor_++] &&
                            128 <= e[this.cursor_++] &&
                            128 <= e[this.cursor_++] &&
                            goog.asserts.assert(!1),
                          goog.asserts.assert(this.cursor_ <= this.end_),
                          o)))))
    }),
    (jspb.BinaryDecoder.prototype.readSignedVarint32 =
      jspb.BinaryDecoder.prototype.readUnsignedVarint32),
    (jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
      return this.readUnsignedVarint32().toString()
    }),
    (jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
      return this.readSignedVarint32().toString()
    }),
    (jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
      var e = this.readUnsignedVarint32()
      return (e >>> 1) ^ -(1 & e)
    }),
    (jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
      return this.readSplitVarint64(jspb.utils.joinUint64)
    }),
    (jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
      return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)
    }),
    (jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
      return this.readSplitVarint64(jspb.utils.joinInt64)
    }),
    (jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
      return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)
    }),
    (jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
      return this.readSplitVarint64(jspb.utils.joinZigzag64)
    }),
    (jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
      return this.readSplitZigzagVarint64(jspb.utils.joinHash64)
    }),
    (jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
      return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)
    }),
    (jspb.BinaryDecoder.prototype.readUint8 = function () {
      var e = this.bytes_[this.cursor_ + 0]
      return (this.cursor_ += 1), goog.asserts.assert(this.cursor_ <= this.end_), e
    }),
    (jspb.BinaryDecoder.prototype.readUint16 = function () {
      var e = this.bytes_[this.cursor_ + 0],
        t = this.bytes_[this.cursor_ + 1]
      return (
        (this.cursor_ += 2), goog.asserts.assert(this.cursor_ <= this.end_), (e << 0) | (t << 8)
      )
    }),
    (jspb.BinaryDecoder.prototype.readUint32 = function () {
      var e = this.bytes_[this.cursor_ + 0],
        t = this.bytes_[this.cursor_ + 1],
        o = this.bytes_[this.cursor_ + 2],
        r = this.bytes_[this.cursor_ + 3]
      return (
        (this.cursor_ += 4),
        goog.asserts.assert(this.cursor_ <= this.end_),
        ((e << 0) | (t << 8) | (o << 16) | (r << 24)) >>> 0
      )
    }),
    (jspb.BinaryDecoder.prototype.readUint64 = function () {
      var e = this.readUint32(),
        t = this.readUint32()
      return jspb.utils.joinUint64(e, t)
    }),
    (jspb.BinaryDecoder.prototype.readUint64String = function () {
      var e = this.readUint32(),
        t = this.readUint32()
      return jspb.utils.joinUnsignedDecimalString(e, t)
    }),
    (jspb.BinaryDecoder.prototype.readInt8 = function () {
      var e = this.bytes_[this.cursor_ + 0]
      return (this.cursor_ += 1), goog.asserts.assert(this.cursor_ <= this.end_), (e << 24) >> 24
    }),
    (jspb.BinaryDecoder.prototype.readInt16 = function () {
      var e = this.bytes_[this.cursor_ + 0],
        t = this.bytes_[this.cursor_ + 1]
      return (
        (this.cursor_ += 2),
        goog.asserts.assert(this.cursor_ <= this.end_),
        (((e << 0) | (t << 8)) << 16) >> 16
      )
    }),
    (jspb.BinaryDecoder.prototype.readInt32 = function () {
      var e = this.bytes_[this.cursor_ + 0],
        t = this.bytes_[this.cursor_ + 1],
        o = this.bytes_[this.cursor_ + 2],
        r = this.bytes_[this.cursor_ + 3]
      return (
        (this.cursor_ += 4),
        goog.asserts.assert(this.cursor_ <= this.end_),
        (e << 0) | (t << 8) | (o << 16) | (r << 24)
      )
    }),
    (jspb.BinaryDecoder.prototype.readInt64 = function () {
      var e = this.readUint32(),
        t = this.readUint32()
      return jspb.utils.joinInt64(e, t)
    }),
    (jspb.BinaryDecoder.prototype.readInt64String = function () {
      var e = this.readUint32(),
        t = this.readUint32()
      return jspb.utils.joinSignedDecimalString(e, t)
    }),
    (jspb.BinaryDecoder.prototype.readFloat = function () {
      var e = this.readUint32()
      return jspb.utils.joinFloat32(e, 0)
    }),
    (jspb.BinaryDecoder.prototype.readDouble = function () {
      var e = this.readUint32(),
        t = this.readUint32()
      return jspb.utils.joinFloat64(e, t)
    }),
    (jspb.BinaryDecoder.prototype.readBool = function () {
      return !!this.bytes_[this.cursor_++]
    }),
    (jspb.BinaryDecoder.prototype.readEnum = function () {
      return this.readSignedVarint32()
    }),
    (jspb.BinaryDecoder.prototype.readString = function (e) {
      var t = this.bytes_,
        o = this.cursor_
      e = o + e
      for (var r = [], n = ''; o < e; ) {
        var s = t[o++]
        if (128 > s) r.push(s)
        else {
          if (192 > s) continue
          if (224 > s) {
            var i = t[o++]
            r.push(((31 & s) << 6) | (63 & i))
          } else if (240 > s) {
            i = t[o++]
            var g = t[o++]
            r.push(((15 & s) << 12) | ((63 & i) << 6) | (63 & g))
          } else if (248 > s) {
            ;(s =
              ((7 & s) << 18) |
              ((63 & (i = t[o++])) << 12) |
              ((63 & (g = t[o++])) << 6) |
              (63 & t[o++])),
              (s -= 65536),
              r.push(55296 + ((s >> 10) & 1023), 56320 + (1023 & s))
          }
        }
        8192 <= r.length && ((n += String.fromCharCode.apply(null, r)), (r.length = 0))
      }
      return (n += goog.crypt.byteArrayToString(r)), (this.cursor_ = o), n
    }),
    (jspb.BinaryDecoder.prototype.readStringWithLength = function () {
      var e = this.readUnsignedVarint32()
      return this.readString(e)
    }),
    (jspb.BinaryDecoder.prototype.readBytes = function (e) {
      if (0 > e || this.cursor_ + e > this.bytes_.length)
        return (this.error_ = !0), goog.asserts.fail('Invalid byte length!'), new Uint8Array(0)
      var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e)
      return (this.cursor_ += e), goog.asserts.assert(this.cursor_ <= this.end_), t
    }),
    (jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
      return this.readSplitVarint64(jspb.utils.joinHash64)
    }),
    (jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
      var e = this.bytes_,
        t = this.cursor_,
        o = e[t + 0],
        r = e[t + 1],
        n = e[t + 2],
        s = e[t + 3],
        i = e[t + 4],
        g = e[t + 5],
        a = e[t + 6]
      return (e = e[t + 7]), (this.cursor_ += 8), String.fromCharCode(o, r, n, s, i, g, a, e)
    }),
    (jspb.BinaryReader = function (e, t, o) {
      ;(this.decoder_ = jspb.BinaryDecoder.alloc(e, t, o)),
        (this.fieldCursor_ = this.decoder_.getCursor()),
        (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
        (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
        (this.error_ = !1),
        (this.readCallbacks_ = null)
    }),
    (jspb.BinaryReader.instanceCache_ = []),
    (jspb.BinaryReader.alloc = function (e, t, o) {
      if (jspb.BinaryReader.instanceCache_.length) {
        var r = jspb.BinaryReader.instanceCache_.pop()
        return e && r.decoder_.setBlock(e, t, o), r
      }
      return new jspb.BinaryReader(e, t, o)
    }),
    (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
    (jspb.BinaryReader.prototype.free = function () {
      this.decoder_.clear(),
        (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
        (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
        (this.error_ = !1),
        (this.readCallbacks_ = null),
        100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this)
    }),
    (jspb.BinaryReader.prototype.getFieldCursor = function () {
      return this.fieldCursor_
    }),
    (jspb.BinaryReader.prototype.getCursor = function () {
      return this.decoder_.getCursor()
    }),
    (jspb.BinaryReader.prototype.getBuffer = function () {
      return this.decoder_.getBuffer()
    }),
    (jspb.BinaryReader.prototype.getFieldNumber = function () {
      return this.nextField_
    }),
    (jspb.BinaryReader.prototype.getWireType = function () {
      return this.nextWireType_
    }),
    (jspb.BinaryReader.prototype.isDelimited = function () {
      return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
    }),
    (jspb.BinaryReader.prototype.isEndGroup = function () {
      return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
    }),
    (jspb.BinaryReader.prototype.getError = function () {
      return this.error_ || this.decoder_.getError()
    }),
    (jspb.BinaryReader.prototype.setBlock = function (e, t, o) {
      this.decoder_.setBlock(e, t, o),
        (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
        (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID)
    }),
    (jspb.BinaryReader.prototype.reset = function () {
      this.decoder_.reset(),
        (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
        (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID)
    }),
    (jspb.BinaryReader.prototype.advance = function (e) {
      this.decoder_.advance(e)
    }),
    (jspb.BinaryReader.prototype.nextField = function () {
      if (this.decoder_.atEnd()) return !1
      if (this.getError()) return goog.asserts.fail('Decoder hit an error'), !1
      this.fieldCursor_ = this.decoder_.getCursor()
      var e = this.decoder_.readUnsignedVarint32(),
        t = e >>> 3
      return (e &= 7) != jspb.BinaryConstants.WireType.VARINT &&
        e != jspb.BinaryConstants.WireType.FIXED32 &&
        e != jspb.BinaryConstants.WireType.FIXED64 &&
        e != jspb.BinaryConstants.WireType.DELIMITED &&
        e != jspb.BinaryConstants.WireType.START_GROUP &&
        e != jspb.BinaryConstants.WireType.END_GROUP
        ? (goog.asserts.fail('Invalid wire type: %s (at position %s)', e, this.fieldCursor_),
          (this.error_ = !0),
          !1)
        : ((this.nextField_ = t), (this.nextWireType_ = e), !0)
    }),
    (jspb.BinaryReader.prototype.unskipHeader = function () {
      this.decoder_.unskipVarint((this.nextField_ << 3) | this.nextWireType_)
    }),
    (jspb.BinaryReader.prototype.skipMatchingFields = function () {
      var e = this.nextField_
      for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e; ) this.skipField()
      this.decoder_.atEnd() || this.unskipHeader()
    }),
    (jspb.BinaryReader.prototype.skipVarintField = function () {
      this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT
        ? (goog.asserts.fail('Invalid wire type for skipVarintField'), this.skipField())
        : this.decoder_.skipVarint()
    }),
    (jspb.BinaryReader.prototype.skipDelimitedField = function () {
      if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
        goog.asserts.fail('Invalid wire type for skipDelimitedField'), this.skipField()
      else {
        var e = this.decoder_.readUnsignedVarint32()
        this.decoder_.advance(e)
      }
    }),
    (jspb.BinaryReader.prototype.skipFixed32Field = function () {
      this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32
        ? (goog.asserts.fail('Invalid wire type for skipFixed32Field'), this.skipField())
        : this.decoder_.advance(4)
    }),
    (jspb.BinaryReader.prototype.skipFixed64Field = function () {
      this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64
        ? (goog.asserts.fail('Invalid wire type for skipFixed64Field'), this.skipField())
        : this.decoder_.advance(8)
    }),
    (jspb.BinaryReader.prototype.skipGroup = function () {
      for (var e = this.nextField_; ; ) {
        if (!this.nextField()) {
          goog.asserts.fail('Unmatched start-group tag: stream EOF'), (this.error_ = !0)
          break
        }
        if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
          this.nextField_ != e && (goog.asserts.fail('Unmatched end-group tag'), (this.error_ = !0))
          break
        }
        this.skipField()
      }
    }),
    (jspb.BinaryReader.prototype.skipField = function () {
      switch (this.nextWireType_) {
        case jspb.BinaryConstants.WireType.VARINT:
          this.skipVarintField()
          break
        case jspb.BinaryConstants.WireType.FIXED64:
          this.skipFixed64Field()
          break
        case jspb.BinaryConstants.WireType.DELIMITED:
          this.skipDelimitedField()
          break
        case jspb.BinaryConstants.WireType.FIXED32:
          this.skipFixed32Field()
          break
        case jspb.BinaryConstants.WireType.START_GROUP:
          this.skipGroup()
          break
        default:
          goog.asserts.fail('Invalid wire encoding for field.')
      }
    }),
    (jspb.BinaryReader.prototype.registerReadCallback = function (e, t) {
      null === this.readCallbacks_ && (this.readCallbacks_ = {}),
        goog.asserts.assert(!this.readCallbacks_[e]),
        (this.readCallbacks_[e] = t)
    }),
    (jspb.BinaryReader.prototype.runReadCallback = function (e) {
      return (
        goog.asserts.assert(null !== this.readCallbacks_),
        (e = this.readCallbacks_[e]),
        goog.asserts.assert(e),
        e(this)
      )
    }),
    (jspb.BinaryReader.prototype.readAny = function (e) {
      this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e)
      var t = jspb.BinaryConstants.FieldType
      switch (e) {
        case t.DOUBLE:
          return this.readDouble()
        case t.FLOAT:
          return this.readFloat()
        case t.INT64:
          return this.readInt64()
        case t.UINT64:
          return this.readUint64()
        case t.INT32:
          return this.readInt32()
        case t.FIXED64:
          return this.readFixed64()
        case t.FIXED32:
          return this.readFixed32()
        case t.BOOL:
          return this.readBool()
        case t.STRING:
          return this.readString()
        case t.GROUP:
          goog.asserts.fail('Group field type not supported in readAny()')
        case t.MESSAGE:
          goog.asserts.fail('Message field type not supported in readAny()')
        case t.BYTES:
          return this.readBytes()
        case t.UINT32:
          return this.readUint32()
        case t.ENUM:
          return this.readEnum()
        case t.SFIXED32:
          return this.readSfixed32()
        case t.SFIXED64:
          return this.readSfixed64()
        case t.SINT32:
          return this.readSint32()
        case t.SINT64:
          return this.readSint64()
        case t.FHASH64:
          return this.readFixedHash64()
        case t.VHASH64:
          return this.readVarintHash64()
        default:
          goog.asserts.fail('Invalid field type in readAny()')
      }
      return 0
    }),
    (jspb.BinaryReader.prototype.readMessage = function (e, t) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED)
      var o = this.decoder_.getEnd(),
        r = this.decoder_.readUnsignedVarint32()
      ;(r = this.decoder_.getCursor() + r),
        this.decoder_.setEnd(r),
        t(e, this),
        this.decoder_.setCursor(r),
        this.decoder_.setEnd(o)
    }),
    (jspb.BinaryReader.prototype.readGroup = function (e, t, o) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP),
        goog.asserts.assert(this.nextField_ == e),
        o(t, this),
        this.error_ ||
          this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
          (goog.asserts.fail('Group submessage did not end with an END_GROUP tag'),
          (this.error_ = !0))
    }),
    (jspb.BinaryReader.prototype.getFieldDecoder = function () {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED)
      var e = this.decoder_.readUnsignedVarint32(),
        t = this.decoder_.getCursor(),
        o = t + e
      return (
        (e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e)),
        this.decoder_.setCursor(o),
        e
      )
    }),
    (jspb.BinaryReader.prototype.readInt32 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint32()
      )
    }),
    (jspb.BinaryReader.prototype.readInt32String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint32String()
      )
    }),
    (jspb.BinaryReader.prototype.readInt64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint64()
      )
    }),
    (jspb.BinaryReader.prototype.readInt64String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint64String()
      )
    }),
    (jspb.BinaryReader.prototype.readUint32 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint32()
      )
    }),
    (jspb.BinaryReader.prototype.readUint32String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint32String()
      )
    }),
    (jspb.BinaryReader.prototype.readUint64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint64()
      )
    }),
    (jspb.BinaryReader.prototype.readUint64String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readUnsignedVarint64String()
      )
    }),
    (jspb.BinaryReader.prototype.readSint32 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarint32()
      )
    }),
    (jspb.BinaryReader.prototype.readSint64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarint64()
      )
    }),
    (jspb.BinaryReader.prototype.readSint64String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarint64String()
      )
    }),
    (jspb.BinaryReader.prototype.readFixed32 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readUint32()
      )
    }),
    (jspb.BinaryReader.prototype.readFixed64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readUint64()
      )
    }),
    (jspb.BinaryReader.prototype.readFixed64String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readUint64String()
      )
    }),
    (jspb.BinaryReader.prototype.readSfixed32 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readInt32()
      )
    }),
    (jspb.BinaryReader.prototype.readSfixed32String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readInt32().toString()
      )
    }),
    (jspb.BinaryReader.prototype.readSfixed64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readInt64()
      )
    }),
    (jspb.BinaryReader.prototype.readSfixed64String = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readInt64String()
      )
    }),
    (jspb.BinaryReader.prototype.readFloat = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32),
        this.decoder_.readFloat()
      )
    }),
    (jspb.BinaryReader.prototype.readDouble = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readDouble()
      )
    }),
    (jspb.BinaryReader.prototype.readBool = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        !!this.decoder_.readUnsignedVarint32()
      )
    }),
    (jspb.BinaryReader.prototype.readEnum = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSignedVarint64()
      )
    }),
    (jspb.BinaryReader.prototype.readString = function () {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED)
      var e = this.decoder_.readUnsignedVarint32()
      return this.decoder_.readString(e)
    }),
    (jspb.BinaryReader.prototype.readBytes = function () {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED)
      var e = this.decoder_.readUnsignedVarint32()
      return this.decoder_.readBytes(e)
    }),
    (jspb.BinaryReader.prototype.readVarintHash64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readVarintHash64()
      )
    }),
    (jspb.BinaryReader.prototype.readSintHash64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readZigzagVarintHash64()
      )
    }),
    (jspb.BinaryReader.prototype.readSplitVarint64 = function (e) {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSplitVarint64(e)
      )
    }),
    (jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (e) {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT),
        this.decoder_.readSplitVarint64(function (t, o) {
          return jspb.utils.fromZigzag64(t, o, e)
        })
      )
    }),
    (jspb.BinaryReader.prototype.readFixedHash64 = function () {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readFixedHash64()
      )
    }),
    (jspb.BinaryReader.prototype.readSplitFixed64 = function (e) {
      return (
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64),
        this.decoder_.readSplitFixed64(e)
      )
    }),
    (jspb.BinaryReader.prototype.readPackedField_ = function (e) {
      goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED)
      var t = this.decoder_.readUnsignedVarint32()
      t = this.decoder_.getCursor() + t
      for (var o = []; this.decoder_.getCursor() < t; ) o.push(e.call(this.decoder_))
      return o
    }),
    (jspb.BinaryReader.prototype.readPackedInt32 = function () {
      return this.readPackedField_(this.decoder_.readSignedVarint32)
    }),
    (jspb.BinaryReader.prototype.readPackedInt32String = function () {
      return this.readPackedField_(this.decoder_.readSignedVarint32String)
    }),
    (jspb.BinaryReader.prototype.readPackedInt64 = function () {
      return this.readPackedField_(this.decoder_.readSignedVarint64)
    }),
    (jspb.BinaryReader.prototype.readPackedInt64String = function () {
      return this.readPackedField_(this.decoder_.readSignedVarint64String)
    }),
    (jspb.BinaryReader.prototype.readPackedUint32 = function () {
      return this.readPackedField_(this.decoder_.readUnsignedVarint32)
    }),
    (jspb.BinaryReader.prototype.readPackedUint32String = function () {
      return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
    }),
    (jspb.BinaryReader.prototype.readPackedUint64 = function () {
      return this.readPackedField_(this.decoder_.readUnsignedVarint64)
    }),
    (jspb.BinaryReader.prototype.readPackedUint64String = function () {
      return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
    }),
    (jspb.BinaryReader.prototype.readPackedSint32 = function () {
      return this.readPackedField_(this.decoder_.readZigzagVarint32)
    }),
    (jspb.BinaryReader.prototype.readPackedSint64 = function () {
      return this.readPackedField_(this.decoder_.readZigzagVarint64)
    }),
    (jspb.BinaryReader.prototype.readPackedSint64String = function () {
      return this.readPackedField_(this.decoder_.readZigzagVarint64String)
    }),
    (jspb.BinaryReader.prototype.readPackedFixed32 = function () {
      return this.readPackedField_(this.decoder_.readUint32)
    }),
    (jspb.BinaryReader.prototype.readPackedFixed64 = function () {
      return this.readPackedField_(this.decoder_.readUint64)
    }),
    (jspb.BinaryReader.prototype.readPackedFixed64String = function () {
      return this.readPackedField_(this.decoder_.readUint64String)
    }),
    (jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
      return this.readPackedField_(this.decoder_.readInt32)
    }),
    (jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
      return this.readPackedField_(this.decoder_.readInt64)
    }),
    (jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
      return this.readPackedField_(this.decoder_.readInt64String)
    }),
    (jspb.BinaryReader.prototype.readPackedFloat = function () {
      return this.readPackedField_(this.decoder_.readFloat)
    }),
    (jspb.BinaryReader.prototype.readPackedDouble = function () {
      return this.readPackedField_(this.decoder_.readDouble)
    }),
    (jspb.BinaryReader.prototype.readPackedBool = function () {
      return this.readPackedField_(this.decoder_.readBool)
    }),
    (jspb.BinaryReader.prototype.readPackedEnum = function () {
      return this.readPackedField_(this.decoder_.readEnum)
    }),
    (jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
      return this.readPackedField_(this.decoder_.readVarintHash64)
    }),
    (jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
      return this.readPackedField_(this.decoder_.readFixedHash64)
    }),
    (jspb.BinaryEncoder = function () {
      this.buffer_ = []
    }),
    (jspb.BinaryEncoder.prototype.length = function () {
      return this.buffer_.length
    }),
    (jspb.BinaryEncoder.prototype.end = function () {
      var e = this.buffer_
      return (this.buffer_ = []), e
    }),
    (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, t) {
      for (
        goog.asserts.assert(e == Math.floor(e)),
          goog.asserts.assert(t == Math.floor(t)),
          goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
          goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32);
        0 < t || 127 < e;

      )
        this.buffer_.push((127 & e) | 128), (e = ((e >>> 7) | (t << 25)) >>> 0), (t >>>= 7)
      this.buffer_.push(e)
    }),
    (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, t) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(t == Math.floor(t)),
        goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
        goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeUint32(e),
        this.writeUint32(t)
    }),
    (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
      for (
        goog.asserts.assert(e == Math.floor(e)),
          goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32);
        127 < e;

      )
        this.buffer_.push((127 & e) | 128), (e >>>= 7)
      this.buffer_.push(e)
    }),
    (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
      if (
        (goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31,
        ),
        0 <= e)
      )
        this.writeUnsignedVarint32(e)
      else {
        for (var t = 0; 9 > t; t++) this.buffer_.push((127 & e) | 128), (e >>= 7)
        this.buffer_.push(1)
      }
    }),
    (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
        jspb.utils.splitInt64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63,
        ),
        jspb.utils.splitInt64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.writeUnsignedVarint32(((e << 1) ^ (e >> 31)) >>> 0)
    }),
    (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63,
        ),
        jspb.utils.splitZigzag64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (e) {
      this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e))
    }),
    (jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (e) {
      var t = this
      jspb.utils.splitHash64(e),
        jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function (e, o) {
          t.writeSplitVarint64(e >>> 0, o >>> 0)
        })
    }),
    (jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(0 <= e && 256 > e),
        this.buffer_.push((e >>> 0) & 255)
    }),
    (jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(0 <= e && 65536 > e),
        this.buffer_.push((e >>> 0) & 255),
        this.buffer_.push((e >>> 8) & 255)
    }),
    (jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
        this.buffer_.push((e >>> 0) & 255),
        this.buffer_.push((e >>> 8) & 255),
        this.buffer_.push((e >>> 16) & 255),
        this.buffer_.push((e >>> 24) & 255)
    }),
    (jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
        jspb.utils.splitUint64(e),
        this.writeUint32(jspb.utils.split64Low),
        this.writeUint32(jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(-128 <= e && 128 > e),
        this.buffer_.push((e >>> 0) & 255)
    }),
    (jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(-32768 <= e && 32768 > e),
        this.buffer_.push((e >>> 0) & 255),
        this.buffer_.push((e >>> 8) & 255)
    }),
    (jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.buffer_.push((e >>> 0) & 255),
        this.buffer_.push((e >>> 8) & 255),
        this.buffer_.push((e >>> 16) & 255),
        this.buffer_.push((e >>> 24) & 255)
    }),
    (jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63,
        ),
        jspb.utils.splitInt64(e),
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          +e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63,
        ),
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeFloat = function (e) {
      goog.asserts.assert(
        1 / 0 === e ||
          -1 / 0 === e ||
          isNaN(e) ||
          (e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX),
      ),
        jspb.utils.splitFloat32(e),
        this.writeUint32(jspb.utils.split64Low)
    }),
    (jspb.BinaryEncoder.prototype.writeDouble = function (e) {
      goog.asserts.assert(
        1 / 0 === e ||
          -1 / 0 === e ||
          isNaN(e) ||
          (e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX),
      ),
        jspb.utils.splitFloat64(e),
        this.writeUint32(jspb.utils.split64Low),
        this.writeUint32(jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeBool = function (e) {
      goog.asserts.assert('boolean' == typeof e || 'number' == typeof e),
        this.buffer_.push(e ? 1 : 0)
    }),
    (jspb.BinaryEncoder.prototype.writeEnum = function (e) {
      goog.asserts.assert(e == Math.floor(e)),
        goog.asserts.assert(
          e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.writeSignedVarint32(e)
    }),
    (jspb.BinaryEncoder.prototype.writeBytes = function (e) {
      this.buffer_.push.apply(this.buffer_, e)
    }),
    (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
      jspb.utils.splitHash64(e),
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
      jspb.utils.splitHash64(e),
        this.writeUint32(jspb.utils.split64Low),
        this.writeUint32(jspb.utils.split64High)
    }),
    (jspb.BinaryEncoder.prototype.writeString = function (e) {
      for (var t = this.buffer_.length, o = 0; o < e.length; o++) {
        var r = e.charCodeAt(o)
        if (128 > r) this.buffer_.push(r)
        else if (2048 > r) this.buffer_.push((r >> 6) | 192), this.buffer_.push((63 & r) | 128)
        else if (65536 > r)
          if (55296 <= r && 56319 >= r && o + 1 < e.length) {
            var n = e.charCodeAt(o + 1)
            56320 <= n &&
              57343 >= n &&
              ((r = 1024 * (r - 55296) + n - 56320 + 65536),
              this.buffer_.push((r >> 18) | 240),
              this.buffer_.push(((r >> 12) & 63) | 128),
              this.buffer_.push(((r >> 6) & 63) | 128),
              this.buffer_.push((63 & r) | 128),
              o++)
          } else
            this.buffer_.push((r >> 12) | 224),
              this.buffer_.push(((r >> 6) & 63) | 128),
              this.buffer_.push((63 & r) | 128)
      }
      return this.buffer_.length - t
    }),
    (jspb.arith = {}),
    (jspb.arith.UInt64 = function (e, t) {
      ;(this.lo = e), (this.hi = t)
    }),
    (jspb.arith.UInt64.prototype.cmp = function (e) {
      return this.hi < e.hi || (this.hi == e.hi && this.lo < e.lo)
        ? -1
        : this.hi == e.hi && this.lo == e.lo
        ? 0
        : 1
    }),
    (jspb.arith.UInt64.prototype.rightShift = function () {
      return new jspb.arith.UInt64(
        ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
        (this.hi >>> 1) >>> 0,
      )
    }),
    (jspb.arith.UInt64.prototype.leftShift = function () {
      return new jspb.arith.UInt64((this.lo << 1) >>> 0, ((this.hi << 1) | (this.lo >>> 31)) >>> 0)
    }),
    (jspb.arith.UInt64.prototype.msb = function () {
      return !!(2147483648 & this.hi)
    }),
    (jspb.arith.UInt64.prototype.lsb = function () {
      return !!(1 & this.lo)
    }),
    (jspb.arith.UInt64.prototype.zero = function () {
      return 0 == this.lo && 0 == this.hi
    }),
    (jspb.arith.UInt64.prototype.add = function (e) {
      return new jspb.arith.UInt64(
        (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
        ((((this.hi + e.hi) & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0)) >>> 0,
      )
    }),
    (jspb.arith.UInt64.prototype.sub = function (e) {
      return new jspb.arith.UInt64(
        (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
        ((((this.hi - e.hi) & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0)) >>> 0,
      )
    }),
    (jspb.arith.UInt64.mul32x32 = function (e, t) {
      var o = 65535 & e,
        r = 65535 & t,
        n = t >>> 16
      for (
        t = o * r + 65536 * ((o * n) & 65535) + 65536 * (((e >>>= 16) * r) & 65535),
          o = e * n + ((o * n) >>> 16) + ((e * r) >>> 16);
        4294967296 <= t;

      )
        (t -= 4294967296), (o += 1)
      return new jspb.arith.UInt64(t >>> 0, o >>> 0)
    }),
    (jspb.arith.UInt64.prototype.mul = function (e) {
      var t = jspb.arith.UInt64.mul32x32(this.lo, e)
      return ((e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo), (e.lo = 0), t.add(e)
    }),
    (jspb.arith.UInt64.prototype.div = function (e) {
      if (0 == e) return []
      var t = new jspb.arith.UInt64(0, 0),
        o = new jspb.arith.UInt64(this.lo, this.hi)
      e = new jspb.arith.UInt64(e, 0)
      for (var r = new jspb.arith.UInt64(1, 0); !e.msb(); ) (e = e.leftShift()), (r = r.leftShift())
      for (; !r.zero(); )
        0 >= e.cmp(o) && ((t = t.add(r)), (o = o.sub(e))),
          (e = e.rightShift()),
          (r = r.rightShift())
      return [t, o]
    }),
    (jspb.arith.UInt64.prototype.toString = function () {
      for (var e = '', t = this; !t.zero(); ) {
        var o = (t = t.div(10))[0]
        ;(e = t[1].lo + e), (t = o)
      }
      return '' == e && (e = '0'), e
    }),
    (jspb.arith.UInt64.fromString = function (e) {
      for (
        var t = new jspb.arith.UInt64(0, 0), o = new jspb.arith.UInt64(0, 0), r = 0;
        r < e.length;
        r++
      ) {
        if ('0' > e[r] || '9' < e[r]) return null
        var n = parseInt(e[r], 10)
        ;(o.lo = n), (t = t.mul(10).add(o))
      }
      return t
    }),
    (jspb.arith.UInt64.prototype.clone = function () {
      return new jspb.arith.UInt64(this.lo, this.hi)
    }),
    (jspb.arith.Int64 = function (e, t) {
      ;(this.lo = e), (this.hi = t)
    }),
    (jspb.arith.Int64.prototype.add = function (e) {
      return new jspb.arith.Int64(
        (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
        ((((this.hi + e.hi) & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0)) >>> 0,
      )
    }),
    (jspb.arith.Int64.prototype.sub = function (e) {
      return new jspb.arith.Int64(
        (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
        ((((this.hi - e.hi) & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0)) >>> 0,
      )
    }),
    (jspb.arith.Int64.prototype.clone = function () {
      return new jspb.arith.Int64(this.lo, this.hi)
    }),
    (jspb.arith.Int64.prototype.toString = function () {
      var e = 0 != (2147483648 & this.hi),
        t = new jspb.arith.UInt64(this.lo, this.hi)
      return e && (t = new jspb.arith.UInt64(0, 0).sub(t)), (e ? '-' : '') + t.toString()
    }),
    (jspb.arith.Int64.fromString = function (e) {
      var t = 0 < e.length && '-' == e[0]
      return (
        t && (e = e.substring(1)),
        null === (e = jspb.arith.UInt64.fromString(e))
          ? null
          : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)), new jspb.arith.Int64(e.lo, e.hi))
      )
    }),
    (jspb.BinaryWriter = function () {
      ;(this.blocks_ = []),
        (this.totalLength_ = 0),
        (this.encoder_ = new jspb.BinaryEncoder()),
        (this.bookmarks_ = [])
    }),
    (jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
      var t = this.encoder_.end()
      this.blocks_.push(t), this.blocks_.push(e), (this.totalLength_ += t.length + e.length)
    }),
    (jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
      return (
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
        (e = this.encoder_.end()),
        this.blocks_.push(e),
        (this.totalLength_ += e.length),
        e.push(this.totalLength_),
        e
      )
    }),
    (jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
      var t = e.pop()
      for (
        t = this.totalLength_ + this.encoder_.length() - t, goog.asserts.assert(0 <= t);
        127 < t;

      )
        e.push((127 & t) | 128), (t >>>= 7), this.totalLength_++
      e.push(t), this.totalLength_++
    }),
    (jspb.BinaryWriter.prototype.writeSerializedMessage = function (e, t, o) {
      this.appendUint8Array_(e.subarray(t, o))
    }),
    (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (e, t, o) {
      null != e && null != t && null != o && this.writeSerializedMessage(e, t, o)
    }),
    (jspb.BinaryWriter.prototype.reset = function () {
      ;(this.blocks_ = []), this.encoder_.end(), (this.totalLength_ = 0), (this.bookmarks_ = [])
    }),
    (jspb.BinaryWriter.prototype.getResultBuffer = function () {
      goog.asserts.assert(0 == this.bookmarks_.length)
      for (
        var e = new Uint8Array(this.totalLength_ + this.encoder_.length()),
          t = this.blocks_,
          o = t.length,
          r = 0,
          n = 0;
        n < o;
        n++
      ) {
        var s = t[n]
        e.set(s, r), (r += s.length)
      }
      return (
        (t = this.encoder_.end()),
        e.set(t, r),
        (r += t.length),
        goog.asserts.assert(r == e.length),
        (this.blocks_ = [e]),
        e
      )
    }),
    (jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
      return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e)
    }),
    (jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
      this.bookmarks_.push(this.beginDelimited_(e))
    }),
    (jspb.BinaryWriter.prototype.endSubMessage = function () {
      goog.asserts.assert(0 <= this.bookmarks_.length), this.endDelimited_(this.bookmarks_.pop())
    }),
    (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, t) {
      goog.asserts.assert(1 <= e && e == Math.floor(e)),
        this.encoder_.writeUnsignedVarint32(8 * e + t)
    }),
    (jspb.BinaryWriter.prototype.writeAny = function (e, t, o) {
      var r = jspb.BinaryConstants.FieldType
      switch (e) {
        case r.DOUBLE:
          this.writeDouble(t, o)
          break
        case r.FLOAT:
          this.writeFloat(t, o)
          break
        case r.INT64:
          this.writeInt64(t, o)
          break
        case r.UINT64:
          this.writeUint64(t, o)
          break
        case r.INT32:
          this.writeInt32(t, o)
          break
        case r.FIXED64:
          this.writeFixed64(t, o)
          break
        case r.FIXED32:
          this.writeFixed32(t, o)
          break
        case r.BOOL:
          this.writeBool(t, o)
          break
        case r.STRING:
          this.writeString(t, o)
          break
        case r.GROUP:
          goog.asserts.fail('Group field type not supported in writeAny()')
          break
        case r.MESSAGE:
          goog.asserts.fail('Message field type not supported in writeAny()')
          break
        case r.BYTES:
          this.writeBytes(t, o)
          break
        case r.UINT32:
          this.writeUint32(t, o)
          break
        case r.ENUM:
          this.writeEnum(t, o)
          break
        case r.SFIXED32:
          this.writeSfixed32(t, o)
          break
        case r.SFIXED64:
          this.writeSfixed64(t, o)
          break
        case r.SINT32:
          this.writeSint32(t, o)
          break
        case r.SINT64:
          this.writeSint64(t, o)
          break
        case r.FHASH64:
          this.writeFixedHash64(t, o)
          break
        case r.VHASH64:
          this.writeVarintHash64(t, o)
          break
        default:
          goog.asserts.fail('Invalid field type in writeAny()')
      }
    }),
    (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeUnsignedVarint32(t))
    }),
    (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint32(t))
    }),
    (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeUnsignedVarint64(t))
    }),
    (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint64(t))
    }),
    (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarint32(t))
    }),
    (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarint64(t))
    }),
    (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarint64String(t))
    }),
    (jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeZigzagVarintHash64(t))
    }),
    (jspb.BinaryWriter.prototype.writeInt32 = function (e, t) {
      null != t &&
        (goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.writeSignedVarint32_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeInt32String = function (e, t) {
      null != t &&
        ((t = parseInt(t, 10)),
        goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.writeSignedVarint32_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeInt64 = function (e, t) {
      null != t &&
        (goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63,
        ),
        this.writeSignedVarint64_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeInt64String = function (e, t) {
      null != t &&
        ((t = jspb.arith.Int64.fromString(t)),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSplitVarint64(t.lo, t.hi))
    }),
    (jspb.BinaryWriter.prototype.writeUint32 = function (e, t) {
      null != t &&
        (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeUnsignedVarint32_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeUint32String = function (e, t) {
      null != t &&
        ((t = parseInt(t, 10)),
        goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeUnsignedVarint32_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeUint64 = function (e, t) {
      null != t &&
        (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
        this.writeUnsignedVarint64_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeUint64String = function (e, t) {
      null != t &&
        ((t = jspb.arith.UInt64.fromString(t)),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSplitVarint64(t.lo, t.hi))
    }),
    (jspb.BinaryWriter.prototype.writeSint32 = function (e, t) {
      null != t &&
        (goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.writeZigzagVarint32_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeSint64 = function (e, t) {
      null != t &&
        (goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63,
        ),
        this.writeZigzagVarint64_(e, t))
    }),
    (jspb.BinaryWriter.prototype.writeSintHash64 = function (e, t) {
      null != t && this.writeZigzagVarintHash64_(e, t)
    }),
    (jspb.BinaryWriter.prototype.writeSint64String = function (e, t) {
      null != t && this.writeZigzagVarint64String_(e, t)
    }),
    (jspb.BinaryWriter.prototype.writeFixed32 = function (e, t) {
      null != t &&
        (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
        this.encoder_.writeUint32(t))
    }),
    (jspb.BinaryWriter.prototype.writeFixed64 = function (e, t) {
      null != t &&
        (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeUint64(t))
    }),
    (jspb.BinaryWriter.prototype.writeFixed64String = function (e, t) {
      null != t &&
        ((t = jspb.arith.UInt64.fromString(t)),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeSplitFixed64(t.lo, t.hi))
    }),
    (jspb.BinaryWriter.prototype.writeSfixed32 = function (e, t) {
      null != t &&
        (goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
        this.encoder_.writeInt32(t))
    }),
    (jspb.BinaryWriter.prototype.writeSfixed64 = function (e, t) {
      null != t &&
        (goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63,
        ),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeInt64(t))
    }),
    (jspb.BinaryWriter.prototype.writeSfixed64String = function (e, t) {
      null != t &&
        ((t = jspb.arith.Int64.fromString(t)),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeSplitFixed64(t.lo, t.hi))
    }),
    (jspb.BinaryWriter.prototype.writeFloat = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
        this.encoder_.writeFloat(t))
    }),
    (jspb.BinaryWriter.prototype.writeDouble = function (e, t) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeDouble(t))
    }),
    (jspb.BinaryWriter.prototype.writeBool = function (e, t) {
      null != t &&
        (goog.asserts.assert('boolean' == typeof t || 'number' == typeof t),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeBool(t))
    }),
    (jspb.BinaryWriter.prototype.writeEnum = function (e, t) {
      null != t &&
        (goog.asserts.assert(
          t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31,
        ),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint32(t))
    }),
    (jspb.BinaryWriter.prototype.writeString = function (e, t) {
      null != t &&
        ((e = this.beginDelimited_(e)), this.encoder_.writeString(t), this.endDelimited_(e))
    }),
    (jspb.BinaryWriter.prototype.writeBytes = function (e, t) {
      null != t &&
        ((t = jspb.utils.byteSourceToUint8Array(t)),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
        this.encoder_.writeUnsignedVarint32(t.length),
        this.appendUint8Array_(t))
    }),
    (jspb.BinaryWriter.prototype.writeMessage = function (e, t, o) {
      null != t && ((e = this.beginDelimited_(e)), o(t, this), this.endDelimited_(e))
    }),
    (jspb.BinaryWriter.prototype.writeMessageSet = function (e, t, o) {
      null != t &&
        (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP),
        this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSignedVarint32(e),
        (e = this.beginDelimited_(3)),
        o(t, this),
        this.endDelimited_(e),
        this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP))
    }),
    (jspb.BinaryWriter.prototype.writeGroup = function (e, t, o) {
      null != t &&
        (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP),
        o(t, this),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP))
    }),
    (jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, t) {
      null != t &&
        (goog.asserts.assert(8 == t.length),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeFixedHash64(t))
    }),
    (jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, t) {
      null != t &&
        (goog.asserts.assert(8 == t.length),
        this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeVarintHash64(t))
    }),
    (jspb.BinaryWriter.prototype.writeSplitFixed64 = function (e, t, o) {
      this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
        this.encoder_.writeSplitFixed64(t, o)
    }),
    (jspb.BinaryWriter.prototype.writeSplitVarint64 = function (e, t, o) {
      this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
        this.encoder_.writeSplitVarint64(t, o)
    }),
    (jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (e, t, o) {
      this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT)
      var r = this.encoder_
      jspb.utils.toZigzag64(t, o, function (e, t) {
        r.writeSplitVarint64(e >>> 0, t >>> 0)
      })
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeSignedVarint32_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeInt32String(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeSignedVarint64_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (e, t, o, r) {
      if (null != t) for (var n = 0; n < t.length; n++) this.writeSplitFixed64(e, o(t[n]), r(t[n]))
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (e, t, o, r) {
      if (null != t) for (var n = 0; n < t.length; n++) this.writeSplitVarint64(e, o(t[n]), r(t[n]))
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (e, t, o, r) {
      if (null != t)
        for (var n = 0; n < t.length; n++) this.writeSplitZigzagVarint64(e, o(t[n]), r(t[n]))
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeInt64String(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeUnsignedVarint32_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeUint32String(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeUnsignedVarint64_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeUint64String(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeZigzagVarint32_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeZigzagVarint64_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeZigzagVarint64String_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeZigzagVarintHash64_(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeFixed32(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeFixed64(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeFixed64String(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeSfixed32(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeSfixed64(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeSfixed64String(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeFloat(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeDouble(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeBool(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeEnum(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedString = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeString(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeBytes(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedMessage = function (e, t, o) {
      if (null != t)
        for (var r = 0; r < t.length; r++) {
          var n = this.beginDelimited_(e)
          o(t[r], this), this.endDelimited_(n)
        }
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedGroup = function (e, t, o) {
      if (null != t)
        for (var r = 0; r < t.length; r++)
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP),
            o(t[r], this),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP)
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeFixedHash64(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (e, t) {
      if (null != t) for (var o = 0; o < t.length; o++) this.writeVarintHash64(e, t[o])
    }),
    (jspb.BinaryWriter.prototype.writePackedInt32 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedInt32String = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(parseInt(t[o], 10))
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedInt64 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeSignedVarint64(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (e, t, o, r) {
      if (null != t) {
        e = this.beginDelimited_(e)
        for (var n = 0; n < t.length; n++) this.encoder_.writeSplitFixed64(o(t[n]), r(t[n]))
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (e, t, o, r) {
      if (null != t) {
        e = this.beginDelimited_(e)
        for (var n = 0; n < t.length; n++) this.encoder_.writeSplitVarint64(o(t[n]), r(t[n]))
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (e, t, o, r) {
      if (null != t) {
        e = this.beginDelimited_(e)
        for (var n = this.encoder_, s = 0; s < t.length; s++)
          jspb.utils.toZigzag64(o(t[s]), r(t[s]), function (e, t) {
            n.writeSplitVarint64(e >>> 0, t >>> 0)
          })
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedInt64String = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) {
          var r = jspb.arith.Int64.fromString(t[o])
          this.encoder_.writeSplitVarint64(r.lo, r.hi)
        }
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedUint32 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedUint32String = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10))
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedUint64 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint64(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedUint64String = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) {
          var r = jspb.arith.UInt64.fromString(t[o])
          this.encoder_.writeSplitVarint64(r.lo, r.hi)
        }
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedSint32 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint32(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedSint64 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint64(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedSint64String = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++)
          this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t[o]))
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedSintHash64 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeZigzagVarintHash64(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(4 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeUint32(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeUint64(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedFixed64String = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0;
          e < t.length;
          e++
        ) {
          var o = jspb.arith.UInt64.fromString(t[e])
          this.encoder_.writeSplitFixed64(o.lo, o.hi)
        }
    }),
    (jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(4 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeInt32(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeInt64(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedSfixed64String = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeInt64String(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedFloat = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(4 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeFloat(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedDouble = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeDouble(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedBool = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeBool(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedEnum = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeEnum(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (e, t) {
      if (null != t && t.length)
        for (
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(8 * t.length),
            e = 0;
          e < t.length;
          e++
        )
          this.encoder_.writeFixedHash64(t[e])
    }),
    (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (e, t) {
      if (null != t && t.length) {
        e = this.beginDelimited_(e)
        for (var o = 0; o < t.length; o++) this.encoder_.writeVarintHash64(t[o])
        this.endDelimited_(e)
      }
    }),
    (jspb.Map = function (e, t) {
      ;(this.arr_ = e),
        (this.valueCtor_ = t),
        (this.map_ = {}),
        (this.arrClean = !0),
        0 < this.arr_.length && this.loadFromArray_()
    }),
    (jspb.Map.prototype.loadFromArray_ = function () {
      for (var e = 0; e < this.arr_.length; e++) {
        var t = this.arr_[e],
          o = t[0]
        this.map_[o.toString()] = new jspb.Map.Entry_(o, t[1])
      }
      this.arrClean = !0
    }),
    (jspb.Map.prototype.toArray = function () {
      if (this.arrClean) {
        if (this.valueCtor_) {
          var e,
            t = this.map_
          for (e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) {
              var o = t[e].valueWrapper
              o && o.toArray()
            }
        }
      } else {
        for (this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0; e < t.length; e++) {
          var r = this.map_[t[e]]
          ;(o = r.valueWrapper) && o.toArray(), this.arr_.push([r.key, r.value])
        }
        this.arrClean = !0
      }
      return this.arr_
    }),
    (jspb.Map.prototype.toObject = function (e, t) {
      for (var o = this.toArray(), r = [], n = 0; n < o.length; n++) {
        var s = this.map_[o[n][0].toString()]
        this.wrapEntry_(s)
        var i = s.valueWrapper
        i ? (goog.asserts.assert(t), r.push([s.key, t(e, i)])) : r.push([s.key, s.value])
      }
      return r
    }),
    (jspb.Map.fromObject = function (e, t, o) {
      t = new jspb.Map([], t)
      for (var r = 0; r < e.length; r++) {
        var n = e[r][0],
          s = o(e[r][1])
        t.set(n, s)
      }
      return t
    }),
    (jspb.Map.ArrayIteratorIterable_ = function (e) {
      ;(this.idx_ = 0), (this.arr_ = e)
    }),
    (jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
      return this.idx_ < this.arr_.length
        ? { done: !1, value: this.arr_[this.idx_++] }
        : { done: !0, value: void 0 }
    }),
    'undefined' != typeof Symbol &&
      (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function () {
        return this
      }),
    (jspb.Map.prototype.getLength = function () {
      return this.stringKeys_().length
    }),
    (jspb.Map.prototype.clear = function () {
      ;(this.map_ = {}), (this.arrClean = !1)
    }),
    (jspb.Map.prototype.del = function (e) {
      e = e.toString()
      var t = this.map_.hasOwnProperty(e)
      return delete this.map_[e], (this.arrClean = !1), t
    }),
    (jspb.Map.prototype.getEntryList = function () {
      var e = [],
        t = this.stringKeys_()
      t.sort()
      for (var o = 0; o < t.length; o++) {
        var r = this.map_[t[o]]
        e.push([r.key, r.value])
      }
      return e
    }),
    (jspb.Map.prototype.entries = function () {
      var e = [],
        t = this.stringKeys_()
      t.sort()
      for (var o = 0; o < t.length; o++) {
        var r = this.map_[t[o]]
        e.push([r.key, this.wrapEntry_(r)])
      }
      return new jspb.Map.ArrayIteratorIterable_(e)
    }),
    (jspb.Map.prototype.keys = function () {
      var e = [],
        t = this.stringKeys_()
      t.sort()
      for (var o = 0; o < t.length; o++) e.push(this.map_[t[o]].key)
      return new jspb.Map.ArrayIteratorIterable_(e)
    }),
    (jspb.Map.prototype.values = function () {
      var e = [],
        t = this.stringKeys_()
      t.sort()
      for (var o = 0; o < t.length; o++) e.push(this.wrapEntry_(this.map_[t[o]]))
      return new jspb.Map.ArrayIteratorIterable_(e)
    }),
    (jspb.Map.prototype.forEach = function (e, t) {
      var o = this.stringKeys_()
      o.sort()
      for (var r = 0; r < o.length; r++) {
        var n = this.map_[o[r]]
        e.call(t, this.wrapEntry_(n), n.key, this)
      }
    }),
    (jspb.Map.prototype.set = function (e, t) {
      var o = new jspb.Map.Entry_(e)
      return (
        this.valueCtor_ ? ((o.valueWrapper = t), (o.value = t.toArray())) : (o.value = t),
        (this.map_[e.toString()] = o),
        (this.arrClean = !1),
        this
      )
    }),
    (jspb.Map.prototype.wrapEntry_ = function (e) {
      return this.valueCtor_
        ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)), e.valueWrapper)
        : e.value
    }),
    (jspb.Map.prototype.get = function (e) {
      if ((e = this.map_[e.toString()])) return this.wrapEntry_(e)
    }),
    (jspb.Map.prototype.has = function (e) {
      return e.toString() in this.map_
    }),
    (jspb.Map.prototype.serializeBinary = function (e, t, o, r, n) {
      var s = this.stringKeys_()
      s.sort()
      for (var i = 0; i < s.length; i++) {
        var g = this.map_[s[i]]
        t.beginSubMessage(e),
          o.call(t, 1, g.key),
          this.valueCtor_ ? r.call(t, 2, this.wrapEntry_(g), n) : r.call(t, 2, g.value),
          t.endSubMessage()
      }
    }),
    (jspb.Map.deserializeBinary = function (e, t, o, r, n, s, i) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        var g = t.getFieldNumber()
        1 == g
          ? (s = o.call(t))
          : 2 == g &&
            (e.valueCtor_
              ? (goog.asserts.assert(n), i || (i = new e.valueCtor_()), r.call(t, i, n))
              : (i = r.call(t)))
      }
      goog.asserts.assert(null != s), goog.asserts.assert(null != i), e.set(s, i)
    }),
    (jspb.Map.prototype.stringKeys_ = function () {
      var e,
        t = this.map_,
        o = []
      for (e in t) Object.prototype.hasOwnProperty.call(t, e) && o.push(e)
      return o
    }),
    (jspb.Map.Entry_ = function (e, t) {
      ;(this.key = e), (this.value = t), (this.valueWrapper = void 0)
    }),
    (jspb.ExtensionFieldInfo = function (e, t, o, r, n) {
      ;(this.fieldIndex = e),
        (this.fieldName = t),
        (this.ctor = o),
        (this.toObjectFn = r),
        (this.isRepeated = n)
    }),
    (jspb.ExtensionFieldBinaryInfo = function (e, t, o, r, n, s) {
      ;(this.fieldInfo = e),
        (this.binaryReaderFn = t),
        (this.binaryWriterFn = o),
        (this.binaryMessageSerializeFn = r),
        (this.binaryMessageDeserializeFn = n),
        (this.isPacked = s)
    }),
    (jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
      return !!this.ctor
    }),
    (jspb.Message = function () {}),
    (jspb.Message.GENERATE_TO_OBJECT = !0),
    (jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE),
    (jspb.Message.GENERATE_TO_STRING = !0),
    (jspb.Message.ASSUME_LOCAL_ARRAYS = !1),
    (jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0),
    (jspb.Message.SUPPORTS_UINT8ARRAY_ = 'function' == typeof Uint8Array),
    (jspb.Message.prototype.getJsPbMessageId = function () {
      return this.messageId_
    }),
    (jspb.Message.getIndex_ = function (e, t) {
      return t + e.arrayIndexOffset_
    }),
    (jspb.Message.hiddenES6Property_ = function () {}),
    (jspb.Message.getFieldNumber_ = function (e, t) {
      return t - e.arrayIndexOffset_
    }),
    (jspb.Message.initialize = function (e, t, o, r, n, s) {
      if (
        ((e.wrappers_ = null),
        t || (t = o ? [o] : []),
        (e.messageId_ = o ? String(o) : void 0),
        (e.arrayIndexOffset_ = 0 === o ? -1 : 0),
        (e.array = t),
        jspb.Message.initPivotAndExtensionObject_(e, r),
        (e.convertedPrimitiveFields_ = {}),
        jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = n),
        n)
      )
        for (t = 0; t < n.length; t++)
          (o = n[t]) < e.pivot_
            ? ((o = jspb.Message.getIndex_(e, o)),
              (e.array[o] = e.array[o] || jspb.Message.EMPTY_LIST_SENTINEL_))
            : (jspb.Message.maybeInitEmptyExtensionObject_(e),
              (e.extensionObject_[o] = e.extensionObject_[o] || jspb.Message.EMPTY_LIST_SENTINEL_))
      if (s && s.length) for (t = 0; t < s.length; t++) jspb.Message.computeOneofCase(e, s[t])
    }),
    (jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
    (jspb.Message.isArray_ = function (e) {
      return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : Array.isArray(e)
    }),
    (jspb.Message.isExtensionObject_ = function (e) {
      return !(
        null === e ||
        'object' != typeof e ||
        jspb.Message.isArray_(e) ||
        (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
      )
    }),
    (jspb.Message.initPivotAndExtensionObject_ = function (e, t) {
      var o = e.array.length,
        r = -1
      if (o && ((r = o - 1), (o = e.array[r]), jspb.Message.isExtensionObject_(o)))
        return (e.pivot_ = jspb.Message.getFieldNumber_(e, r)), void (e.extensionObject_ = o)
      ;-1 < t
        ? ((e.pivot_ = Math.max(t, jspb.Message.getFieldNumber_(e, r + 1))),
          (e.extensionObject_ = null))
        : (e.pivot_ = Number.MAX_VALUE)
    }),
    (jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
      var t = jspb.Message.getIndex_(e, e.pivot_)
      e.array[t] || (e.extensionObject_ = e.array[t] = {})
    }),
    (jspb.Message.toObjectList = function (e, t, o) {
      for (var r = [], n = 0; n < e.length; n++) r[n] = t.call(e[n], o, e[n])
      return r
    }),
    (jspb.Message.toObjectExtension = function (e, t, o, r, n) {
      for (var s in o) {
        var i = o[s],
          g = r.call(e, i)
        if (null != g) {
          for (var a in i.fieldName) if (i.fieldName.hasOwnProperty(a)) break
          t[a] = i.toObjectFn
            ? i.isRepeated
              ? jspb.Message.toObjectList(g, i.toObjectFn, n)
              : i.toObjectFn(n, g)
            : g
        }
      }
    }),
    (jspb.Message.serializeBinaryExtensions = function (e, t, o, r) {
      for (var n in o) {
        var s = o[n],
          i = s.fieldInfo
        if (!s.binaryWriterFn)
          throw Error(
            'Message extension present that was generated without binary serialization support',
          )
        var g = r.call(e, i)
        if (null != g)
          if (i.isMessageType()) {
            if (!s.binaryMessageSerializeFn)
              throw Error(
                'Message extension present holding submessage without binary support enabled, and message is being serialized to binary format',
              )
            s.binaryWriterFn.call(t, i.fieldIndex, g, s.binaryMessageSerializeFn)
          } else s.binaryWriterFn.call(t, i.fieldIndex, g)
      }
    }),
    (jspb.Message.readBinaryExtension = function (e, t, o, r, n) {
      var s = o[t.getFieldNumber()]
      if (s) {
        if (((o = s.fieldInfo), !s.binaryReaderFn))
          throw Error('Deserializing extension whose generated code does not support binary format')
        if (o.isMessageType()) {
          var i = new o.ctor()
          s.binaryReaderFn.call(t, i, s.binaryMessageDeserializeFn)
        } else i = s.binaryReaderFn.call(t)
        o.isRepeated && !s.isPacked
          ? (t = r.call(e, o))
            ? t.push(i)
            : n.call(e, o, [i])
          : n.call(e, o, i)
      } else t.skipField()
    }),
    (jspb.Message.getField = function (e, t) {
      if (t < e.pivot_) {
        t = jspb.Message.getIndex_(e, t)
        var o = e.array[t]
        return o === jspb.Message.EMPTY_LIST_SENTINEL_ ? (e.array[t] = []) : o
      }
      if (e.extensionObject_)
        return (o = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_
          ? (e.extensionObject_[t] = [])
          : o
    }),
    (jspb.Message.getRepeatedField = function (e, t) {
      return jspb.Message.getField(e, t)
    }),
    (jspb.Message.getOptionalFloatingPointField = function (e, t) {
      return null == (e = jspb.Message.getField(e, t)) ? e : +e
    }),
    (jspb.Message.getBooleanField = function (e, t) {
      return null == (e = jspb.Message.getField(e, t)) ? e : !!e
    }),
    (jspb.Message.getRepeatedFloatingPointField = function (e, t) {
      var o = jspb.Message.getRepeatedField(e, t)
      if (
        (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
        !e.convertedPrimitiveFields_[t])
      ) {
        for (var r = 0; r < o.length; r++) o[r] = +o[r]
        e.convertedPrimitiveFields_[t] = !0
      }
      return o
    }),
    (jspb.Message.getRepeatedBooleanField = function (e, t) {
      var o = jspb.Message.getRepeatedField(e, t)
      if (
        (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
        !e.convertedPrimitiveFields_[t])
      ) {
        for (var r = 0; r < o.length; r++) o[r] = !!o[r]
        e.convertedPrimitiveFields_[t] = !0
      }
      return o
    }),
    (jspb.Message.bytesAsB64 = function (e) {
      return null == e || 'string' == typeof e
        ? e
        : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array
        ? goog.crypt.base64.encodeByteArray(e)
        : (goog.asserts.fail('Cannot coerce to b64 string: ' + goog.typeOf(e)), null)
    }),
    (jspb.Message.bytesAsU8 = function (e) {
      return null == e || e instanceof Uint8Array
        ? e
        : 'string' == typeof e
        ? goog.crypt.base64.decodeStringToUint8Array(e)
        : (goog.asserts.fail('Cannot coerce to Uint8Array: ' + goog.typeOf(e)), null)
    }),
    (jspb.Message.bytesListAsB64 = function (e) {
      return (
        jspb.Message.assertConsistentTypes_(e),
        e.length && 'string' != typeof e[0] ? goog.array.map(e, jspb.Message.bytesAsB64) : e
      )
    }),
    (jspb.Message.bytesListAsU8 = function (e) {
      return (
        jspb.Message.assertConsistentTypes_(e),
        !e.length || e[0] instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8)
      )
    }),
    (jspb.Message.assertConsistentTypes_ = function (e) {
      if (goog.DEBUG && e && 1 < e.length) {
        var t = goog.typeOf(e[0])
        goog.array.forEach(e, function (e) {
          goog.typeOf(e) != t &&
            goog.asserts.fail(
              'Inconsistent type in JSPB repeated field array. Got ' +
                goog.typeOf(e) +
                ' expected ' +
                t,
            )
        })
      }
    }),
    (jspb.Message.getFieldWithDefault = function (e, t, o) {
      return null == (e = jspb.Message.getField(e, t)) ? o : e
    }),
    (jspb.Message.getBooleanFieldWithDefault = function (e, t, o) {
      return null == (e = jspb.Message.getBooleanField(e, t)) ? o : e
    }),
    (jspb.Message.getFloatingPointFieldWithDefault = function (e, t, o) {
      return null == (e = jspb.Message.getOptionalFloatingPointField(e, t)) ? o : e
    }),
    (jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault),
    (jspb.Message.getMapField = function (e, t, o, r) {
      if ((e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_)) return e.wrappers_[t]
      var n = jspb.Message.getField(e, t)
      if (!n) {
        if (o) return
        ;(n = []), jspb.Message.setField(e, t, n)
      }
      return (e.wrappers_[t] = new jspb.Map(n, r))
    }),
    (jspb.Message.setField = function (e, t, o) {
      return (
        goog.asserts.assertInstanceof(e, jspb.Message),
        t < e.pivot_
          ? (e.array[jspb.Message.getIndex_(e, t)] = o)
          : (jspb.Message.maybeInitEmptyExtensionObject_(e), (e.extensionObject_[t] = o)),
        e
      )
    }),
    (jspb.Message.setProto3IntField = function (e, t, o) {
      return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
    }),
    (jspb.Message.setProto3FloatField = function (e, t, o) {
      return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
    }),
    (jspb.Message.setProto3BooleanField = function (e, t, o) {
      return jspb.Message.setFieldIgnoringDefault_(e, t, o, !1)
    }),
    (jspb.Message.setProto3StringField = function (e, t, o) {
      return jspb.Message.setFieldIgnoringDefault_(e, t, o, '')
    }),
    (jspb.Message.setProto3BytesField = function (e, t, o) {
      return jspb.Message.setFieldIgnoringDefault_(e, t, o, '')
    }),
    (jspb.Message.setProto3EnumField = function (e, t, o) {
      return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
    }),
    (jspb.Message.setProto3StringIntField = function (e, t, o) {
      return jspb.Message.setFieldIgnoringDefault_(e, t, o, '0')
    }),
    (jspb.Message.setFieldIgnoringDefault_ = function (e, t, o, r) {
      return (
        goog.asserts.assertInstanceof(e, jspb.Message),
        o !== r
          ? jspb.Message.setField(e, t, o)
          : t < e.pivot_
          ? (e.array[jspb.Message.getIndex_(e, t)] = null)
          : (jspb.Message.maybeInitEmptyExtensionObject_(e), delete e.extensionObject_[t]),
        e
      )
    }),
    (jspb.Message.addToRepeatedField = function (e, t, o, r) {
      return (
        goog.asserts.assertInstanceof(e, jspb.Message),
        (t = jspb.Message.getRepeatedField(e, t)),
        null != r ? t.splice(r, 0, o) : t.push(o),
        e
      )
    }),
    (jspb.Message.setOneofField = function (e, t, o, r) {
      return (
        goog.asserts.assertInstanceof(e, jspb.Message),
        (o = jspb.Message.computeOneofCase(e, o)) &&
          o !== t &&
          void 0 !== r &&
          (e.wrappers_ && o in e.wrappers_ && (e.wrappers_[o] = void 0),
          jspb.Message.setField(e, o, void 0)),
        jspb.Message.setField(e, t, r)
      )
    }),
    (jspb.Message.computeOneofCase = function (e, t) {
      for (var o, r, n = 0; n < t.length; n++) {
        var s = t[n],
          i = jspb.Message.getField(e, s)
        null != i && ((o = s), (r = i), jspb.Message.setField(e, s, void 0))
      }
      return o ? (jspb.Message.setField(e, o, r), o) : 0
    }),
    (jspb.Message.getWrapperField = function (e, t, o, r) {
      if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o])) {
        var n = jspb.Message.getField(e, o)
        ;(r || n) && (e.wrappers_[o] = new t(n))
      }
      return e.wrappers_[o]
    }),
    (jspb.Message.getRepeatedWrapperField = function (e, t, o) {
      return (
        jspb.Message.wrapRepeatedField_(e, t, o),
        (t = e.wrappers_[o]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (t = e.wrappers_[o] = []),
        t
      )
    }),
    (jspb.Message.wrapRepeatedField_ = function (e, t, o) {
      if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o])) {
        for (var r = jspb.Message.getRepeatedField(e, o), n = [], s = 0; s < r.length; s++)
          n[s] = new t(r[s])
        e.wrappers_[o] = n
      }
    }),
    (jspb.Message.setWrapperField = function (e, t, o) {
      goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {})
      var r = o ? o.toArray() : o
      return (e.wrappers_[t] = o), jspb.Message.setField(e, t, r)
    }),
    (jspb.Message.setOneofWrapperField = function (e, t, o, r) {
      goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {})
      var n = r ? r.toArray() : r
      return (e.wrappers_[t] = r), jspb.Message.setOneofField(e, t, o, n)
    }),
    (jspb.Message.setRepeatedWrapperField = function (e, t, o) {
      goog.asserts.assertInstanceof(e, jspb.Message),
        e.wrappers_ || (e.wrappers_ = {}),
        (o = o || [])
      for (var r = [], n = 0; n < o.length; n++) r[n] = o[n].toArray()
      return (e.wrappers_[t] = o), jspb.Message.setField(e, t, r)
    }),
    (jspb.Message.addToRepeatedWrapperField = function (e, t, o, r, n) {
      jspb.Message.wrapRepeatedField_(e, r, t)
      var s = e.wrappers_[t]
      return (
        s || (s = e.wrappers_[t] = []),
        (o = o || new r()),
        (e = jspb.Message.getRepeatedField(e, t)),
        null != n
          ? (s.splice(n, 0, o), e.splice(n, 0, o.toArray()))
          : (s.push(o), e.push(o.toArray())),
        o
      )
    }),
    (jspb.Message.toMap = function (e, t, o, r) {
      for (var n = {}, s = 0; s < e.length; s++) n[t.call(e[s])] = o ? o.call(e[s], r, e[s]) : e[s]
      return n
    }),
    (jspb.Message.prototype.syncMapFields_ = function () {
      if (this.wrappers_)
        for (var e in this.wrappers_) {
          var t = this.wrappers_[e]
          if (Array.isArray(t)) for (var o = 0; o < t.length; o++) t[o] && t[o].toArray()
          else t && t.toArray()
        }
    }),
    (jspb.Message.prototype.toArray = function () {
      return this.syncMapFields_(), this.array
    }),
    jspb.Message.GENERATE_TO_STRING &&
      (jspb.Message.prototype.toString = function () {
        return this.syncMapFields_(), this.array.toString()
      }),
    (jspb.Message.prototype.getExtension = function (e) {
      if (this.extensionObject_) {
        this.wrappers_ || (this.wrappers_ = {})
        var t = e.fieldIndex
        if (e.isRepeated) {
          if (e.isMessageType())
            return (
              this.wrappers_[t] ||
                (this.wrappers_[t] = goog.array.map(this.extensionObject_[t] || [], function (t) {
                  return new e.ctor(t)
                })),
              this.wrappers_[t]
            )
        } else if (e.isMessageType())
          return (
            !this.wrappers_[t] &&
              this.extensionObject_[t] &&
              (this.wrappers_[t] = new e.ctor(this.extensionObject_[t])),
            this.wrappers_[t]
          )
        return this.extensionObject_[t]
      }
    }),
    (jspb.Message.prototype.setExtension = function (e, t) {
      this.wrappers_ || (this.wrappers_ = {}), jspb.Message.maybeInitEmptyExtensionObject_(this)
      var o = e.fieldIndex
      return (
        e.isRepeated
          ? ((t = t || []),
            e.isMessageType()
              ? ((this.wrappers_[o] = t),
                (this.extensionObject_[o] = goog.array.map(t, function (e) {
                  return e.toArray()
                })))
              : (this.extensionObject_[o] = t))
          : e.isMessageType()
          ? ((this.wrappers_[o] = t), (this.extensionObject_[o] = t ? t.toArray() : t))
          : (this.extensionObject_[o] = t),
        this
      )
    }),
    (jspb.Message.difference = function (e, t) {
      if (!(e instanceof t.constructor)) throw Error('Messages have different types.')
      var o = e.toArray()
      t = t.toArray()
      var r = [],
        n = 0,
        s = o.length > t.length ? o.length : t.length
      for (e.getJsPbMessageId() && ((r[0] = e.getJsPbMessageId()), (n = 1)); n < s; n++)
        jspb.Message.compareFields(o[n], t[n]) || (r[n] = t[n])
      return new e.constructor(r)
    }),
    (jspb.Message.equals = function (e, t) {
      return (
        e == t ||
        (!(!e || !t) &&
          e instanceof t.constructor &&
          jspb.Message.compareFields(e.toArray(), t.toArray()))
      )
    }),
    (jspb.Message.compareExtensions = function (e, t) {
      ;(e = e || {}), (t = t || {})
      var o,
        r = {}
      for (o in e) r[o] = 0
      for (o in t) r[o] = 0
      for (o in r) if (!jspb.Message.compareFields(e[o], t[o])) return !1
      return !0
    }),
    (jspb.Message.compareFields = function (e, t) {
      if (e == t) return !0
      if (!goog.isObject(e) || !goog.isObject(t))
        return (
          !!(('number' == typeof e && isNaN(e)) || ('number' == typeof t && isNaN(t))) &&
          String(e) == String(t)
        )
      if (e.constructor != t.constructor) return !1
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
        if (e.length != t.length) return !1
        for (var o = 0; o < e.length; o++) if (e[o] != t[o]) return !1
        return !0
      }
      if (e.constructor === Array) {
        var r = void 0,
          n = void 0,
          s = Math.max(e.length, t.length)
        for (o = 0; o < s; o++) {
          var i = e[o],
            g = t[o]
          if (
            (i &&
              i.constructor == Object &&
              (goog.asserts.assert(void 0 === r),
              goog.asserts.assert(o === e.length - 1),
              (r = i),
              (i = void 0)),
            g &&
              g.constructor == Object &&
              (goog.asserts.assert(void 0 === n),
              goog.asserts.assert(o === t.length - 1),
              (n = g),
              (g = void 0)),
            !jspb.Message.compareFields(i, g))
          )
            return !1
        }
        return (!r && !n) || ((r = r || {}), (n = n || {}), jspb.Message.compareExtensions(r, n))
      }
      if (e.constructor === Object) return jspb.Message.compareExtensions(e, t)
      throw Error('Invalid type in JSPB array')
    }),
    (jspb.Message.prototype.cloneMessage = function () {
      return jspb.Message.cloneMessage(this)
    }),
    (jspb.Message.prototype.clone = function () {
      return jspb.Message.cloneMessage(this)
    }),
    (jspb.Message.clone = function (e) {
      return jspb.Message.cloneMessage(e)
    }),
    (jspb.Message.cloneMessage = function (e) {
      return new e.constructor(jspb.Message.clone_(e.toArray()))
    }),
    (jspb.Message.copyInto = function (e, t) {
      goog.asserts.assertInstanceof(e, jspb.Message),
        goog.asserts.assertInstanceof(t, jspb.Message),
        goog.asserts.assert(
          e.constructor == t.constructor,
          'Copy source and target message should have the same type.',
        ),
        (e = jspb.Message.clone(e))
      for (var o = t.toArray(), r = e.toArray(), n = (o.length = 0); n < r.length; n++) o[n] = r[n]
      ;(t.wrappers_ = e.wrappers_), (t.extensionObject_ = e.extensionObject_)
    }),
    (jspb.Message.clone_ = function (e) {
      if (Array.isArray(e)) {
        for (var t = Array(e.length), o = 0; o < e.length; o++) {
          var r = e[o]
          null != r &&
            (t[o] = 'object' == typeof r ? jspb.Message.clone_(goog.asserts.assert(r)) : r)
        }
        return t
      }
      if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array) return new Uint8Array(e)
      for (o in ((t = {}), e))
        null != (r = e[o]) &&
          (t[o] = 'object' == typeof r ? jspb.Message.clone_(goog.asserts.assert(r)) : r)
      return t
    }),
    (jspb.Message.registerMessageType = function (e, t) {
      t.messageId = e
    }),
    (jspb.Message.messageSetExtensions = {}),
    (jspb.Message.messageSetExtensionsBinary = {}),
    (jspb.Export = {}),
    (exports.Map = jspb.Map),
    (exports.Message = jspb.Message),
    (exports.BinaryReader = jspb.BinaryReader),
    (exports.BinaryWriter = jspb.BinaryWriter),
    (exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo),
    (exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo),
    (exports.exportSymbol = goog.exportSymbol),
    (exports.inherits = goog.inherits),
    (exports.object = { extend: goog.object.extend }),
    (exports.typeOf = goog.typeOf)
})(googleProtobuf)
var todo_pb = createCommonjsModule(function (e, t) {
  var o = googleProtobuf,
    r = function () {
      return this || window || r || self || Function('return this')()
    }.call(null)
  o.exportSymbol('proto.todo.addTodoParams', null, r),
    o.exportSymbol('proto.todo.deleteResponse', null, r),
    o.exportSymbol('proto.todo.deleteTodoParams', null, r),
    o.exportSymbol('proto.todo.getTodoParams', null, r),
    o.exportSymbol('proto.todo.todoObject', null, r),
    o.exportSymbol('proto.todo.todoResponse', null, r),
    (proto.todo.getTodoParams = function (e) {
      googleProtobuf.Message.initialize(this, e, 0, -1, null, null)
    }),
    o.inherits(proto.todo.getTodoParams, googleProtobuf.Message),
    o.DEBUG && !COMPILED && (proto.todo.getTodoParams.displayName = 'proto.todo.getTodoParams'),
    (proto.todo.addTodoParams = function (e) {
      googleProtobuf.Message.initialize(this, e, 0, -1, null, null)
    }),
    o.inherits(proto.todo.addTodoParams, googleProtobuf.Message),
    o.DEBUG && !COMPILED && (proto.todo.addTodoParams.displayName = 'proto.todo.addTodoParams'),
    (proto.todo.deleteTodoParams = function (e) {
      googleProtobuf.Message.initialize(this, e, 0, -1, null, null)
    }),
    o.inherits(proto.todo.deleteTodoParams, googleProtobuf.Message),
    o.DEBUG &&
      !COMPILED &&
      (proto.todo.deleteTodoParams.displayName = 'proto.todo.deleteTodoParams'),
    (proto.todo.todoObject = function (e) {
      googleProtobuf.Message.initialize(this, e, 0, -1, null, null)
    }),
    o.inherits(proto.todo.todoObject, googleProtobuf.Message),
    o.DEBUG && !COMPILED && (proto.todo.todoObject.displayName = 'proto.todo.todoObject'),
    (proto.todo.todoResponse = function (e) {
      googleProtobuf.Message.initialize(
        this,
        e,
        0,
        -1,
        proto.todo.todoResponse.repeatedFields_,
        null,
      )
    }),
    o.inherits(proto.todo.todoResponse, googleProtobuf.Message),
    o.DEBUG && !COMPILED && (proto.todo.todoResponse.displayName = 'proto.todo.todoResponse'),
    (proto.todo.deleteResponse = function (e) {
      googleProtobuf.Message.initialize(this, e, 0, -1, null, null)
    }),
    o.inherits(proto.todo.deleteResponse, googleProtobuf.Message),
    o.DEBUG && !COMPILED && (proto.todo.deleteResponse.displayName = 'proto.todo.deleteResponse'),
    googleProtobuf.Message.GENERATE_TO_OBJECT &&
      ((proto.todo.getTodoParams.prototype.toObject = function (e) {
        return proto.todo.getTodoParams.toObject(e, this)
      }),
      (proto.todo.getTodoParams.toObject = function (e, t) {
        var o = {}
        return e && (o.$jspbMessageInstance = t), o
      })),
    (proto.todo.getTodoParams.deserializeBinary = function (e) {
      var t = new googleProtobuf.BinaryReader(e),
        o = new proto.todo.getTodoParams()
      return proto.todo.getTodoParams.deserializeBinaryFromReader(o, t)
    }),
    (proto.todo.getTodoParams.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        t.getFieldNumber()
        t.skipField()
      }
      return e
    }),
    (proto.todo.getTodoParams.prototype.serializeBinary = function () {
      var e = new googleProtobuf.BinaryWriter()
      return proto.todo.getTodoParams.serializeBinaryToWriter(this, e), e.getResultBuffer()
    }),
    (proto.todo.getTodoParams.serializeBinaryToWriter = function (e, t) {}),
    googleProtobuf.Message.GENERATE_TO_OBJECT &&
      ((proto.todo.addTodoParams.prototype.toObject = function (e) {
        return proto.todo.addTodoParams.toObject(e, this)
      }),
      (proto.todo.addTodoParams.toObject = function (e, t) {
        var o = { task: googleProtobuf.Message.getFieldWithDefault(t, 1, '') }
        return e && (o.$jspbMessageInstance = t), o
      })),
    (proto.todo.addTodoParams.deserializeBinary = function (e) {
      var t = new googleProtobuf.BinaryReader(e),
        o = new proto.todo.addTodoParams()
      return proto.todo.addTodoParams.deserializeBinaryFromReader(o, t)
    }),
    (proto.todo.addTodoParams.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        if (1 === t.getFieldNumber()) {
          var o = t.readString()
          e.setTask(o)
        } else t.skipField()
      }
      return e
    }),
    (proto.todo.addTodoParams.prototype.serializeBinary = function () {
      var e = new googleProtobuf.BinaryWriter()
      return proto.todo.addTodoParams.serializeBinaryToWriter(this, e), e.getResultBuffer()
    }),
    (proto.todo.addTodoParams.serializeBinaryToWriter = function (e, t) {
      var o
      ;(o = e.getTask()).length > 0 && t.writeString(1, o)
    }),
    (proto.todo.addTodoParams.prototype.getTask = function () {
      return googleProtobuf.Message.getFieldWithDefault(this, 1, '')
    }),
    (proto.todo.addTodoParams.prototype.setTask = function (e) {
      return googleProtobuf.Message.setProto3StringField(this, 1, e)
    }),
    googleProtobuf.Message.GENERATE_TO_OBJECT &&
      ((proto.todo.deleteTodoParams.prototype.toObject = function (e) {
        return proto.todo.deleteTodoParams.toObject(e, this)
      }),
      (proto.todo.deleteTodoParams.toObject = function (e, t) {
        var o = { id: googleProtobuf.Message.getFieldWithDefault(t, 1, '') }
        return e && (o.$jspbMessageInstance = t), o
      })),
    (proto.todo.deleteTodoParams.deserializeBinary = function (e) {
      var t = new googleProtobuf.BinaryReader(e),
        o = new proto.todo.deleteTodoParams()
      return proto.todo.deleteTodoParams.deserializeBinaryFromReader(o, t)
    }),
    (proto.todo.deleteTodoParams.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        if (1 === t.getFieldNumber()) {
          var o = t.readString()
          e.setId(o)
        } else t.skipField()
      }
      return e
    }),
    (proto.todo.deleteTodoParams.prototype.serializeBinary = function () {
      var e = new googleProtobuf.BinaryWriter()
      return proto.todo.deleteTodoParams.serializeBinaryToWriter(this, e), e.getResultBuffer()
    }),
    (proto.todo.deleteTodoParams.serializeBinaryToWriter = function (e, t) {
      var o
      ;(o = e.getId()).length > 0 && t.writeString(1, o)
    }),
    (proto.todo.deleteTodoParams.prototype.getId = function () {
      return googleProtobuf.Message.getFieldWithDefault(this, 1, '')
    }),
    (proto.todo.deleteTodoParams.prototype.setId = function (e) {
      return googleProtobuf.Message.setProto3StringField(this, 1, e)
    }),
    googleProtobuf.Message.GENERATE_TO_OBJECT &&
      ((proto.todo.todoObject.prototype.toObject = function (e) {
        return proto.todo.todoObject.toObject(e, this)
      }),
      (proto.todo.todoObject.toObject = function (e, t) {
        var o = {
          id: googleProtobuf.Message.getFieldWithDefault(t, 1, ''),
          task: googleProtobuf.Message.getFieldWithDefault(t, 2, ''),
        }
        return e && (o.$jspbMessageInstance = t), o
      })),
    (proto.todo.todoObject.deserializeBinary = function (e) {
      var t = new googleProtobuf.BinaryReader(e),
        o = new proto.todo.todoObject()
      return proto.todo.todoObject.deserializeBinaryFromReader(o, t)
    }),
    (proto.todo.todoObject.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var o = t.readString()
            e.setId(o)
            break
          case 2:
            o = t.readString()
            e.setTask(o)
            break
          default:
            t.skipField()
        }
      }
      return e
    }),
    (proto.todo.todoObject.prototype.serializeBinary = function () {
      var e = new googleProtobuf.BinaryWriter()
      return proto.todo.todoObject.serializeBinaryToWriter(this, e), e.getResultBuffer()
    }),
    (proto.todo.todoObject.serializeBinaryToWriter = function (e, t) {
      var o = void 0
      ;(o = e.getId()).length > 0 && t.writeString(1, o),
        (o = e.getTask()).length > 0 && t.writeString(2, o)
    }),
    (proto.todo.todoObject.prototype.getId = function () {
      return googleProtobuf.Message.getFieldWithDefault(this, 1, '')
    }),
    (proto.todo.todoObject.prototype.setId = function (e) {
      return googleProtobuf.Message.setProto3StringField(this, 1, e)
    }),
    (proto.todo.todoObject.prototype.getTask = function () {
      return googleProtobuf.Message.getFieldWithDefault(this, 2, '')
    }),
    (proto.todo.todoObject.prototype.setTask = function (e) {
      return googleProtobuf.Message.setProto3StringField(this, 2, e)
    }),
    (proto.todo.todoResponse.repeatedFields_ = [1]),
    googleProtobuf.Message.GENERATE_TO_OBJECT &&
      ((proto.todo.todoResponse.prototype.toObject = function (e) {
        return proto.todo.todoResponse.toObject(e, this)
      }),
      (proto.todo.todoResponse.toObject = function (e, t) {
        var o = {
          todosList: googleProtobuf.Message.toObjectList(
            t.getTodosList(),
            proto.todo.todoObject.toObject,
            e,
          ),
        }
        return e && (o.$jspbMessageInstance = t), o
      })),
    (proto.todo.todoResponse.deserializeBinary = function (e) {
      var t = new googleProtobuf.BinaryReader(e),
        o = new proto.todo.todoResponse()
      return proto.todo.todoResponse.deserializeBinaryFromReader(o, t)
    }),
    (proto.todo.todoResponse.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        if (1 === t.getFieldNumber()) {
          var o = new proto.todo.todoObject()
          t.readMessage(o, proto.todo.todoObject.deserializeBinaryFromReader), e.addTodos(o)
        } else t.skipField()
      }
      return e
    }),
    (proto.todo.todoResponse.prototype.serializeBinary = function () {
      var e = new googleProtobuf.BinaryWriter()
      return proto.todo.todoResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
    }),
    (proto.todo.todoResponse.serializeBinaryToWriter = function (e, t) {
      var o
      ;(o = e.getTodosList()).length > 0 &&
        t.writeRepeatedMessage(1, o, proto.todo.todoObject.serializeBinaryToWriter)
    }),
    (proto.todo.todoResponse.prototype.getTodosList = function () {
      return googleProtobuf.Message.getRepeatedWrapperField(this, proto.todo.todoObject, 1)
    }),
    (proto.todo.todoResponse.prototype.setTodosList = function (e) {
      return googleProtobuf.Message.setRepeatedWrapperField(this, 1, e)
    }),
    (proto.todo.todoResponse.prototype.addTodos = function (e, t) {
      return googleProtobuf.Message.addToRepeatedWrapperField(this, 1, e, proto.todo.todoObject, t)
    }),
    (proto.todo.todoResponse.prototype.clearTodosList = function () {
      return this.setTodosList([])
    }),
    googleProtobuf.Message.GENERATE_TO_OBJECT &&
      ((proto.todo.deleteResponse.prototype.toObject = function (e) {
        return proto.todo.deleteResponse.toObject(e, this)
      }),
      (proto.todo.deleteResponse.toObject = function (e, t) {
        var o = { message: googleProtobuf.Message.getFieldWithDefault(t, 1, '') }
        return e && (o.$jspbMessageInstance = t), o
      })),
    (proto.todo.deleteResponse.deserializeBinary = function (e) {
      var t = new googleProtobuf.BinaryReader(e),
        o = new proto.todo.deleteResponse()
      return proto.todo.deleteResponse.deserializeBinaryFromReader(o, t)
    }),
    (proto.todo.deleteResponse.deserializeBinaryFromReader = function (e, t) {
      for (; t.nextField() && !t.isEndGroup(); ) {
        if (1 === t.getFieldNumber()) {
          var o = t.readString()
          e.setMessage(o)
        } else t.skipField()
      }
      return e
    }),
    (proto.todo.deleteResponse.prototype.serializeBinary = function () {
      var e = new googleProtobuf.BinaryWriter()
      return proto.todo.deleteResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
    }),
    (proto.todo.deleteResponse.serializeBinaryToWriter = function (e, t) {
      var o
      ;(o = e.getMessage()).length > 0 && t.writeString(1, o)
    }),
    (proto.todo.deleteResponse.prototype.getMessage = function () {
      return googleProtobuf.Message.getFieldWithDefault(this, 1, '')
    }),
    (proto.todo.deleteResponse.prototype.setMessage = function (e) {
      return googleProtobuf.Message.setProto3StringField(this, 1, e)
    }),
    o.object.extend(t, proto.todo)
})
export { todo_pb as default }
