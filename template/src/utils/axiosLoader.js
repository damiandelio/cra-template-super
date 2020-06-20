import axios from "axios";
import { showLoader, hideLoader } from "../redux/modules/loader";
import store from "../redux/store";

// fetches data from API using axios and meanwhile show the loader
function axiosLoader(cfg, onSuccess, onFail = () => {}) {
  store.dispatch(showLoader());
  axios(cfg)
    .then((res) => {
      onSuccess(res);
      store.dispatch(hideLoader());
    })
    .catch((err) => {
      onFail(err);
      store.dispatch(hideLoader());
    });
}

export default axiosLoader;
