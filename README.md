# Countdown Timer for OBS

_Countdown timer for OBS built on HTML, CSS, and Vanilla Javascript._

## Video Walkthrough

**[Installation Tutorial](https://link-url-here.org)**

![Countdown Pic1](https://media.giphy.com/media/ocEGxEShdlyxiwupKm/giphy.gif)

## Project purpose and goals

I wanted a countdown to display when a livestream starts, I found projects in the OBS community tab that were complicated when I just wanted one funtionality: a timer.

## Problems and Thought Process

I started googling how to create an OBS plug-in since I had no idea where to start, after browing the OBS forum I found that you can upload HTML documents to OBS docks and sources. The biggest challenge was figuring out to sync two HTML documents, I discovered the Broadcast Channel API, watched a couple of tutorials and determined this was the best way to connect the two documents.

## Web stack and Explanation

I used vanilla Javascript, HTML, and CSS to create the interface. It was a small project so I figured I could do without React, in hindsight, I should've used React because react hooks would've made changing the state of the timer easier.
