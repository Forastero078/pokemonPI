const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;




export default function validate(inputs){

    let errors = {};

if(inputs.name.length > 10) errors.name = 'El nombre no debe exceder los 10 caracteres';

if(!urlPattern.test(inputs.image)) errors.image = 'La imagen debe ser una url';

if(inputs.hp < 0 || inputs.hp > 100) errors.hp = 'La vida maxima es de 100';

if(inputs.attack < 0 || inputs.attack > 100) errors.attack = 'Ataque maximo de 100';

if(inputs.defend < 0 || inputs.defend > 100) errors.defend = 'Defensa maxima de 100';

if(inputs.speed < 0 || inputs.speed > 100) errors.speed = 'Velocidad maxima de 100';

if(inputs.attack < 0 || inputs.attack > 100) errors.attack = 'Ataque maximo de 100';

if(inputs.height < 0) errors.height = 'No se admiten numeros negativos';

if(inputs.weight < 0) errors.weight = 'No se admiten numeros negativos';

return errors;
}