module.exports = [
  {
    context: [
      '/web/test/path'
    ],
    target: 'https://www.demo.com',
    secure: false,
    changeOrigin: true
  },
  {
    context: [ '/api/', '/v1/' ],
    target: 'https://localhost:9300',
    secure: false
  }
];
