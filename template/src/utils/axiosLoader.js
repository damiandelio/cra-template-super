import axios from "axios";
import { showLoader, hideLoader } from "../redux/modules/loader";
import store from "../redux/store";

// fetches data from API using axios and meanwhile show the loader
function axiosLoader({ config, onSuccess = () => {}, onError = () => {} }) {
  // show loader
  store.dispatch(showLoader());

  // calling api with axios
  axios(config)
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onError(err);
    })
    .finally(() => {
      // hide loader
      store.dispatch(hideLoader());
    });
}

export default axiosLoader;
