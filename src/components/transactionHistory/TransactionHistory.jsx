import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionHistoryItem from '../transactionHistoryItem/TransactionHistoryItem';
import { Fragment } from 'react';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, ...transaction }) => (
          <Fragment key={id}>
            <TransactionHistoryItem {...transaction} />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};