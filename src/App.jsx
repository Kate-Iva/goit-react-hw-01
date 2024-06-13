import './App.css';
import { userData, friends, transactions } from './datas';
import { Profile, FriendList, TransactionHistory } from './components';

const App = () => {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;