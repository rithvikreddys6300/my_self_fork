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

1. Fork this repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Docker

```bash
# Build the Docker image
docker build -t resume-to-site-builder .

# Run the container
docker run -p 3000:3000 --env-file .env resume-to-site-builder
```

### Manual Deployment

1. Build the application: `pnpm build`
2. Start the production server: `pnpm start`

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

## 📞 Support

- 📖 [Documentation](https://github.com/your-username/resume-to-site-builder/wiki)
- 🐛 [Bug Reports](https://github.com/your-username/resume-to-site-builder/issues)
- 💬 [Discussions](https://github.com/your-username/resume-to-site-builder/discussions)

---

**⭐ If you find this project helpful, please give it a star!**
