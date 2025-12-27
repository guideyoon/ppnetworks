"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ArrowRight, CheckCircle2, Globe, Zap, Users, Star, MessageCircle, Palette, Code, Rocket } from "lucide-react";

export default function Home() {
  // Background images array
  const backgroundImages = [
    "/hero-bg.jpg",
    "/hero-bg2.jpg",
    "/hero-bg3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5초마다 변경

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
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
      title: "카페 모던",
      category: "카페/베이커리",
      description: "따뜻하고 모던한 분위기의 카페 홈페이지",
      thumbnail: "/cafemorden.png",
      site_url: "https://cafemorden.vercel.app/",
    },
    {
      id: 2,
      title: "미용실 아름",
      category: "미용/뷰티",
      description: "세련되고 전문적인 미용실 홈페이지",
      thumbnail: "/sum.png",
      site_url: "https://arm-salon.vercel.app/",
    },
    {
      id: 3,
      title: "따뜻한 국밥",
      category: "음식점",
      description: "마음을 데우는 진한 국밥 한 그릇",
      thumbnail: "/gukbap-thumbnail.jpg.png",
      site_url: "https://guideyoon.github.io/my-homapage/",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "상담 및 요구사항 확인",
      description: "고객의 니즈를 파악하고 맞춤형 솔루션을 제안합니다",
      icon: MessageCircle,
    },
    {
      number: 2,
      title: "디자인 제안 및 확정",
      description: "브랜드 아이덴티티에 맞는 디자인을 제안하고 확정합니다",
      icon: Palette,
    },
    {
      number: 3,
      title: "제작 및 리뷰",
      description: "체계적인 프로세스로 제작하고 중간 리뷰를 진행합니다",
      icon: Code,
    },
    {
      number: 4,
      title: "최종 검수 및 오픈",
      description: "완성된 홈페이지를 검수하고 성공적으로 오픈합니다",
      icon: Rocket,
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 relative overflow-hidden">
        {/* Background Images with Crossfade Effect */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                transitionDelay: index === currentImageIndex ? '0ms' : '0ms',
              }}
            />
          ))}
          {/* Overlay - Reduced opacity for sharper image */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="fade">
          <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl leading-tight">
            <span className="text-slate-900">소상공인을 위한</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              전문
            </span>
            <span className="text-slate-900"> 홈페이지 </span>
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              제작
            </span>
          </h1>
          <p className="text-xl text-slate-600 md:text-2xl max-w-2xl mx-auto leading-relaxed">
            신뢰할 수 있는 제작 사례와 합리적인 가격으로
            <br />
            여러분의 비즈니스를 온라인에서 시작하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-md">
              <Link href="/contact">
                무료 상담 신청
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-2 border-slate-700 bg-white/90 text-slate-900 hover:bg-white hover:border-slate-900 backdrop-blur-sm">
              <Link href="/portfolio">포트폴리오 보기</Link>
            </Button>
          </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <ScrollAnimation direction="fade">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                  왜 피플네트웍스인가요?
                </h2>
                <p className="text-lg text-slate-600">
                  소상공인을 위한 특화된 서비스로 시작하세요
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 100}>
                  <Card className="h-full text-center bg-white border-slate-300 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="mx-auto mb-4 text-purple-600">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-slate-900 text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-slate-700">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-7xl">
            <ScrollAnimation direction="fade">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                  <span className="text-sm font-semibold text-purple-700">제작 프로세스</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
                <span className="block mb-2">명확하고 체계적인</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                    제작 과정
                  </span>
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  단계별 명확한 진행 과정으로 고객과 함께 성장합니다
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.number} className="relative">
                      <ScrollAnimation direction="up" delay={index * 100}>
                        <div className="group relative flex flex-col h-full min-h-[320px] p-10 rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-4 transition-all duration-700 cursor-pointer overflow-hidden">
                          {/* Animated Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-purple-50/0 to-purple-100/0 group-hover:from-purple-50/40 group-hover:via-purple-50/20 group-hover:to-white transition-all duration-700"></div>
                          
                          {/* Decorative Corner Accent */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/0 to-purple-100/0 group-hover:from-purple-100/30 group-hover:to-transparent rounded-bl-full transition-all duration-700"></div>
                          
                          <div className="relative z-10 flex flex-col items-center text-center h-full">
                            {/* Number Badge - Modern Design */}
                            <div className="relative mb-8">
                              {/* Outer Glow Effect */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-30 blur-2xl group-hover:blur-3xl transition-all duration-700 scale-50 group-hover:scale-150"></div>
                              
                              {/* Main Number Circle */}
                              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white shadow-2xl shadow-purple-500/40 group-hover:scale-110 group-hover:shadow-purple-500/60 group-hover:rotate-6 transition-all duration-700">
                                <span className="text-3xl font-bold group-hover:opacity-0 transition-none">{step.number}</span>
                              </div>
                              
                              {/* Icon Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-none">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md">
                                  <IconComponent className="h-8 w-8 text-white" strokeWidth={2.5} />
                                </div>
                              </div>
                            </div>
                            
                            {/* Step Title */}
                            <h3 className="font-bold text-slate-900 text-xl mb-4 group-hover:text-purple-700 transition-colors duration-500 leading-tight">
                              {step.title}
                            </h3>
                            
                            {/* Step Description */}
                            <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-500 flex-grow max-w-[240px]">
                              {step.description}
                            </p>
                            
                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-full"></div>
                            
                            {/* Progress Indicator */}
                            <div className="mt-6 w-full max-w-[200px] h-1 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
          <ScrollAnimation direction="fade">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                제작 사례
              </h2>
              <p className="text-lg text-white/90">
                실제로 제작한 다양한 업종의 홈페이지
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {portfolioItems.map((item, index) => (
              <ScrollAnimation key={item.id} direction="up" delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-lg transition-all bg-white border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video bg-slate-100 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-purple-600 mb-2 font-semibold">
                      {item.category}
                    </div>
                    <CardTitle className="text-slate-900">{item.title}</CardTitle>
                    <CardDescription className="text-slate-600">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation direction="fade" delay={300}>
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-purple-600 hover:border-white transition-all duration-300">
                <Link href="/portfolio">
                  더 많은 포트폴리오 보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
          <ScrollAnimation direction="up">
            <Card className="border border-slate-200 bg-white shadow-md">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl md:text-4xl text-slate-900">
                지금 바로 시작하세요
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                무료 상담을 통해 맞춤형 홈페이지 제작을 시작하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-md">
                  <Link href="/contact">
                    무료 상담 신청하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500" />
                  무료 상담
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500" />
                  빠른 견적
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500" />
                  전문 제작
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}
