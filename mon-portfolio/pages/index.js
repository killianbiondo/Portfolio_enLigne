import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaArrowRight, FaCode, FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const featuredProjects = [
    {
        title: 'Petit jeu Pong',
        description: 'Un jeu interactif conçu pour pratiquer JavaScript et créer une expérience simple et ludique.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        image: '/images/pong.png',
        github: 'https://github.com/killianbiondo/Pong_P5',
        live: '/documents/pong.zip',
        liveLabel: 'Télécharger le jeu',
    },
    {
        title: 'Mon premier site web',
        description: 'Un site autour de la photographie, mon premier projet web mis en ligne.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/killianbiondo/Site_Web',
        live: 'https://www.biondokillian.fr/',
        liveLabel: 'Voir le site',
    },
];

function SectionTransition({ fill }) {
    return (
        <svg
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full md:h-20 ${fill}`}
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
        >
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,40 1440,28 L1440,80 L0,80 Z" />
            <path
                className="home-section-wave"
                d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,40 1440,28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}

export default function Home() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('[data-home-reveal]');
        const sections = document.querySelectorAll('[data-home-section]');

        if (!('IntersectionObserver' in window)) {
            revealElements.forEach((element) => element.classList.add('is-visible'));
            sections.forEach((section) => section.classList.add('is-active'));
            return;
        }

        document.documentElement.classList.add('home-motion-ready');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        revealElements.forEach((element) => observer.observe(element));

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle('is-active', entry.isIntersecting);
                });
            },
            { threshold: 0, rootMargin: '-12% 0px -12% 0px' }
        );

        sections.forEach((section) => sectionObserver.observe(section));

        return () => {
            observer.disconnect();
            sectionObserver.disconnect();
            document.documentElement.classList.remove('home-motion-ready');
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Head>
                <title>Killian Biondo — Portfolio développeur web</title>
                <meta
                    name="description"
                    content="Découvrez le parcours, les projets et les compétences de Killian Biondo, étudiant en Bachelor Information Science et passionné par le développement web."
                />
            </Head>
            <Header />
            <main className="pt-20">
                <section data-home-section className="relative isolate overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950 to-slate-950" />
                    <div className="home-hero-glow home-hero-glow-one" aria-hidden="true" />
                    <div className="home-hero-glow home-hero-glow-two" aria-hidden="true" />
                    <div className="home-section-content container mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
                        <div>
                            <p data-home-reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                                <span className="h-2 w-2 rounded-full bg-blue-400" />
                                Étudiant en Bachelor Information Science
                            </p>
                            <h1 data-home-reveal className="home-reveal-delay-1 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Bienvenue.
                                <span className="mt-2 block text-blue-300">Je crée des projets web utiles et soignés.</span>
                            </h1>
                            <p data-home-reveal className="home-reveal-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                                <strong>Développeur web passionné par la création d’expériences numériques modernes, intuitives et accessibles</strong>, je m&apos;appelle Killian. J&apos;accorde une attention particulière à la qualité du code, à l&apos;ergonomie et aux détails qui font la différence. Découvrez mon parcours, mes compétences et les projets qui reflètent mon savoir-faire.
                            </p>
                            <div data-home-reveal className="home-reveal-delay-2 mt-9 flex flex-wrap gap-4">
                                <Link
                                    href="#projets"
                                    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
                                >
                                    Découvrir mes projets <FaArrowRight aria-hidden="true" />
                                </Link>
                                <Link
                                    href="/profil"
                                    className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                                >
                                    En savoir plus sur moi
                                </Link>
                            </div>
                        </div>

                        <div data-home-reveal className="home-code-card mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur">
                            <div className="mb-6 flex items-center gap-2" aria-hidden="true">
                                <span className="h-3 w-3 rounded-full bg-rose-400" />
                                <span className="h-3 w-3 rounded-full bg-amber-300" />
                                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                <span className="ml-auto text-xs text-slate-400">qui-suis-je.js</span>
                            </div>
                            <FaCode className="mb-5 text-3xl text-blue-300" aria-hidden="true" />
                            <pre className="overflow-x-auto text-sm leading-7 text-slate-300"><code>{`const killian = {
  formation: "Bachelor Information Science",
  passion: "développement web",
  outils: ["React", "JavaScript", "Symfony"],
  objectif: "continuer à apprendre"
};`}</code></pre>
                            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-slate-400">
                                Curieux, motivé et toujours prêt à relever un nouveau défi.
                            </p>
                        </div>
                    </div>
                    <SectionTransition fill="fill-slate-50" />
                </section>

                <section id="projets" data-home-section className="relative scroll-mt-24 bg-slate-50">
                    <div className="home-section-content container mx-auto max-w-6xl px-6 pb-32 pt-20 lg:px-10">
                        <div className="mb-10 flex flex-wrap items-end justify-between gap-4" data-home-reveal>
                            <div>
                                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">À découvrir</p>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Quelques projets</h2>
                                <p className="mt-3 max-w-2xl text-slate-600">
                                    Des projets personnels pour apprendre, expérimenter et donner vie à mes idées.
                                </p>
                            </div>
                            <Link href="/projets" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900">
                                Tous mes projets <FaArrowRight aria-hidden="true" />
                            </Link>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {featuredProjects.map((project) => (
                                <article
                                    key={project.title}
                                    data-home-reveal
                                    className="home-project-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    {project.image ? (
                                        <img src={project.image} alt={`Aperçu du projet ${project.title}`} className="home-project-image h-56 w-full bg-slate-100 object-cover" />
                                    ) : (
                                        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-slate-200">
                                            <FaCode className="text-5xl text-blue-700/70" aria-hidden="true" />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                                        <p className="mt-2 leading-relaxed text-slate-600">{project.description}</p>
                                        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                                            {project.technologies.map((technology) => (
                                                <li key={technology} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                                                    {technology}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 flex flex-wrap gap-5">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700"
                                            >
                                                <FaGithub aria-hidden="true" /> Code source
                                            </a>
                                            <a
                                                href={project.live}
                                                target={project.live.startsWith('http') ? '_blank' : undefined}
                                                rel={project.live.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                download={project.live.startsWith('/documents/')}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700"
                                            >
                                                {project.live.startsWith('/documents/') ? (
                                                    <FaDownload aria-hidden="true" />
                                                ) : (
                                                    <FaExternalLinkAlt aria-hidden="true" />
                                                )}
                                                {project.liveLabel}
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <SectionTransition fill="fill-white" />
                </section>

                <section data-home-section className="relative bg-white">
                    <div className="home-section-content container mx-auto grid max-w-6xl gap-10 px-6 pb-32 pt-16 md:grid-cols-3 lg:px-10">
                        <div data-home-reveal>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">Ce qui me motive</p>
                            <h2 className="text-2xl font-bold text-slate-900">Apprendre en construisant</h2>
                        </div>
                        <p data-home-reveal className="home-reveal-delay-1 leading-relaxed text-slate-600">
                            J&apos;aime comprendre comment les choses fonctionnent, puis mettre mes connaissances en pratique à travers des projets concrets.
                        </p>
                        <p data-home-reveal className="home-reveal-delay-2 leading-relaxed text-slate-600">
                            Du développement front-end aux applications web, je cherche à créer des interfaces claires et utiles, tout en continuant à progresser dans un nouveau domaine qui est l'IS.
                        </p>
                    </div>
                    <SectionTransition fill="fill-slate-50" />
                </section>

                <section data-home-section className="relative bg-slate-50">
                    <div className="home-section-content container mx-auto max-w-6xl px-6 py-16 lg:px-10">
                        <div data-home-reveal className="home-contact-card rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 px-6 py-12 text-center text-white shadow-xl sm:px-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Un projet en tête ? Parlons-en.</h2>
                            <p className="mx-auto mt-4 max-w-xl text-blue-100">
                                Une question, une idée ou une opportunité ? Je serai ravi d&apos;échanger avec vous.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
                            >
                                Me contacter <FaArrowRight aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
