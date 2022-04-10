//import images
import grace_pic from "../assets/plain_images/grace_tian.png";
import robin_pic from "../assets/plain_images/robin_robinson.png";
import sarika_pic from "../assets/plain_images/sarika_chawla.png";
import cindy_pic from "../assets/plain_images/cindy_wang.png";
import eric_pic from "../assets/plain_images/eric_jjemba.png";
import miela_pic from "../assets/plain_images/miela_foster.png";

//defining all people objects
const grace = {
    name: 'Grace Tian',
    year: '2022',
    concentration: 'Computer Science + Statistics',
    quotes: ["I think that's what makes people feel the most alone, doing CS or any field in general, when they have questions and they're treated with impatience or annoyance. So in general just being treated with more patience and friendliness when it comes to learning these new things for the first time."],
    pic: grace_pic,
    color: '#DD6552',
    pronouns: 'she/her',
    barData: 'I have experienced a microaggression.'
}

const robin = {
    name: 'Robin Robinson',
    year: '2022',
    concentration: 'Statistics',
    quotes: ["I remember I was at office hours for Stat 110. And I was trying to ask the student sitting in front of me, like, \"What'd you get for number 3? I got 5.\" And he said, \"What?\" and was talking to me very disrespectfully and threw in the word \"dumb\" or something. I was just like, \"Are you not going to tell me how to do it?\" I don't know, it was just very disheartening. I kind of just left office hours, but it gave me a really bad impression of the department and the students in the department."],
    pic: robin_pic,
    color: '#3D89BF',
    pronouns: 'she/her',
    barData: 'I generally feel comfortable asking questions in office hours.'
}

const sarika = {
    name: 'Sarika Chawla',
    year: '2023',
    concentration: 'Computer Science',
    quotes: ["This isn't necessarily only specific to CS but to academics in general at Harvard, that if you need help on a problem set or if you are stuck on understanding some concept you're expected to constantly go to office hours or find study groups. And that's not always possible for disabled people because personally, I have a medical schedule. I have other schedules related to my disability that I have to follow...That kind of bars me from going to office hours anytime I want to go. Not to mention that office hours aren't always in accessible locations or they're in places where the elevator randomly breaks and no one knows about it or they're just far away on campus and by the time I get there office hours will be over. "],
    pic: sarika_pic,
    color: '#EE8692',//'#0248A8',
    pronouns: 'she/her',
    barData: 'I have to prove myself before being taken seriously in academic settings.'
}

const cindy = {
    name: 'Cindy Wang',
    year: '2024',
    concentration: 'Computer Science/Pre-med',
    quotes: ["At Harvard, if I need help, I can find help", "I feel like I have to like work a little harder to prove myself.", "With AI, I’d try to find new interpretations and like new perspectives from the the data, i think that would be really, really cool"],
    pic: cindy_pic,
    color: '#8f4c39',
    pronouns: 'she/her',
    barData: 'I have a faculty member whom I perceive as a role model.'
}

const eric = {
    name: 'Eric Jjemba',
    year: '2021',
    concentration: 'Environmental Engineering',
    quotes: ["I've always wanted to put science and my work in STEM into a broader context. And so for me, when we talk about climate change in ESE, there's the very scientific perspective of: this is how greenhouse gases are warming the planet. But it's then helpful as a Black man to be able to put that conversation in the context of discussing communities that will continue to be overburdened if we continue this path. If we talk about chemical contaminants and drinking water, I can bring the perspective of talking very clearly using my background in terms of how that's going to impact certain communities disproportionately."],
    pic: eric_pic,
    color: '#9b938f',
    pronouns: 'he/him',
    barData: 'I believe students from every background have an equal chance to succeed at Harvard.'
}

const miela = {
    name: 'Miela Foster',
    year: '2021',
    concentration: 'Statistics',
    quotes: ["Harvard didn't really give me the opportunity to see STEM applied to communities of color. There's a lot of really cool startups, especially startups founded by women on campus, that are geared towards minorities, geared towards women-centric issues."],
    pic: miela_pic,
    color: '#3a627b',
    pronouns: 'she/her',
    barData: 'I believe organizations whose purpose is to support underrepresented or marginalized groups are still needed today.'
}

const helen = {
    name: 'Helen Cho',
    year: '2023',
    concentration: 'Computer Science',
    quotes: ["Personally, I was really worried about not \"making it\" in Computer Science at Harvard, but at the end of the day, you will. Everything gets easier as you learn more and become older, but it can be hard to believe that when you’re a young CS concentrator. At the end of the day, it will happen, and it will be okay."],
    pic: "https://lh3.googleusercontent.com/3awmltumt_0dUakywXKcaIFhkfri6LqnumHToaXO8loi2LnUqO3CTcIkG6GbCDCXCH6c50J-JTVCf1XU-gioiCWO_84UI1f7wAyVmru0WGxisL_fONx04U0k3QYEGamNCwG0isi0VW5Yvih4ypwBfaQeo_3e3cMOJXpCfECPi_hGySB_iXXTt83zlefPo1PebBrLhN_PYx1b07xItpiulzskhE8ZnSEOWufgRgfVeJo9QstYk9DMOkJYUhitX75vDJrrDxwdYPib_Y_vF2ItiZHL2l2fGuDG4ijT2LKD5QCOu7yDYKv2vVLoIkPXdAzGDRD8rSsMySM51Xme7vs6_Rf8lIcCL93Shziy5rfKcmVlcPkTdMTx2oVGKk7OQVJ3KBTYumk4lnbg1YzNLq6A_Hu9ZnFb4Z5Fz3AickXjt359a9Ybyqs54JudNbwIgE_bJhDniW2qgZxv9mVEQLZFUssg68hA_J7cO0O020e-7bK0FW99KvkpVqgTP_CZz0rDU-2VRi48B2xYu4D3oD5MPJjdq2lO54Pt58xltdkdYOI29GGhQMC9YYhg_vWj9ZMs4u8E5S6qlXZ5zsJTcZcL_RwiMpq4x4XrVcw8e-1AhtkjoJzPURYalsEOi41ixWSBqAFKD2hfdk5Ai1GqpCmUY1G0eh3Cem08bBEGYodOa1N7qmXpYDOq5N8U9OPRbQvi0wzd8mZmpmFtPvY9HKNba-bVBDqpCHNAKbW7wxyTWK4_NJ3m-kivwJRcDE9ZrudcqRdFSQ4UvaTOtdd7Grxxuy94YQRldfXNdLteGwm89UZfk1zVWIRnJNu-CBSEa92f7mvvstqEmtT4eXjVV_ptWg6UzlL-W4WrC8nyHEo=w1126-h1500-no?authuser=1",
    color: '#89245e',
    pronouns: 'she/her',
    barData: 'IN PROGRESS'
}

//making list of all people to iterate through in PageStories
//export const people = [grace, robin, sarika, cindy, eric, miela,np1,np2, np3,np4,np5,np6,np7,np8,np9,np10,np11]

export const people = [grace, robin, sarika, cindy, eric, miela, helen]