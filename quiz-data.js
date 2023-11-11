let quizzes=[
  {name:"C Programming", numberOfQuestions:"10 questions", level:"medium", questionsList:  [
    { question: "What is the purpose of the 'printf' function in C?",
      answer: [
        { text: "To read input from the user", check: false },
        { text: "To allocate memory for variables", check: false },
        { text: "To write formatted output to the console", check: true },
        { text: "To perform mathematical calculations", check: false }
      ]},
    { question: "What is the correct syntax to declare a variable in C?",
      answer: [
        { text: "variable x;", check: false },
        { text: "var x;", check: false },
        { text: "int x;", check: true },
        { text: "let x;", check: false }
      ]},
    { question: "Which of the following data types is used to store whole numbers in C?",
      answer: [
        { text: "float", check: false },
        { text: "double", check: false },
        { text: "char", check: false },
        { text: "int", check: true }
      ]},
    { question: "What is the purpose of the 'if' statement in C?",
      answer: [
        { text: "To loop through a block of code", check: false },
        { text: "To declare a new variable", check: false },
        { text: "To define a function", check: false },
        { text: "To make a decision based on a condition", check: true }
      ]},
    { question: "Which operator is used to access the memory address of a variable in C?",
      answer: [
        { text: "&", check: true },
        { text: "*", check: false },
        { text: "#", check: false },
        { text: "$", check: false }
      ]},
    { question: "What is the purpose of the 'for' loop in C?",
      answer: [
        { text: "To define a function", check: false },
        { text: "To execute a block of code repeatedly", check: true },
        { text: "To perform logical operations", check: false },
        { text: "To read input from the user", check: false }
      ]},
    { question: "What does the 'break' statement do in a loop?",
      answer: [
        { text: "It continues to the next iteration of the loop", check: false },
        { text: "It ends the loop and transfers control to the next statement", check: true },
        { text: "It defines a new block of code", check: false },
        { text: "It prints a message to the console", check: false }
      ] },
    { question: "Which data type is used to store a sequence of characters in C?",
      answer: [
        { text: "string", check: false },
        { text: "char", check: true },
        { text: "text", check: false },
        { text: "sequence", check: false }
      ]},
    { question: "What is the purpose of the 'return' statement in a function?",
      answer: [
        { text: "To declare a new function", check: false },
        { text: "To print output to the console", check: false },
        { text: "To end the execution of a function and return a value", check: true },
        { text: "To perform arithmetic operations", check: false }
      ]},
    { question: "What is the 'sizeof' operator used for in C?",
      answer: [
        { text: "To calculate the size of a data type", check: true },
        { text: "To convert data types", check: false },
        { text: "To perform bitwise operations", check: false },
        { text: "To define the size of an array", check: false }
      ]},
  ]},
  {name:"HTML", numberOfQuestions:"5 questions", level:"medium", questionsList : [
    {
      question: "What does HTML stand for?",
      answer: [
        { text: "Hyper Text Markup Language", check: true },
        { text: "Highly Textual Markup Language", check: false },
        { text: "Hyperlink and Text Markup Language", check: false },
        { text: "Home Tool Markup Language", check: false }
      ]
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      answer: [
        { text: "<link>", check: false },
        { text: "<a>", check: true },
        { text: "<hlink>", check: false },
        { text: "<hyper>", check: false }
      ]
    },
    {
      question: "What is the purpose of the 'alt' attribute in an <img> tag?",
      answer: [
        { text: "To specify the alignment of the image", check: false },
        { text: "To define the size of the image", check: false },
        { text: "To provide alternative text for the image", check: true },
        { text: "To link the image to another page", check: false }
      ]
    },
    {
      question: "Which HTML element is used to create an ordered list?",
      answer: [
        { text: "<ul>", check: false },
        { text: "<li>", check: false },
        { text: "<dl>", check: false },
        { text: "<ol>", check: true }
      ]
    },
    {
      question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
      answer: [
        { text: "To define the title of the HTML document", check: false },
        { text: "To specify the character encoding of the document", check: false },
        { text: "To declare the version of HTML being used", check: false },
        { text: "To provide instructions to the web browser about the document type and version", check: true }
      ]
    }
  ]},
  {name:"CSS", numberOfQuestions:"5 questions", level:"medium", questionsList :[
    {
      question: "What does CSS stand for?",
      answer: [
        { text: "Cascading Style Sheets", check: true },
        { text: "Computer Styling System", check: false },
        { text: "Central Style Syntax", check: false },
        { text: "Creative Styling Solutions", check: false }
      ]
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      answer: [
        { text: "color", check: true },
        { text: "text-color", check: false },
        { text: "font-color", check: false },
        { text: "text-style", check: false }
      ]
    },
    {
      question: "What is the purpose of the 'box-sizing' property in CSS?",
      answer: [
        { text: "To define the shape of a box element", check: false },
        { text: "To specify the border style of a box element", check: false },
        { text: "To control the sizing calculations for box elements", check: true },
        { text: "To set the background color of a box element", check: false }
      ]
    },
    {
      question: "Which CSS selector is used to target an element with a specific class?",
      answer: [
        { text: "#id", check: false },
        { text: ".class", check: true },
        { text: "element.class", check: false },
        { text: "element#id", check: false }
      ]
    },
    {
      question: "What is the purpose of the 'float' property in CSS?",
      answer: [
        { text: "To make an element vertically centered", check: false },
        { text: "To apply a shadow effect to an element", check: false },
        { text: "To position an element to the left or right of its container", check: true },
        { text: "To create a blinking animation for an element", check: false }
      ]
    }
  ]},
  {name:"JavaScript", numberOfQuestions:"5 questions", level:"medium", questionsList :[
    {
      question: "What is JavaScript primarily used for in web development?",
      answer: [
        { text: "Styling web pages", check: false },
        { text: "Creating and enhancing interactive features", check: true },
        { text: "Managing databases", check: false },
        { text: "Defining document structure", check: false }
      ]
    },
    {
      question: "How do you declare a variable in JavaScript?",
      answer: [
        { text: "var x;", check: false },
        { text: "let x;", check: true },
        { text: "int x;", check: false },
        { text: "variable x;", check: false }
      ]
    },
    {
      question: "What is the purpose of a 'function' in JavaScript?",
      answer: [
        { text: "To style HTML elements", check: false },
        { text: "To define document structure", check: false },
        { text: "To create reusable blocks of code", check: true },
        { text: "To link to external files", check: false }
      ]
    },
    {
      question: "What is the JavaScript 'DOM'?",
      answer: [
        { text: "A type of data structure", check: false },
        { text: "A programming language", check: false },
        { text: "A browser feature that allows interaction with HTML elements", check: true },
        { text: "A design pattern for responsive web design", check: false }
      ]
    },
    {
      question: "What does 'console.log()' do in JavaScript?",
      answer: [
        { text: "It adds a new element to the DOM", check: false },
        { text: "It creates an interactive popup dialog", check: false },
        { text: "It displays output in the browser's console", check: true },
        { text: "It defines a new JavaScript variable", check: false }
      ]
    }
  ]
  },
  {name:"Internet", numberOfQuestions:"5 questions", level:"medium", questionsList:[
    {
      question: "What does ISP stand for in the context of the internet?",
      answer: [
        { text: "Internet System Provider", check: false },
        { text: "Internet Service Provider", check: true },
        { text: "Information Sharing Protocol", check: false },
        { text: "Internet Security Protocol", check: false }
      ]
    },
    {
      question: "What is the purpose of DNS in networking?",
      answer: [
        { text: "Dynamic Network Server", check: false },
        { text: "Data Network System", check: false },
        { text: "Domain Name System", check: true },
        { text: "Digital Network Security", check: false }
      ]
    },
    {
      question: "What technology provides a secure encrypted connection over a public network?",
      answer: [
        { text: "HTML", check: false },
        { text: "FTP", check: false },
        { text: "HTTP", check: false },
        { text: "VPN", check: true }
      ]
    },
    {
      question: "What does the term 'bandwidth' refer to in networking?",
      answer: [
        { text: "The physical width of a network cable", check: false },
        { text: "The speed at which data can be transmitted over a network", check: true },
        { text: "The number of devices connected to a network", check: false },
        { text: "The geographical coverage area of a network", check: false }
      ]
    },
    {
      question: "What protocol is used to send email over the internet?",
      answer: [
        { text: "HTTP", check: false },
        { text: "SMTP", check: true },
        { text: "FTP", check: false },
        { text: "TCP", check: false }
      ]
    }
  ]},
  {name:"hardware", numberOfQuestions:"5 questions", level:"medium", questionsList:[
    {
      question: "What is the central processing unit (CPU) responsible for in a computer?",
      answer: [
        { text: "Managing peripheral devices", check: false },
        { text: "Storing long-term data", check: false },
        { text: "Executing instructions and performing calculations", check: true },
        { text: "Displaying images on the screen", check: false }
      ]
    },
    {
      question: "What is the function of RAM (Random Access Memory) in a computer?",
      answer: [
        { text: "Storing permanent data even when the computer is turned off", check: false },
        { text: "Running the operating system only", check: false },
        { text: "Providing quick access to frequently used data for the CPU", check: true },
        { text: "Managing the power supply to the components", check: false }
      ]
    },
    {
      question: "What type of storage device is typically used to store the operating system and software programs?",
      answer: [
        { text: "Hard Disk Drive (HDD)", check: true },
        { text: "Solid State Drive (SSD)", check: false },
        { text: "Optical Disc Drive (ODD)", check: false },
        { text: "USB Flash Drive", check: false }
      ]
    },
    {
      question: "What does the GPU (Graphics Processing Unit) primarily handle in a computer?",
      answer: [
        { text: "Running software applications", check: false },
        { text: "Managing network connections", check: false },
        { text: "Generating and rendering images and videos", check: true },
        { text: "Providing power to the motherboard", check: false }
      ]
    },
    {
      question: "What is the purpose of the motherboard in a computer system?",
      answer: [
        { text: "Running software applications", check: false },
        { text: "Generating and rendering images", check: false },
        { text: "Providing power to peripheral devices", check: false },
        { text: "Connecting and communicating between various hardware components", check: true }
      ]
    }
  ]},
  {name:"system administration", numberOfQuestions:"5 questions", level:"medium", questionsList:[
    {
      question: "What is the role of a system administrator?",
      answer: [
        { text: "Writing code for software applications", check: false },
        { text: "Managing and maintaining computer systems and networks", check: true },
        { text: "Designing user interfaces for websites", check: false },
        { text: "Creating marketing campaigns for products", check: false }
      ]
    },
    {
      question: "What is the purpose of a firewall in network security?",
      answer: [
        { text: "Blocking access to websites", check: false },
        { text: "Enhancing internet speed", check: false },
        { text: "Filtering and controlling incoming and outgoing network traffic", check: true },
        { text: "Managing user authentication", check: false }
      ]
    },
    {
      question: "What is the importance of regular data backups?",
      answer: [
        { text: "Increasing system processing speed", check: false },
        { text: "Saving energy consumption", check: false },
        { text: "Protecting against data loss due to hardware failures or other issues", check: true },
        { text: "Optimizing graphics rendering", check: false }
      ]
    },
    {
      question: "What is a 'cron job' in the context of system administration?",
      answer: [
        { text: "A type of computer virus", check: false },
        { text: "A scheduled task that runs at specified intervals", check: true },
        { text: "A hardware component in a computer", check: false },
        { text: "A type of networking cable", check: false }
      ]
    },
    {
      question: "What is the purpose of an IP address in networking?",
      answer: [
        { text: "Determining the computer's brand and model", check: false },
        { text: "Managing keyboard and mouse inputs", check: false },
        { text: "Identifying and locating devices on a network", check: true },
        { text: "Providing power to the computer components", check: false }
      ]
    }
  ]},
  {name:"data bases", numberOfQuestions:"5 questions", level:"medium", questionsList:[
    {
      question: "What is a database in the context of computing?",
      answer: [
        { text: "A collection of physical computer components", check: false },
        { text: "A software application for creating text documents", check: false },
        { text: "A structured collection of data organized for efficient retrieval and manipulation", check: true },
        { text: "A programming language for web development", check: false }
      ]
    },
    {
      question: "What does SQL stand for in relation to databases?",
      answer: [
        { text: "Structured Question Language", check: false },
        { text: "Structured Query List", check: false },
        { text: "Standard Query Language", check: true },
        { text: "Simple Query Logic", check: false }
      ]
    },
    {
      question: "What is the primary purpose of a database management system (DBMS)?",
      answer: [
        { text: "Creating graphical user interfaces for applications", check: false },
        { text: "Managing the physical hardware components of a computer", check: false },
        { text: "Providing a secure environment for web browsing", check: false },
        { text: "Managing and organizing data in a database", check: true }
      ]
    },
    {
      question: "What is the difference between a relational database and a non-relational (NoSQL) database?",
      answer: [
        { text: "There is no difference, they are the same thing", check: false },
        { text: "Relational databases store data in tables with predefined schemas, while NoSQL databases use flexible data models", check: true },
        { text: "Relational databases are only used for online gaming, while NoSQL databases are used for social media", check: false },
        { text: "Relational databases use images and videos, while NoSQL databases use only text data", check: false }
      ]
    },
    {
      question: "What is a primary key in a database?",
      answer: [
        { text: "A special keyword that performs advanced searches", check: false },
        { text: "The most important piece of data in a database", check: false },
        { text: "A field that uniquely identifies each record in a table", check: true },
        { text: "A backup copy of the entire database", check: false }
      ]
    }
  ]}
];

/*
const cQuestionsList = [
  { question: "What is the purpose of the 'printf' function in C?",
    answer: [
      { text: "To read input from the user", check: false },
      { text: "To allocate memory for variables", check: false },
      { text: "To write formatted output to the console", check: true },
      { text: "To perform mathematical calculations", check: false }
    ]},
  { question: "What is the correct syntax to declare a variable in C?",
    answer: [
      { text: "variable x;", check: false },
      { text: "var x;", check: false },
      { text: "int x;", check: true },
      { text: "let x;", check: false }
    ]},
  { question: "Which of the following data types is used to store whole numbers in C?",
    answer: [
      { text: "float", check: false },
      { text: "double", check: false },
      { text: "char", check: false },
      { text: "int", check: true }
    ]},
  { question: "What is the purpose of the 'if' statement in C?",
    answer: [
      { text: "To loop through a block of code", check: false },
      { text: "To declare a new variable", check: false },
      { text: "To define a function", check: false },
      { text: "To make a decision based on a condition", check: true }
    ]},
  { question: "Which operator is used to access the memory address of a variable in C?",
    answer: [
      { text: "&", check: true },
      { text: "*", check: false },
      { text: "#", check: false },
      { text: "$", check: false }
    ]},
  { question: "What is the purpose of the 'for' loop in C?",
    answer: [
      { text: "To define a function", check: false },
      { text: "To execute a block of code repeatedly", check: true },
      { text: "To perform logical operations", check: false },
      { text: "To read input from the user", check: false }
    ]},
  { question: "What does the 'break' statement do in a loop?",
    answer: [
      { text: "It continues to the next iteration of the loop", check: false },
      { text: "It ends the loop and transfers control to the next statement", check: true },
      { text: "It defines a new block of code", check: false },
      { text: "It prints a message to the console", check: false }
    ] },
  { question: "Which data type is used to store a sequence of characters in C?",
    answer: [
      { text: "string", check: false },
      { text: "char", check: true },
      { text: "text", check: false },
      { text: "sequence", check: false }
    ]},
  { question: "What is the purpose of the 'return' statement in a function?",
    answer: [
      { text: "To declare a new function", check: false },
      { text: "To print output to the console", check: false },
      { text: "To end the execution of a function and return a value", check: true },
      { text: "To perform arithmetic operations", check: false }
    ]},
  { question: "What is the 'sizeof' operator used for in C?",
    answer: [
      { text: "To calculate the size of a data type", check: true },
      { text: "To convert data types", check: false },
      { text: "To perform bitwise operations", check: false },
      { text: "To define the size of an array", check: false }
    ]},
];


const htmlQuestionsList = [
  {
    question: "What does HTML stand for?",
    answer: [
      { text: "Hyper Text Markup Language", check: true },
      { text: "Highly Textual Markup Language", check: false },
      { text: "Hyperlink and Text Markup Language", check: false },
      { text: "Home Tool Markup Language", check: false }
    ]
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answer: [
      { text: "<link>", check: false },
      { text: "<a>", check: true },
      { text: "<hlink>", check: false },
      { text: "<hyper>", check: false }
    ]
  },
  {
    question: "What is the purpose of the 'alt' attribute in an <img> tag?",
    answer: [
      { text: "To specify the alignment of the image", check: false },
      { text: "To define the size of the image", check: false },
      { text: "To provide alternative text for the image", check: true },
      { text: "To link the image to another page", check: false }
    ]
  },
  {
    question: "Which HTML element is used to create an ordered list?",
    answer: [
      { text: "<ul>", check: false },
      { text: "<li>", check: false },
      { text: "<dl>", check: false },
      { text: "<ol>", check: true }
    ]
  },
  {
    question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
    answer: [
      { text: "To define the title of the HTML document", check: false },
      { text: "To specify the character encoding of the document", check: false },
      { text: "To declare the version of HTML being used", check: false },
      { text: "To provide instructions to the web browser about the document type and version", check: true }
    ]
  }
];


const cssQuestionsList = [
  {
    question: "What does CSS stand for?",
    answer: [
      { text: "Cascading Style Sheets", check: true },
      { text: "Computer Styling System", check: false },
      { text: "Central Style Syntax", check: false },
      { text: "Creative Styling Solutions", check: false }
    ]
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    answer: [
      { text: "color", check: true },
      { text: "text-color", check: false },
      { text: "font-color", check: false },
      { text: "text-style", check: false }
    ]
  },
  {
    question: "What is the purpose of the 'box-sizing' property in CSS?",
    answer: [
      { text: "To define the shape of a box element", check: false },
      { text: "To specify the border style of a box element", check: false },
      { text: "To control the sizing calculations for box elements", check: true },
      { text: "To set the background color of a box element", check: false }
    ]
  },
  {
    question: "Which CSS selector is used to target an element with a specific class?",
    answer: [
      { text: "#id", check: false },
      { text: ".class", check: true },
      { text: "element.class", check: false },
      { text: "element#id", check: false }
    ]
  },
  {
    question: "What is the purpose of the 'float' property in CSS?",
    answer: [
      { text: "To make an element vertically centered", check: false },
      { text: "To apply a shadow effect to an element", check: false },
      { text: "To position an element to the left or right of its container", check: true },
      { text: "To create a blinking animation for an element", check: false }
    ]
  }
];


const jsQuestionsList = [
  {
    question: "What is JavaScript primarily used for in web development?",
    answer: [
      { text: "Styling web pages", check: false },
      { text: "Creating and enhancing interactive features", check: true },
      { text: "Managing databases", check: false },
      { text: "Defining document structure", check: false }
    ]
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer: [
      { text: "var x;", check: false },
      { text: "let x;", check: true },
      { text: "int x;", check: false },
      { text: "variable x;", check: false }
    ]
  },
  {
    question: "What is the purpose of a 'function' in JavaScript?",
    answer: [
      { text: "To style HTML elements", check: false },
      { text: "To define document structure", check: false },
      { text: "To create reusable blocks of code", check: true },
      { text: "To link to external files", check: false }
    ]
  },
  {
    question: "What is the JavaScript 'DOM'?",
    answer: [
      { text: "A type of data structure", check: false },
      { text: "A programming language", check: false },
      { text: "A browser feature that allows interaction with HTML elements", check: true },
      { text: "A design pattern for responsive web design", check: false }
    ]
  },
  {
    question: "What does 'console.log()' do in JavaScript?",
    answer: [
      { text: "It adds a new element to the DOM", check: false },
      { text: "It creates an interactive popup dialog", check: false },
      { text: "It displays output in the browser's console", check: true },
      { text: "It defines a new JavaScript variable", check: false }
    ]
  }
];


const internetQuestionsList = [
  {
    question: "What does ISP stand for in the context of the internet?",
    answer: [
      { text: "Internet System Provider", check: false },
      { text: "Internet Service Provider", check: true },
      { text: "Information Sharing Protocol", check: false },
      { text: "Internet Security Protocol", check: false }
    ]
  },
  {
    question: "What is the purpose of DNS in networking?",
    answer: [
      { text: "Dynamic Network Server", check: false },
      { text: "Data Network System", check: false },
      { text: "Domain Name System", check: true },
      { text: "Digital Network Security", check: false }
    ]
  },
  {
    question: "What technology provides a secure encrypted connection over a public network?",
    answer: [
      { text: "HTML", check: false },
      { text: "FTP", check: false },
      { text: "HTTP", check: false },
      { text: "VPN", check: true }
    ]
  },
  {
    question: "What does the term 'bandwidth' refer to in networking?",
    answer: [
      { text: "The physical width of a network cable", check: false },
      { text: "The speed at which data can be transmitted over a network", check: true },
      { text: "The number of devices connected to a network", check: false },
      { text: "The geographical coverage area of a network", check: false }
    ]
  },
  {
    question: "What protocol is used to send email over the internet?",
    answer: [
      { text: "HTTP", check: false },
      { text: "SMTP", check: true },
      { text: "FTP", check: false },
      { text: "TCP", check: false }
    ]
  }
];

const hardwareQuestionsList = [
  {
    question: "What is the central processing unit (CPU) responsible for in a computer?",
    answer: [
      { text: "Managing peripheral devices", check: false },
      { text: "Storing long-term data", check: false },
      { text: "Executing instructions and performing calculations", check: true },
      { text: "Displaying images on the screen", check: false }
    ]
  },
  {
    question: "What is the function of RAM (Random Access Memory) in a computer?",
    answer: [
      { text: "Storing permanent data even when the computer is turned off", check: false },
      { text: "Running the operating system only", check: false },
      { text: "Providing quick access to frequently used data for the CPU", check: true },
      { text: "Managing the power supply to the components", check: false }
    ]
  },
  {
    question: "What type of storage device is typically used to store the operating system and software programs?",
    answer: [
      { text: "Hard Disk Drive (HDD)", check: true },
      { text: "Solid State Drive (SSD)", check: false },
      { text: "Optical Disc Drive (ODD)", check: false },
      { text: "USB Flash Drive", check: false }
    ]
  },
  {
    question: "What does the GPU (Graphics Processing Unit) primarily handle in a computer?",
    answer: [
      { text: "Running software applications", check: false },
      { text: "Managing network connections", check: false },
      { text: "Generating and rendering images and videos", check: true },
      { text: "Providing power to the motherboard", check: false }
    ]
  },
  {
    question: "What is the purpose of the motherboard in a computer system?",
    answer: [
      { text: "Running software applications", check: false },
      { text: "Generating and rendering images", check: false },
      { text: "Providing power to peripheral devices", check: false },
      { text: "Connecting and communicating between various hardware components", check: true }
    ]
  }
];

const sysAdminQuestionsList = [
  {
    question: "What is the role of a system administrator?",
    answer: [
      { text: "Writing code for software applications", check: false },
      { text: "Managing and maintaining computer systems and networks", check: true },
      { text: "Designing user interfaces for websites", check: false },
      { text: "Creating marketing campaigns for products", check: false }
    ]
  },
  {
    question: "What is the purpose of a firewall in network security?",
    answer: [
      { text: "Blocking access to websites", check: false },
      { text: "Enhancing internet speed", check: false },
      { text: "Filtering and controlling incoming and outgoing network traffic", check: true },
      { text: "Managing user authentication", check: false }
    ]
  },
  {
    question: "What is the importance of regular data backups?",
    answer: [
      { text: "Increasing system processing speed", check: false },
      { text: "Saving energy consumption", check: false },
      { text: "Protecting against data loss due to hardware failures or other issues", check: true },
      { text: "Optimizing graphics rendering", check: false }
    ]
  },
  {
    question: "What is a 'cron job' in the context of system administration?",
    answer: [
      { text: "A type of computer virus", check: false },
      { text: "A scheduled task that runs at specified intervals", check: true },
      { text: "A hardware component in a computer", check: false },
      { text: "A type of networking cable", check: false }
    ]
  },
  {
    question: "What is the purpose of an IP address in networking?",
    answer: [
      { text: "Determining the computer's brand and model", check: false },
      { text: "Managing keyboard and mouse inputs", check: false },
      { text: "Identifying and locating devices on a network", check: true },
      { text: "Providing power to the computer components", check: false }
    ]
  }
];

const databaseQuestionsList = [
  {
    question: "What is a database in the context of computing?",
    answer: [
      { text: "A collection of physical computer components", check: false },
      { text: "A software application for creating text documents", check: false },
      { text: "A structured collection of data organized for efficient retrieval and manipulation", check: true },
      { text: "A programming language for web development", check: false }
    ]
  },
  {
    question: "What does SQL stand for in relation to databases?",
    answer: [
      { text: "Structured Question Language", check: false },
      { text: "Structured Query List", check: false },
      { text: "Standard Query Language", check: true },
      { text: "Simple Query Logic", check: false }
    ]
  },
  {
    question: "What is the primary purpose of a database management system (DBMS)?",
    answer: [
      { text: "Creating graphical user interfaces for applications", check: false },
      { text: "Managing the physical hardware components of a computer", check: false },
      { text: "Providing a secure environment for web browsing", check: false },
      { text: "Managing and organizing data in a database", check: true }
    ]
  },
  {
    question: "What is the difference between a relational database and a non-relational (NoSQL) database?",
    answer: [
      { text: "There is no difference, they are the same thing", check: false },
      { text: "Relational databases store data in tables with predefined schemas, while NoSQL databases use flexible data models", check: true },
      { text: "Relational databases are only used for online gaming, while NoSQL databases are used for social media", check: false },
      { text: "Relational databases use images and videos, while NoSQL databases use only text data", check: false }
    ]
  },
  {
    question: "What is a primary key in a database?",
    answer: [
      { text: "A special keyword that performs advanced searches", check: false },
      { text: "The most important piece of data in a database", check: false },
      { text: "A field that uniquely identifies each record in a table", check: true },
      { text: "A backup copy of the entire database", check: false }
    ]
  }
];

console.log(quizzes[0].questionList[0].question);
*/