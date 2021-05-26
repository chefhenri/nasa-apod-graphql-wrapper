import {parse} from 'path';
import {readFileSync} from 'fs';

export const typeDefs = readFileSync(`${__dirname}/${parse(__filename).name}.gql`, 'utf-8');

export const resolvers = {
    Apod: {
        copyright: apod => apod['copyright'],
        date: apod => apod['date'],
        explanation: apod => apod['explanation'],
        hdurl: apod => apod['hdurl'],
        mediaType: apod => apod['media_type'],
        serviceVersion: apod => apod['service_version'],
        title: apod => apod['title'],
        url: apod => apod['url']
    }
}
