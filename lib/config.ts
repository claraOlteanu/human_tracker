export const config = {
    mySql: {
        user: process.env.DBUSER || 'root',
        host: process.env.DBHOST || 'localhost',
        pass: process.env.DBPASS || 'root',
        db: process.env.DB || 'my_app'
    }
} 