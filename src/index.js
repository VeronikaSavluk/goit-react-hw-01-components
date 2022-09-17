import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );


// import data from '/src/components/statistics/data.json';
// {/* <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} /> */}
// import friends from '/src/components/friendlist/friends.json';
// {/* <FriendList friends={friends} />; */}
// import transactions from '/src/components/transactionhistory/transactions.json';

// {/* <TransactionHistory items={transactions} />; */}

// const element = React.createElement('div', { class:"profile"});
// username: "Petra Marica", tag: "pmarica", location: "Salvador, Brasil", avatar: "https:cdn-icons-png.flaticon.com/512/1077/1077012.png", stats: {Followers: 1000, Views: 2000, Likes: 3000}

// const statistics = (<section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>);
// console.log(statistics);
// ReactDOM.render(statistics, document.querySelector('#root'));
// const friendList = (<ul class="friend-list"></ul>);
// console.log(friendList);
// ReactDOM.render(friendList, document.querySelector('#root'));
// const friendListItem = (<li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li>);
// console.log(friendListItem);
// ReactDOM.render(friendListItem, document.querySelector('#root'));
// const transactionHistory = (<table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>);
// console.log(transactionHistory);
// ReactDOM.render(transactionHistory, document.querySelector('#root'));

