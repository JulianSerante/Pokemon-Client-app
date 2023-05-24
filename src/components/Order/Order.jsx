import { useDispatch } from "react-redux";
import { orderByABC, orderByAttack, reset } from '../../redux/actions';
import style from './Order.module.css';

const Order = ({ currentOrder, handleOrderChange }) => {
  const dispatch = useDispatch();

  const handleOrderABC = (event) => {
    const orderABC = event.target.value;
    handleOrderChange(orderABC);
    dispatch(orderByABC(orderABC));
  };

  const handleOrderAttack = (event) => {
    const orderAttack = event.target.value;
    handleOrderChange(orderAttack);
    dispatch(orderByAttack(orderAttack));
  }

   const resetButton = () => {
    dispatch(reset())
  }

  return (
    <div className={style.orderContainer}>
      <select
        name="orderABC"
        id=""
        onChange={handleOrderABC}
        value={currentOrder}
        className={style.order}
      >
        <option value="DEFAULT">Ordenar alfabéticamente</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select 
        name="orderAttack" 
        id=""
        onChange={handleOrderAttack}
        value={currentOrder}
        className={style.order}
        >
        <option value="DEFAULT">Ordenar según ataque</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <button onClick={resetButton} className={style.reset}>Reset 🔄</button>
    </div>
  );
};

export default Order;
