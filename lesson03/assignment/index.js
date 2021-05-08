// Create HTML code from employees JSON
const employees = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  },
];

//create the employees class constructor
 const container = document.querySelector('.main')

 employees.forEach(function(el) {
	 let div = document.createElement('div')
	 div.setAttribute('class', 'main-container')
	 div.innerHTML = `
   	 <div class='col-left'>
		 <img src='img/headshot.jpg' width='100%' alt='headshot of Paolo Maldini'>
		 <h2>${el.name}</h2>
		 <p class='position'>${el.jobTitle}</p>
		</div>

		<div class='col-right'>
		 <p class='card-list'>Company: <span class='card-detail'>${el.company}</span></p>
		 <p class='card-list'>Experience: <span class='card-detail'>${el.experience}</span></p>
		 <p class='card-list'>School: <span class='card-detail'>${el.school}</span></p>
		 <p class='card-list'>Major: <span class='card-detail'>${el.major}</span></p>
		 <p class='card-list'>Email: <span class='card-detail'>${el.email}</span></p>
		 <p class='card-list'>Code Languages: <span class='card-detail'>${el.codeLanguages.join(', ')}</span></p>
     <img class="linkedin-icon" src="img/linkedin.svg" width="32px" alt="linkedin logo"><span>${el.linkedInUrl}</span>
		</div>
  		`

		container.append(div)
	 })

// Constructors code here
 // console.log(employees[0])
