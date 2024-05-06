import controller from '../controllers/agendarVooController';

export default (app) => {
  app.post('/agendarVoo/persist', controller.persist);
  app.post('/agendarVoo/persist/:id', controller.persist);
  app.post('/agendarVoo/destroy', controller.destroy);
  app.get('/agendarVoo', controller.get);
  app.get('/agendarVoo/:id', controller.get);
};
