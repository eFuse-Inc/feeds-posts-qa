# Feeds Posts QA Engineer Take Home Project

This project is a feeds posting application. This project has a couple intentional bugs that we will need you to Identify, document and fix. Below are some things we would like to see.

## How to Get Started Locally

- Clone the repo locally

- from the root of the directory run `npm install`

- After that completes run `npm start` 

- You can then navigate in your browser to `http://localhost:3000/` and the app should be running there

## Example Design

![Alt text](src/photos/image.png?raw=true "Title")

## Project Tasks

- Resolve all known bugs listed below.

- Please document a test plan on how this project should work. 

- Any bugs that you come across in this project please document.

- Any bugs that are resolved in this project please document how you approached fixing the bug and what the solution was.

**Bonus Points**: Resolve any other bugs that you find!

### Known Bugs In Project:

- The post button has a text value of `Post` and not `Post It`

- When the user types the text into the `what is on your mind?` section the button does not show as enabled

- After the user types the text into the `what is on your mind?` section and hits the post it button the text is not cleared and `what is on your mind?` does not display again

- The created post is shifted to the right and not center under the `what is on your mind?` section

- When the user hits the Like button it throws an error in console `ERROR WHEN USER IS LIKING POST`

### Expected functionality:

- The designs match the provided mockup

- There should be a button to allow users to post after typing what is on their mind and has text `Post It`

- The `Post It` button should be grayed out when no value is typed in the `What is on your mind?`

- A user is able to type in the `What is on your mind?` input and hit the post it button to create a post. The `Post It` button should be enabled and a dark blue color once the field has a value.

- A post should be generated directly below the `What is on your mind?` area.

- A user is able to hit the `Like` button on a post that was created and it will like/unlike the post. Filling in the color of heart with a blue color when liked and white when not liked.


### When You Are Finished!

- Email a zipped folder of your work with the convention <Lastname_Firstname-efuse-work-sample-QA.zip> to your recruiter. Meaning, for Caleb Quinn:
Quinn_Caleb-efuse-work-sample-QA.zip