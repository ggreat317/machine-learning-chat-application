# machine-learning-chat-application
A chat application with front end, back end, and ML properties. 

Meant to create user profiles based on clustered message embeddings and promote user interaction with the most similar users.

Already completed:
- most of frontend
- embedding messages, labelling clusters, and presenting 3d profile maps
- most data wiring to mongo and firebase
- hosting on dockerized local and hosting frontend on public firebase

Currently working on:
- api hosting
- cluster averaging and generalizing
- similarity cosines
- better UI
- more data!!!!!

Planning to work on:
- model for user interactions (will replace naive similarity cosines)
- theme change and custom background stickers


The old frontend is under another repo titled "murmur"

To run locally:
 - run "docker compose up --build" in api folder
 - run "npm run dev" in frontend folder
 - go to "https://localhost:3000" 

Test it out and message me on how should upgrade it.