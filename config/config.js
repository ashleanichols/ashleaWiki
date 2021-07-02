module.exports = {
    development: {
        port: process.env.PORT || 4500,
        connectionString: 'mongodb+srv://guest:<guest12345>@cluster0.qskgu.mongodb.net/Articles?retryWrites=true&w=majority'
    },
    production: {}
};