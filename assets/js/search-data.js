// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "* denotes equal contribution. Full list also on Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-check-out-prmbench-the-first-process-level-reward-benchmark-sparkles",
          title: 'Check out PRMBench, the first process-level reward benchmark! :sparkles:',
          description: "",
          section: "News",},{id: "news-we-released-openthinkimg-the-first-end-to-end-open-source-framework-that-empowers-lvlms-to-think-with-images-390-star-on-github",
          title: 'We released OpenThinkIMG, the first end-to-end open-source framework that empowers LVLMs to think...',
          description: "",
          section: "News",},{id: "news-check-out-our-survey-on-the-reasoning-paradigm-shift-from-think-with-text-to-think-with-image-1-4k-star-on-github",
          title: 'Check out our survey on the reasoning paradigm shift from “Think with Text”...',
          description: "",
          section: "News",},{id: "news-briefcase-i-joined-kimi-moonshot-ai-as-an-agent-research-intern",
          title: ':briefcase: I joined Kimi (Moonshot AI) as an Agent Research Intern.',
          description: "",
          section: "News",},{id: "news-tada-three-papers-are-accepted-by-iclr-2026-and-one-paper-is-accepted-by-tacl",
          title: ':tada: Three papers are accepted by ICLR 2026, and one paper is accepted...',
          description: "",
          section: "News",},{id: "news-briefcase-the-kimi-k2-5-tech-report-has-been-released",
          title: ':briefcase: The Kimi K2.5 tech report has been released.',
          description: "",
          section: "News",},{id: "news-we-released-agentvista-the-first-benchmark-for-multimodal-agents-on-realistic-ultra-challenging-visual-scenarios-with-long-horizon-hybrid-tool-use",
          title: 'We released AgentVista, the first benchmark for multimodal agents on realistic, ultra-challenging visual...',
          description: "",
          section: "News",},{id: "news-we-released-xskill-a-dual-stream-framework-enabling-multimodal-agents-to-continually-learn-from-experience-and-skills-without-parameter-updates",
          title: 'We released XSkill, a dual-stream framework enabling multimodal agents to continually learn from...',
          description: "",
          section: "News",},{id: "news-tada-xskill-is-accepted-by-icml-2026",
          title: ':tada: XSkill is accepted by ICML 2026!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%7A%68%61%6F%63%68%65%6E%30%31%31%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhaochen0110", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhaochen-su-4a103b295", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ponDXAYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/SuZhaochen0110", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
