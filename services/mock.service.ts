import { createServer, Model } from 'miragejs';

export const server = createServer({
  models: {
    users: Model,
  },
  seeds(server) {
    (server.schema as any).users.create({
      email: 'admin@gmail.com',
      password: '123456',
      user: {
        name: 'admin',
        email: 'admin@gmail.com',
        phone: '1111111111',
      },
    });
    (server.schema as any).users.create({
      email: 'user@gmail.com',
      password: '123456',
      user: {
        name: 'user',
        email: 'user@gmail.com',
        phone: '1111111111',
      },
    });
    (server.schema as any).users.create({
      email: 'test@gmail.com',
      password: '123456',
      user: {
        name: 'test',
        email: 'test@gmail.com',
        phone: '1111111111',
      },
    });
  },
  routes() {
    this.post('api/login', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      const user = (schema as any).users.findBy({ email: attrs.email, password: attrs.password });

      if (user) {
        return user.user;
      } else {
        throw new Error('User not found');
      }
    });
    this.post('api/register', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      const user = (schema as any).users.create({
        email: attrs.email,
        password: attrs.password,
        user: attrs.user,
      });

      if (user) {
        return user.user;
      } else {
        throw new Error('User not found');
      }
    });
  },
});
