// Generated local-file fallback for 1e-data-schemas.json.
window.DBMS_QUIZ_FALLBACK = {
  "section": "1.E",
  "title": "DBMS Data Schemas",
  "exam": "IBPS SO IT Officer",
  "durationMinutes": 25,
  "positiveMarks": 1,
  "negativeMarks": 0.25,
  "questions": [
    {
      "id": "1e-001",
      "topic": "Schema Basics",
      "question": "A database schema is best described as:",
      "options": [
        "The blueprint or structural design of a database",
        "The current rows stored in every table",
        "A backup taken after each transaction",
        "A list of users currently connected",
        "A query result generated at one moment"
      ],
      "answer": 0,
      "explanation": "A schema is the blueprint, skeleton or structural design that describes how the database is organized."
    },
    {
      "id": "1e-002",
      "topic": "Schema Basics",
      "question": "Which statement about a database schema is correct?",
      "options": [
        "It contains only current customer records",
        "It defines structure but does not contain the actual records",
        "It changes after every INSERT operation",
        "It is identical to a database instance",
        "It contains only physical disk addresses"
      ],
      "answer": 1,
      "explanation": "A schema defines tables, columns, relationships and constraints. Actual data belongs to a database instance, not the schema."
    },
    {
      "id": "1e-003",
      "topic": "Schema Basics",
      "question": "The phrase 'skeleton structure representing the logical view of the entire database' refers to:",
      "options": [
        "A database transaction",
        "A relation instance",
        "A database schema",
        "A disk block",
        "A query result"
      ],
      "answer": 2,
      "explanation": "The database schema is the skeleton structure that represents the logical organization of the whole database."
    },
    {
      "id": "1e-004",
      "topic": "Schema Components",
      "question": "Which information is normally defined by a database schema?",
      "options": [
        "Only the names of current users",
        "Only the current values in each row",
        "Only the time of the latest backup",
        "Tables, columns, keys, relationships and constraints",
        "Only the number of transactions executed"
      ],
      "answer": 3,
      "explanation": "A schema defines the database structure, including its tables, attributes, keys, relationships and integrity rules."
    },
    {
      "id": "1e-005",
      "topic": "Schema Design",
      "question": "Who is primarily responsible for creating the database schema?",
      "options": [
        "Every end user",
        "The network switch",
        "The transaction log",
        "Only the data-entry operator",
        "The database designer"
      ],
      "answer": 4,
      "explanation": "Database designers decide what data is required and create the entities, relationships, constraints and views that form the schema."
    },
    {
      "id": "1e-006",
      "topic": "Schema Constraints",
      "question": "In the context of a schema, constraints are:",
      "options": [
        "Rules that restrict and validate stored data",
        "Copies of every database record",
        "Only graphical symbols in a diagram",
        "Temporary query results",
        "Files used to install the DBMS"
      ],
      "answer": 0,
      "explanation": "Constraints are rules defined in the schema to ensure that stored data remains valid and consistent."
    },
    {
      "id": "1e-007",
      "topic": "Schema Constraints",
      "question": "A schema specifies that Age cannot be negative. This is an example of:",
      "options": [
        "A database instance",
        "A constraint",
        "A physical index",
        "A snapshot",
        "A storage block"
      ],
      "answer": 1,
      "explanation": "The rule limiting Age to acceptable values is a constraint defined as part of the schema."
    },
    {
      "id": "1e-008",
      "topic": "Schema Diagram",
      "question": "A graphical representation showing database entities, attributes and relationships is called a:",
      "options": [
        "Transaction log",
        "Data snapshot",
        "Schema diagram",
        "File allocation table",
        "Query execution plan"
      ],
      "answer": 2,
      "explanation": "A schema diagram visually depicts the database structure and the relationships among its components."
    },
    {
      "id": "1e-009",
      "topic": "Schema Types",
      "question": "The two broad categories of database schema discussed in this section are:",
      "options": [
        "Primary and foreign",
        "Static and dynamic",
        "Centralized and distributed",
        "Physical and logical",
        "Atomic and composite"
      ],
      "answer": 3,
      "explanation": "Database schemas are broadly categorized as physical schemas and logical schemas."
    },
    {
      "id": "1e-010",
      "topic": "Physical Schema",
      "question": "A physical database schema primarily answers which question?",
      "options": [
        "What relationships exist between entities?",
        "What views are available to users?",
        "What constraints apply to a column?",
        "What are the names of the tables?",
        "How is the data actually stored?"
      ],
      "answer": 4,
      "explanation": "The physical schema describes how data is stored in secondary storage through files, blocks, indexes and storage organization."
    },
    {
      "id": "1e-011",
      "topic": "Physical Schema",
      "question": "Which group contains only physical-schema details?",
      "options": [
        "Files, indexes, blocks and storage organization",
        "Entities, business rules and user views",
        "Current rows, values and snapshots",
        "Primary users, end users and designers",
        "Tables, relationships and logical constraints only"
      ],
      "answer": 0,
      "explanation": "Files, indexes, blocks and storage layout describe the physical organization of data."
    },
    {
      "id": "1e-012",
      "topic": "Physical Schema",
      "question": "The use of a B+ tree to organize an index belongs to the:",
      "options": [
        "Logical database instance",
        "Physical database schema",
        "External user view only",
        "Conceptual data record",
        "Database snapshot"
      ],
      "answer": 1,
      "explanation": "Indexing structures such as B+ trees and hashing are implementation and storage choices defined by the physical schema."
    },
    {
      "id": "1e-013",
      "topic": "Physical Schema",
      "question": "Which statement about the physical schema is generally true?",
      "options": [
        "It contains the current table rows",
        "It is changed by every SELECT query",
        "Its storage details are mostly hidden from ordinary users",
        "It defines only user-interface screens",
        "It is identical to a schema diagram"
      ],
      "answer": 2,
      "explanation": "Ordinary users work with logical structures and views; low-level files, blocks and indexes are normally hidden."
    },
    {
      "id": "1e-014",
      "topic": "Logical Schema",
      "question": "A logical database schema primarily answers which question?",
      "options": [
        "On which disk sector is a record stored?",
        "Which B+ tree node contains a key?",
        "How many bytes does a block occupy?",
        "What data structures, tables and relationships exist?",
        "Which physical file contains the latest backup?"
      ],
      "answer": 3,
      "explanation": "The logical schema describes what data is stored and how it is logically organized through tables, attributes, relationships and constraints."
    },
    {
      "id": "1e-015",
      "topic": "Logical Schema",
      "question": "Which group belongs primarily to the logical schema?",
      "options": [
        "Disk sectors, files and storage blocks",
        "B+ tree nodes and hash buckets only",
        "Current rows at 10 AM",
        "Backup tapes and disk controllers",
        "Tables, views, keys, relationships and constraints"
      ],
      "answer": 4,
      "explanation": "Logical schema elements include tables, views, primary and foreign keys, relationships and integrity constraints."
    },
    {
      "id": "1e-016",
      "topic": "Logical Schema",
      "question": "Which statement correctly describes a logical schema?",
      "options": [
        "It describes database structure without depending on the exact storage location",
        "It contains only the current records",
        "It is a photograph of data at one moment",
        "It specifies only disk-block placement",
        "It changes after every UPDATE"
      ],
      "answer": 0,
      "explanation": "The logical schema focuses on what the database looks like logically, not where or how records are physically stored."
    },
    {
      "id": "1e-017",
      "topic": "Logical Schema Example",
      "question": "In a library analogy, Books(BookID, Title, Author, Publisher) represents the:",
      "options": [
        "Current database instance only",
        "Logical schema",
        "Physical rack position",
        "Backup schedule",
        "Disk-block map"
      ],
      "answer": 1,
      "explanation": "The table name and its attributes describe the logical design of the library database."
    },
    {
      "id": "1e-018",
      "topic": "Physical Schema Example",
      "question": "In a library analogy, Rack 2, Shelf 5, Position 18 most closely represents:",
      "options": [
        "A logical relationship",
        "An entity constraint",
        "Physical storage organization",
        "A database instance containing book records",
        "A user view"
      ],
      "answer": 2,
      "explanation": "Rack, shelf and position describe how or where an item is physically stored, analogous to a physical schema."
    },
    {
      "id": "1e-019",
      "topic": "Schema versus Instance",
      "question": "Compared with a database instance, a schema is generally:",
      "options": [
        "More dynamic and changed after every transaction",
        "A collection of current data values",
        "Created only after all data is entered",
        "Relatively static and changed rarely",
        "A temporary query result"
      ],
      "answer": 3,
      "explanation": "A schema is a stable structural design. Changing it may affect applications, so it is modified much less frequently than data."
    },
    {
      "id": "1e-020",
      "topic": "Database Instance",
      "question": "A database instance is:",
      "options": [
        "Only the column names of every table",
        "The structural design created by a database designer",
        "Only the rules applied to data",
        "The physical indexing method",
        "The actual state of the database at a particular time"
      ],
      "answer": 4,
      "explanation": "An instance is the current collection of actual data stored in the operational database at a specific moment."
    },
    {
      "id": "1e-021",
      "topic": "Database Instance",
      "question": "Which statement about a database instance is correct?",
      "options": [
        "It is dynamic and may change frequently",
        "It never contains actual data",
        "It is identical to the physical schema",
        "It changes only when the DBMS software is reinstalled",
        "It exists before the schema is designed"
      ],
      "answer": 0,
      "explanation": "An instance changes whenever data is inserted, updated or deleted, so it is dynamic."
    },
    {
      "id": "1e-022",
      "topic": "Database Instance",
      "question": "Which operations normally change the database instance without necessarily changing the schema?",
      "options": [
        "Only CREATE TABLE",
        "INSERT, UPDATE and DELETE",
        "Only defining a new index",
        "Only changing a column type",
        "Only drawing a schema diagram"
      ],
      "answer": 1,
      "explanation": "INSERT, UPDATE and DELETE modify the stored records and therefore change the current database instance."
    },
    {
      "id": "1e-023",
      "topic": "Snapshot",
      "question": "A Student table has one row in the morning and two rows in the afternoon, while its columns remain unchanged. What changed?",
      "options": [
        "Only the logical schema",
        "Only the physical schema",
        "The database instance",
        "The table definition and every constraint",
        "The DBMS architecture"
      ],
      "answer": 2,
      "explanation": "The structure stayed the same, but the stored data changed. Therefore, the afternoon table represents a different instance."
    },
    {
      "id": "1e-024",
      "topic": "Schema versus Instance",
      "question": "Which statement correctly describes the normal creation sequence?",
      "options": [
        "Instances are created before any schema exists",
        "The physical disk creates all user views first",
        "Data is entered before tables are defined",
        "The schema is designed before actual records are stored",
        "A snapshot must exist before the database is designed"
      ],
      "answer": 3,
      "explanation": "The database structure is designed first. Once the database becomes operational, data is inserted and instances are formed."
    },
    {
      "id": "1e-025",
      "topic": "Valid Instance",
      "question": "A DBMS ensures that every database instance remains valid by:",
      "options": [
        "Ignoring all constraints",
        "Changing the schema after every transaction",
        "Allowing any value in every column",
        "Deleting all foreign keys",
        "Enforcing the validations and constraints defined in the schema"
      ],
      "answer": 4,
      "explanation": "Each operational state must satisfy the rules imposed by the database designers. The DBMS enforces these constraints."
    },
    {
      "id": "1e-026",
      "topic": "Schema versus Instance",
      "question": "Which comparison is correct?",
      "options": [
        "Schema is the design; instance is the actual data at a particular time",
        "Schema is dynamic data; instance is the static blueprint",
        "Both terms mean only the physical files",
        "Schema contains records; instance contains only column names",
        "An instance exists without any schema"
      ],
      "answer": 0,
      "explanation": "Schema describes the design or structure, while instance describes the actual data present at a specific time."
    },
    {
      "id": "1e-027",
      "topic": "Schema versus Instance",
      "question": "In a spreadsheet analogy, fixed column headings most closely represent the:",
      "options": [
        "Database instance",
        "Schema",
        "Transaction log",
        "Physical index",
        "Current snapshot values"
      ],
      "answer": 1,
      "explanation": "Column headings define structure, similar to a schema. The changing rows beneath them correspond to the instance."
    },
    {
      "id": "1e-028",
      "topic": "Logical versus Physical",
      "question": "Which mapping is correct?",
      "options": [
        "Logical schema—files; Physical schema—views",
        "Logical schema—blocks; Physical schema—relationships",
        "Logical schema—what is stored; Physical schema—how it is stored",
        "Logical schema—current rows; Physical schema—database instance",
        "Logical schema—disk sectors; Physical schema—table names only"
      ],
      "answer": 2,
      "explanation": "Logical schema describes what structures exist, whereas physical schema describes how those structures are stored."
    },
    {
      "id": "1e-029",
      "topic": "Schema Components",
      "question": "Entities, relationships, descriptive details and constraints together form part of the:",
      "options": [
        "Current database instance only",
        "Query result only",
        "Transaction rollback record",
        "Database schema",
        "Physical network connection"
      ],
      "answer": 3,
      "explanation": "The schema provides a descriptive definition of database entities, relationships, attributes and constraints."
    },
    {
      "id": "1e-030",
      "topic": "Database Instance",
      "question": "The complete set of Student records stored at exactly 10:00 AM is best described as:",
      "options": [
        "A logical schema",
        "A physical schema",
        "A schema diagram",
        "A database-design rule",
        "A database instance or snapshot"
      ],
      "answer": 4,
      "explanation": "The actual data present at one specified moment is an instance, also described as a snapshot of the database."
    }
  ]
};
