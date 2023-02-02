"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const graphql_tag_1 = require("graphql-tag");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const typeDefs = (0, graphql_tag_1.gql) `
        type Post {
            id: String
            title: String
            username: String
        }
        
        type Query {
            getAllPosts: [Post]
        }
        
        type Mutation {
            createPost(title: String, username: String): Post
        }
    `;
        const resolvers = {
            Mutation: {
                createPost: (_parent, args) => __awaiter(this, void 0, void 0, function* () {
                    const post = yield db_1.prisma.post.create({
                        data: {
                            title: args.title,
                            username: args.username
                        }
                    });
                    return post;
                })
            },
            Query: {
                getAllPosts: () => __awaiter(this, void 0, void 0, function* () {
                    return yield db_1.prisma.post.findMany();
                })
            }
        };
        const server = new server_1.ApolloServer({
            typeDefs,
            resolvers
        });
        const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
            listen: { port: 4000 }
        });
        console.log("server is ready at " + url);
    });
})();
//# sourceMappingURL=index.js.map