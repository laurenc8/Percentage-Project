//import images
import cindy_pic from "../images/CindyWang.jpg";
import grace_pic from "../images/GraceTian.jpg";
import eric_pic from "../images/jjemba_half.jpg";
import miela_pic from "../images/MielaFoster.jpg";
import robin_pic from "../images/Robin.jpg";
import sarika_pic from "../images/Sarika.jpg";


//defining all people objects
const robin = {
    name: 'Robin Robinson',
    year: '2022',
    concentration: 'Statistics',
    quotes: ["I remember I was at office hours for Stat 110. And I was trying to ask the student sitting in front of me, like, \"What'd you get for number 3? I got 5.\" And he said, \"What?\" and was talking to me very disrespectfully and threw in the word \"dumb\" or something. I was just like, \"Are you not going to tell me how to do it?\" I don't know, it was just very disheartening. I kind of just left office hours, but it gave me a really bad impression of the department and the students in the department."],
    pic: robin_pic,
    color: 'light blue', //should probs be like an rbg value or something but idk will figure that out
    pronouns: 'she/her'
    //maybe also their assigned data viz graph?
}

const grace = {
    name: 'Grace Tian',
    year: '2022',
    concentration: 'CS + Statistics',
    quotes: ["I think that's what makes people feel the most alone, doing CS or any field in general, when they have questions and they're treated with impatience or annoyance. So in general just being treated with more patience and friendliness when it comes to learning these new things for the first time."],
    pic: grace_pic,
    color: 'orange',
    pronouns: 'she/her'
}

const sarika = {
    name: 'Sarika Chawla',
    year: '2023',
    concentration: 'CS',
    quotes: ["This isn't necessarily only specific to CS but to academics in general at Harvard, that if you need help on a problem set or if you are stuck on understanding some concept you're expected to constantly go to office hours or find study groups. And that's not always possible for disabled people because personally, I have a medical schedule. I have other schedules related to my disability that I have to follow...That kind of bars me from going to office hours anytime I want to go. Not to mention that office hours aren't always in accessible locations or they're in places where the elevator randomly breaks and no one knows about it or they're just far away on campus and by the time I get there office hours will be over. "],
    pic: sarika_pic,
    color: 'dark blue',
    pronouns: 'she/her'
}

const cindy = {
    name: 'Cindy Wang',
    year: '2024',
    concentration: 'CS/Pre-med',
    quotes: ["At Harvard, if I need help, I can find help", "I feel like I have to like work a little harder to prove myself.", "With AI, I’d try to find new interpretations and like new perspectives from the the data, i think that would be really, really cool"],
    pic: cindy_pic,
    color: 'navy green',
    pronouns: 'she/her'
}

const eric = {
    name: 'Eric Jjemba',
    year: '2021',
    concentration: 'Environmental Engineering',
    quotes: ["I've always wanted to put science and my work in STEM into a broader context. And so for me, when we talk about climate change in ESE, there's the very scientific perspective of: this is how greenhouse gases are warming the planet. But it's then helpful as a Black man to be able to put that conversation in the context of discussing communities that will continue to be overburdened if we continue this path. If we talk about chemical contaminants and drinking water, I can bring the perspective of talking very clearly using my background in terms of how that's going to impact certain communities disproportionately."],
    pic: eric_pic,
    color: 'beige',
    pronouns: 'he/him'
}

const miela = {
    name: 'Miela Foster',
    year: '2021',
    concentration: 'Statistics',
    quotes: ["Harvard didn't really give me the opportunity to see STEM applied to communities of color. There's a lot of really cool startups, especially startups founded by women on campus, that are geared towards minorities, geared towards women-centric issues."],
    pic: miela_pic,
    color: 'black/grey',
    pronouns: 'she/her'
}


//making list of all people to iterate through in PageStories
export const people = [grace, robin, sarika, cindy, eric, miela]