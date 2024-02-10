<script>
  let primaryColor = "#313e50";
  let secondaryColor = "#8fb2e5";
  import { resume, template, focusedTemplate } from "../Store";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<div>
  <div class="m-auto resume aspect-[1/1.41] flex bg-white">
    <div class="flex-1">
      <header class="p-4 py-4 bg-slate-700">
        <div class="max-w-xs">
          <h1 class="!text-3xl font-bold text-white mb-0.5 uppercase">
            {$resume.contact.fullName || `Yurii Darahan`}
          </h1>
          <p class="text-white uppercase font-semibold !text-sm leading-snug">
            {$resume.title || `WORK, HEALTH AND SAFETY COORDINATOR | WHS OFFICER`}
          </p>
        </div>
      </header>

      <main>
        <section>
          <div>
            <h2
              class="bg-slate-600 inline-block px-4 py-0.5 !text-sm text-white uppercase font-bold">
              PROFILE
            </h2>
          </div>

          <div class="p-4 pt-3">
            <p class="text-sm whitespace-pre-line font-semibold leading-snug">
              {$resume.summary || `Reliable, adaptable, detail-focused, and safety-oriented Work, Health and Safety professional with over 9 years of experience. Offering proven leadership capacity with a strong focus on safety, wellbeing, and quality assurance; established and maintained a solid track record of success in ensuring safety and regulatory compliance, quality control, design, planning, development, and project management. \n\n Recognised as a strong leader and a high achiever, consistently completing projects on time and under budget. Committed to delivering first-rate WHS support, accurate data analysis and proficient quality assurance in accordance with organisational objectives. \n\n Developed outstanding communication skills, leveraging abilities to build and maintain productive professional relationships with a range of stakeholders from all levels and with diverse cultural backgrounds.`}
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2
              class="bg-slate-600 inline-block px-4 py-0.5 !text-sm font-bold text-white uppercase">
              PROFESSIONAL EXPERTISE
            </h2>
          </div>
          <div class="p-4 pt-3">
            {@html $resume.expertise.replace(/<ul>/g, `<ul ${$template[$focusedTemplate]}>`) || "<ul><li><p><strong>Industry Experience &amp; Knowledge:</strong> Acquired and developed in-depth knowledge and extensive experience within WHS management, including WHS Management System &amp; Auditing, WHS Risk Management, WHS Training, Management Reporting, and Analytical &amp; Problem Solving.</p></li><li><p><strong>Communication, Liaison &amp; Team Engagement:</strong> Developed first-rate interpersonal, written, and verbal communication skills; highly capable of building rapport with people from diverse cultural backgrounds and liaising effectively with decision makers at all levels to ensure smooth and safe operations of tasks.</p></li><li><p><strong>Analytical &amp; Problem-Solving Skills:</strong> Recognised as an analytical and critical thinker; approaches all issues and concerns in a calm, friendly and positive manner. Adept in conflict resolution, leveraging communication and negotiation skills, along with creativity and outside-the-box thinking to innovate effective and sustainable strategies and approaches.</p></li><li><p><strong>Regulatory &amp; Compliance Expertise:</strong> Maintained a solid track record of ensuring compliance with a range of organisational regulations, standards, and policies, including AS/NZS 4801.</p></li><li><p><strong>Safety Focused:</strong> Committed to establish a strong and resilient safety culture, instilling a positive safety culture within the organisation.</p></li><li><p><strong>Organisational &amp; Time Management:</strong> Offering outstanding task management skills, with the ability to effectively manage multiple priorities and respond quickly to organisational needs in a timely manner.</p></li><li><p><strong>Continuous Professional Development:</strong> Strives for excellence; works with utmost pride and continuously looks for ways to improve and develop personal knowledge, as evident in my various certifications and licenses.</p></li><li><p><strong>Professionalism &amp; Integrity:</strong> Genuine, approachable and professional; exhibited commitment to ensuring compliance with organisational policies and guidelines, and maintaining confidentiality.</p></li></ul>"}
          </div>
        </section>
      </main>
    </div>
    <aside class="bg-slate-600 flex-[0_0_240px] flex flex-col gap-2">
      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            CONTACT INFO
          </p>

          <ul class="text-white list-disc ml-4 flex flex-col gap-1 px-2">
            <li class=" font-bold">
              {$resume.contact.address || `Braniborska 50/90, 53-680 Stare Miasto, Wroclaw, Poland`}
            </li>

            <li class="font-bold">{$resume.contact.phone || `+1 323 801 8431`}</li>
            <li class="">{$resume.contact.email || `hperfomance@gmail.com`}</li>
            <li class="">{$resume.contact.linkedInUrl || `https://www.linkedin.com/in/williamhgates`}</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            KEY ATTRIBUTES
          </p>

          <ul class="text-white list-disc ml-4 flex flex-col gap-1 px-2">
            <li class="">COMMUNICATION SKILLS</li>
            <li class="">ORGANISATIONAL SKILLS</li>
            <li class="">TIME MANAGEMENT SKILLS</li>
            <li class="">WORKPLACE POLICY & PROCEDURES</li>
            <li class="">PERFORMANCE IMPROVEMENT</li>
            <li class="">GOVERNANCE SUPPORT</li>
            <li class="">PROBLEM SOLVING & ANALYSIS</li>
            <li class="">STRONG WORK ETHIC</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            EXPERTISE
          </p>

          <ul class="text-white list-disc ml-4 flex flex-col gap-1 px-2">
            <li class="">IMPLEMENTING WHS MANAGEMENT SYSTEMS (WHSMS)</li>
            <li class="">
              DEMONSTRATED UNDERSTANDING OF WHS LEGISLATIVE FRAMEWORK
            </li>
            <li class="">PREEMPTIVE APPROACH IN WHS RISK MANAGEMENT</li>
            <li class="">WHS TRAINING, COACHING & MENTORING</li>
            <li class="">CHANGE/PROJECT MANAGEMENT</li>
            <li class="">INCIDENT INVESTIGATION & ROOT CAUSE ANALYSIS</li>
            <li class="">COMPREHENSIVE MANAGEMENT REPORTING</li>
            <li class="">LED WHS WITH BEST PRACTICE POLICES & PROCEDURES</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            EDUCATION
          </p>

          <ul class="text-white flex flex-col gap-1 px-3">
            <li class="">
              <strong>CERT IV IN TRAINING & ASSESSMENT</strong>
              <p>INSPIRE EDUCATION – QUEENSLAND, 2021</p>
            </li>
            <li class="">
              <strong>MILLWRIGHT MAINTENANCE MECHANIC</strong>
              <p>TATA MOTORS TRAINING DIVISION, PUNE, INDIA, 2000</p>
            </li>
            <li class="">
              <strong
                >GRADUATE CERTIFICATE IN OH&S | OHS LAW | ADVANCED WORKPLACE
                INJURY MANAGEMENT | OHS RISK MANAGEMENT | OCCUPATIONAL HYGIENE</strong>
              <p>UNIVERSITY OF WOLLONGONG, WOLLONGONG, NSW, 2013</p>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>

  <div class="flex justify-between bg-slate-700 mt-4 px-4 py-1 italic page-break">
    <p class="uppercase text-xs font-bold text-white">RAJESH CHAVAN</p>
    <p class="uppercase text-xs font-bold text-white">PROFESSIONAL RÉSUMÉ</p>
  </div>
  <div class="m-auto resume aspect-[1/1.41] flex bg-white">
    <div class="flex-1">
      <main>
        <section>
          <div>
            <h2
              class="bg-slate-600 inline-block px-4 py-0.5 !text-sm text-white uppercase font-bold">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          <div class="p-4 pt-3">
            <ul class="flex flex-col gap-2">
              <li>
                <div class="mb-2 flex items-center justify-between">
                  <p>
                    <strong
                      >FORENSIC EVIDENCE & TECHNICAL SERVICES COMMAND</strong
                    >,
                    <strong>NSWPF</strong>,
                    <strong>WHS Coordinator</strong>
                  </p>
                  <p><strong>OCT 2021 to Present</strong></p>
                </div>

                <ul class="list-disc pl-6 flex flex-col gap-1">
                  <li>
                    Managing Region WHS portfolio and providing expert advice
                    and hands on support in resolving WHS issues and maintaining
                    compliance to Safety Management System
                  </li>
                  <li>
                    Assisting Assistance Commissioner (AN officer under the Act)
                    in developing and maintaining their personal Due Diligence
                    compliance plan
                  </li>
                  <li>
                    Managing Internal stakeholders including Commanders,
                    Managers, WHSRs and Committees on WHS issues, policies,
                    programs, and protocols of legislative framework
                  </li>
                  <li>
                    Working closely with Org units under the FETS Command to
                    champion the implementation and understanding of SMS and
                    problem solving relating to WHS
                  </li>
                  <li>
                    Aiding with P901s, Risk Assessments and SAP based process
                  </li>
                  <li>
                    Review Incident investigation outcomes in ensuring Due
                    Diligence
                  </li>
                  <li>
                    Monitor and follow up on the KPI tracking and Safety
                    promotional activities
                  </li>
                  <li>
                    Generating reports on WHS trends, performance, identify
                    areas for WHS improvement and promote Risk management
                    strategies
                  </li>
                  <li>
                    Presenting WHS reports to the Commanders at Command and
                    Individual Branch level
                  </li>
                  <li>
                    Conducting SMS Self-Assessments, identifying gaps, and
                    Implementing strategies to improve WHS compliance and
                    strengthen safety culture
                  </li>
                </ul>

                <div class="mt-2">
                  <p class="underline mb-2 italic">Achievements</p>

                  <ul class="list-disc pl-6 flex flex-col gap-1">
                    <li>Ensured NIL outstanding P901s for 2021</li>
                    <li>
                      Streamlined WHS Consultation process across the Command
                    </li>
                    <li>
                      Raised preventive mindset by bringing Due Diligence
                      framework into the Command
                    </li>
                    <li>
                      Developed Risk Management & Incident Investigation
                      Training package for the Managers
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="mb-2 flex items-center justify-between">
                  <p>
                    <strong
                      >FORENSIC EVIDENCE & TECHNICAL SERVICES COMMAND</strong
                    >,
                    <strong>NSWPF</strong>,
                    <strong>WHS Coordinator</strong>
                  </p>
                  <p><strong>OCT 2021 to Present</strong></p>
                </div>

                <ul class="list-disc pl-6 flex flex-col gap-1">
                  <li>
                    Conduct data analysis, including safety KPI trend data, to
                    reveal performance gaps and create action items, in
                    collaboration with TPC (Toyota Parts Centre) management
                  </li>
                  <li>
                    Maintain Workers Compensation of Self Insurance status by
                    ensuring 100% compliance of National Audit Tool (NAT) & ISO
                    18001
                  </li>
                  <li>
                    Promoted safety leadership amongst middle management by
                    coaching and mentoring
                  </li>
                  <li>
                    Trained staff on manual handling principles, hazard
                    prediction, accident investigation, and risk assessment and
                    provided hands-on support to operations
                  </li>
                  <li>
                    Liaise with corporate HR and TPC’s to guarantee legislative
                    and corporate standards are implemented
                  </li>
                  <li>
                    Developed and enforced safety FMDS (Floor Management Data
                    System), lead and lag indicators and VCB (visual control
                    boards) to align H&S with national standard
                  </li>
                  <li>
                    Developed TPC’s Safety business plan and monitored progress
                    of promotional activities accordingly
                  </li>
                  <li>
                    Generated monthly safety reports for TPC and presented the
                    Safety Hoshin (strategic direction) update to Senior
                    Management at Monthly Hoshin review
                  </li>
                  <li>
                    Foster TOYOTA’s Zero harm culture and represent TOYOYA in
                    SafeWork NSW affairs
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>

    <aside class="bg-slate-600 flex-[0_0_240px] flex flex-col gap-2">
      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            WORK HISTORY
          </p>

          <ul class="text-white flex flex-col gap-1 px-3">
            <li class="">
              <strong>MAINTENANCE MECHANIC</strong>
              <p>TATA MOTORS, PUNE, INDIA, JAN 2001 – NOV 2006</p>
            </li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            TECHNICAL SKILLS
          </p>

          <ul class="text-white list-disc ml-4 flex flex-col gap-1 px-2">
            <li class="">MICROSOFT WORD, EXCEL, POWERPOINT</li>
            <li class="">ONE-DRIVE</li>
            <li class="">TEAMS</li>
            <li class="">ONE-NOTE</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            LICENCES/CARDS
          </p>

          <ul class="text-white list-disc ml-4 flex flex-col gap-1 px-2">
            <li class="">RETURN TO WORK COORDINATOR</li>
            <li class="">
              ENVIRONMENTAL MANAGEMENT SYSTEM LEAD AUDITOR ISO 14001:2015
            </li>
            <li class="">HEALTH & SAFETY REPRESENTATIVE</li>
            <li class="">NSWPF’s BRONZE CERTIFICATION</li>
            <li class="">HOT WORK & CONFINED SPACE PERMIT</li>
            <li class="">SAFELY WORKING AT HEIGHTS</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            TRAINING
          </p>

          <ul class="text-white list-disc ml-4 px-2 flex flex-col gap-1">
            <li class="">DUE DILIGENCE BY OGC</li>
            <li class="">NSWPF CORPORATE INDUCTION</li>
            <li class="">TOYOTA BUSINESS PRACTICE</li>
            <li class="">
              JKK (JI-KOTEI-KANKETSU) – STANDARDISATION FOR THE OFFICE
            </li>
            <li class="">BUSINESS PROCESS IMPROVEMENT & LEAN MANAGEMENT</li>
            <li class="">5’S AND KAIZEN (CONTINUOUS IMPROVEMENT)</li>
            <li class="">PROBLEM VISUALISATION</li>
            <li class="">ANZ SAFETY TECH ON THE JOB CONFERENCE</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <p
            class="!text-sm uppercase py-1 font-bold bg-slate-400 text-center text-white mb-4">
            REFERENCES
          </p>

          <ul class="text-white flex flex-col gap-1 px-3">
            <li class="">
              <strong>DEBORAH DUFF</strong>
              <p>Manager, Quality & Compliance Services, FETS COMMAND</p>
              <p>E: duff1deb@police.nsw.gov.au</p>
              <p>P: (02) 8835 8948 E: 28948 M: 0434409788</p>
            </li>
            <li class="">
              <strong>Insp. Annie De Vere-Bertles</strong>
              <p>HR Manager, FETS COMMAND</p>
              <p>E: deve1ann@police.nsw.gov.au</p>
              <p>P: (02) 88358857, Eaglenet: 28857</p>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</div>

<div class="py-16"></div>

<style type="postcss">
  .resume {
    font-family: "PT Serif", serif;
  }

  .resume * {
    font-size: 8.4pt;
  }

  .page-break {
    margin-top: 25px;
  }
</style>
