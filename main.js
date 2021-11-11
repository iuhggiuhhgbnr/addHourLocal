function OnLoad(){
    

    var timeFunction = document.getElementById('timeBut2');
    timeFunction.onclick = addTimePickerVAlue

}

function addTimePickerVAlue(){

    var unconvert = document.getElementById('timeValue');   
    var convert = document.getElementById('convertValue');
    var addHours = document.getElementById('addValue')   
    var picker = document.getElementById('datetimeValue');
     
    var addHoursValue = addHours.value
    var convertInt = parseInt(addHoursValue);

    var pickerValue = picker.value;
    unconvert.innerHTML = pickerValue   //normal

    var addTimePicker =  new Date(pickerValue)
    addTimePicker.setHours( addTimePicker.getHours() + convertInt );  
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(addTimePicker - tzoffset)).toISOString().slice(0, -1);
    
    convert.innerHTML = localISOTime    //convert
}

window.onload=function(){
    OnLoad();
}

