import enderecosRoute from './enderecosRoute';
import usuarioRoute from './usuarioRoute';
import dadosRoute from './dadosRoute';
import pilotoRoute from './pilotoRoute';
import aeromocosRoute from './aeromocosRoute';
import agendarVooRoute from './agendarVooRoute';
import aviaoRoute from './aviaoRoute';
import vooRoute from './vooRoute';

function Routes(app) {
  usuarioRoute(app);
  enderecosRoute(app);
  dadosRoute(app);
  pilotoRoute(app);
  aeromocosRoute(app);
  agendarVooRoute(app);
  aviaoRoute(app);
  vooRoute(app);
}

export default Routes;
