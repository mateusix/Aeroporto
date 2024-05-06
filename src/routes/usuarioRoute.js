import controller from '../controllers/usuarioController';

export default (app) => {
  app.post('/usuraio/persist', controller.persist);
  app.post('/usuraio/persist/:id', controller.persist);
  app.post('/usuraio/destroy', controller.destroy);
  app.get('/usuraio', controller.get);
  app.get('/usuraio/:id', controller.get);
};
