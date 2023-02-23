export const pagesQuery = /* GraphQL */ `
query {
	Pages {
		docs {
			id
			slug
			  sections {
			  __typename
			  ... on FirstFoldSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockName
					blockType
					title
				  }
				  ... on SubtitleBlock {
					blockName
					blockType
					subtitle                        
				  }
				  ... on CtaBlock {
					blockName
					blockType
					primary {
					  buttonDisplayText
					  buttonUrl
					}
					secondary {
					  buttonDisplayText
					  buttonUrl
					}
					tertiary {
					  buttonDisplayText
					  buttonUrl
					}
				  }
				  ... on StylingBlock {
					blockName
					blockType
					css
				  }
				}
			  }
			  ... on ColumnSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockName
					blockType
					title
				  }
				  ... on ColumnBlock {
					blockName
					blockType
					columns {
					  title
					  description
					  primary {
						buttonDisplayText
						buttonUrl
					  }
					  formatOption
					}            
				  }
				  ... on StylingBlock {
					blockName
					blockType
					css
				  }
				}
			  }
			  ... on AlternatingRowSection {
				blockType
				blocks {
					__typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on AlternatingRowBlock {
					blockType
					rows {
					  image {
						url
					  }
					  title
					  description
					  primary {
						buttonUrl
						buttonDisplayText
					  }
					  formatOption
					}
				  }
				}
			  }
			  ... on VideoSection {
				blockType
				blocks {
					__typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on VideoBlock {
					blockType
					link
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on PartnersSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on PartnersBlock {
					blockType
					organizations {
					  organization {
						logo {
						  url
						}
						link
					  }
					}
				  }
				}
			  }
			  ... on TeamSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on TeamBlock {
					blockType
					persons {
					  person {
						name
						organization
						title
						description
						linkedIn
						twitter
						role
						image {
						  url
						}
					  }
					}
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on AdvisorsSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on AdvisorsBlock {
					blockType
					persons {
					  person {
						name
						organization
						title
						description
						linkedIn
						twitter
						role
						image {
						  url
						}
					  }
					}
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on MentorsSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on MentorsBlock {
					blockType
					persons {
					  person {
						name
						organization
						title
						description
						linkedIn
						twitter
						role
						image {
						  url
						}
					  }
					}
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on RichTextSection {
				blockType
				blocks {
				  __typename
				  ... on RichTextBlock {
					blockType
					text
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on MetricsSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on MetricsBlock {
					blockType
					metrics {
					  value
					  description
					}
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on PhotosSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on PhotosBlock {
					blockType
					photos {
					  photo {
						url
					  }
					}
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on VideoSection {
				blockType
				blocks {
					__typename
				  ... on TitleBlock {
					blockType
					  title
					}
				  ... on VideoBlock {
					blockType
					link
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			  ... on TestimoniesSection {
				blockType
				blocks {
				  __typename
				  ... on TitleBlock {
					blockType
					title
				  }
				  ... on TestimoniesBlock {
					blockType
					testimonies {
					  testimony {
						name
						company
						role
						description
						image {
						  url
						}
					  }
					}
				  }
				  ... on StylingBlock {
					blockType
					css
				  }
				}
			  }
			}
		} 
	}
}
`;

export const postsQuery: string = /* GraphQL */ `
query {
	Posts {
	  docs {
		id
		title
		author {
			name 
		  image {
			url
		  }
		}
		bannerImage {
		  url
		}
		cardImage {
		  url
		}
		content {
		  __typename
		  ... on SubtitleBlock {
			blockType
			subtitle
		  }
		  ... on RichTextBlock {
			blockType
			text
		  }
		  ... on SignUpBlock {
			blockType
			id
		  }
		  ... on PhotosBlock {
			blockType
			photos {
			  photo {
				url
			  }
			}
		  }
		}
		status
		publishedDate
	  }
	}
  }
  
`;

export const navQuery: string = /* GraphQL */ `
	query {
		Nav {
			links {
				text
				url
			}
		}
	}
`;

export const metadataQuery: string = /* GraphQL */ `
	query {
		Metadatum {
			discord
			linkedIn
			twitter
			youtube
		}
	}
`;

export const subscriberMutation = (email: string): string => {
	let mutation = /* GraphQL */ `
		mutation {
			createSubscriberFormSubmission(data: {email: "${email}"}, draft: false) {
				id
			}
		}	
	`;
	return mutation;
};

export const contactMutation = ({
	fullName,
	organization,
	email,
	message
}: {
	fullName: string;
	organization: string;
	email: string;
	message: string;
}): string => {
	let mutation = /* GraphQL */ `
		mutation {
			createContactFormSubmission(
				data: {
					fullName: "${fullName}",
					organization: "${organization}",
					email: "${email}",
					message: "${message}"
				},
				draft: false
			) {
				id
			}
		}
	`;
	return mutation;
};
