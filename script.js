/**
 * BLOOD DONATION PLATFORM - SCRIPT.JS
 * Medical & Healthcare Application Logic
 * Pure Vanilla JavaScript (No frameworks required)
 */

// ==========================================
// 1. MOCK DATA: Donors & Emergency Requests
// ==========================================

// Initial sample donor pool representing diverse blood groups & locations
let donorsData = [
  {
    id: "DON-101",
    name: "Dr. Marcus Vance",
    bloodGroup: "O-",
    age: 34,
    gender: "Male",
    city: "New York",
    area: "Manhattan",
    phone: "+1 (555) 234-5678",
    email: "marcus.vance@medmail.com",
    available: true,
    lastDonated: "2026-05-12",
    totalDonations: 12,
    badge: "Universal Life Hero"
  },
  {
    id: "DON-102",
    name: "Elena Rostova",
    bloodGroup: "A+",
    age: 28,
    gender: "Female",
    city: "New York",
    area: "Brooklyn",
    phone: "+1 (555) 345-6789",
    email: "elena.r@healthorg.net",
    available: true,
    lastDonated: "2026-06-20",
    totalDonations: 5,
    badge: "Regular Donor"
  },
  {
    id: "DON-103",
    name: "David K. Miller",
    bloodGroup: "B+",
    age: 42,
    gender: "Male",
    city: "Chicago",
    area: "Lincoln Park",
    phone: "+1 (555) 456-7890",
    email: "d.miller@careteam.org",
    available: true,
    lastDonated: "2026-04-18",
    totalDonations: 9,
    badge: "Life Champion"
  },
  {
    id: "DON-104",
    name: "Amina Al-Mansoor",
    bloodGroup: "O+",
    age: 26,
    gender: "Female",
    city: "Houston",
    area: "Medical Center",
    phone: "+1 (555) 567-8901",
    email: "amina.m@gulfhealth.org",
    available: false,
    lastDonated: "2026-08-01",
    totalDonations: 4,
    badge: "Guardian Donor"
  },
  {
    id: "DON-105",
    name: "Robert Chang",
    bloodGroup: "AB+",
    age: 31,
    gender: "Male",
    city: "Los Angeles",
    area: "Downtown",
    phone: "+1 (555) 678-9012",
    email: "robert.c@healthbridge.com",
    available: true,
    lastDonated: "2026-07-04",
    totalDonations: 7,
    badge: "Universal Recipient Supporter"
  },
  {
    id: "DON-106",
    name: "Sofia Martinez",
    bloodGroup: "A-",
    age: 29,
    gender: "Female",
    city: "Chicago",
    area: "West Loop",
    phone: "+1 (555) 789-0123",
    email: "sofia.m@carenetwork.org",
    available: true,
    lastDonated: "2026-05-30",
    totalDonations: 6,
    badge: "Rare Blood Ally"
  },
  {
    id: "DON-107",
    name: "James Wilson",
    bloodGroup: "B-",
    age: 39,
    gender: "Male",
    city: "Boston",
    area: "Back Bay",
    phone: "+1 (555) 890-1234",
    email: "james.w@communityaid.org",
    available: true,
    lastDonated: "2026-03-15",
    totalDonations: 11,
    badge: "Gold Life Saver"
  },
  {
    id: "DON-108",
    name: "Rachel Green-Adams",
    bloodGroup: "AB-",
    age: 33,
    gender: "Female",
    city: "Seattle",
    area: "Capitol Hill",
    phone: "+1 (555) 901-2345",
    email: "rachel.ga@northwesthope.org",
    available: true,
    lastDonated: "2026-06-11",
    totalDonations: 8,
    badge: "Rare Type Champion"
  }
];

// Active Emergency Blood Requests
let emergencyRequests = [
  {
    id: "REQ-901",
    patientName: "Lucas Henderson",
    bloodGroup: "O-",
    units: 3,
    hospitalName: "Metropolitan General Hospital",
    location: "New York, NY (ICU Unit 4)",
    contactNumber: "+1 (555) 987-6543",
    urgency: "immediate",
    urgencyText: "Immediate (Next 4 hrs)",
    postedTime: "24 minutes ago"
  },
  {
    id: "REQ-902",
    patientName: "Clara Morales",
    bloodGroup: "B+",
    units: 2,
    hospitalName: "Saint Jude Trauma Center",
    location: "Chicago, IL (Surgical Wing)",
    contactNumber: "+1 (555) 876-5432",
    urgency: "twelve-hours",
    urgencyText: "Within 12 Hours",
    postedTime: "1 hour ago"
  },
  {
    id: "REQ-903",
    patientName: "Anthony Walker",
    bloodGroup: "A+",
    units: 4,
    hospitalName: "Presbyterian Medical Institute",
    location: "Houston, TX (Emergency Ward)",
    contactNumber: "+1 (555) 765-4321",
    urgency: "standard",
    urgencyText: "Within 24 Hours",
    postedTime: "3 hours ago"
  }
];

// Active Logged-In Donor State (Defaults to Alexander Wright, updates when user registers)
let currentDonorUser = {
  id: "DON-7749",
  name: "Alexander Wright",
  bloodGroup: "O+",
  email: "alexander.wright@redlife.org",
  phone: "+1 (555) 332-9844",
  city: "New York",
  badge: "Gold Life Saver",
  available: true,
  lastDonationDate: "2026-06-14",
  nextEligibleDate: "2026-08-10",
  totalDonations: 8,
  livesImpacted: 24,
  history: [
    {
      date: "June 14, 2026",
      hospital: "City Central Hospital",
      type: "Whole Blood (450 ml)",
      status: "Verified & Dispensed"
    },
    {
      date: "February 20, 2026",
      hospital: "Red Cross Community Drive",
      type: "Whole Blood (450 ml)",
      status: "Verified & Dispensed"
    },
    {
      date: "October 05, 2025",
      hospital: "Saint Jude Children's Health",
      type: "Platelet Apheresis",
      status: "Verified & Dispensed"
    }
  ]
};

// Platform Statistics tracker
let platformStats = {
  donors: 12458,
  livesSaved: 38210,
  bloodRequests: 9842,
  hospitals: 184
};

// ==========================================
// 2. DOM INITIALIZATION ON LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderStatsCounters();
  renderDonorsList(donorsData);
  renderEmergencyFeed();
  renderDonorDashboard();
  initFormHandlers();
  initFaqAccordions();
  initModalListeners();
});

// ==========================================
// 3. NAVIGATION & SCROLL MANAGEMENT
// ==========================================
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky Navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateActiveNavLink();
  });

  // Mobile Hamburger Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("open");
      navMenu.classList.toggle("open");
    });

    // Close mobile menu on nav-link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("open");
        navMenu.classList.remove("open");
      });
    });
  }

  // Active section spy
  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 100;
    const sections = document.querySelectorAll("section[id]");

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }
}

// ==========================================
// 4. STATISTICS ANIMATION
// ==========================================
function renderStatsCounters() {
  const statDonors = document.getElementById("statDonors");
  const statLives = document.getElementById("statLives");
  const statRequests = document.getElementById("statRequests");
  const statHospitals = document.getElementById("statHospitals");

  if (statDonors) statDonors.innerText = platformStats.donors.toLocaleString() + "+";
  if (statLives) statLives.innerText = platformStats.livesSaved.toLocaleString() + "+";
  if (statRequests) statRequests.innerText = platformStats.bloodRequests.toLocaleString() + "+";
  if (statHospitals) statHospitals.innerText = platformStats.hospitals.toLocaleString() + "+";
}

// ==========================================
// 5. FIND BLOOD: Search & Filtering
// ==========================================
function renderDonorsList(donors) {
  const grid = document.getElementById("donorsGrid");
  const countEl = document.getElementById("resultsCountNum");
  
  if (!grid) return;
  if (countEl) countEl.innerText = donors.length;

  if (donors.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        </div>
        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 6px; color: var(--dark-gray-900);">No Donors Found</h4>
        <p style="color: var(--gray-500); max-width: 420px; margin: 0 auto 16px auto;">
          We couldn't find any donors matching your specific search filters right now. Try clearing filters or submit an Emergency Blood Request.
        </p>
        <button class="btn btn-outline-red btn-sm" onclick="resetDonorSearch()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = donors.map(donor => {
    // Generate initials for avatar
    const initials = donor.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
    const availabilityBadge = donor.available 
      ? `<span class="status-tag available"><span class="dot"></span> Available</span>`
      : `<span class="status-tag busy"><span class="dot"></span> Unavailable</span>`;

    return `
      <div class="donor-card" id="donor-card-${donor.id}">
        <div class="donor-card-top">
          <div class="donor-avatar-info">
            <div class="donor-avatar">${initials}</div>
            <div>
              <h4 class="donor-name">${donor.name}</h4>
              <p class="donor-city-sub">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                ${donor.city}${donor.area ? `, ${donor.area}` : ''}
              </p>
            </div>
          </div>
          <div class="blood-badge">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>
            ${donor.bloodGroup}
          </div>
        </div>

        <div class="donor-details-list">
          <div class="detail-row">
            <span>Availability:</span>
            <span>${availabilityBadge}</span>
          </div>
          <div class="detail-row">
            <span>Last Donated:</span>
            <span class="value">${donor.lastDonated || 'First time donor'}</span>
          </div>
          <div class="detail-row">
            <span>Total Donations:</span>
            <span class="value">${donor.totalDonations} times</span>
          </div>
          <div class="detail-row">
            <span>Badge:</span>
            <span class="value" style="color: var(--primary-red); font-size: 0.82rem;">${donor.badge || 'Volunteer Donor'}</span>
          </div>
        </div>

        <button class="btn btn-primary btn-block btn-sm" onclick="openContactDonorModal('${donor.id}')">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Contact Donor
        </button>
      </div>
    `;
  }).join("");
}

// Global Filter function
window.filterDonors = function() {
  const bloodGroup = document.getElementById("searchBloodGroup")?.value || "";
  const city = document.getElementById("searchCity")?.value.trim().toLowerCase() || "";
  const area = document.getElementById("searchArea")?.value.trim().toLowerCase() || "";

  const filtered = donorsData.filter(d => {
    const matchBlood = !bloodGroup || d.bloodGroup === bloodGroup;
    const matchCity = !city || d.city.toLowerCase().includes(city);
    const matchArea = !area || (d.area && d.area.toLowerCase().includes(area));
    return matchBlood && matchCity && matchArea;
  });

  renderDonorsList(filtered);
};

// Filter by quick pill
window.filterByGroup = function(group, btnEl) {
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(p => p.classList.remove("active"));
  
  if (btnEl) btnEl.classList.add("active");
  const select = document.getElementById("searchBloodGroup");
  if (select) {
    select.value = group;
  }
  filterDonors();
};

window.resetDonorSearch = function() {
  const groupSelect = document.getElementById("searchBloodGroup");
  const cityInput = document.getElementById("searchCity");
  const areaInput = document.getElementById("searchArea");

  if (groupSelect) groupSelect.value = "";
  if (cityInput) cityInput.value = "";
  if (areaInput) areaInput.value = "";

  document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  const allPill = document.querySelector(".filter-pill[data-group='ALL']");
  if (allPill) allPill.classList.add("active");

  renderDonorsList(donorsData);
};

// ==========================================
// 6. EMERGENCY BLOOD REQUESTS FEED
// ==========================================
function renderEmergencyFeed() {
  const feed = document.getElementById("emergencyRequestsFeed");
  if (!feed) return;

  feed.innerHTML = emergencyRequests.map(req => {
    let urgencyClass = "standard";
    if (req.urgency === "immediate") urgencyClass = "immediate";
    else if (req.urgency === "twelve-hours") urgencyClass = "twelve-hours";

    return `
      <div class="request-item-card">
        <div class="request-item-top">
          <span class="req-blood">${req.bloodGroup} Blood Needed (${req.units} Units)</span>
          <span class="req-urgency ${urgencyClass}">${req.urgencyText}</span>
        </div>
        <h4 class="req-patient">Patient: ${req.patientName}</h4>
        <div class="req-meta">
          <span>🏥 ${req.hospitalName}</span>
          <span>📍 ${req.location}</span>
        </div>
        <div class="req-action-row">
          <span class="req-time">🕒 ${req.postedTime}</span>
          <a href="tel:${req.contactNumber}" class="btn btn-primary btn-sm" style="padding: 4px 12px; font-size: 0.8rem;">
            Call Coordinator: ${req.contactNumber}
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================
// 7. DONOR DASHBOARD LOGIC
// ==========================================
function renderDonorDashboard() {
  const nameEl = document.getElementById("dashDonorName");
  const groupEl = document.getElementById("dashDonorBlood");
  const idEl = document.getElementById("dashDonorId");
  const badgeEl = document.getElementById("dashDonorBadge");
  const lastDateEl = document.getElementById("dashLastDonationDate");
  const nextDateEl = document.getElementById("dashNextEligibleDate");
  const countEl = document.getElementById("dashTotalDonations");
  const livesEl = document.getElementById("dashLivesSaved");
  const toggle = document.getElementById("donorAvailabilitySwitch");
  const timelineEl = document.getElementById("dashTimelineList");

  if (nameEl) nameEl.innerText = currentDonorUser.name;
  if (groupEl) groupEl.innerText = currentDonorUser.bloodGroup;
  if (idEl) idEl.innerText = `Donor ID: ${currentDonorUser.id}`;
  if (badgeEl) badgeEl.innerText = currentDonorUser.badge;
  if (lastDateEl) lastDateEl.innerText = currentDonorUser.lastDonationDate || "N/A";
  if (nextDateEl) nextDateEl.innerText = currentDonorUser.nextEligibleDate || "Ready now";
  if (countEl) countEl.innerText = currentDonorUser.totalDonations;
  if (livesEl) livesEl.innerText = currentDonorUser.livesImpacted;

  if (toggle) {
    toggle.checked = currentDonorUser.available;
    updateAvailabilityStatusText(currentDonorUser.available);

    toggle.addEventListener("change", (e) => {
      currentDonorUser.available = e.target.checked;
      updateAvailabilityStatusText(currentDonorUser.available);
      showToast(
        currentDonorUser.available ? "Availability Set: Active" : "Availability Set: Inactive",
        currentDonorUser.available 
          ? "You are now visible to hospitals and emergency request coordinators."
          : "You will not receive emergency donor alert notifications until re-enabled.",
        currentDonorUser.available ? "success" : "urgent"
      );
    });
  }

  if (timelineEl && currentDonorUser.history) {
    timelineEl.innerHTML = currentDonorUser.history.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-title">
          <span>${item.hospital}</span>
          <span class="timeline-date">${item.date}</span>
        </div>
        <p class="timeline-meta">${item.type} • <span style="color: var(--emerald-600); font-weight: 600;">${item.status}</span></p>
        <span class="timeline-cert-badge">✓ Official Medical Record Logged</span>
      </div>
    `).join("");
  }
}

function updateAvailabilityStatusText(isAvail) {
  const statusEl = document.getElementById("dashAvailabilityStatusText");
  if (statusEl) {
    statusEl.innerText = isAvail 
      ? "Active & Available for emergency calls" 
      : "Temporarily Inactive / Resting";
    statusEl.style.color = isAvail ? "var(--emerald-600)" : "var(--gray-500)";
  }
}

// ==========================================
// 8. FORM VALIDATIONS & SUBMISSIONS
// ==========================================
function initFormHandlers() {
  // Form 1: Become a Donor Registration
  const donorForm = document.getElementById("becomeDonorForm");
  if (donorForm) {
    donorForm.addEventListener("submit", handleDonorRegistration);
  }

  // Form 2: Emergency Blood Request
  const requestForm = document.getElementById("emergencyRequestForm");
  if (requestForm) {
    requestForm.addEventListener("submit", handleEmergencyRequest);
  }

  // Form 3: Contact Us Message
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }
}

// Helper: Show input validation error
function setFieldError(fieldId, errorMsg) {
  const field = document.getElementById(fieldId);
  if (!field) return false;
  const parent = field.closest(".form-group");
  if (parent) {
    parent.classList.add("has-error");
    const errSpan = parent.querySelector(".error-message");
    if (errSpan) errSpan.innerText = errorMsg;
  }
  field.classList.add("error");
  return false;
}

// Helper: Clear input validation error
function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  const parent = field.closest(".form-group");
  if (parent) {
    parent.classList.remove("has-error");
  }
  field.classList.remove("error");
}

// Handler: Donor Registration
function handleDonorRegistration(e) {
  e.preventDefault();
  let isValid = true;

  // Clear previous errors
  const fieldsToClear = [
    "donorFullName", "donorAge", "donorGender", "donorBloodGroup",
    "donorPhone", "donorEmail", "donorCity", "donorAddress"
  ];
  fieldsToClear.forEach(clearFieldError);

  const fullName = document.getElementById("donorFullName")?.value.trim();
  const ageVal = parseInt(document.getElementById("donorAge")?.value, 10);
  const gender = document.getElementById("donorGender")?.value;
  const bloodGroup = document.getElementById("donorBloodGroup")?.value;
  const phone = document.getElementById("donorPhone")?.value.trim();
  const email = document.getElementById("donorEmail")?.value.trim();
  const city = document.getElementById("donorCity")?.value.trim();
  const address = document.getElementById("donorAddress")?.value.trim();
  const lastDonated = document.getElementById("donorLastDonated")?.value || "";
  const isAvailable = document.querySelector('input[name="donorAvailability"]:checked')?.value === "yes";
  const termsAgreed = document.getElementById("donorTerms")?.checked;

  // Validation Rules
  if (!fullName || fullName.length < 3) {
    isValid = setFieldError("donorFullName", "Please provide your full legal name (at least 3 letters).");
  }

  if (isNaN(ageVal) || ageVal < 18 || ageVal > 65) {
    isValid = setFieldError("donorAge", "Eligible donors must be between 18 and 65 years old.");
  }

  if (!gender) {
    isValid = setFieldError("donorGender", "Please select your gender.");
  }

  if (!bloodGroup) {
    isValid = setFieldError("donorBloodGroup", "Please select your verified blood group.");
  }

  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  if (!phone || !phoneRegex.test(phone.replace(/\s+/g, ''))) {
    isValid = setFieldError("donorPhone", "Please enter a valid telephone or mobile number.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    isValid = setFieldError("donorEmail", "Please provide a valid email address.");
  }

  if (!city) {
    isValid = setFieldError("donorCity", "Please specify your current city.");
  }

  if (!address) {
    isValid = setFieldError("donorAddress", "Please provide your residential address for verification.");
  }

  if (!termsAgreed) {
    alert("Please acknowledge that you meet the voluntary blood donation criteria.");
    return;
  }

  if (!isValid) return;

  // Create new Donor Object
  const newDonor = {
    id: "DON-" + (100 + donorsData.length + 1),
    name: fullName,
    bloodGroup: bloodGroup,
    age: ageVal,
    gender: gender,
    city: city,
    area: address.split(",")[0] || city,
    phone: phone,
    email: email,
    available: isAvailable,
    lastDonated: lastDonated || "First Time Donor",
    totalDonations: 1,
    badge: "New Hero Donor"
  };

  // Add to local dataset
  donorsData.unshift(newDonor);
  platformStats.donors += 1;
  renderStatsCounters();
  renderDonorsList(donorsData);

  // Switch current profile to the newly registered hero
  currentDonorUser = {
    id: newDonor.id,
    name: newDonor.name,
    bloodGroup: newDonor.bloodGroup,
    email: newDonor.email,
    phone: newDonor.phone,
    city: newDonor.city,
    badge: "Verified Donor",
    available: newDonor.available,
    lastDonationDate: newDonor.lastDonated,
    nextEligibleDate: "Eligible Now",
    totalDonations: 1,
    livesImpacted: 3,
    history: [
      {
        date: "Today (Registered)",
        hospital: "Blood Donation Platform Network",
        type: "Volunteer Profile Created",
        status: "Active & Verified"
      }
    ]
  };
  renderDonorDashboard();

  // Reset form & show toast
  e.target.reset();
  showToast(
    "Registration Successful!",
    `Thank you, ${fullName}! You are now registered as an active ${bloodGroup} blood donor.`,
    "success"
  );

  // Smooth scroll to donor dashboard or results
  const dashboardSec = document.getElementById("dashboard");
  if (dashboardSec) {
    dashboardSec.scrollIntoView({ behavior: "smooth" });
  }
}

// Handler: Emergency Blood Request
function handleEmergencyRequest(e) {
  e.preventDefault();
  let isValid = true;

  const fieldsToClear = [
    "reqPatientName", "reqBloodGroup", "reqUnits",
    "reqHospitalName", "reqHospitalLocation", "reqContactPhone", "reqEmergencyLevel"
  ];
  fieldsToClear.forEach(clearFieldError);

  const patientName = document.getElementById("reqPatientName")?.value.trim();
  const bloodGroup = document.getElementById("reqBloodGroup")?.value;
  const units = parseInt(document.getElementById("reqUnits")?.value, 10);
  const hospitalName = document.getElementById("reqHospitalName")?.value.trim();
  const location = document.getElementById("reqHospitalLocation")?.value.trim();
  const contactPhone = document.getElementById("reqContactPhone")?.value.trim();
  const emergencyLevel = document.getElementById("reqEmergencyLevel")?.value;

  if (!patientName || patientName.length < 2) {
    isValid = setFieldError("reqPatientName", "Please enter patient's name.");
  }

  if (!bloodGroup) {
    isValid = setFieldError("reqBloodGroup", "Select the urgently needed blood group.");
  }

  if (isNaN(units) || units < 1) {
    isValid = setFieldError("reqUnits", "Specify required units (at least 1 unit).");
  }

  if (!hospitalName) {
    isValid = setFieldError("reqHospitalName", "Enter receiving hospital or medical center.");
  }

  if (!location) {
    isValid = setFieldError("reqHospitalLocation", "Specify hospital address, ward, or city.");
  }

  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  if (!contactPhone || !phoneRegex.test(contactPhone.replace(/\s+/g, ''))) {
    isValid = setFieldError("reqContactPhone", "Enter a working emergency contact phone.");
  }

  if (!emergencyLevel) {
    isValid = setFieldError("reqEmergencyLevel", "Select urgency timeframe.");
  }

  if (!isValid) return;

  let urgencyText = "Immediate (Next 4 hrs)";
  if (emergencyLevel === "twelve-hours") urgencyText = "Within 12 Hours";
  if (emergencyLevel === "standard") urgencyText = "Within 24 Hours";

  const newRequest = {
    id: "REQ-" + (900 + emergencyRequests.length + 1),
    patientName: patientName,
    bloodGroup: bloodGroup,
    units: units,
    hospitalName: hospitalName,
    location: location,
    contactNumber: contactPhone,
    urgency: emergencyLevel,
    urgencyText: urgencyText,
    postedTime: "Just now"
  };

  emergencyRequests.unshift(newRequest);
  platformStats.bloodRequests += 1;
  renderStatsCounters();
  renderEmergencyFeed();

  e.target.reset();

  showToast(
    "Emergency Request Broadcasted",
    `Broadcasted alert for ${units} units of ${bloodGroup} blood at ${hospitalName}. Donors are being notified.`,
    "urgent"
  );
}

// Handler: Contact Us Message
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value.trim();
  const email = document.getElementById("contactEmail")?.value.trim();
  const msg = document.getElementById("contactMessage")?.value.trim();

  if (!name || !email || !msg) {
    alert("Please complete all required fields.");
    return;
  }

  e.target.reset();
  showToast(
    "Message Sent Successfully",
    `Thank you ${name}. Our medical coordinators will get back to you shortly.`,
    "success"
  );
}

// ==========================================
// 9. FAQ ACCORDION LOGIC
// ==========================================
function initFaqAccordions() {
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isActive = item.classList.contains("active");

      // Close all others
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================
// 10. MODAL DIALOGS & POPUPS
// ==========================================
function initModalListeners() {
  // Close modals on overlay backdrop click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

window.closeAllModals = function() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
};

// Open Contact Donor Modal with pre-filled details
window.openContactDonorModal = function(donorId) {
  const donor = donorsData.find(d => d.id === donorId);
  if (!donor) return;

  const modal = document.getElementById("contactDonorModal");
  const nameEl = document.getElementById("modalDonorName");
  const bloodEl = document.getElementById("modalDonorBlood");
  const locationEl = document.getElementById("modalDonorLocation");
  const phoneEl = document.getElementById("modalDonorPhone");
  const telLink = document.getElementById("modalDonorTelLink");
  const whatsappLink = document.getElementById("modalDonorWhatsappLink");

  if (nameEl) nameEl.innerText = donor.name;
  if (bloodEl) bloodEl.innerText = donor.bloodGroup;
  if (locationEl) locationEl.innerText = `${donor.city}${donor.area ? ` (${donor.area})` : ''}`;
  if (phoneEl) phoneEl.innerText = donor.phone;
  if (telLink) telLink.href = `tel:${donor.phone}`;

  // Clean phone number for whatsapp link
  const rawNum = donor.phone.replace(/[^0-9]/g, '');
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${rawNum}?text=Hello%20${encodeURIComponent(donor.name)},%20I%20found%20your%20profile%20on%20Blood%20Donation%20Platform%20and%20need%20blood%20assistance.`;
  }

  if (modal) modal.classList.add("active");
};

// Open Login/Register Switcher Modal
window.openAuthModal = function() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.add("active");
};

// Switch mock active account in dashboard
window.switchActiveAccount = function(presetId) {
  if (presetId === 'marcus') {
    currentDonorUser = {
      id: "DON-101",
      name: "Dr. Marcus Vance",
      bloodGroup: "O-",
      email: "marcus.vance@medmail.com",
      phone: "+1 (555) 234-5678",
      city: "New York",
      badge: "Universal Life Hero",
      available: true,
      lastDonationDate: "2026-05-12",
      nextEligibleDate: "Ready to Donate",
      totalDonations: 12,
      livesImpacted: 36,
      history: [
        { date: "May 12, 2026", hospital: "Metropolitan Trauma Unit", type: "Whole Blood", status: "Verified" },
        { date: "Jan 10, 2026", hospital: "NY Presbyterian Blood Center", type: "Whole Blood", status: "Verified" }
      ]
    };
  } else if (presetId === 'elena') {
    currentDonorUser = {
      id: "DON-102",
      name: "Elena Rostova",
      bloodGroup: "A+",
      email: "elena.r@healthorg.net",
      phone: "+1 (555) 345-6789",
      city: "New York",
      badge: "Regular Life Saver",
      available: true,
      lastDonationDate: "2026-06-20",
      nextEligibleDate: "2026-08-20",
      totalDonations: 5,
      livesImpacted: 15,
      history: [
        { date: "June 20, 2026", hospital: "Brooklyn Methodist Center", type: "Whole Blood", status: "Verified" }
      ]
    };
  }

  renderDonorDashboard();
  closeAllModals();
  showToast("Account Switched", `Now viewing dashboard as ${currentDonorUser.name} (${currentDonorUser.bloodGroup}).`, "success");
  
  const dash = document.getElementById("dashboard");
  if (dash) dash.scrollIntoView({ behavior: "smooth" });
};

// ==========================================
// 11. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(title, message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let iconSvg = "";
  if (type === "success") {
    iconSvg = `
      <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color: var(--emerald-600); flex-shrink: 0;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    `;
  } else if (type === "urgent") {
    iconSvg = `
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" style="color: #ef4444; flex-shrink: 0;">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    `;
  } else {
    iconSvg = `
      <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color: var(--primary-red); flex-shrink: 0;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    `;
  }

  toast.innerHTML = `
    ${iconSvg}
    <div class="toast-content">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  // Trigger animation in next frame
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 5000);
}
