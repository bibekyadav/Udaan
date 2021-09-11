const mydata=[
    {vehicle_code_1:"sedan",crash_date: "2021/09/01"},
    {vehicle_code_1:"suv",crash_date: "2021/09/02"},
    {vehicle_code_1:"pickup truck",crash_date: "2021/09/03"},
    {vehicle_code_1:"sedan",crash_date: "2021/09/04"},
    {vehicle_code_1:"suv",crash_date: "2021/09/05"},
    {vehicle_code_1:"suv",crash_date: "2021/09/06"},
    {vehicle_code_1:"sedan",crash_date: "2021/09/01"},
    {vehicle_code_1:"sedan",crash_date: "2021/09/02"},
    {vehicle_code_1:"pickup truck",crash_date: "2021/09/03"},
    {vehicle_code_1:"sedan",crash_date: "2021/09/04"},
    {vehicle_code_1:"sedan",crash_date: "2021/09/05"},
    {vehicle_code_1:"sedan",crash_date: "2021/09/01"},
];

/*var user_date;
function userinput(){
    user_date=document.getElementById('userinput').value;
    console.log(user_date);
}
console.log(user_date);*/
var variable;
function wawa() {
    variable = document.getElementById('input_id').value;
    //document.getElementById('alert').innerHTML = 'The user input is: ' + variable;
    console.log(variable);
    const filtered=[];

    for(let i=0;i<mydata.length;i++){
        console.log(variable);
        if(mydata[i].crash_date==variable){
            filtered.push(mydata[i]);
        }
    }

    
    const elements= document.querySelectorAll('.box');
    console.log(elements);

    for(let i=0;i<filtered.length;i++){
        elements[i].textContent=`${filtered[i].vehicle_code_1} ${filtered[i].crash_date}`;
    }


}




//const elements= document.querySelectorAll('.box');
//console.log(elements);




    