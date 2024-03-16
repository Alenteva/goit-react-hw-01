import PropTypes from 'prop-types';
import css from '../transactionHistory/transaction.module.css';
const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css['tabValue']}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

// TransactionItem.PropTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
// };

export default TransactionItem;
