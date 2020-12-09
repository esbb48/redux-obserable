import styled from 'styled-components';

const LayoutStyled = styled.div`
  > div:nth-child(1) {
    padding: 0 10%;
    height: 70px;
    background: #ffd34e;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > div:nth-child(2) {
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    table {
      width: 90%;
    }
  }
`;

const LoginedUser = ({ isAuth, account, handleLogout }) => {
  if (!isAuth) return null;
  return (
    <div>
      <span>{`${account}  `}</span>
      <button onClick={handleLogout}>登出</button>
    </div>
  );
};

const LayoutWrapper = ({ children, isAuth, account, handleLogout }) => (
  <LayoutStyled>
    <div>
      <div>Logo</div>
      <LoginedUser
        isAuth={isAuth}
        account={account}
        handleLogout={handleLogout}
      />
    </div>
    <div>{children}</div>
  </LayoutStyled>
);

export default LayoutWrapper;
