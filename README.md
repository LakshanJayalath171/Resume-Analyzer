🔍 ResumeLens AI — AI-Powered Resume Analyzer

ResumeLense is a AI-powered resume analyzer application that helps job seekers understand, evaluate, and improve their resumes. By combining AI-driven insights with resume parsing, it identifies strengths, highlights areas for improvement, and provides actionable recommendations to help users create more effective, ATS-friendly resumes.

✨ Features

📄 PDF Resume Upload — Upload your resume in PDF format for analysis.
🤖 AI-Powered Analysis — Extract and analyze resume information using Google Gemini AI.
📊 ATS Score — Get a score out of 100 to evaluate your resume.
💪 Strengths & Weaknesses — Identify strong points and areas that need improvement.
✍️ AI Resume Suggestions — Receive recommendations to improve your resume content and bullet points.
🔑 Keyword Gap Analysis — Discover potentially missing skills and keywords.
👤 User Authentication — Secure sign-in and account management with Clerk.
☁️ Cloud Storage — Store uploaded resumes and AI enhanced resume files using Cloudinary.
🗂️ Analysis History — Save and revisit previous resume analyses.
📱 Responsive UI — Access the application across desktop and mobile devices.

🛠️ Tech Stack
Frontend
- React / Next.js
- Tailwind CSS
- JavaScript / TypeScript
Backend
- Node.js
- Express.js
- Multer — File upload handling
- pdf-parse — PDF text extraction
- Zod — AI response validation
Database & Authentication
- MongoDB
- Mongoose
- Clerk
AI & Storage
- Google Gemini API — Resume analysis
- Cloudinary — Resume file storage

🏗️ How It Works
- Sign in: Users authenticate through Clerk.
- Upload: The user uploads a resume in PDF format.
- Extract: The backend extracts readable text from the PDF.
- Analyze: The extracted content is sent to Gemini AI for structured analysis.
- Validate: The generated response is validated against the expected data structure.
- Calculate & evaluate: The application presents an ATS-style score and identifies strengths, weaknesses, and improvement opportunities.
- Review: Users view their results and can revisit saved analyses.

🎯 Project Goals

ResumeLens AI aims to make resume improvement more accessible by combining AI-powered feedback with a simple and intuitive user experience. And I hope to maintain this project as my first SAAS project.

This project also explores practical full-stack development concepts, including:

- REST API development
- Authentication and authorization
- MongoDB data modeling
- PDF processing and file uploads
- Third-party AI API integration
- Cloud file storage
- Input validation and error handling
- Responsive UI development


🚀 Future Improvements
- Build entire resume with AI (AI powered resume builder)
- Compare resumes against specific job descriptions.
- Provide more detailed ATS-style scoring categories.
- Generate improved resume bullet points.
- Export an enhanced resume as a PDF.
- Track changes between resume versions.
- Recommend relevant job opportunities.
- Support additional resume formats and languages.

⚠️ Disclaimer

ResumeLens AI provides AI-generated feedback for informational purposes only. Its ATS-style score is an estimate, not a universal industry-standard score, and does not guarantee interview selection or employment. Users should review AI-generated suggestions before applying them.

👨‍💻 Author

Your Name

- GitHub: LakshanJayalath171
- LinkedIn: Lakshan Jayalath

