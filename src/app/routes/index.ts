import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  const { name, email } = request.body;

  console.log({ name, email });

  return response.json({ name, email });
});

export default routes;
