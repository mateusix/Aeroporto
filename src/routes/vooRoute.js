import controller from '../controllers/vooController';

export default (app) => {
  app.post('/voo/persist', controller.persist);
  app.post('/voo/persist/:id', controller.persist);
  app.post('/voo/destroy', controller.destroy);
  app.get('/voo', controller.get);
  app.get('/voo/:id', controller.get);
};
