import controller from '../controllers/pilotoController';

export default (app) => {
  app.post('/piloto/persist', controller.persist);
  app.post('/piloto/persist/:id', controller.persist);
  app.post('/piloto/destroy', controller.destroy);
  app.get('/piloto', controller.get);
  app.get('/piloto/:id', controller.get);
};
