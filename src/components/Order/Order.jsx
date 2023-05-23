import { useDispatch } from "react-redux";
import { orderByABC, orderByAttack, reset } from '../../redux/actions';

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
    <div>
      <select
        name="orderABC"
        id=""
        onChange={handleOrderABC}
        value={currentOrder}
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
        >
        <option value="DEFAULT">Ordenar según ataque</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <button onClick={resetButton}>Reset</button>
    </div>
  );
};

export default Order;
