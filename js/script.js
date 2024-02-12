/*button = document.getElementById("new-quote");
text = document.getElementById("text");
author = document.getElementById("author");
twitter = document.getElementById("tweet-quote");
tumbler = document.getElementById("tumblr-quote");
quote = document.getElementById("quote");
body = document.querySelector("body");

const RBC (e) {
    button.style.backgroundColor =
    body.style.backgroundColor =
    text.style.color =
    twitter.style.backgroundColor =
    tumbler.style.backgroundColor =
    author.style.color =
    quote.style.color ="#"+Math.floor(Math.random()*16777215).toString(16);
}
button.addEventListener("click", RBC);
window.onload = RBC();*/

const generateColors = () => {
	const colors = [
		'#CD5C5C',
		'#F08080',
		'#FA8072',
		'#E9967A',
		'#FFA07A',
		'#DC143C',
		'#FF0000',
		'#B22222',
		'#8B0000',
		'#FF1493',
		'#C71585',
		'#DB7093',
		'#FF7F50',
		'#FF6347',
		'#FF4500',
		'#FF8C00',
		'#FF00FF',
		'#BA55D3',
		'#9370DB',
		'#8A2BE2',
		'#9400D3',
		'#9932CC',
		'#8B008B',
		'#800080',
		'#663399',
		'#4B0082',
		'#7B68EE',
		'#6A5ACD',
		'#483D8B',
		'#ADFF2F',
		'#7FFF00',
		'#7CFC00',
		'#00FF00',
		'#32CD32',
		'#98FB98',
		'#90EE90',
		'#00FA9A',
		'#00FF7F',
		'#3CB371',
		'#2E8B57',
		'#228B22',
		'#008000',
		'#006400',
		'#6B8E23',
		'#808000',
		'#556B2F',
		'#66CDAA',
		'#008B8B',
		'#008080',
		'#00FFFF',
		'#7FFFD4',
		'#40E0D0',
		'#48D1CC',
		'#00CED1',
		'#5F9EA0',
		'#4682B4',
		'#1E90FF',
		'#6495ED',
		'#4169E1',
		'#0000FF',
		'#0000CD',
		'#00008B',
		'#000080',
		'#191970',
		'#BC8F8F',
		'#B8860B',
		'#CD853F',
		'#D2691E',
		'#8B4513',
		'#A0522D',
		'#A52A2A',
		'#800000',
		'#808080',
		'#696969',
		'#778899',
		'#708090',
		'#2F4F4F',
	];

	const arrColor = Math.floor(Math.random() * colors.length);
	document.getElementById('new-quote').style.backgroundColor = colors[arrColor];
	document.getElementById('text').style.color = colors[arrColor];
	document.getElementById('author').style.color = colors[arrColor];
	document.getElementById('tweet-quote').style.backgroundColor = colors[arrColor];
	document.getElementById('tumblr-quote').style.backgroundColor = colors[arrColor];
	document.getElementById('quote').style.color = colors[arrColor];
	document.querySelector('body').style.backgroundColor = colors[arrColor];
};

const generateQuote = () => {
	const quotes = [
		{
			text: 'The best revenge is massive success.',
			author: '- Frank Sinatra',
		},
		{
			text: 'In order to succeed, your desire for success should be greater than your fear of failure.',
			author: '- Bill Cosby',
		},
		{
			text: 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
			author: '- Marie Curie',
		},
		{
			text: 'If you want to lift yourself up, lift up someone else.',
			author: '- Booker T. Washington',
		},
		{
			text: 'The person who says it cannot be done should not interrupt the person who is doing it.',
			author: '- Chinese Proverb',
		},
		{
			text: 'If the wind will not serve, take to the oars.',
			author: '- Latin Proverb',
		},
		{
			text: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
			author: '- Leonardo da Vinci',
		},
		{
			text: 'Every child is an artist. The problem is how to remain an artist once he grows up.',
			author: '- Pablo Picasso',
		},
		{
			text: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
			author: '- Plato',
		},
		{
			text: 'We must balance conspicuous consumption with conscious capitalism.',
			author: '- Kevin Kruse',
		},
		{
			text: 'I attribute my success to this: I never gave or took any excuse.',
			author: '- Florence Nightingale',
		},
		{
			text: 'The only person you are destined to become is the person you decide to be.',
			author: '- Ralph Waldo Emerson',
		},
		{
			text: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
			author: '- Maya Angelou',
		},
		{
			text: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
			author: '- Dalai Lama',
		},
		{
			text: 'Winning isn’t everything, but wanting to win is.',
			author: '- Vince Lombardi',
		},
		{
			text: 'There are no traffic jams along the extra mile.',
			author: '- Roger Staubach',
		},
		{
			text: 'Our lives begin to end the day we become silent about things that matter.',
			author: '- Martin Luther King Jr.',
		},
		{
			text: 'Everything has beauty, but not everyone can see.',
			author: '- Confucius',
		},
		{
			text: 'It’s not the years in your life that count. It’s the life in your years.',
			author: '- Abraham Lincoln',
		},
		{
			text: 'Whatever the mind of man can conceive and believe, it can achieve.',
			author: '- Napoleon Hill',
		},
		{
			text: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.',
			author: '- Mark Twain',
		},
		{
			text: 'Teach thy tongue to say, “I do not know,” and thous shalt progress.',
			author: '- Maimonides',
		},
		{
			text: 'Definiteness of purpose is the starting point of all achievement.',
			author: '- W. Clement Stone',
		},
		{
			text: 'Everything has beauty, but not everyone can see.',
			author: '- Confucius',
		},
		{
			text: 'Life shrinks or expands in proportion to one’s courage.',
			author: '- Anais Nin',
		},
		{
			text: 'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.',
			author: '- Mae Jemison',
		},
		{
			text: 'The most common way people give up their power is by thinking they don’t have any.',
			author: '- Alice Walker',
		},
		{
			text: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.',
			author: '- Vincent Van Gogh',
		},
		{
			text: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
			author: '- Benjamin Franklin',
		},
		{
			text: 'Either you run the day, or the day runs you.',
			author: '- Jim Rohn',
		},
		{
			text: 'I would rather die of passion than of boredom.',
			author: '- Vincent van Gogh',
		},
		{
			text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
			author: '- Maya Angelou',
		},
		{
			text: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
			author: '- Aristotle',
		},
		{
			text: 'A person who never made a mistake never tried anything new.',
			author: '- Albert Einstein',
		},
		{
			text: 'Strive not to be a success, but rather to be of value.',
			author: '- Albert Einstein',
		},
		{
			text: 'Life is what happens to you while you’re busy making other plans.',
			author: '- John Lennon',
		},
		{
			text: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
			author: '- Oprah Winfrey',
		},
		{
			text: 'Change your thoughts and you change your world.',
			author: '- Norman Vincent Peale',
		},
		{
			text: 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.',
			author: '- Booker T. Washington',
		},
		{
			text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
			author: '- Chinese Proverb',
		},
		{
			text: 'Believe you can and you’re halfway there.',
			author: '- Theodore Roosevelt',
		},
		{
			text: 'Fall seven times and stand up eight.',
			author: '- Japanese Proverb',
		},
		{
			text: 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
			author: '- Jesse Owens',
		},
		{
			text: 'Dreaming, after all, is a form of planning.',
			author: '- Gloria Steinem',
		},
		{
			text: 'Dream big and dare to fail.',
			author: '- Norman Vaughan',
		},
		{
			text: 'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
			author: '- Abigail Van Buren',
		},
		{
			text: 'You miss 100% of the shots you don’t take.',
			author: '- Wayne Gretzky',
		},
		{
			text: 'The two most important days in your life are the day you are born and the day you find out why.',
			author: '- Mark Twain',
		},
		{
			text: 'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
			author: '- Bob Dylan',
		},
		{
			text: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
			author: '- Anne Frank',
		},
		{
			text: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
			author: '- Helen Keller',
		},
		{
			text: 'It is never too late to be what you might have been.',
			author: '- George Eliot',
		},
		{
			text: 'Certain things catch your eye, but pursue only those that capture the heart.',
			author: '- Ancient Indian Proverb',
		},
	];

	const arrIdx = Math.floor(Math.random() * quotes.length);
	document.getElementById('text').innerHTML = quotes[arrIdx].text;
	document.getElementById('author').innerHTML = quotes[arrIdx].author;
};

window.onload = () => {
	generateQuote();
	generateColors();
	document.getElementById('new-quote').addEventListener('click', generateQuote);
	document.getElementById('new-quote').addEventListener('click', generateColors);
	document.getElementById('new-quote');
};
