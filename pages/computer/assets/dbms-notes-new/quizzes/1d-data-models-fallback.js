// Generated local-file fallback for 1d-data-models.json.
window.DBMS_QUIZ_FALLBACK = {
  "section": "1.D",
  "title": "DBMS Data Models",
  "exam": "IBPS SO IT Officer",
  "durationMinutes": 25,
  "positiveMarks": 1,
  "negativeMarks": 0.25,
  "questions": [
    {
      "id": "1d-001",
      "topic": "Data Model Basics",
      "question": "What does a data model primarily define in a DBMS?",
      "options": [
        "The logical structure, connections, processing and storage of data",
        "Only the physical size of the hard disk",
        "Only the passwords of database users",
        "The programming language used to build the operating system",
        "The network address of every client"
      ],
      "answer": 0,
      "explanation": "A data model describes how data is logically structured, connected, processed and stored inside a database system."
    },
    {
      "id": "1d-002",
      "topic": "Data Model Basics",
      "question": "Data models are fundamental to DBMS because they introduce:",
      "options": [
        "Data duplication",
        "Abstraction",
        "Physical file dependence",
        "Hardware encryption",
        "Deadlock"
      ],
      "answer": 1,
      "explanation": "Data models provide abstraction by presenting an understandable logical representation while hiding unnecessary storage details."
    },
    {
      "id": "1d-003",
      "topic": "Flat Data Model",
      "question": "Which is considered one of the earliest and simplest data models?",
      "options": [
        "Object-relational model",
        "Entity-Relationship model",
        "Flat data model",
        "Distributed relational model",
        "Semantic web model"
      ],
      "answer": 2,
      "explanation": "The flat data model is an early model in which data is kept in the same plane or a single flat structure."
    },
    {
      "id": "1d-004",
      "topic": "Flat Data Model",
      "question": "Why were early flat data models prone to database problems?",
      "options": [
        "They always used too many primary keys",
        "They prevented data from being stored",
        "They required three application tiers",
        "They introduced duplication and update anomalies",
        "They allowed only atomic values"
      ],
      "answer": 3,
      "explanation": "Flat models repeat the same facts in many records, producing redundancy and anomalies during insert, update or delete operations."
    },
    {
      "id": "1d-005",
      "topic": "Update Anomaly",
      "question": "A teacher's name appears in 20 flat-file rows. Only 19 rows are changed after the teacher changes the name. The resulting inconsistency is called:",
      "options": [
        "Referential integrity",
        "Cardinality",
        "Domain independence",
        "Entity abstraction",
        "Update anomaly"
      ],
      "answer": 4,
      "explanation": "When a repeated fact must be changed in several places and one copy remains unchanged, an update anomaly occurs."
    },
    {
      "id": "1d-006",
      "topic": "ER Model",
      "question": "The Entity-Relationship model is best suited for:",
      "options": [
        "Conceptual design of a database",
        "Formatting a physical disk",
        "Executing machine instructions",
        "Replacing all database constraints",
        "Encrypting network packets"
      ],
      "answer": 0,
      "explanation": "The ER model is used during conceptual design to create a blueprint of entities, attributes and relationships before tables are implemented."
    },
    {
      "id": "1d-007",
      "topic": "Entity",
      "question": "In an ER model, an entity is:",
      "options": [
        "A command used to delete records",
        "A distinguishable real-world object",
        "The allowed values of an attribute",
        "A physical disk block",
        "A query-processing algorithm"
      ],
      "answer": 1,
      "explanation": "An entity represents a real-world object or concept, such as Student, Employee, Book or Account."
    },
    {
      "id": "1d-008",
      "topic": "Attribute",
      "question": "In a school database, Name, Age and Roll_Number associated with STUDENT are:",
      "options": [
        "Relationships",
        "Domains",
        "Attributes",
        "Transactions",
        "Database instances"
      ],
      "answer": 2,
      "explanation": "Attributes are properties or descriptive details of an entity. Name, Age and Roll_Number describe a STUDENT."
    },
    {
      "id": "1d-009",
      "topic": "Domain",
      "question": "The domain of an attribute specifies:",
      "options": [
        "The number of tables in the database",
        "The user who created the attribute",
        "The physical address of every value",
        "The set or range of permitted values",
        "The relationship name between two entities"
      ],
      "answer": 3,
      "explanation": "A domain is the predefined set or range from which an attribute may take its values."
    },
    {
      "id": "1d-010",
      "topic": "Relationship",
      "question": "In an ER model, the logical association between two entities is called:",
      "options": [
        "An attribute",
        "A domain",
        "A tuple",
        "A relation instance",
        "A relationship"
      ],
      "answer": 4,
      "explanation": "A relationship represents a logical association, such as STUDENT studies COURSE or EMPLOYEE works for COMPANY."
    },
    {
      "id": "1d-011",
      "topic": "ER Model",
      "question": "Which memory rule is generally useful for identifying an entity?",
      "options": [
        "Entity is usually a noun",
        "Entity is always an SQL verb",
        "Entity is always a numeric value",
        "Entity is a physical pointer",
        "Entity is the same as a domain"
      ],
      "answer": 0,
      "explanation": "Entities commonly represent nouns such as Student, Teacher, Course, Book or Customer."
    },
    {
      "id": "1d-012",
      "topic": "ER Model",
      "question": "Which memory rule is generally useful for identifying a relationship?",
      "options": [
        "A relationship must be a primary key",
        "A relationship is commonly expressed by a verb",
        "A relationship must be a number",
        "A relationship is always a table column",
        "A relationship is a storage block"
      ],
      "answer": 1,
      "explanation": "Relationships commonly describe actions or associations using verbs such as studies, teaches, owns, purchases or works for."
    },
    {
      "id": "1d-013",
      "topic": "Conceptual Design",
      "question": "At what stage is an ER model normally prepared?",
      "options": [
        "After every record has been deleted",
        "Only while recovering a failed disk",
        "Before database implementation, during conceptual planning",
        "Only after the application is retired",
        "During operating-system installation"
      ],
      "answer": 2,
      "explanation": "Like a building blueprint, an ER model is prepared before implementation to plan what entities and relationships the database needs."
    },
    {
      "id": "1d-014",
      "topic": "Entity and Attribute",
      "question": "Which option correctly identifies an entity and one of its attributes?",
      "options": [
        "Name is an entity and Student is its domain",
        "Age is an entity and Teacher is its relationship",
        "Studies is an entity and Course is its attribute",
        "Student is an entity and Roll_Number is its attribute",
        "Integer is an entity and Age is its relationship"
      ],
      "answer": 3,
      "explanation": "Student is a real-world entity, while Roll_Number is a property used to describe or identify a student."
    },
    {
      "id": "1d-015",
      "topic": "Domain",
      "question": "If the domain of Age contains positive integers, which value should be rejected?",
      "options": [
        "18",
        "25",
        "60",
        "1",
        "Rahul"
      ],
      "answer": 4,
      "explanation": "Rahul is a string and is outside a domain that permits only positive integer values for Age."
    },
    {
      "id": "1d-016",
      "topic": "Mapping Cardinality",
      "question": "Mapping cardinality defines:",
      "options": [
        "The number of entity instances that can participate in a relationship",
        "The physical size of a database file",
        "The number of attributes that must be encrypted",
        "The sequence in which SQL commands execute",
        "The number of DBMS users who are administrators"
      ],
      "answer": 0,
      "explanation": "Cardinality specifies how many instances of one entity may be associated with instances of another entity."
    },
    {
      "id": "1d-017",
      "topic": "One-to-One Cardinality",
      "question": "One person is associated with one passport, and each passport belongs to one person. This relationship is:",
      "options": [
        "Many-to-many",
        "One-to-one",
        "One-to-many",
        "Many-to-one",
        "Recursive many-to-many"
      ],
      "answer": 1,
      "explanation": "When one instance on each side is associated with exactly one instance on the other side, the cardinality is 1:1."
    },
    {
      "id": "1d-018",
      "topic": "One-to-Many Cardinality",
      "question": "One department has many employees. Viewed from DEPARTMENT to EMPLOYEE, the cardinality is:",
      "options": [
        "One-to-one",
        "Many-to-one",
        "One-to-many",
        "Many-to-many",
        "Zero-to-zero"
      ],
      "answer": 2,
      "explanation": "A single department may be related to several employees, so the direction DEPARTMENT → EMPLOYEE is 1:M."
    },
    {
      "id": "1d-019",
      "topic": "Many-to-One Cardinality",
      "question": "Many employees work in one department. Viewed from EMPLOYEE to DEPARTMENT, the cardinality is:",
      "options": [
        "One-to-one",
        "One-to-many",
        "Many-to-many",
        "Many-to-one",
        "Unary only"
      ],
      "answer": 3,
      "explanation": "Several employee instances are associated with one department instance, giving M:1 in that direction."
    },
    {
      "id": "1d-020",
      "topic": "Many-to-Many Cardinality",
      "question": "A student can enroll in many courses, and a course can contain many students. The cardinality is:",
      "options": [
        "One-to-one",
        "One-to-many only",
        "Many-to-one only",
        "No relationship",
        "Many-to-many"
      ],
      "answer": 4,
      "explanation": "Many students may be associated with many courses, so the relationship has M:N cardinality."
    },
    {
      "id": "1d-021",
      "topic": "Relational Model",
      "question": "Which data model is the most widely used for structured data storage and processing?",
      "options": [
        "Relational model",
        "Flat model only",
        "Unstructured file model",
        "Presentation model",
        "Network-packet model"
      ],
      "answer": 0,
      "explanation": "The relational model is widely used because it provides a simple table-based structure with strong data-processing capabilities."
    },
    {
      "id": "1d-022",
      "topic": "Relation",
      "question": "In relational terminology, a table is formally called a:",
      "options": [
        "Tuple",
        "Relation",
        "Domain",
        "Attribute",
        "Cardinality"
      ],
      "answer": 1,
      "explanation": "A table in the relational model is called a relation."
    },
    {
      "id": "1d-023",
      "topic": "Tuple",
      "question": "A single row containing one record in a relation is called a:",
      "options": [
        "Schema",
        "Domain",
        "Tuple",
        "Column",
        "Relationship set"
      ],
      "answer": 2,
      "explanation": "A tuple is one row or record in a relational table."
    },
    {
      "id": "1d-024",
      "topic": "Attribute",
      "question": "In a relational table, a column is formally known as an:",
      "options": [
        "Entity instance",
        "Tuple",
        "Relation state",
        "Attribute",
        "Update anomaly"
      ],
      "answer": 3,
      "explanation": "A column represents an attribute of the relation, such as Student_ID, Name or Age."
    },
    {
      "id": "1d-025",
      "topic": "Relation Instance",
      "question": "Which statement correctly describes a relation instance?",
      "options": [
        "It is only the name of a table",
        "It contains only column definitions",
        "It is the set of permitted values of one attribute",
        "It is a diagram prepared before implementation",
        "It is the current finite set of tuples in a relation and contains no duplicate tuples"
      ],
      "answer": 4,
      "explanation": "A relation instance is the current content or state of a relation, represented by its finite set of distinct tuples."
    },
    {
      "id": "1d-026",
      "topic": "Relation Schema",
      "question": "A relation schema describes:",
      "options": [
        "The relation name and its attributes",
        "Only the current rows stored in the table",
        "Only the physical address of the table",
        "The users currently logged into the DBMS",
        "Only the relationships in an ER diagram"
      ],
      "answer": 0,
      "explanation": "A relation schema specifies the table or relation name together with its attribute names and structure."
    },
    {
      "id": "1d-027",
      "topic": "Relation Key",
      "question": "What is the purpose of a relation key?",
      "options": [
        "To store duplicate tuples",
        "To uniquely identify a row in the relation",
        "To define the colour of a table",
        "To replace every attribute domain",
        "To create an update anomaly"
      ],
      "answer": 1,
      "explanation": "A relation key consists of one or more attributes whose values uniquely identify a tuple."
    },
    {
      "id": "1d-028",
      "topic": "Attribute Domain",
      "question": "Which statement about an attribute domain is correct?",
      "options": [
        "It is the current number of tuples",
        "It is another name for a relationship",
        "It defines the permitted type or scope of values for the attribute",
        "It must contain duplicate rows",
        "It identifies the physical disk sector"
      ],
      "answer": 2,
      "explanation": "Each attribute draws values from a predefined domain, ensuring that values in the column have the required type and permitted range."
    },
    {
      "id": "1d-029",
      "topic": "Normalization and Atomicity",
      "question": "Which is a characteristic of a well-designed relational model?",
      "options": [
        "Every row must be duplicated",
        "All data must be stored in one flat record",
        "Columns may freely mix unrelated domains",
        "Relations can be normalized and stored values are atomic",
        "Keys are not permitted"
      ],
      "answer": 3,
      "explanation": "Relational tables can be normalized to reduce redundancy, and normalized relations store atomic or indivisible values."
    },
    {
      "id": "1d-030",
      "topic": "ER versus Relational Model",
      "question": "Which comparison between the ER model and relational model is correct?",
      "options": [
        "Both are used only for physical disk formatting",
        "The relational model is only a drawing, while ER stores actual rows",
        "ER uses only tables, while the relational model uses only diamonds",
        "Neither model represents relationships",
        "ER is mainly a conceptual blueprint, while the relational model implements data using tables"
      ],
      "answer": 4,
      "explanation": "The ER model plans entities and relationships conceptually; the relational model represents and stores the designed data using relations or tables."
    }
  ]
};
