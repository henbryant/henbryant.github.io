'use strict';

const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const pageFiles = ['index.html', 'en.html', 'zh.html'];
const urls = pageFiles.map(file => {
    const html = fs.readFileSync(path.join(distPath, file), 'utf8');
    const links = [...html.matchAll(/<link\b[^>]*>/g)]
        .map(match => match[0])
        .filter(tag => /\brel="canonical"/.test(tag));
    const href = links.length === 1 && links[0].match(/\bhref="([^"]+)"/);
    if (!href) {
        throw new Error(`Expected one canonical URL in ${file}`);
    }
    const url = new URL(href[1].replace(/&amp;/g, '&'));
    if (url.protocol !== 'https:') {
        throw new Error(`Expected an absolute HTTPS canonical URL in ${file}`);
    }
    return url.href;
});

if (new Set(urls).size !== pageFiles.length) {
    throw new Error('Language pages must have distinct canonical URLs');
}

const escapeXml = value => value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
}[char]));

const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(url => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`),
    '</urlset>',
    ''
].join('\n');

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), xml, 'utf8');
console.log(`### INFO: Generated XML sitemap for ${urls.length} language pages`);
