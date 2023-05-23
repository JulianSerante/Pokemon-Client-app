const validation = (form) => {
    let errors = {};

    if(!/^[a-zA-Z\s]+$/.test(form.name)) {
        errors.name = 'El nombre no puede contener números ni caracteres especiales'};
    if(!form.name) {
        errors.name = 'El nuevo Pokemon debe tener un nombre';
    }
    if(form.name.length < 4 || form.name.length > 30) {
        errors.name = 'El nombre del Pokemon debe tener entre 4 y 30 caracteres';
    }
    if(!/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(form.image)) {
        errors.image = 'La URL de imagen ingresada no es válida';
    }
    if(!form.image) {
        errors.image = 'El nuevo Pokemon debe tener una imagen';
    }
    if(!/^\d+$/.test(form.hp)){
        errors.hp = 'La vida del Pokemon debe ser un número';
    }
    if(!form.hp){
        errors.hp = 'El nuevo Pokemon debe tener estadísticas vida';
    }
    if(form.hp > 800){
        errors.hp = 'La vida no puede ser mayor de 800'
    }
    if(!/^\d+$/.test(form.attack)){
        errors.attack = 'El ataque del Pokemon debe ser un número';
    }
    if(!form.attack){
        errors.attack = 'El nuevo Pokemon debe tener estadísticas de ataque';
    }
    if(form.attack > 1000){
        errors.attack = 'El ataque no puede ser mayor de 1000';
    }
    if(!/^\d+$/.test(form.defense)){
        errors.defense = 'La defensa del Pokemon debe ser un número';
    }
    if(!form.defense){
        errors.defense = 'El nuevo Pokemon debe tener estadísticas de defensa';
    }
    if(form.defense > 1000){
        errors.defense = 'La defensa no puede ser mayor de 1000';
    }
    if(form.speed){
        if(!/^\d+$/.test(form.speed)){
        errors.speed = 'La velocidad debe ser un número';
        }
        if(form.speed > 850){
            errors.speed = 'La velocidad no puede ser mayor de 850';
        }
    }
    if(form.weight){
        if(!/^\d+$/.test(form.weight)){
        errors.weight = 'El peso debe ser un número';
        }
        if(form.weight > 10000){
            errors.weight = 'El peso no puede superar los 10.000 kilogramos';
        }
    }
    if(form.height){
        if(!/^\d+$/.test(form.height)){
        errors.height = 'La altura debe ser un número';
        }
        if(form.height > 5000){
            errors.height = 'La altura no puede superar los 5.000 metros';
        }
    }
    
        return errors;
}

export default validation;