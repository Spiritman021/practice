// Generated local-file fallback for 1h-centralized-client-server.json.
window.DBMS_QUIZ_FALLBACK = {
  "section": "1.H",
  "title": "Centralized and Client–Server Architecture",
  "exam": "IBPS SO IT Officer",
  "durationMinutes": 25,
  "positiveMarks": 1,
  "negativeMarks": 0.25,
  "questions": [
    {
      "id": "1h-001",
      "topic": "Centralized Architecture",
      "question": "A centralized DBMS architecture is one in which:",
      "options": [
        "All database operations, applications and interfaces are managed by one central computer",
        "Every client maintains a complete independent database",
        "Business logic must be placed on several application servers",
        "No server is used",
        "Each user directly manages physical storage"
      ],
      "answer": 0,
      "explanation": "In a centralized system, one powerful mainframe or server performs the processing and manages the database for all connected users."
    },
    {
      "id": "1h-002",
      "topic": "Terminal",
      "question": "In a traditional centralized DBMS, a terminal is primarily used to:",
      "options": [
        "Store a complete local database",
        "Send input to the server and display returned output",
        "Execute all queries independently",
        "Replace the central server",
        "Perform complex business logic locally"
      ],
      "answer": 1,
      "explanation": "A terminal has little or no processing power. It accepts input, sends requests to the mainframe and displays results."
    },
    {
      "id": "1h-003",
      "topic": "Centralized Architecture",
      "question": "Where does most processing occur in a centralized DBMS?",
      "options": [
        "At every terminal equally",
        "Only in the user's browser",
        "At the central mainframe or server",
        "In a separate payment service",
        "Inside a diskless client"
      ],
      "answer": 2,
      "explanation": "Terminals do almost no processing; the central computer executes requests and accesses the database."
    },
    {
      "id": "1h-004",
      "topic": "Centralized Advantages",
      "question": "Which is an advantage of centralized architecture?",
      "options": [
        "Unlimited scalability",
        "No dependence on a server",
        "Complete fault tolerance",
        "Control, maintenance and security can be managed from one place",
        "Every client can work without the mainframe"
      ],
      "answer": 3,
      "explanation": "Central control simplifies administration, software updates and security because the main system is managed in one location."
    },
    {
      "id": "1h-005",
      "topic": "Centralized Disadvantages",
      "question": "What is the biggest drawback of a centralized DBMS architecture?",
      "options": [
        "It cannot store data",
        "It always has too many middle tiers",
        "It requires business logic on every client",
        "It has no central control",
        "The central server is a single point of failure"
      ],
      "answer": 4,
      "explanation": "If the only central server fails, all terminals lose access and the entire system may stop."
    },
    {
      "id": "1h-006",
      "topic": "Centralized Disadvantages",
      "question": "Why does centralized architecture have a scalability problem?",
      "options": [
        "A growing number of users can overload the single central server",
        "Every terminal stores too many database copies",
        "It requires an application server for each user",
        "It has no database server",
        "It prevents terminals from sending requests"
      ],
      "answer": 0,
      "explanation": "All workload reaches one central computer, so performance may decline sharply as the number of users and requests grows."
    },
    {
      "id": "1h-007",
      "topic": "Client",
      "question": "In client–server architecture, the client typically handles:",
      "options": [
        "Only physical disk management",
        "User interaction, input, output and request submission",
        "Only database backup",
        "All server-side storage",
        "Only transaction logging"
      ],
      "answer": 1,
      "explanation": "The client is the user-facing machine or application. It presents the interface, accepts input and sends requests."
    },
    {
      "id": "1h-008",
      "topic": "Server",
      "question": "Which is a primary responsibility of the server in client–server architecture?",
      "options": [
        "Displaying only local buttons",
        "Accepting keyboard input only",
        "Storing the database and processing database requests",
        "Acting only as a monitor",
        "Replacing all client applications"
      ],
      "answer": 2,
      "explanation": "The server is a powerful system that stores shared data and provides database processing and services to clients."
    },
    {
      "id": "1h-009",
      "topic": "Client–Server Basics",
      "question": "The key idea behind client–server architecture is that:",
      "options": [
        "The client performs no work at all",
        "The server provides only a screen",
        "Every client stores the full database",
        "The workload is divided between client and server",
        "No communication network is needed"
      ],
      "answer": 3,
      "explanation": "Unlike a purely centralized setup, client–server architecture shares responsibilities between user-facing clients and service-providing servers."
    },
    {
      "id": "1h-010",
      "topic": "Client–Server Example",
      "question": "When a customer searches Flipkart using a mobile application, the phone and Flipkart database system act respectively as:",
      "options": [
        "Server and terminal",
        "Database and client",
        "Mainframe and diskless terminal",
        "Application server and client",
        "Client and server"
      ],
      "answer": 4,
      "explanation": "The mobile application is the client that sends requests, while Flipkart's server-side system stores and processes the data."
    },
    {
      "id": "1h-011",
      "topic": "Two-Tier Architecture",
      "question": "Which sequence represents two-tier client–server architecture?",
      "options": [
        "Client application → Database server",
        "Client → Application server → Database server",
        "Terminal → Mainframe only",
        "Client → Authentication → Payment → Database",
        "Database → Client → Application server"
      ],
      "answer": 0,
      "explanation": "A two-tier system has a client tier and a database-server tier, with no separate middle application server."
    },
    {
      "id": "1h-012",
      "topic": "Two-Tier Architecture",
      "question": "In two-tier architecture, who normally communicates directly with the database server?",
      "options": [
        "A separate recommendation service",
        "The client application",
        "Only a diskless terminal",
        "A middle application server",
        "A backup server only"
      ],
      "answer": 1,
      "explanation": "The client application sends database queries directly to the server in a two-tier arrangement."
    },
    {
      "id": "1h-013",
      "topic": "Two-Tier Architecture",
      "question": "Where is much of the user interface and business logic located in a typical two-tier system?",
      "options": [
        "Only on the database disk",
        "Only in a separate middle tier",
        "On the client",
        "Only in the data dictionary",
        "Only in network hardware"
      ],
      "answer": 2,
      "explanation": "The two-tier client commonly contains the interface and application or business logic and directly calls the database server."
    },
    {
      "id": "1h-014",
      "topic": "Two-Tier Disadvantages",
      "question": "Why can maintaining a large two-tier installation be difficult?",
      "options": [
        "The database server never stores data",
        "Clients cannot run interfaces",
        "It has too many middle servers",
        "Application updates may need to be installed on every client machine",
        "It permits no database queries"
      ],
      "answer": 3,
      "explanation": "When logic is deployed on thousands of clients, each software change may require a large client-side rollout."
    },
    {
      "id": "1h-015",
      "topic": "Two-Tier Disadvantages",
      "question": "Which is a limitation of two-tier architecture compared with three-tier architecture?",
      "options": [
        "It has no user interface",
        "It cannot connect to a database",
        "It always requires a mainframe terminal",
        "It contains more than three layers",
        "Its scalability and security are more limited"
      ],
      "answer": 4,
      "explanation": "Many direct client connections and client-side business logic make two-tier systems harder to scale and secure for large deployments."
    },
    {
      "id": "1h-016",
      "topic": "Three-Tier Architecture",
      "question": "Which is the correct flow in three-tier client–server architecture?",
      "options": [
        "Client → Application server → Database server",
        "Client → Database server directly",
        "Database → Terminal → Mainframe",
        "Client → Disk block → Database",
        "Application server → Client → Database"
      ],
      "answer": 0,
      "explanation": "The presentation client sends requests to the middle application server, which accesses the database server."
    },
    {
      "id": "1h-017",
      "topic": "Middle Tier",
      "question": "The middle tier in three-tier architecture is primarily responsible for:",
      "options": [
        "Only physical data storage",
        "Business logic, validation, authentication and request filtering",
        "Only displaying buttons",
        "Acting as a diskless terminal",
        "Replacing the database server"
      ],
      "answer": 1,
      "explanation": "The application server acts as the brain and gatekeeper, applying business rules and validating requests before database access."
    },
    {
      "id": "1h-018",
      "topic": "Three-Tier Advantages",
      "question": "Why is three-tier architecture generally more secure than two-tier architecture?",
      "options": [
        "Every client has a full database copy",
        "Users receive direct database passwords",
        "Clients cannot directly access the database; the application server validates requests",
        "The presentation tier stores all data",
        "It removes authentication"
      ],
      "answer": 2,
      "explanation": "The middle tier controls database access and prevents clients from connecting directly to stored data."
    },
    {
      "id": "1h-019",
      "topic": "Three-Tier Architecture",
      "question": "Which tier stores the actual database records in a three-tier system?",
      "options": [
        "Presentation tier",
        "Client-interface tier",
        "Application tier",
        "Database tier",
        "Authentication screen"
      ],
      "answer": 3,
      "explanation": "The bottom database tier contains the DBMS and actual stored data."
    },
    {
      "id": "1h-020",
      "topic": "Three-Tier Architecture",
      "question": "Screens, forms and buttons belong mainly to the:",
      "options": [
        "Database tier",
        "Storage tier",
        "Business-rule engine",
        "Query-optimization tier",
        "Presentation or client tier"
      ],
      "answer": 4,
      "explanation": "The presentation tier is the user-facing layer that displays the interface and collects input."
    },
    {
      "id": "1h-021",
      "topic": "Three-Tier Advantages",
      "question": "How can an application server reduce database load?",
      "options": [
        "By filtering, validating and processing requests before they reach the database",
        "By giving every user direct file access",
        "By disabling business logic",
        "By copying the whole database to every client",
        "By removing the database tier"
      ],
      "answer": 0,
      "explanation": "The application server handles logic and rejects invalid or unnecessary requests, so fewer operations reach the database."
    },
    {
      "id": "1h-022",
      "topic": "n-Tier Architecture",
      "question": "What distinguishes n-tier architecture from three-tier architecture?",
      "options": [
        "It contains no database",
        "It may use more than three specialized service layers",
        "It permits only n users",
        "It requires one terminal only",
        "It eliminates all clients"
      ],
      "answer": 1,
      "explanation": "Large systems may separate authentication, payment, recommendation and other functions into additional tiers or services."
    },
    {
      "id": "1h-023",
      "topic": "n-Tier Benefits",
      "question": "Separate payment and authentication services that can be developed by different teams demonstrate:",
      "options": [
        "Single point of failure",
        "Centralized processing",
        "Modularity",
        "Direct database access",
        "Client duplication"
      ],
      "answer": 2,
      "explanation": "Modularity divides the system into focused components that can be developed, tested and maintained independently."
    },
    {
      "id": "1h-024",
      "topic": "n-Tier Benefits",
      "question": "A recommendation service fails, but checkout and payment continue to work. Which n-tier benefit is illustrated?",
      "options": [
        "Poor scalability",
        "Centralized maintenance",
        "Direct client access",
        "Resilience",
        "Diskless operation"
      ],
      "answer": 3,
      "explanation": "Service separation can prevent one noncritical component failure from stopping the entire application."
    },
    {
      "id": "1h-025",
      "topic": "Client Types",
      "question": "A diskless client is a client that:",
      "options": [
        "Stores the complete database locally",
        "Acts only as a database server",
        "Never uses a network",
        "Contains several application servers",
        "Has no local disk and depends heavily on the server"
      ],
      "answer": 4,
      "explanation": "A diskless or thin client obtains programs, data and services from a server because it has no local hard disk."
    },
    {
      "id": "1h-026",
      "topic": "Client Types",
      "question": "Which statement describes a client with a disk?",
      "options": [
        "It has local storage and software but still uses server services",
        "It cannot execute any local task",
        "It is always the central database server",
        "It has no operating system",
        "It cannot communicate over a network"
      ],
      "answer": 0,
      "explanation": "A client with a disk can store local software and data while continuing to depend on a server for shared database services."
    },
    {
      "id": "1h-027",
      "topic": "Client and Server Roles",
      "question": "A branch-office machine serves local users while also using services from a central server. It is acting as:",
      "options": [
        "Only a diskless terminal",
        "Both a server and a client",
        "Only a centralized mainframe",
        "Only a database record",
        "Only a presentation form"
      ],
      "answer": 1,
      "explanation": "A machine may provide services to local clients while itself acting as a client of another central server."
    },
    {
      "id": "1h-028",
      "topic": "Architecture Comparison",
      "question": "Which comparison between centralized and client–server architecture is correct?",
      "options": [
        "Both place all processing on terminals",
        "Client–server gives clients no responsibilities",
        "Centralized processing is concentrated on one server, while client–server shares work",
        "Centralized systems always scale better",
        "Client–server systems have no database server"
      ],
      "answer": 2,
      "explanation": "Centralized systems rely almost completely on one central computer, whereas client–server systems divide UI or processing work between components."
    },
    {
      "id": "1h-029",
      "topic": "Architecture Evolution",
      "question": "As architecture progresses from centralized to two-tier, three-tier and n-tier, which trend is generally expected?",
      "options": [
        "Lower modularity and lower scalability",
        "More direct database access for end users",
        "Less separation of responsibilities",
        "Greater scalability, security and specialization",
        "Removal of all servers"
      ],
      "answer": 3,
      "explanation": "Additional layers separate responsibilities and generally improve scalability, access control, maintainability and resilience."
    },
    {
      "id": "1h-030",
      "topic": "Architecture Selection",
      "question": "Which architecture is generally most suitable for a large modern online banking or e-commerce application?",
      "options": [
        "A single terminal with no server",
        "A centralized system with no client processing",
        "A two-tier desktop-only setup for millions of users",
        "A flat file on every client",
        "A three-tier or n-tier client–server architecture"
      ],
      "answer": 4,
      "explanation": "Large internet applications benefit from middle-tier services, security, load handling and modular scalability provided by three-tier or n-tier designs."
    }
  ]
};
