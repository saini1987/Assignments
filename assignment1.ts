//1. Temperature of a city in degrees Celsius: 25.5
let temp:number = 25.5;
console.log("Temperature of a city in degrees Celsius: " + temp);


//2. Whether a customer has placed an order: true or false
let orderPlaced:boolean = true;
console.log("Whether a customer has placed an order: " + orderPlaced);


//3. Person's phone number: "123-456-7890"
let phoneNumber:string = "123-456-7890";
console.log("Person's phone number:"+phoneNumber);


//4. Amount of money in a customer's bank account: 1000.50
let bankAccount: number = 1000.50;
console.log("Amount of money in the customer's bank account: " + bankAccount);

//Person's email address: "john.doe@example.com"
let emailAddress: string = "john.doe@example.com";
console.log("Person's email address: " + emailAddress);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
//one way(using tuple)
let location:[latitude: number, longitude: number]=[37.7749,-122.4194]
console.log("Coordinates of a location (latitude, longitude):"+location)

//second way(using array)
let location1:(number|number)[]=[37.7749,-122.4194]
console.log("Coordinates of a location (latitude, longitude):"+location1)

//third way(using object)
interface Location {
  latitude: number;
  longitude: number;
}
let loc: Location = {
  latitude: 37.7749,
  longitude: -122.4194
};
console.log("Coordinates of a location (latitude, longitude): " + loc.latitude + ", " + loc.longitude);

//fouth way(using map)
let locMap: Map<string, number> = new Map();
locMap.set("latitude", 37.7749);
locMap.set("longitude", -122.4194);
console.log("Coordinates of a location (latitude, longitude): " + locMap.get("latitude") + ", " + locMap.get("longitude")); 


//7. Person's marital status: true or false
let perMaritalStatus:boolean = true;
console.log("Person's marital status: " + perMaritalStatus);

//8. Person's occupation: "Software Engineer"
let personOccupation:string = "Software Engineer";
console.log("Person's occupation: " + personOccupation);


//9. Person's favourite colour: "Blue"
let perFavColour:string = "Blue";
console.log("Person's favourite colour: " + perFavColour);

//10.Current year: 2023
//first way
let currentYear:number = 2023;
console.log("Current year: " + currentYear);

// second way
let currentYear1:Date = new Date();
console.log("Current year: " + (currentYear1.getFullYear()-3));

//11.Number of followers on a social media platform: 1,000,000
let followers:number = 1000000;
console.log("Number of followers on a social media platform: " + followers);

//12.Rating of a movie: 7.5
let movieRating:number = 7.5;
console.log("Rating of a movie: " + movieRating);

//13.Person's blood type: 'A'
let perBloodType:string = 'A';
console.log("Person's blood type: " + perBloodType);

//14.Title of a book: "To Kill a Mockingbird"
let bookTitle:string ="To Kill a Mockingbird";
console.log("Title of a book: " + bookTitle);

//15.Number of employees in a company: 500
let numComEmp:number = 500;
console.log("Number of employees in a company: " + numComEmp);

//16.Time of an event: 2:30 PM
//first way
let eventTime:string = "2:30 PM";
console.log("Time of an event: " + eventTime);

//second way
interface evTime{
    hours: number,
    minutes: number,
    meridiem: string
}
let eTime:evTime={
    hours: 2,
    minutes: 30,
    meridiem: "PM"
}   
console.log("Time of an event: " + eTime.hours + ":" + eTime.minutes + " " + eTime.meridiem);

//17.Name of a country: "United States"
let countryName:string = "United States";
console.log("Name of a country: " + countryName);

//18.Person's eye color: "Brown"
let perEyeColor:string = "Brown";
console.log("Person's eye color: " + perEyeColor);

//19.Person's birthplace: "New York City"
let perBirthPlace:string = "New York City";
console.log("Person's birthplace: " + perBirthPlace);

//20. Distance between two cities: 200.5
let distanceBetweenCities:number = 200.5;
console.log("Distance between two cities: " + distanceBetweenCities);

