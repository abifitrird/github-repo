import { useState } from 'react';
import Empty from './components/Empty';
import NotFound from './components/NotFound';
import Owner from './components/Owner';
import RepoCard from './components/RepoCard';
import SearchField from './components/SearchField';

function App() {
  const [data, setData] = useState([]);
  const [statusCode, setStatusCode] = useState();

  const getRepositories = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setStatusCode(res.status);
        if (res.ok) {
          return res.json();
        } else if (res.status === 404) {
          return Promise.reject('User not found');
        } else {
          return Promise.reject('Error: ' + res.status);
        }
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='w-screen min-h-screen bg-green-100'>
      <div className='w-3/4 min-h-screen mx-auto pt-4 space-y-3 bg-white shadow-2xl'>
        <div className='w-full'>
          <SearchField getData={getRepositories} />
        </div>
        {data?.length > 0 && (
          <div className='w-full flex flex-row'>
            <Owner
              avatarUrl={data[0].owner.avatar_url}
              htmlUrl={data[0].owner.html_url}
              username={data[0].owner.login}
              total={data.length}
            />
            <div className='w-full space-y-2'>
              {data.map((item) => (
                <RepoCard
                  key={item.id}
                  name={item?.name}
                  htmlUrl={item?.html_url}
                  language={item?.language}
                  description={item?.description}
                  createdAt={item?.created_at}
                  updatedAt={item?.updated_at}
                  topics={item?.topics}
                />
              ))}
            </div>
          </div>
        )}

        {statusCode === 200 && data.length === 0 && <Empty />}
        {statusCode === 404 && <NotFound />}
      </div>
    </div>
  );
}

export default App;
