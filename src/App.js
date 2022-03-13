import { useState } from 'react';
import Owner from './components/Owner';
import SearchField from './components/SearchField';

function App() {
  const [data, setData] = useState([]);

  const getRepositories = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  };

  return (
    <div className='w-screen min-h-screen bg-green-100'>
      <div className='w-3/4 mx-auto py-4 space-y-3 bg-white shadow-2xl'>
        <div className='w-full'>
          <SearchField getData={getRepositories} />
        </div>
        {data.length > 0 && (
          <div className='w-full flex flex-row'>
            <Owner
              avatarUrl={data[0].owner.avatar_url}
              htmlUrl={data[0].owner.html_url}
              username={data[0].owner.login}
              total={data.length}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
