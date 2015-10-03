var names = 'james ally cole tyler quinn';
names = names.split(' ');

var roll = document.getElementById('roll');
var name = document.getElementById('char-name');

var gender = document.customize.gender;
var race = document.customize.race;

var checkGender = function(){
    for(var i = 0; i < gender.options.length; i++){
        if(gender.options[i].selected){
            return gender.options[i].value;
            console.log(gender.options[i].value);
            break;
        }
    }
}

roll.addEventListener('click', checkGender);
