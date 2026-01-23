---
# name: AppFair
title: Creator Guide
#layout: default
---

# App Fair Creator Guide

<img style="width: 100%;" alt="App Fair Project Diagram" src="/assets/images/appfair-project.svg" />

## Introduction {#introduction}

Welcome, Developer! This guide will provide an overview of the App Fair development, release, and maintenance process. If you are already a mobile app developer, some of these sections will be review – but we encourage to read thoroughly regardless. The App Fair is a unique method of app development, and even if you have already shipped apps for the iPhone or Android (or both), many of the concepts presented here will be novel.

The document is currently a **draft** of the creator guide. Many sections are still works in progress. Please post questions and feedback on the [App Fair discussion forums](https://github.com/orgs/appfair/discussions).
{: class="callout error"}

### About the App Fair Project {#about-app-fair}

The App Fair is a nexus for mobile app developers to bring their creations into the hands billions of mobile device users around the world: all devices, all languages, all abilities. Apps developed for the App Fair are trustworthy because they are 100% free and open-source. This guarantees that there is no native advertising, hidden surveillance, surreptitious tracking, or privacy-violating analytics technologies embedded within the applications. The App Fair build and release process acts as a "seal of approval" for apps to indicate that they are honest and trustworthy.

#### Why develop an app for the App Fair? {#why-app-fair}

Creating an app for the App Fair is an opportunity to get your creation in the hands of billions of people around the world, regardless of their device, language, or ability level.

#### Who can create an app for the App Fair? {#who-app-fair}

Anyone with the ability and desire to build an app can be an App Fair Creator. You do not need any paid developer account with Apple or Google, only a free GitHub account. If you have a macOS development machine and the ability (or desire) to build an app in SwiftUI, you can create an app and – through the App Fair process – distribute your creation to the world.

#### What sorts of apps can I build for the App Fair? {#what-app-fair}

The App Fair is looking for _generally useful_ applications. This means that your app should be interesting and useful to a wide swath of humanity, irrespective of language or location. They should also be timeless: apps should not have any specific cutoff for their utility.

A central tenant of the App Fair catalog is that apps do not seek to monetize the attention of the user. This means that they can contains no native advertising or tracking SDKs. They must also be _transparent_, and so they must be built from 100% free and open source software. This is the guarantee that users (and external auditors) will have that they know exactly what went into the creation of the app.

### About distribution channels {#app-fair-channels}

The App Fair aims to distribute apps *worldwide*, so all of the mobile-device-using population (90% of the adult population, by most estimates) can benefit from your creation.

#### The App Fair {#app-fair-channel-app-fair}

The App Fair app is a dual-platform iOS/Android app that can browse, download, install, and update apps from the App Fair catalog. It is available worldwide for Android, and (soon) will be available in the European Union for iOS. The App Fair app is the primary channel for distributing app fair apps.

#### The Apple App Store {#app-fair-channel-app-store}

The Apple App Store (AAS) is the primary 1st-party app store for Apple devices such as the iPhone and iPad. The AAS is pre-installed on all Apple devices sort worldwide, and is generally the first place that most users will go to discover and download applications for their phone or table.

#### The Google Play Store {#app-fair-channel-play-store}

The Google Play Store (GPS) is the primary 1st-party app store for most Android devices, such as the Google Pixel and Samsung Galaxy phones. The GPS is available and pre-installed in most devices worldwide (barring China), and is typically one of the first places that Android users will go to install apps on their Android devices.

<!-- 
    
#### AltStore {#app-fair-channel-altstore}

#### F-Droid {#app-fair-channel-fdroid}

 -->
 
## Getting Started {#getting-started}

### Before you start {#before-starting}

Before you dive into developing your app, you should first check whether the app idea already exists as an App Fair project. The App Fair generally discourages apps with identical intent. Unlike commercial app catalogs that aim to build quantity, the App Fair aims to feature a few best-in-class applications in their categories. You can browse the list of app projects at [appfair/repositories](https://github.com/orgs/appfair/repositories) to see if an app already exists that closely resembles your idea for a contribution. If so, you may with to instead contribute toward the improvement of that app project rather than duplicating effort.

### System Requirements {#sysreq}

In order to develop an app for the App Fair, you need to have a macOS development machine capable of running the latest Xcode IDE. App Fair apps are developed with [Skip](https://skip.dev), which enables the development of iOS and Android apps from a single SwiftUI codebase, and Skip requires Xcode.

#### Choose a unique name {#naming}

Your app needs to have a distinctive and unique name that is not the name of any other app in the App Fair, Apple App Store, or Google Play Store.

It can be difficult to conclusively verify ahead of time that a name is available because there are many "name-squatters" on the commercial app stores. Don't get too attached to your original idea, unless you are somehow quite certain that it is totally unique. It is easy to change the name of an app before publication, so our advice is to not spend too much time picking a name up front, since you might need to change it later anyway.
{: class="callout error"}

### Make a proposal {#proposal}

When you have an idea for an app, you may want to propose it on the [App Fair discussion forums](https://github.com/orgs/appfair/discussions). This will give the community the opportunity to provide feedback on the idea, as well as make an assessment about whether the app will be suitable for distribution through the Ap Fair.

Creating a proposal is optional, but it is a good way to get community feedback on your idea before you invest effort in building something that might not fit well with the App Fair's mission or needs.
{: class="callout warning"}

### Creating an organization and repository {#new-org-repo}

Every App Fair app must be represented by a unique GitHub organization. An organization can be created for free by going to [https://github.com/account/organizations/new?plan=free](https://github.com/account/organizations/new?plan=free). It can be created an managed by an individual, or many people can be invited to participate in the app's development.

The organization's name should be the application ID, which will typically be the app's name. For example, for the "App Name" app, and organization named "App-Name" should be created.

Once the organization is made, the app's repository should be created by going to [https://github.com/new](https://github.com/new). The repository name must exactly match the organization name (e.g., "https://github.com/App-Name/App-Name"). The repository should be public and empty (no README, .gitignore, or license files). The contents will be added in the next steps.

### Initializing the app {#init-app}

App Fair apps are developed using [Skip](https://skip.dev), which is the technology that enables the creation of a dual-platform iOS+Android app from a single Swift codebase. Follow the [Getting Started](https://skip.dev/docs/gettingstarted/) instructions for setting up Skip on your machine, except then it comes to the creation of the app, the following command should be used instead (substituting "App-Name" with the name of the repository you just created):

```
skip init --open-xcode --appfair App-Name
```

This will initialize a new Skip application with the correct parameters for the App Fair. You should then add the newly created project to the repository and make an initial commit:

```
cd App-Name
git init
git remote add origin https://github.com/App-Name/App-Name.git
git branch -M main
git add .
git commit -m "initial commit"
git push -u origin main
```

Your repository is now created and initialized with a new, valid (albeit vanilla and uninteresting) App Fair app.

In addition to creating the repository, the app is also set up with a GitHub continuous integration workflow that will build your app every time you push a commit or create a Pull Request. This action is a critical part of the App Fair process, and should not be disabled.
{: class="callout warning"}


## Developing {#developing}

### App development guidelines {#app-guidelines}

By now you already know the fundamental requirements of an App Fair app: they must consist of 100% free and open-source software, and they must respect the privacy of the user by not embedding any tracking, surveillance, or advertising tech.

There are a number of other guidelines that App Fair apps should also strive to follow:

#### Respect offline mode {#guideline-offline}

Apps should work in a variety of network conditions: fast wi-fi as well as slow and metered cellular. It should generally be possible to continue to use the app in an "offline" mode.

#### Be fast to launch and efficient with memory and battery {#guideline-fast}

_writing in progress…_

#### Provide in-app guidance {#guideline-guidance}

_writing in progress…_

#### Facilitate easy translation {#guideline-translations}

_writing in progress…_

### The app development cycle {#appdev}

_writing in progress…_

## Releasing {#releasing}

_writing in progress…_

### About the App Fair release process {#app-fair-releases}

_writing in progress…_

<!-- When it is time to release your app and submit it to the various distribution channels,  -->

### Managing metadata {#metadata}

_writing in progress…_

#### About Fastlane {#metadata-fastlane}

_writing in progress…_

#### Android metadata {#metadata-fastlane-android}

_writing in progress…_

##### Android screenshots {#metadata-fastlane-android-screenshots}

_writing in progress…_

#### iOS metadata {#metadata-fastlane-ios}

_writing in progress…_

##### iOS screenshots {#metadata-fastlane-ios-screenshots}

_writing in progress…_

### Creating a tag {#release-tag}

_writing in progress…_

### Fork requests {#fork-request}

_writing in progress…_

<!-- A.F.F.R. -->

### Handling feedback {#handling-feedback}

_writing in progress…_

## Maintenance {#app-maintenance}

_writing in progress…_

### Releasing updates {#app-updates}

_writing in progress…_

### Managing localization and translations {#app-localization}

_writing in progress…_


## FAQ

### What software licenses can be used with the App Fair {#faq-license}

The top-level app project must be made available under the GNU General Public License (GPL) version 3 in order to qualify to be distributed through the App Fair. The app can have dependencies on libraries that are available under any of the GPL-compatible OSI-approved licenses, such as the Apache, BSD, and MIT licenses.

### Why Skip instead of Flutter/React Native/Xamarin/MAUI/etc? {#faq-skip-xp}

Platform-native user interfaces provide a premium app experience, optimal performance and superior battery life. Skip facilitates the creation of apps using each platform's vendor-recommended design language: Swift and SwiftUI for iOS, and Kotlin and Jetpack Compose for Android.

### Can I develop an app that only supports Android or iOS? {#faq-xor}

No, distributing an app through the App Fair requires that it support both iOS and Android. There may be different features that are enabled for different platforms as a consequence of each platform's unique feature-set, but in general the app should aim to provide the same experience on both of the major mobile operating systems.

### Can I build an App Fair app for macOS/Windows/Linux? {#faq-desktop}

No. App Fair apps are squarely focused on native mobile devices.

### Can I build an App Fair app for the web? {#faq-web}

No. App Fair apps are squarely focused on native mobile devices.

### Can I develop an App Fair app on Linux or Windows? {#faq-dev-lin-win}

Not at this time. Even though Android apps can be developed on any of macOS, Linux, or Windows, building and testing iOS apps requires Xcode and the tools that come with it (i.e., the iOS Simulator), which requires macOS.

### What are the minimum system requirements for running App Fair apps {#faq-sysreq}

In order to install and run an App Fair App, a device must be running either iOS 17 or Android 10 (or higher). Individual apps may add higher system requirements, but it is generally not recommended in order to reach the widest possible audience.

### Can an app have different features for different distribution channels? {#faq-heterogeneous-features}

Yes. An app can check at runtime whether it has been installed from the App Fair versus one of the commercial app stores, and choose the enable or disable features accordingly.

### How can I remove my app from one of the the App Fair distribution channels? {#faq-leave-distribution-channel}

### Can I leave the App Fair completely and distribute my app independently? {#faq-leave-app-fair}

### Why does fairapps need write access to my project? {#faq-write-access}

The App Fair build process builds and signs your apps, but the actual binaries are still distributed through your own repository. As such, the App Fair needs the ability to add files to your app repository's releases, which requires write access to your repository.

### Can I build my own app binary instead of having the App Fair do it? {#faq-trusted-builds}

Yes. When you tag your repository with a semantic version, your app is automatically built and binaries for iOS (.ipa) and Android (.apk and .adb) are uploaded to the repository's releases page. These will be *unsigned* binaries, and so you will need to manage the signing process yourself if you aim to release the app through other channels.

### What if I can no longer maintain my app? {#faq-maintenance-exit}

You can post a Call for Maintenance (CFM) on the App Fair discussion forums, and then if there is interest, you will arrange to hand over future development to a new individual or group. This is one of the reasons why App Fair apps require that each app is hosted in its own dedicated organization: it facilitates the ability for app development and maintenance to be handed off to another party in the even that the original developer(s) can no longer maintain it.

### I am not a developer, but I would like to translate an app into another language. How can I help? {#faq-translators}

_writing in progress…_

### I am not a developer. How else can I help the App Fair Project? {#faq-other-contributions}
The App Fair Project is run solely on donations from users like you. Please consider making a contribution to the ongoing development and hosting fees by going to [appfair.org/donate/](https://appfair.org/donate/).
