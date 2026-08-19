import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as Fragment, d as maybeRenderHead, f as renderHead, i as renderComponent, m as createRenderInstruction, p as addAttribute, u as renderTemplate, x as createAstro } from "./server_B3uirvln.mjs";
import { t as createComponent } from "./compiler_7Klmclb_.mjs";
import { n as getReviews } from "./db_B0GqMx6A.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/config.ts
var siteConfig = {
	name: "Khushdip Kucheriya",
	title: "Asst. Professor of Mathematics",
	description: "Portfolio website of Khushdip Kucheriya, Mathematics Educator",
	accentColor: "#1d4ed8",
	social: {
		email: "khushdip1480@gmail.com",
		linkedin: "https://linkedin.com/in/",
		twitter: "",
		github: "",
		youtube: "https://youtube.com/@aimsacademy2022",
		phone: "+919158564763"
	},
	aboutMe: `I am a SET-qualified Mathematics educator dedicated to helping engineering students master advanced mathematical concepts through conceptual clarity, analytical rigor, and modern technology-driven teaching methods.

My core focus is on simplifying advanced mathematical concepts by spearheading innovative, technology-driven, and bilingual teaching methodologies. This approach boosts student engagement beyond traditional classrooms and delivers structured, exam-focused boot camps that improve academic performance and confidence.

Beyond teaching Engineering Mathematics, my expertise spans across Pure and Applied Mathematics, including Linear Algebra, Complex Analysis, and Modern Algebra. I also have a strong background in providing advanced problem-solving guidance for competitive exams and assisting students in mastering proof-based mathematics.`,
	skills: [
		"Engineering Mathematics",
		"Linear Algebra",
		"Complex Analysis",
		"Modern Algebra",
		"Academic Content Development",
		"Data Handling in Excel",
		"MS Office (Advanced)"
	],
	projects: [],
	experience: [
		{
			company: "Guru Gobind Singh College Of Engineering, Nashik",
			title: "Assistant Professor",
			dateRange: "March 2022 – Present",
			bullets: [
				"Teaching Engineering Mathematics M-I, M-II, M-III for Civil, Mechanical, Electrical, etc.",
				"Spearheaded innovative, technology-driven, and bilingual teaching methodologies to simplify advanced mathematical concepts and boost student engagement.",
				"NAAC Criterion 3 Coordinator (Research Papers, Patents, Social activity like NSS) and faced NBA for Mechanical Engineering twice.",
				"Delivered structured exam-focused boot camps that improved academic performance and confidence."
			]
		},
		{
			company: "PIE AIM, Delhi",
			title: "Faculty (Doubt Faculty)",
			dateRange: "2020 – 2022",
			bullets: [
				"Served as Doubt Faculty for Linear Algebra, Complex Analysis, and Modern Algebra.",
				"Provided advanced problem-solving guidance for competitive exams.",
				"Assisted students in mastering proof-based mathematics."
			]
		},
		{
			company: "Research, Patent & FDP",
			title: "Researcher",
			dateRange: "Ongoing",
			bullets: [
				"Authored 'Matrix: An Effective tool Of Solving complex Problems'.",
				"Published in the 11th National Level Conference on Recent Advances in Computer Engineering (RACE) (Paper ID: RACE2442) hosted by M.E.S. Wadia College of Engineering, Pune.",
				"Working on developing Meta-heuristic algorithms for solving Multi-Objective Projects."
			]
		}
	],
	education: [
		{
			school: "Savitribai Phule Pune University",
			degree: "SET (State Eligibility Test) - Pure Mathematics",
			dateRange: "Sept 2022",
			achievements: ["QUALIFIED in Pure Mathematics (Jan 2022 exam, result Sept 2022)"]
		},
		{
			school: "Post-Graduation",
			degree: "M.Sc (Mathematics) - Applied Mathematics",
			dateRange: "March 2019",
			achievements: ["First Class"]
		},
		{
			school: "Graduation",
			degree: "B.Sc (Mathematics) - Pure Mathematics",
			dateRange: "March 2014",
			achievements: ["First Class"]
		}
	]
};
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
	const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
	const hasEducation = siteConfig.education && siteConfig.education.length > 0;
	return renderTemplate`${maybeRenderHead($$result)}<header id="header" class="fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300" data-astro-cid-nen7h5rs><nav class="max-w-7xl mx-auto px-8 py-4" data-astro-cid-nen7h5rs><ul class="flex items-center gap-8 justify-center" data-astro-cid-nen7h5rs><li data-astro-cid-nen7h5rs><a href="#about" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-nen7h5rs>About</a></li>${hasProjects && renderTemplate`<li data-astro-cid-nen7h5rs><a href="#projects" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-nen7h5rs>Projects</a></li>`}${hasExperience && renderTemplate`<li data-astro-cid-nen7h5rs><a href="#experience" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-nen7h5rs>Experience</a></li>`}${hasEducation && renderTemplate`<li data-astro-cid-nen7h5rs><a href="#education" class="text-gray-700 hover:text-black transition-colors font-medium" data-astro-cid-nen7h5rs>Education</a></li>`}</ul></nav></header>${renderScript($$result, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div id="hero" class="relative isolate overflow-hidden bg-white py-24 md:h-screen"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")} data-astro-cid-ge2uvauf><!-- Gradient overlay --><div class="absolute inset-0 -z-10"${addAttribute(`background: radial-gradient(ellipse 800px 1200px at 0% 0%, ${siteConfig.accentColor}40 0%, ${siteConfig.accentColor}25 20%, ${siteConfig.accentColor}10 40%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.8) 90%, white 100%)`, "style")} data-astro-cid-ge2uvauf></div><svg aria-hidden="true" class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" data-astro-cid-ge2uvauf><defs data-astro-cid-ge2uvauf><pattern x="50%"${addAttribute(-1, "y")} id="0787a7c5-978c-4f66-83c7-11c213f99cb7"${addAttribute(200, "width")}${addAttribute(200, "height")} patternUnits="userSpaceOnUse" data-astro-cid-ge2uvauf><path d="M.5 200V.5H200" fill="none" data-astro-cid-ge2uvauf></path></pattern><pattern id="programming-symbols" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse" data-astro-cid-ge2uvauf><text x="50" y="50"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="24" transform="rotate(-15)" data-astro-cid-ge2uvauf>&lt;/&gt;</text><text x="150" y="100"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="20" transform="rotate(10)" data-astro-cid-ge2uvauf>${void 0}</text><text x="250" y="80"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="18" transform="rotate(-5)" data-astro-cid-ge2uvauf>=&gt;</text><text x="100" y="200"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="22" transform="rotate(15)" data-astro-cid-ge2uvauf>[]</text><text x="300" y="180"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="20" transform="rotate(-10)" data-astro-cid-ge2uvauf>&lt;&gt;</text><text x="200" y="250"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="24" transform="rotate(5)" data-astro-cid-ge2uvauf>()</text><text x="50" y="320"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="18" transform="rotate(-8)" data-astro-cid-ge2uvauf>::</text><text x="350" y="300"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="22" transform="rotate(12)" data-astro-cid-ge2uvauf>==</text><text x="150" y="350"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="20" transform="rotate(-15)" data-astro-cid-ge2uvauf>++</text><text x="250" y="370"${addAttribute(siteConfig.accentColor, "fill")} font-family="monospace" font-size="24" transform="rotate(8)" data-astro-cid-ge2uvauf>;</text></pattern></defs><rect fill="url(#programming-symbols)" width="100%" height="100%" opacity="0.2" data-astro-cid-ge2uvauf></rect><rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%"${addAttribute(0, "stroke-width")} data-astro-cid-ge2uvauf></rect></svg><div class="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center" data-astro-cid-ge2uvauf><div data-astro-cid-ge2uvauf><h2 class="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 animate-fade-in" data-astro-cid-ge2uvauf>Hello! 👋</h2><h1 class="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200" data-astro-cid-ge2uvauf>I'm <span${addAttribute({ color: siteConfig.accentColor }, "style")} data-astro-cid-ge2uvauf>${siteConfig.name}</span></h1><p class="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 animate-fade-in animation-delay-400" data-astro-cid-ge2uvauf>${siteConfig.title}</p><div class="mt-8 sm:mt-10 animate-fade-in animation-delay-400" data-astro-cid-ge2uvauf><a href="/khush_CV_Resume.pdf" download="Khushdip_Kucheriya_Resume.pdf" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-all hover:scale-105 shadow-md hover:shadow-lg"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")} data-astro-cid-ge2uvauf><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ge2uvauf><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-ge2uvauf></path></svg>Get Resume</a></div></div></div><div class="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in animation-delay-600" data-astro-cid-ge2uvauf>${siteConfig.social?.email && renderTemplate`<a${addAttribute(`mailto:${siteConfig.social.email}`, "href")} aria-label="Email" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-ge2uvauf><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-ge2uvauf><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ge2uvauf></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" data-astro-cid-ge2uvauf></path><path d="M3 7l9 6l9 -6" data-astro-cid-ge2uvauf></path></svg></a>`}${siteConfig.social?.linkedin && renderTemplate`<a${addAttribute(siteConfig.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-ge2uvauf><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-ge2uvauf>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ge2uvauf></path><path d="M8 11v5" data-astro-cid-ge2uvauf></path><path d="M8 8v.01" data-astro-cid-ge2uvauf></path><path d="M12 16v-5" data-astro-cid-ge2uvauf></path><path d="M16 16v-3a2 2 0 1 0 -4 0" data-astro-cid-ge2uvauf></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" data-astro-cid-ge2uvauf></path>` })}</svg></a>`}${siteConfig.social?.twitter && renderTemplate`<a${addAttribute(siteConfig.social.twitter, "href")} target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-ge2uvauf><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-ge2uvauf>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ge2uvauf></path><path d="M4 4l11.733 16h4.267l-11.733 -16z" data-astro-cid-ge2uvauf></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" data-astro-cid-ge2uvauf></path>` })}</svg></a>`}${siteConfig.social?.github && renderTemplate`<a${addAttribute(siteConfig.social.github, "href")} target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="transition-colors duration-300 hover:text-[var(--accent-color)]" data-astro-cid-ge2uvauf><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" data-astro-cid-ge2uvauf>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ge2uvauf></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-ge2uvauf></path>` })}</svg></a>`}</div></div>`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/About.astro
var $$About = createComponent(($$result, $$props, $$slots) => {
	const paragraphs = siteConfig.aboutMe.split("\n").filter((p) => p.trim() !== "");
	return renderTemplate`${maybeRenderHead($$result)}<section id="about" class="px-8 py-16 sm:px-12 sm:py-24 md:px-16 md:py-32 lg:px-24 bg-slate-50/50"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"><div class="lg:col-span-4 lg:sticky lg:top-24"><h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">About Me</h2><div class="w-20 h-1.5 mt-6 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div></div><div class="lg:col-span-8"><div class="space-y-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium">${paragraphs.map((paragraph) => renderTemplate`<p>${paragraph.trim()}</p>`)}</div><div class="mt-16 pt-10 border-t border-gray-200/60"><h3 class="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Core Skills</h3><div class="flex flex-wrap gap-3 sm:gap-4">${siteConfig.skills.map((skill) => renderTemplate`<span class="px-5 py-2.5 bg-white text-gray-800 rounded-xl text-sm sm:text-base font-semibold shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300">${skill}</span>`)}</div></div></div></div></div></section>`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/About.astro", void 0);
//#endregion
//#region src/components/Projects.astro
var $$Projects = createComponent(($$result, $$props, $$slots) => {
	const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
	return renderTemplate`${hasProjects && renderTemplate`${maybeRenderHead($$result)}<section id="projects" class="p-8 sm:p-12 md:p-16 lg:p-24"><div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"><div class="lg:col-span-4"><h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">Projects</h2><div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div></div><div class="lg:col-span-8"><div class="space-y-8">${siteConfig.projects.map((project, index) => {
		const Component = project.link ? "a" : "div";
		const linkProps = project.link ? {
			href: project.link,
			target: "_blank",
			rel: "noopener noreferrer"
		} : {};
		return renderTemplate`<div class="group relative">${renderComponent($$result, "Component", Component, {
			...linkProps,
			"class": `block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 ${project.link ? "hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1" : ""}`
		}, { "default": ($$result) => renderTemplate`${project.link && renderTemplate`<div class="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700"><svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17"></path></svg></div>`}<div class="space-y-4"><div><span class="text-sm font-mono"${addAttribute({ color: siteConfig.accentColor }, "style")}>0${index + 1}</span><h3 class="text-xl sm:text-2xl font-bold text-gray-900 mt-1">${project.name}</h3></div><p${addAttribute(`text-base sm:text-lg text-gray-600 leading-relaxed ${project.link ? "pr-12 sm:pr-14 md:pr-16" : ""}`, "class")}>${project.description}</p>${project.skills && project.skills.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1.5 sm:gap-2 pt-2">${project.skills.map((skill) => renderTemplate`<span${addAttribute(`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${project.link ? "group-hover:bg-gray-800" : ""}`, "class")}>${skill}</span>`)}</div>`}</div>` })}</div>`;
	})}</div></div></div></div></section>`}`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Projects.astro", void 0);
//#endregion
//#region src/components/Experience.astro
var $$Experience = createComponent(($$result, $$props, $$slots) => {
	const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
	return renderTemplate`${hasExperience && renderTemplate`${maybeRenderHead($$result)}<section id="experience" class="p-8 sm:p-12 md:p-16 lg:p-24"><div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"><div class="lg:col-span-4"><h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">Experience</h2><div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div></div><div class="lg:col-span-8"><div class="relative">${siteConfig.experience.map((exp, index) => renderTemplate`<div class="relative mb-12 last:mb-0"><div class="absolute left-1/2 -top-2 w-4 h-4 bg-white border-2 rounded-full -translate-x-1/2 z-20 transition-all duration-300"${addAttribute(`border-color: ${siteConfig.accentColor}; background-color: ${siteConfig.accentColor}`, "style")}></div>${index < siteConfig.experience.length - 1 && renderTemplate`<div class="absolute left-1/2 bottom-0 w-0.5 h-12 bg-gray-300 -translate-x-1/2 translate-y-full z-10"></div>`}<div class="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"><div><h3 class="text-lg sm:text-xl font-semibold text-gray-900">${exp.title}</h3><p class="text-base sm:text-lg"${addAttribute(`color: ${siteConfig.accentColor}`, "style")}>${exp.company}</p></div><span class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">${exp.dateRange}</span></div><ul class="space-y-2">${exp.bullets.map((bullet) => renderTemplate`<li class="flex items-start"><span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span><span class="text-sm sm:text-base text-gray-600">${bullet}</span></li>`)}</ul></div></div>`)}</div></div></div></div></section>`}`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Experience.astro", void 0);
//#endregion
//#region src/components/Education.astro
var $$Education = createComponent(($$result, $$props, $$slots) => {
	const hasEducation = siteConfig.education && siteConfig.education.length > 0;
	return renderTemplate`${hasEducation && renderTemplate`${maybeRenderHead($$result)}<section id="education" class="p-8 sm:p-12 md:p-16 lg:p-24"><div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"><div class="lg:col-span-4"><h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">Education</h2><div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")}></div></div><div class="lg:col-span-8"><div class="space-y-8">${siteConfig.education.map((edu) => renderTemplate`<div class="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300"><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4"><div><h3 class="text-lg sm:text-xl font-semibold text-gray-900">${edu.degree}</h3><p class="text-base sm:text-lg"${addAttribute(`color: ${siteConfig.accentColor}`, "style")}>${edu.school}</p></div><span class="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">${edu.dateRange}</span></div><ul class="space-y-2">${edu.achievements.map((achievement) => renderTemplate`<li class="flex items-start"><span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></span><span class="text-sm sm:text-base text-gray-600">${achievement}</span></li>`)}</ul></div>`)}</div></div></div></div></section>`}`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Education.astro", void 0);
//#endregion
//#region src/components/Reviews.astro
createAstro("https://astro.build");
var $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Reviews;
	let success = false;
	if (new URL(Astro.request.url).searchParams.get("review_success") === "1") success = true;
	const reviews = await getReviews();
	return renderTemplate`${maybeRenderHead($$result)}<section id="reviews" class="p-8 sm:p-12 md:p-16 lg:p-24 bg-gray-50 dark:bg-[#111] border-t border-gray-200 dark:border-gray-800" data-astro-cid-4bjs7uhz><div data-astro-cid-4bjs7uhz><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start" data-astro-cid-4bjs7uhz><div class="lg:col-span-4" data-astro-cid-4bjs7uhz><h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-white" data-astro-cid-4bjs7uhz>Reviews</h2><div class="w-[75px] h-[5px] mt-2 rounded-full"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")} data-astro-cid-4bjs7uhz></div><p class="mt-4 text-gray-600 dark:text-gray-400" data-astro-cid-4bjs7uhz>See what people are saying or leave a review yourself!</p></div><div class="lg:col-span-8 space-y-12" data-astro-cid-4bjs7uhz><!-- Review Form --><div class="bg-white dark:bg-[#1a1a1a] p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300" data-astro-cid-4bjs7uhz><h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white" data-astro-cid-4bjs7uhz>Leave a Review</h3>${success && renderTemplate`<div class="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-md" data-astro-cid-4bjs7uhz>Thank you for your feedback!</div>`}<form id="review-form" method="POST" action="/api/review" class="space-y-5" data-astro-cid-4bjs7uhz><div class="grid grid-cols-1 md:grid-cols-2 gap-5" data-astro-cid-4bjs7uhz><div data-astro-cid-4bjs7uhz><label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-4bjs7uhz>Name</label><input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-[#111] dark:text-white px-4 py-2 border transition-colors" data-astro-cid-4bjs7uhz></div><div data-astro-cid-4bjs7uhz><label for="role" class="block text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-4bjs7uhz>Role / Company (Optional)</label><input type="text" id="role" name="role" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-[#111] dark:text-white px-4 py-2 border transition-colors" data-astro-cid-4bjs7uhz></div></div><div data-astro-cid-4bjs7uhz><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-astro-cid-4bjs7uhz>Rating</label><div class="star-rating text-4xl inline-flex flex-row-reverse justify-end" data-astro-cid-4bjs7uhz><input type="radio" id="star5" name="rating" value="5" checked data-astro-cid-4bjs7uhz><label for="star5" title="5 stars" data-astro-cid-4bjs7uhz>★</label><input type="radio" id="star4" name="rating" value="4" data-astro-cid-4bjs7uhz><label for="star4" title="4 stars" data-astro-cid-4bjs7uhz>★</label><input type="radio" id="star3" name="rating" value="3" data-astro-cid-4bjs7uhz><label for="star3" title="3 stars" data-astro-cid-4bjs7uhz>★</label><input type="radio" id="star2" name="rating" value="2" data-astro-cid-4bjs7uhz><label for="star2" title="2 stars" data-astro-cid-4bjs7uhz>★</label><input type="radio" id="star1" name="rating" value="1" data-astro-cid-4bjs7uhz><label for="star1" title="1 star" data-astro-cid-4bjs7uhz>★</label></div></div><div data-astro-cid-4bjs7uhz><label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-4bjs7uhz>Review</label><textarea id="content" name="content" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-[#111] dark:text-white px-4 py-3 border transition-colors" data-astro-cid-4bjs7uhz></textarea></div><div class="mt-4" data-astro-cid-4bjs7uhz><button type="submit" id="submit-review-btn" class="group inline-flex items-center justify-center py-3 px-8 border border-transparent shadow-md text-base font-semibold rounded-lg text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-[#111] transition-all duration-200 transform hover:-translate-y-0.5"${addAttribute(`background-color: ${siteConfig.accentColor};`, "style")} data-astro-cid-4bjs7uhz><span data-astro-cid-4bjs7uhz>Submit Review</span><svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-4bjs7uhz><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-4bjs7uhz></path></svg></button></div></form></div>${renderScript($$result, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Reviews.astro?astro&type=script&index=0&lang.ts")}<!-- Reviews List --><div class="space-y-6" data-astro-cid-4bjs7uhz>${reviews.length === 0 ? renderTemplate`<p class="text-center text-gray-500 dark:text-gray-400 p-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg" data-astro-cid-4bjs7uhz>No reviews yet. Be the first to leave one!</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-4bjs7uhz>${reviews.map((review) => renderTemplate`<div class="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300 flex flex-col" data-astro-cid-4bjs7uhz><div class="flex text-yellow-400 mb-3 text-lg" data-astro-cid-4bjs7uhz>${Array.from({ length: 5 }).map((_, i) => renderTemplate`<span${addAttribute(i < review.rating ? "text-yellow-400 drop-shadow-sm" : "text-gray-300 dark:text-gray-600", "class")} data-astro-cid-4bjs7uhz>★</span>`)}</div><p class="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed italic" data-astro-cid-4bjs7uhz>"${review.content}"</p><div class="flex items-center mt-auto pt-4 border-t border-gray-50 dark:border-gray-800" data-astro-cid-4bjs7uhz><div class="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shadow-sm"${addAttribute(`background-color: ${siteConfig.accentColor}`, "style")} data-astro-cid-4bjs7uhz>${review.name.charAt(0).toUpperCase()}</div><div data-astro-cid-4bjs7uhz><h4 class="font-semibold text-gray-900 dark:text-white leading-tight" data-astro-cid-4bjs7uhz>${review.name}</h4>${review.role && renderTemplate`<p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5" data-astro-cid-4bjs7uhz>${review.role}</p>`}</div></div></div>`)}</div>`}</div></div></div></div></section>`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Reviews.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;
	const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;
	const hasEducation = siteConfig.education && siteConfig.education.length > 0;
	return renderTemplate`${maybeRenderHead($$result)}<footer class="relative bg-gray-50 border-t border-gray-200"><div class="mx-auto max-w-6xl px-6 py-12 lg:px-8"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8"><div class="flex flex-col gap-4"><h3 class="text-2xl font-bold text-gray-800">${siteConfig.name}</h3><p class="text-base text-gray-600">${siteConfig.title}</p><div class="flex gap-x-6"><a${addAttribute(`mailto:${siteConfig.social.email}`, "href")} aria-label="Email" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg></a><a${addAttribute(siteConfig.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 1 0 -4 0"></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path></svg></a><a${addAttribute(siteConfig.social.twitter, "href")} target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg></a><a${addAttribute(siteConfig.social.github, "href")} target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-gray-600 transition-colors duration-300 hover:text-[var(--accent-color)]"${addAttribute(`--accent-color: ${siteConfig.accentColor}`, "style")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a></div></div><div class="hidden md:block flex flex-col md:items-end gap-4"><nav class="flex gap-x-8"><a href="#about" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">About</a>${hasProjects && renderTemplate`<a href="#projects" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">Projects</a>`}${hasExperience && renderTemplate`<a href="#experience" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">Experience</a>`}${hasEducation && renderTemplate`<a href="#education" class="text-sm text-gray-600 hover:text-gray-800 transition-colors">Education</a>`}</nav><p class="text-sm text-gray-500">© ${(/* @__PURE__ */ new Date()).getFullYear()}${siteConfig.name}. All rights reserved.</p></div></div></div><!-- Decorative pattern --><div class="absolute inset-0 -z-10 overflow-hidden"><svg aria-hidden="true" class="absolute bottom-0 left-0 w-full h-24 text-gray-100"><pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M0 50 Q 25 40, 50 50 T 100 50" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.4"></path></pattern><rect width="100%" height="100%" fill="url(#footer-pattern)"></rect></svg></div></footer>`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/components/Footer.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="description"${addAttribute(siteConfig.description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"><title>${siteConfig.name} - ${siteConfig.title}</title>${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "About", $$About, {})}${renderComponent($$result, "Projects", $$Projects, {})}${renderComponent($$result, "Experience", $$Experience, {})}${renderComponent($$result, "Education", $$Education, {})}${renderComponent($$result, "Reviews", $$Reviews, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/pages/index.astro", void 0);
var $$file = "C:/Users/omkar/OneDrive/Desktop/projects/khush sir/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
