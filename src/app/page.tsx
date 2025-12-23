import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Globe, Zap, Users, Star } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "전문 제작",
      description: "소상공인에 최적화된 홈페이지 제작",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "빠른 구축",
      description: "빠른 제작 기간과 효율적인 프로세스",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "맞춤 서비스",
      description: "고객 맞춤형 디자인과 기능",
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "카페 홈페이지",
      category: "카페/베이커리",
      description: "따뜻한 분위기의 카페 홈페이지",
      thumbnail: "/placeholder-cafe.jpg",
    },
    {
      id: 2,
      title: "미용실 홈페이지",
      category: "미용/뷰티",
      description: "모던한 디자인의 미용실 홈페이지",
      thumbnail: "/placeholder-salon.jpg",
    },
    {
      id: 3,
      title: "레스토랑 홈페이지",
      category: "음식점",
      description: "세련된 레스토랑 홈페이지",
      thumbnail: "/placeholder-restaurant.jpg",
    },
  ];

  const processSteps = [
    "1. 상담 및 요구사항 확인",
    "2. 디자인 제안 및 확정",
    "3. 제작 및 리뷰",
    "4. 최종 검수 및 오픈",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl leading-tight">
            <span className="text-white">소상공인을 위한</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              전문
            </span>
            <span className="text-white"> 홈페이지 </span>
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              제작
            </span>
          </h1>
          <p className="text-xl text-slate-300 md:text-2xl max-w-2xl mx-auto leading-relaxed">
            신뢰할 수 있는 제작 사례와 합리적인 가격으로
            <br />
            여러분의 비즈니스를 온라인에서 시작하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/50">
              <Link href="/contact">
                무료 상담 신청
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400">
              <Link href="/portfolio">포트폴리오 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              왜 피플네트웍스인가요?
            </h2>
            <p className="text-lg text-slate-300">
              소상공인을 위한 특화된 서비스로 시작하세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              제작 프로세스
            </h2>
            <p className="text-lg text-slate-300">
              간단하고 명확한 제작 과정
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-slate-800 bg-slate-900/30 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-lg font-bold shadow-lg shadow-purple-500/30">
                  {index + 1}
                </div>
                <p className="font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              제작 사례
            </h2>
            <p className="text-lg text-slate-300">
              실제로 제작한 다양한 업종의 홈페이지
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-purple-500/30" />
                </div>
                <CardHeader>
                  <div className="text-sm text-purple-400 mb-2">
                    {item.category}
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-slate-300">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400">
              <Link href="/portfolio">
                더 많은 포트폴리오 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm shadow-xl shadow-purple-500/10">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl md:text-4xl text-white">
                지금 바로 시작하세요
              </CardTitle>
              <CardDescription className="text-lg text-slate-300">
                무료 상담을 통해 맞춤형 홈페이지 제작을 시작하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/50">
                  <Link href="/contact">
                    무료 상담 신청하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400" />
                  무료 상담
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400" />
                  빠른 견적
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400" />
                  전문 제작
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
