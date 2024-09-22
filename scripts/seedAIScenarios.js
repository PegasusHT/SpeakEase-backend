const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Scenario = require('../src/models/scenario');
const AIMate = require('../src/models/aiMate');
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_PW = process.env.MONGODB_PW;
console.log(MONGODB_PW);
console.log(MONGODB_URI)
const seedData = async () => {
  // Connect to MongoDB
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }

  // Clear existing data
  await Scenario.deleteMany({});
  await AIMate.deleteMany({});

  // Create AI Mates
  const aiMates = [
    // Part 1: Retail and Services
    {
      name: "Sam",
      traits: "helpful,patient,knowledgeable",
      role: "Store Manager",
      image: "https://example.com/sam.jpg",
      backgroundImage: "https://example.com/store-background.jpg"
    },
    {
      name: "Emily",
      traits: "friendly,efficient,attentive",
      role: "Barista",
      image: "https://example.com/emily.jpg",
      backgroundImage: "https://example.com/cafe-background.jpg"
    },
    {
      name: "Miguel",
      traits: "vigilant,calm,professional",
      role: "Store Security",
      image: "https://example.com/miguel.jpg",
      backgroundImage: "https://example.com/store-security-background.jpg"
    },
    {
      name: "Alex",
      traits: "friendly,tech-savvy,patient",
      role: "Tech Support Specialist",
      image: "https://example.com/alex.jpg",
      backgroundImage: "https://example.com/tech-support-background.jpg"
    },
  
    // Part 2: Entertainment and Leisure
    {
      name: "Sophie",
      traits: "enthusiastic,knowledgeable,creative",
      role: "Museum Curator",
      image: "https://example.com/sophie.jpg",
      backgroundImage: "https://example.com/museum-background.jpg"
    },
    {
      name: "Raj",
      traits: "energetic,motivating,supportive",
      role: "Fitness Trainer",
      image: "https://example.com/raj.jpg",
      backgroundImage: "https://example.com/gym-background.jpg"
    },
    {
      name: "Zoe",
      traits: "charismatic,organized,quick-thinking",
      role: "Event Planner",
      image: "https://example.com/zoe.jpg",
      backgroundImage: "https://example.com/event-venue-background.jpg"
    },
    {
      name: "Leo",
      traits: "patient,encouraging,skilled",
      role: "Art Instructor",
      image: "https://example.com/leo.jpg",
      backgroundImage: "https://example.com/art-studio-background.jpg"
    },
  
    // Part 3: Professional Services
    {
      name: "Dr. Smith",
      traits: "professional,caring,attentive",
      role: "Veterinarian",
      image: "https://example.com/dr-smith.jpg",
      backgroundImage: "https://example.com/vet-clinic-background.jpg"
    },
    {
      name: "Lisa Johnson",
      traits: "detail-oriented,analytical,patient",
      role: "Financial Advisor",
      image: "https://example.com/lisa-johnson.jpg",
      backgroundImage: "https://example.com/finance-office-background.jpg"
    },
    {
      name: "Chef Maria",
      traits: "passionate,creative,detail-oriented",
      role: "Cooking Show Host",
      image: "https://example.com/chef-maria.jpg",
      backgroundImage: "https://example.com/tv-kitchen-background.jpg"
    },
    {
      name: "Tom",
      traits: "friendly,knowledgeable,adventurous",
      role: "Travel Vlogger",
      image: "https://example.com/tom.jpg",
      backgroundImage: "https://example.com/travel-background.jpg"
    }
  ];

  const createdAIMates = await AIMate.create(aiMates);

  // Create Scenarios
  const scenarios = [
    {
    id: 1,
    title: "Lost and Found",
    description: "You've lost your wallet in a busy shopping mall. Interact with the store manager to report and potentially retrieve your lost item.",
    context: "Shopping Mall",
    aiRole: createdAIMates[0]._id, // Sam - Store Manager
    userRole: "Shopper",
    objectives: ["Describe the lost item", "Provide contact information", "Ask about the lost and found process"],
    usefulPhrases: [
      { phrase: "I've misplaced my wallet, can you help me?", pronunciation: "/aɪv mɪsˈpleɪst maɪ ˈwɒlɪt, kæn juː help miː?/" },
      { phrase: "When and where did you last see it?", pronunciation: "/wen ænd weər dɪd juː lɑːst siː ɪt?/" },
      { phrase: "Can I leave my contact information with you?", pronunciation: "/kæn aɪ liːv maɪ ˈkɒntækt ˌɪnfərˈmeɪʃən wɪð juː?/" }
    ],
    image: "https://example.com/lost-and-found.jpg",
  },
  {
    id: 2,
    title: "Latte Art Challenge",
    description: "You're at a trendy café where the barista is known for creating amazing latte art. Challenge them to create a specific design and learn about coffee.",
    context: "Café",
    aiRole: createdAIMates[1]._id, // Emily - Barista
    userRole: "Coffee Enthusiast",
    objectives: ["Order a customized latte", "Request a specific latte art design", "Learn about different coffee beans and brewing methods"],
    usefulPhrases: [
      { phrase: "Could you make a swan design on my latte?", pronunciation: "/kʊd juː meɪk ə swɒn dɪˈzaɪn ɒn maɪ ˈlɑːteɪ?/" },
      { phrase: "What's the difference between Arabica and Robusta beans?", pronunciation: "/wɒts ðə ˈdɪfrəns bɪˈtwiːn əˈræbɪkə ænd rəˈbʌstə biːnz?/" },
      { phrase: "Can you recommend a brewing method for a stronger flavor?", pronunciation: "/kæn juː ˌrekəˈmend ə ˈbruːɪŋ ˈmeθəd fɔːr ə ˈstrɒŋgər ˈfleɪvər?/" }
    ],
    image: "https://example.com/latte-art-challenge.jpg",
  },
  {
    id: 3,
    title: "Suspicious Activity",
    description: "You notice someone behaving suspiciously in a store. Approach the security guard to report what you've seen without causing alarm.",
    context: "Department Store",
    aiRole: createdAIMates[2]._id, // Miguel - Store Security
    userRole: "Concerned Shopper",
    objectives: ["Describe the suspicious behavior", "Provide a description of the person", "Ask about appropriate next steps"],
    usefulPhrases: [
      { phrase: "Excuse me, I've noticed something that concerns me.", pronunciation: "/ɪkˈskjuːz miː, aɪv ˈnoʊtɪst ˈsʌmθɪŋ ðæt kənˈsɜːrnz miː./" },
      { phrase: "The person is wearing... and acting...", pronunciation: "/ðə ˈpɜːrsən ɪz ˈweərɪŋ... ænd ˈæktɪŋ.../" },
      { phrase: "What should I do in this situation?", pronunciation: "/wɒt ʃʊd aɪ duː ɪn ðɪs ˌsɪtjuˈeɪʃən?/" }
    ],
    image: "https://example.com/suspicious-activity.jpg",
    isNew: false
  },
  {
    id: 4,
    title: "Tech Troubleshooting",
    description: "Your new smartphone is acting up, and you need help fixing it. Visit a tech support specialist to diagnose and solve the problem.",
    context: "Electronics Store",
    aiRole: createdAIMates[3]._id, // Alex - Tech Support Specialist
    userRole: "Frustrated Customer",
    objectives: ["Describe the technical issue", "Follow troubleshooting steps", "Learn about device maintenance"],
    usefulPhrases: [
      { phrase: "My phone keeps freezing, can you help?", pronunciation: "/maɪ foʊn kiːps ˈfriːzɪŋ, kæn juː help?/" },
      { phrase: "I've tried restarting it, but the problem persists.", pronunciation: "/aɪv traɪd riːˈstɑːrtɪŋ ɪt, bʌt ðə ˈprɒbləm pərˈsɪsts./" },
      { phrase: "How can I prevent this from happening again?", pronunciation: "/haʊ kæn aɪ prɪˈvent ðɪs frəm ˈhæpənɪŋ əˈgen?/" }
    ],
    image: "https://example.com/tech-troubleshooting.jpg",
  },
  {
    id: 5,
    title: "Museum Mystery",
    description: "You're visiting a museum and notice something odd about a famous painting. Discuss your observations with the curator and learn about art authentication.",
    context: "Art Museum",
    aiRole: createdAIMates[4]._id, // Sophie - Museum Curator
    userRole: "Art Enthusiast",
    objectives: ["Describe your observation about the painting", "Learn about art authentication techniques", "Discuss the painting's history"],
    usefulPhrases: [
      { phrase: "I've noticed something unusual about this painting.", pronunciation: "/aɪv ˈnoʊtɪst ˈsʌmθɪŋ ənˈjuːʒuəl əˈbaʊt ðɪs ˈpeɪntɪŋ./" },
      { phrase: "How do experts verify the authenticity of artwork?", pronunciation: "/haʊ duː ˈekspɜːrts ˈverɪfaɪ ði ɔːˈθentɪsɪti əv ˈɑːrtwɜːrk?/" },
      { phrase: "Can you tell me more about the artist's technique?", pronunciation: "/kæn juː tel miː mɔːr əˈbaʊt ði ˈɑːrtɪsts tekˈniːk?/" }
    ],
    image: "https://example.com/museum-mystery.jpg",
  },
  {
    id: 6,
    title: "Fitness Goal Setting",
    description: "You've decided to get in shape and need help creating a fitness plan. Consult with a fitness trainer to set realistic goals and design a workout routine.",
    context: "Gym",
    aiRole: createdAIMates[5]._id, // Raj - Fitness Trainer
    userRole: "Fitness Beginner",
    objectives: ["Discuss your fitness goals", "Learn about different types of exercises", "Create a personalized workout plan"],
    usefulPhrases: [
      { phrase: "I want to improve my overall fitness. Where should I start?", pronunciation: "/aɪ wɒnt tuː ɪmˈpruːv maɪ ˈoʊvərɔːl ˈfɪtnəs. weər ʃʊd aɪ stɑːrt?/" },
      { phrase: "Can you explain the difference between cardio and strength training?", pronunciation: "/kæn juː ɪkˈspleɪn ðə ˈdɪfrəns bɪˈtwiːn ˈkɑːrdioʊ ænd streŋθ ˈtreɪnɪŋ?/" },
      { phrase: "How often should I work out to see results?", pronunciation: "/haʊ ˈɒfən ʃʊd aɪ wɜːrk aʊt tuː siː rɪˈzʌlts?/" }
    ],
    image: "https://example.com/fitness-goal-setting.jpg",
    isNew: false
  },
  {
    id: 7,
    title: "Surprise Party Planning",
    description: "You're organizing a surprise birthday party for a friend. Consult with an event planner to create a memorable celebration while keeping it a secret.",
    context: "Event Planning Office",
    aiRole: createdAIMates[6]._id, // Zoe - Event Planner
    userRole: "Party Organizer",
    objectives: ["Discuss party theme ideas", "Plan the surprise element", "Organize catering and decorations"],
    usefulPhrases: [
      { phrase: "I need help planning a surprise party. Any creative ideas?", pronunciation: "/aɪ niːd help ˈplænɪŋ ə sərˈpraɪz ˈpɑːrti. ˈeni kriˈeɪtɪv aɪˈdɪəz?/" },
      { phrase: "How can we keep the party a secret until the last moment?", pronunciation: "/haʊ kæn wiː kiːp ðə ˈpɑːrti ə ˈsiːkrət ənˈtɪl ðə lɑːst ˈmoʊmənt?/" },
      { phrase: "What are some popular catering options for a birthday celebration?", pronunciation: "/wɒt ɑːr səm ˈpɒpjələr ˈkeɪtərɪŋ ˈɒpʃənz fɔːr ə ˈbɜːrθdeɪ ˌseləˈbreɪʃən?/" }
    ],
    image: "https://example.com/surprise-party-planning.jpg",
  },
  {
    id: 8,
    title: "Artistic Expression",
    description: "You've always wanted to learn how to paint but don't know where to start. Attend an art class and learn the basics of painting from an experienced instructor.",
    context: "Art Studio",
    aiRole: createdAIMates[7]._id, // Leo - Art Instructor
    userRole: "Aspiring Artist",
    objectives: ["Learn about different painting techniques", "Understand color theory", "Create your first painting"],
    usefulPhrases: [
      { phrase: "I'm new to painting. What's the best technique for beginners?", pronunciation: "/aɪm njuː tuː ˈpeɪntɪŋ. wɒts ðə best tekˈniːk fɔːr bɪˈgɪnərz?/" },
      { phrase: "Can you explain how to mix colors to get the shade I want?", pronunciation: "/kæn juː ɪkˈspleɪn haʊ tuː mɪks ˈkʌlərz tuː get ðə ʃeɪd aɪ wɒnt?/" },
      { phrase: "What's the difference between watercolors and acrylics?", pronunciation: "/wɒts ðə ˈdɪfrəns bɪˈtwiːn ˈwɔːtərˌkʌlərz ænd əˈkrɪlɪks?/" }
    ],
    image: "https://example.com/artistic-expression.jpg",
    isNew: false
  },

  {
    id: 9,
    title: "Pet Health Concerns",
    description: "Your pet has been acting strange lately, and you're worried about their health. Visit a veterinarian to discuss your concerns and get advice on pet care.",
    context: "Veterinary Clinic",
    aiRole: createdAIMates[8]._id, // Dr. Smith - Veterinarian
    userRole: "Concerned Pet Owner",
    objectives: ["Describe your pet's symptoms", "Learn about possible causes", "Discuss preventative care"],
    usefulPhrases: [
      { phrase: "My dog hasn't been eating much lately. Should I be concerned?", pronunciation: "/maɪ dɒg ˈhæznt biːn ˈiːtɪŋ mʌtʃ ˈleɪtli. ʃʊd aɪ biː kənˈsɜːrnd?/" },
      { phrase: "What vaccinations does my pet need?", pronunciation: "/wɒt ˌvæksɪˈneɪʃənz dʌz maɪ pet niːd?/" },
      { phrase: "How can I help my pet maintain a healthy weight?", pronunciation: "/haʊ kæn aɪ help maɪ pet meɪnˈteɪn ə ˈhelθi weɪt?/" }
    ],
    image: "https://example.com/pet-health-concerns.jpg",
  },
  {
    id: 10,
    title: "Financial Planning",
    description: "You've recently come into some money and want to make smart financial decisions. Meet with a financial advisor to discuss investment options and long-term financial planning.",
    context: "Financial Advisory Office",
    aiRole: createdAIMates[9]._id, // Lisa Johnson - Financial Advisor
    userRole: "New Investor",
    objectives: ["Discuss your financial goals", "Learn about different investment options", "Create a basic financial plan"],
    usefulPhrases: [
      { phrase: "I'm new to investing. What are some low-risk options for beginners?", pronunciation: "/aɪm njuː tuː ɪnˈvestɪŋ. wɒt ɑːr səm loʊ-rɪsk ˈɒpʃənz fɔːr bɪˈgɪnərz?/" },
      { phrase: "How much should I be saving for retirement?", pronunciation: "/haʊ mʌtʃ ʃʊd aɪ biː ˈseɪvɪŋ fɔːr rɪˈtaɪərmənt?/" },
      { phrase: "Can you explain the difference between stocks and bonds?", pronunciation: "/kæn juː ɪkˈspleɪn ðə ˈdɪfrəns bɪˈtwiːn stɒks ænd bɒndz?/" }
    ],
    image: "https://example.com/financial-planning.jpg",
    isNew: false
  },
  {
    id: 11,
    title: "Cooking Show Participant",
    description: "You've won a contest to be a guest on a popular cooking show. Interact with the celebrity chef host as you learn to prepare a signature dish on live TV.",
    context: "TV Studio Kitchen",
    aiRole: createdAIMates[10]._id, // Chef Maria - Cooking Show Host
    userRole: "Contest Winner",
    objectives: ["Follow cooking instructions", "Ask questions about ingredients and techniques", "Describe flavors and textures"],
    usefulPhrases: [
      { phrase: "Could you show me the proper way to chop these vegetables?", pronunciation: "/kʊd juː ʃoʊ miː ðə ˈprɒpər weɪ tuː tʃɒp ðiːz ˈvedʒtəblz?/" },
      { phrase: "What's the secret to getting the perfect sear on this meat?", pronunciation: "/wɒts ðə ˈsiːkrət tuː ˈgetɪŋ ðə ˈpɜːrfɪkt sɪər ɒn ðɪs miːt?/" },
      { phrase: "This sauce has a complex flavor. How would you describe it?", pronunciation: "/ðɪs sɔːs hæz ə ˈkɒmpleks ˈfleɪvər. haʊ wʊd juː dɪˈskraɪb ɪt?/" }
    ],
    image: "https://example.com/cooking-show-participant.jpg",
  },
  {
    id: 12,
    title: "Travel Vlog Collaboration",
    description: "You're an aspiring travel content creator and have the opportunity to collaborate with a famous travel vlogger. Plan a day of exploring and filming in a new city.",
    context: "Tourist Destination",
    aiRole: createdAIMates[11]._id, // Tom - Travel Vlogger
    userRole: "Aspiring Content Creator",
    objectives: ["Plan an exciting itinerary", "Learn about vlogging techniques", "Discuss travel tips and hacks"],
    usefulPhrases: [
      { phrase: "What are the must-see spots in this city for our vlog?", pronunciation: "/wɒt ɑːr ðə mʌst-siː spɒts ɪn ðɪs ˈsɪti fɔːr ˈaʊər vlɒg?/" },
      { phrase: "Can you give me some tips on how to film better travel content?", pronunciation: "/kæn juː gɪv miː səm tɪps ɒn haʊ tuː fɪlm ˈbetər ˈtrævl ˈkɒntent?/" },
      { phrase: "What's your favorite travel hack for budget-friendly trips?", pronunciation: "/wɒts jɔːr ˈfeɪvərɪt ˈtrævl hæk fɔːr ˈbʌdʒɪt-ˈfrendli trɪps?/" }
    ],
    image: "https://example.com/travel-vlog-collaboration.jpg",
    isNew: false
  },
  ];

  await Scenario.create(scenarios);

  console.log('Database seeded successfully!');
  mongoose.connection.close();
};

seedData().catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1);
});