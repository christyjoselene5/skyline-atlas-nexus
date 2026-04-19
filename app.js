const credentials = {
  email: "christy.joselene@skylineatlas.com",
  password: "ChristyHR@2026",
};

const sessionKey = "skyline-atlas-session";
const bookingsStorageKey = "skyline-atlas-bookings";

const seedBookings = [
  {
    id: "BK-20481",
    traveler: "Olivia Bennett",
    employeeId: "EMP-1041",
    position: "Regional Sales Director",
    department: "Sales",
    company: "Northstar Advisory",
    destination: "Tokyo, Japan",
    departure: "2026-04-22",
    status: "Confirmed",
    amount: 8450,
    packageType: "Executive summit",
    advisor: "Maya Chen",
    hotel: "Hoshinoya Tokyo",
    payment: "Paid in full",
    passport: "Verified on file",
    preferences: ["Window seat", "Vegetarian meals", "Late checkout requested"],
    timeline: [
      "Apr 19, 09:10: Flight revalidated after airline schedule update",
      "Apr 18, 16:40: Lounge access voucher sent",
      "Apr 15, 11:25: Final itinerary approved by client",
    ],
    notes:
      "VIP traveler attending a two-day investor summit. Keep arrival transfer flexible in case the board dinner runs late.",
  },
  {
    id: "BK-20482",
    traveler: "Ethan Carter",
    employeeId: "EMP-1042",
    position: "Creative Operations Lead",
    department: "Marketing",
    company: "Wild Harbor Studios",
    destination: "Reykjavik, Iceland",
    departure: "2026-04-21",
    status: "Action Needed",
    amount: 3920,
    packageType: "Production scouting",
    advisor: "Maya Chen",
    hotel: "The Reykjavik EDITION",
    payment: "Deposit received",
    passport: "Awaiting renewed passport upload",
    preferences: ["Aisle seat", "4x4 rental", "Northern lights add-on"],
    timeline: [
      "Apr 19, 08:05: Passport expiration warning triggered",
      "Apr 18, 14:50: Client requested glacier transfer quote",
      "Apr 17, 10:10: Hotel upgraded to harbor-facing suite",
    ],
    notes:
      "This file is blocked until the traveler uploads their renewed passport. Follow up before ticket issuance cutoff at 5 PM.",
  },
  {
    id: "BK-20483",
    traveler: "Sophia Ramirez",
    employeeId: "EMP-1043",
    position: "People Experience Manager",
    department: "Human Resources",
    company: "Elm Ridge Health",
    destination: "Barcelona, Spain",
    departure: "2026-04-26",
    status: "Pending",
    amount: 5175,
    packageType: "Leadership retreat",
    advisor: "Noah Patel",
    hotel: "Almanac Barcelona",
    payment: "Pending finance approval",
    passport: "Verified on file",
    preferences: ["King bed", "Airport fast track", "Team dinner reservations"],
    timeline: [
      "Apr 19, 07:30: Awaiting corporate card authorization",
      "Apr 18, 13:15: Retreat agenda synced from client",
      "Apr 16, 17:40: Preliminary itinerary drafted",
    ],
    notes:
      "Group extension likely for two executives after the retreat. Keep return fare hold alive through Friday morning.",
  },
  {
    id: "BK-20484",
    traveler: "Liam Johnson",
    employeeId: "EMP-1044",
    position: "Chief Strategy Officer",
    department: "Executive",
    company: "Brightline Ventures",
    destination: "Cape Town, South Africa",
    departure: "2026-05-02",
    status: "Confirmed",
    amount: 11020,
    packageType: "Founder offsite",
    advisor: "Avery Brooks",
    hotel: "Ellerman House",
    payment: "Paid in full",
    passport: "Verified on file",
    preferences: ["Ocean-view suite", "Private wine tour", "Flexible return"],
    timeline: [
      "Apr 18, 19:20: Helicopter transfer added",
      "Apr 17, 09:55: Business class seats confirmed",
      "Apr 14, 15:10: Safari extension approved",
    ],
    notes:
      "Founding team requested room gifting amenities for arrival. Coordinate with hotel concierge 48 hours before check-in.",
  },
  {
    id: "BK-20485",
    traveler: "Ava Thompson",
    employeeId: "EMP-1045",
    position: "Senior Product Designer",
    department: "Design",
    company: "Independent",
    destination: "Marrakech, Morocco",
    departure: "2026-04-20",
    status: "Completed",
    amount: 2680,
    packageType: "Luxury city break",
    advisor: "Noah Patel",
    hotel: "La Mamounia",
    payment: "Settled",
    passport: "Verified on file",
    preferences: ["Spa booking", "Private guide", "Riad shopping tour"],
    timeline: [
      "Apr 18, 12:00: Post-trip feedback request scheduled",
      "Apr 12, 20:15: Airport host delivered departure support",
      "Apr 10, 08:45: Room upgrade confirmed",
    ],
    notes:
      "Guest completed travel with excellent service feedback. Good candidate for loyalty outreach and anniversary offer.",
  },
  {
    id: "BK-20486",
    traveler: "Noah Wilson",
    employeeId: "EMP-1046",
    position: "Global Communications Manager",
    department: "Communications",
    company: "Kite & Quill Media",
    destination: "Sydney, Australia",
    departure: "2026-04-29",
    status: "Pending",
    amount: 7340,
    packageType: "Speaker circuit",
    advisor: "Maya Chen",
    hotel: "Park Hyatt Sydney",
    payment: "Invoice sent",
    passport: "ETA application in progress",
    preferences: ["Harbor-facing room", "Press lounge access", "Early breakfast"],
    timeline: [
      "Apr 19, 10:35: Visa support letter sent",
      "Apr 18, 09:00: Client requested carbon reporting",
      "Apr 17, 12:20: Route changed to direct service",
    ],
    notes:
      "Traveler is keynote talent for three events in one week. Keep schedule buffers around media appearances.",
  },
];

function cloneSeedBookings() {
  return JSON.parse(JSON.stringify(seedBookings));
}

function loadBookings() {
  const saved = localStorage.getItem(bookingsStorageKey);
  if (!saved) {
    return cloneSeedBookings();
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : cloneSeedBookings();
  } catch (error) {
    return cloneSeedBookings();
  }
}

const bookings = loadBookings();

const loginScreen = document.querySelector("#loginScreen");
const dashboard = document.querySelector("#dashboard");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logoutButton = document.querySelector("#logoutButton");
const statsGrid = document.querySelector("#statsGrid");
const bookingRows = document.querySelector("#bookingRows");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const detailName = document.querySelector("#detailName");
const detailSummary = document.querySelector("#detailSummary");
const detailContent = document.querySelector("#detailContent");
const agentName = document.querySelector("#agentName");
const agentRole = document.querySelector("#agentRole");
const aiRefreshButton = document.querySelector("#aiRefreshButton");
const bookingForm = document.querySelector("#bookingForm");
const bookingFormMessage = document.querySelector("#bookingFormMessage");
const employeeRecordForm = document.querySelector("#employeeRecordForm");
const employeeRecordMessage = document.querySelector("#employeeRecordMessage");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");
const employeeIdName = document.querySelector("#employeeIdName");
const employeeDesignation = document.querySelector("#employeeDesignation");
const employeeDirectory = document.querySelector("#employeeDirectory");
const employeeDirectoryCount = document.querySelector("#employeeDirectoryCount");
const employeeSearchInput = document.querySelector("#employeeSearchInput");
const experimentModeLabel = document.querySelector("#experimentModeLabel");
const experimentSummary = document.querySelector("#experimentSummary");
const observationFeed = document.querySelector("#observationFeed");
const aiRecommendationFeed = document.querySelector("#aiRecommendationFeed");
const futureAnalyticsGrid = document.querySelector("#futureAnalyticsGrid");

const employeeProfile = {
  name: "Christy Joselene",
  role: "HR Manager",
};

const experimentModes = {
  Baseline: {
    summary:
      "Baseline mode compares active travel files against the current operating flow.",
    observations: [
      "Track normal employee movement patterns across departments.",
      "Review approvals, travel status changes, and document readiness.",
      "Use this mode as the default comparison set for new pilots.",
    ],
  },
  "Policy Stress Test": {
    summary:
      "Policy Stress Test simulates stricter approvals, compliance checks, and higher exception monitoring.",
    observations: [
      "Watch for pending trips that could fail policy thresholds.",
      "Compare document readiness against tighter compliance rules.",
      "Surface departments with the highest exception volume.",
    ],
  },
  "VIP Mobility Pilot": {
    summary:
      "VIP Mobility Pilot highlights premium employee movement, faster handling, and high-priority travel paths.",
    observations: [
      "Prioritize executive and high-impact employee trips.",
      "Measure how quickly premium travelers move through approvals.",
      "Compare high-value itineraries against standard employee trips.",
    ],
  },
};

let selectedBookingId = bookings[0] ? bookings[0].id : null;
let filters = {
  query: "",
  status: "all",
};
let activeExperimentMode = "Baseline";
let aiRefreshCount = 0;
let employeeSearchQuery = "";

function saveBookings() {
  localStorage.setItem(bookingsStorageKey, JSON.stringify(bookings));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function getStatusClass(status) {
  return `status-${status.toLowerCase().replace(/\s+/g, "-")}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const characterMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return characterMap[character];
  });
}

function createTimelineEntry(message) {
  const stamp = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());

  return `${stamp}: ${message}`;
}

function getNextBookingNumber() {
  return Math.max(...bookings.map((booking) => Number(booking.id.split("-")[1]))) + 1;
}

function getExperimentBookings() {
  if (activeExperimentMode === "Policy Stress Test") {
    return bookings.filter(
      (booking) =>
        booking.status === "Pending" ||
        booking.status === "Action Needed" ||
        booking.passport.toLowerCase().includes("pending") ||
        booking.passport.toLowerCase().includes("awaiting")
    );
  }

  if (activeExperimentMode === "VIP Mobility Pilot") {
    return bookings.filter(
      (booking) =>
        booking.department === "Executive" ||
        booking.amount >= 7000 ||
        booking.packageType.toLowerCase().includes("executive")
    );
  }

  return bookings;
}

function getAiRecommendations() {
  const visible = getExperimentBookings();
  const pending = visible.filter((booking) => booking.status === "Pending").length;
  const actionNeeded = visible.filter(
    (booking) => booking.status === "Action Needed"
  ).length;
  const executiveTrips = visible.filter(
    (booking) => booking.department === "Executive" || booking.amount >= 7000
  ).length;

  return [
    {
      title: "Schedule HR compliance review",
      body: `${pending} workforce files are still pending and should be reviewed before departure windows tighten.`,
    },
    {
      title: "Escalate exception handling",
      body: `${actionNeeded} assignments need immediate intervention for documents, approvals, or policy issues.`,
    },
    {
      title: "Protect premium traveler experience",
      body: `${executiveTrips} high-value or executive itineraries should stay under proactive concierge monitoring.`,
    },
  ].map((item, index) => ({
    ...item,
    body:
      aiRefreshCount > 0 && index === 0
        ? `${item.body} Refresh cycle ${aiRefreshCount} completed.`
        : item.body,
  }));
}

function getFutureAnalyticsCards() {
  const visible = getExperimentBookings();
  const departments = new Set(visible.map((booking) => booking.department)).size;
  const avgBudget = visible.length
    ? Math.round(visible.reduce((sum, booking) => sum + booking.amount, 0) / visible.length)
    : 0;
  const confirmedRate = visible.length
    ? Math.round(
        (visible.filter((booking) => booking.status === "Confirmed").length /
          visible.length) *
          100
      )
    : 0;
  const nearDeparture = visible.filter((booking) => {
    const departure = new Date(`${booking.departure}T00:00:00`);
    const now = new Date("2026-04-19T00:00:00");
    const difference = (departure - now) / (1000 * 60 * 60 * 24);
    return difference >= 0 && difference <= 5;
  }).length;

  return [
    {
      label: "Coverage",
      value: `${departments} departments`,
      detail: "Teams currently represented in workforce travel demand",
    },
    {
      label: "Budget Forecast",
      value: formatCurrency(avgBudget),
      detail: "Average projected travel spend per active workforce file",
    },
    {
      label: "Readiness Rate",
      value: `${confirmedRate}%`,
      detail: "Assignments currently confirmed and operationally ready",
    },
    {
      label: "Near-Term Load",
      value: `${nearDeparture} departures`,
      detail: "Employees expected to move within the next five days",
    },
  ];
}

function getVisibleBookings() {
  return getExperimentBookings().filter((booking) => {
    const matchesQuery =
      !filters.query ||
      [booking.id, booking.traveler, booking.destination, booking.company]
        .join(" ")
        .toLowerCase()
        .includes(filters.query);

    const matchesStatus =
      filters.status === "all" || booking.status === filters.status;

    return matchesQuery && matchesStatus;
  });
}

function getTasks() {
  return getExperimentBookings()
    .filter(
      (booking) =>
        booking.status === "Action Needed" || booking.status === "Pending"
    )
    .sort((first, second) => new Date(first.departure) - new Date(second.departure))
    .slice(0, 4);
}

function getStats() {
  const experimentBookings = getExperimentBookings();
  const totalRevenue = experimentBookings.reduce(
    (sum, booking) => sum + booking.amount,
    0
  );
  const actionNeeded = experimentBookings.filter(
    (booking) => booking.status === "Action Needed"
  ).length;
  const pending = experimentBookings.filter(
    (booking) => booking.status === "Pending"
  ).length;
  const departuresThisWeek = experimentBookings.filter((booking) => {
    const departure = new Date(`${booking.departure}T00:00:00`);
    const now = new Date("2026-04-19T00:00:00");
    const difference = (departure - now) / (1000 * 60 * 60 * 24);
    return difference >= 0 && difference <= 7;
  }).length;

  const labelsByMode = {
    Baseline: {
      active: "Active bookings",
      departures: "Departing this week",
      action: "Needs action",
      value: "Pipeline value",
    },
    "Policy Stress Test": {
      active: "Flagged files",
      departures: "Compliance checks due",
      action: "High-risk exceptions",
      value: "Exposure value",
    },
    "VIP Mobility Pilot": {
      active: "VIP experiment files",
      departures: "Priority departures",
      action: "Concierge watchlist",
      value: "Premium pipeline",
    },
  };

  const modeLabels = labelsByMode[activeExperimentMode];

  return [
    {
      label: modeLabels.active,
      value: experimentBookings.length,
      detail:
        activeExperimentMode === "Baseline"
          ? "Current trips under employee management"
          : "Records currently included in this experiment mode",
    },
    {
      label: modeLabels.departures,
      value: departuresThisWeek,
      detail:
        activeExperimentMode === "Policy Stress Test"
          ? "Flagged files that require review within 7 days"
          : "Travelers leaving within the next 7 days",
    },
    {
      label: modeLabels.action,
      value: actionNeeded,
      detail:
        activeExperimentMode === "VIP Mobility Pilot"
          ? "High-priority itineraries needing hands-on support"
          : "Bookings blocked on documents or approvals",
    },
    {
      label: modeLabels.value,
      value: formatCurrency(totalRevenue),
      detail: `${pending} files are still waiting on approval`,
    },
  ];
}

function renderStats() {
  statsGrid.innerHTML = getStats()
    .map(
      (stat, index) => `
        <article class="stat-card" style="animation-delay:${index * 60}ms">
          <span class="segment-label">${escapeHtml(stat.label)}</span>
          <strong>${escapeHtml(stat.value)}</strong>
          <p>${escapeHtml(stat.detail)}</p>
        </article>
      `
    )
    .join("");
}

function renderTasks() {
  const tasks = getTasks();
  taskCount.textContent = `${tasks.length} open`;

  if (!tasks.length) {
    taskList.innerHTML =
      '<div class="empty-state" style="min-height: 180px;">No urgent files right now.</div>';
    return;
  }

  taskList.innerHTML = tasks
    .map(
      (booking) => `
        <article class="task-item">
          <div class="task-item-top">
            <strong>${escapeHtml(booking.traveler)}</strong>
            <span class="status-badge ${getStatusClass(booking.status)}">${escapeHtml(
              booking.status
            )}</span>
          </div>
          <p>${escapeHtml(booking.destination)} departure on ${formatDate(
            booking.departure
          )}</p>
          <small>${escapeHtml(booking.notes)}</small>
          <button class="secondary-button" type="button" data-task-booking-id="${escapeHtml(
            booking.id
          )}">Open file</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-task-booking-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedBookingId = button.dataset.taskBookingId;
      renderDashboard();
    });
  });
}

function renderExperimentCenter() {
  const currentMode = experimentModes[activeExperimentMode];
  const experimentCount = getExperimentBookings().length;
  experimentModeLabel.textContent = activeExperimentMode;
  experimentSummary.textContent = `${currentMode.summary} Currently showing ${experimentCount} files.`;
  observationFeed.innerHTML = currentMode.observations
    .map(
      (item, index) => `
        <article class="observation-card">
          <strong>Observation ${index + 1}</strong>
          <p>${escapeHtml(item)}</p>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".experiment-toggle").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === activeExperimentMode);
    button.addEventListener("click", () => {
      activeExperimentMode = button.dataset.mode;
      filters.status = "all";
      statusFilter.value = "all";
      renderDashboard();
    });
  });
}

function renderAiPanels() {
  aiRecommendationFeed.innerHTML = getAiRecommendations()
    .map(
      (item) => `
        <article class="observation-card">
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `
    )
    .join("");

  futureAnalyticsGrid.innerHTML = getFutureAnalyticsCards()
    .map(
      (card) => `
        <article class="future-analytics-card">
          <small>${escapeHtml(card.label)}</small>
          <strong>${escapeHtml(card.value)}</strong>
          <p>${escapeHtml(card.detail)}</p>
        </article>
      `
    )
    .join("");
}

function renderEmployeeDirectory() {
  const experimentBookings = getExperimentBookings().filter((booking) =>
    !employeeSearchQuery
      ? true
      : [booking.traveler, booking.position, booking.department]
          .join(" ")
          .toLowerCase()
          .includes(employeeSearchQuery)
  );
  employeeDirectoryCount.textContent = `${experimentBookings.length} travelers`;

  if (!experimentBookings.length) {
    employeeDirectory.innerHTML =
      '<div class="empty-state" style="min-height: 180px;">No employees match this search.</div>';
    return;
  }

  employeeDirectory.innerHTML = experimentBookings
    .map(
      (booking) => `
        <article class="employee-directory-card">
          <div class="task-item-top">
            <strong>${escapeHtml(booking.traveler)}</strong>
            <span class="status-badge ${getStatusClass(booking.status)}">${escapeHtml(
              booking.status
            )}</span>
          </div>
          <p>${escapeHtml(booking.position)}</p>
          <small>${escapeHtml(booking.department)} - ${escapeHtml(
            booking.employeeId
          )}</small>
          <small>${escapeHtml(booking.destination)} - ${formatDate(
            booking.departure
          )}</small>
          <button type="button" class="secondary-button" data-directory-booking-id="${escapeHtml(
            booking.id
          )}">View experiment file</button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-directory-booking-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedBookingId = button.dataset.directoryBookingId;
      renderDashboard();
    });
  });
}

function ensureSelectedBooking() {
  const visible = getVisibleBookings();
  if (!visible.some((booking) => booking.id === selectedBookingId)) {
    selectedBookingId = visible[0] ? visible[0].id : null;
  }
}

function renderBookings() {
  const visibleBookings = getVisibleBookings();
  ensureSelectedBooking();

  if (!visibleBookings.length) {
    bookingRows.innerHTML = `
      <tr>
        <td colspan="6">
          <div class="empty-state" style="min-height: 220px;">
            No bookings match the current search and filter.
          </div>
        </td>
      </tr>
    `;
    renderDetail();
    return;
  }

  bookingRows.innerHTML = visibleBookings
    .map(
      (booking) => `
        <tr data-booking-id="${escapeHtml(booking.id)}" class="${
          booking.id === selectedBookingId ? "active" : ""
        }">
          <td>
            <strong>${escapeHtml(booking.packageType)}</strong>
            <span class="booking-id">${escapeHtml(booking.id)}</span>
          </td>
          <td class="traveler-cell">
            <strong>${escapeHtml(booking.traveler)}</strong>
            <span class="traveler-meta">${escapeHtml(booking.company)}</span>
          </td>
          <td class="route-cell">
            <strong>${escapeHtml(booking.destination)}</strong>
            <span class="traveler-meta">${escapeHtml(booking.hotel)}</span>
          </td>
          <td>${formatDate(booking.departure)}</td>
          <td>
            <span class="status-badge ${getStatusClass(booking.status)}">${escapeHtml(
              booking.status
            )}</span>
          </td>
          <td>
            <strong>${formatCurrency(booking.amount)}</strong>
            <span class="value-note">${escapeHtml(booking.payment)}</span>
          </td>
        </tr>
      `
    )
    .join("");

  document.querySelectorAll("[data-booking-id]").forEach((row) => {
    row.addEventListener("click", () => {
      selectedBookingId = row.dataset.bookingId;
      renderBookings();
      renderDetail();
    });
  });
}

function renderDetail() {
  const booking = bookings.find((item) => item.id === selectedBookingId);

  if (!booking) {
    detailName.textContent = "No booking selected";
    detailSummary.textContent =
      "Adjust the filters or choose a booking to inspect traveler details.";
    detailContent.className = "detail-content empty-state";
    detailContent.textContent = "No customer record is visible right now.";
    return;
  }

  detailName.textContent = booking.traveler;
  detailSummary.textContent = `${booking.company} - ${booking.destination} - ${booking.packageType}`;
  detailContent.className = "detail-content";
  detailContent.innerHTML = `
    <div class="detail-meta">
      <span>${escapeHtml(booking.employeeId)}</span>
      <span>${escapeHtml(booking.department)}</span>
      <span>${escapeHtml(booking.position)}</span>
      <span>${escapeHtml(booking.id)}</span>
      <span>${escapeHtml(booking.payment)}</span>
      <span>${escapeHtml(booking.passport)}</span>
    </div>

    <div class="detail-grid">
      <div class="detail-card-row detail-section">
        <h3>Booking Status</h3>
        <div class="status-control">
          <select class="status-select" id="detailStatusSelect">
            ${["Confirmed", "Pending", "Action Needed", "Completed"]
              .map(
                (status) =>
                  `<option value="${status}" ${
                    booking.status === status ? "selected" : ""
                  }>${status}</option>`
              )
              .join("")}
          </select>
          <p>Update the itinerary state without leaving the booking desk.</p>
        </div>
      </div>

      <div class="detail-card-row detail-section">
        <h3>Employee Record</h3>
        <div class="inline-grid">
          <label>
            <span class="segment-label">Department</span>
            <input class="detail-input" id="departmentInput" value="${escapeHtml(
              booking.department
            )}" />
          </label>
          <label>
            <span class="segment-label">Position</span>
            <input class="detail-input" id="positionInput" value="${escapeHtml(
              booking.position
            )}" />
          </label>
          <label>
            <span class="segment-label">Advisor</span>
            <input class="detail-input" id="advisorInput" value="${escapeHtml(
              booking.advisor
            )}" />
          </label>
          <label>
            <span class="segment-label">Payment</span>
            <input class="detail-input" id="paymentInput" value="${escapeHtml(
              booking.payment
            )}" />
          </label>
        </div>
        <div class="detail-actions">
          <span class="segment-label">Itinerary notes</span>
          <textarea class="detail-textarea" id="notesInput">${escapeHtml(
            booking.notes
          )}</textarea>
          <button type="button" class="primary-button" id="saveDetailButton">Save Record</button>
          <p class="save-message" id="saveMessage"></p>
        </div>
      </div>

      <div class="detail-card-row detail-section">
        <h3>Traveler Preferences</h3>
        <ul class="preference-list">
          ${booking.preferences
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}
        </ul>
        <div class="detail-actions">
          <input
            class="detail-input"
            id="preferenceInput"
            placeholder="Add a new traveler preference"
          />
          <button type="button" class="secondary-button" id="addPreferenceButton">Add Preference</button>
        </div>
      </div>

      <div class="detail-card-row detail-section">
        <h3>Recent Activity</h3>
        <ul class="timeline">
          ${booking.timeline
            .map((item) => {
              const segments = item.split(": ");
              const title = segments[0];
              const body = segments.slice(1).join(": ");
              return `
                <li>
                  <strong>${escapeHtml(title)}</strong>
                  <span>${escapeHtml(body)}</span>
                </li>
              `;
            })
            .join("")}
        </ul>
      </div>
    </div>
  `;

  document
    .querySelector("#detailStatusSelect")
    .addEventListener("change", (event) => {
      booking.status = event.target.value;
      booking.timeline.unshift(
        createTimelineEntry(`Status updated to ${booking.status}`)
      );
      saveBookings();
      renderDashboard();
    });

  document.querySelector("#saveDetailButton").addEventListener("click", () => {
    const departmentValue = document.querySelector("#departmentInput").value.trim();
    const positionValue = document.querySelector("#positionInput").value.trim();
    const advisorValue = document.querySelector("#advisorInput").value.trim();
    const paymentValue = document.querySelector("#paymentInput").value.trim();
    const notesValue = document.querySelector("#notesInput").value.trim();

    if (departmentValue) {
      booking.department = departmentValue;
    }

    if (positionValue) {
      booking.position = positionValue;
    }

    if (advisorValue) {
      booking.advisor = advisorValue;
    }

    if (paymentValue) {
      booking.payment = paymentValue;
    }

    if (notesValue) {
      booking.notes = notesValue;
    }

    booking.timeline.unshift(createTimelineEntry("Employee record updated"));
    saveBookings();
    renderDashboard();
  });

  document.querySelector("#addPreferenceButton").addEventListener("click", () => {
    const input = document.querySelector("#preferenceInput");
    const value = input.value.trim();

    if (!value) {
      return;
    }

    booking.preferences.push(value);
    booking.timeline.unshift(createTimelineEntry(`Preference added: ${value}`));
    saveBookings();
    renderDashboard();
  });
}

function renderDashboard() {
  ensureSelectedBooking();
  renderExperimentCenter();
  renderAiPanels();
  renderStats();
  renderTasks();
  renderEmployeeDirectory();
  renderBookings();
  renderDetail();
}

function showDashboard(email) {
  loginScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");
  agentName.textContent = employeeProfile.name;
  agentRole.textContent = employeeProfile.role;
  employeeIdName.textContent = employeeProfile.name;
  employeeDesignation.textContent = employeeProfile.role;
  renderDashboard();
}

function showLogin() {
  dashboard.classList.add("hidden");
  loginScreen.classList.remove("hidden");
}

function initializeSession() {
  const activeSession = localStorage.getItem(sessionKey);
  if (activeSession) {
    showDashboard(activeSession);
  } else {
    localStorage.setItem(sessionKey, credentials.email);
    showDashboard(credentials.email);
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const email = String(formData.get("email")).trim().toLowerCase();
  const password = String(formData.get("password"));

  if (email === credentials.email && password === credentials.password) {
    localStorage.setItem(sessionKey, email);
    loginError.textContent = "";
    showDashboard(email);
    return;
  }

  loginError.textContent = "The email or password is incorrect for the demo account.";
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const nextNumber = getNextBookingNumber();
  const traveler = String(formData.get("traveler")).trim();
  const company = String(formData.get("company")).trim();
  const destination = String(formData.get("destination")).trim();
  const departure = String(formData.get("departure"));
  const packageType = String(formData.get("packageType")).trim();
  const hotel = String(formData.get("hotel")).trim();
  const status = String(formData.get("status"));
  const amount = Number(formData.get("amount"));

  const newBooking = {
    id: `BK-${nextNumber}`,
    traveler,
    employeeId: `EMP-${nextNumber}`,
    position: "Traveling Employee",
    department: "Operations",
    company,
    destination,
    departure,
    status,
    amount,
    packageType,
    advisor: "Maya Chen",
    hotel,
    payment: status === "Confirmed" ? "Deposit received" : "Pending deposit",
    passport: "Document review pending",
    preferences: ["Send welcome itinerary", "Confirm airport transfer"],
    timeline: [createTimelineEntry("Booking created from employee dashboard")],
    notes: `New ${packageType.toLowerCase()} itinerary created for ${traveler}.`,
  };

  bookings.unshift(newBooking);
  selectedBookingId = newBooking.id;
  saveBookings();
  bookingForm.reset();
  bookingFormMessage.textContent = `${traveler} added to the workforce platform.`;
  renderDashboard();
});

employeeRecordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(employeeRecordForm);
  const nextNumber = getNextBookingNumber();
  const traveler = String(formData.get("traveler")).trim();
  const employeeId = String(formData.get("employeeId")).trim() || `EMP-${nextNumber}`;
  const position = String(formData.get("position")).trim();
  const department = String(formData.get("department")).trim();
  const company = String(formData.get("company")).trim();
  const destination = String(formData.get("destination")).trim();
  const departure = String(formData.get("departure"));
  const status = String(formData.get("status"));
  const packageType = String(formData.get("packageType")).trim();
  const amountValue = String(formData.get("amount")).trim();
  const amount = amountValue ? Number(amountValue) : 0;
  const hotel = String(formData.get("hotel")).trim();
  const notes = String(formData.get("notes")).trim();

  const newEmployeeRecord = {
    id: `BK-${nextNumber}`,
    traveler,
    employeeId,
    position,
    department,
    company,
    destination: destination || "Not assigned yet",
    departure: departure || "2026-04-19",
    status,
    amount,
    packageType: packageType || "Employee mobility review",
    advisor: employeeProfile.name,
    hotel: hotel || "Pending accommodation",
    payment: status === "Confirmed" ? "Approved" : "Awaiting approval",
    passport: "Document review pending",
    preferences: ["Employee onboarding review", "Travel compliance check"],
    timeline: [createTimelineEntry("Employee record created from HR panel")],
    notes: notes || "No travel notes added yet.",
  };

  bookings.unshift(newEmployeeRecord);
  selectedBookingId = newEmployeeRecord.id;
  saveBookings();
  employeeRecordForm.reset();
  employeeRecordForm.querySelector('[name="company"]').value = "Skyline Atlas";
  employeeRecordForm.querySelector('[name="packageType"]').value =
    "Employee mobility review";
  employeeRecordMessage.textContent = `${traveler} added to employee records.`;
  renderDashboard();
});

aiRefreshButton.addEventListener("click", () => {
  aiRefreshCount += 1;
  renderAiPanels();
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem(sessionKey);
  loginForm.reset();
  loginForm.querySelector('[name="email"]').value = credentials.email;
  loginForm.querySelector('[name="password"]').value = credentials.password;
  showLogin();
});

searchInput.addEventListener("input", (event) => {
  filters.query = event.target.value.trim().toLowerCase();
  renderBookings();
  renderDetail();
});

statusFilter.addEventListener("change", (event) => {
  filters.status = event.target.value;
  renderBookings();
  renderDetail();
});

employeeSearchInput.addEventListener("input", (event) => {
  employeeSearchQuery = event.target.value.trim().toLowerCase();
  renderEmployeeDirectory();
});

initializeSession();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Ignore registration failures in local file previews.
    });
  });
}
