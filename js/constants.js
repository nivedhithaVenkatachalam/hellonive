let detailedIntro = [];
detailedIntro.push("I finished my internship as a Software Engineer at Flow Labs (Sunnyvale, CA), a startup, in December 2016. I developed a dashboard to visualize IoT sensor data using responsive and scalable technologies such as ReactJS, MeteorJS, Sass, D3.JS.");
detailedIntro.push("I did my summer internship as an user interface developer at Pulse Secure (San Jose, CA). I used HTML5, SCSS and AngularJS to create a new module for an enterprise application. I also worked full time at Cognizant Technology Solutions (Chennai, India) for 2 years 9 months in application development and support.");
detailedIntro.push("My interests are in web application development, data analytics and cloud technologies. I am eager to take up new challenges which motivate me to learn new technologies and broaden my knowledge.");
let dIntroP = document.getElementsByClassName("d-intro");
//console.log(dIntroP);
for(let i=0; i<dIntroP.length;i++){
  //console.log(i+detailedIntro[i]);
  dIntroP[i].innerHTML = detailedIntro[i];
}
