import { indexPayload } from '../../lib/site';

// 검색·필터용 가벼운 목록 (수식 HTML 없음)
export function GET() {
  return new Response(JSON.stringify(indexPayload()), { headers: { 'Content-Type': 'application/json' } });
}
