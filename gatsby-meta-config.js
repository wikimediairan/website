/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Iranian Wikimedians User Group",
  description:
    "An independent community promoting Persian content and Iran-related topics across Wikimedia projects.",
  author: "Iranian Wikimedians User Group",
  siteUrl: "https://wikimediairan.org",
  lang: "en",
  utterances: "wikimediairan/website-comment",
  links: {
    meta: "https://meta.wikimedia.org/wiki/Iranian_Wikimedians_User_Group",
    github: "https://github.com/wikimediairan/website",
  },
  favicon: "src/images/logo/logo-circle.svg",
  socials: {
    twitter: "https://x.com/wikimedia_Iran",
    instagram: "https://www.instagram.com/wikimedia_iran/",
    telegram: "https://t.me/Wikimedia_Iran",
    linkedin: "https://www.linkedin.com/company/WikimediaIran",
  },
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
