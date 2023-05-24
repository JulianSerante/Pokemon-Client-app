import { useState,useEffect } from "react";
import validation from '../../components/Validation/validation';
import axios from 'axios';
import style from './Form.module.css';

const Form = () => {
    const [form, setForm] = useState({
      name: '',
      image: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      weight: '',
      height: '',
      typeIds: []
    });
  
    const [errors, setErrors] = useState({
      name: '',
      image: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      weight: '',
      height: '',
      types: '',
    });
  
    const [types, setTypes] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3001/types')
        .then(res => {
          setTypes(res.data);
        })
        .catch(error => console.error(error));
    }, []);
  
    const changeHandler = (event) => {
      const property = event.target.name;
      const value = event.target.value;
  
      setForm({ ...form, [property]: value });
      setErrors(validation({ ...form, [property]: value }));
    };
  
    const changeTypeHandler = (event) => {
      const typeId = parseInt(event.target.value);
      const checked = event.target.checked;
    
      if (checked) {
        setForm((prevForm) => ({
          ...prevForm,
          typeIds: [...prevForm.typeIds, typeId]
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          typeIds: prevForm.typeIds.filter(id => id !== typeId)
        }));
      }
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
    
      const requestBody = {
        ...form,
        typeIds: form.typeIds.map(id => parseInt(id))
      };
    
      axios.post('http://localhost:3001/pokemons', requestBody)
        .then(res => alert(res.data))
        .catch(error => alert(error));
    };
    

    return (
        <form  onSubmit={submitHandler}>
          <div className={style.formContainer}>
          <h1 className={style.formTitle}>CREA TU PROPIO POKEMON</h1>
            <div>
                <label className={style.formLabel}>Nombre: </label>
                <input className={style.formInput} type="text" name="name" value={form.name} onChange={changeHandler}/>
                {errors.name && <span className={style.errors}>{errors.name}</span>}
            </div>
            <div>
                <label className={style.formLabel}>Imagen: </label>
                <input className={style.formInput} type="text" name="image" value={form.image} onChange={changeHandler}/>
                {errors.image && <span className={style.errors}>{errors.image}</span>}
            </div>
            <div>
                <label className={style.formLabel}>Hp: </label>
                <input className={style.formInput} type="text" name="hp" value={form.hp} onChange={changeHandler}/>
                {errors.hp && <span className={style.errors}>{errors.hp}</span>}
            </div>  
            <div>
                <label className={style.formLabel}>Ataque: </label>
                <input className={style.formInput} type="text" name="attack" value={form.attack} onChange={changeHandler}/>
                {errors.attack && <span className={style.errors}>{errors.attack}</span>}
            </div>  
            <div>
                <label className={style.formLabel}>Defensa: </label>
                <input className={style.formInput} type="text" name="defense" value={form.defense} onChange={changeHandler}/>
                {errors.defense && <span className={style.errors}>{errors.defense}</span>}
            </div>  
            <div>
                <label className={style.formLabel}>Velocidad: </label>
                <input className={style.formInput} type="text" name="speed" value={form.speed} onChange={changeHandler}/>
                {errors.speed && <span className={style.errors}>{errors.speed}</span>}
            </div>  
            <div>
                <label className={style.formLabel}>Peso (en kilogramos): </label>
                <input className={style.formInput} type="text" name="weight" value={form.weight} onChange={changeHandler}/>
                {errors.weight && <span className={style.errors}>{errors.weight}</span>}
            </div>  
            <div>
                <label className={style.formLabel}>Altura (en metros): </label>
                <input className={style.formInput} type="text" name="height" value={form.height} onChange={changeHandler}/>
                {errors.height && <span className={style.errors}>{errors.height}</span>}
            </div>
            <span className={style.formLabel}>Selecciona el/los tipos que tendrá el nuevo Pokemon:</span>
            {errors.types && <span className={style.errors}>{errors.types}</span>}
            {types.map(type => (
                <div key={type.id} className={style.formCheck}>
                <label >
                    <input className={style.checkBoxes}
                    type="checkbox"
                    name="typeIds"
                    value={type.id}
                    checked={form.typeIds.includes(type.id)}
                    onChange={changeTypeHandler}
                    />
                    {type.name}
                </label>
                </div>
            ))}

            <button className={style.submitButton} type="submit" disabled={errors.name || errors.image || errors.hp || errors.attack || errors.defense || errors.speed || errors.height || errors.weight || errors.types}>CREAR POKEMON</button> 
          </div> 
        </form>
    )
}

export default Form;