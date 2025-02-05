import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Phone, Mail, School, Award, 
  ChevronRight, X, GraduationCap, Calendar, Star, Music2
} from 'lucide-react';

interface Coordinator {
  name: string;
  phone: string;
  email?: string;
  roll_no?: string;
  class?: string;
}

interface Department {
  faculty_coordinator: Coordinator | { name: string; phone: string; };
  faculty_coordinators?: Coordinator[];
  student_coordinator: Coordinator;
  events: string[] | Record<string, string>;
}

interface ScheduleData {
  departments: Record<string, Department>;
}

const Schedule = () => {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  
  const scheduleData: ScheduleData = {
    "departments": {
      "FED-1": {
        "student_coordinator": {
          "name": "M.HOMESH",
          "roll_no": "24KN1A42B3",
          "class": "CSM -B",
          "phone": "7013028648"
        },
        "faculty_coordinator": {
          "name": "Dr B Sri Hari Rao",
          "phone": "9293786399"
        },
        "events": {
          "Maths": "Math Magic Show",
          "English": "Declamation"
        }
      },
      "FED-2": {
        "faculty_coordinator": {
          "name": "Dr. G. Srinivasa Rao",
          "phone": "9866391041"
        },
        "student_coordinator": {
          "name": "R Madhu Venkata Sai Ganesh",
          "phone": "9666485544"
        },
        "events": {
          "Physics": "Rebus Puzzles in Physics",
          "Chemistry": "Poster presentation - Role of advanced materials in engineering"
        }
      },
      "CSE": {
        "faculty_coordinators": [
          { "name": "Mr.N.V.Satyanarayana", "phone": "9885190561", "email": "satya4satya@gmail.com" },
          { "name": "Mr.P.Somaraju", "phone": "9703130583", "email": "somaraju.p@nriit.edu.in" }
        ],
        "student_coordinator": {
          "name": "Mr.M.Sravan",
          "phone": "8317634794",
          "email": "sravanmandava1126@gmail.com"
        },
        "events": ["Code Sankalp", "Avishkar Anveshan", "Logo Quiz", "Bug War"]
      },
      "CSE-DS": {
        "faculty_coordinator": {
          "name": "Mr. B. Phanindra Kumar",
          "phone": "9014260174"
        },
        "student_coordinator": {
          "name": "K.Sripathi Rao",
          "phone": "8328109217"
        },
        "events": [
          "Technical Quiz",
          "Blind Coding",
          "Gen AI Models Expo",
          "Idea To Prototype Challenge"
        ]
      },
      "CSE-AIML": {
        "faculty_coordinator": {
          "name": "Mr.Rajenra",
          "phone": "9494367464"
        },
        "student_coordinator": {
          "name": "Mr. N.Bhogeeswar",
          "phone": "8309298044"
        },
        "events": ["Paper Presentation", "Poster Presentation", "Project Expo", "Code Hackathon"]
      },
      "AIML": {
        "faculty_coordinator": {
          "name": "Dr. Y. Arpitha",
          "phone": "9493468888"
        },
        "student_coordinator": {
          "name": "K. Sai Harsha",
          "phone": "9985584854"
        },
        "events": ["Code & Quest", "Ideathon", "Prompt Perfect", "PPT Challenge"]
      },
      "ECE": {
        "faculty_coordinator": {
          "name": "Gottipati Srinivas Babu",
          "phone": "9492273639",
          "email": "srinivasababug@nriit.edu.in"
        },
        "student_coordinator": {
          "name": "K Maanas Reddy",
          "phone": "9515739145",
          "email": "maanasr116@gmail.com"
        },
        "events": ["Technical Quiz", "Technical Paper Presentations", "Poster Presentations", "Project Expo"]
      },
      "EEE": {
        "faculty_coordinator": {
          "name": "Mr.R.Raghu Nadha Sastry",
          "phone": "9490337572"
        },
        "student_coordinator": {
          "name": "MATTA BALA VENKATA SAI",
          "phone": "7207219186"
        },
        "events": ["Poster Presentation", "Paper Presentation", "Technical Quiz", "Electrical Project Expo"]
      },
      "Mechanical": {
        "faculty_coordinator": {
          "name": "Mrs. CH. Srilatha",
          "phone": "8985140500",
          "email": "srilatha@nriit.edu.in"
        },
        "student_coordinator": {
          "name": "Mr. N. Bharath",
          "phone": "8247329390",
          "email": "bharathnaraga@gmail.com"
        },
        "events": ["Technical Paper Presentation", "Project Expo", "Thrust Rocket", "CAD Builder"]
      },
      "Civil": {
        "faculty_coordinator": {
          "name": "A Sai Chandu",
          "phone": "9346799566"
        },
        "student_coordinator": {
          "name": "Santi Swaroop",
          "phone": "9573496479"
        },
        "events": ["Poster Presentation", "Paper Presentation", "Technical Quiz", "CAD Crusade"]
      },
      "IT": {
        "faculty_coordinator": {
          "name": "Smt.G.Baleswari",
          "phone": "8500275537"
        },
        "student_coordinator": {
          "name": "T.Revanth",
          "phone": "8886168440"
        },
        "events": [
          "INNOVISTAS",
          "Creative Exhibit",
          "Bytes And Bits Quiz",
          "Next Gen Ideas"
        ]
      },
      "MBA": {
        "faculty_coordinator": {
          "name": "Dr.K.Chinni Krishna",
          "phone": "9393363615"
        },
        "student_coordinator": {
          "name": "D. Aravind",
          "phone": "9010655815"
        },
        "events": ["Young Manager", "Market Makers", "Bizz Quiz"]
      }
    }
  };

  const renderEvents = (events: string[] | Record<string, string>) => {
    if (Array.isArray(events)) {
      return events.map((event, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-2 text-emerald-300"
        >
          <Award className="w-4 h-4" />
          <span>{event}</span>
        </motion.li>
      ));
    } else {
      return Object.entries(events).map(([subject, event], index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-2 text-emerald-300"
        >
          <Award className="w-4 h-4" />
          <span>
            <strong className="text-teal-400">{subject}:</strong> {event}
          </span>
        </motion.li>
      ));
    }
  };

  return (
    <section className="relative py-20 overflow-hidden" id="schedule">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full mix-blend-screen filter blur-xl"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(147,51,234,0.3)' : i === 1 ? 'rgba(59,130,246,0.3)' : 'rgba(236,72,153,0.3)'} 0%, transparent 70%)`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Decorative icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -top-10 -translate-x-1/2 w-20 h-20 opacity-20"
          >
            <Star className="absolute top-0 left-0 w-6 h-6 text-purple-400" />
            <Music2 className="absolute top-0 right-0 w-6 h-6 text-blue-400" />
            <Star className="absolute bottom-0 left-0 w-6 h-6 text-pink-400" />
            <Music2 className="absolute bottom-0 right-0 w-6 h-6 text-purple-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold relative">
            <span className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-50 blur-xl animate-pulse" />
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Department Events
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(scheduleData.departments).map(([deptName, deptData], index) => (
            <motion.div
              key={deptName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              <button
                onClick={() => setSelectedDept(deptName)}
                className="relative w-full text-left overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      {deptName}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-gray-400 mb-2">
                    {Array.isArray(deptData.events) ? deptData.events.length : Object.keys(deptData.events).length} Events
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{deptData.faculty_coordinators ? deptData.faculty_coordinators.length : 1} Coordinator(s)</span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedDept && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedDept(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-8 max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-50" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      {selectedDept}
                    </h3>
                    <button
                      onClick={() => setSelectedDept(null)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-purple-400" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Faculty Coordinators */}
                    <div>
                      <h4 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                        <GraduationCap className="w-5 h-5 mr-2 text-purple-400" />
                        Faculty Coordinator(s)
                      </h4>
                      <div className="space-y-3">
                        {scheduleData.departments[selectedDept].faculty_coordinators ? (
                          scheduleData.departments[selectedDept].faculty_coordinators!.map((coord, index) => (
                            <div key={index} className="flex flex-col space-y-1">
                              <span className="text-white">{coord.name}</span>
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-1" />
                                  {coord.phone}
                                </span>
                                {coord.email && (
                                  <span className="flex items-center">
                                    <Mail className="w-4 h-4 mr-1" />
                                    {coord.email}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="flex flex-col space-y-1">
                            <span className="text-white">
                              {scheduleData.departments[selectedDept].faculty_coordinator.name}
                            </span>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span className="flex items-center">
                                <Phone className="w-4 h-4 mr-1" />
                                {scheduleData.departments[selectedDept].faculty_coordinator.phone}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Student Coordinator */}
                    <div>
                      <h4 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                        <School className="w-5 h-5 mr-2 text-purple-400" />
                        Student Coordinator
                      </h4>
                      <div className="flex flex-col space-y-1">
                        <span className="text-white">
                          {scheduleData.departments[selectedDept].student_coordinator.name}
                        </span>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {scheduleData.departments[selectedDept].student_coordinator.phone}
                          </span>
                          {scheduleData.departments[selectedDept].student_coordinator.email && (
                            <span className="flex items-center">
                              <Mail className="w-4 h-4 mr-1" />
                              {scheduleData.departments[selectedDept].student_coordinator.email}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Events */}
                    <div>
                      <h4 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                        <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                        Events
                      </h4>
                      <ul className="space-y-2">
                        {renderEvents(scheduleData.departments[selectedDept].events)}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Schedule;