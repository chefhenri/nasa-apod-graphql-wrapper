const fs = require('fs');
const path = require('path');
const {makeExecutableSchema} = require('apollo-server-express');

class Api {
    constructor() {
        this._read = true;
        this._typeDefs = [];
        this._resolvers = [];
    }

    async _scan(dir) {
        const files = fs.readdirSync(dir)
            .filter(file => fs.lstatSync(path.join(dir, file)).isFile())
            .filter(file => file.indexOf('.') !== 0 && file.slice(-3) === '.js');

        for (let file of files) {
            let obj = await import(path.join(dir, file));

            if (obj.typeDefs) this._typeDefs.push(obj.typeDefs);
            if (obj.resolvers) this._resolvers.push(obj.resolvers);
        }
    }

    async getSchema() {
        if (this._read) {
            await this._scan(path.join(__dirname, 'api/'));
            this._read = false;
        }

        return makeExecutableSchema({
            typeDefs: this._typeDefs,
            resolvers: this._resolvers
        })
    }
}

module.exports = {
    explorer: new Api()
}
