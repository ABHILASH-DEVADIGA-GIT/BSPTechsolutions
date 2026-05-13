import nirmanbook from "@/assets/product-nirmanbook.png";
import quickclinic from "@/assets/product-quickclinic.png";
import smartlekka from "@/assets/product-smartlekka.png";

export type ProductStatus = "completed" | "upcoming" | "in-development";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  full: string;
  status: ProductStatus;
  image?: string;
  features: string[];
  modules?: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "nirmanbook",
    name: "NirmanBook",
    tagline: "Construction Site Management Platform",
    short:
      "Complete construction site management for contractors, supervisors, and builders.",
    full:
      "NirmanBook helps contractors manage multiple construction sites from a single dashboard. It simplifies attendance tracking, billing, worker payments, material management, and reporting through a mobile-friendly interface.",
    status: "completed",
    image: nirmanbook,
    features: [
      "Site Management",
      "Worker Attendance & Wage Tracking",
      "Invoice & Billing Management",
      "Material Stock Tracking",
      "PDF & WhatsApp Reports",
      "Expense Management",
      "Multi-Site Dashboard",
    ],
    modules: ["Dashboard", "Attendance", "Billing", "Reports", "Material"],
  },
  {
    slug: "quickclinic",
    name: "QuickClinic",
    tagline: "Clinic Appointment & Queue Management",
    short:
      "Smart clinic management and patient appointment platform for clinics, dental & Ayurveda centers.",
    full:
      "QuickClinic reduces waiting room crowding by allowing patients to book appointments online and track their queue status in real time. Clinics manage appointments, billing, reports and doctor schedules from one platform.",
    status: "completed",
    image: quickclinic,
    features: [
      "Online Appointment Booking",
      "Live Token Queue",
      "OTP Login",
      "Doctor Scheduling",
      "Billing System",
      "Display Board",
      "Admin Dashboard",
    ],
    modules: ["Booking", "Queue", "Billing", "Display Board", "Admin"],
  },
  {
    slug: "smartlekka",
    name: "SmartLekka",
    tagline: "JCB & Tractor Finance Management",
    short:
      "Finance & tracking platform for JCB owners, tractor operators, and equipment rental businesses.",
    full:
      "SmartLekka helps equipment owners manage finance payments, customer records, vehicle usage and business operations through a centralized digital platform.",
    status: "completed",
    image: smartlekka,
    features: [
      "Vehicle Finance Tracking",
      "Payment Monitoring",
      "EMI Management",
      "Expense Tracking",
      "Business Reports",
      "Customer Management",
    ],
  },
  {
    slug: "vibebus",
    name: "VibeBus",
    tagline: "School Bus Tracking System",
    short: "Live school bus tracking with parent notifications and student attendance.",
    full:
      "VibeBus brings safety and transparency to school transport with live GPS tracking, route monitoring, parent notifications, and student attendance.",
    status: "upcoming",
    features: [
      "Live School Bus Tracking",
      "Parent Notifications",
      "Student Attendance",
      "GPS Monitoring",
      "Route Tracking",
      "Safety Alerts",
    ],
  },
  {
    slug: "bsp-yatra",
    name: "BSP Yatra",
    tagline: "Truck & Bus Management Platform",
    short: "Fleet management, driver tracking, and transport analytics for transport businesses.",
    full:
      "BSP Yatra is an end-to-end transport management platform built for truck and bus operators with fleet tracking, driver management, fuel monitoring, and analytics.",
    status: "upcoming",
    features: [
      "Fleet Management",
      "Vehicle Tracking",
      "Driver Management",
      "Route Reports",
      "Fuel Monitoring",
      "Transport Analytics",
    ],
  },
  {
    slug: "fieldtrack",
    name: "FieldTrack",
    tagline: "Field Work & Worker Payment Tracker",
    short: "Field worker time tracking and payment management for farms and labor management.",
    full:
      "FieldTrack helps managers handle field worker time, attendance and payments for farms, field operations and labor-intensive businesses.",
    status: "in-development",
    features: [
      "Worker Time Tracking",
      "Attendance Logs",
      "Payment Management",
      "Field Reports",
      "Multi-Site Support",
    ],
  },
];

export const SERVICES = [
  { title: "Custom Website Development", desc: "Professional business websites for startups, clinics, contractors and enterprises." },
  { title: "Business Automation", desc: "Automate operations, attendance, billing, reports and workflows with custom systems." },
  { title: "Management Software", desc: "Admin panels and dashboards to manage staff, clients, inventory and operations." },
  { title: "Booking Systems", desc: "Online appointment & queue management for clinics, hospitals, salons and services." },
  { title: "Tracking Platforms", desc: "GPS, attendance, worker, bus tracking and live monitoring systems." },
  { title: "SaaS Product Development", desc: "Cloud-based, scalable software products for multi-business usage." },
  { title: "Mobile-Friendly Web Apps", desc: "Responsive web apps that work perfectly across desktop, tablet, and mobile." },
];

export const FAQS = [
  {
    q: "Do you build custom software or only sell your existing products?",
    a: "Both. NirmanBook, QuickClinic and SmartLekka are ready-made products. We also build fully custom websites, management systems, booking platforms, and automation software tailored to your business.",
  },
  {
    q: "How long does it take to build a custom website or software?",
    a: "Basic business websites take 5–7 working days. Custom software like booking systems, dashboards and ERPs typically takes 2–6 weeks depending on scope. We share a clear timeline before development begins.",
  },
  {
    q: "I'm not technical. Will I be able to use the software?",
    a: "Yes — every product is designed for non-technical owners and staff. We include simple dashboards, training, onboarding, manuals, and WhatsApp support.",
  },
  {
    q: "Do you provide support after the project is delivered?",
    a: "Yes. SaaS products include support in the subscription. Custom projects offer maintenance packages with bug fixes, updates, feature improvements, backups and technical support.",
  },
  {
    q: "Are you only available in Udupi?",
    a: "We're headquartered in Udupi but work with businesses across Karnataka and India via WhatsApp, Google Meet/Zoom, phone and email.",
  },
  {
    q: "What does NirmanBook or QuickClinic cost?",
    a: "Pricing depends on business size, features and number of users. We offer flexible plans for startups, clinics, contractors and growing businesses. Contact us via WhatsApp or email for the latest pricing and a demo.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ramesh Shetty",
    business: "Shetty Constructions, Udupi",
    rating: 5,
    text: "NirmanBook completely changed how we manage our 4 sites. Attendance, billing and material — everything is now in one place.",
    product: "NirmanBook",
  },
  {
    name: "Dr. Anitha K.",
    business: "Smile Dental Clinic, Mangalore",
    rating: 5,
    text: "QuickClinic reduced our waiting room crowding to almost nothing. Patients love the live token queue.",
    product: "QuickClinic",
  },
  {
    name: "Sudhakar Pai",
    business: "Pai JCB Services, Karkala",
    rating: 5,
    text: "SmartLekka helps me track every EMI and customer payment. No more confusion at month-end.",
    product: "SmartLekka",
  },
];
