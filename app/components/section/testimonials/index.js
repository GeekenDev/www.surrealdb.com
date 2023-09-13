import Component from '@glimmer/component';
import { cache } from '@ascua/decorators';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@arg count = 100;

	@cache get testimonials() {
		return [
			{
				img: '/static/img/developers/chrishay.png',
				date: new Date('2022-09-04'),
				name: 'Chris Hay, CTO at IBM iX',
				text: "It's fast, small, can run on browser, edge and cloud.  It can handle large data.  It can run in-memory like redis or disk like sqlite and it can run multi-cluster.   It can sync between cloud and edge.  And to top of it off, it can also run as a graphdb. It's interesting.",
				link: 'https://twitter.com/chrishayuk/status/1566350575373008898?s=20&t=FyK0E3bPxzYl0L41DBO_1w',
			},
			{
				img: '/static/img/developers/zafaransari.png',
				date: new Date('2022-03-28'),
				name: 'Zafar Ansari',
				user: 'ansarizafar',
				text: "SurrealDB is like a dream database for every developer. The features set is too good to be true. Is it real???",
				link: 'https://discord.com/channels/902568124350599239/902568124350599242/958055360059547739',
			},
			{
				img: '/static/img/developers/julian6bG.png',
				date: new Date('2022-08-20'),
				name: 'Julian6bG',
				user: 'Julian6bG',
				text: "Holy shit, I'm blown away! It looks beyond awesome. Can't wait to check it out tonight!",
				link: 'https://www.reddit.com/r/rust/comments/wt3ygg/comment/il22sv7/?utm_source=share&utm_medium=web2x&context=3',
			},
			{
				img: '/static/img/developers/greven.png',
				date: new Date('2022-08-20'),
				name: 'greven',
				user: 'greven',
				text: "This looks fantastic, congrats! This paired with Elixir Phoenix could be something else for real time. Need to try it out.",
				link: 'https://www.reddit.com/r/rust/comments/wt3ygg/comment/il2pyyg/?utm_source=share&utm_medium=web2x&context=3',
			},
			{
				img: '/static/img/developers/mugendee.png',
				date: new Date('2022-08-20'),
				name: 'mugendee',
				user: 'mugendee',
				text: "This is amazing! I must say. Can't wait to play around with it.",
				link: 'https://www.reddit.com/r/rust/comments/wt3ygg/comment/il2af42/?utm_source=share&utm_medium=web2x&context=3',
			},
			{
				img: '/static/img/developers/juanmanuelverges.png',
				date: new Date('2022-06-25'),
				name: 'Juan Manuel Verges',
				user: '',
				text: "Researching the different repos out there, came to find this amazing project. I'm not sure how, but I want to get involved.",
				link: 'https://discord.com/channels/902568124350599239/970333598035112017/990273973793206292',
			},
			{
				img: '/static/img/developers/_abdfnx.png',
				date: new Date('2022-02-22'),
				name: '@_abdfnx',
				user: '@_abdfnx',
				text: "I'm so exited about your version 1.0.0, keep up your awesome work.",
				link: 'https://mobile.twitter.com/_abdfnx',
			},
			{
				img: '/static/img/developers/mariomonteiro.png',
				date: new Date('2022-08-01'),
				name: 'Mário Monteiro',
				user: 'koakh',
				text: "I came across surrealdb today and it seems impressive, all the features in one solution like nosql, graphs, distributed, realtime, permissions, auth, rust and node driver, seem too good to be true. Now started playing with it 😀",
				link: 'https://discord.com/channels/902568124350599239/970333598035112017/1003418467002744852',
			},
			{
				img: '/static/img/developers/olepeterson.png',
				date: new Date('2022-08-16'),
				name: 'Ole Peterson',
				user: 'peteole',
				text: "I was looking for something exactly like this for a long time! I have a feeling there was much too little going on in the database market for the last years and a rewrite from scratch that fixes the historical issues of sql seems like the right thing we need!",
				link: 'https://dev.to/peteole/comment/212l2',
			},
			{
				img: '/static/img/developers/makeshiftindie.png',
				date: new Date('2022-08-05'),
				name: 'Makeshift',
				user: 'makeshiftindie',
				text: "love this idea. I wonder how to apply it to my next ETL project",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/ivanderbu2.png',
				date: new Date('2022-08-05'),
				name: 'ivanderbu2',
				user: 'ivanderbu2',
				text: "Checked your QL it does look much simpler compared to Neo4j at least for inserting data. I've no doubt that there is a huge demand for solution like SurrealDB.",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/pdyc.png',
				date: new Date('2022-08-05'),
				name: 'pdyc',
				user: 'pdyc',
				text: "My weekend is ruined since i will be playing with surrealdb this weekend :-)",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/ghidra.png',
				date: new Date('2022-08-05'),
				name: 'Ghidra',
				user: 'Ghidra',
				text: "Very cool stuff for sure; it looks like a very interesting + useful product.",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/martingronlund.png',
				date: new Date('2022-08-05'),
				name: 'Martin Grönlund',
				user: '',
				text: "This looks like a wonderful piece of tech, similar to what I've had in mind for a while!",
				link: 'https://www.linkedin.com/feed/update/urn:li:groupPost:4973032-6961346750498447360?commentUrn=urn%3Ali%3Acomment%3A%28groupPost%3A4973032-6961346750498447360%2C6961367160866676738%29',
			},
			{
				img: '/static/img/developers/lukehamilton.png',
				date: new Date('2022-08-09'),
				name: 'Luke Hamilton',
				user: '',
				text: "Interesting, I am doing a poc now on using a graphDB for a project I'm planning. Been looking a lot at dgraph however I would prefer a rust based system due to our IoT requirements.",
				link: 'https://www.linkedin.com/feed/update/urn:li:activity:6961346751261802496/?commentUrn=urn%3Ali%3Acomment%3A(groupPost%3A4973032-6961346750498447360%2C6961676369349009408)',
			},
			{
				img: '/static/img/developers/kamyarinlanloo.png',
				date: new Date('2022-08-05'),
				name: 'Kamyar Inanloo',
				user: '',
				text: "Wow! Well done! I am thinking about creating more high performance products in Rust but you did it!",
				link: 'https://www.linkedin.com/feed/update/urn:li:groupPost:4973032-6961346750498447360?commentUrn=urn%3Ali%3Acomment%3A%28groupPost%3A4973032-6961346750498447360%2C6961384432641392640%29',
			},
			{
				img: '/static/img/developers/mr_olafsson.png',
				date: new Date('2022-08-05'),
				name: 'mr_olafsson',
				user: 'mr_olafsson',
				text: "Wow that's hugely ambitious!! Your landing page looks amazing.",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
			{
				img: '/static/img/developers/jwalker.png',
				date: new Date('2022-08-05'),
				name: 'Justin Walker',
				user: 'jwalker',
				text: "The site looks great and the docs are sooo clean... well done! I will definitely look into using this when I start on the dev work for my project!",
				link: 'https://www.indiehackers.com/post/just-launched-a-new-scalable-cloud-graph-database-any-feedback-users-testers-appreciated-bddb237166?commentId=-N8jfieKRHG5J0qH0NpG',
			},
		];
	}

}
