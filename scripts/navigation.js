// Set copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

//Store the selected element to be used 
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

//Toggle the show class off and on 
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

//Course list array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseList = document.getElementById("course-list");
const totalCreditsDiv = document.getElementById("total-credits");

function displayCourses(filtered){
    courseList.innerHTML = "";

    // Display Cards
    filtered.forEach(c => {
        const div = document.createElement("div");
        div.className = "course-card";

        //h4 background changes if completed
        const completedStyle = c.completed ? 'style="background:#4caf50; color:#fff;"' : '';

        div.innerHTML = `
          <h4 ${completedStyle}>${c.subject} ${c.number}</h4>
          <p>${c.title}</p>
          <p><strong>Credits:</strong> ${c.credits}</p>
        `;

        courseList.appendChild(div);
    });

    // Use reduce to calculate total credits
      const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);
      totalCreditsDiv.textContent = `The total credits for courses listed above is: ${totalCredits}`;
}

function filterCourses(subject) {
      if (subject === "All") {
        displayCourses(courses);
      } else {
        displayCourses(courses.filter(c => c.subject === subject));
      }
}

// Display all initially
displayCourses(courses);



