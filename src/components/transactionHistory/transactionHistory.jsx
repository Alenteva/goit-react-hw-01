import TransactionItem from './transactionItem';
import css from '../transactionHistory/transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['table']}>
      <thead className={css['thead']}>
        <tr>
          <th className={css['tableTitle']}>Type</th>
          <th className={css['tableTitle']}>Amount</th>
          <th className={css['tableTitle']}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return <TransactionItem key={item.id} {...item} />;
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
