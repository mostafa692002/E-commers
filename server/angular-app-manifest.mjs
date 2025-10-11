
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mostafa692002.github.io/E-commers/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/E-commers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YPX3EVF3.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-3D7YAPSI.js",
      "chunk-FMUO2B33.js",
      "chunk-HP3S7D3T.js",
      "chunk-KMUZPL3V.js"
    ],
    "route": "/E-commers/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YPX3EVF3.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-T6VXAM35.js",
      "chunk-FMUO2B33.js",
      "chunk-HP3S7D3T.js"
    ],
    "route": "/E-commers/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YPX3EVF3.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-G6JQFFX5.js",
      "chunk-HP3S7D3T.js"
    ],
    "route": "/E-commers/product-detils/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YPX3EVF3.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-XHHV5KIW.js"
    ],
    "route": "/E-commers/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YPX3EVF3.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-4VE43PA5.js",
      "chunk-ZOHC5V4B.js"
    ],
    "route": "/E-commers/address/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YPX3EVF3.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-WNZKXOSP.js",
      "chunk-KMUZPL3V.js"
    ],
    "route": "/E-commers/categories"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YPX3EVF3.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-RZCKSRQZ.js"
    ],
    "route": "/E-commers/brands"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2ZEVZIW6.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-YWNQQZEI.js",
      "chunk-ZOHC5V4B.js"
    ],
    "route": "/E-commers/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2ZEVZIW6.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-VDDRDAG4.js",
      "chunk-ZOHC5V4B.js"
    ],
    "route": "/E-commers/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2ZEVZIW6.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js",
      "chunk-SP7QXVLA.js"
    ],
    "route": "/E-commers/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IXW5KPK6.js",
      "chunk-SHTCI25I.js",
      "chunk-POUEFXQ3.js",
      "chunk-VNWYYZPS.js"
    ],
    "route": "/E-commers/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 40785, hash: '3d989601e7b26c35e2bce5d9c61faa08480cb90cb2d3353e4b626330fb2742f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2837, hash: '68c0d2d49247071b046bdf9082fac8a44c4ab373f3dcd01dcf073f53d6cecdac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 58708, hash: 'ab7b5fe2077b0ff4a91c5e698613860964b3bc0be309403c38b32040f44048a6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 58604, hash: 'dce5f921517488011c54a78e7ac9b6abfb4c3e4d49bb62f422908885546b1075', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58291, hash: 'b253279fb39f8097360c4d62c3f3e6610028302341b9ad48034f7dae4f63d642', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 58604, hash: 'dd85103662c6cac5f6fe437bda544d8db4003125823664f6f491f786bc50ab96', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 58552, hash: 'c2b1f5b4e28fdabee42049c1646fd930dafca120348ab90df48be472cce5d1b9', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'forget-password/index.html': {size: 51476, hash: '17bde4a81ef3db34ff23ec085ee6e10364e07e866c16607e162f1edc17036b04', text: () => import('./assets-chunks/forget-password_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 58656, hash: '25997dc25edfb1842b6f7060c61d3e0b8708110ec30ea1a721fb06ca658d3cab', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 58552, hash: 'f8541c7a72eaa3195b665a4472ddd9058c6a22ba1efcdff5eac7e7b454d08e92', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 58884, hash: 'a0e6c5c308b7872e64f01480ddc8b1ad90584eac60c996e904eb9535df9a03a5', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-SF7KZVFU.css': {size: 438347, hash: 'TE4Dhlt86wM', text: () => import('./assets-chunks/styles-SF7KZVFU_css.mjs').then(m => m.default)}
  },
};
