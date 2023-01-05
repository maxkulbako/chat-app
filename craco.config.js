const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@views': path.resolve(__dirname, 'src/views'),
        }
    },
};