import controller from '../controllers/enderecosController';

export default (app) => {
  app.post('/enderecos/persist', controller.persist);
  app.post('/enderecos/persist/:id', controller.persist);
  app.post('/enderecos/destroy', controller.destroy);
  app.get('/enderecos', controller.get);
  app.get('/enderecos/:id', controller.get);
};
