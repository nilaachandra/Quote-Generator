let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    { quote: "I am Iron Man.", person: "Tony Stark - Iron Man (MCU)" },
    { quote: "Avengers, assemble!", person: "Captain America - Avengers: Endgame (MCU)" },
    { quote: "I solemnly swear that I am up to no good.", person: "Harry Potter - Harry Potter series" },
    { quote: "After all this time? Always.", person: "Severus Snape - Harry Potter series" },
    { quote: "Why so serious?", person: "The Joker - The Dark Knight" },
    { quote: "May the Force be with you.", person: "Obi-Wan Kenobi - Star Wars" },
    { quote: "There's no place like home.", person: "Dorothy - The Wizard of Oz" },
    { quote: "Here's looking at you, kid.", person: "Rick Blaine - Casablanca" },
    { quote: "I feel the need... the need for speed.", person: "Maverick - Top Gun" },
    { quote: "To infinity and beyond!", person: "Buzz Lightyear - Toy Story" },
    { quote: "I'm king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "Keep your friends close, but your enemies closer.", person: "Michael Corleone - The Godfather Part II" },
    { quote: "You can't handle the truth!", person: "Colonel Jessup - A Few Good Men" },
    { quote: "Just keep swimming.", person: "Dory - Finding Nemo" },
    { quote: "It's alive! It's alive!", person: "Henry Frankenstein - Frankenstein" },
    { quote: "There's no crying in baseball!", person: "Jimmy Dugan - A League of Their Own" },
    { quote: "You talking to me?", person: "Travis Bickle - Taxi Driver" },
    { quote: "Nobody puts Baby in a corner.", person: "Johnny Castle - Dirty Dancing" },
    { quote: "I see dead people.", person: "Cole Sear - The Sixth Sense" },
    { quote: "I coulda been a contender.", person: "Terry Malloy - On the Waterfront" },
    { quote: "Here's Johnny!", person: "Jack Torrance - The Shining" },
    { quote: "Houston, we have a problem.", person: "Jim Lovell - Apollo 13" },
    { quote: "You're gonna need a bigger boat.", person: "Martin Brody - Jaws" },
    { quote: "Say 'hello' to my little friend!", person: "Tony Montana - Scarface" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "Life is like a box of chocolates.", person: "Forrest Gump - Forrest Gump" },
    { quote: "I'll be back.", person: "The Terminator - The Terminator" },
    { quote: "Go ahead, make my day.", person: "Harry Callahan - Sudden Impact" },
    { quote: "I could dance with you till the cows come home... on second thought, I'd rather dance with the cows till you came home.", person: "Groucho Marx" },
    { quote: "There's a snake in my boots!", person: "Woody - Toy Story" },
    { quote: "Wax on, wax off.", person: "Mr. Miyagi - The Karate Kid" },
    { quote: "There is no place like home.", person: "Dorothy - The Wizard of Oz" },
    { quote: "Elementary, my dear Watson.", person: "Sherlock Holmes" },
    { quote: "There's nothing more deceptive than an obvious fact.", person: "Sherlock Holmes" },
    { quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", person: "Albus Dumbledore - Harry Potter and the Sorcerer's Stone" },
    { quote: "The ones that love us never really leave us.", person: "Sirius Black - Harry Potter and the Prisoner of Azkaban" },
    { quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.", person: "Albus Dumbledore - Harry Potter and the Prisoner of Azkaban" },
    { quote: "I am Groot.", person: "Groot - Guardians of the Galaxy (MCU)" },
    { quote: "I could do this all day.", person: "Captain America - Captain America: The Winter Soldier (MCU)" },
    { quote: "I'm just a girl, standing in front of a boy, asking him to love her.", person: "Anna Scott - Notting Hill" },
    { quote: "Why do we fall, sir? So that we can learn to pick ourselves up.", person: "Alfred - Batman Begins" },
    { quote: "The stuff that dreams are made of.", person: "Sam Spade - The Maltese Falcon" },
    { quote: "You had me at 'hello.'", person: "Dorothy Boyd - Jerry Maguire" },
    { quote: "I am serious. And don't call me Shirley.", person: "Dr. Rumack - Airplane!" },
    { quote: "To the stars and beyond.", person: "Buzz Lightyear - Toy Story" },
    { quote: "I'm not bad. I'm just drawn that way.", person: "Jessica Rabbit - Who Framed Roger Rabbit" },
    { quote: "I have a bad feeling about this.", person: "Multiple characters - Star Wars" },
    { quote: "You are a toy!", person: "Woody - Toy Story" },
    { quote: "Nobody's perfect.", person: "Osgood Fielding III - Some Like It Hot" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
    { quote: "I'm the king of the world!", person: "Jack Dawson - Titanic" },
  ];

  btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
  })
  