/*
 boIf:
	settings.showThumbnails
	&& settings.style !== "default"
	&& hit._tags[0] === "story"
	&& state !== "ask-hn"
	&& state !== "polls"
*/

export const settings = {
	showThumbnails: false,
	style: "default",
	dateRange: "all",
	page: 4
};

export const state = "";
export const isSlowConnection = false;

export const results = {
	hits:
		[
			{
				title: "Stephen Hawking has died",
				url: "http://www.bbc.com/news/uk-43396008",
				author: "Cogito",
				points: 6015,
				story_text: null,
				comment_text: null,
				_tags:
					[
						"story"
					],
				num_comments: 436,
				objectID: "16582136",
				_highlightResult:
					{
						title:
							{
								value: "Stephen Hawking has died",
								matchLevel: "none",
								matchedWords: [ ]
							},
						url:
							{
								value: "http://www.bbc.com/news/uk-43396008",
								matchLevel: "none",
								matchedWords: [ ]
							},
						author:
							{
								value: "<em>Cogito</em>",
								matchLevel: "full",
								matchedWords:
									[
										"Cogito"
									]
							}
					}
			},
			{
				title: "A Message to Our Customers",
				url: "http://www.apple.com/customer-letter/",
				author: "epaga",
				points: 5771,
				story_text: null,
				comment_text: null,
				_tags:
					[
						"story"
					],
				num_comments: 967,
				objectID: "11116274",
				_highlightResult:
					{
						title:
							{
								value: "A Message to Our Customers",
								matchLevel: "none",
								matchedWords: [ ]
							},
						url:
							{
								value: "http://www.apple.com/customer-letter/",
								matchLevel: "none",
								matchedWords: [ ]
							},
						author:
							{
								value: "<em>epaga</em>",
								matchLevel: "full",
								matchedWords:
									[
										"epaga"
									]
							}
					}
			},
			{
				title: "Steve Jobs has passed away.",
				url: "http://www.apple.com/stevejobs/",
				author: "patricktomas",
				points: 4271,
				story_text: null,
				comment_text: null,
				_tags:
					[
						"story"
					],
				num_comments: 376,
				objectID: "3078128",
				_highlightResult:
					{
						title:
							{
								value: "Steve Jobs has passed away.",
								matchLevel: "none",
								matchedWords: [ ]
							},
						url:
							{
								value: "http://www.apple.com/stevejobs/",
								matchLevel: "none",
								matchedWords: [ ]
							},
						author:
							{
								value: "<em>patricktomas</em>",
								matchLevel: "full",
								matchedWords:
									[
										"patricktomas"
									]
							}
					}
			},
			{
				title: "Reflecting on one very, very strange year at Uber",
				url: "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
				author: "grey-area",
				points: 4107,
				story_text: null,
				comment_text: null,
				_tags:
					[
						"story"
					],
				num_comments: 1014,
				objectID: "13682022",
				_highlightResult:
					{
						title:
							{
								value: "Reflecting on one very, very strange year at Uber",
								matchLevel: "none",
								matchedWords: [ ]
							},
						url:
							{
								value: "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
								matchLevel: "none",
								matchedWords: [ ]
							},
						author:
							{
								value: "<em>grey-area</em>",
								matchLevel: "full",
								matchedWords:
									[
										"grey-area"
									]
							}
					}
			},
			{
				title: "F.C.C. Repeals Net Neutrality Rules",
				url: "https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html",
				author: "panny",
				points: 3384,
				story_text: null,
				comment_text: null,
				_tags:
					[
						"story"
					],
				num_comments: 1397,
				objectID: "15924794",
				_highlightResult:
					{
						title:
							{
								value: "F.C.C. Repeals Net Neutrality Rules",
								matchLevel: "none",
								matchedWords: [ ]
							},
						url:
							{
								value: "https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html",
								matchLevel: "none",
								matchedWords: [ ]
							},
						author:
							{
								value: "<em>panny</em>",
								matchLevel: "full",
								matchedWords:
									[
										"panny"
									]
							}
					}
			},
			{
				title: "Show HN: This up votes itself",
				url: "http://news.ycombinator.com/vote?for=3742902&amp;dir=up&amp;whence=%6e%65%77%65%73%74",
				author: "olalonde",
				points: 3381,
				story_text: null,
				comment_text: null,
				_tags:
					[
						"story"
					],
				num_comments: 83,
				objectID: "3742902",
				_highlightResult:
					{
						title:
							{
								value: "Show HN: This up votes itself",
								matchLevel: "none",
								matchedWords: [ ]
							},
						url:
							{
								value: "http://news.ycombinator.com/vote?for=3742902&amp;dir=up&amp;whence=%6e%65%77%65%73%74",
								matchLevel: "none",
								matchedWords: [ ]
							},
						author:
							{
								value: "<em>olalonde</em>",
								matchLevel: "full",
								matchedWords:
									[
										"olalonde"
									]
							}
					}
			},
			{
				title: "Cloudflare Reverse Proxies Are Dumping Uninitialized Memory",
				url: "https://bugs.chromium.org/p/project-zero/issues/detail?id=1139",
				author: "tptacek",
				points: 3238,
				story_text: null,
				comment_text: null,
				_tags:
					[
						"story"
					],
				num_comments: 992,
				objectID: "13718752",
				_highlightResult:
					{
						title:
							{
								value: "Cloudflare Reverse Proxies Are Dumping Uninitialized Memory",
								matchLevel: "none",
								matchedWords: [ ]
							},
						url:
							{
								value: "https://bugs.chromium.org/p/project-zero/issues/detail?id=1139",
								matchLevel: "none",
								matchedWords: [ ]
							},
						author:
							{
								value: "<em>tptacek</em>",
								matchLevel: "full",
								matchedWords:
									[
										"tptacek"
									]
							}
					}
			},
		],
			page: 0,
	nbHits: 7,
	nbPages: 4,
	hitsPerPage: 2,
	processingTimeMS: 1,
	query: "Cogito",
	params: "query=Cogito"
};

export const hit = results.hits[0];

