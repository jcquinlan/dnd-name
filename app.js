window.onload = function(){

    var firstNames = 'james ally cole tyler quinn';
    var lastNames = 'quinlan sheehan bush kofron kender';

    firstNames = firstNames.split(' ');
    lastNames = lastNames.split(' ');

    var fName, lName;

    var gender = document.customize.gender;
    var race = document.customize.race;

    var nameOne = document.getElementById('char-name').childNodes[0];
    var nameTwo = document.getElementById('char-name').childNodes[1];

    var checkField = function(field){
        for(var i = 0; i < field.options.length; i++){
            if(field.options[i].selected){
                return field.options[i].value;
                break;
            }
        }
    }

    var genName = function(list){
        var num = Math.floor(Math.random() * list.length);
        var name = list[num];

        return name;
    }

    alert(checkField(race));
}
