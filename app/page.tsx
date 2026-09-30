export default function Home() {
  const services = [
    {
      title: "Anxiety & Panic",
      text: "Support for anxiety, panic, overthinking, and the pressure to always keep everything together.",
    },
    {
      title: "Trauma & EMDR",
      text: "A safe and grounded space to work through past experiences, trauma, and patterns that continue to affect your life.",
    },
    {
      title: "Burnout & Perfectionism",
      text: "Therapy for high-achieving adults navigating burnout, perfectionism, stress, and constant internal pressure.",
    },
  ];

  const peopleImages = [
    {
      title: "Adults",
      text: "For thoughtful adults navigating anxiety, stress, burnout, perfectionism, and major life transitions.",
      image:
        "https://images.unsplash.com/photo-1758356168164-cf37a7a79e25?auto=format&fit=crop&w=1200&q=80",
      alt: "Adult sitting quietly in a calm natural-light setting",
    },
    {
      title: "High-Achieving Professionals",
      text: "For entrepreneurs, creatives, and professionals experiencing pressure, overthinking, and emotional exhaustion.",
      image:
        "https://images.unsplash.com/photo-1765338912070-122b9c773d68?auto=format&fit=crop&w=1200&q=80",
      alt: "Adult sitting thoughtfully near a window",
    },
    {
      title: "People Healing From Trauma",
      text: "For adults working through single-incident or complex trauma and long-standing patterns from childhood, relationships, or chronic stress.",
      image:
        "https://images.unsplash.com/photo-1689023542429-f6a9b1c7b402?auto=format&fit=crop&w=1200&q=80",
      alt: "Adult reflecting and writing in a notebook",
    },
  ];

  const expertise = [
    "Anxiety & Panic",
    "Trauma & PTSD",
    "EMDR",
    "Burnout",
    "Perfectionism",
    "Chronic Stress",
    "Relationship Patterns",
    "Emotional Regulation",
    "Mindfulness",
    "Life Transitions",
    "Self-Worth",
    "High Internal Pressure",
  ];

  const faqs = [
    {
      question: "Do you offer in-person therapy?",
      answer:
        "Yes. Dr. Maya Reynolds offers in-person therapy from a quiet, private office in Santa Monica, California.",
    },
    {
      question: "Do you offer online therapy?",
      answer:
        "Yes. Secure telehealth sessions are available for clients located in California.",
    },
    {
      question: "What concerns do you work with?",
      answer:
        "Dr. Maya works with adults experiencing anxiety, panic, trauma, burnout, perfectionism, chronic stress, and relationship challenges.",
    },
    {
      question: "What is your approach to therapy?",
      answer:
        "Her approach is warm, collaborative, and grounded, combining evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
    },
  ];

  return (
    <main className="bg-[#F7F4EE] text-[#263330]">

      {/*  HEADER  */}
      <header className="border-b border-[#263330]/10 bg-[#F7F4EE]">
        <div className="mx-auto flex min-h-[82px] max-w-[1240px] items-center justify-between gap-6 px-6 md:px-8">

          <div className="shrink-0">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#3F5F5B]">
              Dr. Maya Reynolds, PsyD
            </p>

            <p className="mt-1 text-[10px] text-[#263330]/60">
              Licensed Clinical Psychologist
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-[11px] md:flex">
            <a
              href="#about"
              className="transition-colors hover:text-[#B58A6A]"
            >
              About
            </a>

            <a
              href="#services"
              className="transition-colors hover:text-[#B58A6A]"
            >
              Services
            </a>

            <a
              href="#approach"
              className="transition-colors hover:text-[#B58A6A]"
            >
              Approach
            </a>

            <a
              href="#office"
              className="transition-colors hover:text-[#B58A6A]"
            >
              Our Office
            </a>

            <a
              href="#faq"
              className="transition-colors hover:text-[#B58A6A]"
            >
              FAQ
            </a>
          </nav>

          <a
            href="#appointment"
            className="hidden border border-[#3F5F5B] px-5 py-3 text-[9px] uppercase tracking-[0.16em] text-[#3F5F5B] transition hover:bg-[#3F5F5B] hover:text-white sm:block"
          >
            Schedule an Appointment
          </a>
        </div>

        <nav className="flex items-center justify-center gap-5 border-t border-[#263330]/10 px-5 py-4 text-[10px] md:hidden">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#office">Office</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>


      {/*  HERO  */}
<section>
  <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-0 md:grid-cols-[0.85fr_1.3fr_0.85fr]">

    {/* LEFT — VERTICAL IMAGE */}
    <div className="h-[520px] md:h-[650px]">
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80"
        alt="Calm wellness and mindfulness space"
        className="h-full w-full object-cover"
      />
    </div>

    {/* CENTER — HERO TEXT */}
    <div className="flex min-h-[520px] items-center justify-center px-8 py-16 text-center md:min-h-[650px] md:px-10">
      <div className="max-w-[500px]">

        <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#B58A6A]">
          Santa Monica, California
        </p>

        <h1 className="font-serif text-[42px] leading-[1.06] md:text-[56px]">
          Therapy for anxiety, trauma, and burnout in Santa Monica.
        </h1>

        <p className="mx-auto mt-7 max-w-[410px] text-[16px] font-light leading-[1.8] text-[#263330]/70">
          A warm, grounded space for thoughtful, high-achieving adults
          who are ready to feel less overwhelmed and more connected to
          themselves.
        </p>

        <a
          href="#appointment"
          className="mt-9 inline-block bg-[#3F5F5B] px-7 py-4 text-[9px] uppercase tracking-[0.16em] text-white transition hover:bg-[#314B47]"
        >
          Schedule an Appointment
        </a>

      </div>
    </div>

    {/* RIGHT — HORIZONTAL IMAGE */}
    <div className="flex h-[520px] items-center md:h-[650px]">
      <div className="w-full overflow-hidden md:h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1400&q=80"
          alt="Peaceful wellness and self-care setting"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

  </div>
</section>


      {/*  INTRO  */}
      <section className="pt-8">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 md:grid-cols-2">

          <div className="h-[500px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1772588627483-d01d6cca2034?auto=format&fit=crop&w=1400&q=80"
              alt="Woman reflecting and writing in a notebook"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex items-center px-8 py-20 md:px-14 lg:px-20">
            <div className="max-w-[520px]">

              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
                A Space To Slow Down
              </p>

              <h2 className="font-serif text-[38px] leading-[1.1] md:text-[48px]">
                You don't have to keep carrying everything on your own.
              </h2>

              <p className="mt-7 text-[16px] font-light leading-[1.8] text-[#263330]/70">
                Maybe you've become very good at functioning while feeling
                overwhelmed underneath. You may be successful, thoughtful,
                and self-aware, while still struggling with anxiety, stress,
                burnout, or the lingering effects of past experiences.
              </p>

              <p className="mt-5 text-[16px] font-light leading-[1.8] text-[#263330]/70">
                Therapy can offer a place to slow down, understand what is
                happening beneath the surface, and begin creating a different
                relationship with yourself.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/*  WHO I HELP  */}
      <section id="services" className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1240px]">

          <div className="max-w-[620px]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
              Who I Help
            </p>

            <h2 className="mt-5 font-serif text-[38px] leading-[1.1] md:text-[48px]">
              Therapy for people who are ready for something to feel different.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
            {peopleImages.map((item) => (
              <div key={item.title}>

                <div className="h-[350px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-6 font-serif text-[24px]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[360px] text-[16px] font-light leading-[1.8] text-[#263330]/70">
                  {item.text}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/*  QUOTE IMAGE  */}
      <section className="relative h-[520px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1765172262676-7c55a2f5946b?auto=format&fit=crop&w=1800&q=80"
          alt="Peaceful reflective landscape"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#263330]/45" />

        <div className="relative flex h-full items-center justify-center px-8 text-center text-white">
          <div className="max-w-[850px]">

            <p className="font-serif text-[32px] leading-[1.15] md:text-[50px]">
              “Therapy works best when you feel respected, understood, and
              actively involved in the process.”
            </p>

            <p className="mt-7 text-[9px] uppercase tracking-[0.25em] text-white/75">
              Dr. Maya Reynolds, PsyD
            </p>

          </div>
        </div>

      </section>


      {/*  AREAS OF EXPERTISE  */}
      <section className="border-b border-[#263330]/10 px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
              Areas of Expertise
            </p>

            <h2 className="mt-5 max-w-[430px] font-serif text-[38px] leading-[1.1] md:text-[48px]">
              Understanding the patterns beneath the surface.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item}
                className="border-b border-[#263330]/15 py-4 text-[12px]"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/*  HOW I WORK  */}
      <section id="approach" className="border-b border-[#263330]/10">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 md:grid-cols-2">

          <div className="h-[520px] md:h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1758274529488-de77fa2e7773?auto=format&fit=crop&w=1400&q=80"
              alt="Adult practicing mindfulness outdoors"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex items-center px-8 py-20 md:px-14 lg:px-20">
            <div className="max-w-[520px]">

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
                How I Work
              </p>

              <h2 className="mt-5 font-serif text-[38px] leading-[1.1] md:text-[48px]">
                Warm, collaborative, and grounded.
              </h2>

              <p className="mt-7 text-[16px] font-light leading-[1.8] text-[#263330]/70">
                Dr. Maya's approach combines structure with reflection.
                Sessions draw from evidence-based methods including CBT, EMDR,
                mindfulness-based practices, and body-oriented techniques.
              </p>

              <p className="mt-5 text-[16px] font-light leading-[1.8] text-[#263330]/70">
                Trauma work begins with safety, stabilization, and regulation.
                The goal is not simply to understand what happened, but to
                help you develop greater resilience and a stronger relationship
                with yourself.
              </p>

              <a
                href="#about"
                className="mt-7 inline-block border-b border-[#3F5F5B] pb-1 text-[10px] uppercase tracking-[0.16em] text-[#3F5F5B]"
              >
                Learn More
              </a>

            </div>
          </div>

        </div>
      </section>


      {/*  ABOUT MAYA  */}
      <section id="about" className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* MAYA IMAGE */}
          <div className="h-[520px] md:h-[650px]">
            <img
              src="/images/maya.png"
              alt="Dr. Maya Reynolds"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* ABOUT TEXT */}
          <div>

            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
              About Dr. Maya Reynolds, PsyD
            </p>

            <h2 className="mt-6 font-serif text-[38px] leading-[1.1] md:text-[50px]">
              A thoughtful space for meaningful change.
            </h2>

            <div className="mt-8 space-y-5 text-[16px] font-light leading-[1.8] text-[#263330]/70">

              <p>
                Dr. Maya Reynolds is a Licensed Clinical Psychologist based in
                Santa Monica, California. She works with thoughtful, self-aware
                adults who may appear to be doing well on the outside while
                privately feeling overwhelmed by anxiety, stress, burnout, or
                the effects of past experiences.
              </p>

              <p>
                Her work is warm, collaborative, and grounded. She believes
                therapy works best when clients feel respected, understood,
                and actively involved in the process.
              </p>

              <p>
                Whether you are navigating anxiety, panic, trauma, perfectionism,
                chronic stress, or relationship patterns, therapy can provide a
                place to slow down, build insight, and create meaningful change.
              </p>

            </div>

            <a
              href="#appointment"
              className="mt-8 inline-block border-b border-[#3F5F5B] pb-1 text-[10px] uppercase tracking-[0.16em] text-[#3F5F5B]"
            >
              Schedule an Appointment
            </a>

          </div>

        </div>
      </section>


      {/*  SERVICES  */}
      <section className="bg-[#DDE7E2] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1240px]">

          <div className="max-w-[650px]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
              Services
            </p>

            <h2 className="mt-5 font-serif text-[38px] leading-[1.1] md:text-[48px]">
              Support that meets you where you are.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="border border-[#3F5F5B]/15 bg-[#F7F4EE] p-8 md:p-10"
              >

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#B58A6A]">
                  Therapy
                </p>

                <h3 className="mt-5 font-serif text-[27px]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[12px] leading-6 text-[#263330]/70">
                  {service.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* OUR OFFICE  */}
      <section
        id="office"
        className="border-b border-[#263330]/10 px-6 py-24 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1240px]">

          <div className="max-w-[650px]">

            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
              Our Office
            </p>

            <h2 className="mt-5 font-serif text-[38px] leading-[1.1] md:text-[48px]">
              A quiet place to pause, reflect, and feel grounded.
            </h2>

            <p className="mt-6 text-[16px] font-light leading-[1.8] text-[#263330]/70">
              Dr. Maya offers in-person therapy from a private Santa Monica
              office designed to feel calm, comfortable, and uncluttered.
              Natural light and a peaceful environment create space for
              thoughtful conversation and meaningful work.
            </p>

          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">

            <img
              src="/images/office1.jpeg"
              alt="Dr. Maya Reynolds therapy office"
              className="h-[430px] w-full object-cover md:h-[560px]"
            />

            <img
              src="/images/office2.jpeg"
              alt="Santa Monica therapy office"
              className="h-[430px] w-full object-cover md:mt-24 md:h-[560px]"
            />

          </div>

        </div>
      </section>


      {/*  APPOINTMENT  */}
      <section id="appointment" className="border-b border-[#263330]/10">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 md:grid-cols-2">

          <div className="flex items-center px-8 py-20 md:px-14 lg:px-20">
            <div className="max-w-[500px]">

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
                Schedule an Appointment
              </p>

              <h2 className="mt-5 font-serif text-[38px] leading-[1.08] md:text-[50px]">
                Find a space where you can slow down and begin to feel
                different.
              </h2>

              <p className="mt-6 text-[16px] font-light leading-[1.8] text-[#263330]/70">
                In-person therapy is available in Santa Monica, with secure
                telehealth available for clients throughout California.
              </p>

              <a
                href="#faq"
                className="mt-8 inline-block bg-[#3F5F5B] px-7 py-4 text-[9px] uppercase tracking-[0.16em] text-white transition hover:bg-[#314B47]"
              >
                Get In Touch
              </a>

            </div>
          </div>

          <div className="h-[500px] md:h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1518642268970-da1f1cdd5717?auto=format&fit=crop&w=1400&q=80"
              alt="Peaceful outdoor setting for reflection"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </section>


      {/*  FAQ  */}
      <section id="faq" className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-[900px]">

          <div className="text-center">

            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B58A6A]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 font-serif text-[38px] md:text-[48px]">
              Questions, answered.
            </h2>

          </div>

          <div className="mt-14 divide-y divide-[#263330]/15 border-y border-[#263330]/15">

            {faqs.map((faq) => (
              <details key={faq.question} className="group py-7">

                <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-[18px] md:text-[20px]">
                  {faq.question}

                  <span className="ml-5 text-xl text-[#B58A6A] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-[760px] text-[16px] font-light leading-[1.8] text-[#263330]/70">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/*  FOOTER  */}
      <footer className="bg-[#3F5F5B] px-6 py-16 text-white md:px-10">

        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 md:grid-cols-3">

          <div>
            <p className="font-serif text-[28px]">
              Dr. Maya Reynolds, PsyD
            </p>

            <p className="mt-4 text-[12px] leading-6 text-white/70">
              Licensed Clinical Psychologist
              <br />
              Santa Monica, California
            </p>
          </div>


          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/60">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-[12px]">

              <a href="#about" className="hover:text-white/70">
                About
              </a>

              <a href="#services" className="hover:text-white/70">
                Services
              </a>

              <a href="#approach" className="hover:text-white/70">
                Approach
              </a>

              <a href="#office" className="hover:text-white/70">
                Our Office
              </a>

              <a href="#faq" className="hover:text-white/70">
                FAQ
              </a>

            </div>
          </div>


          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/60">
              Contact
            </p>

            <p className="mt-5 text-[12px] leading-6 text-white/70">
              Santa Monica, California
              <br />
              In-person & secure telehealth
              <br />
              California clients
            </p>
          </div>

        </div>


        <div className="mx-auto mt-14 max-w-[1240px] border-t border-white/15 pt-6 text-[10px] text-white/50">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
        </div>

      </footer>

    </main>
  );
}