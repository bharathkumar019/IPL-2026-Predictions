export interface Player {
  name: string;
  teamId: string;
  role: "Batter" | "Bowler" | "All-rounder" | "WK-Batter";
  image: string;
}

// Helper: convert "Rohit Sharma" → "/players/rohit-sharma.png"
const img = (name: string) =>
  `/players/${name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}.png`;

export const batters: Record<string, Player[]> = {
  csk: [
  // Batters
  { name: "Ruturaj Gaikwad",  teamId: "csk", role: "Batter",    image: img("Ruturaj Gaikwad") },
  { name: "MS Dhoni",         teamId: "csk", role: "WK-Batter", image: img("MS Dhoni") },
  { name: "Sanju Samson",     teamId: "csk", role: "WK-Batter", image: img("Sanju Samson") },
  { name: "Dewald Brevis",    teamId: "csk", role: "Batter",    image: img("Dewald Brevis") },
  { name: "Ayush Mhatre",     teamId: "csk", role: "Batter",    image: img("Ayush Mhatre") },
  { name: "Kartik Sharma",    teamId: "csk", role: "WK-Batter", image: img("Kartik Sharma") },
  { name: "Sarfaraz Khan",    teamId: "csk", role: "Batter",    image: img("Sarfaraz Khan") },
  { name: "Urvil Patel",      teamId: "csk", role: "WK-Batter", image: img("Urvil Patel") },
  // All-rounders
  { name: "Anshul Kamboj",    teamId: "csk", role: "All-rounder", image: img("Anshul Kamboj") },
  { name: "Jamie Overton",    teamId: "csk", role: "All-rounder", image: img("Jamie Overton") },
  { name: "Ramakrishna Ghosh",teamId: "csk", role: "All-rounder", image: img("Ramakrishna Ghosh") },
  { name: "Prashant Veer",    teamId: "csk", role: "All-rounder", image: img("Prashant Veer") },
  { name: "Matthew Short",    teamId: "csk", role: "All-rounder", image: img("Matthew Short") },
  { name: "Aman Khan",        teamId: "csk", role: "All-rounder", image: img("Aman Khan") },
  { name: "Zak Foulkes",      teamId: "csk", role: "All-rounder", image: img("Zak Foulkes") },
  { name: "Shivam Dube",      teamId: "csk", role: "All-rounder", image: img("Shivam Dube") },
],
  mi: [
  // Batters
  { name: "Rohit Sharma",        teamId: "mi", role: "Batter",    image: img("Rohit Sharma") },
  { name: "Suryakumar Yadav",    teamId: "mi", role: "Batter",    image: img("Suryakumar Yadav") },
  { name: "Robin Minz",          teamId: "mi", role: "WK-Batter", image: img("Robin Minz") },
  { name: "Sherfane Rutherford", teamId: "mi", role: "Batter",    image: img("Sherfane Rutherford") },
  { name: "Ryan Rickelton",      teamId: "mi", role: "WK-Batter", image: img("Ryan Rickelton") },
  { name: "Quinton de Kock",     teamId: "mi", role: "WK-Batter", image: img("Quinton de Kock") },
  { name: "Danish Malewar",      teamId: "mi", role: "Batter",    image: img("Danish Malewar") },
  { name: "Tilak Varma",         teamId: "mi", role: "Batter",    image: img("Tilak Varma") },
  // All-rounders
  { name: "Hardik Pandya",       teamId: "mi", role: "All-rounder", image: img("Hardik Pandya") },
  { name: "Naman Dhir",          teamId: "mi", role: "All-rounder", image: img("Naman Dhir") },
  { name: "Mitchell Santner",    teamId: "mi", role: "All-rounder", image: img("Mitchell Santner") },
  { name: "Raj Angad Bawa",      teamId: "mi", role: "All-rounder", image: img("Raj Angad Bawa") },
  { name: "Atharva Ankolekar",   teamId: "mi", role: "All-rounder", image: img("Atharva Ankolekar") },
  { name: "Mayank Rawat",        teamId: "mi", role: "All-rounder", image: img("Mayank Rawat") },
  { name: "Corbin Bosch",        teamId: "mi", role: "All-rounder", image: img("Corbin Bosch") },
  { name: "Will Jacks",          teamId: "mi", role: "All-rounder", image: img("Will Jacks") },
  { name: "Shardul Thakur",      teamId: "mi", role: "All-rounder", image: img("Shardul Thakur") },
],
 rcb: [
  // Batters
  { name: "Virat Kohli",      teamId: "rcb", role: "Batter",    image: img("Virat Kohli") },
  { name: "Phil Salt",        teamId: "rcb", role: "WK-Batter", image: img("Phil Salt") },
  { name: "Devdutt Padikkal", teamId: "rcb", role: "Batter",    image: img("Devdutt Padikkal") },
  { name: "Rajat Patidar",    teamId: "rcb", role: "Batter",    image: img("Rajat Patidar") },
  { name: "Jitesh Sharma",    teamId: "rcb", role: "WK-Batter", image: img("Jitesh Sharma") },
  { name: "Jordan Cox",       teamId: "rcb", role: "WK-Batter", image: img("Jordan Cox") },
  // All-rounders
  { name: "Krunal Pandya",    teamId: "rcb", role: "All-rounder", image: img("Krunal Pandya") },
  { name: "Tim David",        teamId: "rcb", role: "All-rounder", image: img("Tim David") },
  { name: "Romario Shepherd", teamId: "rcb", role: "All-rounder", image: img("Romario Shepherd") },
  { name: "Jacob Bethell",    teamId: "rcb", role: "All-rounder", image: img("Jacob Bethell") },
  { name: "Venkatesh Iyer",   teamId: "rcb", role: "All-rounder", image: img("Venkatesh Iyer") },
  { name: "Satvik Deswal",    teamId: "rcb", role: "All-rounder", image: img("Satvik Deswal") },
  { name: "Mangesh Yadav",    teamId: "rcb", role: "All-rounder", image: img("Mangesh Yadav") },
  { name: "Vicky Ostwal",     teamId: "rcb", role: "All-rounder", image: img("Vicky Ostwal") },
  { name: "Vihaan Malhotra",  teamId: "rcb", role: "All-rounder", image: img("Vihaan Malhotra") },
  { name: "Kanishk Chouhan",  teamId: "rcb", role: "All-rounder", image: img("Kanishk Chouhan") },
],
kkr: [
  // Batters
  { name: "Ajinkya Rahane",       teamId: "kkr", role: "Batter",    image: img("Ajinkya Rahane") },
  { name: "Angkrish Raghuvanshi", teamId: "kkr", role: "Batter",    image: img("Angkrish Raghuvanshi") },
  { name: "Manish Pandey",        teamId: "kkr", role: "Batter",    image: img("Manish Pandey") },
  { name: "Rinku Singh",          teamId: "kkr", role: "Batter",    image: img("Rinku Singh") },
  { name: "Rovman Powell",        teamId: "kkr", role: "Batter",    image: img("Rovman Powell") },
  { name: "Finn Allen",           teamId: "kkr", role: "WK-Batter", image: img("Finn Allen") },
  { name: "Tim Seifert",          teamId: "kkr", role: "WK-Batter", image: img("Tim Seifert") },
  { name: "Tejasvi Singh",        teamId: "kkr", role: "WK-Batter", image: img("Tejasvi Singh") },
  { name: "Rahul Tripathi",       teamId: "kkr", role: "Batter",    image: img("Rahul Tripathi") },
  { name: "Cameron Green",        teamId: "kkr", role: "Batter",    image: img("Cameron Green") },
  // All-rounders
  { name: "Anukul Roy",       teamId: "kkr", role: "All-rounder", image: img("Anukul Roy") },
  { name: "Sarthak Ranjan",   teamId: "kkr", role: "All-rounder", image: img("Sarthak Ranjan") },
  { name: "Daksh Kamra",      teamId: "kkr", role: "All-rounder", image: img("Daksh Kamra") },
  { name: "Rachin Ravindra",  teamId: "kkr", role: "All-rounder", image: img("Rachin Ravindra") },
  { name: "Ramandeep Singh",  teamId: "kkr", role: "All-rounder", image: img("Ramandeep Singh") },
],
  srh: [
    // Batters
  { name: "Aniket Verma",           teamId: "srh", role: "Batter",     image: img("Aniket Verma") },
  { name: "Smaran Ravichandran",    teamId: "srh", role: "Batter",     image: img("Smaran Ravichandran") },
  { name: "Travis Head",            teamId: "srh", role: "Batter",     image: img("Travis Head") },

  { name: "Ishan Kishan",           teamId: "srh", role: "WK-Batter",  image: img("Ishan Kishan") },
  { name: "Salil Arora",            teamId: "srh", role: "WK-Batter",  image: img("Salil Arora") },
  { name: "Heinrich Klaasen",       teamId: "srh", role: "WK-Batter",  image: img("Heinrich Klaasen") },

  // All-rounders
  { name: "Harshal Patel",          teamId: "srh", role: "All-rounder", image: img("Harshal Patel") },
  { name: "Kamindu Mendis",         teamId: "srh", role: "All-rounder", image: img("Kamindu Mendis") },
  { name: "Harsh Dubey",            teamId: "srh", role: "All-rounder", image: img("Harsh Dubey") },
  { name: "Brydon Carse",           teamId: "srh", role: "All-rounder", image: img("Brydon Carse") },
  { name: "Shivang Kumar",          teamId: "srh", role: "All-rounder", image: img("Shivang Kumar") },
  { name: "Krains Fuletra",         teamId: "srh", role: "All-rounder", image: img("Krains Fuletra") },
  { name: "Liam Livingstone",       teamId: "srh", role: "All-rounder", image: img("Liam Livingstone") },
  { name: "Abhishek Sharma",        teamId: "srh", role: "All-rounder", image: img("Abhishek Sharma") },
  { name: "Nitish Kumar Reddy",     teamId: "srh", role: "All-rounder", image: img("Nitish Kumar Reddy") },
],
  dc: [
  // Batters
  { name: "KL Rahul",          teamId: "dc", role: "WK-Batter", image: img("KL Rahul") },
  { name: "Karun Nair",        teamId: "dc", role: "Batter",    image: img("Karun Nair") },
  { name: "David Miller",      teamId: "dc", role: "Batter",    image: img("David Miller") },
  { name: "Ben Duckett",       teamId: "dc", role: "WK-Batter", image: img("Ben Duckett") },
  { name: "Pathum Nissanka",   teamId: "dc", role: "Batter",    image: img("Pathum Nissanka") },
  { name: "Sahil Parakh",      teamId: "dc", role: "Batter",    image: img("Sahil Parakh") },
  { name: "Prithvi Shaw",      teamId: "dc", role: "Batter",    image: img("Prithvi Shaw") },
  { name: "Abishek Porel",     teamId: "dc", role: "WK-Batter", image: img("Abishek Porel") },
  { name: "Tristan Stubbs",    teamId: "dc", role: "WK-Batter", image: img("Tristan Stubbs") },
  // All-rounders
  { name: "Axar Patel",        teamId: "dc", role: "All-rounder", image: img("Axar Patel") },
  { name: "Sameer Rizvi",      teamId: "dc", role: "All-rounder", image: img("Sameer Rizvi") },
  { name: "Ashutosh Sharma",   teamId: "dc", role: "All-rounder", image: img("Ashutosh Sharma") },
  { name: "Vipraj Nigam",      teamId: "dc", role: "All-rounder", image: img("Vipraj Nigam") },
  { name: "Ajay Mandal",       teamId: "dc", role: "All-rounder", image: img("Ajay Mandal") },
  { name: "Tripurana Vijay",   teamId: "dc", role: "All-rounder", image: img("Tripurana Vijay") },
  { name: "Madhav Tiwari",     teamId: "dc", role: "All-rounder", image: img("Madhav Tiwari") },
  { name: "Auqib Dar",         teamId: "dc", role: "All-rounder", image: img("Auqib Nabi") },
  { name: "Nitish Rana",       teamId: "dc", role: "All-rounder", image: img("Nitish Rana") },
],
  lsg: [
  // Batters
  { name: "Rishabh Pant",       teamId: "lsg", role: "WK-Batter", image: img("Rishabh Pant") },
  { name: "Aiden Markram",      teamId: "lsg", role: "Batter",    image: img("Aiden Markram") },
  { name: "Himmat Singh",       teamId: "lsg", role: "Batter",    image: img("Himmat Singh") },
  { name: "Matthew Breetzke",   teamId: "lsg", role: "Batter",    image: img("Matthew Breetzke") },
  { name: "Mukul Choudhary",    teamId: "lsg", role: "WK-Batter", image: img("Mukul Choudhary") },
  { name: "Akshat Raghuwanshi", teamId: "lsg", role: "Batter",    image: img("Akshat Raghuwanshi") },
  { name: "Josh Inglis",        teamId: "lsg", role: "WK-Batter", image: img("Josh Inglis") },
  { name: "Nicholas Pooran",    teamId: "lsg", role: "WK-Batter", image: img("Nicholas Pooran") },
  // All-rounders
  { name: "Mitchell Marsh",     teamId: "lsg", role: "All-rounder", image: img("Mitchell Marsh") },
  { name: "Abdul Samad",        teamId: "lsg", role: "All-rounder", image: img("Abdul Samad") },
  { name: "Shahbaz Ahmed",      teamId: "lsg", role: "All-rounder", image: img("Shahbaz Ahmed") },
  { name: "Arshin Kulkarni",    teamId: "lsg", role: "All-rounder", image: img("Arshin Kulkarni") },
  { name: "Wanindu Hasaranga",  teamId: "lsg", role: "All-rounder", image: img("Wanindu Hasaranga") },
  { name: "Ayush Badoni",       teamId: "lsg", role: "All-rounder", image: img("Ayush Badoni") },
],
  rr: [
   // Batters
  { name: "Riyan Parag",            teamId: "rr", role: "Batter",     image: img("Riyan Parag") },
  { name: "Shubham Dubey",          teamId: "rr", role: "Batter",     image: img("Shubham Dubey") },
  { name: "Vaibhav Suryavanshi",    teamId: "rr", role: "Batter",     image: img("Vaibhav Suryavanshi") },
  { name: "Shimron Hetmyer",        teamId: "rr", role: "Batter",     image: img("Shimron Hetmyer") },
  { name: "Yashasvi Jaiswal",       teamId: "rr", role: "Batter",     image: img("Yashasvi Jaiswal") },

  { name: "Donovan Ferreira",       teamId: "rr", role: "WK-Batter",  image: img("Donovan Ferreira") },
  { name: "Lhuan-dre Pretorius",    teamId: "rr", role: "WK-Batter",  image: img("Lhuan-dre Pretorius") },
  { name: "Dhruv Jurel",            teamId: "rr", role: "WK-Batter",  image: img("Dhruv Jurel") },

  { name: "Ravi Singh",             teamId: "rr", role: "Batter",     image: img("Ravi Singh") },
  { name: "Aman Rao Perala",        teamId: "rr", role: "Batter",     image: img("Aman Rao Perala") },

  // All-rounders
  { name: "Yudhvir Singh Charak",   teamId: "rr", role: "All-rounder", image: img("Yudhvir Singh Charak") },
  { name: "Ravindra Jadeja",        teamId: "rr", role: "All-rounder", image: img("Ravindra Jadeja") },
  { name: "Dasun Shanaka",             teamId: "rr", role: "All-rounder", image: img("Dasun Shanaka") },
],
  gt: [
   // Batters
  { name: "Shubman Gill",        teamId: "gt", role: "Batter",     image: img("Shubman Gill") },
  { name: "Glenn Phillips",      teamId: "gt", role: "Batter",     image: img("Glenn Phillips") },

  { name: "Jos Buttler",         teamId: "gt", role: "WK-Batter",  image: img("Jos Buttler") },
  { name: "Kumar Kushagra",      teamId: "gt", role: "WK-Batter",  image: img("Kumar Kushagra") },
  { name: "Anuj Rawat",          teamId: "gt", role: "WK-Batter",  image: img("Anuj Rawat") },
  { name: "Tom Banton",          teamId: "gt", role: "WK-Batter",  image: img("Tom Banton") },

  // All-rounders
  { name: "Nishant Sindhu",      teamId: "gt", role: "All-rounder", image: img("Nishant Sindhu") },
  { name: "Washington Sundar",   teamId: "gt", role: "All-rounder", image: img("Washington Sundar") },
  { name: "Mohd Arshad Khan",   teamId: "gt", role: "All-rounder", image: img("Mohd Arshad Khan") },
  { name: "Sai Kishore",         teamId: "gt", role: "All-rounder", image: img("Sai Kishore") },
  { name: "Jayant Yadav",        teamId: "gt", role: "All-rounder", image: img("Jayant Yadav") },
  { name: "Jason Holder",        teamId: "gt", role: "All-rounder", image: img("Jason Holder") },
  { name: "Sai Sudharsan",       teamId: "gt", role: "All-rounder", image: img("Sai Sudharsan") },
  { name: "Shahrukh Khan",       teamId: "gt", role: "All-rounder", image: img("Shahrukh Khan") },
],
  pbks: [
    // Batters
  { name: "Shreyas Iyer",        teamId: "pbks", role: "Batter",     image: img("Shreyas Iyer") },
  { name: "Nehal Wadhera",       teamId: "pbks", role: "Batter",     image: img("Nehal Wadhera") },
  { name: "Harnoor Singh",       teamId: "pbks", role: "Batter",     image: img("Harnoor Singh") },
  { name: "Pyla Avinash",        teamId: "pbks", role: "Batter",     image: img("Pyla Avinash") },
  { name: "Shashank Singh",      teamId: "pbks", role: "Batter",     image: img("Shashank Singh") },

  { name: "Vishnu Vinod",        teamId: "pbks", role: "WK-Batter",  image: img("Vishnu Vinod") },
  { name: "Prabhsimran Singh",   teamId: "pbks", role: "WK-Batter",  image: img("Prabhsimran Singh") },

  // All-rounders
  { name: "Marcus Stoinis",      teamId: "pbks", role: "All-rounder", image: img("Marcus Stoinis") },
  { name: "Harpreet Brar",       teamId: "pbks", role: "All-rounder", image: img("Harpreet Brar") },
  { name: "Marco Jansen",        teamId: "pbks", role: "All-rounder", image: img("Marco Jansen") },
  { name: "Azmatullah Omarzai",  teamId: "pbks", role: "All-rounder", image: img("Azmatullah Omarzai") },
  { name: "Priyansh Arya",       teamId: "pbks", role: "All-rounder", image: img("Priyansh Arya") },
  { name: "Musheer Khan",        teamId: "pbks", role: "All-rounder", image: img("Musheer Khan") },
  { name: "Suryansh Shedge",     teamId: "pbks", role: "All-rounder", image: img("Suryansh Shedge") },
  { name: "Mitch Owen",          teamId: "pbks", role: "All-rounder", image: img("Mitch Owen") },
  { name: "Cooper Connolly",     teamId: "pbks", role: "All-rounder", image: img("Cooper Connolly") },
  { name: "Ben Dwarshuis",       teamId: "pbks", role: "All-rounder", image: img("Ben Dwarshuis") },
],
};

export const bowlers: Record<string, Player[]> = {
  csk: [
  { name: "Khaleel Ahmed",     teamId: "csk", role: "Bowler", image: img("Khaleel Ahmed") },
  { name: "Noor Ahmad",        teamId: "csk", role: "Bowler", image: img("Noor Ahmad") },
  { name: "Mukesh Choudhary",  teamId: "csk", role: "Bowler", image: img("Mukesh Choudhary") },
  { name: "Spencer Johnson",   teamId: "csk", role: "Bowler", image: img("Spencer Johnson") },
  { name: "Shreyas Gopal",     teamId: "csk", role: "Bowler", image: img("Shreyas Gopal") },
  { name: "Gurjapneet Singh",  teamId: "csk", role: "Bowler", image: img("Gurjapneet Singh") },
  { name: "Akeal Hosein",      teamId: "csk", role: "Bowler", image: img("Akeal Hosein") },
  { name: "Matt Henry",        teamId: "csk", role: "Bowler", image: img("Matt Henry") },
  { name: "Rahul Chahar",      teamId: "csk", role: "Bowler", image: img("Rahul Chahar") },
],
  mi: [
  { name: "Jasprit Bumrah",   teamId: "mi", role: "Bowler", image: img("Jasprit Bumrah") },
  { name: "Trent Boult",      teamId: "mi", role: "Bowler", image: img("Trent Boult") },
  { name: "Deepak Chahar",    teamId: "mi", role: "Bowler", image: img("Deepak Chahar") },
  { name: "Mayank Markande",  teamId: "mi", role: "Bowler", image: img("Mayank Markande") },
  { name: "Ashwani Kumar",    teamId: "mi", role: "Bowler", image: img("Ashwani Kumar") },
  { name: "Mohammad Izhar",   teamId: "mi", role: "Bowler", image: img("Mohammad Izhar") },
  { name: "Raghu Sharma",     teamId: "mi", role: "Bowler", image: img("Raghu Sharma") },
],
  rcb: [
  { name: "Bhuvneshwar Kumar", teamId: "rcb", role: "Bowler", image: img("Bhuvneshwar Kumar") },
  { name: "Josh Hazlewood",    teamId: "rcb", role: "Bowler", image: img("Josh Hazlewood") },
  { name: "Yash Dayal",        teamId: "rcb", role: "Bowler", image: img("Yash Dayal") },
  { name: "Nuwan Thushara",    teamId: "rcb", role: "Bowler", image: img("Nuwan Thushara") },
  { name: "Suyash Sharma",     teamId: "rcb", role: "Bowler", image: img("Suyash Sharma") },
  { name: "Rasikh Dar",        teamId: "rcb", role: "Bowler", image: img("Rasikh Dar") },
  { name: "Jacob Duffy",       teamId: "rcb", role: "Bowler", image: img("Jacob Duffy") },
  { name: "Abhinandan Singh",  teamId: "rcb", role: "Bowler", image: img("Abhinandan Singh") },
],
  kkr: [
  { name: "Vaibhav Arora",        teamId: "kkr", role: "Bowler", image: img("Vaibhav Arora") },
  { name: "Matheesha Pathirana",  teamId: "kkr", role: "Bowler", image: img("Matheesha Pathirana") },
  { name: "Kartik Tyagi",         teamId: "kkr", role: "Bowler", image: img("Kartik Tyagi") },
  { name: "Prashant Solanki",     teamId: "kkr", role: "Bowler", image: img("Prashant Solanki") },
  { name: "Harshit Rana",         teamId: "kkr", role: "Bowler", image: img("Harshit Rana") },
  { name: "Umran Malik",          teamId: "kkr", role: "Bowler", image: img("Umran Malik") },
  { name: "Sunil Narine",         teamId: "kkr", role: "Bowler", image: img("Sunil Narine") },
  { name: "Varun Chakravarthy",   teamId: "kkr", role: "Bowler", image: img("Varun Chakravarthy") },
],
  srh: [
    // Bowlers
  { name: "Pat Cummins",            teamId: "srh", role: "Bowler",     image: img("Pat Cummins") },
  { name: "Zeeshan Ansari",         teamId: "srh", role: "Bowler",     image: img("Zeeshan Ansari") },
  { name: "Jaydev Unadkat",         teamId: "srh", role: "Bowler",     image: img("Jaydev Unadkat") },
  { name: "Eshan Malinga",          teamId: "srh", role: "Bowler",     image: img("Eshan Malinga") },
  { name: "Sakib Hussain",          teamId: "srh", role: "Bowler",     image: img("Sakib Hussain") },
  { name: "Onkar Tarmale",          teamId: "srh", role: "Bowler",     image: img("Onkar Tarmale") },
  { name: "Amit Kumar",             teamId: "srh", role: "Bowler",     image: img("Amit Kumar") },
  { name: "Praful Hinge",           teamId: "srh", role: "Bowler",     image: img("Praful Hinge") },
  { name: "Shivam Mavi",            teamId: "srh", role: "Bowler",     image: img("Shivam Mavi") },
],
  dc: [
  { name: "Mitchell Starc",        teamId: "dc", role: "Bowler", image: img("Mitchell Starc") },
  { name: "T Natarajan",           teamId: "dc", role: "Bowler", image: img("T Natarajan") },
  { name: "Mukesh Kumar",          teamId: "dc", role: "Bowler", image: img("Mukesh Kumar") },
  { name: "Dushmantha Chameera",   teamId: "dc", role: "Bowler", image: img("Dushmantha Chameera") },
  { name: "Lungi Ngidi",           teamId: "dc", role: "Bowler", image: img("Lungi Ngidi") },
  { name: "Kyle Jamieson",         teamId: "dc", role: "Bowler", image: img("Kyle Jamieson") },
  { name: "Kuldeep Yadav",         teamId: "dc", role: "Bowler", image: img("Kuldeep Yadav") },
],
  lsg: [
  { name: "Mohammad Shami",  teamId: "lsg", role: "Bowler", image: img("Mohammad Shami") },
  { name: "Avesh Khan",      teamId: "lsg", role: "Bowler", image: img("Avesh Khan") },
  { name: "M Siddharth",     teamId: "lsg", role: "Bowler", image: img("M Siddharth") },
  { name: "Digvesh Singh",   teamId: "lsg", role: "Bowler", image: img("Digvesh Rathi") },
  { name: "Akash Singh",     teamId: "lsg", role: "Bowler", image: img("Akash Singh") },
  { name: "Prince Yadav",    teamId: "lsg", role: "Bowler", image: img("Prince Yadav") },
  { name: "Arjun Tendulkar", teamId: "lsg", role: "Bowler", image: img("Arjun Tendulkar") },
  { name: "Anrich Nortje",   teamId: "lsg", role: "Bowler", image: img("Anrich Nortje") },
  { name: "Naman Tiwari",    teamId: "lsg", role: "Bowler", image: img("Naman Tiwari") },
  { name: "Mayank Yadav",    teamId: "lsg", role: "Bowler", image: img("Mayank Yadav") },
  { name: "Mohsin Khan",     teamId: "lsg", role: "Bowler", image: img("Mohsin Khan") },
],
  rr: [
    { name: "Jofra Archer",           teamId: "rr", role: "Bowler",     image: img("Jofra Archer") },
  { name: "Tushar Deshpande",       teamId: "rr", role: "Bowler",     image: img("Tushar Deshpande") },
  { name: "Kwena Maphaka",          teamId: "rr", role: "Bowler",     image: img("Kwena Maphaka") },
  { name: "Ravi Bishnoi",           teamId: "rr", role: "Bowler",     image: img("Ravi Bishnoi") },
  { name: "Sushant Mishra",         teamId: "rr", role: "Bowler",     image: img("Sushant Mishra") },
  { name: "Yash Raj Punja",         teamId: "rr", role: "Bowler",     image: img("Yash Raj Punja") },
  { name: "Vignesh Puthur",         teamId: "rr", role: "Bowler",     image: img("Vignesh Puthur") },
  { name: "Brijesh Sharma",         teamId: "rr", role: "Bowler",     image: img("Brijesh Sharma") },
  { name: "Adam Milne",             teamId: "rr", role: "Bowler",     image: img("Adam Milne") },
  { name: "Kuldeep Sen",            teamId: "rr", role: "Bowler",     image: img("Kuldeep Sen") },
  { name: "Sandeep Sharma",         teamId: "rr", role: "Bowler",     image: img("Sandeep Sharma") },
  { name: "Nandre Burger",          teamId: "rr", role: "Bowler",     image: img("Nandre Burger") },
],
  gt: [
     // Bowlers
  { name: "Kagiso Rabada",       teamId: "gt", role: "Bowler",     image: img("Kagiso Rabada") },
  { name: "Mohammed Siraj",      teamId: "gt", role: "Bowler",     image: img("Mohammed Siraj") },
  { name: "Prasidh Krishna",     teamId: "gt", role: "Bowler",     image: img("Prasidh Krishna") },
  { name: "Manav Suthar",        teamId: "gt", role: "Bowler",     image: img("Manav Suthar") },
  { name: "Gurnoor Singh Brar",  teamId: "gt", role: "Bowler",     image: img("Gurnoor Singh Brar") },
  { name: "Ishant Sharma",       teamId: "gt", role: "Bowler",     image: img("Ishant Sharma") },
  { name: "Ashok Sharma",        teamId: "gt", role: "Bowler",     image: img("Ashok Sharma") },
  { name: "Prithvi Raj Yarra",   teamId: "gt", role: "Bowler",     image: img("Prithvi Raj Yarra") },
  { name: "Luke Wood",           teamId: "gt", role: "Bowler",     image: img("Luke Wood") },
  { name: "Rahul Tewatia",       teamId: "gt", role: "Bowler",     image: img("Rahul Tewatia") },
  { name: "Rashid Khan",         teamId: "gt", role: "Bowler",     image: img("Rashid Khan") },
  ],
  pbks: [
    // Bowlers
  { name: "Arshdeep Singh",      teamId: "pbks", role: "Bowler",     image: img("Arshdeep Singh") },
  { name: "Yuzvendra Chahal",    teamId: "pbks", role: "Bowler",     image: img("Yuzvendra Chahal") },
  { name: "Vyshak Vijaykumar",   teamId: "pbks", role: "Bowler",     image: img("Vyshak Vijaykumar") },
  { name: "Yash Thakur",         teamId: "pbks", role: "Bowler",     image: img("Yash Thakur") },
  { name: "Xavier Bartlett",     teamId: "pbks", role: "Bowler",     image: img("Xavier Bartlett") },
  { name: "Pravin Dubey",        teamId: "pbks", role: "Bowler",     image: img("Pravin Dubey") },
  { name: "Vishal Nishad",       teamId: "pbks", role: "Bowler",     image: img("Vishal Nishad") },
  { name: "Lockie Ferguson",     teamId: "pbks", role: "Bowler",     image: img("Lockie Ferguson") },
 ],
};

export const allPlayers: Player[] = [
  ...Object.values(batters).flat(),
  ...Object.values(bowlers).flat(),
].filter((p, i, arr) => arr.findIndex(x => x.name === p.name && x.teamId === p.teamId) === i);