let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function study(students){
    for(var i = 0; i<students.length; i++){
        console.log("Name: " + name + ", " + "Cohort: " + cohort);
    }

}
[0][i]
function workers(users){
    console.log("EMPLOYEES");
    for (var i=0; i<users.employees.length; i++){
        var str = i.first_name + i.last_name;
        console.log(i + ' - ' + i.last_name + ', ' + 'i.first_name' + ' - ' + str.length);
    }
    console.log("MANAGERS");
    for (var h=0; i<users.managers.length; i++){
        var str = i.first_name + i.last_name;
        console.log(i + ' - ' + i.last_name + ', ' + 'i.first_name' + ' - ' + str.length);
    }
}