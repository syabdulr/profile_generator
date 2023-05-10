const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, activity, music, meal, food, sport, superpower;

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              superpower = answer;
              
              // Generate the profile paragraph
              console.log(`My name is ${name}, but you can call me "${name.split(" ")[0]}" for short. I enjoy ${activity} and listening to ${music} while doing it. My favorite meal of the day is ${meal}, and my favorite food to eat for that meal is ${food}. My absolute favorite sport is ${sport}. My superpower is ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});


/*

We can ask them the following questions, in order:

What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
That said, feel free to change the narrative if you have better, more interesting questions to ask them.

Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, 
similar to the one shown previously. It should then exit. 
The user would have to rerun the app to go through the process of generating another profile.

*/