import TransactionItem from './transactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
