import { Link, UsersList } from './components';

import usersJson from './assets/users.json';

export const App = () => {
  return (
    <>
      <Link title="To home page">My link</Link>
      <br />
      <Link href="/product" title="To home page">
        My link
      </Link>

      {/* <UsersList users={usersJson} /> */}
      <UsersList users={usersJson}>
        <Link title="To home page">My link</Link>
      </UsersList>
    </>
  );
};