<h1>Glucose-level-application</h1>

<h2>User stories & Wireframe</h2>

As a User, I want to sign up, to manage doctor info and patient glucose level associated with that doctor.

As a User, I want to sign in, to add, remove, update and show all doctors and patient associated with that doctor.

As a User, I want to change password, for security purposes.

As a User, I want to sign out, because I am finished editing doctor/patient information.

As a User, I want to be able to view all the doctors, all the patients that belong to that doctor.

As a User, I want to be able to view a specific patient under their specific doctor and update their glucose levels on date visited.

As a User, I want to be able to remove doctors and patients.

As a User, I want to add new doctors and patients.

https://imgur.com/a/vQ8Udhh

<h2> Repositories for application</h2>
<p>https://github.com/jvo978/glucose-level-client</p>
<p>https://github.com/jvo978/glucose-level-api</p>

<h2>How it Works</h2>
<p>For right now, the application has a single resource (doctor) and user can apply crud action this sources. You can add doctors name, specialty, hospital they work for, and location they work at.  You would sign in and see the doctors and if you have none, a message will display saying you need to add one. Once you do, the information will display and also an edit and delete button appears along with that doctor. When a user clicks the edit button, the information of the targeted doctor will populate into a new form. An update button and cancel button will appear to take place of the edit/ delete. when the user is finished, they will hit update and the information will be updated and the page will re-render to show all doctors.  If the delete button is clicked, the targeted doctor will be deleted and the page re-renders all doctors as well.  There is also a add doctor button that will bring up the form for the user to add new doctors.</p>

<h2>Deployed Sites</h2>
https://glucose-level-api.herokuapp.com/
<br>
https://jvo978.github.io/glucose-level-client/

<h2>What technologies were used:</h2>
<ul>
<li>JavaScript</li>
<li>Ember</li>
<li>Command Terminal</li>
<li>HTML</li>
<li>Handlebars</li>
<li>SCSS</li>
<li>Bootstrap</li>
<li>Google</li>
<li>Stack Overflow</li>
</ul>

<h2>Set up process<h2>
<ul>
<li>Fork & clone ember-auth-template</li>
<li>Removed application.js from .gitignore</li>
<li>Replace template name with project name in a few files instructed from template guide.</li>
<li>npm install</li>
</ul>

<h2>Development Process:</h2>
<ul>
<li>I started with userstories and wireframes.</li>
<li>It was intially easy since we just learned ember in class. However, we had to set the backend ourselves. I generated my doctors route and create-doctor route.</li>
<li>Then I generated the model for doctor and user and connected the relationship with belongTo and hasMany</li>
<li>I made the create form inside the hbs file and had the create action in the form as well. On submit, create-doctor js file creates record on submit</li>
<li>The parent route doctors finds all and returns all doctors</li>
<li>I generated a component called single-doctor that handled displaying the doctors and including the other crud action buttons as well.</li>
<li>I generated a file under single-doctor called form that held a form with values that populated into the field when a user clicks the edit button.</li>
<li>On delete, the targeted doctor will be deleted and the page will render /doctors to show refresh list of doctors.</li>
</ul>

<h2>Future Iteration/ fixed problems</h2>
<ul>
<li>Fix: Have the add button disappear when the doctor form shows up.</li>
<li>Future: create patient for specific doctors</li>
<li>Future: update, show, delete patient associated with doctor</li>
</ul>
