"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Globe, ExternalLink } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "카페 모던",
    category: "카페/베이커리",
    description: "따뜻하고 모던한 분위기의 카페 홈페이지",
    thumbnail: "/placeholder-cafe.jpg",
    site_url: "https://example.com",
    tags: ["반응형", "메뉴표"],
  },
  {
    id: 2,
    title: "미용실 아름",
    category: "미용/뷰티",
    description: "세련되고 전문적인 미용실 홈페이지",
    thumbnail: "/placeholder-salon.jpg",
    site_url: "https://example.com",
    tags: ["반응형"],
  },
  {
    id: 3,
    title: "따뜻한 국밥",
    category: "음식점",
    description: "마음을 데우는 진한 국밥 한 그릇",
    thumbnail: "/gukbap-thumbnail.jpg.png",
    site_url: "https://guideyoon.github.io/my-homapage/",
    tags: ["반응형", "메뉴표"],
  },
  {
    id: 4,
    title: "요가 스튜디오",
    category: "헬스/운동",
    description: "자연스럽고 편안한 요가 스튜디오 홈페이지",
    thumbnail: "/placeholder-yoga.jpg",
    site_url: "https://example.com",
    tags: ["반응형"],
  },
  {
    id: 5,
    title: "의류 매장",
    category: "패션/의류",
    description: "트렌디한 의류 매장 홈페이지",
    thumbnail: "/placeholder-fashion.jpg",
    site_url: "https://example.com",
    tags: ["반응형"],
  },
  {
    id: 6,
    title: "애견 미용실",
    category: "반려동물",
    description: "사랑스러운 애견 미용실 홈페이지",
    thumbnail: "/placeholder-pet.jpg",
    site_url: "https://example.com",
    tags: ["반응형"],
  },
];

const categories = [
  "전체",
  "카페/베이커리",
  "미용/뷰티",
  "음식점",
  "헬스/운동",
  "패션/의류",
  "반려동물",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredItems =
    selectedCategory === "전체"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
          <div className="mx-auto max-w-3xl text-center space-y-6 mb-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          포트폴리오
        </h1>
        <p className="text-xl text-purple-600">
          다양한 업종의 실제 제작 사례를 확인하세요
        </p>
          </div>
          </ScrollAnimation>
          
          {/* Filter Section */}
          <ScrollAnimation direction="fade" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`mb-2 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0"
                    : "border-2 border-slate-400 text-slate-700 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900 bg-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="w-full bg-slate-50 py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <ScrollAnimation key={item.id} direction="up" delay={index * 100}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow group bg-white border-2 border-slate-300 shadow-sm">
              <div className="aspect-video bg-slate-100 flex items-center justify-center relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <Globe className="h-16 w-16 text-slate-400 opacity-30" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
              </div>
              <CardHeader className="flex-1 flex flex-col pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="text-sm text-purple-600 font-semibold mb-1">
                      {item.category}
                    </div>
                    <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
                  </div>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-slate-600 hover:text-slate-900"
                >
                  <a
                    href={item.site_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="사이트 보기"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                </div>
                <CardDescription className="text-slate-700">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-purple-50 border border-purple-200 rounded-md text-purple-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
          </div>
        </div>
      </div>

      {filteredItems.length === 0 && (
        <ScrollAnimation direction="fade">
          <div className="w-full text-center py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <p className="text-slate-700 text-lg">
                해당 카테고리의 포트폴리오가 없습니다.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      )}

      {/* CTA Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
        <ScrollAnimation direction="up">
          <Card className="border border-slate-200 bg-white shadow-md">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl text-slate-900">
              이런 홈페이지가 필요하신가요?
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              무료 상담을 통해 맞춤형 제작을 시작하세요
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

