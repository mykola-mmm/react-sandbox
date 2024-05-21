import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let style = { backgroundColor: "red", opacity: 0.5 };
  let style2 = { backgroundColor: "blue", opacity: 0.5  };
  function dosmt() {
    // elem.innerHTML="<sds>"
    // style = {backgroundColor: 'blue'}
    // // elem.innerText="<sds>"
    // let element = document.getElementById("elem")
    // console.log(element.innerHTML)
    // console.log(element.innerText)
    // console.log(element.textContent)

    // elem.textContent="<adas>"
    // elem.setText("<ads>")
    var element = document.querySelector("p");
    console.log(element);
    console.log("");
    var result = document.querySelectorAll("p");
    result.forEach((elem) => {
      console.log(elem);
    });
    div1.appendChild(div2)
    var x = 5;
    // alert(x++);
    // alert(parseInt("ad5.00"));
    // function f(){}
    // if (function f(){}){
    //   alert(typeof(f))
    // }
    // div2.appendChild(div1)
    'use strict';
    // f.call(null);
    console.log(document.forms.myform);

  }

  // function tst(){
  //   var as = document.getElementsByTagName("a");
  //   for (var i = 0; i < as.length; i++) {
  //     as[i].onclick = function() {
  //       console.log(as[i].innerText);

  //     }
  //   }
  // }

  return (
    <>
    <form name="myform">...</form>
    <ul>
      <li><a href="#" onClick={() => console.log(this.innerText())}>A</a></li>
      <li><a href="#">B</a></li>
      <li><a href="#">C</a></li>
    </ul>

    {/* {tst()} */}

      <button id="elem" style={style} onClick={dosmt}>
        <span>sdsd</span>
        <span id="un" style={style2}>
          ad
        </span>
      </button>
      <div id="div1" style={style}>
        div1
        {/* {div = getElementById("div1")} */}
        {/* {console.log(document.getComputedStyle(document.getElementById("div1")).marginTop)} */}
      </div>
      <div id="div2" style={style2}>div2</div>

      <div className="container">
        <header>
          <h1>John Doe</h1>
          <p>Web Developer</p>
        </header>

        <section className="contact">
          <h2>Contact Information</h2>
          <ul>
            <li>Email: john.doe@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 1234 Street Name, City, State, ZIP</li>
          </ul>
        </section>

        <section className="personal-info">
          <h2>Personal Information</h2>
          <ul>
            <li>Date of Birth: January 1, 1990</li>
            <li>Nationality: American</li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/johndoe">
                linkedin.com/in/johndoe
              </a>
            </li>
          </ul>
        </section>

        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Master of Science in Computer Science</h3>
            <p>University Name, Year</p>
          </div>
          <div className="education-item">
            <h3>Bachelor of Science in Information Technology</h3>
            <p>University Name, Year</p>
          </div>
        </section>

        <section className="experience">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <h3>Senior Web Developer</h3>
            <p>Company Name, Year - Present</p>
            <ul>
              <li>
                Developed and maintained web applications using JavaScript,
                HTML, and CSS.
              </li>
              <li>
                Collaborated with designers to create user-friendly interfaces.
              </li>
              <li>Improved website performance and speed by 20%.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Junior Web Developer</h3>
            <p>Company Name, Year - Year</p>
            <ul>
              <li>
                Assisted in the development of web applications and websites.
              </li>
              <li>Performed website maintenance and updates.</li>
              <li>Worked with senior developers to learn best practices.</li>
            </ul>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Angular, Vue</li>
            <li>Node.js, Express</li>
            <li>Database Management (MySQL, MongoDB)</li>
            <li>Version Control (Git, GitHub)</li>
          </ul>
        </section>

        <section className="references">
          <h2>References</h2>
          <p>Available upon request</p>
        </section>
      </div>
    </>
  );
}

export default App;
