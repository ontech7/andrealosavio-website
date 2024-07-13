const HOST_ANDREALOSAVIO_FE = "https://www.andrealosavio.com";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>

    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

      <url>
        <loc>${`${HOST_ANDREALOSAVIO_FE}/`}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${`${HOST_ANDREALOSAVIO_FE}/chi-sono`}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${`${HOST_ANDREALOSAVIO_FE}/servizi`}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>

      <url>
        <loc>${`${HOST_ANDREALOSAVIO_FE}/portfolio`}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${`${HOST_ANDREALOSAVIO_FE}/contattami`}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.7</priority>
      </url>

      <url>
        <loc>${`${HOST_ANDREALOSAVIO_FE}/privacy-policy`}</loc>
        <changefreq>never</changefreq>
        <priority>0.2</priority>
      </url>
      <url>
        <loc>${`${HOST_ANDREALOSAVIO_FE}/cookie-policy`}</loc>
        <changefreq>never</changefreq>
        <priority>0.2</priority>
      </url>

    </urlset>`;
}

const SiteMap = () => {};

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
