export const Data = {
	id: 1,
		created_at: "2006-10-09T18:21:51.000Z",
	author: "pg",
	title: "Y Combinator",
	url: "http://ycombinator.com",
	text: null,
	points: 57,
	parent_id: null,
	children:
	[
		{
			id: 15,
			created_at: "2006-10-09T19:51:01.000Z",
			author: "sama",
			text: "&#34;the rising star of venture capital&#34; -unknown VC eating lunch on SHR",
			points: 5,
			parent_id: 1,
			children:
				[
					{
						id: 17,
						created_at: "2006-10-09T19:52:45.000Z",
						author: "pg",
						text: "Is there anywhere to eat on Sandhill Road?",
						points: 5,
						parent_id: 15,
						children: [ ]
					}
				]
		}
	]
};

export const User ={

	username: "pg",
		about: "PG's bio",
	karma: 99999
};
const story = {
	title: 'Stephen Hawking has died',
	likes: 6051,
	author: 'Cogito',
	posted: "2016-10-02",
	numberOfComments: 3,
	hnLink: 'https://news.ycombinator.com/item?id=16582136',
	originLink: 'http://www.bbc.com/news/uk-43396008'
};
export const Data1 = {
	id: 16582136,
	created_at: "2018-03-14T03:50:30.000Z",
	author: "Cogito",
	title: "Stephen Hawking has died",
	url: "http://www.bbc.com/news/uk-43396008",
	text: null,
	points: 6051,
	parent_id: null,
	children:
		[
			{
				id: 15,
				created_at: "2006-10-09T19:51:01.000Z",
				author: "sama",
				text: "&#34;the rising star of venture capital&#34; -unknown VC eating lunch on SHR",
				points: 5,
				parent_id: 16582136,
				children:
					[
						{
							id: 17,
							created_at: "2006-10-09T19:52:45.000Z",
							author: "pg",
							text: "Is there anywhere to eat on Sandhill Road?",
							points: 5,
							parent_id: 15,
							children: [ ]
						}
					]
			}
		]
};
