const ninja=document.querySelector("ninja-keys");ninja.data=[{id:"nav-about",title:"about",section:"Navigation",handler:()=>{window.location.href="/al-folio/"}},{id:"nav-blog",title:"blog",description:"",section:"Navigation",handler:()=>{window.location.href="/al-folio/blog/"}},{id:"nav-publications",title:"publications",description:"publications by categories in reversed chronological order. generated by jekyll-scholar.",section:"Navigation",handler:()=>{window.location.href="/al-folio/publications/"}},{id:"nav-projects",title:"projects",description:"A growing collection of your cool projects.",section:"Navigation",handler:()=>{window.location.href="/al-folio/projects/"}},{id:"nav-repositories",title:"repositories",description:"Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",section:"Navigation",handler:()=>{window.location.href="/al-folio/repositories/"}},{id:"nav-cv",title:"cv",description:"This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",section:"Navigation",handler:()=>{window.location.href="/al-folio/cv/"}},{id:"nav-teaching",title:"teaching",description:"Materials for courses you taught. Replace this text with your description.",section:"Navigation",handler:()=>{window.location.href="/al-folio/teaching/"}},{id:"nav-people",title:"people",description:"members of the lab or group",section:"Navigation",handler:()=>{window.location.href="/al-folio/people/"}},{id:"dropdown-publications",title:"publications",description:"",section:"Dropdown",handler:()=>{window.location.href=""}},{id:"dropdown-projects",title:"projects",description:"",section:"Dropdown",handler:()=>{window.location.href=""}},{id:"dropdown-blog",title:"blog",description:"",section:"Dropdown",handler:()=>{window.location.href="/al-folio/blog/"}},{id:"post-a-post-with-tabs",title:"a post with tabs",description:"this is what included tabs in a post could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/tabs/"}},{id:"post-a-post-with-typograms",title:"a post with typograms",description:"this is what included typograms code could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/typograms/"}},{id:"post-a-post-that-can-be-cited",title:"a post that can be cited",description:"this is what a post that can be cited looks like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/post-citation/"}},{id:"post-a-post-with-pseudo-code",title:"a post with pseudo code",description:"this is what included pseudo code could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/pseudocode/"}},{id:"post-a-post-with-code-diff",title:"a post with code diff",description:"this is how you can display code diffs",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/code-diff/"}},{id:"post-a-post-with-advanced-image-components",title:"a post with advanced image components",description:"this is what advanced image components could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/advanced-images/"}},{id:"post-a-post-with-vega-lite",title:"a post with vega lite",description:"this is what included vega lite code could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/vega-lite/"}},{id:"post-a-post-with-geojson",title:"a post with geojson",description:"this is what included geojson code could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/geojson-map/"}},{id:"post-a-post-with-echarts",title:"a post with echarts",description:"this is what included echarts code could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/echarts/"}},{id:"post-a-post-with-chart-js",title:"a post with chart.js",description:"this is what included chart.js code could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2024/chartjs/"}},{id:"post-a-post-with-tikzjax",title:"a post with TikZJax",description:"this is what included TikZ code could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/tikzjax/"}},{id:"post-a-post-with-bibliography",title:"a post with bibliography",description:"an example of a blog post with bibliography",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/post-bibliography/"}},{id:"post-a-post-with-jupyter-notebook",title:"a post with jupyter notebook",description:"an example of a blog post with jupyter notebook",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/jupyter-notebook/"}},{id:"post-a-post-with-custom-blockquotes",title:"a post with custom blockquotes",description:"an example of a blog post with custom blockquotes",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/custom-blockquotes/"}},{id:"post-a-post-with-table-of-contents-on-a-sidebar",title:"a post with table of contents on a sidebar",description:"an example of a blog post with table of contents on a sidebar",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/sidebar-table-of-contents/"}},{id:"post-a-post-with-audios",title:"a post with audios",description:"this is what included audios could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/audios/"}},{id:"post-a-post-with-videos",title:"a post with videos",description:"this is what included videos could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/videos/"}},{id:"post-displaying-beautiful-tables-with-bootstrap-tables",title:"displaying beautiful tables with Bootstrap Tables",description:"an example of how to use Bootstrap Tables",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/tables/"}},{id:"post-a-post-with-table-of-contents",title:"a post with table of contents",description:"an example of a blog post with table of contents",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2023/table-of-contents/"}},{id:"post-a-post-with-giscus-comments",title:"a post with giscus comments",description:"an example of a blog post with giscus comments",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2022/giscus-comments/"}},{id:"post-displaying-external-posts-on-your-al-folio-blog",title:"Displaying External Posts on Your al-folio Blog",description:"",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2022/displaying-external-posts-on-your-al-folio-blog/"}},{id:"post-a-post-with-redirect",title:"a post with redirect",description:"you can also redirect to assets like pdf",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2022/redirect/"}},{id:"post-a-post-with-diagrams",title:"a post with diagrams",description:"an example of a blog post with diagrams",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2021/diagrams/"}},{id:"post-a-distill-style-blog-post",title:"a distill-style blog post",description:"an example of a distill-style blog post and main elements",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2021/distill/"}},{id:"post-a-post-with-github-metadata",title:"a post with github metadata",description:"a quick run down on accessing github metadata.",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2020/github-metadata/"}},{id:"post-a-post-with-twitter",title:"a post with twitter",description:"an example of a blog post with twitter",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2020/twitter/"}},{id:"post-a-post-with-disqus-comments",title:"a post with disqus comments",description:"an example of a blog post with disqus comments",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2015/disqus-comments/"}},{id:"post-a-post-with-math",title:"a post with math",description:"an example of a blog post with some math",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2015/math/"}},{id:"post-a-post-with-code",title:"a post with code",description:"an example of a blog post with some code",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2015/code/"}},{id:"post-a-post-with-images",title:"a post with images",description:"this is what included images could look like",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2015/images/"}},{id:"post-a-post-with-formatting-and-links",title:"a post with formatting and links",description:"march &amp; april, looking forward to summer",section:"Posts",handler:()=>{window.location.href="/al-folio/blog/2015/formatting-and-links/"}},{id:"project-project-1",title:"project 1",description:"with background image",section:"Projects",handler:()=>{window.location.href="/al-folio/projects/1_project/"}},{id:"project-project-2",title:"project 2",description:"a project with a background image and giscus comments",section:"Projects",handler:()=>{window.location.href="/al-folio/projects/2_project/"}},{id:"project-project-3-with-very-long-name",title:"project 3 with very long name",description:"a project that redirects to another website",section:"Projects",handler:()=>{window.location.href="/al-folio/projects/3_project/"}},{id:"project-project-4",title:"project 4",description:"another without an image",section:"Projects",handler:()=>{window.location.href="/al-folio/projects/4_project/"}},{id:"project-project-5",title:"project 5",description:"a project with a background image",section:"Projects",handler:()=>{window.location.href="/al-folio/projects/5_project/"}},{id:"project-project-6",title:"project 6",description:"a project with no image",section:"Projects",handler:()=>{window.location.href="/al-folio/projects/6_project/"}},{id:"socials-email",title:"Send email",section:"Socials",handler:()=>{window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D","_blank")}},{id:"socials-google-scholar",title:"Google Scholar",section:"Socials",handler:()=>{window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ","_blank")}},{id:"socials-rss",title:"RSS Feed",section:"Socials",handler:()=>{window.open("/al-folio/feed.xml","_blank")}},{id:"light-theme",title:"Change theme to light",description:"Change the theme of the site to Light",section:"Theme",handler:()=>{setThemeSetting("light")}},{id:"dark-theme",title:"Change theme to dark",description:"Change the theme of the site to Dark",section:"Theme",handler:()=>{setThemeSetting("dark")}},{id:"system-theme",title:"Use system default theme",description:"Change the theme of the site to System Default",section:"Theme",handler:()=>{setThemeSetting("system")}}];