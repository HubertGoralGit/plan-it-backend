import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as fs from "fs";
import path from "path";
import * as Mutation from './resolvers/mutations';
import * as Query from './resolvers/queries';

( async function() {
    const resolvers = {
        Mutation,
        Query
    }

    const server = new ApolloServer({
        typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
        resolvers
    });

    const { url } = await startStandaloneServer(server, {
        listen: {port: 4000}
    })

    console.log("server is ready at " + url);
})();