module.exports = {
    type: 'postgres',
    host: 'localhost',
    post:5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/*.js'],
    cli: {
        migrationsDir: 'src/migrations'
    },
};