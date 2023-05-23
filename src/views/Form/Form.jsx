import { useState,useEffect } from "react";
import validation from '../../components/Validation/validation';
import axios from 'axios';

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
      height: ''
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
        <form onSubmit={submitHandler}> 
            <div>
                <label>Name: </label>
                <input type="text" name="name" value={form.name} onChange={changeHandler}/>
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Image: </label>
                <input type="text" name="image" value={form.image} onChange={changeHandler}/>
                {errors.image && <span>{errors.image}</span>}
            </div>
            <div>
                <label>Hp: </label>
                <input type="text" name="hp" value={form.hp} onChange={changeHandler}/>
                {errors.hp && <span>{errors.hp}</span>}
            </div>  
            <div>
                <label>Attack: </label>
                <input type="text" name="attack" value={form.attack} onChange={changeHandler}/>
                {errors.attack && <span>{errors.attack}</span>}
            </div>  
            <div>
                <label>Defense: </label>
                <input type="text" name="defense" value={form.defense} onChange={changeHandler}/>
                {errors.defense && <span>{errors.defense}</span>}
            </div>  
            <div>
                <label>Speed: </label>
                <input type="text" name="speed" value={form.speed} onChange={changeHandler}/>
                {errors.speed && <span>{errors.speed}</span>}
            </div>  
            <div>
                <label>Weight (en kilogramos): </label>
                <input type="text" name="weight" value={form.weight} onChange={changeHandler}/>
                {errors.weight && <span>{errors.weight}</span>}
            </div>  
            <div>
                <label>Height (en metros): </label>
                <input type="text" name="height" value={form.height} onChange={changeHandler}/>
                {errors.height && <span>{errors.height}</span>}
            </div>
            <span>Selecciona el/los tipos que tendrá el nuevo Pokemon:</span>
            {types.map(type => (
                <div key={type.id}>
                <label>
                    <input
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

            <button type="submit">SUBMIT</button>  
        </form>
    )
}

export default Form;