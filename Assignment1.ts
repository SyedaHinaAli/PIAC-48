
// Q1 All required software installed
// Q 2
let theName = "Hina Ali"
console.log(" \nQ # 2,\n Hello " +theName+ "  Do you like to learn Python Today?");
// Q 3 to upper lower and title case
function titleCase(myName:string): string{
    let strSplit = myName.toLowerCase().split(' ');
    
    for(let i=0; i<strSplit.length; i++){
       strSplit[i] = strSplit[i].charAt(0).toUpperCase()+strSplit[i].slice(1);


     }
    
    return strSplit.join(' ');

}
 
 console.log("\nQ # 3 \n Here is name in Upper case " , theName.toUpperCase(), " \n Here is same name in lower case", theName.toLowerCase(), "\n  Finaly name in title case through functions", titleCase(theName))

// Q 4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

console.log("\n Q#4 \n William Shakespeare once said, \"All the world’s a stage, and all the men and women merely players.\" ")


// Q 5

let famous_person = " William Shakespeare";
let message = "All the world’s a stage, and all the men and women merely players. ";
console.log("\n Q# 5\n",famous_person+ "once said\, \" " +message +"\" ");

// Q 6
let person_name = "Hina Ali"
console.log("\n Q # 6 \n",person_name)
let white_space = " \t\t\n Hina Ali \t\t"
console.log("\n Q # 6 \n", person_name)

console.log(white_space.trim())
 
// Q 7 and 8 and 10
// this program will represent answer specifically after line break
console.log("\n Q # 7 , 8, 9  \t\t",5+3);
console.log("\n\t\t",10-2);
console.log("\n\t\t", 2*4);
console.log("\n\t\t", 16/2)
// Q 9
let fav_num = 3;
console.log("\n Q # 9 \n My favourite number is ", + fav_num);
// Q 10 comments already added
//Q  11 and 12 Array
let name_array = ['saadia', 'saanina', 'sana', 'sarah']
for(let i=0; i<name_array.length; i++){
   console.log(" \n Q # 11 and 12 \n \t Hi", name_array[i], "How are you ?");
}

//Q 13 transport
let transport_veh = ['Porche', 'Mercedes', 'Ferari']
for(let i=0; i<transport_veh.length; i++){
   console.log("\n Q # 13 \n I will like to drive ", transport_veh[i]);
}
// Q 14   ..
let guest_list = ['saadia', 'saanina', 'sana', 'sarah']
for(let i=0; i<guest_list.length; i++){
   console.log("\n Q # 14,  \n This inivitation is sent to invite Ms ", guest_list[i], " to dinner party");
  }
 
// Q 15 ...
let new_guest = 'Yaqoub'
//remove  a member 
let removed =guest_list.pop()
console.log(guest_list)
guest_list.push(new_guest)
console.log(guest_list)
console.log("\n Q # 15 \n ", removed," was removed from invitation list")

// Another invitation list
console.log("\n Q # 15 \n")
for(let i=0; i<guest_list.length; i++){
   console.log("Greeting !\n \t\t Ms.",guest_list[i], "This inivitation is sent to invite You");
   }


 // Q 16
 console.log("\n Q # 16 \n")
let guest_add = ['Haania', 'Saadia', 'Sumbul']
// Adding data at begning of array
guest_list.unshift(guest_add[0])
console.log("\n ", guest_list)
guest_list.push(guest_add[1])
console.log("\n", guest_list)
let position = guest_list.length/2
guest_list.splice(3,0, 'Sumbul')
console.log(guest_list)

//Q 17 Shrinking list
console.log("\n Q # 17 \n")
let remaining = guest_list.length-2;
while(guest_list.length>2){
      console.log("W’re sorry we can’t invite ", guest_list.pop()," to dinner")
}
console.log(guest_list)
for(let g=0; g<guest_list.length; g++){
   console.log(" Attention Guests You have to attend dinner party", guest_list[g])
}
while(guest_list.length>0){
   guest_list.pop()
}
console.log(guest_list)

// Q 18
console.log("\n Q # 18 \n")
let places_visit = ['KhanaKaba', 'Switzerland', 'US', 'Egypt', 'Quetta'];
console.log(" I want to visis following places :\n");
for(let p=0; p<places_visit.length; p++){
   console.log( "\t\t\t\t\t",places_visit[p])
}
let alpha_palces_visit = places_visit.slice().sort();

console.log(" See alphabatical order of places:\t",alpha_palces_visit)

console.log(" Orignal list of Places: \t\t", places_visit)
// reverse alphabetical 
let reverse_places = places_visit.slice().sort().reverse()
console.log("Now the reverse order \t", reverse_places)
// printing orignal Array
console.log("orignal array again", places_visit)

// reversing and order changing
console.log("REVERSE with order change :  \t", places_visit.reverse())
console.log("ORIGNAL with order change: \t", places_visit.reverse())
console.log(" SORTED with order change : \t", places_visit.sort())
console.log(" REVERSE with order change: \t", places_visit.reverse())
// Q 19 no. of guests as guest list is empty as per requirements therefore I have added anoth guests list
console.log("\n Q # 19 \n")
let the_num_guests = ['A', 'B', 'C', 'D']
console.log("Number of guests are ", the_num_guests.length)

// Q 20 
console.log("\n Q # 20 \n")
let name_city = ['islamabad', 'peshawar', 'Quetta', 'karachi']
console.log("With simple arrays",name_city)
class City_Name {
   city: string[];
   
 }
 // Q 21 
 console.log("\n Q # 21 \n")
 const pt = new City_Name();
 pt.city =  ['islamabad', 'peshawar', 'Quetta', 'karachi'];
console.log("city with object ",pt.city)
 // Q 22
 console.log("\n Q # 22 \n")
 console.log("intentional Error ", name_city[5])
// Q 23
console.log("\n Q # 23 \n")
let car = 'subaru'
let car_capacity = 4
let color = 'red'

console.log(car == 'subaru')
console.log('OR operator test',car=='subaru' || car == 'Nissan')

console.log('AND operator test',car=='subaru' && car_capacity == 4)
car ='Nissan'
console.log('AND operator and inequality test ', car=='Nissan' && car_capacity < 5)
console.log(car=='Nissan')
console.log(car == 'subaru')
console.log(car=='subaru' && color == 'red')
console.log(car=='subaru' && car_capacity == 5)
console.log(car=='Nissan' && car_capacity > 5)
console.log(car=='Nissan' && color == 'blue')
console.log(color=='red' && car_capacity == 5)
// Q 24 
console.log("\n Q # 24 \n")

let required = 'nissan'
let cars = ['nissan', 'alto', 'toyota'] 
for(let c =0; c<cars.length; c++){
   if (cars.indexOf('nissan')>-1 && c==cars.length-1)
       console.log(`To check presence of an Element in array " its Nissan "`)
}

for(let c =0; c<cars.length; c++){
   if ( cars.indexOf('ferrari')>-1&& c==cars.length-1)
      console.log(" ferrari is in list")
   else if(c==cars.length-1)
      console.log (`To check presence of an Element in array " ferrari not in list "`)    
} 
//Q 25 Alien color #1
console.log("\n Q # 25 \n")
let alien_color = 'green'
let score = 0
if(alien_color == 'green'){
   score =5
   console.log("You have gained", score)}
else
   console.log("No output")
// Q 26 Alien color #2
console.log("\n Q # 26 \n")
alien_color = 'green'
if(alien_color == 'green'){
   score =5
   console.log("checking for if case You have gained", score,"points")
}
else
  console.log("you gained 10 points")
 
  // 2nd case failed if
 
  alien_color = 'yellow'
  if(alien_color == 'green'){
     score =5
     console.log("You have gained", score,"points")
  }
  else
    console.log("Checking for else statment you gained 10 points")
  
// Q 27 Alien color 3 through switch statment
console.log("\n Q # 27 \n")
let color_choice = 'green'
switch (color_choice) {
   case 'green':
      console.log(` its first case You have gained  " 5 points "`) 
      break;
   case 'yellow':
      console.log(` You have gained  " 10 points "`)
      break;
   case 'red':
      console.log(` You have gained  " 15 points "`)
      break;

   default:
       console.log("No such color exists!");
       break;
}

// Q 2y 2nd case
color_choice = 'yellow'
switch (color_choice) {
   case 'green':
      console.log(` You have gained  " 5 points "`) 
      break;
   case 'yellow':
      console.log(` It is  2nd case  You have gained  " 10 points "`)
      break;
   case 'red':
      console.log(` You have gained  " 15 points "`)
      break;

   default:
       console.log("No such color exists!");
       break;
}
// Q 26 3rd case
color_choice = 'red'
switch (color_choice) {
   case 'green':
      console.log(` You have gained  " 5 points "`) 
      break;
   case 'yellow':
      console.log(` You have gained  " 10 points "`)
      break;
   case 'red':
      console.log(`It is  3rd case   You have gained  " 15 points "`)
      break;

   default:
       console.log("No such color exists!");
       break;
}

// Q 28 Stages of Life:
console.log("\n Q # 28 \n")
let age = 14
if (age<2)
   console.log(" You are Baby")
else if(age>2 && age<4)
console.log(" You are Toddler")
else if(age>4 && age<13)
console.log(" You are Kid")
else if(age>13 && age<20)
console.log(" You are Teenager")
else if(age>25 && age<65)
console.log(" You are an Adult")
else if(age>=65)
console.log(" You are Elder")

// Q 29 fav fruit
console.log("\n Q # 29 \n")
let fav_fruit = ['apple', 'mango', 'strawberry']
if(fav_fruit.indexOf('apple')!=-1)
   console.log("APPLE is in list of fav fruit")
if(fav_fruit.indexOf('mango')!=-1)
   console.log("MANGO is in list of fav fruit")
if(fav_fruit.indexOf('strawberry')!=-1)
   console.log("STRAWBERRY is in list of fav fruit")
console.log(" Your favourite is ")
for(let i=0; i<fav_fruit.length; i++ ){
   console.log("\t\t\t",fav_fruit[i])
}
// Q 30
console.log("\n Q # 30 \n")
let admin_name = ['admin', 'student', 'teacher', 'staff', 'head']
for(let i=0; i<admin_name.length; i++)
{
   console.log("\t Greeting \t\t", admin_name[i], "You are logged in")
}
for(let i=0; i<admin_name.length; i++)
{ if(admin_name[i]=='admin')
   console.log("\n\n\t Hello !  \t", admin_name[i], "Would you like to see status report")
   else
   console.log("\tThank you ! \t",admin_name[i]," for logging in again")
}
// Q 31
console.log("\n Q # 31 \n")
if(admin_name.length==0)
   console.log("Array is empty ")
else
   console.log("Array is not  empty ")

while (admin_name.length!=0){
   admin_name.pop()
   console.log(admin_name)
}
if (admin_name.length==0)
   console.log("Need to enter somer users role in empty list as length of array is ",admin_name.length)

// Q 32
console.log("\n Q # 32 \n")
let current_user = ['salar', 'umer', 'zuhair', 'mustafa', 'hamza']
let new_user = ['safwan', 'umer', 'sufyan', 'aeman','Salar']
//for(let i=0;i<current_user.length;i++)
   for(let j=0; j<new_user.length; j++){
      new_user[j] = new_user[j].toLowerCase()
      }
   for(let j=0; j<current_user.length; j++)
      if(new_user.indexOf((current_user[j].toLowerCase()))!=-1)
         console.log(`" ${current_user[j] }", You need to enter another user name`)
      else
      console.log(`" ${current_user[j]} " ,this user name is available`)

// Q 33 Ordinal Number
console.log("\n Q # 33 \n")
let ordinal_number = [1,2,3,4,5,6,7,8,9]
for(let i =0; i<ordinal_number.length; i++)
{
   if (ordinal_number[i]==1)
      console.log(`This ordinal number is, ${ordinal_number[i]}st`)
   else if (ordinal_number[i]==2)
      console.log(`This ordinal number is, ${ordinal_number[i]}nd`)
   else if (ordinal_number[i]==3)
       console.log(`This ordinal number is, ${ordinal_number[i]}rd`)
   else
      console.log(`This ordinal number is, ${ordinal_number[i]}th` )
}

//Q 34
console.log("\n Q # 34 \n")
let pizza_name = ['chicken tikka Pizza', 'chicken salami Pizza', 'four season Pizza', 'vegetable Pizza']
console.log("Name of pizzas are :")
for(let i=0; i<pizza_name.length; i++)
{
   console.log("\t\t",pizza_name[i])
}
for(let i=0; i<pizza_name.length; i++)
{
   console.log(`I like ${pizza_name[i]}`)
}
console.log(`
I like pizza a lot. 
Pizza is complete meal,
and we dont need to cook chapati with pizza

`)
//Q 35
console.log("\n Q # 35 \n")
let animals = ['DOG', 'CAT', 'SHEEP']
for(let i=0; i<animals.length; i++)
{
   console.log(`   ${animals[i]}  
   `)
   console.log(` ${animals[i]} , would make a best pet as it can be easily domesticated `)
}
console.log(` 
Any of animals mentioned above could be a very nice pet
They love human and develop bonding with them, they also follow their owner.`)
// Q 36 and 37
console.log("\n Q # 36 and 37  \n")
function make_Tshirt(x, y) {
   let default_message = ' I love Typescript'
   if (x=='M' || x=='L')
      console.log(`Siz of shirt is "${x}", message on shirt is " ${default_message} "`)
   else
      console.log(`Siz of shirt is "${x}", message on shirt is " ${y} "`)


 }
 let x='x' 
 let y = 'I am the BOSS'
 make_Tshirt(x,y)
 // Q 38 
console.log("\n Q # 38  \n")

function describe_city(city_key, city_dic)
{
   
   let default_country = 'Pakistan'

      if(city_dic[city_key]==default_country)
         console.log(` The name of city is  ${[city_key]} and it belongs to default country ",${city_dic[city_name]}`)
      else
      console.log(`Name of city is , ${city_key},  and it belongs to", ${city_dic[city_key]}`)
}
let city_country= {'Peshawar':'Pakistan','Rawalpindi':'Pakistan', 'Lahore': 'Pakistan', 'Dehli':'India' };
let city_name = 'Peshawar'
describe_city(city_name, city_country)
city_name = 'Lahore'
describe_city(city_name, city_country)
city_name = 'Rawalpindi'
describe_city(city_name, city_country)
city_name = 'Dehli'
describe_city(city_name, city_country)
// Q 39 
console.log("\n Q # 39 \n")

function city_countryy(city_key, city_dic)
{
   console.log(` " ${[city_key]},${city_dic[city_name]}"`)
}
city_name='Peshawar'
city_countryy(city_name, city_country)
city_name = 'Lahore'
city_countryy(city_name, city_country)
city_name = 'Rawalpindi'
city_countryy(city_name, city_country)
city_name = 'Dehli'
city_countryy(city_name, city_country)

// Q 40
console.log("\n Q # 40 \n")


function make_album(artist_name:string, album_title:string, track_no=0)
{
   artist=artist_name
   album = album_title
   let dict_object = {};
   
   dict_object['artist']= artist
   dict_object['album']= album_title
   if(track_no!=0)
      dict_object['track'] =  track_no
   return dict_object

}
let artist='sal';
let album='Album of sal';
let album_dict = make_album(artist, album)
console.log(album_dict)
artist='sad';
album='Album of sad';
let album_dict_2 = make_album(artist, album)
console.log(album_dict_2)
artist='Kaifi Khalil';
album='Kahani suno';
let album_dict_3 = make_album(artist, album)
console.log(album_dict_3)
console.log(make_album(artist,album, 3))
//Q 41
console.log("\n Q # 41 \n")

let magacian_name = ['sarmad', 'saleh', 'waleed']

let magacian_name_copy = magacian_name.slice()
console.log("Orignal array")
function display_magician(magacian_name:string[]){
   console.log(" Magician Names are :")
   for(let i=0; i<magacian_name.length; i++)
      console.log("\t\t\t",magacian_name[i])
}
display_magician(magacian_name)
// Q 42
console.log("\n Q # 42 \n")

console.log(" Orignal Array after addition of word Great")
for(let i=0; i<magacian_name.length; i++)

{
   magacian_name[i]='Great '+ magacian_name[i]
}
display_magician(magacian_name)
//Q 43
console.log("\n Q # 43 \n")

console.log(" Copy of Orignal array")
console.log(magacian_name_copy)
//Q 44 
console.log("\n Q # 44 \n")

let sandwich_1 = ['butter', 'mayo', 'chicken', 'egg', 'lettuce']
let sandwich_2 = ['kabab', 'ketchup','jelapeno' ]
let sandwich_3 = ['cream', 'egg', 'onion']

function create_sandwich(sandwich_recipie:string[]){
   let sandwich= sandwich_recipie
   console.log(sandwich)

}
console.log("\n Stated below are 3 different recipie of sandwich")
create_sandwich(sandwich_1)
create_sandwich(sandwich_2)
create_sandwich(sandwich_3)
console.log("\n")
// Q 45 
console.log("\n Q # 45 \n")

function car_info(car_model:string, manufacturer:string){
   let car_dict = {};
   car_dict['car'] = car_model
   car_dict['maker'] = manufacturer
   console.log(car_dict)

}
car_info('2020', 'toyotaz')
function car_info_variable_arguments(...args: string[]){
   let car_dict = {};
   let car_specs = ['car', 'maker', 'color', 'customized', 'country', 'converted', 'roofTop']
   for( let i =0; i<args.length; i++)
      car_dict[car_specs[i]]= args[i]
  
   return (car_dict)

}
console.log(car_info_variable_arguments('1995', 'Nissan', 'Green', 'YES', 'Pakistan','not converted'))