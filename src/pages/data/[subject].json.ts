import { cardsIn, content } from '../../lib/site';

// 과목별 전체 카드 (KaTeX HTML 포함). 필요한 과목만 불러간다.
export function getStaticPaths() {
  return content().subjects.map((s) => ({ params: { subject: s.id } }));
}

export function GET({ params }: { params: { subject: string } }) {
  return new Response(JSON.stringify(cardsIn(params.subject)), { headers: { 'Content-Type': 'application/json' } });
}
