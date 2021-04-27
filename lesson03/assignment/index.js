// Create HTML code from employees JSON
const employeesJSON =
`[
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
  }
 ]`

 const employees = JSON.parse(employeesJSON)

 const container = document.querySelector('.main')

 employees.forEach(function(el) {
	 let div = document.createElement('div')
	 div.setAttribute('class', 'main-container')
	 div.innerHTML = `
	 	<div class='col-left'>
		 <img src='img/headshot.jpg' width='100%' alt='headshot of Paolo Maldini'>
		 <h1>${el.name}</h1>
		 <p>${el.jobTitle}</p>
		</div>

		<div class='right-left'>
		 <p>${el.company}</p>
		 <p>${el.experience}</p>
		 <p>${el.school}</p>
		 <p>${el.major}</p>
		 <p>${el.email}</p>
		 <p>${el.linkedInUrl}</p>
		 <p>${el.codeLanguages}</p>
		</div>
		`
		container.append(div)
	 })

// Constructors code here
 // console.log(employees[0])
