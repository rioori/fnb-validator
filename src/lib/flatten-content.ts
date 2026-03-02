/**
 * Flatten structured content (KBTopic, BlogPost, Expert) into plain text for embedding.
 */
import type {
  KBTopic, KBSection, BlogPost, Expert,
  KBTableRow, KBStat, KBTimelineStep, KBWarningItem,
} from '@/types';

function flattenSection(section: KBSection): string {
  const heading = section.heading ? `${section.heading}\n` : '';

  switch (section.type) {
    case 'text':
      return heading + (section.content as string);
    case 'list':
      return heading + (section.content as string[]).map(item => `- ${item}`).join('\n');
    case 'table':
      return heading + (section.content as KBTableRow[])
        .map(row => `${row.label}: ${row.range} — ${row.note}`)
        .join('\n');
    case 'stat-grid':
      return heading + (section.content as KBStat[])
        .map(s => `${s.label}: ${s.value} — ${s.desc}`)
        .join('\n');
    case 'timeline':
      return heading + (section.content as KBTimelineStep[])
        .map(t => `${t.month} - ${t.title}: ${t.desc}`)
        .join('\n');
    case 'warning-list':
      return heading + (section.content as KBWarningItem[])
        .map(w => `[${w.severity}] ${w.title}: ${w.desc}`)
        .join('\n');
    default:
      return heading + String(section.content);
  }
}

export function flattenKBTopic(topic: KBTopic): string {
  const highlights = topic.highlights
    ? topic.highlights.map(h => `${h.label}: ${h.value}${h.note ? ` (${h.note})` : ''}`).join(', ')
    : '';
  const sections = topic.sections.map(flattenSection).join('\n\n');
  return [topic.title, topic.subtitle, highlights ? `Key: ${highlights}` : '', sections]
    .filter(Boolean).join('\n\n');
}

export function flattenBlogPost(post: BlogPost): string {
  const sections = post.sections.map(flattenSection).join('\n\n');
  return [post.title, post.excerpt, `Tags: ${post.tags.join(', ')}`, sections].join('\n\n');
}

export function flattenExpert(expert: Expert): string {
  return [
    expert.name,
    expert.descriptor,
    expert.shortBio,
    expert.fullBio,
    `Highlights: ${expert.highlights.join('; ')}`,
    expert.quotes.map(q => `"${q.text}" — ${q.source}`).join('\n'),
    expert.advice.map(a => `${a.title}: ${a.desc}`).join('\n'),
    `Tags: ${expert.tags.join(', ')}`,
  ].filter(Boolean).join('\n\n');
}
