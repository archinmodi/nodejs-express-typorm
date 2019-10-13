import { createConnection, getConnectionOptions } from "typeorm";

const env = process.env.NODE_ENV !== "production";

async function DBConnection() {
    // read connection options from ormconfig file
    const connectionOptions = await getConnectionOptions();

    // do something with connectionOptions,
    // for example append a custom naming strategy or a custom logger
    Object.assign(connectionOptions, {
        logging: env,
        synchronize: env
    });

    // create a connection using modified connection options
    const connection = await createConnection(connectionOptions);

    return connection;
}

export default DBConnection;
