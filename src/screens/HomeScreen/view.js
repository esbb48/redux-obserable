import { useEffect } from 'react';

const HomeScreen = ({ handleGetList, users }) => {
  useEffect(() => {
    handleGetList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>登入帳號</th>
            <th>頭像</th>
            <th>動作</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ avatar_url, id, login }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{login}</td>
              <td>
                <img alt='avatar_url' width='100' src={avatar_url} />
              </td>
              <td>
                <button>登入</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HomeScreen;
