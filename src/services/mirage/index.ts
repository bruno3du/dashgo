/** @format */

import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';
type User = {
	nome: string;
	email: string;
	created_at: string;
};

export function makeServer() {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({}),
		},
		factories: {
			user: Factory.extend({
				name(i: number) {
					return faker.name.firstName()
				},
				email() {
          return faker.internet.email().toLowerCase()
				},
				createdAt() {
          return faker.date.recent(10, )
        },
			}),
		},
		seeds(server) {
      server.createList('user', 10)
    },
		routes() {
			this.namespace = 'server';
			this.timing = 750;

			this.get('/users');
			this.post('/users');

			this.namespace = '';

			this.passthrough();
		},
	});

	return server;
}
