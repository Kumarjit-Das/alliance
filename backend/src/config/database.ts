import { configDotenv } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";

configDotenv();
const dataSource = new DataSource({
  type: process.env.DBTYPE as "postgres",
  host: process.env.DBHOST,
  port: parseInt(process.env.DBPORT as string),
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
  entities: [],
  logging: true,
  synchronize: true,
})

export async function connectDatabase(): Promise<boolean> {
  
  try {
    const conn = await dataSource.initialize()
    return conn.isInitialized
  } catch(error) {
    console.log(error)
    return false
  }
}