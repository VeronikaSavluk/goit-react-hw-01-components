import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friendlist/FriendList';
import TransactionHistory from 'components/transactionhistory/TransactionHistory';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from "./transactions.json";

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <section>
    <Statistics title="Upload stats" stats={data} />
      </section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
