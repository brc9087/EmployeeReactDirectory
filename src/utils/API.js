import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User Generator API

export default {

  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us")
  }
};
