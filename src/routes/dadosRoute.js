import controller from '../controllers/dadosController';

export default (app) => {
  app.post('/dados/persist', controller.persist);
  app.post('/dados/persist/:id', controller.persist);
  app.post('/dados/destroy', controller.destroy);
  app.get('/dados', controller.get);
  app.get('/dados/:id', controller.get);
};
