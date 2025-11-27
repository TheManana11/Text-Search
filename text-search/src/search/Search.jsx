import React, { useState } from 'react'
import './style.css'
import { IoClose } from 'react-icons/io5'


const articles_array = [
  {
    "id": 1,
    "title": "Why Next.js is Dominating Full‑Stack React in 2025",
    "date": "2025-08-10",
    "text": "Next.js continues to lead among full‑stack React frameworks thanks to its support for server‑side rendering (SSR), static site generation (SSG), and API routes all in one. This flexibility lets developers build SEO‑friendly, scalable web apps, whether static sites, blogs or dynamic SaaS dashboards. The integration with modern deployment platforms further simplifies the workflow, making Next.js a go‑to choice in many projects."
  },
  {
    "id": 2,
    "title": "How Vue.js Remains a Top‑Tier Frontend Library in 2025",
    "date": "2025-07-22",
    "text": "Vue.js remains popular due to its gentle learning curve, declarative rendering, and component‑based architecture. It allows developers to build interactive user interfaces and single‑page applications efficiently. For developers wanting simplicity and flexibility — without the complexity of larger frameworks — Vue.js offers a balance of power and ease of use."
  },
  {
    "id": 3,
    "title": "Meet Fastify — a High‑Performance Backend Alternative to Express",
    "date": "2025-06-15",
    "text": "Fastify is a backend framework for Node.js optimized for speed and low overhead. Compared with more traditional frameworks, Fastify offers faster request handling, JSON‑schema validated routing, built‑in logging and TypeScript readiness. It’s a strong option when performance, scalability and minimalistic design are priorities for API or microservice development."
  },
  {
    "id": 4,
    "title": "Building Robust Python Backends with Django",
    "date": "2025-05-30",
    "text": "Django remains a popular Python web framework for data-driven applications. Thanks to its built‑in ORM, templating engine, URL routing, and robust security features, Django lets developers spin up full‑featured websites and dashboards quickly. Its \"batteries‑included\" philosophy helps reduce boilerplate and speeds up development — ideal for projects needing authentication, admin interfaces, or complex data handling."
  },
  {
    "id": 5,
    "title": "The Rise of SvelteKit — A Lightweight, Fast Frontend + Full‑Stack Option",
    "date": "2025-04-18",
    "text": "SvelteKit, the full‑stack framework built on the Svelte library, has gained traction for its minimal runtime overhead and compiler‑based approach. By compiling components to efficient vanilla JS at build time, SvelteKit delivers fast performance and smaller bundles. It also offers routing and backend/api support, making it an attractive choice for developers seeking simplicity with full‑stack capabilities."
  },
  {
    "id": 6,
    "title": "Why Developers Choose Laravel for PHP Backends in 2025",
    "date": "2025-04-02",
    "text": "Laravel remains one of the most popular PHP frameworks thanks to its elegant syntax, built‑in features (ORM, routing, authentication, queues), and extensive ecosystem. For developers building e‑commerce sites, CMS, or traditional server‑rendered web apps, Laravel provides a stable, well‑supported structure — making it a go‑to for many PHP‑based web projects."
  },
  {
    "id": 7,
    "title": "The Continued Strength of Express.js in Backend JavaScript Development",
    "date": "2025-03-25",
    "text": "Express.js remains a minimal, unopinionated framework for Node.js that is widely used for building APIs, REST services, and server‑side logic. Its simplicity and flexibility allow developers to integrate databases, templating engines, and middleware as they see fit — which makes it a strong foundation especially when you want full control over your backend architecture without constraints."
  },
  {
    "id": 8,
    "title": "Adopting Bun — A New JavaScript Runtime & Tooling for Modern Projects",
    "date": "2025-03-01",
    "text": "Bun has emerged as a promising alternative to Node.js by offering an all‑in‑one runtime, bundler, and package manager that supports TypeScript out of the box. Its performance and tooling integration appeal to developers starting new projects or seeking leaner builds — particularly for smaller projects or prototypes where speed and simplicity matter."
  },
  {
    "id": 9,
    "title": "Why Jamstack Architecture Is Growing in Popularity",
    "date": "2025-02-14",
    "text": "Jamstack — combining JavaScript, reusable APIs, and pre‑built Markup — continues to grow because it enables fast, scalable, and secure websites. By decoupling frontend and backend, Jamstack lets developers leverage headless CMS, serverless APIs or third‑party services, reducing server load and improving performance. It’s an appealing pattern for blogs, static sites, e‑commerce storefronts, and marketing pages."
  },
  {
    "id": 10,
    "title": "Choosing GraphQL for Flexible and Efficient API Data Fetching",
    "date": "2025-02-01",
    "text": "GraphQL remains a popular choice for APIs when clients need efficient and precise data fetching. Instead of multiple REST endpoints, GraphQL allows clients to request exactly the data they need in a single request. This reduces over‑fetching or under‑fetching, simplifies frontend–backend data flow, and gives more control — particularly useful for complex applications and data‑driven UIs."
  },
  {
    "id": 11,
    "title": "How Remix Is Reshaping React-Based Full‑Stack Development",
    "date": "2025-01-20",
    "text": "Remix offers a React-based full‑stack framework that emphasizes web standards, server‑rendered pages, nested routing, and built‑in form / data‑handling. It bridges the gap between traditional server‑rendered apps and modern SPA architectures; good for developers who want React’s component model but also server-side rendering, SEO, and simpler data loading logic."
  },
  {
    "id": 12,
    "title": "Why Meteor Still Appeals for Real-Time Web Apps",
    "date": "2025-01-05",
    "text": "Meteor offers an isomorphic JavaScript stack where you can use the same language on both client and server. Its built‑in real‑time data synchronization and integration with databases can simplify developing collaborative or real‑time applications like chats or dashboards — reducing boilerplate and setup overhead for such use cases."
  },
  {
    "id": 13,
    "title": "The Enduring Relevance of ASP.NET Core for Cross‑Platform Web Backends",
    "date": "2024-12-12",
    "text": "ASP.NET Core remains a robust, cross‑platform framework for building modern web APIs and backend services. Built on C#, it supports high performance, strong typing, good tooling, and enterprise‑grade features — making it a solid choice for scalable backend systems, particularly in corporate or large‑scale environments."
  },
  {
    "id": 14,
    "title": "Building Fast, Scalable Backend Services with Go (Golang)",
    "date": "2024-11-29",
    "text": "Go (Golang) continues to be popular for backend services due to its simplicity, concurrency support, and efficient performance. For APIs, microservices, or backend services that require high throughput and low latency, Go provides a reliable and fast environment — especially in systems where performance and resource management matter."
  },
  {
    "id": 15,
    "title": "Why Flask Remains a Go‑To Minimal Python Backend Framework",
    "date": "2024-11-05",
    "text": "Flask offers a lightweight, flexible framework for Python-based web backends — great for small to medium‑size projects or microservices. Its minimal core and simple routing make it easy to get started quickly, while its flexibility allows developers to add only what they need, resulting in lean and maintainable codebases."
  },
  {
    "id": 16,
    "title": "Building Modern Frontends with Solid.js and Other Lightweight Libraries",
    "date": "2024-10-20",
    "text": "Solid.js — along with other lightweight UI libraries — is gaining attention for offering reactive, fine‑grained UI updates with minimal overhead. For developers prioritizing performance, small bundle size, and reactivity — without the bigger footprint of large frameworks — these libraries provide efficient alternatives for building modern frontends."
  },
  {
    "id": 17,
    "title": "Using TypeScript to Add Type Safety and Maintainability Across Full‑Stack JS Projects",
    "date": "2024-10-07",
    "text": "TypeScript enhances JavaScript development by providing static typing, better tooling, and improved maintainability. In full‑stack JS apps (frontend + backend), TypeScript helps prevent common runtime errors, improves code readability, and makes refactoring easier — essential for larger projects or teams aiming for long‑term maintainability."
  },
  {
      "id": 18,
      "title": "Why Docker Is a Must‑Have for Modern Web Deployment and DevOps",
      "date": "2024-09-25",
      "text": "Docker has become fundamental in modern web development and deployment workflows — enabling containerization of applications for consistent development, testing, and production environments. By packaging code and dependencies into isolated containers, Docker simplifies deployment, scaling, and collaboration across teams or environments."
  },
  {
    "id": 19,
    "title": "The Growing Role of Vector Databases in Web Apps with AI and Personalization",
    "date": "2024-09-10",
    "text": "Vector databases — such as those providing similarity search or AI‑driven recommendations — are increasingly used in modern web applications to support personalized search, recommendation engines or content analysis. This shift reflects the growing integration of AI capabilities into web platforms, making them smarter and more data‑driven."
  },
  {
    "id": 20,
    "title": "Why Using REST APIs Remains Relevant Despite GraphQL’s Rise",
    "date": "2024-08-30",
    "text": "REST APIs continue to be a reliable and widely understood method for client–server communication, especially for simpler applications or services where complexity and flexibility needs are low. Their simplicity, maturity, and broad tooling support make REST a practical choice when the overhead of more advanced solutions isn’t justified."
  }
]


const highlitedText = (text, search) => {
    if(!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    return text.split(regex).map((part, i) => {
        return regex.test(part) ? (
            <span key={i} style={{ backgroundColor: 'yellow' }}>{ part }</span>
        ) : (
         <span key={i}>{ part }</span>
        )
    })
}

const Search = () => {
const [search, setSearch] = useState('');
const [articles, setArticles] = useState(articles_array);

const handleOnChange = (e) => {
    setSearch(e.target.value);
    const newArticles = articles_array.filter((article) => article.title.toLowerCase().includes(e.target.value.toLowerCase()) || article.text.toLowerCase().includes(e.target.value.toLowerCase()))
    setArticles(newArticles);
}

return (
    <div className="container">
        <h1 className='title'>Search</h1>
        <div className="search-input">
            <input type="text" placeholder='Search ... ' value={search} onChange={handleOnChange} />
            { search && ( <IoClose className='icon' onClick={() => setSearch('')} /> ) }
        </div>
        {
            articles.length === 0 ? (<p>No Articles Found!</p>): 
            (
                <>
                <p><span className='bold'>{articles.length} posts</span> were found</p>
                {articles.map((article) => {
                    return <div className='articles' key={article.id}>
                        <h2>{ highlitedText(article.title, search) }</h2>
                        <p>{ article.date }</p>
                        <p>{ highlitedText(article.text, search) }</p>
                        <hr />
                    </div>
                })}
            </>
            )
        }
    </div>
)}

export default Search