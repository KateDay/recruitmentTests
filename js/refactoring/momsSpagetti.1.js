const lyrics = {
	intro:
		'Look\
    If you had\
    One shot\
    Or one opportunity\
    To seize everything you ever wanted\
    In one moment\
    Would you capture\
    Or just let it slip?',
	choruses: [
		{
			chorus:
				"Yo\
        His palms are sweaty, knees weak, arms are heavy\
        There's vomit on his sweater already, mom's spaghetti\
        He's nervous, but on the surface he looks calm and ready\
        To drop bombs, but he keeps on forgettin'\
        What he wrote down, the whole crowd goes so loud\
        He opens his mouth, but the words won't come out\
        He's chokin', how, everybody's jokin' now\
        The clocks run out, times up, over, blaow!\
        Snap back to reality, oh there goes gravity\
        Oh, there goes Rabbit, he choked\
        He's so mad, but he won't give up that easy? No\
        He won't have it, he knows his whole back city's ropes\
        It don't matter, he's dope, he knows that, but he's broke\
        He's so stacked that he knows, when he goes back to his mobile home, that's when its\
        Back to the lab again yo, this whole rhapsody\
        He better go capture this moment and hope it don't pass him",
		},
		{
			chorus:
				"The souls escaping, through this hole that its gaping\
        This world is mine for the taking\
        Make me king, as we move toward a, new world order\
        A normal life is borin', but super stardom's close to post mortem\
        It only grows harder, only grows hotter\
        He blows us all over these hoes is all on him\
        Coast to coast shows, he's known as the globetrotter\
        Lonely roads, God only knows, he's grown farther from home, he's no father\
        He goes home and barely knows his own daughter\
        But hold your nose 'cause here goes the cold water\
        His hoes don't want him no mo, he's cold product\
        They moved on to the next schmo who flows, he nose dove and sold nada\
        So the soap opera is told and unfolds, I suppose it's old partna, but the beat goes on\
        Da da dumb da dumb da da",
		},
		{
			chorus:
				"No more games, I'm a change what you call rage\
        Tear this roof off like two dogs caged\
        I was playin' in the beginnin', the mood all changed\
        I been chewed up and spit out and booed off stage\
        But I kept rhymin' and stepwritin' the next cipher\
        Best believe somebody's payin' the pied piper\
        All the pain inside amplified by the\
        Fact that I can't get by with my nine to\
        Five and I can't provide the right type of\
        Life for my family 'cause man, these God damn food stamps don't buy diapers\
        And its no movie, there's no Mekhi Phifer\
        This is my life and these times are so hard\
        And it's getting even harder tryin' to feed and water my seed, plus\
        See dishonor caught up between bein' a father and a prima-donna\
        Baby mama drama screamin' on and too much\
        For me to want to say in one spot, another jam or not\
        Has gotten me to the point, I'm like a snail I've got\
        To formulate a plot fore I end up in jail or shot\
        Success is my only option, failures not\
        Mom, I love you, but this trail has got to go, I cannot grow old in Salem's lot\
        So here I go is my shot\
        Feet fail me not 'cause maybe the only opportunity that I got",
		},
	],
	refrain:
		'You better lose yourself in the music, the moment \
    You own it, you better never let it go \
    You only get one shot, do not miss your chance to blow \
    This opportunity comes once in a lifetime you better',
	refrainRepeat: 2, // number of times that refrain get repeated between choruses
	ending: 'You can do anything you set your mind to, man',
};

const ready = true;
const p1 = new Promise((resolve, reject) => {
	if (ready) {
		resolve(lyrics);
	} else {
		const reason = new Error('You choked man');
		reject(reason);
	}
});

momsSpagetti = lyrics => {
	p1.then(console.log(lyrics.intro.replace(/ \ /gm, '\n')))
		.then(console.log(lyrics.choruses[0].chorus + lyrics.refrain))
		.then(console.log(lyrics.choruses[1].chorus + lyrics.refrain))
		.then(console.log(lyrics.choruses[2].chorus + lyrics.refrain))
		.then(console.log(lyrics.refrain + lyrics.ending));
};
console.log(momsSpagetti(lyrics));

/* 
I'm sorry for the tardiness, I wanted to do this alone without mentor assistance. 
I have gotten to the point where I need to call in for help to implement my idea and to
make the code a little less smelly. 
I've implemented the promise and gave a variable to give a reason to resolve or reject. 
The part that I'm looking for help in is to make the output display as it does in the google lyrics link.
I want it to go through each line and replace everywhere that has a "\" i want to insert a line break in
it's place. one method that worked nicely was this line:
  .replace(/ \ /gm, '\n')
however upon implementation, it wasn't quite perfect and needed further refactoring and a second set of 
eyes to ensure the best option gets implemented.

Thank you again for your time!
*/
