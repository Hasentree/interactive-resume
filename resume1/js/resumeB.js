
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
		  "location": "North Carolina"
	    }, 
	     "welcomeMeassage": "Welcome to my Web Page",	
	     		
	     "skills":["C","JavaScript","HTML","CSS"],
	     "biopic" : "images/fry.jpg",
	    
 	"display" : function ( ){
       var formattedName = HTMLheaderName.replace("%data%",bio.name);
       var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
       var formattedMobile = HTMLrmobile.replace("%data%",bio.contacts.mobile);
       var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
       var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
       var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
       var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.locatipon);
       var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
       $("#header").prepend(formattedName);
       $("#header").prepend(formattedRole);
       var formattedPicture = HTMLbiopic.replace("#%data%",bio.biopic);
       $("#header").append(formattedPicture);
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
       
       
       $("#header").append(HTMLskillsStart);
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


var work =	"jobs":[
	 {
	  "employer": "X Company",
	  "title"   : "Market Manager",
	  "dates" : "2002 - 2005",
	  "location": "Chicago, Il ",
	  "description": "Responsible for Product Development Larger Aricraft"
	 },
	 {
      "employer": "Y Company",
	  "title"   : "Market Manager",
	  "dates" : "2005 - present",
	  "location": "Wake Forest, NC. ",
	  "description": "Responsible for Product Development Telicommunication"	
	 }
    ]
 };
	
	function displaywork(){

		for(job in work.jobs){
			$("#WorkExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			//
			var formattedLocation = HTMLLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			//
			var formattedDates = HTMLDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			//
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
	    }   	
	
}
displaywork();
//..................................Education Section........................................................





