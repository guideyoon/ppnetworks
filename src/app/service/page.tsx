import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicePage() {
  const pricingPlans = [
    {
      name: "베이직",
      price: "₩990,000",
      description: "소상공인을 위한 기본 홈페이지",
      features: [
        "반응형 디자인 (모바일/태블릿/PC)",
        "최대 5개 페이지",
        "기본 SEO 설정",
        "이메일 문의 폼",
        "SNS 링크 연결",
        "1회 무료 수정",
      ],
    },
    {
      name: "프리미엄",
      price: "₩1,990,000",
      description: "확장 기능이 포함된 고급 홈페이지",
      features: [
        "반응형 디자인 (모바일/태블릿/PC)",
        "최대 10개 페이지",
        "고급 SEO 설정",
        "문의 폼 + 예약 시스템",
        "SNS 연동",
        "블로그 기능",
        "구글 지도 연동",
        "3회 무료 수정",
      ],
    },
    {
      name: "커스텀",
      price: "견적 상담",
      description: "특별한 요구사항을 위한 맞춤 제작",
      features: [
        "모든 기본 기능 포함",
        "페이지 수 제한 없음",
        "커스텀 기능 개발",
        "전자상거래 연동 가능",
        "API 연동 가능",
        "전담 디자이너 배정",
      ],
    },
  ];

  const services = [
    {
      title: "디자인",
      description: "브랜드에 맞는 전문적인 디자인 제작",
      details: [
        "브랜드 아이덴티티 반영",
        "사용자 경험(UX) 최적화",
        "모던하고 세련된 디자인",
      ],
    },
    {
      title: "개발",
      description: "안정적이고 빠른 웹사이트 구축",
      details: [
        "최신 웹 기술 적용",
        "반응형 웹 디자인",
        "빠른 로딩 속도",
      ],
    },
    {
      title: "SEO",
      description: "검색 엔진 최적화로 노출도 향상",
      details: [
        "검색 엔진 최적화",
        "메타 태그 설정",
        "사이트맵 생성",
      ],
    },
    {
      title: "유지보수",
      description: "오픈 후에도 지속적인 지원",
      details: [
        "기본 유지보수 지원",
        "콘텐츠 업데이트 가이드",
        "기술 지원 제공",
      ],
    },
  ];

  const faqs = [
    {
      question: "제작 기간은 얼마나 걸리나요?",
      answer: "제작 기간은 2~3일 정도 소요되며, 작업 분량에 따라 달라질 수 있습니다.",
    },
    {
      question: "디자인 수정은 가능한가요?",
      answer: "네, 각 플랜마다 포함된 무료 수정 횟수가 있으며, 추가 수정이 필요한 경우 별도 견적을 제공합니다.",
    },
    {
      question: "호스팅과 도메인은 별도인가요?",
      answer: "호스팅과 도메인 비용은 별도입니다. 필요하시면 추천 호스팅 서비스를 안내해 드립니다.",
    },
    {
      question: "결제는 어떻게 하나요?",
      answer: "카드, 계좌이체 가능하며, 세금계산서는 안되며, 현금영수증은 가능합니다.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          서비스 안내
        </h1>
        <p className="text-xl text-muted-foreground">
          소상공인을 위한 전문 홈페이지 제작 서비스
        </p>
      </div>

      {/* Services Overview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">제공 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">제작 프로세스</h2>
          <p className="text-lg text-muted-foreground">
            단계별 명확한 진행 과정
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "1. 상담 및 요구사항 확인",
              "2. 디자인 제안 및 확정",
              "3. 제작 및 리뷰",
              "4. 최종 검수 및 오픈",
            ].map((step, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mx-auto">
                  {index + 1}
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="mb-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">가격 안내</h2>
          <p className="text-lg text-muted-foreground">
            목적에 맞는 플랜을 선택하세요
          </p>
        </div>
        가격 안내 내용은 추후 업데이트 예정
      </section> */}

      {/* FAQ Section */}
      <section className="mb-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">자주 묻는 질문</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Card className="max-w-2xl mx-auto border-2">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl">더 궁금한 점이 있으신가요?</CardTitle>
            <CardDescription className="text-lg">
              무료 상담을 통해 맞춤형 제안을 받아보세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">
                무료 상담 신청하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

