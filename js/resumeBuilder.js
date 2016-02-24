/*
This is empty on purpose! Your code to build the resume will go here.
 */

// JSON objects
var bio = {
	"name" : "Carlos A. Gomez",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "(250) 889 3508",
		"email" : "teshima@gmail.com",
		"github" : "cagomezt",
		"twitter" : "@CarGomTe",
		"location" : "Victoria, BC, Canada"
	},
	"welcomeMessage" : "I make things look good",
	"bioPic" : "https://gravatar.com/avatar/f6a12efd57caa9f571ff4a3017ccc33b?s=200",
	"skills" : ["Awesomeness","Programming","Teaching","JS"]
};

var work = {
	"jobs" : [
		{
			"position" : "Research Assistant",
			"company" : "University of Victoria",
			"start" : "September 2012",
			"end" : "December 2015",
			"responsabilities" : "Analysis of communication channels related with Developers (Stack Overflow and Mailing list), conducting surveys, writing papers and blog posts, and designing posters.",
			"location" : "Victoria, BC, Canada"
		},
		{
			"position" : "Backoffice BI y Financiero Software Engineer",
			"company" : "Carvajal Tecnologia y Servicios",
			"start" : "August 2012",
			"end" : "November 2009",
			"responsabilities" : "Software analyst, designer and developer (Oracle forms, Oracle reports and PL/SQL). Assigned to the Sigma project focused on modifying the profit and loss statement (P&L) of the company, and developing the interfaces for the Oracle E-Business suit to reflect the Activity-based costing (ABC) methodology recently adopted by the company.",
			"location" : "Cali, Valle del Cauca, Colombia"
		},
		{
			"position" : "Developer Analyst",
			"company" : "Tecnoquimicas",
			"start" : "November 2009",
			"end" : "May 2007",
			"responsabilities" : "Software analyst, designer and developer (Oracle forms, Oracle reports and PL/SQL). Assigned to the Sigma project focused on modifying the profit and loss statement (P&L) of the company, and developing the interfaces for the Oracle E-Business suit to reflect the Activity-based costing (ABC) methodology recently adopted by the company.",
			"location" : "Cali, Valle del Cauca, Colombia"
		},
		{
			"position" : "Developer Developer",
			"company" : "Universidad Icesi",
			"start" : "May 2007",
			"end" : "March 2006",
			"responsabilities" : "Software analyst, designer and developer (Oracle forms, Oracle reports and PL/SQL). Assigned to the Sigma project focused on modifying the profit and loss statement (P&L) of the company, and developing the interfaces for the Oracle E-Business suit to reflect the Activity-based costing (ABC) methodology recently adopted by the company.",
			"location" : "Cali, Valle del Cauca, Colombia"
		},
		{
			"position" : "IT Support",
			"company" : "Interworld Freight",
			"start" : "December 2006",
			"end" : "June 2005",
			"responsabilities" : "Software analyst, designer and developer (Oracle forms, Oracle reports and PL/SQL). Assigned to the Sigma project focused on modifying the profit and loss statement (P&L) of the company, and developing the interfaces for the Oracle E-Business suit to reflect the Activity-based costing (ABC) methodology recently adopted by the company.",
			"location" : "Cali, Valle del Cauca, Colombia"
		}

	]
};

var education = {
	"schools" : [
		{
			"name" : "University of Victoria",
			"degree" : "MSc",
			"start" : 2012,
			"end" : 2013,
			"location" : "Victoria, BC, Canada"
		},
		{
			"name" : "Universidad del Valle",
			"degree" : "MSc",
			"start" : 2009,
			"end" : 2013,
			"location" : "Cali, Valle del Cauca, Colombia"
		},
		{
			"name" : "Universidad Icesi",
			"degree" : "Business Administration and Computer Systems Engineering",
			"start" : 2000,
			"end" : 2005,
			"location" : "Cali, Valle del Cauca, Colombia"
		}
	],
	"onlineCourses" : [
		{
			"title" : "",
			"school" : "",
			"date" : 2016,
			"url" : ""
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "GTMail",
			"dates" : "January 2015 - February 2015",
			"description" : "",
			"images" : [""]
		}
	]
};

function displayHeader(){
	var formatterName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

	$("#header").prepend(formatterName+formattedRole);
	$('#header').append( HTMLbioPic.replace("%data%", bio.bioPic) );
	$('#header').append( HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage) );

	$("#topContacts").append( HTMLmobile.replace("%data%",bio.mobile) );
	$("#topContacts").append( HTMLemail.replace("%data%",bio.contacts.email) );
	$("#topContacts").append( HTMLgithub.replace("%data%",bio.contacts.github) );
	$("#topContacts").append( HTMLlocation.replace("%data%",bio.contacts.location) );

	if (bio.skills.length > 0){
		$("#header").append( HTMLskillsStart );
		for (var i = 0; i < bio.skills.length; i++){
			$("#skills").append( HTMLskills.replace("%data%",bio.skills[i]) );
		}
	}

}

function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].company);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].start + " - " + work.jobs[job].end);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].responsabilities);

		$(".work-entry:last").append( formattedEmployer + formattedTitle + formattedDates +formattedDescription);
	}
}

function locationizer(work_obj) {
    var locationArray = [];

    for (var i=0; i < work_obj.jobs.length; i++){
        locationArray.push(work_obj.jobs[i].location);
    }
    return locationArray;
}

function inName(full_name){
  var name = full_name.split(" ");

  for (var i=1; i<name.length; i++ ){
    name[i] = name[i].toUpperCase();
  }
  return name.join(" ");
}

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images.length > 0){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

// Init
$('#main').prepend(internationalizeButton);
$('#mapDiv').append(googleMap);

displayHeader();
displayWork();
projects.display();

/*
// Different notations to access objects data ( [] and . )
$("#main").append(work["jobs"][0]["position"]+"<br>");
$("#main").append(educations.schools[0].name);


// Arrays example
var skills = ["awesomeness","programming","teaching","JS"];
var numArray = [1,2,3,4,5]

$("#main").append(skills.length);


// Function example
var finalName = function(str){
	var fullName = str.split(" ");
	fullName[0] = (fullName[0].slice(0,1)).toUpperCase()+fullName[0].slice(1).toLowerCase();
	fullName[1] = fullName[1].toUpperCase();
	return fullName.join(" ");
}

$("#main").append("\t"+finalName("cAmEROn PittMAN"));

// How to call an object.
var audacity = "audacity";

var formatterName = HTMLheaderName.replace("%data%","Carlos A. Gomez");
var formattedRole = HTMLheaderRole.replace("%data%","Software Developer");

$("#header").prepend(formatterName);
$("#header").append(formattedRole);
*/