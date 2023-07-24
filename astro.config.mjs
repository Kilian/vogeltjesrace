import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "latest",
        },
        display_url: "https://vogeltjesrace.nl",
        // Configure where our media assets are stored & served from
        media_folder: "public/assets/img/logos",
        public_folder: "/assets/img/logos",
        // Configure the content collections
        collections: [
          {
            name: "posts",
            label: "Blog Posts",
            label_singular: "Blog Post",
            folder: "src/pages/posts",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "publishDate",
                widget: "datetime",
                format: "DD MMM YYYY",
                date_format: "DD MMM YYYY",
                time_format: false,
                label: "Publish Date",
              },
              { name: "author", widget: "string", label: "Author Name", required: false },
              { name: "authorURL", widget: "string", label: "Author URL", required: false },
              { name: "description", widget: "string", label: "Description", required: false },
              { name: "body", widget: "markdown", label: "Post Body" },
              {
                name: "layout",
                widget: "select",
                default: "../../layouts/BlogPost.astro",
                options: [{ label: "Blog Post", value: "../../layouts/BlogPost.astro" }],
              },
            ],
          },
          {
            editor: {
              preview: false,
            },
            name: "sponsors",
            label: "Sponsors",
            label_singular: "sponsors",
            folder: "src/pages/sponsors",
            create: true,
            delete: true,
            fields: [
              { name: "name", widget: "string", label: "Naam sponsor" },
              { name: "url", widget: "string", label: "Website" },
              { name: "zichtbaar", widget: "boolean", label: "Zichtbaar op site", default: true },
              { name: "logo", widget: "image", label: "Logo" },
              {
                name: "type",
                widget: "select",
                label: "Sponsortype",
                default: "Bedrijfslogo",
                options: [
                  { label: "Platinum", value: "platinum" },
                  { label: "Goud", value: "goud" },
                  { label: "Zilver", value: "zilver" },
                  { label: "Brons", value: "brons" },
                  { label: "Bedrijfslogo Spandoeken", value: "spandoek" },
                  { label: "Bedrijfslogo", value: "logo" },
                  { label: "Speciaal", value: "speciaal" },
                  { label: "Kraam", value: "kraam" },
                  { label: "Geen", value: "geen" },
                ],
              },
            ],
          },
        ],
      },
      //previewStyles: ['../../styles/blog.css'],
    }),
  ],
});
