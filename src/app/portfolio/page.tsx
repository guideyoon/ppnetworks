"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    title: "레스토랑 그릴",
    category: "음식점",
    description: "프리미엄 레스토랑 홈페이지",
    thumbnail: "/placeholder-restaurant.jpg",
    site_url: "https://example.com",
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
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          포트폴리오
        </h1>
        <p className="text-xl text-muted-foreground">
          다양한 업종의 실제 제작 사례를 확인하세요
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
              <Globe className="h-16 w-16 text-muted-foreground/50 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.category}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
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
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            해당 카테고리의 포트폴리오가 없습니다.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-2xl mx-auto text-center mt-16">
        <Card className="border-2">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl">
              이런 홈페이지가 필요하신가요?
            </CardTitle>
            <CardDescription className="text-lg">
              무료 상담을 통해 맞춤형 제작을 시작하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">무료 상담 신청하기</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

