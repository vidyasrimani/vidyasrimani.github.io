const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new Parser();

async function fetchMediumPosts() {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@vidyamani');
    const posts = feed.items.slice(0, 10); // Get latest 10 posts
    
    // Create content/writings/medium directory if it doesn't exist
    const mediumDir = 'content/writings/medium';
    if (!fs.existsSync(mediumDir)) {
      fs.mkdirSync(mediumDir, { recursive: true });
    }
    
    // Clear existing medium posts
    const existingFiles = fs.readdirSync(mediumDir);
    existingFiles.forEach(file => {
      if (file.endsWith('.md')) {
        fs.unlinkSync(path.join(mediumDir, file));
      }
    });
    
    // Create markdown files for each post
    posts.forEach((post, index) => {
      const title = post.title.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
      const filename = `medium-${index + 1}-${title}.md`;
      const filepath = path.join(mediumDir, filename);
      
      // Extract image from content if available
      const imgMatch = post.content.match(/<img[^>]+src="([^"]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : '';
      
      // Clean content
      const cleanContent = post.content.replace(/<[^>]*>/g, '').substring(0, 300) + '...';
      
      const markdown = `---
title: "${post.title}"
slug: medium-${index + 1}-${title}
category: writing
summary: ${cleanContent}
description: ${cleanContent}
cover:
  image: ${imageUrl || ''}
  alt: ${post.title}
  caption: 
  relative: true
showtoc: false
ShowReadingTime: false
draft: false
external_link: ${post.link}
---

# ${post.title}

${cleanContent}

[Read full article on Medium](${post.link})
`;
      
      fs.writeFileSync(filepath, markdown);
      console.log(`Created: ${filename}`);
    });
    
    console.log(`Successfully processed ${posts.length} Medium posts`);
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    process.exit(1);
  }
}

fetchMediumPosts(); 