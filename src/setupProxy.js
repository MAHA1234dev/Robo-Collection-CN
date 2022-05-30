// module.exports = {
//     devServer: function(configFunction) {
//         return function(proxy, allowedHost) {
//             const config = configFunction(proxy, allowedHost)
//             config.headers = {
//                 'X-Frame-Options': 'Deny'
//             }
//             return config
//         }
//     }
// }
module.exports = function(app) {
    app.use((req, res, next) => {
      res.set({
          'foo': 'bar'
      });
        next();
    }); 
  };