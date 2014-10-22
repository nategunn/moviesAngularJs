(function() {

	var app = angular.module('moviePage', ['film-directives']);

	app.controller('PageController', function(){
		this.films = movies;
	});



	var movies = [
	    {
		title: 'Lost Highway',
		description: 'A mesmerizing meditation on the mysterious nature of identity, LOST HIGHWAY is the latest film by David Lynch, creator of such modern masterworks as THE ELEPHANT MAN, BLUE VELVET and WILD AT HEART. Starring Bill Pullman, Patricia Arquette, Balthazar Getty, Robert Loggia and Robert Blake, the film expands the horizons of the medium, taking its audience on a journey through the unknown and the unknowable.\r Radical, even for a Lynch film, LOST HIGHWAY is not only about the human psyche, it actually seems to take place inside it.  Set in a city that looks suspiciously like Los Angeles but which is actually a place of Lynch\'s own imagining, LOST HIGHWAY like LA is both blazingly modern and resolutely retro in look and feel. Dubbed by Lynch and Gifford "a 21st-century noir horror film," the film draws its plot, or rather, its plots, from classic film noirs filled with desperate men and faithless women, expensive cars and cheap motels.  From this inventory of imagery, Lynch fashions two separate but intersecting stories, one about a jazz musician (Pullman), tortured by the notion that his wife is having an affair, who suddenly finds himself accused of her murder. The other concerns a young mechanic (Getty), drawn into a web of deceit by a temptress who is cheating on her gangster boyfriend. These two tales are linked by the fact that the women in both are played by the same actress (Arquette) and may, in fact, be the same woman. The men in each are connected by a mysterious, mind-blowing turn of events that calls into question their very identities.  Unfolding with the logic of a dream, which can be interpreted but never explained, LOST HIGHWAY is punctuated by a series of occurrences that simply can\'t have occurred: one man turns into another; a woman who may be dead seduces the man who might have killed her; a man phones himself and - inexplicably - is at the other end of the line to receive his own call! As post-modern noir detours into the realm of science fiction, it becomes apparent that in LOST HIGHWAY, the only certainty is uncertainty. That, and the fact that David Lynch remains one of the most distinctive and fascinating artists working in film today.----',	
		byLine: 'If you are a fan of the movie I highly recommend you read the rest of this synopsis at http://www.thecityofabsurdity.com/losthighway/lhsynopsis.html',
		starring: [
			'Bill Pullman',
			'Patricia Arquette',
			'Balthazar Getty',
			'Robert Blake',
			'Robert Loggia'
			],
		director: 'David Lynch',
		year: 'February 21, 1997',
		boxOffice: '$3.8 million',
		images: [
			"images/lostHighway.jpg",
			"images/lostHighway2.jpg",
			"images/lostHighway3.jpg",
			"images/lostHighway4.jpg"
			],
		reviews: [] 
		},

		{
		title: 'Jackie Brown',
		description: 'Quentin Tarantino wrote and directed this adaptation of Elmore Leonard\'s 1995 Rum Punch, switching the action from Miami to LA, and altering the central character from white to black. Ruthless arms dealer Ordell Robbie (Samuel L. Jackson), who lives with perpetually stoned beach-babe Melanie (Bridget Fonda), teams with his old buddy Louis Gara (Robert De Niro), just released from prison after serving four years for armed robbery. ATF agent Ray Nicolette (Michael Keaton) and cop Mark Dargus (Michael Bowen) bust stewardess Jackie Brown (Pam Grier), who was smuggling money into the country for Ordell. Ordell springs Jackie, but when middle-aged bail bondsman Max Cherry (Robert Forster) picks her up at the jail, he\'s attracted to her, and they choose a romantic route with detours. Mistrust and suspicions surface after Jackie pits Ordell and the cops against each other, convincing Ordell that she\'s going to double-cross the cops. Tarantino commented on the film\'s budget: "Jackie Brown only cost $12 million. You can\'t lose. You absolutely, positively can\'t lose. And you don\'t have to compromise."',
		byLine: 'written by Bhob Stewart for Rovi',	
		starring: [
			'Pam Grier',
			'Samuel L Jackson',
			'Robert Forster',
			'Robert Deniro'
			],
		director: 'Quentin Tarantino',
		year: 'December 25th, 1997',
		boxOffice: '$39.7 million',
		images: [
			"images/jbthumbs1.jpg",
			"images/jbthumbs2.jpg",
			"images/jbthumbs3.jpg",
			"images/jbthumbs4.jpg"
		],
		reviews: [] 
		},

		{
		title: 'Ravenous',
		description: "I said no food. I didn't say there was nothing to eat. Captain John Boyd (Guy Pearce) is a coward.  After inadvertently (and indirectly based on his cowardice) claiming an opposing stronghold during the Mexican-American War, he is relocated for his actions to an outpost in the Sierra Nevadas.  There, he finds himself second in command of a rag-tag group of eccentric, fellow soldiers.  Things take a turn for the eerie when a stranger (Robert Carlyle), half-famished and near death, arrives at their door.  The stranger tells them of a lost wagon train he was part of, and the unspeakable horrors the group resorted to in order to survive.  The soldiers take it as their duty to seek out the lost wagon train but not before their Native American guide explains to them the power of the Wendigo. It is a myth that whoever partakes in the flesh of man will gain that person's strengths and could very well become consumed with this cannibalistic act.  Horror and yes, a little bit of comedy ensue. ",
		byLine: 'written by Jeremy Kirk for filmschoolrejects.com',
		starring: [
			'Guy Pearce',
			'Robert Carlyle',
			'David Arquette'
			],
		director: 'Antonia Bird',
		year: 'March 19, 1999',
		boxOffice: '$2.06 million',
		images: [
			"images/ravthumbs1.jpg",
			"images/ravthumbs2.jpg",
			"images/ravthumbs3.jpg",
			"images/ravthumbs4.jpg"
		],
		reviews: [] 
		},

		{
		title: 'Audition',
		description: 'To the vast majority of non-Japanese filmgoers, Audition was their first introduction to the work of director Takashi Miike. After winning prizes at various film festivals, most notably a pair of critics\' prizes in Rotterdam, Holland, the film went on to succesful theatrical distribution (it allegedly made more money on its New York theatrical run than it did during its entire release in Japan) and almost universal critical acclaim around the world.However, what many regarded as a newcomer was in actual fact more like a seasoned veteran: Takashi Miike had by then been a film director for nearly a decade and Audition was already his 35th film. Based on a novel by Ryu Murakami, Audition was meant as both a cash-in on and a departure from the horror boom that had swept Japanese cinemas after the success of Hideo Nakata\'s Ring (1998). Miike has stated in numerous interviews that, as far as he is concerned, Audition is not a horror film. It is, however, a most unsettling film. After a deceptively languid and almost melodramatic first hour, Audition develops into a white-knuckle endurance test of viewer\'s nerves. The deliberate pacing and the abrupt change for the finale leave the audience with little to latch onto when that finale is actually under way. There is no safety catch, nothing for the audience to fall back on, which is intensified even more by the approach Miike takes to the finale itself. The acts committed by Asami (Shiina) upon the body of her fellow protagonist Aoyama (Ryo Ishibashi) are not so much portrayed as suggested in most cases. What makes the scene so effective is Miike\'s use of sound (which suggests what is not shown) and Eihi Shiina\'s revelatory performance. The elfin actress smiles as she performs her misdeeds and talks in a hushed, almost comforting voice. Her "kiri-kiri-kiri" is such a stark contrast with what she\'s doing, it makes the acts themselves even more disturbing. It\'s this contrast between the acts and the person who commits them (Shiina\'s frail, almost translucent beauty certainly adds to this) that makes the scene as powerful as it is, famously causing numerous audience walkouts wherever the film was shown.',	
		byLine: 'found at http://www.midnighteye.com/reviews/audition/#sthash.o6YT0gDy.dpuf',
		starring: [
			'Ryo Ishibashi',
			'Eihi Shiina',
			'Tetsu Sawaki'
			],
		director: 'Takashi Miike',
		year: 'March 3, 2000',
		boxOffice: 'not available',
		images: [
			"images/audthumbs1.jpg",
			"images/audthumbs2.jpg",
			"images/audthumbs3.jpg",
			"images/audthumbs4.jpg"
		],
		reviews: [] 
		},
	];
})();