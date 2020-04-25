import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reduxPlugin())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
