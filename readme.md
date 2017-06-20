# Financializer

An app to help you plan your investments. Using mock data. 

## Getting started

Clone locally:

Install the Expo Client app on your device:

iOS: https://itunes.apple.com/us/app/expo-client/id982107779?mt=8
Android: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en

Load the app into Expo: https://exp.host/@cavaloni/my-new-project

And Poof! There it is!

## Current Issues

The Redux store setup is causing very slow updates whend adjusting the slider for financial risk, and when calculating the numbers. It could require a second push of the 'calulate' button, but the slider just takes a second to move. Issue is being researched.

### Testing

Testing has not been completed yet, and I am unfamiliar with the process on React Native. From preliminary research, the testing looks quite similar to React for the web. In which case I would use Jest as the main tester and do the following:

-Unit tests for each React Component would have minimally tested for truthiness.
-Snapshot tests would be implemented from this point forward with a working minimum viable product.
-Snapshots of responsiveness would also be used. 

-The primary algortithm would have been tested against specific known output values; which would essentially
be the total amount of the users money mutlipled by the percentage of the category derived from the desired risk level.

### Time alottment

Time taken for each aspect of the work was as follows:

* 4.5 hours (thats right! not a typo!) to setup developer enrionment
* The reason for this was due to two things: 1) Android Studio's notoriously slow download speeds for the required packages. 2) My phone would not show up on the computer side after an hour of debugging into the reason it may be. Then Virtual environments were tried, but both cases (Android Studio, and Genymotion) both resulted in much greater depth needing to discover the reasons why they would not work. In the process I discovered Expo, which is like Ruby on Rails for React Native. Wonderful app that makes developer life easier.
* 6.6 Hours developing/converting from the web version React app to using React Native.
* 1.5 hours of the above time was spent purely learning React-Native, but most of it was mixed with the developmental aspect.

Total time so far: 11 hours
