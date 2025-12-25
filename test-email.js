// 이메일 발송 테스트 스크립트
// 터미널에서 실행: node test-email.js

require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    console.log('이메일 발송 테스트 시작...');
    console.log('API Key:', process.env.RESEND_API_KEY ? '설정됨' : '없음');
    console.log('받을 이메일:', process.env.CONTACT_EMAIL);

    const { data, error } = await resend.emails.send({
      from: 'PEOPLENETWORKS <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      subject: '테스트 이메일 - 피플네트웍스',
      html: '<p>이것은 테스트 이메일입니다.</p>',
    });

    if (error) {
      console.error('❌ 오류:', error);
      return;
    }

    console.log('✅ 이메일 발송 성공!');
    console.log('응답:', data);
  } catch (err) {
    console.error('❌ 예외 발생:', err);
  }
}

testEmail();



