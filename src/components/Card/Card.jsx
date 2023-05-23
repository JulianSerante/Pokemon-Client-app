import style from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Card = ({ id, name, image, types }) => {
  const upperName = name?.toUpperCase();

  useEffect(() => {
    if (!name) {
      alert('No hay un Pokemon con ese nombre');
    }
  }, []);

  return (
    <div className={style.card}>
      <NavLink to={`/detail/${id}`} className={style.cardLink} >
        <div>
        <h1>{upperName}</h1>
      
      <img className={style.image} src={image} alt="" />
      {types && types.length > 0 && (
        <ul>
          {types.map((type, index) => (
            <li key={index}>{type.name.toUpperCase()}</li>
          ))}
        </ul>
      )}
      </div>
      </NavLink>
    </div>
  );
};

export default Card;
