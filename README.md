# Introduction
This is just a simple Android Application to showcase my resume

# Technology
* React Native

# It's open for everyone
If you feel like cloning and make changes to the code, and use it on your own, feel free to do so.
This is however, a Work-in-Progress. There's still a lot more to be added (besides my information, of course).

If you have any suggestion or recommendation, or anything, just drop a comment in the Issues section, with appropriate label and we'll see how it goes.
Follow the Installation instruction below, if you're interested in cloning this app.

Cheers.
<br/>Ikhwan.

# Installation
## Pre-requisite
You should have these installed in your machine Doesn't matter whether it's Global or Local installation.

* [node, npm](https://nodejs.org/en/download/)
* [react-native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Android Studio](https://developer.android.com/studio/install.html)
* Android Emulator (i.e: [genymotion](https://www.genymotion.com/download/))

As long as you have those, it should be fine.

## Installing
```
$ git clone https://github.com/leychay/resume-app.git
$ cd resume-app
$ npm install
```

## Post-cloning
If you wanted to modify this as your own app name, you need to make some modification for the package name in ``android`` directory first, as well as the Class name and AppRegistry Component from ``ikhwanresume`` to ``yourappname``

* android/app/src/main/java/com/``ikhwanresume``
* index.android.js

## Running the application
```
$ npm start (start in a separate terminal)
$ react-native run-android
```

# Feedback
* Your feedback is always welcome. Thanks!
