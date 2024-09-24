// data/fullStudentScenariosData.js

module.exports = [
  // Elementary School
  {
    id: 1,
    title: "Show and Tell",
    description: "Present your favorite toy or book to the class during show and tell.",
    context: "Elementary School Classroom",
    aiName: "Mrs. Johnson", 
    aiMateRole: "Elementary School Teacher",
    userRole: "Elementary Student",
    objectives: ["Describe the item", "Explain why it's your favorite", "Answer questions from classmates"],
    usefulPhrases: [
      { phrase: "This is my...", pronunciation: "/ðɪs ɪz maɪ.../" },
      { phrase: "I like it because...", pronunciation: "/aɪ laɪk ɪt bɪˈkɒz.../" },
      { phrase: "Any questions?", pronunciation: "/ˈeni ˈkwestʃənz?/" }
    ],
    image: "https://example.com/show-and-tell.jpg",
  },
  {
    id: 2,
    title: "School Field Trip",
    description: "Interact with a museum guide during a class outing to learn about exhibits.",
    context: "Natural History Museum",
    aiName: "Mr. Davis", 
    aiMateRole: "Museum Guide",
    userRole: "Elementary Student",
    objectives: ["Ask questions about exhibits", "Learn interesting facts", "Share what you've learned"],
    usefulPhrases: [
      { phrase: "What's this?", pronunciation: "/wɒts ðɪs?/" },
      { phrase: "How old is it?", pronunciation: "/haʊ oʊld ɪz ɪt?/" },
      { phrase: "That's interesting!", pronunciation: "/ðæts ˈɪntrəstɪŋ!/" }
    ],
    image: "https://example.com/museum-field-trip.jpg",
  },
  {
    id: 3,
    title: "Playground Buddy",
    description: "Make a new friend during recess and play together.",
    context: "School Playground",
    aiName: "Emma", aiMateRole: "Playground Friend", 
    userRole: "Elementary Student",
    objectives: ["Introduce yourself", "Suggest a game to play", "Learn about your new friend"],
    usefulPhrases: [
      { phrase: "Want to play...?", pronunciation: "/wɒnt tuː pleɪ...?/" },
      { phrase: "I'm good at...", pronunciation: "/aɪm gʊd æt.../" },
      { phrase: "What's your favorite...?", pronunciation: "/wɒts jɔːr ˈfeɪvərɪt...?/" }
    ],
    image: "https://example.com/playground-buddy.jpg",
  },
  {
    id: 4,
    title: "Parent-Teacher Conference",
    description: "Participate in a meeting with your teacher to discuss your progress.",
    context: "Elementary School Classroom",
    aiName: "Mrs. Johnson", aiMateRole: "Elementary School Teacher" , 
    userRole: "Elementary Student",
    objectives: ["Discuss your achievements", "Talk about areas for improvement", "Set goals for the next term"],
    usefulPhrases: [
      { phrase: "I'm proud of...", pronunciation: "/aɪm praʊd əv.../" },
      { phrase: "I need help with...", pronunciation: "/aɪ niːd help wɪð.../" },
      { phrase: "My goal is to...", pronunciation: "/maɪ goʊl ɪz tuː.../" }
    ],
    image: "https://example.com/parent-teacher-conference.jpg",
  },

  // High School
  {
    id: 5,
    title: "Science Fair Project",
    description: "Present your science experiment to a judge at the school science fair.",
    context: "High School Gymnasium",
    aiName: "Dr. Martinez",  aiMateRole: "Science Fair Judge",
    userRole: "High School Student",
    objectives: ["Explain your hypothesis", "Describe your methodology", "Present your results"],
    usefulPhrases: [
      { phrase: "My project is about...", pronunciation: "/maɪ ˈprɒdʒekt ɪz əˈbaʊt.../" },
      { phrase: "The results show...", pronunciation: "/ðə rɪˈzʌlts ʃoʊ.../" },
      { phrase: "In conclusion...", pronunciation: "/ɪn kənˈkluːʒən.../" }
    ],
    image: "https://example.com/science-fair.jpg",
  },
  {
    id: 6,
    title: "College Application",
    description: "Interview with a college admissions officer for your dream university.",
    context: "High School Counselor's Office",
    aiName: "Dr. Patel", aiMateRole: "College Admissions Officer", 
    userRole: "High School Student",
    objectives: ["Discuss your academic achievements", "Explain your extracurricular activities", "Ask questions about the university"],
    usefulPhrases: [
      { phrase: "I'm passionate about...", pronunciation: "/aɪm ˈpæʃənət əˈbaʊt.../" },
      { phrase: "My greatest achievement is...", pronunciation: "/maɪ ˈgreɪtɪst əˈtʃiːvmənt ɪz.../" },
      { phrase: "What opportunities are there for...?", pronunciation: "/wɒt ˌɒpərˈtjuːnətiz ɑːr ðeər fɔːr...?/" }
    ],
    image: "https://example.com/college-application.jpg",
  },
  {
    id: 7,
    title: "Part-time Job Interview",
    description: "Apply for an after-school job at a local store.",
    context: "Retail Store",
    aiName: "Mr. Wilson", aiMateRole: "Store Manager", 
    userRole: "High School Student",
    objectives: ["Highlight your skills", "Discuss your availability", "Ask about job responsibilities"],
    usefulPhrases: [
      { phrase: "I have experience in...", pronunciation: "/aɪ hæv ɪkˈspɪəriəns ɪn.../" },
      { phrase: "I'm available...", pronunciation: "/aɪm əˈveɪləbl.../" },
      { phrase: "What would my duties be?", pronunciation: "/wɒt wʊd maɪ ˈdjuːtiz biː?/" }
    ],
    image: "https://example.com/part-time-job-interview.jpg",
  },
  {
    id: 8,
    title: "Sports Team Tryout",
    description: "Interact with a coach during team selections for the school sports team.",
    context: "School Gymnasium or Sports Field",
    aiName: "Coach Brown", aiMateRole: "Sports Team Coach", 
    userRole: "High School Student",
    objectives: ["Demonstrate your skills", "Show teamwork", "Respond to coach's instructions"],
    usefulPhrases: [
      { phrase: "I've been practicing...", pronunciation: "/aɪv biːn ˈpræktɪsɪŋ.../" },
      { phrase: "Where should I position myself?", pronunciation: "/weər ʃʊd aɪ pəˈzɪʃən maɪˈself?/" },
      { phrase: "I can play...", pronunciation: "/aɪ kæn pleɪ.../" }
    ],
    image: "https://example.com/sports-team-tryout.jpg",
  },

  // College/University
  {
    id: 9,
    title: "Study Abroad Application",
    description: "Discuss program options with an international studies advisor for a semester abroad.",
    context: "University Office",
    aiName: "Dr. Patel", aiMateRole: "International Studies Advisor" , 
    userRole: "College Student",
    objectives: ["Explain your academic interests", "Discuss language proficiency", "Ask about program requirements"],
    usefulPhrases: [
      { phrase: "I'm interested in...", pronunciation: "/aɪm ˈɪntrəstɪd ɪn.../" },
      { phrase: "My language level is...", pronunciation: "/maɪ ˈlæŋgwɪdʒ ˈlevəl ɪz.../" },
      { phrase: "What are the requirements?", pronunciation: "/wɒt ɑːr ðə rɪˈkwaɪərments?/" }
    ],
    image: "https://example.com/study-abroad-office.jpg",
  },
  {
    id: 10,
    title: "Research Project",
    description: "Present your findings to a professor during office hours.",
    context: "Professor's Office",
    aiName: "Professor Zhang", aiMateRole: "Research Professor", 
    userRole: "College Student",
    objectives: ["Summarize your research", "Explain your methodology", "Discuss future directions"],
    usefulPhrases: [
      { phrase: "My research focuses on...", pronunciation: "/maɪ rɪˈsɜːrtʃ ˈfoʊkəsɪz ɒn.../" },
      { phrase: "The data suggests...", pronunciation: "/ðə ˈdeɪtə səˈdʒests.../" },
      { phrase: "I'd like to explore...", pronunciation: "/aɪd laɪk tuː ɪkˈsplɔːr.../" }
    ],
    image: "https://example.com/research-project.jpg",
  },
  {
    id: 11,
    title: "Internship Interview",
    description: "Apply for a summer internship in your field of study.",
    context: "Company Office",
    aiName: "Ms. Rodriguez", aiMateRole: "Internship Coordinator", 
    userRole: "College Student",
    objectives: ["Highlight relevant coursework", "Discuss career goals", "Ask about internship responsibilities"],
    usefulPhrases: [
      { phrase: "I've taken courses in...", pronunciation: "/aɪv ˈteɪkən ˈkɔːrsɪz ɪn.../" },
      { phrase: "My career goal is...", pronunciation: "/maɪ kəˈrɪər goʊl ɪz.../" },
      { phrase: "What projects would I work on?", pronunciation: "/wɒt ˈprɒdʒekts wʊd aɪ wɜːrk ɒn?/" }
    ],
    image: "https://example.com/internship-interview.jpg",
  },
  {
    id: 12,
    title: "Campus Club Leadership",
    description: "Run for a position in a student organization.",
    context: "Student Union Building",
    aiName: "Sarah" , aiMateRole: "Student Organization President", 
    userRole: "College Student",
    objectives: ["Present your leadership vision", "Propose new ideas for the club", "Answer questions from members"],
    usefulPhrases: [
      { phrase: "If elected, I will...", pronunciation: "/ɪf ɪˈlektɪd, aɪ wɪl.../" },
      { phrase: "I propose we...", pronunciation: "/aɪ prəˈpoʊz wiː.../" },
      { phrase: "I'm committed to...", pronunciation: "/aɪm kəˈmɪtɪd tuː.../" }
    ],
    image: "https://example.com/campus-club-leadership.jpg",
  },

  // Software Developer
  {
    id: 1,
    title: "Code Review",
    description: "Present your code to a senior developer for feedback.",
    context: "Tech Company Office",
    aiName: "Alex Chen",
    aiMateRole: "Senior Software Developer",
    userRole: "Software Developer",
    objectives: ["Explain your code structure", "Discuss your implementation choices", "Respond to feedback"],
    usefulPhrases: [
      { phrase: "This function does...", pronunciation: "/ðɪs ˈfʌŋkʃən dʌz.../" },
      { phrase: "I chose this approach because...", pronunciation: "/aɪ tʃoʊz ðɪs əˈproʊtʃ bɪˈkɒz.../" },
      { phrase: "How can I improve this?", pronunciation: "/haʊ kæn aɪ ɪmˈpruːv ðɪs?/" }
    ],
    image: "https://example.com/code-review.jpg",
  },
  {
    id: 2,
    title: "Client Meeting",
    description: "Discuss project requirements with a non-technical client.",
    context: "Meeting Room",
    aiName: "Elena Rodriguez",
    aiMateRole: "Small Business Owner",
    userRole: "Software Developer",
    objectives: ["Understand client needs", "Explain technical concepts simply", "Propose solutions"],
    usefulPhrases: [
      { phrase: "Could you elaborate on...?", pronunciation: "/kʊd juː ɪˈlæbəreɪt ɒn...?/" },
      { phrase: "In simple terms, this means...", pronunciation: "/ɪn ˈsɪmpl tɜːrmz, ðɪs miːnz.../" },
      { phrase: "We recommend...", pronunciation: "/wiː ˌrekəˈmend.../" }
    ],
    image: "https://example.com/client-meeting.jpg",
  },
  {
    id: 3,
    title: "Job Interview",
    description: "Apply for a new position at a tech startup.",
    context: "Startup Office",
    aiName: "Alex Chen",
    aiMateRole: "Senior Software Developer",
    userRole: "Software Developer",
    objectives: ["Highlight your technical skills", "Discuss past projects", "Ask about the company's tech stack"],
    usefulPhrases: [
      { phrase: "I have experience with...", pronunciation: "/aɪ hæv ɪkˈspɪəriəns wɪð.../" },
      { phrase: "In my previous role, I...", pronunciation: "/ɪn maɪ ˈpriːviəs roʊl, aɪ.../" },
      { phrase: "What development methodologies do you use?", pronunciation: "/wɒt dɪˈveləpmənt ˌmeθəˈdɒlədʒiz duː juː juːz?/" }
    ],
    image: "https://example.com/tech-job-interview.jpg",
  },
  {
    id: 4,
    title: "Team Brainstorming",
    description: "Participate in a problem-solving session with colleagues.",
    context: "Tech Company Meeting Room",
    aiName: "Alex Chen",
    aiMateRole: "Senior Software Developer",
    userRole: "Software Developer",
    objectives: ["Propose ideas", "Build on others' suggestions", "Evaluate potential solutions"],
    usefulPhrases: [
      { phrase: "What if we...?", pronunciation: "/wɒt ɪf wiː...?/" },
      { phrase: "Building on that idea...", pronunciation: "/ˈbɪldɪŋ ɒn ðæt aɪˈdɪə.../" },
      { phrase: "The pros and cons are...", pronunciation: "/ðə proʊz ænd kɒnz ɑːr.../" }
    ],
    image: "https://example.com/team-brainstorming.jpg",
  },

  // Financial Service
  {
    id: 5,
    title: "Investment Consultation",
    description: "Advise a client on portfolio diversification.",
    context: "Financial Advisory Office",
    aiName: "Mr. Wilson",
    aiMateRole: "Client",
    userRole: "Financial Advisor",
    objectives: ["Assess the client's financial goals", "Explain diversification strategies", "Recommend suitable investments"],
    usefulPhrases: [
      { phrase: "Your risk tolerance is...", pronunciation: "/jɔːr rɪsk ˈtɒlərəns ɪz.../" },
      { phrase: "I recommend...", pronunciation: "/aɪ ˌrekəˈmend.../" },
      { phrase: "This strategy will help...", pronunciation: "/ðɪs ˈstrætədʒi wɪl help.../" }
    ],
    image: "https://example.com/investment-consultation.jpg",
  },
  {
    id: 6,
    title: "Risk Assessment",
    description: "Explain financial risks to a corporate client.",
    context: "Corporate Office",
    aiName: "Elena Rodriguez",
    aiMateRole: "Corporate Client",
    userRole: "Financial Advisor",
    objectives: ["Identify potential risks", "Explain risk mitigation strategies", "Answer client's questions"],
    usefulPhrases: [
      { phrase: "The main risks are...", pronunciation: "/ðə meɪn rɪsks ɑːr.../" },
      { phrase: "To mitigate this, we suggest...", pronunciation: "/tuː ˈmɪtɪgeɪt ðɪs, wiː səˈdʒest.../" },
      { phrase: "The potential impact could be...", pronunciation: "/ðə pəˈtenʃəl ˈɪmpækt kʊd biː.../" }
    ],
    image: "https://example.com/risk-assessment.jpg",
  },
  {
    id: 7,
    title: "Loan Application",
    description: "Interview a small business owner applying for a loan.",
    context: "Bank Meeting Room",
    aiName: "Elena Rodriguez",
    aiMateRole: "Loan Applicant",
    userRole: "Financial Advisor",
    objectives: ["Gather financial information", "Assess the business plan", "Explain loan terms and conditions"],
    usefulPhrases: [
      { phrase: "Tell me about your business...", pronunciation: "/tel miː əˈbaʊt jɔːr ˈbɪznəs.../" },
      { phrase: "Your credit score indicates...", pronunciation: "/jɔːr ˈkredɪt skɔːr ˈɪndɪkeɪts.../" },
      { phrase: "The repayment terms are...", pronunciation: "/ðə rɪˈpeɪmənt tɜːrmz ɑːr.../" }
    ],
    image: "https://example.com/loan-application.jpg",
  },

  // Healthcare
  {
    id: 1,
    title: "Patient Consultation",
    description: "Diagnose and explain treatment options to a patient.",
    context: "Doctor's Office",
    aiName: "Yuki Tanaka",
    aiMateRole: "Patient",
    userRole: "Healthcare Professional",
    objectives: ["Gather patient history", "Perform examination", "Explain diagnosis and treatment"],
    usefulPhrases: [
      { phrase: "What brings you in today?", pronunciation: "/wɒt brɪŋz juː ɪn təˈdeɪ?/" },
      { phrase: "Have you experienced any other symptoms?", pronunciation: "/hæv juː ɪkˈspɪəriənst ˈeni ˈʌðər ˈsɪmptəmz?/" },
      { phrase: "I recommend we...", pronunciation: "/aɪ ˌrekəˈmend wiː.../" }
    ],
    image: "https://example.com/patient-consultation.jpg",
  },
  {
    id: 2,
    title: "Emergency Triage",
    description: "Assess and prioritize patients in an ER setting.",
    context: "Hospital Emergency Room",
    aiName: "Michael O'Brien",
    aiMateRole: "Patient",
    userRole: "Healthcare Professional",
    objectives: ["Quickly assess patient conditions", "Prioritize cases", "Communicate with medical staff"],
    usefulPhrases: [
      { phrase: "Can you describe your pain?", pronunciation: "/kæn juː dɪˈskraɪb jɔːr peɪn?/" },
      { phrase: "When did the symptoms start?", pronunciation: "/wen dɪd ðə ˈsɪmptəmz stɑːrt?/" },
      { phrase: "We'll need to run some tests.", pronunciation: "/wiːl niːd tuː rʌn sʌm tests./" }
    ],
    image: "https://example.com/emergency-triage.jpg",
  },

  // Salesperson
  {
    id: 3,
    title: "Product Demonstration",
    description: "Showcase a new product to a potential customer.",
    context: "Showroom",
    aiName: "Elena Rodriguez",
    aiMateRole: "Potential Customer",
    userRole: "Sales Representative",
    objectives: ["Demonstrate product features", "Address customer questions", "Close the sale"],
    usefulPhrases: [
      { phrase: "Let me show you how it works.", pronunciation: "/let miː ʃoʊ juː haʊ ɪt wɜːrks./" },
      { phrase: "This feature is designed to...", pronunciation: "/ðɪs ˈfiːtʃər ɪz dɪˈzaɪnd tuː.../" },
      { phrase: "Do you have any questions so far?", pronunciation: "/duː juː hæv ˈeni ˈkwestʃənz soʊ fɑːr?/" }
    ],
    image: "https://example.com/product-demonstration.jpg",
  },
  {
    id: 4,
    title: "Sales Negotiation",
    description: "Negotiate pricing and terms with a business client.",
    context: "Client's Office",
    aiName: "Elena Rodriguez",
    aiMateRole: "Small Business Owner",
    userRole: "Sales Representative",
    objectives: ["Present your offer", "Address client concerns", "Find a mutually beneficial agreement"],
    usefulPhrases: [
      { phrase: "We can offer a discount of...", pronunciation: "/wiː kæn ˈɒfər ə ˈdɪskaʊnt əv.../" },
      { phrase: "This package includes...", pronunciation: "/ðɪs ˈpækɪdʒ ɪnˈkluːdz.../" },
      { phrase: "How does that sound to you?", pronunciation: "/haʊ dʌz ðæt saʊnd tuː juː?/" }
    ],
    image: "https://example.com/sales-negotiation.jpg",
  },
  {
    id: 5,
    title: "Customer Complaint Resolution",
    description: "Handle a dissatisfied customer's concerns about a product.",
    context: "Customer Service Desk",
    aiName: "Michael O'Brien",
    aiMateRole: "Dissatisfied Customer",
    userRole: "Sales Representative",
    objectives: ["Listen to the customer's complaint", "Offer a solution", "Ensure customer satisfaction"],
    usefulPhrases: [
      { phrase: "I apologize for the inconvenience.", pronunciation: "/aɪ əˈpɒlədʒaɪz fɔːr ði ɪnkənˈviːniəns./" },
      { phrase: "Let's see how we can resolve this.", pronunciation: "/lets siː haʊ wiː kæn rɪˈzɒlv ðɪs./" },
      { phrase: "What would be a satisfactory solution?", pronunciation: "/wɒt wʊd biː ə ˌsætɪsˈfæktəri səˈluːʃən?/" }
    ],
    image: "https://example.com/customer-complaint.jpg",
  },
  {
    id: 6,
    title: "Sales Team Meeting",
    description: "Present your quarterly results to management.",
    context: "Company Conference Room",
    aiName: "Marcus Johnson",
    aiMateRole: "Sales Manager",
    userRole: "Sales Representative",
    objectives: ["Report on your sales figures", "Explain strategies used", "Propose plans for the next quarter"],
    usefulPhrases: [
      { phrase: "Our sales figures this quarter are...", pronunciation: "/ˈaʊər seɪlz ˈfɪgjərz ðɪs ˈkwɔːrtər ɑːr.../" },
      { phrase: "I've implemented a new strategy to...", pronunciation: "/aɪv ˈɪmplɪmentɪd ə njuː ˈstrætədʒi tuː.../" },
      { phrase: "My goal for next quarter is...", pronunciation: "/maɪ goʊl fɔːr nekst ˈkwɔːrtər ɪz.../" }
    ],
    image: "https://example.com/sales-team-meeting.jpg",
  },

  // Newcomer/Immigrant
  {
    id: 1,
    title: "Housing Search",
    description: "Inquire about apartment rentals with a real estate agent.",
    context: "Real Estate Office",
    aiName: "Michael O'Brien",
    aiMateRole: "Real Estate Agent",
    userRole: "Newcomer/Immigrant",
    objectives: ["Describe your housing needs", "Ask about rental terms", "Inquire about the neighborhood"],
    usefulPhrases: [
      { phrase: "I'm looking for...", pronunciation: "/aɪm ˈlʊkɪŋ fɔːr.../" },
      { phrase: "What's included in the rent?", pronunciation: "/wɒts ɪnˈkluːdɪd ɪn ðə rent?/" },
      { phrase: "Is it close to...?", pronunciation: "/ɪz ɪt kloʊs tuː...?/" }
    ],
    image: "https://example.com/housing-search.jpg",
  },
  {
    id: 2,
    title: "Language Exchange",
    description: "Participate in a local language exchange meetup to practice English.",
    context: "Community Center",
    aiName: "Michael O'Brien",
    aiMateRole: "Language Exchange Partner",
    userRole: "Newcomer/Immigrant",
    objectives: ["Introduce yourself", "Practice conversational English", "Learn about local customs"],
    usefulPhrases: [
      { phrase: "How do you say...?", pronunciation: "/haʊ duː juː seɪ...?/" },
      { phrase: "Could you repeat that?", pronunciation: "/kʊd juː rɪˈpiːt ðæt?/" },
      { phrase: "In my country, we...", pronunciation: "/ɪn maɪ ˈkʌntri, wiː.../" }
    ],
    image: "https://example.com/language-exchange.jpg",
  },
  {
    id: 3,
    title: "Cultural Orientation",
    description: "Attend a welcome session for new residents in your city.",
    context: "City Hall",
    aiName: "Michael O'Brien", aiMateRole: "Community Liaison",
    userRole: "Newcomer/Immigrant",
    objectives: ["Learn about local services", "Understand cultural norms", "Ask questions about the community"],
    usefulPhrases: [
      { phrase: "How does... work here?", pronunciation: "/haʊ dʌz... wɜːrk hɪər?/" },
      { phrase: "Where can I find...?", pronunciation: "/weər kæn aɪ faɪnd...?/" },
      { phrase: "Is it customary to...?", pronunciation: "/ɪz ɪt ˈkʌstəmeri tuː...?/" }
    ],
    image: "https://example.com/cultural-orientation.jpg",
  },
  {
    id: 4,
    title: "Job Search Assistance",
    description: "Visit a career center for employment assistance.",
    context: "Local Employment Office",
    aiName: "Ms. Rodriguez", aiMateRole: "Career Advisor" ,
    userRole: "Newcomer/Immigrant",
    objectives: ["Discuss your work experience", "Learn about job opportunities", "Get help with your resume"],
    usefulPhrases: [
      { phrase: "My background is in...", pronunciation: "/maɪ ˈbækgraʊnd ɪz ɪn.../" },
      { phrase: "Are there opportunities for...?", pronunciation: "/ɑːr ðeər ˌɒpərˈtjuːnətiz fɔːr...?/" },
      { phrase: "How can I improve my resume?", pronunciation: "/haʊ kæn aɪ ɪmˈpruːv maɪ ˈrezʊmeɪ?/" }
    ],
    image: "https://example.com/job-search-assistance.jpg",
  },

  // Local Resident
  {
    id: 5,
    title: "Community Meeting",
    description: "Discuss a proposed development in your neighborhood.",
    context: "Local Community Center",
    aiName: "Michael O'Brien", aiMateRole: "Community Leader" ,
    userRole: "Local Resident",
    objectives: ["Express your opinion", "Ask questions about the proposal", "Suggest alternatives"],
    usefulPhrases: [
      { phrase: "I'm concerned about...", pronunciation: "/aɪm kənˈsɜːrnd əˈbaʊt.../" },
      { phrase: "How will this affect...?", pronunciation: "/haʊ wɪl ðɪs əˈfekt...?/" },
      { phrase: "Have you considered...?", pronunciation: "/hæv juː kənˈsɪdərd...?/" }
    ],
    image: "https://example.com/community-meeting.jpg",
  },
  {
    id: 6,
    title: "Volunteer Orientation",
    description: "Sign up to help at a local food bank or shelter.",
    context: "Community Service Center",
    aiName: "Michael O'Brien", aiMateRole: "Volunteer Coordinator",
    userRole: "Local Resident",
    objectives: ["Learn about volunteer opportunities", "Discuss your availability", "Understand responsibilities"],
    usefulPhrases: [
      { phrase: "I'm interested in helping with...", pronunciation: "/aɪm ˈɪntrəstɪd ɪn ˈhelpɪŋ wɪð.../" },
      { phrase: "What skills are needed?", pronunciation: "/wɒt skɪlz ɑːr ˈniːdɪd?/" },
      { phrase: "How often can I volunteer?", pronunciation: "/haʊ ˈɒfən kæn aɪ ˌvɒlənˈtɪər?/" }
    ],
    image: "https://example.com/volunteer-orientation.jpg",
  },
  {
    id: 7,
    title: "Local Government Interaction",
    description: "Address a concern at a town hall meeting.",
    context: "City Hall",
    aiName: "Michael O'Brien", aiMateRole: "City Council Member",
    userRole: "Local Resident",
    objectives: ["Present your concern", "Propose a solution", "Respond to questions"],
    usefulPhrases: [
      { phrase: "I'd like to address the issue of...", pronunciation: "/aɪd laɪk tuː əˈdres ði ˈɪʃuː əv.../" },
      { phrase: "My proposed solution is...", pronunciation: "/maɪ prəˈpoʊzd səˈluːʃən ɪz.../" },
      { phrase: "How can we move forward with this?", pronunciation: "/haʊ kæn wiː muːv ˈfɔːrwərd wɪð ðɪs?/" }
    ],
    image: "https://example.com/town-hall-meeting.jpg",
  },
  {
    id: 8,
    title: "Neighborhood Watch",
    description: "Organize a safety meeting with local police.",
    context: "Community Police Station",
    aiName: "David Franco", aiMateRole: "Police Officer" ,
    userRole: "Local Resident",
    objectives: ["Discuss community concerns", "Learn about crime prevention", "Coordinate with law enforcement"],
    usefulPhrases: [
      { phrase: "We've noticed an increase in...", pronunciation: "/wiːv ˈnoʊtɪst ən ɪnˈkriːs ɪn.../" },
      { phrase: "What safety measures do you recommend?", pronunciation: "/wɒt ˈseɪfti ˈmeʒərz duː juː ˌrekəˈmend?/" },
      { phrase: "How can we better report suspicious activity?", pronunciation: "/haʊ kæn wiː ˈbetər rɪˈpɔːrt səsˈpɪʃəs ækˈtɪvəti?/" }
    ],
    image: "https://example.com/neighborhood-watch.jpg",
  },

  // Parent/Guardian
  {
    id: 1,
    title: "Parent-Teacher Conference",
    description: "Discuss your child's progress with their teacher.",
    context: "Elementary School Classroom",
    aiName: "Mrs. Johnson",
    aiMateRole: "Elementary School Teacher",
    userRole: "Parent/Guardian",
    objectives: ["Learn about your child's academic performance", "Discuss behavior and social skills", "Set goals for improvement"],
    usefulPhrases: [
      { phrase: "How is my child doing in...?", pronunciation: "/haʊ ɪz maɪ tʃaɪld ˈduːɪŋ ɪn...?/" },
      { phrase: "What areas need improvement?", pronunciation: "/wɒt ˈeəriəz niːd ɪmˈpruːvmənt?/" },
      { phrase: "How can we support learning at home?", pronunciation: "/haʊ kæn wiː səˈpɔːrt ˈlɜːrnɪŋ æt hoʊm?/" }
    ],
    image: "https://example.com/parent-teacher-conference.jpg",
  },
  {
    id: 2,
    title: "Pediatrician Visit",
    description: "Consult with a doctor about your child's health concerns.",
    context: "Pediatrician's Office",
    aiName: "Dr. Olivia Nkosi",
    aiMateRole: "Pediatrician",
    userRole: "Parent/Guardian",
    objectives: ["Describe your child's symptoms", "Understand the diagnosis", "Learn about treatment options"],
    usefulPhrases: [
      { phrase: "My child has been experiencing...", pronunciation: "/maɪ tʃaɪld hæz biːn ɪkˈspɪəriənsɪŋ.../" },
      { phrase: "How long will recovery take?", pronunciation: "/haʊ lɒŋ wɪl rɪˈkʌvəri teɪk?/" },
      { phrase: "Are there any side effects?", pronunciation: "/ɑːr ðeər ˈeni saɪd ɪˈfekts?/" }
    ],
    image: "https://example.com/pediatrician-visit.jpg",
  },
  {
    id: 3,
    title: "After-School Activity Enrollment",
    description: "Enroll your child in a sports team or arts program.",
    context: "Community Recreation Center",
    aiName: "Coach Brown",
    aiMateRole: "After-School Program Coordinator",
    userRole: "Parent/Guardian",
    objectives: ["Learn about available programs", "Discuss schedule and commitments", "Understand costs and equipment needs"],
    usefulPhrases: [
      { phrase: "What activities do you offer for...?", pronunciation: "/wɒt ækˈtɪvətiz duː juː ˈɒfər fɔːr...?/" },
      { phrase: "How often are practices/classes?", pronunciation: "/haʊ ˈɒfən ɑːr ˈpræktɪsɪz/ˈklæsɪz?/" },
      { phrase: "What equipment will my child need?", pronunciation: "/wɒt ɪˈkwɪpmənt wɪl maɪ tʃaɪld niːd?/" }
    ],
    image: "https://example.com/after-school-enrollment.jpg",
  },
  {
    id: 4,
    title: "Playdate Organization",
    description: "Arrange a meetup with other parents and children.",
    context: "Local Park or Home",
    aiName: "Maria Garcia",
    aiMateRole: "Fellow Parent",
    userRole: "Parent/Guardian",
    objectives: ["Suggest activities for the children", "Discuss dietary restrictions or allergies", "Agree on supervision arrangements"],
    usefulPhrases: [
      { phrase: "Shall we meet at...?", pronunciation: "/ʃæl wiː miːt æt...?/" },
      { phrase: "My child is allergic to...", pronunciation: "/maɪ tʃaɪld ɪz əˈlɜːrdʒɪk tuː.../" },
      { phrase: "How long should we plan for?", pronunciation: "/haʊ lɒŋ ʃʊd wiː plæn fɔːr?/" }
    ],
    image: "https://example.com/playdate-organization.jpg",
  },

  // Tourist
  {
    id: 1,
    title: "Hotel Check-in",
    description: "Resolve an issue with your room reservation.",
    context: "Hotel Reception",
    aiName: "Michael O'Brien",
    aiMateRole: "Hotel Receptionist",
    userRole: "Tourist",
    objectives: ["Explain the reservation problem", "Request a solution", "Ask about hotel amenities"],
    usefulPhrases: [
      { phrase: "There's a problem with...", pronunciation: "/ðeərz ə ˈprɒbləm wɪð.../" },
      { phrase: "Can you help me...?", pronunciation: "/kæn juː help miː...?/" },
      { phrase: "What time does... open?", pronunciation: "/wɒt taɪm dʌz... ˈoʊpən?/" }
    ],
    image: "https://example.com/hotel-check-in.jpg",
  },
  {
    id: 2,
    title: "Guided Tour",
    description: "Interact with a tour guide at a historical site.",
    context: "Historical Landmark",
    aiName: "Mr. Davis",
    aiMateRole: "Tour Guide",
    userRole: "Tourist",
    objectives: ["Ask questions about the site", "Learn historical facts", "Navigate the tour group"],
    usefulPhrases: [
      { phrase: "Could you tell me more about...?", pronunciation: "/kʊd juː tel miː mɔːr əˈbaʊt...?/" },
      { phrase: "When was this built?", pronunciation: "/wen wəz ðɪs bɪlt?/" },
      { phrase: "Is photography allowed?", pronunciation: "/ɪz fəˈtɒgrəfi əˈlaʊd?/" }
    ],
    image: "https://example.com/guided-tour.jpg",
  },
  {
    id: 3,
    title: "Restaurant Order",
    description: "Navigate a menu and order in a local restaurant.",
    context: "Local Restaurant",
    aiName: "Sophie Dubois",
    aiMateRole: "Waitress",
    userRole: "Tourist",
    objectives: ["Ask about menu items", "Make special requests", "Order your meal"],
    usefulPhrases: [
      { phrase: "What do you recommend?", pronunciation: "/wɒt duː juː ˌrekəˈmend?/" },
      { phrase: "Is this dish spicy?", pronunciation: "/ɪz ðɪs dɪʃ ˈspaɪsi?/" },
      { phrase: "Can I have this without...?", pronunciation: "/kæn aɪ hæv ðɪs wɪˈðaʊt...?/" }
    ],
    image: "https://example.com/restaurant-order.jpg",
  },
  {
    id: 4,
    title: "Souvenir Shopping",
    description: "Haggle prices at a local market.",
    context: "Local Market",
    aiName: "Michael O'Brien",
    aiMateRole: "Market Vendor",
    userRole: "Tourist",
    objectives: ["Inquire about products", "Negotiate prices", "Make a purchase"],
    usefulPhrases: [
      { phrase: "How much is this?", pronunciation: "/haʊ mʌtʃ ɪz ðɪs?/" },
      { phrase: "Can you do a better price?", pronunciation: "/kæn juː duː ə ˈbetər praɪs?/" },
      { phrase: "I'll take it!", pronunciation: "/aɪl teɪk ɪt!/" }
    ],
    image: "https://example.com/souvenir-shopping.jpg",
  },

  // Cultural Explorer
  {
    id: 5,
    title: "Cooking Class",
    description: "Learn to make a traditional local dish from a chef.",
    context: "Local Cooking School",
    aiName: "Raj Patel",
    aiMateRole: "Local Chef",
    userRole: "Cultural Explorer",
    objectives: ["Follow cooking instructions", "Ask about ingredients and techniques", "Learn about food culture"],
    usefulPhrases: [
      { phrase: "What's this ingredient called?", pronunciation: "/wɒts ðɪs ɪnˈgriːdiənt kɔːld?/" },
      { phrase: "How do you prepare...?", pronunciation: "/haʊ duː juː prɪˈpeər...?/" },
      { phrase: "Is this dish eaten on special occasions?", pronunciation: "/ɪz ðɪs dɪʃ ˈiːtn ɒn ˈspeʃəl əˈkeɪʒənz?/" }
    ],
    image: "https://example.com/cooking-class.jpg",
  },
  {
    id: 6,
    title: "Homestay Experience",
    description: "Interact with a host family during your stay.",
    context: "Local Family Home",
    aiName: "Maria Garcia",
    aiMateRole: "Host Family Member",
    userRole: "Cultural Explorer",
    objectives: ["Engage in daily activities", "Learn about local customs", "Share your own culture"],
    usefulPhrases: [
      { phrase: "How can I help with...?", pronunciation: "/haʊ kæn aɪ help wɪð...?/" },
      { phrase: "What's the significance of...?", pronunciation: "/wɒts ðə sɪgˈnɪfɪkəns əv...?/" },
      { phrase: "In my country, we...", pronunciation: "/ɪn maɪ ˈkʌntri, wiː.../" }
    ],
    image: "https://example.com/homestay-experience.jpg",
  },
  {
    id: 7,
    title: "Festival Participation",
    description: "Join in local celebrations and customs.",
    context: "Town Square during a Festival",
    aiName: "Michael O'Brien",
    aiMateRole: "Local Festival Participant",
    userRole: "Cultural Explorer",
    objectives: ["Understand festival traditions", "Participate in activities", "Interact with locals"],
    usefulPhrases: [
      { phrase: "What's the story behind...?", pronunciation: "/wɒts ðə ˈstɔːri bɪˈhaɪnd...?/" },
      { phrase: "How do I join in?", pronunciation: "/haʊ duː aɪ dʒɔɪn ɪn?/" },
      { phrase: "Is there a special greeting for this festival?", pronunciation: "/ɪz ðeər ə ˈspeʃəl ˈgriːtɪŋ fɔːr ðɪs ˈfestɪvəl?/" }
    ],
    image: "https://example.com/festival-participation.jpg",
  },
  {
    id: 8,
    title: "Artisan Workshop",
    description: "Learn about local crafts from a skilled artisan.",
    context: "Local Craft Workshop",
    aiName: "Raj Patel",
    aiMateRole: "Local Artisan",
    userRole: "Cultural Explorer",
    objectives: ["Understand the craft's history", "Learn basic techniques", "Create a small item"],
    usefulPhrases: [
      { phrase: "How long have you been doing this?", pronunciation: "/haʊ lɒŋ hæv juː biːn ˈduːɪŋ ðɪs?/" },
      { phrase: "What materials are used?", pronunciation: "/wɒt məˈtɪəriəlz ɑːr juːzd?/" },
      { phrase: "Can you show me how to...?", pronunciation: "/kæn juː ʃoʊ miː haʊ tuː...?/" }
    ],
    image: "https://example.com/artisan-workshop.jpg",
  }
];