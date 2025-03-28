---
title:  "Software Freedom Podcast Interview"
date:   2025-02-19 00:00:00 -0400
categories: news blog update talks
layout: post
author: "Marc Prud'hommeaux"
---

I was recently interviewed about the App Fair Project for the FSFE's [Software Freedom Podcast](https://fsfe.org/news/podcast/episode-30.en.html). I had a great discussion with Bonnie Mehring about many aspects of the App Fair's philosophy and mechanics.

<audio controls="" style="width:100%;">
    <source src="https://download.fsfe.org/audio/podcast/SFP030.opus?ref=player" type="audio/ogg;codecs=opus">
    </source>
    <source src="https://download.fsfe.org/audio/podcast/SFP030.mp3?ref=player" type="audio/mp3">
    </source>
    Your browser does not support the audio element.
</audio>

## Transcript

<div class="content">
    <div class="content-centered">
        <h2 id="id-sfp#030-app-fair-project-with-marc-prudhommeaux">
            <a>SFP#030: App Fair Project with Marc Prud'hommeaux</a>
        </h2>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Before we start with the podcast, we would like to say thank you to all of you who support the FSFE's work with money. Working for software freedom and producing podcasts costs money. Please consider supporting us with a donation under fsfe.org/donate and in the show notes.</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">I'd really like to say thank you to the F-Droid project because this project is essentially trying to bring F-Droid to a universal marketplace.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Welcome to the Software Freedom Podcast. This podcast is brought to you by the Free Software Foundation Europe. We are a charity that works on empowering users to control technology. I'm Bonnie Maring and today I'm here with the developer and maintainer of the App Fair Project, Marc Prud'hommeaux.</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Hello, Bonnie. Thanks for having me.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Thank you, Marc, for making the time. We are actually here at FOSDEM and it was quite a journey to find this place where we are now recording. But back to the App Fair Project. So the App Fair is a free and open source app marketplace for iOS that we will now talk about a bit more and it is also related to the Digital Markets Act. And I'm really curious to hear the story, how the relationship is there. And yeah, I'm really happy that you made the time to talk to me about it. Thank you very much.</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Well, thank you.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">So, Marc, you are a very technical person as you are also the maintainer and the developer of the App Fair Project. Has it been useful for you to work with the policy and the legal department of the FSFE in the past? Because this is how we got to know each other through our legal department at the FSFE.</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yeah, definitely. As you say, I don't have a legal or policy background. I'm a software developer. I've been writing software for over 25 years. I've been developing apps for mobile devices, for the iPhone and for Android since around 2008. And that's been primarily my central role for as long as I've been working professionally. And it was really only through happenstance that I came into advising on policy roles, somewhat recently as a result of some of this work around the Digital Markets Act.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">All right. How did you... Before we start with the Digital Markets Act, how did you came up with the idea of the App Fair Project?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Well, it's pretty simple. I've been building and shipping apps for a very long time. I've done dozens and dozens of applications. All that time, I've been frustrated by observing that actually programming, developing the app is not that large a percentage of the work and labor that goes into it. So much of it goes into the distribution of the application, sort of the mechanics of getting it from the developer's hands into the end user's hands. And so for a very long time, I've been thinking over ideas around devops and about how you can facilitate creators to get their works into the hands of end users. And one of the projects that really has inspired me over the years has been the F-Droid project for Android. A lot of my ideas around the App Fair are really inspired by the great work that they've been doing all this time. And for those who might not know, F-Droid is essentially a free app store for Android devices. You create free and open source software, and then you essentially submit the source code to the F-Droid project. They make sure that it is following the guidelines. And then essentially they build your software and they distribute it through their application. It's pretty simple in theory. And I've always thought, why not have something like that for the iPhone? And so that was really the gestation of the idea around the App Fair.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">So can you briefly explain for our listeners what the App Fair Project is and what it does? So as I already mentioned, it's a marketplace for apps and it's on iOS. Is it on iOS only, or is it also available on Android?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">No. So this is where it's recently, somewhat recently expanded. The idea has turned into not just a software marketplace for iPhone devices, but for all devices. And essentially in the world right now, every device is either Android or iPhone. You know, there are some there are some devices that are perhaps experimental, but almost a hundred percent of consumer mobile applications run on either iPhone or Android. So the goal of the App Fair has really become to be able to create applications and distribute it to everyone, a hundred percent of humanity. So that means not only just all devices, but also all languages and all abilities with an emphasis on accessibility technologies. And so the structure of the App Fair project, it's a nonprofit organization. It's based in the United States and in France. In the United States, it's a 501(c)(3) nonprofit charity. And the idea is that the App Fair Project is, consists of maintainers and administrators as part of the volunteers and the staff, as well as translators. And they're the ones that essentially liaise between the creating organizations of the applications and the distribution channels, the mechanism by which the applications get into the hands of the end users. So we don't necessarily create the apps ourselves. The creators of the applications will be individuals, perhaps open source developers, hobbyist students, also organizations. So it can be governmental or nonprofit organizations, or it could be corporations. There's no rule against profit-seeking corporations from building these applications, as long as they follow the guidelines that the apps themselves are free and open source, and that they adhere to a variety of guidelines. For example, there can't be any tracking technologies. There can't be any analytics or surveillance. It has to be 100% open source. So you need to be able to audit and review everything that goes into these applications. And then there will be additional things that you might be able to do, but need to be called out. For example, if you're using a non-free backend service that might not be prohibited, but it also needs to be clearly explained to the users before they install the application.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Oh my god, I now have a feeling that it's like a really, really huge project, because you have mentioned already so many aspects, the language, the accessibility, and now also, I mean, we all know developing free software can be quite challenging, because a lot of libraries have a lot of different licenses, and you need to make sure that those licenses work together. So I now have the feeling that there's a lot of work behind the project itself, and making sure that the apps in this project actually follow all of those guidelines. How do you manage?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yeah, well, actually, the technology of building applications has advanced a lot in recent years. It's never been easier to get an application sort of stood up and be able to be installed on a mobile device and use it. A lot of the technologies that rely on like Swift UI on iOS and Jetpack Compose on Android make it much easier to create applications that are localizable into multiple languages and have great support for the system accessibility features. So the technology for creators has really advanced to a great stage where people are able to, in a much shorter amount of time than before, come up with an excellent premier-feeling professional applications. And then in the actual application building stage, the mechanism that takes the application and builds it, those technologies have also advanced quite a bit, so that it's a lot easier to perform scans on the source code for things like licenses and for bad code that you want to make sure doesn't slip through for malware and viruses. And a lot of that, a lot of that ground has been trod by projects like the F-Droid project for building applications for Android and also the Debian free software project and Homebrew for macOS. So a lot of these things will be standing on the shoulders of these giants that have come before us and reusing a lot of the technologies that they've already used. Now that's the technology portion of it. The human portion of it, to be able to review these things, that does require a fair amount of labor because there are aspects to the software that require individual judgment in order to validate whether or not something is going to be an acceptable piece of software to distribute. And that's really where the staff and the volunteers for the App Fair project will come into play and be able to provide that human component for reviewing these things. The technology that we create will facilitate that as much as possible, but there's no, there's no substitute for for humans being able to look over these things.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">So you rely on staff and on volunteers. How can somebody of our listeners, for example, volunteer with you?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">So we're starting to ramp up volunteers. We only have a couple people really right now as the number of applications that go into the project expand. We anticipate that from the pool of creators, we'll also be soliciting volunteers to help come into the project that might be able to use their expertise to review, probably not their own apps, but other apps as part of the project. And so we expect it to be very much a community that is formed up of the creators themselves, as well as independent people who might be end users of the applications. They can help form the pool of the translators to be able to bring applications into the languages that they actually want to use their applications in. Because the translation is a critical component to sort of the principles of universality of these applications so that you can have your application that is created by someone who say only speaks German, have that in the hands of someone who thinks their Cambodian grandmother would find it very useful.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Is there a central address that people can take a look at?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yep. https://appfair.org is our main site for the organization. And then the technology is hosted right now, mostly on GitHub. So https://github.com/appfair is the root for the technology.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">This is a short break for our own cause. Thank you for listening to the Software Freedom Podcast. Working for software freedom and producing podcasts costs money. Please consider supporting us with a donation on the fsfe.org/donate and in the show notes. Thank you so much for the introduction to the project. I would now like to ask you, how did Apple react?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yeah, so basically I mentioned the F-Droid project for Android earlier as being an inspiration. And it's sort of the idea is why not have something like this for Apple products? And the short answer is that there's no mechanism for having third party app stores on Apple devices. You know, Android has always had the ability to install third party app marketplaces F-Droid. And then various vendors, Samsung and T-Mobile, they have their own app stores. And then in China, those are the only app stores available are the ones by Tencent and Baidu, because Google Play services is not available there. So Android very deeply has baked in the capacity to have the ability to install third party app stores, which are basically just apps that install and manage other apps is essentially all that that is from the end user device. Apple has historically never had anything like that until the Digital Markets Act was proposed. And one of the requirements of that act is that they open up their systems enough to be able to have what they term alternative app marketplaces.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Now we are at the Digital Markets Act. This was also what I was aiming for a bit. Can you briefly explain this to our listeners? Because it is a European law. You are a US citizen. So how does this affect you in the US? And also, can you give us an overview of what it actually is?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Okay. So yeah, the Digital Markets Act was first proposed, I believe, in 2020, signed into law in 2022, came into effect in 2023. And then, and then enforcement began in 2024. You know, the requirements of the regulations started to be enforced. And it's an enormous act. There's a lot of components to it. One of the components is related to app stores. And they basically say, what you need to do is allow third parties to compete on this playing field. You need to enable third party app marketplaces. And that was really the thing that allowed the idea of the App Fair to have a possibility of really existing, was to be able to be able to write one of these applications. Because until then there were mechanisms for getting non-app, official app store apps on your device. But they were always required circumventing features of the system, for example, jailbreaking your phone in order to install the Cydia app store, which is a very old app store from 2008 that allows you to install what they call tweaks and sort of unofficial applications. But it really requires hacking into your phone and doing a lot of things that are just very, very high friction. Very few people really want to go that route. So there's never really been an official way to get applications onto your device, except through the official Apple channels where you submit it to what they call App Store Connect, which is where you upload your apps. And then they review it and they apply their rules, make sure that they are able to get their 30% of any digital transaction that takes place in the application. And then if it all gets approved, then they wind up distributing it. So that's all changing. Now, the mechanisms of compliance that they have undertaken are broadly seen as being very problematic because it is very cumbersome to create one of these stores right now. You mentioned location in the European Union. I'm located in the U.S. One of the requirements was you need to be based in Europe. And that was why we started the App Fair France as a subsidiary nonprofit organization in order to qualify for that. But there are a lot of other hurdles that we have not yet surpassed. One of the main ones being you need to provide a 1 million euro business letter of credit in order to be able to get what they call a marketplace entitlement. And that's obviously for a small project like this, a gigantic barrier and one that until we overcome, we're not going to be able to actually ship an app store.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Wow, this is like, this sounds like it's not following all of the Digital Markets Act aims because the aim was to level the playing field and to make it more diverse and to have other app stores available, to have other sources available. So how do you handle this?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yeah, that's our view as well. We have gone back and forth with them. We've requested exemptions from this thus far unsuccessfully. And it's one of the areas where we think that when enforcement comes into play, probably in the coming months, will be an area that they look at very closely. Because until for as long as you have that barrier of a million euros, you're really not facilitating competition. All you're doing is saying that only the very large players are able to afford to get into this area. And it's obviously a big problem for a non-profit, free software-oriented organization to have to come up with that amount of money.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">I can only imagine. Is there crowdfunding or is there something that our listeners can support?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">We've actually just started to accept donations. So on our page, there's a donations link. And also linked in the show notes. And so that's going to be one avenue. We're also seeking sponsorship opportunities for this. You know, actually all we need is a 1 million euro standard business letter of credit, not actually that amount of money. So sponsors could, in theory, pool together and be able to back a letter of credit in order to fulfill this requirement. So that's one area that we're actively an avenue that we're actively researching at the time.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Oh my god. Okay. I wish you a lot of luck with this. But I still think that, are you also taking some action against Apple? Is there something happening in this area as well?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">We're not taking any direct action ourselves against Apple. We are advising various organizations. One of them being the Free Software Foundation. We participated in various European Commission workshops to provide our feedback on the current state of the compliance in regard to app stores. We are just in general providing advocacy and trying to raise awareness of this particular issue. And various other issues that are also technological difficulties and shortcomings in the way that, that their mechanisms for compliance have been enacted. It's not like on Android where you can just essentially build a app, an APK file, and either hand it off directly to an end consumer or hand it off to an app marketplace like F-Droid or something to redistribute and handle maintenance and updates. Instead, you still need to submit your actual application through Apple regardless. And then when they approve it, then they hand it off in encrypted and DRM'd form to the app marketplace. And then the app marketplace can then redistribute that application to the end user. And that's troubling for a number of reasons, one of which there's still this centralization of control. And one of the goals of the DMA was to open up and sort of decentralize the power of the gatekeepers. And for as long as all avenues are leading through one central point of control, that is going to, in our view, undermine the goals of the Digital Markets Act.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">And generally, do you have the feeling that the Digital Markets Act did at least level some of the playing field? Or is it like, it's a nice gesture, but it's a two-flush tiger?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">No, I think it's definitely making an impact. It really only came into effect in 2023 and enforcement only started in 2024. And there's a lot of leeway for foot dragging and delays and then reviewing compliance and things like that. So we're still really in early days for for how it's going to wind up looking. But thus far, I think it has really made a big impact on not just Apple, but on all of the gatekeepers that it outlines.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">All right, I'm really happy to hear that, because at least it's some impact. Do you think there will be something in the US in the near future, like the Digital Markets Act, or is this not going to happen anytime soon?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Well, you know, I can't tell the future. The United States right now is not in a especially pro-regulatory political phase. I think it's much more likely that other countries step in and have their own legislation enacted. For example, the CMA in the United Kingdom has similar rules that are currently being considered that are somewhat closely follow the Digital Markets Act. There's also activities in South Korea and in Japan that are looking to how the DMA Act affects these marketplaces. And that's why I think that we're in a really important phase right now with the Digital Markets Act and how it winds up being enforced, because a lot of these other countries are going to be using this as a template and a prototype for how they can have effective regulation and how they can open up competition in their own digital marketplaces. And so what winds up working and doesn't wind up working with the DMA as enforced in the European Union, I think will have a very wide impact throughout the world in the coming years. As a template for how they might be able to draft their own legislation, which will be different and distinct and specific to their own needs for their own competitive marketplaces. But everyone looks at how everyone else does these things. And then perhaps the United States, who knows, may wind up following. Now, most of the gatekeepers that have been designated are U.S. companies. And so in the U.S., there's much more of an attitude of everyone's just trying to regulate our companies because they're bitter or upset that we have successful companies and they don't.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">So they feel more offended by those acts.</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yes, there's the notion of foreigners are trying to regulate our tech companies. And so there's definitely a lot more hostility towards that sort of action as taken by foreign governments. On the other hand, people in the U.S. are just as frustrated as people in Europe and everyone else in the world at the centralization of control. They see that it leads to a very unbalanced playing field. And just having a few companies having complete control over the computers that 90 percent of adults in the world are using as their everyday devices really strikes a lot of people as being unjust.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">I can imagine. So now for my last few questions, OK. In general, do you think that the DMA helped with the implementation of free software? Because I have been curious about this. Like, you with the App Fair Project, and you already mentioned it, gave you some possibility, even so there's still a lot of hurdles, but at least there was now the possibility. So do you think in general that the DMA helped with the implementation of free software in environments that are so closed like Apple's?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yeah, definitely. There's always been a difficulty with free software on Apple devices. There is plenty of GPL software available on iOS, for example, Signal and Matrix to name a couple of the big ones. There's IceCubes, there's VLC. There's a lot of GPL software that is available, but it's always been troubling because there are extra limitations that are placed by the rules that Apple enforces. For example, they apply DRM to all their applications. That's definitely one of the things that hinders truly free software from being available on these devices. So you generally need things like exemption additional exceptions to something like the GPL to be able to have actual software on the iPhone, which then leads into compatibility problems with other GPL licensed software because if one license has one exception, another license has another exception, then all of a sudden they're not really compatible. So in order to have truly free software available on this device, you really need to have a mechanism for distribution that is itself truly free.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">That's my next question. What are the steps that need to be taken to secure that free software is like that the access gets easier for free software to Apple devices?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Essentially, what you need to be able to do is have unfettered side loading enabled. Side loading is the term that has arisen to mean direct downloading of software straight to the device. Without that, I think that you can never have truly free software available to device because it's impossible for creator A to get their software directly into the hands of consumer B in a way that there is one to one trust, the ability to verify their software. And I think that's really the foundational point that everything needs to be built upon is you need to be able to say, look, I can just go and get your software directly and either build it myself and run it on this device, or, with the binary that you built, I can choose to trust it because I choose to trust those people who have signed it. I download that and I put it on my device. And that's really all you need. It doesn't need to be any more complicated than that. Apple devices are not themselves obviously free and open source, but neither is Windows and neither is Mac OS. And many parts of Android are also not totally free and open source. If you use any of the standard Google builds that has plenty of closed source proprietary software in it. So free software is generally considered to be possible on these devices. It's really the additional restrictions they place around the distribution of that software. That is the thing that I think impedes its ability to really flourish and thrive on iPhone devices.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">All right. And do you think there's something that should be taken to ensure that like marketplaces have a better access to Apple devices?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Well that really comes down to, I think, the economics of them. Apple chooses to market their devices as premium devices. And so they tend to be much more expensive than other devices. And so that really changes the attitudes that people have towards the development of software for the iPhone. The iPhone makes up about 25% of all devices and Android makes up about 75%. But profit wise, those numbers are really flipped. Generally speaking, Apple devices are seen as generating around 75% of the revenue from software, whereas Android devices are seen as generating around 25%. And so those are really opposites of each other. And so the iPhone has really evolved to be much more of a commerce intensive device. People tend to think that people will spend more money on their apps on the iPhone. And so you wind up with a lot more concentration of commercially oriented applications being developed for it. Simply because people think, well, we can make more money on this, especially in the United States, the United Kingdom and Japan, which are the three major countries where the majority of people have iPhone devices. So I think that the attitudes of free software tend to just naturally lean more towards Android than towards the iPhone. And I think that that's fine. The goal of the App Fair Project is to create these universal applications, regardless of what device you use. And again, regardless of the language you speak, and regardless of your level of abilities. And so it doesn't really matter to us. We want to be able to let someone create a piece of software – it could be a weather app, it could be something for paying your parking meter, it could be train timetables – and be able to just get it to every person in the world, regardless of any of these factors.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">All right. Yeah, I know I focused a lot on Apple now, but I thought this was, I find this quite fascinating because also Apple has a lot of relationship with free software, if you look at it from a historical point of view. So do you think that Apple benefited a lot from free software?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Yeah, definitely. I mean, as has Google and Microsoft and every other gatekeeper and every other major technology company in the world has really built themselves off of a foundation of free software. And I think that's fine. I mean, free software is meant to be free, regardless of who you are. I know that a lot of people have an attitude where they owe free software back for what they've taken from it. I don't personally find that compelling. I think that free software should be given freely without any expectation of return. And I think that that's why one of the things that really motivates people to develop free software is this desire to offer, without any expectation of return, their labor and their creativity and give it to everyone in the world. And some of those people will be multi-trillion dollar corporations. And I feel: bless them for that. It's when they have overt hostility towards free software is when you feel a little bit slighted. When the policies and the mechanisms that they put in place actively hamper, enabling more free software from being distributed to the world, that is when I think that some righteous anger is due. I mean, the companies, especially Apple and Google, who make money off of the applications that are distributed, obviously have a strong motivation for those applications not being free. When you can charge a cut of digital transactions that take place, you want transactions to take place. It's just a natural commercial motivation. And so, that's why the notion of competition is so important. If you had, say, a free app store where everything was free to everyone all the time, that would act as a natural counterbalance to these very commerce-heavy application marketplaces like the Apple App Store and the Google Play Store. And it would also put, I believe, some brakes on some of the more nefarious behavior that app development organizations sometimes engage in, in order to indirectly monetize their end users. Barely a week goes by when you don't hear some story about some data broker company being able to siphon off the data that they sneak off of your device, be it your location, your contacts, your calendar, all sorts of either direct or derived information that reveals very personal and intimate details about your life. Those are daily being siphoned off in ways that the end user never agreed to, is never aware of. And because those applications are closed source, there's almost no way to catch them, except eventually through the work of security researchers or people who reverse engineer the applications. But that's often way too late. You've already revealed everywhere you're going, everyone you know, everyone you communicate with, everything you're doing to these organizations that aggregate it and sell it on to anyone who wants to buy it. And that's really one of the areas where I think a free software marketplace would be really compelling, because that acts as a very natural antidote to that sort of behavior. There's no way that can slip through for any amount of time without someone looking at the source code and saying, "Oh, why are you reading all my contacts and uploading it to this random website? That shouldn't be taking place." All right. I like this to take this as a closing word because we have already exceeded our time limit a bit. But before we close the podcast, we have already talked a lot about free software. And usually at the end of the Software Freedom Podcast, I asked our guests if there's a project that they would like to say thank you to.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">So is there a project that you would really like to highlight and say thank you to?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">I'd really like to say thank you to the F-Droid project, because this project is trying to bring F-Droid to a universal marketplace. And so much of the work that they've done has acted as an inspiration to us. And so many of the guidelines that they've put in place are going to be the template for the guidelines that we use. Like, what is the sort of software that we want to be able to distribute? What is the sort of software that we want to prohibit from being distributed on this marketplace? So yeah, if you, any Android users out there, you should definitely check out the FDroid project. They are miles ahead of us in terms of free software for Android devices. And we can only aspire to someday achieving the greatness that they've achieved.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Thank you very much. I loved our chat. Thank you so much for making it possible. And yeah, for meeting me here at FOSDEM. Is there anything you're going to do at FOSDEM? Is there something you would like to highlight for FOSDEM as well?</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">Well, I'll be speaking this afternoon on the legal track on some of the challenges of building a free software app marketplace. That's the main thing I'm going to do. Other than that, I am probably going to be checking out the Swift dev room, which is Apple's development language that I use heavily. Also the Android dev room seems really interesting to me. And any other, any other really mobile application, application related sessions I can find.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">All right. I wish you good luck with this because usually I also have a full schedule and I hardly manage any of them. So I keep fingers crossed that this works out. And yeah, again, thank you so much, Marc, for making the time and talking to me about the App Fair Project.</div>
        <br>

        <div class="timestamp">Marc</div>
        <div class="transcript-line">And thank you, Bonnie, for having me. It's really been a pleasure chatting with you and on this beautiful day in Brussels.</div>
        <br>

        <div class="timestamp">Bonnie</div>
        <div class="transcript-line">Yeah, that's quite true. Actually, we have sunny weather. This has hardly happened to me in Brussels. I'm really happy about that. All right. This was the Software Freedom Podcast. If you liked this episode, please recommend it to your friends and rate it. The Software Freedom Podcast is brought to you by the Free Software Foundation Europe. We are a charity that depends on your support. Please consider supporting us with a donation. For more information, go to fsfe.org/donate. Thank you so much. Bye.</div>
        <br>

    </div>

</div>
