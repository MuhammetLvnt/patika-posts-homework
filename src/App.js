import axios from "axios";
import Posts from "./components/Posts";

export const getData = async (userId) => {
  const [userData, postData] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
  ]);
  return { user: userData.data, posts: postData.data };
};

function App() {
  return (
    <div>
      <Posts />
    </div>
  );
}

export default App;
