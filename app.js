window.onload = function(){

    //global variables
    var fhm = 'james cole tyler quinn';
    var lhm = 'quinlan bush kofron kender';
    var fhf = 'ally clare';
    var lhf = 'sheehan farrow';

    fhm = fhm.split(' ');
    lhm = lhm.split(' ');
    fhf = fhf.split(' ');
    lhf = lhf.split(' ');

    var firstNameList, lastNameList;

    var firstName, lastName;

    var nameOne = document.getElementById('char-name').childNodes[0];
    var nameTwo = document.getElementById('char-name').childNodes[1];


    //basic or general functions
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

    var checkClass = function(el, cl){
        var elem = document.querySelector(el);
        for(var i = 0; i < elem.classList.length; i++){
            if(elem.classList[i] == cl) {
                return true;
                break;
            }
        }
    }

    // more specific functions
    var pastNames = function(){
        var list = document.querySelector(".past-names");
        var oldNameEl = document.createElement("li");
        var oldName = document.createTextNode(firstName + lastName);
        oldNameEl.appendChild(oldName);
        list.appendChild(oldNameEl);
    }

    var fillName = function(){
        var gender = checkField(document.customize.gender);
        var race = checkField(document.customize.race);

        switch (gender) {
            case 'male':
                firstNameList = fhm;
                lastNameList = lhm;
                break;
            case 'female':
                firstNameList = fhf;
                lastNameList = lhf;
                break;
            default:
                break;

        }


        firstName = capitalize(genName(firstNameList)) + " ";
        lastName = capitalize(genName(lastNameList));

        nameOne.innerText = firstName;
        nameTwo.innerText = lastName;

        pastNames();

        alert(checkClass(".nav-wrapper", "blah"));
    }

    // Event listeners
    var roll = document.getElementById('roll').onclick = fillName;
}
