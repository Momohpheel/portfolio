// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }
module.exports = {
presets: [
  ["@babel/preset-env", {
    useBuiltIns: "usage", // or "entry"
    corejs: 3,
  }]
]
}
// module.exports = {
//   presets: [
//     ['@vue/app', {
//       polyfills: [
//         'es.promise',
//         'es.symbol'
//       ]
//     }]
//   ]
// }