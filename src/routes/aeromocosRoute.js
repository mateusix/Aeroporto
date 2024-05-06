import controller from '../controllers/aeromocosController';

export default (app) => {
  app.post('/aeromocos/persist', controller.persist);
  app.post('/aeromocos/persist/:id', controller.persist);
  app.post('/aeromocos/destroy', controller.destroy);
  app.get('/aeromocos', controller.get);
  app.get('/aeromocos/:id', controller.get);
};
