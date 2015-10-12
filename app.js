window.onload = function(){

    //global variables
    var fhm = 'james cole tyler quinn';
    var lhm = 'quinlan bush kofron kender';
    var fhf = 'ally, clare';
    var lhf = 'sheehan, farrow';

    fhm = fhm.split(' ');
    lhm = lhm.split(' ');
    fhf = fhf.split(' ');
    lhf = lhf.split(' ');

    var fName, lName;

    var gender = document.customize.gender;
    var race = document.customize.race;

    var nameOne = document.getElementById('char-name').childNodes[0];
    var nameTwo = document.getElementById('char-name').childNodes[1];

    //basic functions
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

    var capitalize = function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    var fillName = function(){
        var firstName, lastName;
        switch (gender.value) {
            case 'male':
                firstName = fhm;
                lastName = lhm;
            case 'female':
                firstName = fhf;
                lastName = lhf;
            default:
                break;

        }
        nameOne.innerText = capitalize(genName(firstName)) + " ";
        nameTwo.innerText = capitalize(genName(lastName));
    }

    // Event listeners
    var roll = document.getElementById('roll').onclick = fillName;
}
