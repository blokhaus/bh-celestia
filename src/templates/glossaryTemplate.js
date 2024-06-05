import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BreadCrumb from "../components/breadcrumb";
import SocialShare from "../components/socialShare";
import GlossaryNav from "../components/glossary-nav";
import Seo from "../components/seo";

export default function Template({
	data, // this prop will be injected by the GraphQL query below
}) {
	const { frontmatter, html } = data.markdownRemark;

	return (
		<Layout>
			<Seo title={frontmatter.title} description={frontmatter.description} />
			<div className="glossary-subpage">
				<main>
					<div className="container">
						<BreadCrumb title={frontmatter.title} />
						<h1 className={"main mb-4"}>{frontmatter.title}</h1>

						<SocialShare title={frontmatter.title} url={frontmatter.slug} />
						<div className="glossary-content" dangerouslySetInnerHTML={{ __html: html }} />
					</div>
					<div className={"container wide"}>
						<GlossaryNav url={frontmatter.slug} />
					</div>
				</main>
			</div>
		</Layout>
	);
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`