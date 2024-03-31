import axios from "axios"; // Specify Axios response type

export default {
  getAllMembers: {
    get: (params: any): Promise<any> => {
      return new Promise<{}>(async (resolve, reject) => {
        try {
          console.log("In the service... with link")
          const { data, status } = await axios.get<any>("http://localhost:8080/member/all-members", {
            params,
          });
          console.log(data,"in the service")
          resolve({ data, status });
        } catch (error) {
          reject(error);
        }
      });
    },
  },
  getBoardMembers: {
    get: (params: any): Promise<any> => {
      return new Promise<{}>(async (resolve, reject) => {
        try {
          const { data, status } = await axios.get<any>(
            "board-member-details",
            { params }
          );
          resolve({ data, status });
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};