
//............................................Bio Section..................................................
var bio = {
	 "name": "Rose Foster",
	 "role": "Web Developer",
	 "contacts":
	    {
	     "mobile": "847-4131-584",
		  "email" : "foster_rare@icloud.com",
		  "github": "rosegithub",
		  "twitter": "rosetwitter",
		  "location": "Wake Forest, NC"
	    }, 
	     "welcomeMessage": "Welcome to my Web Page",	
	     		
	     "skills":["Project Management","C","JavaScript","HTML","CSS"],
	     "biopic" : "images/fry.jpg",
	   
 	"display" : function ( ){
       var formattedName = HTMLheaderName.replace("%data%",bio.name);
       var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
       var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
       var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
       var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
       var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
       var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
       var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
       $("#header").prepend(formattedName);
       $("#header").prepend(formattedRole);
       
        var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);

       $("#header").append(formattedPic);
      
       $("#header").append(HTMLskillsStart);
       $("#topContacts").append(formattedMobile);
       $("#topContacts").append(formattedEmail);
       $("#topContacts").append(formattedGithub);
       $("#topContacts").append(formattedTwitter);
       $("#topContacts").append(formattedLocation);
       $("#footerContacts").append(formattedMobile);
       $("#footerContacts").append(formattedEmail);
       $("#footerContacts").append(formattedGithub);
       $("#footerContacts").append(formattedTwitter);
       $("#footerContacts").append(formattedLocation);
       $("#header").append(formattedWelcomeMsg); 
      
       var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
       $("#header").append(formattedSkills);
       var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
       $("#header").append(formattedSkills);
       var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
       $("#header").append(formattedSkills);
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
       $("#header").append(formattedSkills); 
    }    
  };  
  bio.display();
//.........................................Work Section.....................................................

var work = { 
  "jobs":[
   {
    "employer": "X Company",
    "title"   : "Market Manager",
    "dates" : "1997- present",
    "location": "Raleigh, NC ",
    "description": "Responsible for Product Development for AT&T"
   },
   {
      "employer": "Y Company",
    "title"   : "Market Manager",
    "dates" : "1984 - 1997",
    "location": "Chicago, IL",
    "description": "Responsible for Product Development and Marketing for a large Aircraft Company"  
   }
   ],
  
  "displaywork" : function ( ){

    for(job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      //
      var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      //
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      //
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
      }      
  }
};
work.displaywork ();
//..................................Project Section........................................................

var project = {
  "myprojects":[
  {
    "title": "Mock Up",
    "date" : "02/6/2015",
    "description": "Using HTML/CSS style template duplicate a mock-up",
    "image": "images/197x148.gif"

  }
  ],



 "displayproject" : function ( ){
  for(projects in project.myprojects){
    $("#projects").append(HTMLprojectStart);
    //
    var formattedTitle = HTMLprojectTitle.replace("%data%",project.myprojects[projects].title);
    $(".project-entry:last").append(formattedTitle);
    //
    var formattedDates = HTMLprojectDates.replace("%data%",project.myprojects[projects].date);
    $(".project-entry:last").append(formattedDates);
    //
    var formattedDescription = HTMLprojectDescription.replace("%data%",project.myprojects[projects].description);
    $(".project-entry:last").append(formattedDescription);
    //
    var formattedImage=HTMLprojectImage.replace("%data%",project.myprojects[projects].image);
    $(".project-entry:last").append(formattedImage);
  }


 }

};
project.displayproject();

//..................................Education Section........................................................
var education= {
    "schools": [
        {
            "name": "Roosevelt University",
            "location": "Chicago, IL",
            "degree": "BS",
            "major": "Telecommunication",
            "dates": "1995"
        },
        {
            "name": "Indiana University",
            "location": "Bloomington, IN",
            "degree": "BA",
            "major": "Finance",
            "dates": "1982"
        }
    ],
    "onlinecourse": [
        {
            "title": "Java Script",
            "school": "Udacity",
            "dates": "2015"
        },
        {
            "title": "HTML Syntax",
            "school": "Udacity",
            "dates": "2014"
        }

    ],

    "displayEducation": function () {
      for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName. replace("%data%", education .schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree. replace("%data%",education.schools[school].degree);
        var formattedschoolDegree= formattedschoolName + formattedschoolDegree ;
//
        $(".education-entry:last").append(formattedschoolDegree);
        //
        var formattedschoolDate = HTMLschoolDates. replace("%data%",education.schools[school].dates);
        $(".education-entry:last"). append(formattedschoolDate);
        //
        var formattedschoolLocation = HTMLschoolLocation. replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);
        //
        var formattedschoolMajor = HTMLschoolMajor. replace("%data%",education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);
      }
     
      $("#education").append(HTMLonlineClasses);
       
      //
      for (online in education.onlinecourse){
        $(" #education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle. replace("%data%",education.onlinecourse[online].title);
        var formattedonlineSchool = HTMLonlineSchool. replace("%data%", education.onlinecourse[online].school);
        var formattedonlineTitle = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonlineTitle);
        //
        var formattedonlineDates = HTMLonlineDates. replace("%data%",education.onlinecourse[online].dates);
        $(".education-entry:last").append(formattedonlineDates);
      }

      }
    

};
education.displayEducation();
//

$("#mapDiv").append(googleMap);

