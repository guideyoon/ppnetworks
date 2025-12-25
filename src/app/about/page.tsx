import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Target, Heart, Users, Award, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "목표 지향",
      description: "고객의 비즈니스 목표를 최우선으로 고려합니다",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "고객 중심",
      description: "고객의 성공이 우리의 성공입니다",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "신뢰",
      description: "투명하고 정직한 소통으로 신뢰를 구축합니다",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "품질",
      description: "최고 품질의 서비스를 제공하기 위해 노력합니다",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
          <div className="mx-auto max-w-3xl text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          회사 소개
        </h1>
        <p className="text-xl text-purple-600">
          소상공인과 함께 성장하는 피플네트웍스
        </p>
          </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Combined Sections with Fixed Background */}
      <div className="relative" style={{ minHeight: '100vh' }}>
        {/* Fixed Background Image */}
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: 'url(/s3.jpg)', zIndex: 0 }}></div>
        
        {/* Content Wrapper with z-index */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Story Section */}
          <section className="w-full mb-20 py-16">
            <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation direction="fade">
              <div className="prose prose-lg mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-slate-900">브랜드 스토리</h2>
                <div className="space-y-4 text-slate-700">
            <p>
              피플네트웍스는 소상공인들이 온라인에서 성공할 수 있도록 돕는 것을
              목표로 설립되었습니다. 많은 소상공인들이 전문적인 홈페이지 제작의
              높은 진입 장벽 때문에 어려움을 겪고 있다는 것을 알게 되었습니다.
            </p>
            <p>
              우리는 복잡하고 비싼 솔루션이 아닌, 소상공인에게 실제로 필요한
              기능만 담은 실용적이고 합리적인 홈페이지를 제공합니다. 각 업종의
              특성과 비즈니스 모델을 이해하고, 고객의 목표를 달성할 수 있도록
              최선을 다합니다.
            </p>
            <p>
              피플네트웍스와 함께 여러분의 비즈니스를 온라인에서도 빛나게
              만들어보세요.
            </p>
            </div>
              </div>
            </ScrollAnimation>
          </div>
          </section>

          {/* Values Section */}
          <section className="w-full mb-20 py-20">
            <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                <span className="text-sm font-semibold text-purple-700">우리의 가치</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
                피플네트웍스가 지향하는
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                  핵심 가치
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                고객과 함께 성장하기 위한 우리의 약속입니다
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <div className="group relative flex flex-col h-full min-h-[240px] p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-3 transition-all duration-500 cursor-default overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-purple-50/0 to-purple-100/0 group-hover:from-purple-50/40 group-hover:via-purple-50/20 group-hover:to-white transition-all duration-500"></div>
                  
                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100/0 to-purple-100/0 group-hover:from-purple-100/30 group-hover:to-transparent rounded-bl-full transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:shadow-purple-500/50 group-hover:rotate-3 transition-all duration-500">
                        {value.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 flex-grow">
                      {value.description}
                    </p>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          </section>
        </div>
      </div>

      {/* Approach Section */}
      <section className="w-full mb-20 bg-white py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation direction="fade">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <span className="text-sm font-semibold text-purple-700">작업 방식</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900 mb-4">
                  체계적인
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                    작업 프로세스
                  </span>
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  고객과 함께하는 단계별 명확한 진행 과정
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="space-y-6">
              {[
                {
                  number: 1,
                  title: "상담 단계",
                  description: "고객의 비즈니스, 목표, 예산을 파악하여 최적의 솔루션을 제안합니다. 무료 상담을 통해 부담 없이 시작할 수 있습니다.",
                },
                {
                  number: 2,
                  title: "개발 단계",
                  description: "확정된 디자인을 바탕으로 안정적이고 빠른 웹사이트를 개발합니다. 중간 점검을 통해 진행 상황을 공유합니다.",
                },
                {
                  number: 3,
                  title: "오픈 및 지원",
                  description: "최종 검수를 거쳐 사이트를 오픈합니다. 오픈 후에도 기본 유지보수와 기술 지원을 제공합니다.",
                },
              ].map((step, index) => (
                <ScrollAnimation key={step.number} direction="up" delay={index * 100}>
                  <div className="group relative flex items-start gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-500">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white text-2xl font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:shadow-purple-500/50 transition-all duration-500">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Left Border Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-l-2xl"></div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="w-full mb-12 bg-gradient-to-b from-white to-slate-50 py-12">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
            <div className="text-center space-y-3 mb-8">
              <h2 className="text-3xl font-bold text-slate-900">연락처 정보</h2>
              <p className="text-lg text-slate-600">
                언제든지 편하게 연락주세요
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up">
            <div className="flex justify-center">
              <a
                href="https://open.kakao.com/o/sHtN7Mzh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center max-w-xs w-full p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:border-purple-300 transition-all duration-500"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/0 to-purple-100/0 group-hover:from-purple-100/30 group-hover:to-transparent rounded-bl-full transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:shadow-purple-500/50 group-hover:rotate-3 transition-all duration-500 mb-4">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    카카오톡
                  </h3>
                  <p className="text-slate-600 group-hover:text-purple-600 transition-colors duration-300">
                    1:1 상담하기
                  </p>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
                </div>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollAnimation direction="up">
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl text-slate-900">함께 시작하시겠어요?</CardTitle>
              <CardDescription className="text-lg text-slate-600">
                무료 상담을 통해 맞춤형 제안을 받아보세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0">
                <Link href="/contact">무료 상담 신청하기</Link>
              </Button>
            </CardContent>
          </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

