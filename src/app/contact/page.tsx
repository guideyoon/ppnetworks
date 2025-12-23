"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MessageCircle, CheckCircle2, Loader2, FileText, User, Building2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    location: "",
    purposes: [] as string[],
    pages: [] as string[],
    otherPage: "",
    referenceUrl1: "",
    referenceUrl2: "",
    otherRequests: "",
    privacyAgreement: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const businessTypes = [
    "음식점",
    "카페",
    "병원",
    "학원",
    "쇼핑몰",
    "서비스업",
    "기타",
  ];

  const purposes = [
    "매장 및 사업 홍보",
    "문의 또는 예약 증가",
    "브랜드 이미지 개선",
    "정보 제공용",
    "기타",
  ];

  const pageOptions = [
    "메인 페이지",
    "회사 또는 매장 소개",
    "서비스 또는 메뉴 소개",
    "오시는 길",
    "문의하기",
    "공지사항 또는 블로그",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // 필수 항목 검증
    if (!formData.name || !formData.phone || !formData.businessType || formData.purposes.length === 0 || formData.pages.length === 0 || !formData.privacyAgreement) {
      setError("필수 항목을 모두 입력해주세요.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "문의 전송에 실패했습니다.");
      }

      // 성공
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        businessType: "",
        location: "",
        purposes: [],
        pages: [],
        otherPage: "",
        referenceUrl1: "",
        referenceUrl2: "",
        otherRequests: "",
        privacyAgreement: false,
      });

      // 5초 후 메시지 숨기기
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "문의 전송 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (value: string, field: "purposes" | "pages") => {
    setFormData((prev) => {
      const currentValues = prev[field];
      const isChecked = currentValues.includes(value);
      return {
        ...prev,
        [field]: isChecked
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  const handlePrivacyAgreementChange = (checked: boolean) => {
    setFormData({
      ...formData,
      privacyAgreement: checked,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
          <div className="mx-auto max-w-3xl text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
          무료 상담 신청
        </h1>
        <p className="text-xl text-purple-600">
          부담없이 무료 상담 받으세요
        </p>
          </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Process Section */}
      <section className="w-full mb-12 bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">홈페이지 무료상담 프로세스</h2>
          </ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation direction="up" delay={0}>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-2xl font-bold shadow-md mb-4 mx-auto">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">고객 정보입력</h3>
                  <p className="text-slate-600 text-sm">우선 아래의 정보를 입력해주세요.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={100}>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-2xl font-bold shadow-md mb-4 mx-auto">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">고객문의 접수</h3>
                  <p className="text-slate-600 text-sm">온라인 혹은 전화로 홈페이지에 대한 고민과 요구사항 접수</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={200}>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-2xl font-bold shadow-md mb-4 mx-auto">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">견적안내</h3>
                  <p className="text-slate-600 text-sm">담당자 배정 및 방문 또는 온라인으로 상세사항 협의 후 견적서 제출</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full pb-16">
        <div className="flex justify-center px-4">
          <div className="w-full max-w-4xl">
        {/* Contact Form */}
        <ScrollAnimation direction="fade" delay={100}>
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-900">견적문의</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-purple-500 mx-auto" />
                  <h3 className="text-2xl font-semibold text-slate-900">문의가 접수되었습니다</h3>
                  <p className="text-slate-600">
                    빠른 시간 내에 연락드리겠습니다
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* 1. 기본 정보 */}
                  <div className="space-y-4 border-b border-slate-200 pb-6">
                    <h2 className="text-xl font-semibold text-slate-900">1. 기본 정보</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700">
                        이름 또는 상호명 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="홍길동 또는 (주)홍길동"
                        className="bg-white border-slate-300 text-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700">
                        휴대폰 번호 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-1234-5678"
                        className="bg-white border-slate-300 text-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">
                        이메일 주소
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="bg-white border-slate-300 text-slate-900"
                      />
                    </div>
                  </div>

                  {/* 2. 사업 정보 */}
                  <div className="space-y-4 border-b border-slate-200 pb-6">
                    <h2 className="text-xl font-semibold text-slate-900">2. 사업 정보</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessType" className="text-slate-700">
                        업종 선택 <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, businessType: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-white border-slate-300 text-slate-900">
                          <SelectValue placeholder="업종을 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-200">
                          {businessTypes.map((type) => (
                            <SelectItem
                              key={type}
                              value={type}
                              className="text-slate-900 focus:bg-slate-50"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-slate-700">
                        지역 또는 매장 위치
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="예: 서울시 강남구"
                        className="bg-white border-slate-300 text-slate-900"
                      />
                    </div>
                  </div>

                  {/* 3. 제작 목적 */}
                  <div className="space-y-4 border-b border-slate-200 pb-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      3. 제작 목적 <span className="text-destructive">*</span>
                    </h2>
                    <div className="space-y-3">
                      {purposes.map((purpose) => (
                        <div key={purpose} className="flex items-center space-x-2">
                          <Checkbox
                            id={`purpose-${purpose}`}
                            checked={formData.purposes.includes(purpose)}
                            onCheckedChange={() =>
                              handleCheckboxChange(purpose, "purposes")
                            }
                            className="border-slate-300"
                          />
                          <Label
                            htmlFor={`purpose-${purpose}`}
                            className="text-slate-700 font-normal cursor-pointer"
                          >
                            {purpose}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. 필요한 페이지 구성 */}
                  <div className="space-y-4 border-b border-slate-200 pb-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      4. 필요한 페이지 구성 <span className="text-destructive">*</span>
                    </h2>
                    <div className="space-y-3">
                      {pageOptions.map((page) => (
                        <div key={page} className="flex items-center space-x-2">
                          <Checkbox
                            id={`page-${page}`}
                            checked={formData.pages.includes(page)}
                            onCheckedChange={() => handleCheckboxChange(page, "pages")}
                            className="border-slate-300"
                          />
                          <Label
                            htmlFor={`page-${page}`}
                            className="text-slate-700 font-normal cursor-pointer"
                          >
                            {page}
                          </Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox
                          id="page-other"
                          checked={formData.pages.includes("기타")}
                          onCheckedChange={() => handleCheckboxChange("기타", "pages")}
                          className="border-slate-300"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor="page-other"
                            className="text-slate-700 font-normal cursor-pointer"
                          >
                            기타
                          </Label>
                          {formData.pages.includes("기타") && (
                            <Input
                              name="otherPage"
                              value={formData.otherPage}
                              onChange={handleChange}
                              placeholder="원하는 페이지를 입력해주세요"
                              className="mt-2 bg-white border-slate-300 text-slate-900"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5. 참고 사이트 */}
                  <div className="space-y-4 border-b border-slate-200 pb-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      5. 참고 사이트 (선택)
                    </h2>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="referenceUrl1" className="text-slate-700">
                          원하는 느낌 홈페이지 URL 1
                        </Label>
                        <Input
                          id="referenceUrl1"
                          name="referenceUrl1"
                          type="url"
                          value={formData.referenceUrl1}
                          onChange={handleChange}
                          placeholder="https://example.com"
                          className="bg-white border-slate-300 text-slate-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referenceUrl2" className="text-slate-700">
                          원하는 느낌 홈페이지 URL 2
                        </Label>
                        <Input
                          id="referenceUrl2"
                          name="referenceUrl2"
                          type="url"
                          value={formData.referenceUrl2}
                          onChange={handleChange}
                          placeholder="https://example.com"
                          className="bg-white border-slate-300 text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 6. 기타 요청 사항 */}
                  <div className="space-y-4 pb-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      6. 기타 요청 사항 (선택)
                    </h2>
                    <div className="space-y-2">
                      <Textarea
                        id="otherRequests"
                        name="otherRequests"
                        value={formData.otherRequests}
                        onChange={handleChange}
                        placeholder="추가 요청사항이 있으시면 자유롭게 작성해주세요..."
                        rows={4}
                        className="bg-white border-slate-300 text-slate-900"
                      />
                    </div>
                  </div>

                  {/* 개인정보 동의 */}
                  <div className="space-y-4 border-t border-slate-200 pt-6">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacyAgreement"
                        checked={formData.privacyAgreement}
                        onCheckedChange={handlePrivacyAgreementChange}
                        className="border-slate-300 mt-1"
                      />
                      <Label
                        htmlFor="privacyAgreement"
                        className="text-slate-700 font-normal cursor-pointer leading-relaxed"
                      >
                        개인정보 수집·이용에 동의합니다. <span className="text-destructive">*</span>
                      </Label>
                    </div>
                    <div className="pl-7 text-sm text-slate-600 space-y-2">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">수집하는 개인정보의 항목</h4>
                        <p className="text-xs">이름 또는 상호명, 휴대폰 번호, 이메일, 업종, 지역, 제작 목적, 필요한 페이지 구성, 참고 사이트, 기타 요청 사항</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">개인정보의 수집 및 이용목적</h4>
                        <p className="text-xs">서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 회원 관리</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">개인정보의 보유 및 이용기간</h4>
                        <p className="text-xs">개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/50 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        전송 중...
                      </>
                    ) : (
                      "문의하기"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="w-full bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollAnimation direction="fade" delay={200}>
                <Card className="bg-slate-900 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-white">다른 방법으로 연락하기</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-purple-500/10">
                        <Phone className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">전화</h3>
                        <p className="text-sm text-white/80">(문의 필요)</p>
                        <p className="text-xs text-white/70 mt-1">평일 09:00 - 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-purple-500/10">
                        <Mail className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">이메일</h3>
                        <p className="text-sm text-white/80">(문의 필요)</p>
                        <p className="text-xs text-white/70 mt-1">24시간 접수 가능</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-purple-500/10">
                        <MessageCircle className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">카카오톡</h3>
                        <p className="text-sm text-white/80">(문의 필요)</p>
                        <p className="text-xs text-white/70 mt-1">실시간 상담 가능</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation direction="fade" delay={300}>
                <Card className="bg-slate-900 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-white">빠른 응답 시간</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                        평일: 24시간 이내
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                        주말: 48시간 이내
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                        긴급 문의: 카카오톡 이용 권장
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
