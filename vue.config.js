// vue.config.js
module.exports = {
 pages: {
    index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        title: 'Sample App',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

 }
}
