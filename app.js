window.onload = function(){

    var firstNames = 'james ally cole tyler quinn';
    var lastNames = 'quinlan sheehan bush kofron kender';

    firstNames = firstNames.split(' ');
    lastNames = lastNames.split(' ');

    var fName, lName;

    var gender = document.customize.gender;
    var race = document.customize.race;

    var checkGender = function(){
        for(var i = 0; i < gender.options.length; i++){
            if(gender.options[i].selected){
                return gender.options[i].value;
                break;
            }
        }
    }

    var checkRace = function(){
        for(var i = 0; race.options.length; i++){
            if(race.options[i].selected){
                return race.options[i].value;
                alert('BLAH');
                break;
            }
        }
    }

    var genName = function(){
        var num1 = Math.floor(Math.random() * firstNames.length);
        var num2 = Math.floor(Math.random() * lastNames.length);

        var fName = firstNames[num1];
        var lName = lastNames[num2];

        return fName + " " + lName;

    }

    //onload test function
    alert('yo!');
}
