import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'W1072CWBL3',
    port: 3306,
    database: 'my_database',
    user: 'root',
    password: 'root'
  }
});
export default async function excuteQuery(query) {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}