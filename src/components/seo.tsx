import React from "react"

import { Helmet } from "react-helmet"

import useSiteMetadata from "~/src/hooks/useSiteMetadata"

import defaultOpenGraphImage from "../images/og-default.png"

const DEFAULT_LANG = "en"

type Meta = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[]

interface SEOProperties
  extends Pick<Queries.MarkdownRemarkFrontmatter, "title"> {
  desc?: Queries.Maybe<string>
  image?: Queries.Maybe<string>
  meta?: Meta
}

const SEO: React.FC<SEOProperties> = ({ title, desc = "", image }) => {
  const site = useSiteMetadata()
  const description = desc || site.description
  let ogImageUrl =
    site.siteUrl ?? "" + (image || (defaultOpenGraphImage as string))
  // override
  ogImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Iranian_Wikimedians_User_Group_Logo_-_Color_-_Horizontal.svg/512px-Iranian_Wikimedians_User_Group_Logo_-_Color_-_Horizontal.svg.png?20240823210538"

  return (
    <Helmet
      htmlAttributes={{ lang: site.lang ?? DEFAULT_LANG }}
      title={title ?? ""}
      titleTemplate={`%s | ${site.title}`}
      meta={
        [
          {
            name: "description",
            content: description,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: description,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: site.author,
          },
          {
            name: "twitter:title",
            content: title,
          },
          {
            name: "twitter:description",
            content: description,
          },
          {
            property: "image",
            content: ogImageUrl,
          },
          {
            property: "og:image",
            content: ogImageUrl,
          },
          {
            property: "twitter:image",
            content: ogImageUrl,
          },
        ] as Meta
      }
    />
  )
}

export default SEO
