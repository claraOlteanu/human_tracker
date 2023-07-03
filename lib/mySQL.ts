import mysql, { ServerlessMysql } from 'serverless-mysql';
import { config } from './config';

export class MySqlConnector {
    private static instance: MySqlConnector | null = null;
    private con: ServerlessMysql;

    private constructor() {
        this.con = mysql({
            config: {
                host: config.mySql.host,
                user: config.mySql.user,
                password: config.mySql.pass,
                database: config.mySql.db
            }
          });

    }

    public static getInstance() {
        if (!MySqlConnector.instance) {
            MySqlConnector.instance = new MySqlConnector();
        }

        return MySqlConnector.instance;
    }

    public async getUserByEmail(email: string) {
        let res: unknown[] | undefined = undefined;

        res = await this.con.query(`SELECT * FROM user WHERE email=` + this.con.escape(email)) as unknown[];

        return res[0];
    }

}