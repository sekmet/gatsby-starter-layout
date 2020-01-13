import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

type MetaProps = JSX.IntrinsicElements['meta'];

interface ISEOProps {
  title: string;
  defaultMetaTitle?: boolean;
  description?: string;
  keywords?: string;
  image?: string;
  lang: string;
  meta: MetaProps[];
}

function SEO({
               title,
               defaultMetaTitle,
               description,
               keywords,
               image,
               lang,
               meta
             }: ISEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const metaKeywords = keywords || site.siteMetadata.keywords;

  const metaTitle =
    title && !defaultMetaTitle ? title : site.siteMetadata.title;

  const metaImage = image || '/social-share.png';

  const defaultMeta: MetaProps[] = [
    {
      name: 'description',
      content: metaDescription
    },
    {
      property: 'description',
      content: metaDescription
    },
    {
      property: 'keywords',
      content: metaKeywords
    },
    {
      property: 'og:title',
      content: metaTitle
    },
    {
      property: 'og:description',
      content: metaDescription
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: metaImage
    },
    {
      name: 'twitter:card',
      content: `summary`
    },
    {
      name: 'twitter:title',
      content: metaTitle
    },
    {
      name: 'twitter:description',
      content: metaDescription
    },
    {
      name: 'twitter:image',
      content: metaImage
    }
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[...defaultMeta, ...meta]}
      link={[
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'shortcut icon',
          type: 'image/vnd.microsoft.icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32x32.png',
          sizes: '32x32'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-16x16.png',
          sizes: '16x16'
        }
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: []
};

export default SEO;
