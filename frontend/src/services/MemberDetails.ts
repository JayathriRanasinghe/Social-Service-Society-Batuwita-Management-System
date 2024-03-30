import axios from "axios"; // Specify Axios response type

interface Member {
  // Define the expected structure of a member object from your API response
  // Replace with actual properties and types
  id: number;
  name: string;
  // ... other member properties
}

export default {
  getAllMembers: {
    get: (params: any): Promise<any> => {
      return new Promise<{}>(async (resolve, reject) => {
        try {
          const { data, status } = await axios.get<any>("member-details", {
            params,
          });
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
