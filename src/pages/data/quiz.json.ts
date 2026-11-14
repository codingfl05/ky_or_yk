import { quizPayload } from '../../lib/site';

// 퀴즈 문제 (src/lib/quiz.ts)
export function GET() {
  return new Response(JSON.stringify(quizPayload()), { headers: { 'Content-Type': 'application/json' } });
}
