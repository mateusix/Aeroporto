import controller from '../controllers/aviaoController';

export default (app) => {
  app.post('/aviao/persist', controller.persist);
  app.post('/aviao/persist/:id', controller.persist);
  app.post('/aviao/destroy', controller.destroy);
  app.get('/aviao', controller.get);
  app.get('/aviao/:id', controller.get);
};
