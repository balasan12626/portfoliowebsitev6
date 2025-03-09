import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Database, Brain, Code, ChevronDown, ExternalLink, Sun, Moon } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.body.style.backgroundColor = theme === 'dark' ? '#111827' : '#ffffff';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-3 rounded-full transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-900'
        }`}
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 stagger-children">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Hello, I'm BALA, a Data Analyst 

            </h1>
            <p className={`text-xl sm:text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-3xl`}>
            passionate about transforming raw data into actionable insights through advanced analytics and AI solutions.            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
                Get in Touch
              </a>
              <a href="#projects" className={`border ${
                theme === 'dark' ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'
              } px-6 py-3 rounded-lg font-medium transition`}>
                View Projects
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </header>

      {/* Skills Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            <div className={`p-6 rounded-xl transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
              <Terminal className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Java, C++, Python, C, JavaScript
              </p>
            </div>
            <div className={`p-6 rounded-xl transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
              <Database className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                SQL, Pandas, NumPy, Data Visualization,NOSQL
              </p>
            </div>
            <div className={`p-6 rounded-xl transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
              <Brain className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Deep Learning, AI Agents, Neural Networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <div className={`rounded-xl overflow-hidden transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Data Analysis Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI-Powered Data Analysis Platform</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Built a comprehensive data analysis platform using Python and Machine Learning algorithms.
                </p>
                <div className="flex space-x-2 mt-4">
                  <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm">TensorFlow</span>
                </div>
              </div>
            </div>
            <div className={`rounded-xl overflow-hidden transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80"
                alt="ML Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Predictive Analytics System</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Developed a predictive analytics system for real-time market analysis.
                </p>
                <div className="flex space-x-2 mt-4">
                  <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">PYTHON</span>
                  <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-sm">ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 stagger-children">
            <a href="https://github.com/balasan12626" target="https://github.com/balasan12626" rel="noopener noreferrer" 
              className={`flex items-center space-x-2 ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } transition`}>
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/balakarthikeyan02122005" target="_blank" rel="noopener noreferrer"
              className={`flex items-center space-x-2 ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } transition`}>
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a href="sbb202122005@gmail.com"
              className={`flex items-center space-x-2 ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } transition`}>
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Contact Form */}
      <footer className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-bold">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`mt-1 block w-full rounded-md px-4 py-2 transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500'
                    } focus:outline-none focus:ring-2 focus:border-transparent`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`mt-1 block w-full rounded-md px-4 py-2 transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500'
                    } focus:outline-none focus:ring-2 focus:border-transparent`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`mt-1 block w-full rounded-md px-4 py-2 transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500'
                    } focus:outline-none focus:ring-2 focus:border-transparent`}
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Salem,TN</p>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>India</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Phone: +91 8778725356</p>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Email: sbb202122005@gmail.com</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/balasan12626+" target="_blank" rel="noopener noreferrer" 
                    className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}>
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/balakarthikeyan02122005" target="_blank" rel="noopener noreferrer"
                    className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition`}>
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 pt-8 border-t ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          } text-center ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            <p>© 2025 Balakarthikeyan Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;