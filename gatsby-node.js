const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;

	createRedirect({
		fromPath: `/deploy`,
		toPath: `/build#deploy`,
		isPermanent: true,
	});

	createRedirect({
		fromPath: `/developer-portal`,
		toPath: `/build`,
		isPermanent: true,
	});

	const { createPage } = actions
	const result = await graphql(`
	  {
		allMarkdownRemark {
		  edges {
			node {
			  frontmatter {
				template
				slug
			  }
			}
		  }
		}
	  }
	`)

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.frontmatter.slug) {
			createPage({
				path: node.frontmatter.slug,
				component: path.resolve(`./src/templates/${node.frontmatter.template ? node.frontmatter.template : 'defaultTemplate'}.js`),
				context: {
					slug: node.frontmatter.slug,
				},
			})
		}
	})
};
