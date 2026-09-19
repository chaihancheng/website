import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  FaFilePdf,
  FaGlobe,
  FaYoutube,
  FaGithub
} from "react-icons/fa";


import {
  SiArxiv,
  SiHuggingface,
  SiBilibili
} from "react-icons/si";

import {motion} from "framer-motion";

/* =========================================================
   NAVIGATION
========================================================= */


const navigation = [
  {
    index: "01",
    name: "Home",
    id: "home",
  },
  {
    index: "02",
    name: "Article",
    id: "article",
  },
  {
    index: "03",
    name: "Presentation",
    id: "presentation",
  },
  {
    index: "04",
    name: "Video",
    id: "video",
  },
  {
    index: "05",
    name: "Example",
    id: "example",
  },
  {
    index: "06",
    name: "About",
    id: "about",
  },
];

/* =========================================================
   ARTICLE LINKS
========================================================= */

const articleLinks=[

{
icon:<FaGlobe/>,
title:"Online",
language:"中文",
href:"https://iot-book.github.io/zh/1/",
},


{
icon:<FaGlobe/>,
title:"Online",
language:"English",
href:"https://iot-book.github.io/zh/1/",
},


{
icon:<FaFilePdf/>,
title:"PDF",
language:"中文",
href:"https://arxiv.org/pdf/2609.20813"
},


{
icon:<FaFilePdf/>,
title:"PDF",
language:"English",
href:"https://arxiv.org/pdf/2609.20813"
},


{
icon:<SiArxiv/>,
title:"arXiv",
language:"External Link",
href:"https://arxiv.org/search/?query=transformer&searchtype=all&source=header"
},


{
icon:<SiHuggingface/>,
title:"Hugging Face",
language:"External Link",
href:"https://huggingface.co/"
}

];

/* =========================================================
   PRESENTATION LINKS
========================================================= */

const presentationLinks = [
  {
    id: "01",
    type: "WEB",
    title: "Online",
    language: "中文",
    href: "https://iot-book.github.io/zh/1/",
  },
  {
    id: "02",
    type: "WEB",
    title: "Online",
    language: "English",
    href: "https://iot-book.github.io/zh/1/",
  },
  {
    id: "03",
    type: "PDF",
    title: "PDF",
    language: "中文",
    href: "https://arxiv.org/pdf/2609.20813",
  },
  {
    id: "04",
    type: "PDF",
    title: "PDF",
    language: "English",
    href: "https://arxiv.org/pdf/2609.20813",
  },
];

/* =========================================================
   VIDEO LINKS
========================================================= */

const videoLinks=[


{
icon:<SiBilibili/>,
title:"Bilibili",
language:"中文",
href:"https://www.bilibili.com/video/BV1x44y1P7s2/?spm_id_from=333.337.search-card.all.click&vd_source=17feb4ee152e8140db234feda7b7e668"
},


{
icon:<FaYoutube/>,
title:"YouTube",
language:"中文",
href:"https://www.youtube.com/watch?v=scCxvBCh0EE"
},


{
icon:<FaYoutube/>,
title:"YouTube",
language:"English",
href:"https://www.youtube.com/watch?v=scCxvBCh0EE"
}

];
/* =========================================================
   EXAMPLE LINKS
========================================================= */

const exampleLinks=[

{
icon:<FaGlobe/>,
title:"Online View",
language:"",
href:"https://iot-book.github.io/zh/1/"
},


{
icon:<FaFilePdf/>,
title:"PDF Download",
language:"",
href:"https://arxiv.org/pdf/2609.20813"
}

];

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [transitioning,setTransitioning]=useState(false);
  const [newsPage,setNewsPage]=useState(0);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);


  const [cursor,setCursor]=useState({
  x:0,
  y:0
});

const newsItems=[

{
date:"May 12, 2024",
text:"PicoScenes Radar devices measurements, see Wi-Frame Format."
},

{
date:"Mar. 19, 2024",
text:"PicoScenes now supports UDPRemoteLogger."
},

{
date:"Mar. 19, 2024",
text:"New sensing capability and system update."
},

{
date:"Mar. 12, 2024",
text:"We are pleased to announce new hardware capability."
}

];
  /* =======================================================
     NAVBAR SCROLL EFFECT
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){

entry.target.classList.add("visible");

}
else{

entry.target.classList.remove("visible");

}
        });
      },
      {
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     LOCK PAGE WHEN MENU OPENS
  ======================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =======================================================
     ESC CLOSE MENU
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  /* =======================================================
     SMOOTH NAVIGATION
  ======================================================= */


const goTo = (id) => {

  const element = document.getElementById(id);

  if(element){

    element.scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  }

};


  return (
  <main

    className="site"

    onMouseMove={(event)=>{

      setCursor({

        x:event.clientX,

        y:event.clientY

      });

    }}

  >
    {
transitioning && (

<div className="page-transition"></div>

)
}
      {/* ===================================================
          TOP NAVIGATION
      =================================================== */}

      <header className="topbar">


<div className="logo">

SHORT TITLE

</div>



<nav className="top-navigation">


{
navigation.map((item)=>(

<a

key={item.id}

href="#"

className="top-nav-link"

onClick={(e)=>{

e.preventDefault();

goTo(item.id);

}}

>

{item.name}

</a>

))

}


</nav>


</header>

    

      {/* ===================================================
          HERO
      =================================================== */}

      <section
id="home"
className="hero"
>
        <div
          className="hero-image"
          ref={heroImageRef}
        ></div>



        {/* Moving particles */}

        <div className="pixel-layer">
          {Array.from({ length: 32 }).map(
            (_, index) => (
              <span
                key={index}
                style={{
                  "--i": index,
                }}
              ></span>
            )
          )}
        </div>

        <div className="hero-content">
          <div className="hero-label">
            <span></span>

            INTERACTIVE RESEARCH PROJECT
          </div>

          <h1>
            数据拟合是真的
            <br />

            <span>
              学习吗？
            </span>
          </h1>

          <p className="hero-question">
            确定的信息，信息量为 0 吗？
          </p>

          <p className="hero-description">
            Exploring sensing, information and
            intelligent systems through a new
            perspective.
          </p>

          <button
            className="explore-button"
            onClick={() => {
              goTo("article");
            }}
          >
            <span>
              Explore the project
            </span>

            <span className="circle-arrow">
              ↓
            </span>
          </button>
        </div>

        <div className="hero-news">

  <div className="news-title">
    News
  </div>


  <div className="news-line"></div>
      <div className="news-list">


{
newsItems
.slice(
newsPage*3,
newsPage*3+3
)
.map((item,index)=>(


<div
className="news-item"
key={index}
>


<span>
{item.date}
</span>


<p>
{item.text}
</p>


</div>


))
}


</div>



<div className="news-pagination">


{
Array.from(
{
length:
Math.ceil(newsItems.length/3)
}
)
.map((_,index)=>(


<button

key={index}

className={
newsPage===index
?
"active"
:
""
}

onClick={()=>setNewsPage(index)}

>


</button>


))
}


</div>

 
  </div>

        <div className="hero-bottom">
          <div>
            <span>
              01
            </span>

            RESEARCH
          </div>

          <div className="hero-scroll">
            SCROLL TO EXPLORE

            <span className="scroll-line"></span>
          </div>
        </div>
      </section>


      
      {/* ===================================================
          ARTICLE
      =================================================== */}

      <ResourceSection
        id="article"
        sectionNumber="02"
        title="Article"
        eyebrow="RESEARCH OUTPUT"
        description="Read the complete research article through different formats and platforms. Chinese and English versions are provided together with supplementary research resources."
        cardNumber="01"
        cardLabel="PUBLICATION"
        cardTitle={
          <>
            Read the
            <br />
            research.
          </>
        }
        links={articleLinks}
        theme="light"
        visual="circles"
      />

      {/* ===================================================
          PRESENTATION
      =================================================== */}

      <ResourceSection
        id="presentation"
        sectionNumber="03"
        title="Presentation"
        eyebrow="PRESENT THE IDEA"
        description="Explore the project through concise visual presentations. Both online slides and downloadable PDF versions are available in Chinese and English."
        cardNumber="02"
        cardLabel="PRESENTATION"
        cardTitle={
          <>
            See the
            <br />
            whole idea.
          </>
        }
        links={presentationLinks}
        theme="dark"
        visual="signal"
      />

      {/* ===================================================
          VIDEO
      =================================================== */}

      <ResourceSection
        id="video"
        sectionNumber="04"
        title="Video"
        eyebrow="WATCH THE STORY"
        description="Watch project demonstrations, research talks and visual explanations through different video platforms and languages."
        cardNumber="03"
        cardLabel="MEDIA"
        cardTitle={
          <>
            Watch the
            <br />
            research.
          </>
        }
        links={videoLinks}
        theme="light"
        visual="play"
      />

      {/* ===================================================
          EXAMPLE
      =================================================== */}

      <ResourceSection
        id="example"
        sectionNumber="05"
        title="Example"
        eyebrow="INTERACTIVE EXPERIENCE"
        description="Explore an interactive example of the project or download the accompanying document for offline reading."
        cardNumber="04"
        cardLabel="EXPERIENCE"
        cardTitle={
          <>
            Try it
            <br />
            yourself.
          </>
        }
        links={exampleLinks}
        theme="dark"
        visual="orbit"
      />

      {/* ===================================================
          ABOUT
      =================================================== */}

      <section
        id="about"
        className="about-section"
      >
        <div className="about-top reveal">
          <span>
            06 / ABOUT
          </span>

          <h2>
            Science becomes more useful
            <br />

            when it is{" "}

            <em>
              accessible.
            </em>
          </h2>
        </div>

        <div className="about-bottom reveal">
          <div>
            <strong>
              SHORT TITLE
            </strong>

            <p>
              An interactive research website.
            </p>
          </div>

          <div className="about-links">
            <a
              href="#"
              onClick={(event) =>
                event.preventDefault()
              }
            >
              GitHub ↗
            </a>

            <a
              href="#"
              onClick={(event) =>
                event.preventDefault()
              }
            >
              Paper ↗
            </a>

            <a
              href="#"
              onClick={(event) =>
                event.preventDefault()
              }
            >
              Contact ↗
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="footer">
        <div>
          SHORT TITLE
        </div>

        <div>
          © 2026 Research Project
        </div>

        <button
          onClick={() => {
            goTo("home");
          }}
        >
          Back to top ↑
        </button>
      </footer>
      <div

className="cursor-glow"

style={{

left:`${cursor.x}px`,

top:`${cursor.y}px`

}}

/>

    </main>
  );
}

/* =========================================================
   RESOURCE SECTION
========================================================= */

function ResourceSection({
  id,
  sectionNumber,
  title,
  eyebrow,
  description,
  cardNumber,
  cardLabel,
  cardTitle,
  links,
  theme,
  visual,
}) {
  return (
    <section
      id={id}
      className={`resource-page ${
        theme === "dark"
          ? "resource-dark"
          : "resource-light"
      } ${id}-bg`}
    >
      {theme === "dark" && (
        <div className="resource-dark-grid"></div>
      )}

      <div className="resource-page-top reveal">

        <div className="resource-page-heading">
          <div>
            <p className="resource-eyebrow">
              {eyebrow}
            </p>

            <h2>
              {title}
              <span>
                .
              </span>
            </h2>
          </div>

          <p className="resource-description">
            {description}
          </p>
        </div>
      </div>

      <div className="resource-page-body">
        <div className="resource-intro reveal">
          <span className="resource-big-number">
            {cardNumber}
          </span>

          <div className="resource-intro-title">
            <p>
              {cardLabel}
            </p>

            <h3>
              {cardTitle}
            </h3>
          </div>

          {visual === "circles" && (
            <div className="resource-decoration">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {visual === "signal" && (
            <div className="resource-signal">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {visual === "play" && (
            <div className="resource-play">
              <span>
                ▶
              </span>
            </div>
          )}

          {visual === "orbit" && (
            <div className="example-orbit">
              <span></span>
              <i></i>
            </div>
          )}
        </div>

        <div className="resource-list reveal">
          <div className="resource-list-header">
            <span>
              NO.
            </span>

            <span>
              TYPE
            </span>

            <span>
              RESOURCE
            </span>

            <span>
              ACCESS
            </span>
          </div>

          {links.map((item,index)=>(
<ResourceLink
key={index}
item={item}
/>
))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SINGLE RESOURCE LINK
========================================================= */

function ResourceLink({ item }) {


return (

<a

className="resource-link"

href={item.href}

target="_blank"

rel="noopener noreferrer"

>

<div className="resource-icon">

{item.icon}

</div>


<div className="resource-link-main">


<span className="resource-link-title">

{item.title}

</span>


<span className="resource-link-language">

{item.language}

</span>


</div>


<div className="resource-link-arrow">

↗

</div>


</a>

);

}

export default App;