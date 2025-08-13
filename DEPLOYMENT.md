# Nepal Heritage Site - Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nepal-heritage-site-web-app)

## 📋 Pre-Deployment Checklist

✅ **Completed:**
- [x] Production build tested (`npm run build` successful)
- [x] All features implemented and working
- [x] Images optimized and credited
- [x] SEO metadata configured
- [x] Responsive design tested
- [x] Accessibility features implemented

## 🛠 Deployment Options

### Option 1: Vercel (Recommended)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nepal Heritage Site"
   git branch -M main
   git remote add origin https://github.com/your-username/nepal-heritage-site-web-app.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Domain will be: `your-repo-name.vercel.app`

### Option 2: Netlify
1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Node Version:** 18.17.0+

### Option 3: Digital Ocean App Platform
1. **Runtime:** Node.js
2. **Build Command:** `npm run build`
3. **Run Command:** `npm start`

## 🌐 Custom Domain Setup

### Vercel Custom Domain:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provided

### DNS Configuration:
```
Type: CNAME
Name: www
Value: your-project.vercel.app

Type: A
Name: @
Value: 76.76.19.61 (Vercel's IP)
```

## 🔧 Environment Variables

Create these in your deployment platform:

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="Nepal UNESCO World Heritage"

# Optional
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA_MEASUREMENT_ID
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
```

## 📊 Performance Optimization

The site is already optimized with:
- ✅ Static generation for all pages
- ✅ Image optimization (unoptimized=true for reliability)
- ✅ Code splitting
- ✅ Compressed assets
- ✅ CDN delivery via Vercel Edge Network

## 🔍 Post-Deployment Testing

After deployment, verify:
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Map functionality works
- [ ] Cultural calendar loads
- [ ] Credits page shows attributions
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Lighthouse performance score

## 📈 Analytics Setup (Optional)

### Google Analytics 4:
1. Create GA4 property
2. Add `NEXT_PUBLIC_GOOGLE_ANALYTICS` environment variable
3. Analytics will auto-track page views

### Plausible Analytics:
1. Add domain to Plausible
2. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` environment variable
3. Privacy-friendly analytics active

## 🛡 Security Headers

Security headers are configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY  
- X-XSS-Protection: 1; mode=block
- Cache-Control for API routes

## 🎯 Production URLs

After deployment, your Nepal Heritage Site will be accessible at:
- **Vercel:** `https://nepal-heritage-site-web-app.vercel.app`
- **Custom Domain:** `https://your-domain.com`

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test production build locally: `npm run build && npm start`
4. Check Next.js deployment documentation

---

**Ready to showcase Nepal's incredible heritage to the world! 🇳🇵**
