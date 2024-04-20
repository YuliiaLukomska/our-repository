import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';

export const ExchangeForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const {value} = e.target.elements.currency
    const [amount, from,  , to] = value.split(' ')
    console.log(amount, from , to)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input title="Request format 15 USD in UAH" placeholder='15 USD in UAH' name='currency' className={styles.input} pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$" required />
    </form>
  );
};
