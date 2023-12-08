# SPHERENDLY (MARINE & CRISTINA)

App where different business (shops, restaurants, brands...) will be displayed including if they're:

--> Pet-friendly.
--> Child-friendly.
--> Eco-friendly (don't taste in animals, second hand objects, small/local farmers...).
--> Accessibility-friendly (accesssible technology, infrastructure and accommodations).
--> Veg/Vegan-Friendly (vegetarian / vegan products).

# MVP:

// PAGES:

// ANONYMOUS PAGES (EVERYONE CAN SEE THEM):

    [ ] HOMEPAGE with:
    ---> Navbar (Home, Businesses (dropdown menu with categories?), Events, + Business (only active for users), + Events (only active for users), About, Avatar of the user or Log In).
    ---> Title/Logo (navigate to About page if you click on it).
    ---> Brief description of the website.
    ---> Search bar with a dropdown menu with different cities (now: Paris and Burgos) to filter by location:
            Placeholder of dropdown menu --> "Where do you want to explore?"
            Button --> "Let's go!"
    ---> Footer with Copyright and Organisation Logo (navigate to About page if you click on the logo).

    [ ] BUSINESS page with:
    ---> Navbar as before.
    ---> Logo somewhere.
    ---> Brief description like... "Explore businesses, don't forget you can modify the filters to find just what you need".
    ---> Filters bar (by location or type of friendly).
    ---> List of all businesses on the left (card format with fav button, only active for users, if someone clicks and it isn't logged in, the log in form appears).
    ---> Card of each business inside the list, displaying:
        {
            name,
            location,
            typeOfBusiness in images format
        }

    ---> Google maps on the right.
    ---> Footer as before.

    [ ] EVENTS page with:
    ---> Navbar as before.
    ---> Logo somewhere.
    ---> Brief description like... "Explore events, don't forget you can modify the filters to find just what you need".
    ---> Filters bar (by location or type of friendly).
    ---> List of all events on the left (card format with fav button, only active for users, if someone clicks and it isn't logged in, the log in form appears).
    ---> Card of each event inside the list, displaying:
        {
            nameOfTheEvent,
            location,
            date,
            organizer,
            typeOfBusiness in images format
        }
    ---> Google maps on the right.
    ---> Footer as before.

    [ ] ABOUT page with:
    ---> Navbar as before.
    ---> App Logo and description.
    ---> Organisation Logo and description.
    ---> Footer as before.

// PRIVATE PAGES (ONLY USERS CAN SEE THEM):

    [ ] BUSINESS DETAILS page with:
    ---> Navbar as before.
    ---> Logo somewhere.
    ---> Back button.
    ---> Big card with all the details of the business and its location in google maps:
        {
            name,
            location,
            typeOfBusiness in images format,
            contact
        }
    ---> Edit and delete buttons (only active for owners).
    ---> Footer as before.

    [ ] EVENTS DETAILS page with:
    ---> Navbar as before.
    ---> Logo somewhere.
    ---> Back button.
    ---> Big card with all the details of the event and its location in google maps:
        {
            nameOfTheEvent,
            location,
            date,
            organizer,
            price,
            typeOfBusiness in images format,
            contact
        }
    ---> Edit and delete buttons (only active for organizers).
    ---> Footer as before.

// COMPONENTS:

    [X] AllBusinesses
    [X] AllEvents

    [/] DetailsOfBusiness --> Marine
    [/] DetailsOfEvent --> Cris

    ** FOR CREATE AND EDIT COMPONENTS DESIGN WOULD BE NICE TO HAVE THE CREATE/EDIT FORM ON A SIDE, AND THE CARD ON THE OTHER, SO YOU CAN SEE HOW THE CARD WILL LOOK AT THE SAME TIME YOU WRITE. (Render form on one side and Card in the other with real time changes appearing).

    [/] Create Business* --> Marine
    [/] Create Event* --> Marine

    [ ] Edit Business (Dialog?)*
    [ ] Edit Event (Dialog?)*

    [/] Delete Business (and go back to all business page) --> Marine 
    [/] Delete Event (ang go back to all events page) --> Marine

    [/] Log In component with sign up button in case the user is not registered yet : ant library. 

    [ ] Business card.
    [ ] Event card.

    [ ] Filter Businesses.
    [ ] Filter Events.

# IMPROVEMENTS:

[ ] Responsive Design (transform navbar on a sidebar menu for mobiles).

[ ] Protect owner's resource (only give permission to update and delete to the creator of the 'post').

[ ] Have another page for User profile, where the user can edit the info and even delete the profile. In that case, add action to the avatar in navbar, to navigate to this page when clicked.

[ ] Add 'Fav' button to business and event cards, add a fav property to user schema, that would be an array.

[ ] Enable the user to upload an image (Cloudinary).

[ ] GeoJSON.

[ ] Use library Ant Design.

[ ] Loader.jsx / Skeleton. --> Cris

[ ] Title.jsx with title and icon. --> Cris

[ ] Do we need a Context Hook?

[ ] Real time chat???

[ ] typeOfUser: ["owner", "user"].
