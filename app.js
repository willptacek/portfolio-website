//will ptacek
//proj created 7/29/2020

// arrow image querys
const topArrow = document.querySelector('.arrow-top');
const botArrow = document.querySelector('.arrow-bot');

// nav querys
// this is probably extremely inefficient but idk a better way
const aboutNav = document.querySelector('.flex-container-navbar p:nth-child(1)');
const eduNav = document.querySelector('.flex-container-navbar p:nth-child(2)');
const skillNav = document.querySelector('.flex-container-navbar p:nth-child(3)');
const workNav = document.querySelector('.flex-container-navbar p:nth-child(4)');
const proj1Nav = document.querySelector('.flex-container-navbar p:nth-child(5)');
const proj2Nav = document.querySelector('.flex-container-navbar p:nth-child(6)');
const intNav = document.querySelector('.flex-container-navbar p:nth-child(7)');

//link querys
const linkedinAbout = document.querySelector('#linkedinAbout');
const githubAbout = document.querySelector('#githubAbout');
const proj1Psd = document.querySelector('.proj1');
const proj2Psd = document.querySelector('.proj2');

linkedinAbout.style.display = 'block';
githubAbout.style.display = 'block';
topArrow.style.display = 'none';



// text querys
let boxText = document.querySelector('#box p');
let descriptionText = document.querySelector('#right-text p');

//variable for navigate function
let navPos;

//descriptions
const aboutDescription = `william (will) ptacek is a current junior at fordham university looking to become a full time web developer in the future`;
const eduDescription = `saint ignatius college prep (3.5 gpa) aug 2014 - may 2018
fordham university lincoln center (current gpa: 3.65) aug 2018 - may 2022 (expected)`;
//todo : make skill description more comprehensive
const skillDescription = 'proficient in adobe photoshop, c++, html5, and css3.  intermediate knowledge of vanilla javascript. beginner understanding of python, react.js and c#.';
const workDescription = `logistics coordinator @ magna transport solutions, chicago IL(may - august 2019)
tracked up to 40 shipments per day through calling and emailing over 30 trucking carriers. input shipment specific information into a transport management software to enable swift tracking after hours. used a transport management software to update shipments with locations received from trucking carriers. coordinated information about shipments to three different departments within the company.`;
const proj1Description = `this portfolio website.  created wireframe mockup in photoshop first, then coded in pure html, css, and javascript.  started work july 29 2020, completed july 29 2020. `
const proj2Description = `currently under development.  created wireframe mockup in photoshop in may 2020.  project is named ‘recovered.media’, a virtual gallery space to host 6 of my photographs.`;
const intDescription = 'i am interested in the design aspect of web development and how websites can be their own art form themselves.  i love graphic design and its relationship to technology as well.  i like to skateboard, listen to new music, and play league of legends on the side.';

const descriptionList = [aboutDescription, eduDescription, skillDescription, workDescription, proj1Description, proj2Description, intDescription];


// position + categories control the text in the left box.  will be constantly updating 'position' and using function 'updateLeftBox' to keep track of what category the user is currently in
let position = 0;
const categories = ['about' , 'education', 'skills', 'work experience', 'web project 01', 'web project 02', 'interests'];

//event listeners
topArrow.addEventListener('click', cycleUp);
botArrow.addEventListener('click', cycleDown);
aboutNav.addEventListener('click', navigate);
eduNav.addEventListener('click', navigate);
skillNav.addEventListener('click', navigate);workNav.addEventListener('click', navigate);
proj1Nav.addEventListener('click', navigate);
proj2Nav.addEventListener('click', navigate);
intNav.addEventListener('click', navigate);

function clearLinks() {
  linkedinAbout.style.display = 'none';
  githubAbout.style.display = 'none';
  proj1Psd.style.display='none';
  proj2Psd.style.display='none';
}

function determineLinks(posNum) {
  if(posNum != 0) {
    topArrow.style.display = 'block';
  }
  if(posNum != 6) {
    botArrow.style.visibility = 'visible';
  }
  switch (posNum){
    case 0:
      topArrow.style.display = 'none';
      linkedinAbout.style.display = 'block';
      githubAbout.style.display = 'block';
      break;
    case 4:
      proj1Psd.style.display='block';
      break;
    case 5:
      proj2Psd.style.display='block';
      break;
    case 6:
      botArrow.style.visibility = 'hidden';
  }
}

function cycleDown(){
  if(position != 6){
    position++;
    clearLinks();
    updateLeftBox();
    updateRightBox();
    determineLinks(position);
  }
}

function cycleUp(){
  if(position != 0) {
    position--;
    clearLinks();
    updateLeftBox();
    updateRightBox();
    determineLinks(position);
  }
}

function navigate(e) {
  clearLinks();
  navPos = e.target.innerText;
  for(i = 0; i < categories.length; i++){
    if(navPos === categories[i]){
      position = i;
      updateLeftBox();
      updateRightBox();
      determineLinks(i);
    }
  }
}

function updateLeftBox(){
  boxText.innerText = categories[position];
}

function updateRightBox(){
  descriptionText.innerText = descriptionList[position];
}