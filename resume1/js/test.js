$("#main").append("rose");
var name = "Rose Foster";
var role = "Product Marketing Director"; 
var formattedName= HTMLheaderName.replace ("%data%",name);
var formattedRole= HTMLheaderRole.replace ("%data%",role);
$("#header").prepend(formattedName,formattedRole);

/*var contact =
["7809 Hasentree , Wake Forest,NC","moblie- 847-431-1584"]
var skills =
["Marketing","Finance","Programming"]
var bio= {}
	"name":"Rose Foster",
	"roLe":"Product Marketing Director",
	"contact": contact,
	"picture": "images/me.jpg",	
	"welcome":" Welcome to my resume",
	"skills": skills,
$("#main").append(name);