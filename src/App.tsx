import { useEffect, useRef, useState } from "react"
import type { CSSProperties, FormEvent, PointerEvent, ReactNode } from "react"
import BinaTruck from "./components/truck/BinaTruck"

const services = [
  [
    "01",
    "Product sourcing",
    "Turn a product brief into a focused sourcing request.",
  ],
  [
    "02",
    "Supplier discovery",
    "Coordinate supplier communication without losing important details.",
  ],
  [
    "03",
    "Quality control",
    "Arrange practical inspection checkpoints before products move.",
  ],
  [
    "04",
    "Cargo consolidation",
    "Coordinate cargo preparation for the onward journey.",
  ],
  [
    "05",
    "Customs coordination",
    "Keep shipment information and documentation organized.",
  ],
  [
    "06",
    "Transport & delivery",
    "Coordinate onward freight and delivery to the agreed international destination.",
  ],
  [
    "07",
    "Container shipping",
    "Coordinate FCL and LCL container shipping from China to your destination.",
  ],
]

const stages = [
  [
    "SOURCING",
    "Every great business begins at the source.",
    "Brief · Supplier discovery",
  ],
  [
    "QUALITY CONTROL",
    "Confidence begins before shipment.",
    "Inspection · Specification review",
  ],
  [
    "CONSOLIDATION",
    "Products prepared for the journey ahead.",
    "Cargo planning · Loading",
  ],
  [
    "TRANSPORT",
    "Moving your business forward.",
    "Road coordination · Milestones",
  ],
  [
    "ARRIVAL",
    "From China to your destination, simplified.",
    "Delivery coordination · Complete",
  ],
]

const photos = [
  [
    "Construction materials",
    "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=82",
  ],
  [
    "Furniture & interiors",
    "https://images.unsplash.com/photo-1605732563938-8f8d4e7ad651?auto=format&fit=crop&w=900&q=82",
  ],
  [
    "Machinery & equipment",
    "https://images.unsplash.com/photo-1590497008432-598f04441de8?auto=format&fit=crop&w=1200&q=82",
  ],
  [
    "Electronics & appliances",
    "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=900&q=82",
  ],
  [
    "Packaging solutions",
    "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=900&q=82",
  ],
  [
    "Business supplies",
    "https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=900&q=82",
  ],
]

type Quote = {
  product: string
  category: string
  productUrl: string
  description: string
  quantity: string
  budget: string
  shipping: string
  destination: string
  name: string
  business: string
  email: string
  phone: string
  consent: boolean
}
const emptyQuote: Quote = {
  product: "",
  category: "",
  productUrl: "",
  description: "",
  quantity: "",
  budget: "",
  shipping: "",
  destination: "",
  name: "",
  business: "",
  email: "",
  phone: "",
  consent: false,
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function Logo({
  light = false,
  navigation = false,
}: {
  light?: boolean
  navigation?: boolean
}) {
  return (
    <a
      className={`logo ${light ? "light" : ""}`}
      href="#top"
      aria-label="Bina Sourcing home"
    >
      {navigation ? (
        <>
          <img
            className="logo-image logo-image-nav"
            src="/bina-sourcing-logo-light.png"
            alt="Bina Sourcing"
          />
          <img
            className="logo-image logo-image-scrolled"
            src="/bina-sourcing-logo.png"
            alt=""
          />
        </>
      ) : (
        <img
          className={`logo-image ${light ? "logo-image-light" : ""}`}
          src={
            light ? "/bina-sourcing-logo-light.png" : "/bina-sourcing-logo.png"
          }
          alt="Bina Sourcing"
        />
      )}
    </a>
  )
}

function Button({
  children,
  onClick,
  type = "button",
}: {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
}) {
  return (
    <button className="button" onClick={onClick} type={type}>
      <span>{children}</span>
      <Arrow />
    </button>
  )
}

function Header({ quote }: { quote: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    document.body.classList.toggle("locked", open)
    return () => document.body.classList.remove("locked")
  }, [open])
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  const links = [
    ["About", "about"],
    ["Services", "services"],
    ["How it works", "process"],
    ["Industries", "industries"],
    ["Contact", "contact"],
  ]
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-inner">
        <Logo light navigation />
        <nav aria-label="Primary navigation">
          {links.map(([name, id]) => (
            <a href={`#${id}`} key={id}>
              {name}
            </a>
          ))}
        </nav>
        <button className="quote-link" type="button" onClick={quote}>
          Request a quote <Arrow />
        </button>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i />
          <i />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([name, id], i) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              <small>0{i + 1}</small>
              {name}
            </a>
          ))}
        </nav>
        <Button
          onClick={() => {
            setOpen(false)
            quote()
          }}
        >
          Request a quote
        </Button>
      </div>
    </header>
  )
}

function Truck({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`truck-world ${compact ? "compact" : ""}`}
      aria-hidden="true"
    >
      <div className="orbit" />
      <div className="containers">
        <i />
        <i />
      </div>
      <div className="truck">
        <BinaTruck compact={compact} animated={!compact} />
      </div>
      <div className="road">
        <i className="road-lane" />
      </div>
    </div>
  )
}

function Hero({ quote }: { quote: () => void }) {
  const ref = useRef<HTMLElement>(null)
  const move = (event: PointerEvent<HTMLElement>) => {
    if (!ref.current || event.pointerType === "touch") return
    const x = event.clientX / window.innerWidth - 0.5
    const y = event.clientY / window.innerHeight - 0.5
    ref.current.style.setProperty("--mx", `${x}`)
    ref.current.style.setProperty("--my", `${y}`)
  }
  return (
    <section className="hero" id="top" ref={ref} onPointerMove={move}>
      <div className="hero-port-bg" aria-hidden="true" />
      <div className="grid-bg" />
      <div className="hero-noise" aria-hidden="true" />
      <Header quote={quote} />
      <div className="container hero-copy">
        <div className="hero-status">
          <i />
          <span>China → Worldwide sourcing</span>
          <b>Enquiries open</b>
        </div>
        <h1>
          <span>Source China.</span>
          <em>Grow Everywhere.</em>
        </h1>
        <p>
          One connected sourcing partner for supplier discovery, quality
          coordination, cargo consolidation, and delivery from China to
          destinations worldwide.
        </p>
        <div className="hero-actions">
          <Button onClick={quote}>Request a quote</Button>
          <a className="underlink" href="#process">
            Explore our process <Arrow />
          </a>
        </div>
      </div>
      <div className="route-card" aria-hidden="true">
        <div>
          <small>GLOBAL SOURCING NETWORK</small>
          <span>CN</span>
          <i />
          <span>WORLD</span>
        </div>
        <p>
          Source <b /> Coordinate <b /> Deliver
        </p>
      </div>
      <Truck />
      <div className="hero-proof">
        <div>
          <small>01</small>
          <span>One connected process</span>
        </div>
        <div>
          <small>02</small>
          <span>Clear coordination</span>
        </div>
        <div>
          <small>03</small>
          <span>Worldwide destinations</span>
        </div>
      </div>
      <div className="scroll-note">
        SCROLL TO EXPLORE <i />
      </div>
    </section>
  )
}

function GlobalBar() {
  return (
    <aside className="global-bar" aria-label="Worldwide sourcing coverage">
      <div className="container">
        <div className="global-bar__origin">
          <span>ORIGIN</span>
          <strong>China</strong>
        </div>
        <i />
        <p>Coordinated for businesses across</p>
        <div className="global-bar__regions">
          <span>Americas</span>
          <span>Europe</span>
          <span>Middle East</span>
          <span>Africa</span>
          <span>Asia Pacific</span>
        </div>
      </div>
    </aside>
  )
}

function Intro() {
  return (
    <section className="intro section" id="about">
      <div className="container intro-grid">
        <div>
          <p className="eyebrow">
            <i />A clearer way to source
          </p>
          <small>01 / 07</small>
        </div>
        <div>
          <h2>One connected path from product brief to delivery.</h2>
          <div className="intro-text">
            <p>
              International sourcing can feel fragmented. BINA SOURCING brings
              the important conversations, checkpoints, and cargo coordination
              into one clear process.
            </p>
            <a className="underlink dark" href="#services">
              Discover our services <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className="ticker">
        <div>
          SOURCE <i /> VERIFY <i /> CONSOLIDATE <i /> COORDINATE <i /> DELIVER{" "}
          <i /> SOURCE <i /> VERIFY <i /> CONSOLIDATE <i />
        </div>
      </div>
      <div
        className="container capability-strip"
        aria-label="Sourcing principles"
      >
        <div>
          <span>01</span>
          <strong>Clear briefs</strong>
          <p>Requirements aligned before supplier coordination begins.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Visible checkpoints</strong>
          <p>Important decisions surfaced at every meaningful stage.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Human coordination</strong>
          <p>Practical communication across suppliers, cargo, and delivery.</p>
        </div>
      </div>
    </section>
  )
}

function WhyBina() {
  return (
    <section className="why section">
      <div className="container why-grid">
        <div className="why-visual">
          <img
            src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1400&q=84"
            alt="Engineers coordinating work in a modern manufacturing facility"
            loading="lazy"
          />
          <div className="why-visual__label">
            <span>CHINA</span>
            <i />
            <strong>WORLDWIDE</strong>
          </div>
          <div className="why-visual__note">
            <small>ONE CONNECTED WORKFLOW</small>
            <p>Supplier · Product · Cargo · Destination</p>
          </div>
        </div>
        <div className="why-copy">
          <p className="eyebrow">
            <i />
            Why BINA
          </p>
          <h2>Less fragmentation. More clarity.</h2>
          <p className="why-lead">
            Sourcing across borders involves dozens of decisions. We bring the
            key stages into one coordinated workflow so your team can move with
            better information.
          </p>
          <div className="why-points">
            <article>
              <span>01</span>
              <div>
                <h3>One point of coordination</h3>
                <p>
                  Keep supplier conversations, specifications, and cargo
                  requirements connected.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Decisions before dispatch</h3>
                <p>
                  Surface product and quality questions while there is still
                  time to act.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Built around your destination</h3>
                <p>
                  Plan the enquiry around the product, order profile, and final
                  market—not a one-size-fits-all route.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow light">
            <i />
            What we coordinate
          </p>
          <p>
            Built around the real stages of sourcing from China for delivery
            worldwide.
          </p>
        </div>
        <div className="services-grid">
          <h2>Support where the supply chain gets complicated.</h2>
          <div className="services-list">
            {services.map(([n, title, text]) => (
              <article className="service" key={n}>
                <div className="service-number">
                  <small>{n}</small>
                  <span />
                </div>
                <div className="service-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span>
                  <Arrow />
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      setProgress(
        Math.max(
          0,
          Math.min(
            1,
            -rect.top / Math.max(ref.current.offsetHeight - innerHeight, 1),
          ),
        ),
      )
    }
    update()
    addEventListener("scroll", update, { passive: true })
    addEventListener("resize", update)
    return () => {
      removeEventListener("scroll", update)
      removeEventListener("resize", update)
    }
  }, [])
  const active = Math.min(
    stages.length - 1,
    Math.floor(progress * stages.length),
  )
  return (
    <section className="journey" id="process" ref={ref}>
      <div className="journey-sticky">
        <div className="journey-copy">
          <p className="eyebrow light">
            <i />
            The sourcing journey
          </p>
          <small>
            0{active + 1} / 0{stages.length}
          </small>
          <div key={active}>
            <span>{stages[active][0]}</span>
            <h2>{stages[active][1]}</h2>
            <p>{stages[active][2]}</p>
          </div>
          <div className="progress">
            <i style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
        <div className="stage" style={{ "--p": progress } as CSSProperties}>
          <div className="sun" />
          <div className="mountains far" />
          <div className="mountains near" />
          <div className="scene-console">
            <span>LIVE PROCESS VIEW</span>
            <div>
              <i />
              <p>
                <small>ACTIVE STAGE</small>
                <strong>{stages[active][0]}</strong>
              </p>
            </div>
            <div className="console-bars">
              {stages.map((stage, index) => (
                <i className={index <= active ? "active" : ""} key={stage[0]} />
              ))}
            </div>
          </div>
          <Truck compact />
          <div className="route-label">
            <span>CHINA</span>
            <i />
            <b>YOUR DESTINATION</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function Globe() {
  return (
    <section className="globe section">
      <div className="container globe-grid">
        <div>
          <p className="eyebrow light">
            <i />
            Across borders
          </p>
          <h2>China at the source. The world within reach.</h2>
          <p>
            BINA SOURCING coordinates the journey from Chinese suppliers to
            businesses around the world—keeping products, information, and
            shipping milestones moving through one clear process.
          </p>
          <div className="legend">
            <span>
              <i /> Sourcing origin
            </span>
            <span>
              <i /> Worldwide destinations
            </span>
          </div>
          <div
            className="destination-list"
            aria-label="Worldwide destination regions"
          >
            {[
              "Americas",
              "Europe",
              "Middle East",
              "Africa",
              "Asia Pacific",
            ].map((region) => (
              <span key={region}>{region}</span>
            ))}
          </div>
        </div>
        <div
          className="earth"
          role="img"
          aria-label="Illustrative globe showing sourcing routes from China to worldwide destinations"
        >
          <i className="lat a" />
          <i className="lat b" />
          <i className="lon a" />
          <i className="lon b" />
          <span className="land" />
          <span className="earth-route route-one" />
          <span className="earth-route route-two" />
          <span className="earth-route route-three" />
          <b className="china">
            <i />
            CHINA
          </b>
          <b className="destination destination-one">
            <i />
            GLOBAL
          </b>
          <i className="destination-dot dot-one" />
          <i className="destination-dot dot-two" />
          <i className="destination-dot dot-three" />
        </div>
      </div>
    </section>
  )
}

function Categories({ quote }: { quote: () => void }) {
  return (
    <section className="categories section" id="industries">
      <div className="container">
        <div className="categories-head">
          <div>
            <p className="eyebrow">
              <i />
              Product categories
            </p>
            <h2>Source with a clearer starting point.</h2>
          </div>
          <p>
            These examples can be adapted as the business confirms its sourcing
            focus.
          </p>
        </div>
        <div className="category-grid">
          {photos.map(([name, image], i) => (
            <button
              className="category"
              type="button"
              onClick={quote}
              key={name}
            >
              <img src={image} alt="" loading="lazy" />
              <i />
              <small>0{i + 1}</small>
              <strong>{name}</strong>
              <span>
                <Arrow />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  [
    "Can BINA coordinate sourcing for any destination?",
    "We welcome enquiries from businesses worldwide. Feasibility depends on the product, supplier, destination requirements, and available freight options, which are reviewed for each enquiry.",
  ],
  [
    "Can you help if I do not have a supplier yet?",
    "Yes. Start with a clear product brief, target quantity, specifications, and destination. Supplier discovery and communication can then be coordinated around those requirements.",
  ],
  [
    "How is product quality handled?",
    "Quality expectations should be documented before ordering. Where suitable, inspection checkpoints and specification reviews can be coordinated before dispatch. The exact scope is agreed for each order.",
  ],
  [
    "Can multiple products or suppliers be consolidated?",
    "Cargo consolidation can be considered when products, timing, documentation, and handling requirements are compatible. Suitability is confirmed during planning.",
  ],
  [
    "Can you arrange container shipping?",
    "Yes. We can coordinate FCL or LCL container shipping from China, subject to the cargo profile, origin, destination, documentation, and available sailing options.",
  ],
  [
    "What information helps you prepare a quotation?",
    "Share the product name or link, specifications, quantity, estimated budget, destination, and any supplier information you already have. More detail usually enables a clearer initial review.",
  ],
]

function FAQ({ quote }: { quote: () => void }) {
  return (
    <section className="faq section">
      <div className="container faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">
            <i />
            Before you begin
          </p>
          <h2>Good sourcing starts with good questions.</h2>
          <p>
            Every enquiry is different. These answers explain how the process is
            approached without making assumptions about your product or
            destination.
          </p>
          <Button onClick={quote}>Discuss your product</Button>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{question}</strong>
                <i />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

type QuoteModalProps = {
  open: boolean
  close: () => void
}

function QuoteModal({ open, close }: QuoteModalProps) {
  const [step, setStep] = useState(0),
    [data, setData] = useState(emptyQuote),
    [message, setMessage] = useState("")
  useEffect(() => {
    document.body.classList.toggle("locked", open)
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.classList.remove("locked")
      window.removeEventListener("keydown", handleKey)
    }
  }, [open, close])
  if (!open) return null
  const update = (key: keyof Quote, value: string | boolean) =>
    setData({ ...data, [key]: value })
  const next = () => {
    if (step === 0 && !data.product)
      return setMessage("Please tell us what product you need.")
    if (step === 1 && (!data.quantity || !data.destination))
      return setMessage("Please add a quantity and destination.")
    if (step === 2 && (!data.name || !/^\S+@\S+\.\S+$/.test(data.email)))
      return setMessage("Please add your name and a valid email.")
    setMessage("")
    setStep(step + 1)
  }
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!data.consent)
      return setMessage(
        "Please confirm that we may contact you about this enquiry.",
      )
    const subject = encodeURIComponent(`Sourcing enquiry: ${data.product}`)
    const body = encodeURIComponent(
      Object.entries(data)
        .filter(([k]) => k !== "consent")
        .map(([k, v]) => `${k}: ${v || "Not specified"}`)
        .join("\n"),
    )
    location.href = `mailto:hello@binasourcing.com?subject=${subject}&body=${body}`
    setMessage(
      "Your email app is opening. This prototype does not store your information.",
    )
  }
  return (
    <div
      className="modal"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div
        className="quote"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <aside className="quote-aside">
          <Logo light />
          <div>
            <p className="eyebrow light">
              <i />
              China → Worldwide
            </p>
            <h2>Let’s find the right source for you.</h2>
            <p>
              Share a few details and our team will turn your brief into a
              practical sourcing next step.
            </p>
          </div>
          <ul>
            <li>Supplier discovery matched to your brief</li>
            <li>Quality and shipping guidance</li>
            <li>One clear response from our team</li>
          </ul>
          <small>Private enquiry · No obligation</small>
        </aside>
        <div className="quote-body">
          <div className="quote-top">
            <div>
              <span className="quote-kicker">SOURCING ENQUIRY</span>
              <strong>Request a quote</strong>
            </div>
            <button type="button" onClick={close} aria-label="Close form">
              ×
            </button>
          </div>
          <div className="steps">
            {["Product", "Order", "Contact", "Review"].map((x, i) => (
              <button
                type="button"
                className={i <= step ? "active" : ""}
                onClick={() => i < step && setStep(i)}
                key={x}
              >
                <i>{i + 1}</i>
                <span>{x}</span>
              </button>
            ))}
          </div>
          <div className="progress-copy">
            <span>Step {step + 1} of 4</span>
            <span>{Math.round(((step + 1) / 4) * 100)}% complete</span>
          </div>
          <form onSubmit={submit}>
            <p className="form-step">STEP 0{step + 1}</p>
            <h2 id="quote-title">
              {
                [
                  "What are you looking for?",
                  "Tell us about the order.",
                  "How can we reach you?",
                  "Review your enquiry.",
                ][step]
              }
            </h2>
            <p className="form-help">
              {
                [
                  "Start with the basics and share a link or specification if you have one.",
                  "Give us the volume and destination so we can shape the right route.",
                  "We’ll use these details to follow up with a clear next step.",
                  "Check the details below, then send your enquiry directly to our team.",
                ][step]
              }
            </p>
            {step === 0 && (
              <div className="form-grid">
                <label className="form-wide">
                  Product name <em>Required</em>
                  <input
                    autoFocus
                    value={data.product}
                    onChange={(e) => update("product", e.target.value)}
                    placeholder="e.g. Ceramic floor tiles"
                  />
                </label>
                <label>
                  Category
                  <select
                    value={data.category}
                    onChange={(e) => update("category", e.target.value)}
                  >
                    <option value="">Select category</option>
                    <option>Construction materials</option>
                    <option>Furniture & interiors</option>
                    <option>Machinery & equipment</option>
                    <option>Electronics & appliances</option>
                    <option>Packaging solutions</option>
                    <option>Business supplies</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="form-wide">
                  Product link
                  <input
                    type="url"
                    value={data.productUrl}
                    onChange={(e) => update("productUrl", e.target.value)}
                    placeholder="https:// — optional"
                  />
                </label>
                <label className="form-wide">
                  Specifications or description
                  <textarea
                    rows={3}
                    value={data.description}
                    onChange={(e) => update("description", e.target.value)}
                    placeholder="Material, dimensions, finish, certification, packaging, or reference details"
                  />
                </label>
              </div>
            )}
            {step === 1 && (
              <div className="form-grid">
                <label>
                  Quantity <em>Required</em>
                  <input
                    value={data.quantity}
                    onChange={(e) => update("quantity", e.target.value)}
                    placeholder="e.g. 500 pieces"
                  />
                </label>
                <label>
                  Destination <em>Required</em>
                  <input
                    value={data.destination}
                    onChange={(e) => update("destination", e.target.value)}
                    placeholder="City and country"
                  />
                </label>
                <label className="form-wide">
                  Estimated budget
                  <input
                    value={data.budget}
                    onChange={(e) => update("budget", e.target.value)}
                    placeholder="Amount and currency — optional"
                  />
                </label>
                <label className="form-wide">
                  Preferred shipping method
                  <select
                    value={data.shipping}
                    onChange={(e) => update("shipping", e.target.value)}
                  >
                    <option value="">Select shipping method</option>
                    <option>FCL container shipping</option>
                    <option>LCL container shipping</option>
                    <option>Not sure — please advise</option>
                  </select>
                </label>
              </div>
            )}
            {step === 2 && (
              <div className="form-grid">
                <label>
                  Your name <em>Required</em>
                  <input
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </label>
                <label>
                  Business name
                  <input
                    value={data.business}
                    onChange={(e) => update("business", e.target.value)}
                  />
                </label>
                <label>
                  Email <em>Required</em>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </label>
                <label>
                  Phone / WhatsApp
                  <input
                    type="tel"
                    placeholder="+977"
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </label>
              </div>
            )}
            {step === 3 && (
              <div className="review">
                {Object.entries(data)
                  .filter(([k]) => k !== "consent")
                  .map(([k, v]) => (
                    <div key={k}>
                      <span>{k}</span>
                      <strong>{String(v) || "Not specified"}</strong>
                    </div>
                  ))}
                <label className="consent">
                  <input
                    type="checkbox"
                    checked={data.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                  />
                  <span>
                    I agree to be contacted. This prototype opens email and does
                    not store data.
                  </span>
                </label>
              </div>
            )}
            {message && (
              <p className="message" role="status">
                {message}
              </p>
            )}
            <div className="form-actions">
              <span className="form-note">
                {step < 3
                  ? "Takes about 2 minutes"
                  : "No obligation · We reply personally"}
              </span>
              {step > 0 && (
                <button
                  className="back"
                  type="button"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <Button onClick={next}>Continue</Button>
              ) : (
                <Button type="submit">Prepare email enquiry</Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function Footer({ quote }: { quote: () => void }) {
  const contactMethods = [
    {
      label: "Email",
      value: "hello@binasourcing.com",
      detail: "For product briefs and enquiries",
      href: "mailto:hello@binasourcing.com",
      icon: "mail",
    },
    {
      label: "WhatsApp",
      value: "Message our team",
      detail: "Quick questions and updates",
      href: "https://wa.me/",
      icon: "whatsapp",
    },
    {
      label: "Instagram",
      value: "@binasourcing",
      detail: "Behind the scenes at source",
      href: "https://www.instagram.com/",
      icon: "instagram",
    },
    {
      label: "Facebook",
      value: "BINA Sourcing",
      detail: "News and sourcing stories",
      href: "https://www.facebook.com/",
      icon: "facebook",
    },
    {
      label: "WeChat",
      value: "BINA Sourcing",
      detail: "Connect with our China team",
      href: "https://www.wechat.com/",
      icon: "wechat",
    },
  ]

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-cta">
          <p className="eyebrow light">
            <i />
            Start a conversation
          </p>
          <h2>Have a product in mind?</h2>
          <Button onClick={quote}>Start your sourcing journey</Button>
        </div>
        <div className="contact-intro">
          <div>
            <p className="eyebrow light">
              <i />
              Let’s connect
            </p>
            <h3>One team, every channel.</h3>
          </div>
          <p>
            Tell us what you are looking for and we’ll help you find the right
            next step, from first supplier conversation to final delivery.
          </p>
        </div>
        <div className="contact-methods">
          {contactMethods.map((method) => (
            <a
              className="contact-method"
              href={method.href}
              key={method.label}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className={`contact-icon contact-icon-${method.icon}`}>
                <ContactIcon type={method.icon} />
              </span>
              <span className="contact-method-copy">
                <small>{method.label}</small>
                <strong>{method.value}</strong>
                <span>{method.detail}</span>
              </span>
              <Arrow />
            </a>
          ))}
        </div>
        <div className="footer-grid">
          <div>
            <Logo light />
            <p>From China to the World, Simplified.</p>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#industries">Categories</a>
          </nav>
          <div>
            <small>ENQUIRIES WELCOME</small>
            <p>
              China-based sourcing.
              <br />
              Delivery coordination worldwide.
            </p>
          </div>
        </div>
        <p className="legal">
          © {new Date().getFullYear()} BINA SOURCING. Company details and
          policies to be confirmed before launch.
        </p>
      </div>
    </footer>
  )
}

function ContactIcon({ type }: { type: string }) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5h18v13H3zM3 6l9 7 9-7" />
      </svg>
    )
  }
  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
        <path d="M8.8 8.3c.3-.3.7-.3.9.1l.7 1.4c.1.3.1.5-.1.7l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.4-.2.7-.1l1.4.7c.4.2.4.6.1.9l-.4.4c-.5.5-1.3.6-2 .3a8.3 8.3 0 0 1-4.4-4.4c-.3-.7-.2-1.5.3-2Z" />
      </svg>
    )
  }
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.3" cy="6.8" r=".7" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.7v3h2.4v7" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.5h14v13H5zM8 8.5h2v7H8zM9 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 8.5v-4c0-1 .7-1.7 1.7-1.7s1.7.7 1.7 1.7v4h-2v-3.5c0-.5-.2-.8-.7-.8s-.7.3-.7.8v3.5Z" />
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const quote = () => setOpen(true)
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(
      ".section h2, .service, .category, .why-points article, .faq-list details",
    )
    items.forEach((item, index) => {
      item.classList.add("reveal-item")
      item.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`)
    })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return (
    <>
      <main>
        <Hero quote={quote} />
        <GlobalBar />
        <Intro />
        <WhyBina />
        <Services />
        <Journey />
        <Globe />
        <Categories quote={quote} />
        <FAQ quote={quote} />
      </main>
      <Footer quote={quote} />
      <QuoteModal open={open} close={() => setOpen(false)} />
    </>
  )
}
