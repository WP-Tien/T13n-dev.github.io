<script>

    var myArray = []; // empty array

    // An array is a set of variables: 
    var favoriteFruits = ["apple", "orange", "strawberry"];
    var carsInParkingLot = ["Toyota", "Ferrrari", "Lexua"];
    var employees = ["Billy", "Bob", "Joe"];
    var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    var randomVariables = [2, "any type works", undefined, null, true, 2.51];
    console.log( randomVariables );

    myArray = ["zero", "one", "two"];
    window.alert( myArray[0] ); // 0 is the first element of an array
                                // in this case, the value would be "zero"
    myArray = ["John Doe", "Billy"];
    elementNumber = 1;

    window.alert(myArray[elementNumber]); // Billy 

    // An Object is a group of values; unlike arrays, we can do something better than theme
    myObject = {};
    john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };
    billy = {
        firstname: 'Billy',
        lastname: undefined,
        fullname: 'Billy'
    };

    window.alert(john.fullname); // John Doe
    window.alert(billy.firstname); // Billy

    // rather than making an array["John Doe", "Billy"] and calling myArray[0], we can just call john.fullname and billy.fullname

</script>