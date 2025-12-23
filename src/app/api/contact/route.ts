import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      businessType,
      location,
      purposes,
      pages,
      otherPage,
      referenceUrl1,
      referenceUrl2,
      otherRequests,
    } = body;

    // 필수 입력 검증
    if (!name || !phone || !businessType) {
      return NextResponse.json(
        { error: "필수 항목(이름, 연락처, 업종)을 입력해주세요." },
        { status: 400 }
      );
    }

    if (!purposes || purposes.length === 0) {
      return NextResponse.json(
        { error: "제작 목적을 최소 1개 이상 선택해주세요." },
        { status: 400 }
      );
    }

    if (!pages || pages.length === 0) {
      return NextResponse.json(
        { error: "필요한 페이지 구성을 최소 1개 이상 선택해주세요." },
        { status: 400 }
      );
    }

    // 이메일 형식 검증 (선택 항목이지만 입력된 경우)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "올바른 이메일 형식을 입력해주세요." },
          { status: 400 }
        );
      }
    }

    // 전화번호 형식 검증 (한국 전화번호)
    const phoneRegex = /^[0-9-]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "올바른 전화번호 형식을 입력해주세요." },
        { status: 400 }
      );
    }

    // 환경 변수 확인
    const contactEmail = process.env.CONTACT_EMAIL;
    console.log("받을 이메일 주소:", contactEmail);
    console.log("API 키 존재 여부:", !!process.env.RESEND_API_KEY);
    
    if (!contactEmail) {
      console.error("CONTACT_EMAIL 환경 변수가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 }
      );
    }
    
    // 이메일 주소 검증
    if (!contactEmail.includes('@')) {
      console.error("잘못된 이메일 주소:", contactEmail);
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    // Resend API 키 확인
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY 환경 변수가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    // 이메일 발송
    try {
      const { data, error } = await resend.emails.send({
        from: "PEOPLENETWORKS <onboarding@resend.dev>", // Resend에서 도메인 인증 후 변경 가능
        to: [contactEmail],
        subject: `[피플네트웍스] 새 문의 접수: ${name}님`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
            <div style="background: linear-gradient(to right, #a855f7, #9333ea); padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px;">
              <h1 style="color: white; margin: 0; font-size: 24px;">피플네트웍스 홈페이지 제작 문의</h1>
            </div>
            
            <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="color: #6b7280; margin-bottom: 24px; font-size: 14px;">새로운 홈페이지 제작 문의가 접수되었습니다.</p>
              
              <!-- 기본 정보 -->
              <div style="margin-bottom: 24px;">
                <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">1. 기본 정보</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td style="padding: 10px 0; color: #374151; font-weight: 600; width: 140px;">이름/상호명</td>
                    <td style="padding: 10px 0; color: #111827;">${name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td style="padding: 10px 0; color: #374151; font-weight: 600;">휴대폰 번호</td>
                    <td style="padding: 10px 0; color: #111827;">
                      <a href="tel:${phone}" style="color: #9333ea; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  ${email ? `
                  <tr>
                    <td style="padding: 10px 0; color: #374151; font-weight: 600;">이메일</td>
                    <td style="padding: 10px 0; color: #111827;">
                      <a href="mailto:${email}" style="color: #9333ea; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- 사업 정보 -->
              <div style="margin-bottom: 24px;">
                <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">2. 사업 정보</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td style="padding: 10px 0; color: #374151; font-weight: 600; width: 140px;">업종</td>
                    <td style="padding: 10px 0; color: #111827;">${businessType}</td>
                  </tr>
                  ${location ? `
                  <tr>
                    <td style="padding: 10px 0; color: #374151; font-weight: 600;">지역/위치</td>
                    <td style="padding: 10px 0; color: #111827;">${location}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- 제작 목적 -->
              <div style="margin-bottom: 24px;">
                <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">3. 제작 목적</h2>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${purposes.map((purpose: string) => `<li style="padding: 6px 0; color: #111827;">✓ ${purpose}</li>`).join('')}
                </ul>
              </div>

              <!-- 필요한 페이지 구성 -->
              <div style="margin-bottom: 24px;">
                <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">4. 필요한 페이지 구성</h2>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${pages.map((page: string) => {
                    if (page === "기타" && otherPage) {
                      return `<li style="padding: 6px 0; color: #111827;">✓ ${page}: ${otherPage}</li>`;
                    }
                    return `<li style="padding: 6px 0; color: #111827;">✓ ${page}</li>`;
                  }).join('')}
                </ul>
              </div>

              ${referenceUrl1 || referenceUrl2 ? `
              <!-- 참고 사이트 -->
              <div style="margin-bottom: 24px;">
                <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">5. 참고 사이트</h2>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${referenceUrl1 ? `<li style="padding: 6px 0;"><a href="${referenceUrl1}" style="color: #9333ea; text-decoration: none;" target="_blank">${referenceUrl1}</a></li>` : ''}
                  ${referenceUrl2 ? `<li style="padding: 6px 0;"><a href="${referenceUrl2}" style="color: #9333ea; text-decoration: none;" target="_blank">${referenceUrl2}</a></li>` : ''}
                </ul>
              </div>
              ` : ''}

              ${otherRequests ? `
              <!-- 기타 요청 사항 -->
              <div style="margin-bottom: 24px;">
                <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">6. 기타 요청 사항</h2>
                <p style="padding: 12px; background-color: #f9fafb; border-radius: 6px; color: #111827; white-space: pre-wrap; line-height: 1.6;">${otherRequests.replace(/\n/g, '<br>')}</p>
              </div>
              ` : ''}
              
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; margin: 0;">
                  접수 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
              <p>이 이메일은 피플네트웍스 홈페이지 문의 폼을 통해 자동으로 발송되었습니다.</p>
            </div>
          </div>
        `,
        replyTo: email || undefined, // 문의자의 이메일을 reply-to로 설정 (이메일이 있는 경우만)
      });

      if (error) {
        console.error("이메일 발송 오류:", error);
        return NextResponse.json(
          { 
            error: "이메일 발송 중 오류가 발생했습니다.",
            details: process.env.NODE_ENV === 'development' ? JSON.stringify(error) : undefined
          },
          { status: 500 }
        );
      }

      console.log("이메일 발송 성공:", data);

      // 성공 응답
      return NextResponse.json(
        { 
          success: true, 
          message: "문의가 성공적으로 접수되었습니다." 
        },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("이메일 발송 예외:", emailError);
      console.error("상세 오류:", JSON.stringify(emailError, null, 2));
      return NextResponse.json(
        { 
          error: "이메일 발송 중 오류가 발생했습니다. 다시 시도해주세요.",
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("문의 처리 오류:", error);
    return NextResponse.json(
      { error: "문의 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

