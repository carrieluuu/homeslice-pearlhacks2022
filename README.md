# HomeSlice
### *"Helping students find their home away from home."*

<img width="763" alt="search" src="https://user-images.githubusercontent.com/25125692/154850918-a13af1bb-00ec-4be6-a48a-0f0e20146822.PNG">

## Inspiration
As college students, one of the biggest concerns is finding convenient, quality housing for a specific period of time. Transitioning into a completely new environment can already be daunting, but with the addition of having to move away from family and jump headfirst into being an adult can cause stress levels to skyrocket. To make matters worse, rising real estate prices are creating this barrier for students to find good housing and landlords to find good tenants.

On-campus housing can be expensive or unavailable for some, and sometimes it is difficult to find shorter leasing terms or sublets. In unexpected situations like COVID, students are faced with unpredictable circumstances—switching between in-person and online classes with short notices. This led many students to need temporary housing, which is hard to come by.

With HomeSlice, we offer the best quality, on-campus housing, helping students find their home away from home.

## What it does
HomeSlice is a cross-platform web application where users can log in and out, browse listings for off-campus housing, create listings, and view their own listings.

On our home page, we offer an interactive map powered by Google Cloud Platform to return the closest housing option based on the user’s current location. As college students, our main criteria when choosing a place to live is the distance to campus. This rental map helps visualize what’s nearby, so students have a better idea of the community.

On our Listings page, we have compiled a collection of local student housing. These postings contain key information about the housing, including but not limited to address, lease term, number of bedrooms, number of bathrooms, and offered amenities.

We also have an individual listing page for the posts made by users. Here they can view only what they have posted. One goal for HomeSlice was to allow users to interact and give feedback on the places they have stayed so others can learn from their experiences. We added a review section to each listing page.

## How we built it
We used HTML, CSS, Bootstrap, JavaScript, Google Maps API, and an MVC architecture to create the frontend. For the data, we used ‘CockRoachBD’ to store our SQL database. Our database stores information about the host, the property, dates the property is available, images, and the total price of renting the property for the specified time frame.

We used auth0 for user login and sign up and implemented it within our express.js framework. Express.js, ejs, and MVC architecture were used to help with routing and developing this CRUD application. Having controllers, models, views, and routers kept everything organized.

With Google Cloud Platform’s Distance Matrix API, we created an interactive map containing all local student housing options near UNC Chapel Hill and UNC Charlotte. The API allowed for shortest distance calculations by rendering through the given geolocations of housing options and comparing the distance and driving time to UNC Chapel Hill Campus.

## Challenges we ran into
We can definitely say we ran into several challenges during this hackathon, but we are happy with what we were still able to accomplish. One of the main challenges was getting the listing form data to properly be sent to, and stored in, our database. None of our teammates had much experience with databases or using CockroachDB, but through documentation, tutorials, and mentors, we were able to get it working!

Another challenge we faced was internet connection. Our team member who was working on the back end lost internet connection for several hours. With the use of CockroachDB, she was not able to work on it locally with a connection. She was able to obtain a slow connection through her mobile hotspot and was able to get the form completed.

## Accomplishments that we're proud of
Working together with different skills and perspectives, we were able to build most of our ideas in a short amount of time. Our team was made of primarily frontend people and most of us did not have a lot of backend knowledge coming into this hackathon. We are most proud that we took this challenge as an opportunity for greatness and gained backend experience. We had a problem we wanted to solve and didn’t let lack of knowledge stop us.

Going into creating HomeSlice we had a lot of ideas for how we could create a one-stop solution to our own problems experienced as a student. We are proud of our teamwork and how we navigated different tasks like creating our Listings page, utilizing CockRoachDB, and integrating Google Cloud Platform services. On the backend we were able to add user registration functionality, authentication, and creating listings. The database was built using models, successfully rendered test data, and added data to the database via built forms that we were able to connect to the front end!

## What we learned
With HomeSlice, we learned that having a good team with varying passions and strengths always leads to creating a successful project. During the brainstorming phase of this hackathon, we had so many ideas as to how we could introduce innovative features to further HomeSlice. Despite being primarily front-end developers, we took initiative to learn back-end technologies to solve the difficulties young adults face in the real estate industry.

This experience also provided us with an appreciation for product development and the nuances that are essential to create a platform that requires many parts to connect harmoniously. Overall, building HomeSlice has taught us to dream big and achieve more.

## What's next for HomeSlice
The team would love to continue to work on developing additional features for the platform to enhance our user’s experience with the real estate industry. Some possible future additions include:
* Add filtering to our search bar
* Adding update and delete functionality to listings and interactive user comments
* Create a way for users to have conversations through our platform
* Expand the map to show all listings

## Built With
[ auth0 ] [ bootstrap ] [ cockroachdb ] [ css ] [ ejs ] [ express.js ] [ github ] [ google-maps ] [ html5 ] [ javascript ] [ node.js ] [ sql ] [ visual-studio-code ]

## Photo Gallery 
### Home Page
<img width="633" alt="home-top" src="https://user-images.githubusercontent.com/25125692/154850837-fd9ff79f-d364-4ec0-af26-b9cd30e1ec50.PNG">
<img width="879" alt="offers" src="https://user-images.githubusercontent.com/25125692/154851044-94b7d019-373d-42bc-a388-78faf7703e65.PNG">
<img width="610" alt="recs" src="https://user-images.githubusercontent.com/25125692/154851051-898e03d5-da92-407e-9e59-2c5d48f56192.PNG">

### Listings Page
<img width="763" alt="search" src="https://user-images.githubusercontent.com/25125692/154851076-020e6664-8d41-48e9-9e2d-6a2525cae897.PNG">

### Listing Details Page
<img width="759" alt="details" src="https://user-images.githubusercontent.com/25125692/154850995-e28f586c-1fb0-4e9e-8c14-9fb89fbc5689.PNG">
<img width="497" alt="reviews" src="https://user-images.githubusercontent.com/25125692/154851370-a70909e7-7b1c-44de-bdba-e5cf5e6f89a8.PNG">

### Create a Listing Page
<img width="759" alt="create-form" src="https://user-images.githubusercontent.com/25125692/154851029-494d2100-bb41-4169-a117-05ae679682f2.PNG">

### Auth0 for Log In/Sign Up/Logout
<img width="601" alt="auth0" src="https://user-images.githubusercontent.com/25125692/154851125-ab9c8d7b-3baf-4d20-8efe-0cdd5ff772e4.PNG">







