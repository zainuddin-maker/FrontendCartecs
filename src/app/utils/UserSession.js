import { decorate, observable, action } from "mobx";
import { getItem, setItem } from "app/utils";
import { clearAll } from "./Storage";

class UserSession {
  data = null;
  setData(val) {
    this.data = val.userlist;
    setItem("TOKEN", val.token);
    setItem("DATA", JSON.stringify(val.userlist));
  }

  initData = () => {
    if (getItem("DATA")) {
      this.data = JSON.parse(getItem("DATA"));
      return this.data;
    } else {
      return null;
    }
  };

  destroy = () => {
    clearAll();
    return true;
  };
}
const userSession = decorate(UserSession, {
  data: observable,
  destroy: action
});
export default new userSession();
