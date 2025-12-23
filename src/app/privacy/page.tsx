import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "개인정보처리방침 | 피플네트웍스",
  description: "피플네트웍스 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">개인정보</span>
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                처리방침
              </span>
            </h1>
            <p className="text-slate-400 text-lg">
              피플네트웍스는 고객의 개인정보를 보호하기 위해 최선을 다하고 있습니다.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              시행일자: 2024년 1월 1일
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제1조 (개인정보의 처리 목적)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  피플네트웍스(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <div className="space-y-2">
                  <p><strong className="text-purple-300">1. 홈페이지 제작 서비스 제공</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>홈페이지 제작 문의 접수 및 상담</li>
                    <li>홈페이지 제작 및 유지보수 서비스 제공</li>
                    <li>서비스 관련 안내 및 공지사항 전달</li>
                  </ul>
                  
                  <p className="mt-4"><strong className="text-purple-300">2. 고객 관리</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>고객 문의 및 불만 처리</li>
                    <li>서비스 개선을 위한 고객 만족도 조사</li>
                    <li>서비스 이용에 대한 통계 및 분석</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제2조 (개인정보의 처리 및 보유기간)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <div className="space-y-2">
                  <p><strong className="text-purple-300">1. 홈페이지 제작 서비스 문의 및 상담</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>보유기간: 문의 접수일로부터 3년 또는 서비스 제공 완료 후 1년</li>
                    <li>보유근거: 전자상거래법, 소비자 기본법 등 관련 법령</li>
                  </ul>
                  
                  <p className="mt-4"><strong className="text-purple-300">2. 서비스 제공 완료 후</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>관련 법령에 따라 보존이 필요한 경우: 해당 법령에서 정한 기간</li>
                    <li>정보주체의 동의 철회 시: 즉시 파기 (단, 법령에 따라 보존이 필요한 경우 제외)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제3조 (처리하는 개인정보의 항목)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                <div className="space-y-2">
                  <p><strong className="text-purple-300">1. 필수 항목</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>이름 또는 상호명</li>
                    <li>휴대폰 번호</li>
                    <li>업종 정보</li>
                    <li>제작 목적</li>
                    <li>필요한 페이지 구성 정보</li>
                  </ul>
                  
                  <p className="mt-4"><strong className="text-purple-300">2. 선택 항목</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>이메일 주소</li>
                    <li>지역 또는 매장 위치</li>
                    <li>참고 사이트 URL</li>
                    <li>기타 요청 사항</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제4조 (개인정보의 제3자 제공)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                </p>
                <p className="text-slate-400">
                  현재 회사는 개인정보를 제3자에게 제공하지 않습니다. 다만, 향후 서비스 제공을 위해 필요할 경우 관련 법령을 준수하여 정보주체의 동의를 받은 후 제공할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제5조 (개인정보처리의 위탁)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                </p>
                <div className="space-y-2">
                  <p><strong className="text-purple-300">1. 이메일 발송 서비스</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>수탁업체: Resend (resend.com)</li>
                    <li>위탁업무 내용: 문의 접수 이메일 발송</li>
                    <li>개인정보 항목: 이름, 연락처, 이메일 주소, 문의 내용</li>
                  </ul>
                </div>
                <p className="text-slate-400 mt-4">
                  회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제6조 (정보주체의 권리·의무 및 행사방법)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>정보주체는 다음과 같은 권리를 행사할 수 있습니다.</p>
                <div className="space-y-2">
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>개인정보 처리정지 요구</li>
                    <li>개인정보 열람 요구</li>
                    <li>개인정보 정정·삭제 요구</li>
                    <li>개인정보 처리정지 요구</li>
                  </ul>
                </div>
                <p className="text-slate-400 mt-4">
                  위의 권리 행사는 회사에 대해 개인정보 보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제7조 (개인정보의 파기)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                </p>
                <div className="space-y-2">
                  <p><strong className="text-purple-300">1. 파기 절차</strong></p>
                  <p className="text-slate-400 ml-4">
                    정보주체가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                  </p>
                  
                  <p className="mt-4"><strong className="text-purple-300">2. 파기 방법</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                    <li>종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제8조 (개인정보 보호책임자)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-slate-800/50 p-4 rounded-lg space-y-2">
                  <p><strong className="text-purple-300">개인정보 보호책임자</strong></p>
                  <ul className="list-none space-y-1 text-slate-400">
                    <li>이메일: peoplenetworks.help@gmail.com</li>
                  </ul>
                </div>
                <p className="text-slate-400 mt-4">
                  정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제9조 (개인정보의 안전성 확보조치)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                <div className="space-y-2">
                  <ul className="list-disc list-inside ml-4 space-y-1 text-slate-400">
                    <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                    <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                    <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">제10조 (개인정보 처리방침 변경)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <p>
                  이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 홈페이지의 공지사항을 통하여 고지할 것입니다.
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg p-6 mt-8">
              <p className="text-slate-300 text-center">
                개인정보 처리방침과 관련하여 궁금한 사항이 있으시면 언제든지 문의해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

