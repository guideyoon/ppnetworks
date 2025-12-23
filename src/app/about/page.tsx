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

      {/* Story Section */}
      <section className="w-full mb-20 bg-slate-50 py-16">
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
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full mb-20 bg-white py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-900">우리의 가치</h2>
              <p className="text-lg text-slate-600">
                피플네트웍스가 지향하는 가치입니다
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <Card className="h-full text-center bg-white border-2 border-slate-300 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 text-purple-600">{value.icon}</div>
                <CardTitle className="text-slate-900 text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-700">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="w-full mb-20 bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
        <ScrollAnimation direction="up">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-slate-900">작업 방식</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-900">1. 상담 단계</h3>
                <p className="text-slate-600">
                  고객의 비즈니스, 목표, 예산을 파악하여 최적의 솔루션을 제안합니다.
                  무료 상담을 통해 부담 없이 시작할 수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-900">2. 개발 단계</h3>
                <p className="text-slate-600">
                  확정된 디자인을 바탕으로 안정적이고 빠른 웹사이트를 개발합니다.
                  중간 점검을 통해 진행 상황을 공유합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-slate-900">3. 오픈 및 지원</h3>
                <p className="text-slate-600">
                  최종 검수를 거쳐 사이트를 오픈합니다. 오픈 후에도 기본 유지보수와
                  기술 지원을 제공합니다.
                </p>
              </div>
          </CardContent>
        </Card>
        </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="w-full mb-12 bg-white py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-900">연락처 정보</h2>
              <p className="text-lg text-slate-600">
                언제든지 편하게 연락주세요
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up">
            <div className="flex justify-center">
              <Card className="max-w-xs bg-white border-slate-200 shadow-sm">
                <CardHeader className="text-center">
                  <a
                    href="https://open.kakao.com/o/sHtN7Mzh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:opacity-80 transition-opacity"
                  >
                    <CardTitle className="mb-3 text-slate-900">카카오톡</CardTitle>
                    <MessageCircle className="h-12 w-12 text-primary mb-2" />
                  </a>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href="https://open.kakao.com/o/sHtN7Mzh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-primary transition-colors inline-block"
                  >
                    1:1 상담하기
                  </a>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <div className="w-full bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollAnimation direction="up">
              <Card className="border-2 border-slate-300 bg-white shadow-md">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl text-slate-900">함께 시작하시겠어요?</CardTitle>
              <CardDescription className="text-lg text-slate-600">
                무료 상담을 통해 맞춤형 제안을 받아보세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="text-lg px-8">
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

