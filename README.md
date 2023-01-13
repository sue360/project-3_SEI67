# project-3_SEI67




ReadMe - GA Project Three: API - 7 days

Description

I created this web app as my third project for General Assembly’s software engineering immersive course. The project brief was to build a simple website integrating learning on the course so far, including JavaScript/REACT, Bootstrap, Mongoose and more, and to create an API, which would seed information to the site; to create an interactive app.

This was a group project, and I collaborated with two other students over seven days. Building this app allowed me to consolidate my learning on databases APIs, and to gain experience using GitHub. It also allowed me to experience working with a larger team, which proved challenging and rewarding. I will discuss the process, results, and key takeaways below.

Deployment link: https://p3seiaiart.herokuapp.com/ 

To access the final web app, please follow the link above. 

Timeframe & Working Team

I worked with two other programmers and spent seven days completing this project.

Technologies Used

JavaScript (ES6)
HTML5
CSS3
React.js
Express
Mongoose
MongoDB
Mocha
Chai
Axios
Git
GitHub
Insomnia
Cloudinary



Brief

The project brief set out necessary features the final app needed to include, to serve as a minimum viable product (MVP).

I’ve included snippets from the brief below:
 

* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.


Planning

Keeping track of our ideas and work streams was important with three of us working together. To make collaborating easier, we made use of a Trello board and a google doc (below),


 as well as slack and zoom to stay in touch. We noted plans for an MVP, and beyond this, our ideas for a more complex product. Initially, we worked together using screen sharing, to set up back end functionality, which allowed us to concentrate on the same challenges at the same time and bounce ideas off each other.

We started by brainstorming ideas for a suitable API to work with, and a user story to shape our app. This was important to pin down as it would help us understand what functionality the app would need, and what styling might be applicable too.   

![trello_board_p3](https://user-images.githubusercontent.com/113911812/212405435-67a17534-40e0-4afb-9e4a-ff5b6484d0c0.png)

We then drafted wireframes (using Excalidraw) of the page layouts the app would include (also below). This proved more complex than in previous projects, as  it needed to include back end connections and functionality (in the table below). We included arrows to show how pages would connect, and how users would navigate through the site.

![p3_wireframe](https://user-images.githubusercontent.com/113911812/212405675-36367fc9-6768-4f35-a712-0fb665508227.png)

We also made use of GitHub, and this took some time to adjust to. Each of us worked on a separate branch, which we initially used for developing front end features, as we worked together on the backend using screen sharing. We divided pages and components amongst ourselves based on what we each wanted to build more experience with. We planned to merge changes once we had finished working on a section of code.

Build

Once the structure for our site was set up, the first step was setting up backend functionality. Working together on this proved useful as we were able to complete this quickly. We tested the database in Insomnia, to make sure CRUD functionality worked, so that the user could Create, Read,Update and Delete content.

As in the code snippet below, ‘console logging’ was essential for this, and helped with problem solving when things did not work as expected.
 
const startServer = async () => {
 try {
   // ! Connect to database
   await mongoose.connect(dbURI)

console.log('======= Database up and running =========')
 
   // ! Middleware
   // * PARSING JSON BODY TO REQ BODY AS JAVASCRIPT OBJECT
   app.use(express.json())
 
   // * LOGGER - EVERY REQUEST METHOD AND URL ARE LOGGED IN THE TERMINAL
   app.use((req, _res, next) => {
     console.log(` ********* REQUEST RECEIVED: ${req.method} - ${req.url} *********`)
     next()
   })
 
   // Router
   app.use('/api', router)
   //new lines for deployment are below
   app.use(express.static(path.join(__dirname, 'client', 'build')))
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
   })
 
   // * CATCHER
   app.use((_req, res) => res.status(404).json({ message: '**** Route not found ****' }))
 
   // ! Start node server / Listen for requests
   app.listen(port, () => console.log(`********🏆 Server running on port ${port} 🏆*******`))
 } catch (err) {
   console.log('=========== Something went wrong when starting the servers =========')
   console.log(err)
 }
}
startServer()
 

We wanted our site to be highly visual, as its theme was AI generated art, but initially, we did not include images in our API. It took slightly longer to understand how to seed images (using Cloudinary), which introduced delays in designing other pages on the app. Once the images were added though, the front end came together quickly. Before this though, we had agreed to divide the work up based on different pages. For example, I set up the navigation bar and the home page, as well as the gallery page. I was also responsible for styling, and for aligning the different pages we had worked on, alongside working together (screen sharing) to ensure the backend routes all worked.
.btn-main {
  background-color: darken($primary, 15%);
 
  &:hover {
    background-color: darken($primary, 20%);
  }
}
As in the code snippet above, using a ‘primary’ colour proved essential for streamlining our different components. It allowed me to set a baseline or reference colour scheme to style other pages to, which proved useful as the difficulties we encountered during merges meant that there was limited time to complete styling.

 With hindsight though, working on different pages and components at once was not the best approach, given the interdependencies between different components, and the challenges we faced using GitHub. It was also difficult to accurately predict how difficult or how time consuming a task might be, so we found that we had not divided tasks up evenly, and there were times when one of us could not make progress as our work was dependent on someone else’s input. For example, I could not complete the ‘gallery’ page until a collaborator had seeded images to our API, and as it was our first time using Cloudinary, and our first time adding images in this way, it took a long time to figure this out. It was also not clear until later that this was a gap in our knowledge. Once we realised it was challenging to do alone, we returned to working together with screen sharing to get the images onto the API. Still, it was useful to experience this way of collaborating by sectioning off parts of a project and piecing them together at a later stage. It might have worked had we been more experienced, and with clearer communication about what we were finding challenging and needed help with.

![p3_gallery1](https://user-images.githubusercontent.com/113911812/212406244-0404117a-e13c-477e-9573-d9378a9ca3ff.png)
![p3_gallery2](https://user-images.githubusercontent.com/113911812/212406248-782a51b3-a6ed-4c35-9fed-53d2242cc2d4.png)
![p3_home](https://user-images.githubusercontent.com/113911812/212406251-e18c0ac6-cca8-4e7a-a5b6-85a974b14b65.png)




Challenges
 

Using GitHub - we encountered many difficulties working with GitHub throughout, including accidentally deleting work early on. We solved this with online guidance, and with support from tutors too.
Fixing bugs! - unexpected bugs slowed us down throughout - we had to refer to notes and take time to work out what had caused bugs during the build.
Navbar - the navbar is currently missing a logout button. Its visual design could also be made more dynamic/responsive.
Visual design - we prioritised building a functional app over design, and lost time towards the end, which meant that there was room for improvement in terms of the app’s final visual appearance, particularly in terms of consistency of submission/upload forms.

Wins

A major win was using Cloudinary to display images from our API. While a collaborator led on this, we all came together to work on this (screen sharing) when it became clear this was more challenging. As my work on the gallery was dependent on having images in our API,  this was a major milestone.
Working through merges to patch our pages together was another major win. Before this project I was somewhat cautious of GitHub - I worried about deleting versions. However, after encountering setbacks (and recovering from them!), such as losing our work early on by accidentally deleting a repository, I enjoyed using GitHub and found it invaluable for backing up changes. By the end of the project using GitHub was instinctive and I understood its value all the more. 


Key Learnings/Takeaways

This was my first experience of working as part of a team, not only in a pair. We all brought different outlooks and ways of working to the project, so it was interesting to see how that affected different aspects of collaborating. For example, I enjoy using project management tools and keeping them up to date even for small achievements, but others preferred a more high level approach, which at times made it difficult to keep track of what stage different aspects of the app were at. I learned to appreciate the benefits of different ways of working too, and will be better placed to anticipate potential challenges in the future, and work in ways to accommodate this.
I learned much about working with GitHub - how to merge versions and work through conflicts, as well as how to manage multiple branches and how starting out with a good GitHub structure can provide more clarity later on.


Bugs
The nav bar is missing a logout button.
It is possible for users to delete or edit other users’ comments/reviews, not just their own.



Future Improvements

I could improve the visual design of the app to make it cleaner and more modern, and make more of the ai and creativity theme.
I could use local storage to allow users to save their favourite works of art.
Could introduce functionality for users to follow each other and chat.
A search page to filter art/content by theme or type.





