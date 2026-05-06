// index.js — Level 2 Obfuscation

const _0x5f2e = [

  'cmVwbGFjZQ==', 'L1wkLw==', 'VEFSR0VUX0RPTUFJTg==', 'aG9zdA==', 

  'Y29ubmVjdGlvbg==', 'a2VlcC1hbGl2ZQ==', 'cHJveHktYXV0aGVudGljYXRl', 

  'cHJveHktYXV0aG9yaXphdGlvbg==', 'dGU=', 'dHJhaWxlcg==', 

  'dHJhbnNmZXItZW5jb2Rpbmc=', 'dXBncmFkZQ==', 'Zm9yd2FyZGVk', 

  'eC1mb3J3YXJkZWQtaG9zdA==', 'eC1mb3J3YXJkZWQtcHJvdG8=', 

  'eC1mb3J3YXJkZWQtcG9ydA==', 'aW5kZXhPZg==', 'c2xpY2U=', 

  'c3RhcnRzV2l0aA==', 'eC12ZXJjZWwt', 'eC1yZWFsLWlw', 

  'eC1mb3J3YXJkZWQtZm9y', 'c2V0', 'R0VU', 'SEVBRA==', 

  'cmVsYXkgZXJyb3I6IA==', 'QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ=', 

  'TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0', 

  'aGFsZg==', 'bWFudWFs', 'cnVudGltZQ==', 'ZWRnZQ=='

];



const _0x3a8b = (() => {

  const _k = new Uint8Array([0x4b, 0x39, 0x21]);

  return (_s) => {

    const _b = atob(_s);

    const _r = new Uint8Array(_b.length);

    for (let _i = 0; _i < _b.length; _i++) {

      _r[_i] = _b.charCodeAt(_i) ^ _k[_i % 3];

    }

    return new TextDecoder().decode(_r);

  };

})();



const _0x7c1d = (_i) => _0x3a8b(_0x5f2e[_i]);



const _0x9e4f = new Proxy(

  new Set([

    _0x7c1d(3), _0x7c1d(4), _0x7c1d(5), _0x7c1d(6),

    _0x7c1d(7), _0x7c1d(8), _0x7c1d(9), _0x7c1d(10),

    _0x7c1d(11), _0x7c1d(12), _0x7c1d(13), _0x7c1d(14), _0x7c1d(15)

  ]),

  {

    get: (_t, _p) => Reflect.get(_t, _p),

    has: (_t, _p) => Reflect.has(_t, _p)

  }

);



const _0x2d6a = (() => {

  const _t = (process.env[_0x3a8b('VEFSR0VUX0RPTUFJTg==')] || '');

  const _r = new RegExp(atob('L1wkLw=='));

  return _t[_0x7c1d(0)](_r, '');

})();



const _0x1f3e = new Proxy(

  {

    [_0x7c1d(29)]: _0x7c1d(30),

    [_0x3a8b('dmVyc2lvbg==')]: 2

  },

  {

    get: (_t, _p, _r) => {

      if (_p === 'toJSON') return undefined;

      return Reflect.get(_t, _p, _r);

    }

  }

);



const _0x4b7a = (_h, _k, _v) => {

  const _d = Object.getOwnPropertyDescriptor(Headers.prototype, _0x3a8b('YXBwZW5k'));

  return _d ? _d.value.call(_h, _k, _v) : _h[_0x7c1d(22)](_k, _v);

};



const _0x8d3c = async (_r) => {

  if (!_0x2d6a) {

    return new Response(_0x7c1d(27), { status: 500 });

  }



  try {

    const _u = _r.url;

    const _i = _u[_0x7c1d(16)]('/', 8);

    const _t = _i === -1 

      ? _0x2d6a + '/' 

      : _0x2d6a + _u[_0x7c1d(17)](_i);



    const _h = new Headers();

    let _ip = null;



    for (const [_n, _v] of _r.headers) {

      if (_0x9e4f.has(_n)) continue;

      if (_n[_0x7c1d(18)](_0x7c1d(19))) continue;

      

      if (_n === _0x7c1d(20)) {

        _ip = _v;

        continue;

      }

      

      if (_n === _0x7c1d(21)) {

        if (!_ip) _ip = _v;

        continue;

      }

      

      _0x4b7a(_h, _n, _v);

    }



    if (_ip) _0x4b7a(_h, _0x7c1d(21), _ip);



    const _m = _r.method;

    const _b = _m !== _0x7c1d(23) && _m !== _0x7c1d(24);



    const _opts = Object.create(null);

    _opts.method = _m;

    _opts.headers = _h;

    if (_b) _opts.body = _r.body;

    _opts.duplex = _0x7c1d(28);

    _opts.redirect = _0x7c1d(29);



    const _proxy = new Proxy(globalThis, {

      get: (_t, _p) => {

        if (_p === 'fetch') return fetch;

        return Reflect.get(_t, _p);

      }

    });



    return await _proxy.fetch(_t, _opts);

  } catch (_e) {

    console.error(_0x7c1d(25), _e);

    return new Response(_0x7c1d(26), { status: 502 });

  }

};



const _0x6e2a = Object.defineProperty(

  async function() { return _0x8d3c.apply(this, arguments); },

  'name',

  { value: '_' + Math.random().toString(36).slice(2, 8) }

);



export const config = Object.freeze(_0x1f3e);

export default _0x6e2a;
