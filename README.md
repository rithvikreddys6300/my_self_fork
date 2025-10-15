# Resume to Website Builder

An open-source application that transforms resumes/CVs into professional websites using AI. Built with modern web technologies and designed to be easily customizable and deployable.

![Resume to Website Builder Preview](./public/og.png)

## ✨ Features

- **AI-Powered Processing** - Upload a PDF resume and get a professional website in minutes
- **Customizable Design** - Clean, responsive design that works on all devices
- **User Authentication** - Secure user accounts and profile management
- **Privacy Focused** - Your data stays secure with proper content moderation
- **Open Source** - Fully open source and self-hostable

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Upstash Redis
- **AI Processing**: Together.ai (Llama 3.3)
- **File Storage**: AWS S3
- **Deployment**: Vercel
- **UI Components**: Radix UI, Lucide React

## 📋 Prerequisites

Before running this project, you'll need accounts for:

1. [Together.ai](https://together.ai) - For AI processing
2. [Clerk](https://clerk.dev) - For authentication
3. [Upstash](https://upstash.com) - For Redis database
4. [AWS](https://aws.amazon.com) - For S3 file storage

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/resume-to-site-builder.git
   cd resume-to-site-builder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .example.env .env
   ```
   
   Fill in the required environment variables in `.env`:
   
   ```env
   # Required: AI Processing
   TOGETHER_API_KEY=your_together_ai_api_key
   
   # Required: Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Required: Database
   UPSTASH_REDIS_REST_URL=your_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_token
   
   # Required: File Storage
   S3_UPLOAD_REGION=us-east-1
   S3_UPLOAD_KEY=your_aws_access_key
   S3_UPLOAD_SECRET=your_aws_secret_key
   S3_UPLOAD_BUCKET=your_s3_bucket_name
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🔧 Configuration

### Site Customization

The application is designed to be easily customizable. Main configuration is in `config/site.ts`:

```typescript
export const siteConfig = {
  name: 'ResumeToSite',
  displayName: 'Resume to Website Builder',
  description: 'Transform your resume into a professional website instantly.',
  url: 'https://your-domain.com',
  // ... more configuration options
}
```

### Environment Variables

All environment variables are documented in `.example.env`. Key variables include:

- `NEXT_PUBLIC_SITE_*` - Site branding and configuration
- `TOGETHER_API_KEY` - AI processing (required)
- `CLERK_*` - User authentication (required)
- `UPSTASH_*` - Database connection (required)
- `S3_UPLOAD_*` - File storage (required)

## 🏗️ How It Works

1. **Upload**: Users upload their resume as a PDF
2. **Processing**: AI extracts and structures the resume data
3. **Generation**: A professional website is generated from the structured data
4. **Customization**: Users can edit and customize their generated website
5. **Publishing**: The website is made available at a custom URL

## 📖 Usage Guide

### Step-by-Step Tutorial

#### 1. Getting Started
Once you have the application running locally or deployed:

1. **Access the Application**
   - Navigate to your application URL (e.g., `http://localhost:3000`)
   - You'll see the main landing page with the upload interface

2. **Create an Account** (if authentication is enabled)
   - Click "Sign In" or "Get Started"
   - Create an account using Clerk authentication
   - Verify your email if required

#### 2. Uploading Your Resume

1. **Prepare Your Resume**
   - Ensure your resume is in PDF format
   - File size should be under 10MB for optimal processing
   - Use a standard resume format for best results

2. **Upload Process**
   ```bash
   # Supported file formats
   - PDF (recommended)
   - Maximum file size: 10MB
   - Standard resume layouts work best
   ```

3. **Click "Upload Your Resume"**
   - Drag and drop your PDF file or click to browse
   - Wait for the upload confirmation

#### 3. AI Processing

The AI will automatically:
- Extract personal information (name, contact details)
- Parse work experience and employment history
- Identify education background
- Detect skills and competencies
- Extract projects and achievements
- Structure all data for web presentation

Processing typically takes 30-60 seconds depending on resume complexity.

#### 4. Website Generation

After processing, you'll receive:
- A fully responsive website
- Clean, professional design
- Mobile-optimized layout
- SEO-friendly structure
- Custom URL (e.g., `yoursite.com/john-doe`)

#### 5. Customization Options

**Design Customization:**
```typescript
// Available themes and layouts
- Professional theme (default)
- Creative theme
- Minimal theme
- Dark mode support
```

**Content Editing:**
- Edit any extracted information
- Add or remove sections
- Reorder content blocks
- Add custom sections
- Update contact information

**Advanced Features:**
- Custom domain integration (if configured)
- Social media links
- Portfolio integration
- Contact form setup

### API Usage (for developers)

If you want to integrate with the API directly:

#### Upload Resume
```bash
curl -X POST "http://localhost:3000/api/upload" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@/path/to/resume.pdf"
```

#### Get Processed Data
```bash
curl -X GET "http://localhost:3000/api/resume/USER_ID" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

#### Update Website Content
```bash
curl -X PUT "http://localhost:3000/api/website/USER_ID" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Name", "title": "New Title"}'
```

### Common Use Cases

1. **Job Seekers**
   - Create a professional online presence
   - Share a clean, accessible version of your resume
   - Stand out with a custom website URL

2. **Freelancers**
   - Showcase skills and experience professionally
   - Easy to share with potential clients
   - Mobile-friendly for on-the-go networking

3. **Career Changers**
   - Present your background in a modern format
   - Highlight transferable skills effectively
   - Create multiple versions for different industries

4. **Students/Graduates**
   - Build your first professional website
   - Showcase academic projects and achievements
   - Create a lasting first impression

### Tips for Best Results

1. **Resume Quality**
   - Use clear, readable fonts
   - Maintain consistent formatting
   - Include all relevant sections (experience, education, skills)
   - Use standard section headers

2. **Content Optimization**
   - Review extracted data for accuracy
   - Add missing information manually
   - Customize the design to match your style
   - Update contact information if needed

3. **Website Maintenance**
   - Regular updates as you gain new experience
   - Keep contact information current
   - Add new projects and skills
   - Monitor website analytics (if enabled)

### Troubleshooting

**Upload Issues:**
- Ensure PDF is not password-protected
- Check file size is under 10MB
- Try different browsers if upload fails
- Clear browser cache and cookies

**Processing Errors:**
- Verify all environment variables are set
- Check API rate limits
- Ensure AI service (Together.ai) is accessible
- Check server logs for detailed error messages

**Display Problems:**
- Clear browser cache
- Try incognito/private browsing mode
- Check for JavaScript errors in browser console
- Verify responsive design on different devices

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (private)/         # Protected routes
│   └── [username]/        # Dynamic user pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── resume/           # Resume-specific components
├── config/               # Configuration files
├── lib/                  # Utility functions and shared logic
├── public/               # Static assets
└── styles/               # Global styles
```

## 🔒 Security

- Content moderation using Llama Guard
- Secure file upload validation
- Rate limiting on API endpoints
- User authentication and authorization
- Input validation and sanitization

## 🚀 Deployment

### Vercel (Recommended)

1. **Fork this repository** to your GitHub account
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project" and import your forked repository
3. **Configure environment variables** in the Vercel dashboard:
   - Go to Settings > Environment Variables
   - Add all variables from your `.env` file
4. **Deploy!** - Vercel will automatically build and deploy your application

**Environment Variables for Vercel:**
```env
TOGETHER_API_KEY=your_together_ai_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
S3_UPLOAD_REGION=us-east-1
S3_UPLOAD_KEY=your_aws_access_key
S3_UPLOAD_SECRET=your_aws_secret_key
S3_UPLOAD_BUCKET=your_s3_bucket_name
```

### Docker Deployment

1. **Build the Docker image:**
   ```bash
   docker build -t resume-to-site-builder .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 --env-file .env resume-to-site-builder
   ```

3. **Docker Compose (optional):**
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       env_file:
         - .env
       restart: unless-stopped
   ```

### Manual Deployment

1. **Build the application:**
   ```bash
   pnpm build
   # or
   npm run build
   ```

2. **Start the production server:**
   ```bash
   pnpm start
   # or
   npm start
   ```

3. **Process Manager (PM2):**
   ```bash
   # Install PM2 globally
   npm install -g pm2
   
   # Start the application with PM2
   pm2 start npm --name "resume-builder" -- start
   
   # Save PM2 configuration
   pm2 save
   pm2 startup
   ```

### Cloud Provider Deployment

#### AWS (EC2/ECS)
1. Set up an EC2 instance or ECS cluster
2. Install Docker and docker-compose
3. Clone the repository and configure environment variables
4. Use Docker deployment method above

#### Google Cloud (Cloud Run)
1. Build and push Docker image to Google Container Registry
2. Deploy to Cloud Run with environment variables
3. Configure custom domain if needed

#### DigitalOcean (App Platform)
1. Connect your GitHub repository to DigitalOcean App Platform
2. Configure build and run commands
3. Add environment variables in the dashboard

### Environment Setup for Different Providers

#### Production Environment Variables
```env
# Next.js
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Site Name

# Security
NODE_ENV=production
NEXTAUTH_URL=https://yourdomain.com

# Database (production Redis)
UPSTASH_REDIS_REST_URL=https://your-production-redis-url
UPSTASH_REDIS_REST_TOKEN=your-production-token

# File Storage (production S3)
S3_UPLOAD_BUCKET=your-production-bucket
S3_UPLOAD_KEY=your-production-aws-key
S3_UPLOAD_SECRET=your-production-aws-secret
```

### Post-Deployment Checklist

- [ ] Verify all environment variables are set correctly
- [ ] Test file upload functionality
- [ ] Verify AI processing works
- [ ] Check database connectivity
- [ ] Test authentication flow
- [ ] Confirm responsive design on mobile devices
- [ ] Set up monitoring and logging
- [ ] Configure SSL/TLS certificates
- [ ] Set up custom domain (if applicable)
- [ ] Test error handling and edge cases

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and add tests if applicable
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Together.ai](https://together.ai) for providing AI processing capabilities
- [Clerk](https://clerk.dev) for authentication services
- [Upstash](https://upstash.com) for Redis database
- [Vercel](https://vercel.com) for hosting and deployment
- The open-source community for the amazing tools and libraries

## 📞 Support & Resources

### Documentation & Help
- 📖 [Complete Documentation](https://github.com/your-username/resume-to-site-builder/wiki)
- 🎥 [Video Tutorials](https://github.com/your-username/resume-to-site-builder/wiki/tutorials)
- 📚 [API Documentation](https://github.com/your-username/resume-to-site-builder/wiki/api)
- 🔧 [Configuration Guide](https://github.com/your-username/resume-to-site-builder/wiki/configuration)

### Community & Support
- 🐛 [Bug Reports](https://github.com/your-username/resume-to-site-builder/issues) - Report bugs and technical issues
- 💬 [Discussions](https://github.com/your-username/resume-to-site-builder/discussions) - General questions and community help
- 💡 [Feature Requests](https://github.com/your-username/resume-to-site-builder/issues/new?template=feature_request.md) - Suggest new features
- 🆘 [Get Help](https://github.com/your-username/resume-to-site-builder/discussions/categories/help) - Ask for assistance

### Development Resources
- 🏗️ [Development Setup](https://github.com/your-username/resume-to-site-builder/wiki/development)
- 🧪 [Testing Guide](https://github.com/your-username/resume-to-site-builder/wiki/testing)
- 🔄 [Contributing Guidelines](CONTRIBUTING.md)
- 📋 [Code of Conduct](CODE_OF_CONDUCT.md)

### Frequently Asked Questions

**Q: What file formats are supported for resume upload?**
A: Currently, only PDF format is supported. The file should be under 10MB for optimal processing.

**Q: How long does it take to process a resume?**
A: Processing typically takes 30-60 seconds, depending on the complexity and length of your resume.

**Q: Can I customize the generated website design?**
A: Yes! The application provides several customization options including themes, color schemes, and layout modifications.

**Q: Is my resume data secure?**
A: Absolutely. We implement content moderation, secure file handling, and proper data encryption. Your data is never shared with third parties.

**Q: Can I use my own domain?**
A: Yes, if you deploy your own instance of the application, you can configure custom domains.

**Q: Is there a limit to how many websites I can create?**
A: This depends on your deployment configuration and database limits. The open-source version doesn't impose artificial limits.

### Getting Started Checklist

For new users, follow this checklist to ensure smooth setup:

- [ ] **Prerequisites Met**
  - [ ] Node.js 18+ installed
  - [ ] Package manager (pnpm/npm/yarn) available
  - [ ] Git installed for version control

- [ ] **Accounts Created**
  - [ ] Together.ai account for AI processing
  - [ ] Clerk account for authentication
  - [ ] Upstash account for Redis database
  - [ ] AWS account for S3 storage

- [ ] **Environment Setup**
  - [ ] Repository cloned locally
  - [ ] Dependencies installed
  - [ ] Environment variables configured
  - [ ] Development server running

- [ ] **Testing**
  - [ ] Application loads at localhost:3000
  - [ ] File upload works
  - [ ] AI processing completes successfully
  - [ ] Generated website displays correctly
  - [ ] Authentication flow works (if enabled)

### Performance Optimization Tips

1. **Resume Preparation**
   - Use clear, readable fonts (Arial, Times New Roman, Calibri)
   - Keep file size under 5MB for faster processing
   - Use standard resume sections and headers
   - Avoid complex graphics or unusual layouts

2. **Application Performance**
   - Monitor Redis usage and optimize queries
   - Implement caching for frequently accessed data
   - Optimize image sizes and formats
   - Use CDN for static assets in production

3. **Deployment Optimization**
   - Enable gzip compression
   - Set up proper caching headers
   - Use environment-specific configurations
   - Monitor application metrics and logs

---

**⭐ If you find this project helpful, please give it a star!**
