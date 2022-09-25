/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"

}
console.log("ISS Latitude: "+iss_location.iss_position.latitude)
console.log("ISS Longitude: "+iss_location.iss_position.longitude)

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}
rates["CHF"] = 1.1787
// convert 100 Euros to AUD
let euros = 100
let exchange_to = "AUD" // define as variable for ease of changing to input
let exchange_calc = euros*rates[exchange_to]
let exchange_formatted = exchange_calc.toFixed(2)
console.log(`${euros} Euros yields ${exchange_formatted} ${exchange_to}.`)
// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)

let max_rate = 0    // create variables to hold the max rate and its currency while looping through object
let max_rate_currency = ""
for (currency in rates) {  // for each currency, check if its exchange rate is higher than what has been stored
    if (rates[currency] > max_rate)
        {max_rate = rates[currency]
        max_rate_currency = currency}
}
console.log(`The highest exchange rate is ${max_rate_currency} at ${max_rate} for 1 Euro.`)

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */


let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]
// cats_and_owners is an array of objects
// cats_and_owners[0] = { name: "Bill Clinton", cat: "Socks" }
// cats_and_owners[0].name or cats_and_owners[0]["name"] = "Bill Clinton"
// cats_and_owners[0].cat = "Socks"

let testName = "Gary Oldman"
// console.log(testName)

cats_and_owners.forEach(cat_owner_pair => {
  let ownerName=cat_owner_pair.name
  let catName=cat_owner_pair.cat
  // console.log(ownerName, catName)
  if (ownerName == testName) {
    targetCatName = catName;
    console.log(`The name of ${testName}'s cat is ${targetCatName}.`)}
}) // close forEach

let newCat = {"name": "Taylor Swift", "cat": "Meredith"}
cats_and_owners.push(newCat)
console.log(`${newCat.name}'s cat ${newCat.cat} has been added to the list.`)

cats_and_owners.forEach(cat_owner_pair => {
  ownerName=cat_owner_pair.name
  catName=cat_owner_pair.cat
  console.log(`${ownerName}'s cat is named ${catName}.`)
})

// TODO print Gary Oldman's cat's name
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */
let nobel_prize_winners_2017 = {
  //nobel_prize_winners_2017.prizes is an array of objects
  //       let Prizes = nobel_prize_winners_2017.prizes
  // each object has keys: year, category, laureates
  //       Prizes.forEach(prize_category =>  {
  //       console.log(prize_category.category)
  // laureates is an array of objects
  // objects in laureates have keys: id, firstname, surname, motivation, and share
  //         if (prize_category == targetCategory) {
  //              let firstName=Prizes.prize_category.laureates["firstname"]
  //

  "prizes":[  // this level has been assigned to var Prizes
    {   "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}
// if variables are defined here for the first time, they can be accessed after the loop.
// if defined in the loop, they can only be accessed there.
let Prizes = nobel_prize_winners_2017.prizes
let prizeCount = 0
let targetCategory = "literature"
let targetCategory2 = "physics"
let firstName=""
let surName=""
let laureates2 = []
let allLaureates = []
let nobelLaureateCount = 0

console.log("The categories for the Nobel prizes are:")

// loop through prizes array with forEach, logging each prize category and counting
Prizes.forEach(prize_category =>  {
  console.log(prize_category.category)
  // while looping, also collect the other information needed
  allLaureates.push(prize_category.laureates)
  nobelLaureateCount = nobelLaureateCount + prize_category.laureates.length
  // console.log(allLaureates.length) // = 6 number of categories
  if (prize_category.category == targetCategory) {
    // console.log("You found the target category, good luck getting the laureate names.")
    let jsonLocation=prize_category.laureates[0]
    // console.log(jsonLocation)
    firstName=jsonLocation.firstname
    // console.log(firstName)
    surName=jsonLocation.surname
    // This will return the first laureate if the target category has more than 1
    // Nobel prize in literature has only been shared 4 times in over 100 years.
    // for returning more than one, rewrite this IF like the physics one.
  } // close if
  if (prize_category.category == targetCategory2) {
    // console.log("You found the second target category.")
    laureates2 = prize_category.laureates // array of objects
  } // close if
  prizeCount ++
}) // close forEach prize_category

console.log(`There are ${prizeCount} prize categories.`)
console.log(`The 2017 Nobel prize for ${targetCategory} was awarded to ${firstName} ${surName}.`)
// console.log(laureates2)
console.log(`The laureates for the Nobel prize in ${targetCategory2} were: `)
laureates2.forEach(laureate => {
  console.log(laureate.firstname + " "+ laureate.surname)
}) // close laureates2.forEach

console.log(`There were ${nobelLaureateCount} Nobel laureates in 2017.`)

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO print the full name of the Literature Nobel laureate.

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
