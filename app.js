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

    var pastNamesArray = [];

    var nameOne = document.getElementById('char-name').childNodes[0];
    var nameTwo = document.getElementById('char-name').childNodes[1];

    var list = document.querySelector(".past-names");


    //basic or general functions
    var checkField = function(field){
        for(var i = 0; i < field.options.length; i++){
            if(field.options[i].selected){
                return field.options[i].value;
                break;
            }
        }
    }

    //this function just picks a random item out of an array
    var genName = function(list){
        var num = Math.floor(Math.random() * list.length);
        var name = list[num];

        return name;
    }

    var capitalize = function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    // vanilla version of jQuery's hasClass method
    var checkClass = function(elem, cl){
        for(var i = 0; i < elem.classList.length; i++){
            if(elem.classList[i] == cl) {
                return true;
                break;
            }
        }
    }

    var killKids = function(el){
        while(el.hasChildNodes()){
            list.removeChild(list.firstChild);
        }
    }

    // more specific functions
    //Adds the previous name to the ul stack of names
    var pastNames = function(){
        var oldNameLi, oldName;
        //clear list
        killKids(list);
        if(firstName != undefined && lastName != undefined){
            if(pastNamesArray.length >= 5){
                pastNamesArray.shift();
            }

            pastNamesArray.push(firstName + lastName);

            for(var i = 0; i < pastNamesArray.length; i++){
                oldNameLi = document.createElement("li");
                oldName = document.createTextNode(pastNamesArray[(pastNamesArray.length - i) - 1]);
                oldNameLi.appendChild(oldName);

                list.appendChild(oldNameLi);
            }
        }
    }

    //adds class to lock a name and prevent it from changing
    //set to onclick of nameOne and nameTwo in the bottom
    var lockName = function(){
        if (!checkClass(this, 'locked')){
            this.style.opacity = .5;
            this.classList.add('locked');
        } else {
            this.classList.remove('locked');
            this.style.opacity = 1;
        }

    }

    //the main function that wraps everything else
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

        //updates old names ul with previous name
        pastNames();

        //Updates text nodes with new names if they are not locked
        if(checkClass(nameOne, 'locked') && checkClass(nameTwo, 'locked')){
            alert("You can't generate a new name with both names locked.");
        }

        if (!(checkClass(nameOne, 'locked'))){
            firstName = capitalize(genName(firstNameList)) + " ";
        }
        if(!(checkClass(nameTwo, 'locked'))){
            lastName = capitalize(genName(lastNameList));
        }

        nameOne.innerText = firstName;
        nameTwo.innerText = lastName;
    }

    // Event listeners
    var roll = document.getElementById('roll').onclick = fillName;
    nameOne.onclick = lockName;
    nameTwo.onclick = lockName;
